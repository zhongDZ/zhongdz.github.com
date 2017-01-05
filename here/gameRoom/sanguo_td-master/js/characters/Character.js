function Character (name, dir, strengthening) {
	var s = this;
	LExtends(s, LSprite, []);

	s.data = characterData[name];
	s.animaData = s.data.animationData;
	s.properties = s.data.properties;
	s.movingDir = dir || Character.DIR_RIGHT;
	s.isDied = false;
	s.isDebuting = false;
	s.isMoving = false;
	s.isAtk = false;
	s.isWaitingAtk = false;
	s.isPause = PauseBtn.MODE_PLAY;
	s.waitingAtkIndex = 0;
	s.currentAnima = null;
	s.strengthening = strengthening || 1;
	/** in order not to change property hp in orginal characterData, so define a variable to save it */
	s.hp = s.properties.hp * s.strengthening;
	s.maxHp = s.hp;
	/** in order not to change property stepLength in orginal characterData, so define a variable to save it */
	s.stepLength = s.properties.stepLength;
	s.hpBarLayer = null;
	s.beAtkRange = 50;

	if (s.data.isNormal) {
		name = "normal";
	}

	var animaBmpdList = {
		stand : new LBitmapData(dataList[name + "_stand"]),
		move : new LBitmapData(dataList[name + "_move"]),
		atk : new LBitmapData(dataList[name + "_atk"])
	},
	animaCoordList = {
		stand : LGlobal.divideCoordinate(animaBmpdList.stand.width, animaBmpdList.stand.height, 1, s.animaData.stand.col),
		move : LGlobal.divideCoordinate(animaBmpdList.move.width, animaBmpdList.move.height, 1, s.animaData.move.col),
		atk : LGlobal.divideCoordinate(animaBmpdList.atk.width, animaBmpdList.atk.height, 1, s.animaData.atk.col)
	};
	s.animaList = {
		stand : new LAnimationTimeline(animaBmpdList.stand, animaCoordList.stand),
		move : new LAnimationTimeline(animaBmpdList.move, animaCoordList.move),
		atk : new LAnimationTimeline(animaBmpdList.atk, animaCoordList.atk)
	};

	var sxc = s.data.scaleXCenter || 0;
	for (var k in s.animaList) {
		var o = s.animaList[k], d = s.animaData[k];

		o.x -= sxc;

		if (d.positionAdjustment) {
			var a = d.positionAdjustment;

			if (typeof a.x != UNDEFINED) {
				o.x += a.x;
			}
			if (typeof a.y != UNDEFINED) {
				o.y += a.y;
			}
		}

		o.speed = 2;
		s.addChild(o);
	}

	s.changeTo(Character.MODE_STAND);

	s.addEventListener(LEvent.ENTER_FRAME, s.loop);
	s.animaList.atk.addEventListener(LEvent.COMPLETE, function () {
		s.onAtkAnimaComplete();
	});

	var h = s.getHeight();
	s.y = -h;
	s.addShape(LShape.RECT, [0, -h * 2, s.properties.atkRange || 0, h * 5]);
}

Character.HP_RATIO_OURS = 1;
Character.HP_RATIO_ENEMIES = 1;

Character.STEP_LENGTH_RATIO_OURS = 1;
Character.STEP_LENGTH_RATIO_ENEMIES = 1;

Character.MODE_STAND = "stand";
Character.MODE_MOVE = "move";
Character.MODE_ATK = "atk";

Character.DIR_RIGHT = 1;
Character.DIR_LEFT = -1;

Character.LIST_OURS = new Array();
Character.LIST_ENEMIES = new Array();

Character.prototype.changeTo = function (m) {
	var s = this;

	s.scaleX = s.movingDir;

	for (var k in s.animaList) {
		var o = s.animaList[k];

		if (k == m) {
			o.visible = true;
			o.setAction(0, 0, 1);
			/** refresh the animation */
			o.onframe();
			o.play();

			s.currentAnima = o;
		} else {
			o.visible = false;
			o.stop();
		}
	}
};

Character.prototype.starkAtk = function () {
	var s = this;

	if (!s.isAtk) {
		s.isAtk = true;
		
		s.prepareAtk();
	}
};

Character.prototype.stopAtk = function () {
	var s = this;

	s.isAtk = false;
};

Character.prototype.prepareAtk = function () {
	var s = this;

	s.isWaitingAtk = false;
	s.waitingAtkIndex = 0;

	s.changeTo(Character.MODE_ATK);
	s.atkTargets(s.getAtkTargetList());
};

Character.prototype.onAtkAnimaComplete = function () {
	var s = this;

	s.isWaitingAtk = true;
	s.waitingAtkIndex = 0;

	s.changeTo(Character.MODE_STAND);

	if (typeof s.atkAnimaCompleteHandler == "function") {
		s.atkAnimaCompleteHandler();

		s.atkAnimaCompleteHandler = null;
	}
};

Character.prototype.atkTargets = function (list) {
	var s = this;

	if (!list || !list.length) {
		return;
	}

	var l = list.length, atkV = Math.round(s.properties.atkValue * s.strengthening / l);

	for (var i = 0; i < l; i++) {
		var o = list[i];

		if (o.lordFlag && !o.sendSOS) {
			var p = s.parent,
			pp = p ? p.parent : null,
			ppp = pp ? pp.parent : null;

			if (ppp) {
				o.sendSOS = true;
				
				ppp.addHint(lang.hint.LORD_IS_BEING_ATTACKED);
			}
		}

		o.hp -= atkV;

		if (o.hpBarLayer) {
			o.hpBarLayer.refresh(o.hp / o.maxHp);
		}

		if (o.hp <= 0) {
			o.beDied();
		}
	}
};

Character.prototype.isAtkThisCharacter = function (o) {
	var s = this, v, shapes = o.shapes.slice(0, o.shapes.length);

	o.clearShape();
	o.addShape(LShape.RECT, [-s.beAtkRange, 0, s.beAtkRange * 2, o.getHeight()]);

	v = !o.isDied && !o.isDebuting && s.hitTestObject(o);

	o.shapes = shapes;

	return v;
};

Character.prototype.loop = function (e) {
	var s = e.currentTarget;

	if (s.isDied || s.isPause) {
		return;
	}

	if (s.isMoving) {
		s.x += s.stepLength * s.movingDir;
	}

	if (s.isAtk && s.isWaitingAtk && s.waitingAtkIndex++ > s.properties.atkSpeed) {
		s.prepareAtk();
	}

	if (typeof s.loopHandler == "function") {
		s.loopHandler();
	}
};

Character.prototype.beDied = function () {
	var s = this;

	s.isDied = true;

	if (s.lordFlag || s.playerFlag) {
		var p = s.parent,
		pp = p ? p.parent : null,
		ppp = pp ? pp.parent : null;

		if (ppp && !ppp.isNotRun()) {
			ppp.gameOver(SceneInterface.GAME_LOSE);
		}
	}

	var handler = function () {
		s.changeTo(Character.MODE_STAND);
		s.removeFromCharacterList();

		LTweenLite.to(s, 1, {
			alpha : 0,
			onComplete : function (o) {
				o.remove();
			}
		});
	};

	if (s.isAtk && !s.isWaitingAtk) {
		s.atkAnimaCompleteHandler = handler;
	} else {
		handler();
	}
};

Character.prototype.removeFromCharacterList = function (list) {
	var s = this;

	if (!list) {
		return;
	}

	for (var i = 0, l = list.length; i < l; i++) {
		if (list[i].objectIndex == s.objectIndex) {
			list.splice(i, 1);

			break;
		}
	}
};

Character.prototype.setPause = function (v) {
	var s = this;

	s.isPause = v;

	if (v) {
		s.currentAnima.stop();
	} else {
		s.currentAnima.play();
	}
};

Character.prototype.getAtkTargetList = function () {
	return false;
};

Character.prototype.loopHandler = null;

Character.prototype.atkAnimaCompleteHandler = null;