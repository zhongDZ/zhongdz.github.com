function Player (name, strengthening) {
	var s = this;
	LExtends(s, Character, [name, Character.DIR_RIGHT, strengthening]);

	Character.LIST_OURS.push(s);

	s.playerFlag = true;
	/** a variable to control breaking waiting for atk animation and not to make player move */
	s.ignoreAtk = false;
	s.recoverySpeedIndex = 0;
	s.recoverySpeed = 10;
	s.x += s.data.scaleXCenter + 10;
	/** refreshing of hp bar is in function addPlayerHpBarLayer of SceneInterface */
	s.hp *= (Character.HP_RATIO_OURS <= 1) ? Character.HP_RATIO_OURS : 1;
	s.stepLength *= (Character.STEP_LENGTH_RATIO_OURS <= 1) ? Character.STEP_LENGTH_RATIO_OURS : 1;
}

Player.prototype.startMoving = function (dir) {
	var s = this;

	if (s.isDied) {
		return;
	}

	/** atk animation must be complete when the move animation starts, so I define a function to finish changing into move mode, and call the function in proper time */
	var handler = function () {
		s.movingDir = dir;
		s.ignoreAtk = true;
		s.stopAtk();
	};

	/** when atk animation is playing, set atkAnimaCompleteHandler to wait for atk animation stoping and when it stops start move animation */
	if (s.isAtk && !s.isWaitingAtk) {
		s.atkAnimaCompleteHandler = handler;

		return;
	}
	
	handler();
	s.isMoving = true;
};

Player.prototype.stopMoving = function () {
	var s = this;

	if (s.isDied) {
		return;
	}

	s.isMoving = false;
	s.ignoreAtk = false;
};

Player.prototype.loopHandler = function () {
	var s = this;

	/** when current animation is not atk animation, change into move animation when player call startMove, and change into stand animation when player call stopMove */
	if (!s.isAtk) {
		if (s.currentAnima.objectIndex != s.animaList.move.objectIndex && s.isMoving) {
			s.changeTo(Character.MODE_MOVE);
		} else if (s.currentAnima.objectIndex != s.animaList.stand.objectIndex && !s.isMoving) {
			s.changeTo(Character.MODE_STAND);
		}
	}

	if (s.recoverySpeedIndex++ > s.recoverySpeed) {
		s.recoverySpeedIndex = 0;
		s.hp += 1;

		if (s.hp > s.maxHp) {
			s.hp = s.maxHp;
		} else {
			s.hpBarLayer.refresh(s.hp / s.maxHp);
		}
	}

	if (!s.ignoreAtk) {
		var atl = s.getAtkTargetList();

		if (atl.length) {
			s.starkAtk();
		} else if (s.isAtk) {
			s.atkAnimaCompleteHandler = s.stopAtk;
		}
	}
};

Player.prototype.removeFromCharacterList = function () {
	this.callParent("removeFromCharacterList", [Character.LIST_OURS]);
};

Player.prototype.getAtkTargetList = function () {
	var s = this, list = new Array();

	for (var i = 0, l = Character.LIST_ENEMIES.length; i < l; i++) {
		if (!l) {
			break;
		}

		var o = Character.LIST_ENEMIES[i];

		if (s.isAtkThisCharacter(o) && o.movingDir == -s.movingDir) {
			list.push(o);
		}
	}

	return list;
};