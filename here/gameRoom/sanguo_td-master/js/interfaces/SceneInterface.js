function SceneInterface (data) {
	var s = this;
	LExtends(s, LSprite, []);

	if (typeof data.backgroundMusicIndex == UNDEFINED || !data.backgroundMusicIndex) {
		data.backgroundMusicIndex = 1;
	}

	playBackgroundMusic("scene_bgm" + data.backgroundMusicIndex);
	
	if (SelectingLevelInterface) {
		var si = SceneInterface,
		sli = SelectingLevelInterface,
		cd = sli.CURRENT_DIFFICULTY;
		
		if (cd == sli.DIFFICULTY_HEAVEN) {
			si.DIFFICULTY_FACTOR = 0.2;
		} else if (cd == sli.DIFFICULTY_EASY) {
			si.DIFFICULTY_FACTOR = 0.5;
		} else if (cd == sli.DIFFICULTY_NORMAL) {
			si.DIFFICULTY_FACTOR = 0.8;
		} else if (cd == sli.DIFFICULTY_HARD) {
			si.DIFFICULTY_FACTOR = 1.0;
		} else if (cd == sli.DIFFICULTY_EXPERT) {
			si.DIFFICULTY_FACTOR = 1.2;
		} else if (cd == sli.DIFFICULTY_SHURA) {
			si.DIFFICULTY_FACTOR = 1.5;
		}
	}

	s.data = data || {};
	s.isWin = false;
	s.isLose = false;
	s.isPause = PauseBtn.MODE_PLAY;
	s.isAllEnemiesPlay = false;
	s.startAddingEnemy = false;
	s.currentEnemyList = null;
	s.currentRoundIndex = 0;
	s.currentEnemyIndex = 0;
	s.loopIndex = 0;
	s.nextRoundSpeedIndex = s.data.nextRoundSpeed / 2;
	s.nextCharacterSpeedIndex = 0;
	s.bgBmp = null;
	s.charaLayer1 = null;
	s.charaLayer2 = null;
	s.charaLayer3 = null;
	s.charaLayer4 = null;
	s.charaLayer5 = null;
	s.charaLayer6 = null;
	s.charaLayer7 = null;
	s.charaLayer8 = null;
	s.player = null;
	s.lord = null;
	s.roundTotal = 0;
	s.rewardRatio = s.data.rewardRatio;
	s.money = s.data.initialMoney;
	s.roundBar = null;
	s.moneyTxt = null;
	s.pauseBtn = null;
	s.pauseMenuDlg = null;
	/** the distance between characters and edge */
	s.stageMargin = 100;
	s.isBurning = false;
	s.isFlooding = false;

	s.movingLayer = new LSprite();
	s.addChild(s.movingLayer);

	s.lightLayer = new LSprite();
	s.lightLayer.alpha = 0.2;
	s.addChild(s.lightLayer);

	s.overLayer = new LSprite();
	s.addChild(s.overLayer);

	s.infoLayer = new LSprite();
	s.overLayer.addChild(s.infoLayer);

	s.talkLayer = new LSprite();
	s.overLayer.addChild(s.talkLayer);

	s.hintLayer = new LSprite();
	s.overLayer.addChild(s.hintLayer);

	s.friendSelectorsLayer = new LSprite();
	s.overLayer.addChild(s.friendSelectorsLayer);

	s.talkManager = new TalkManager(s.talkLayer);
	s.talkManager.setTalkList(s.data.talks);
	
	s.initLightLayer();
	s.addBackground();
	s.addEffectLayer();
	s.addCharacterLayers();
	s.addLord();
	s.addPlayer();
	s.addPlayerHpBarLayer();
	s.addFriendSelectorLayer();
	s.addMoneyInfo();
	s.getRoundTotal();
	s.addRoundBar();
	s.addPauseBtn();
	s.addPauseMenuDlg();
	s.addCurtain();

	s.lightLayer.addEventListener(LMouseEvent.MOUSE_DOWN, s.mouseDown);
	s.addEventListener(LMouseEvent.MOUSE_UP, s.mouseUp);
	s.addEventListener(LEvent.ENTER_FRAME, s.loop);
}

SceneInterface.WIN_MEF_NAME = "win_mef";
SceneInterface.LOSE_MEF_NAME = "lose_mef";

SceneInterface.DIFFICULTY_FACTOR = 1;

SceneInterface.GAME_WIN = "win";
SceneInterface.GAME_LOSE = "lose";

SceneInterface.STRENGTHENING_VALUE_RISE = 2;
SceneInterface.STRENGTHENING_VALUE_BREAK_OUT = 3;

SceneInterface.prototype.initLightLayer = function () {
	var s = this, lightRect = [0, 0, LGlobal.width, LGlobal.height];

	s.lightLayer.graphics.clear();

	if (typeof s.data.lightColor != UNDEFINED) {
		s.lightLayer.graphics.drawRect(0, "", lightRect, true, s.data.lightColor);
	} else {
		s.lightLayer.graphics.drawRect(0, "", lightRect);
	}
};

SceneInterface.prototype.addBackground = function() {
	var s = this,
	hiddenWidth = (typeof s.data.backgroundHiddenWidth == UNDEFINED) ? 0 : s.data.backgroundHiddenWidth,
	offset = s.data.backgroundOffset,
	ox = ((typeof offset == UNDEFINED) ? 0 : offset.x) || 0,
	oy = ((typeof offset == UNDEFINED) ? 0 : offset.y) || 0;

	var bmpd = new LBitmapData(dataList[s.data.background]);
	bmpd.setProperties(-ox, -oy, bmpd.width + ox - hiddenWidth);
	s.bgBmp = new LBitmap(bmpd);
	s.movingLayer.addChild(s.bgBmp);
};

SceneInterface.prototype.addEffectLayer = function () {
	var s = this;

	s.effectLayer = new LSprite();
	s.movingLayer.addChild(s.effectLayer);
};

SceneInterface.prototype.addCharacterLayers = function() {
	var s = this;

	s.charaLayer1 = new LSprite();
	s.charaLayer1.y = 245;
	s.movingLayer.addChild(s.charaLayer1);
	
	s.charaLayer2 = new LSprite();
	s.charaLayer2.y = 260;
	s.movingLayer.addChild(s.charaLayer2);

	s.charaLayer3 = new LSprite();
	s.charaLayer3.y = 275;
	s.movingLayer.addChild(s.charaLayer3);

	s.charaLayer4 = new LSprite();
	s.charaLayer4.y = 290;
	s.movingLayer.addChild(s.charaLayer4);

	s.charaLayer5 = new LSprite();
	s.charaLayer5.y = 305;
	s.movingLayer.addChild(s.charaLayer5);

	s.charaLayer6 = new LSprite();
	s.charaLayer6.y = 320;
	s.movingLayer.addChild(s.charaLayer6);
	
	s.charaLayer7 = new LSprite();
	s.charaLayer7.y = 335;
	s.movingLayer.addChild(s.charaLayer7);

	s.charaLayer8 = new LSprite();
	s.charaLayer8.y = 350;
	s.movingLayer.addChild(s.charaLayer8);
};

SceneInterface.prototype.addLord = function () {
	var s = this,
	name = s.data.characters.ours.lord,
	sv = s.getStrengtheningValue(name);

	s.lord = new Lord(name, sv);
	s.charaLayer1.addChild(s.lord);

	s.addStrengtheningHint(sv, lang.hint.LORD, s.lord.data.name);
};

SceneInterface.prototype.addPlayer = function () {
	var s = this,
	name = s.data.characters.ours.player,
	sv = s.getStrengtheningValue(name);

	s.player = new Player(name, sv);
	s.charaLayer4.addChild(s.player);

	s.addStrengtheningHint(sv, lang.hint.PLAYER, s.player.data.name);
};

SceneInterface.prototype.addPlayerHpBarLayer = function () {
	var s = this;

	var hpBarLayer = new PlayerHpBar(s.data.characters.ours.player);
	hpBarLayer.x = hpBarLayer.y = 20;
	hpBarLayer.refresh(s.player.hp / s.player.maxHp);
	s.infoLayer.addChild(hpBarLayer);

	s.player.hpBarLayer = hpBarLayer;
};

SceneInterface.prototype.addEnemy = function (name) {
	var s = this, sv = s.getStrengtheningValue(name);

	var enemy = new Enemy(name, s.bgBmp.getWidth(), sv * SceneInterface.DIFFICULTY_FACTOR);
	s.getRandomCharacterLayer().addChild(enemy);

	s.addStrengtheningHint(sv, lang.hint.ENEMY, enemy.data.name);
};

SceneInterface.prototype.addFriendSelectorLayer = function () {
	var s = this;

	if (
		typeof s.data.characters == UNDEFINED
		|| typeof s.data.characters.ours == UNDEFINED
		|| typeof s.data.characters.ours.friends == UNDEFINED
	) {
		return;
	}

	var friendList = s.data.characters.ours.friends;
	/** define two variables to set a proper position for selector in order to fix the bug of that getting wrong size causes setting wrong position */
	var w = 0, h = 0;

	for (var i = 0, l = friendList.length; i < l; i++) {
		var name = friendList[i];

		var friendSelector = new FriendSelector(name);
		friendSelector.x = w;
		s.friendSelectorsLayer.addChild(friendSelector);

		w += friendSelector.face.faceW;

		if (!h) {
			h = friendSelector.face.faceH;
		}

		friendSelector.addEventListener(LMouseEvent.MOUSE_UP, function (e) {
			var f = e.currentTarget,
			name = f.face.characterName,
			c = f.cost;

			if (s.money - c >= 0) {
				s.changeMoney(-c);
				var o = s.addFriend(name);

				f.startDelaying(o);
			} else {
				s.addHint(lang.hint.MONEY_IS_NOT_ENOUGH);
			}
		});
	}

	s.friendSelectorsLayer.x = 20;
	s.friendSelectorsLayer.y = LGlobal.height - h - 20;
};

SceneInterface.prototype.addFriend = function (name) {
	var s = this;

	if (s.isNotRun()) {
		return null;
	}

	var sv = s.getStrengtheningValue(name);

	var friend = new Friend(name, 0, sv);
	s.getRandomCharacterLayer().addChild(friend);

	var fd = friend.data, fn = fd.name;

	if (name != "soldier1" && name != "soldier2" && name != "soldier3") {
		s.addHint(lang.hint.FIREND + fn + lang.hint.HAS_JOINED_IN_BATTLE);
	}

	s.addStrengtheningHint(sv, lang.hint.FIREND, fn);

	if (fd.isOnly) {
		return friend.objectIndex;
	}

	return null;
};

SceneInterface.prototype.addHint = function (content) {
	var s = this;

	if (s.isNotRun()) {
		return;
	}

	var hintObj = new Hint(content, 50);
	hintObj.x = (LGlobal.width - hintObj.getWidth()) / 2;
	s.hintLayer.addChild(hintObj);
};

SceneInterface.prototype.addStrengtheningHint = function (v, p, n) {
	var s = this;

	if (v == SceneInterface.STRENGTHENING_VALUE_RISE) {
		s.addHint(p + n + lang.hint.RISE);
	} else if (v == SceneInterface.STRENGTHENING_VALUE_BREAK_OUT) {
		s.addHint(p + n + lang.hint.BREAK_OUT);
	}
};

SceneInterface.prototype.getStrengtheningValue = function (v) {
	var s = this,
	c = s.data.characters,
	rouse = c.rouse,
	breakOut = c.breakOut,
	list = [
		{list : rouse, value : SceneInterface.STRENGTHENING_VALUE_RISE},
		{list : breakOut, value : SceneInterface.STRENGTHENING_VALUE_BREAK_OUT}
	];

	for (var k = 0, m = list.length; k < m; k++) {
		var item = list[k], il = item.list;

		if (typeof il == UNDEFINED) {
			continue;
		}

		for (var i = 0, l = il.length; i < l; i++) {
			if (il[i] == v) {
				return item.value;
			}
		}
	}

	return 1;
};

SceneInterface.prototype.getRandomCharacterLayer = function () {
	var s = this,
	layerList = [
		s.charaLayer1,
		s.charaLayer2,
		s.charaLayer3,
		s.charaLayer4,
		s.charaLayer5,
		s.charaLayer6,
		s.charaLayer7,
		s.charaLayer8
	],
	minNcLayer = layerList[0];

	for (var i = 0, l = layerList.length; i < l; i++) {
		var o = layerList[i];

		if (o.numChildren < minNcLayer.numChildren) {
			minNcLayer = o;
		}
	}

	return minNcLayer;
};

SceneInterface.prototype.mouseDown = function (e) {
	var s = e.currentTarget.parent;

	if (s.isNotRun()) {
		return;
	}

	if (e.offsetX > LGlobal.width / 2) {
		s.player.startMoving(Character.DIR_RIGHT);
	} else {
		s.player.startMoving(Character.DIR_LEFT);
	}
};

SceneInterface.prototype.mouseUp = function (e) {
	var s = e.currentTarget;

	if (s.isNotRun()) {
		return;
	}

	s.player.stopMoving();
};

SceneInterface.prototype.loop = function (e) {
	var s = e.currentTarget;

	Hint.removeHintsInRemoveList();

	/** set ours' max x */
	for (var i = 0, m = Character.LIST_OURS.length; i < m; i++) {
		if (m == 0) {
			break;
		}

		var o = Character.LIST_OURS[i],
		maxX = s.bgBmp.getWidth() - s.stageMargin - o.properties.atkRange;

		if (o && o.x > maxX) {
			o.x = maxX;

			if (!o.playerFlag && o.isMoving) {
				o.isKeepStanding = true;

				o.stopMoving();
			}
		}
	}

	/** set enemies' min x and when they get there, make them die */
	for (var i = 0, m = Character.LIST_ENEMIES.length; i < m; i++) {
		if (m == 0) {
			break;
		}

		var o = Character.LIST_ENEMIES[i];

		if (o && o.x < -150) {
			o.beDied();
		}
	}

	if (s.isNotRun()) {
		return;
	}

	/** next round */
	if (
		!s.isWin
		&& !s.isAllEnemiesPlay
		&& typeof s.data.characters != UNDEFINED
		&& typeof s.data.characters.enemies != UNDEFINED
	) {
		if (!s.startAddingEnemy && s.nextRoundSpeedIndex++ > s.data.nextRoundSpeed) {
			s.currentEnemyList = s.data.characters.enemies[++s.currentRoundIndex];

			if (s.currentEnemyList) {
				s.roundBar.refresh(s.currentRoundIndex / s.roundTotal);

				s.currentEnemyIndex = 0;
				s.startAddingEnemy = true;
				s.nextRoundSpeedIndex = 0;	
			}
		}

		if (s.startAddingEnemy && s.currentEnemyList && s.nextCharacterSpeedIndex++ > s.data.nextCharacterSpeed) {
			s.nextCharacterSpeedIndex = 0;

			s.addEnemy(s.currentEnemyList[s.currentEnemyIndex]);

			s.currentEnemyIndex++;

			if (s.currentEnemyIndex >= s.currentEnemyList.length) {
				s.currentEnemyList = null;
				s.startAddingEnemy = false;

				if (s.currentRoundIndex == s.roundTotal) {
					s.isAllEnemiesPlay = true;
				}
			}
		}
	}

	/** move background and set player's min x */
	if (s.player) {
		var nx = LGlobal.width / 2 - s.player.x;

		if (nx < 0 && nx > LGlobal.width - s.bgBmp.getWidth()) {
			s.movingLayer.x = nx;
		}

		var minX = s.player.data.scaleXCenter;
		if (s.player.x < minX) {
			s.player.x = minX;
		}
	}

	/** level events */
	s.loopIndex++;

	var events = s.data.events,
	enterFrameList = events ? events.enterFrame : null,
	roundList = events ? events.round : null;

	if (enterFrameList) {
		for (var i = 0, l = enterFrameList.length; i < l; i++) {
			var o = enterFrameList[i];

			if (!o.isExecuted && o.value == s.loopIndex) {
				s.executeLevelEventInstructions(o);
			}
		}
	}

	if (roundList) {
		for (var i = 0, l = roundList.length; i < l; i++) {
			var o = roundList[i];

			if (!o.isExecuted && o.value == s.currentRoundIndex) {
				s.executeLevelEventInstructions(o);
			}
		}
	}
};

SceneInterface.prototype.executeLevelEventInstructions = function (eo) {
	var s = this, oi = eo.instructions;

	for (var k = 0, n = oi.length; k < n; k++) {
		var item = oi[k], na = item.name, p = item.param;

		if (!item || typeof p == UNDEFINED) {
			continue;
		}

		if (na == "addFriend") {
			s.addFriend(p);
		} else if (na == "addHint") {
			s.addHint(p);
		} else if (na == "burn") {
			s.burnCharacters(p);
		} else if (na == "stopBurning") {
			s.stopBurningCharacters(p);
		} else if (na == "flood") {
			s.floodCharacters(p);
		} else if (na == "stopFlooding") {
			s.stopFloodingCharacters(p);
		} else if (na == "increaseMoneyBy") {
			s.changeMoney(Number(p));
		} else if (na == "increaseRewardRatioBy") {
			s.rewardRatio += Number(p);
		} else if (na == "addTalk") {
			s.talkManager.addToQueue(p);
		}
	}


	/** in order to make sure that instructions are executed once */
	eo.isExecuted = true;
};

SceneInterface.prototype.addMoneyInfo = function () {
	var s = this;

	var moneyInfoLayer = new LSprite();
	s.infoLayer.addChild(moneyInfoLayer);

	var iconBmp = new LBitmap(new LBitmapData(dataList["gold_ingot"]));
	moneyInfoLayer.addChild(iconBmp);

	s.moneyTxt = new Label();
	s.moneyTxt.x = iconBmp.getWidth() + 10;
	s.moneyTxt.y = 30;
	s.moneyTxt.color = "white";
	s.moneyTxt.size = 20;
	s.moneyTxt.lineWidth = 3;
	s.moneyTxt.lineColor = "#0088FF";
	s.moneyTxt.stroke = true;
	moneyInfoLayer.addChild(s.moneyTxt);

	s.changeMoney(0);

	moneyInfoLayer.x = LGlobal.width - moneyInfoLayer.getWidth() - 200;
	moneyInfoLayer.y = 30;
};

SceneInterface.prototype.addRoundBar = function () {
	var s = this;

	s.roundBar = new RoundBar();
	s.roundBar.x = LGlobal.width - s.roundBar.getWidth() - 20;
	s.roundBar.y = LGlobal.height - s.roundBar.getHeight() - 20;
	s.infoLayer.addChild(s.roundBar);
};

SceneInterface.prototype.getRoundTotal = function () {
	var s = this;

	for (var i in s.data.characters.enemies) {
		s.roundTotal++;
	}
};

SceneInterface.prototype.changeMoney = function (v) {
	var s = this;

	if (s.isNotRun()) {
		return;
	}

	s.money += Math.round(v);
	s.moneyTxt.text = s.money;
};

SceneInterface.prototype.addPauseBtn = function () {
	var s = this;

	s.pauseBtn = new PauseBtn();
	s.pauseBtn.x = LGlobal.width - s.pauseBtn.getWidth() - 30;
	s.pauseBtn.y = 40;
	s.overLayer.addChild(s.pauseBtn);
	s.pauseBtn.addEventListener(LMouseEvent.MOUSE_UP, function () {
		s.setPause(s.pauseBtn.mode);
	});
};

SceneInterface.prototype.setPause = function (v) {
	var s = this;

	s.isPause = v;

	if (v) {
		LTweenLite.pauseAll();

		if (s.pauseMenuDlg) {
			s.pauseMenuDlg.visible = true;
		}
	} else {
		LTweenLite.resumeAll();

		if (s.pauseMenuDlg) {
			s.pauseMenuDlg.visible = false;
		}
	}

	for (var i = 0, l = Character.LIST_OURS.length; i < l; i++) {
		if (!l) {
			break;
		}

		var chara = Character.LIST_OURS[i];

		if (!chara) {
			continue;
		}

		chara.setPause(v);
	}

	for (var j = 0, n = Character.LIST_ENEMIES.length; j < n; j++) {
		if (!n) {
			break;
		}

		var chara = Character.LIST_ENEMIES[j];

		if (!chara) {
			continue;
		}

		chara.setPause(v);
	}

	for (var z = 0, la = s.friendSelectorsLayer, t = la.numChildren; z < t; z++) {
		if (!t) {
			break;
		}

		var selector = la.getChildAt(z);

		if (!selector) {
			continue;
		}

		selector.isPause = v;
	}
	s.friendSelectorsLayer.mouseChildren = !v;

	s.talkManager.isPause = v;
};

SceneInterface.prototype.burnCharacters = function (ln) {
	var s = this, list = null, ratio = null, fp = s.data.firePosition;

	if (s.isBurning) {
		return;
	}

	if (ln == "ours") {
		list = Character.LIST_OURS;
		ratio = Character.HP_RATIO_OURS = 0.5;
	} else if (ln == "enemies") {
		list = Character.LIST_ENEMIES;
		ratio = Character.HP_RATIO_ENEMIES = 0.5;
	}

	if (list == null || ratio == null) {
		return;
	}

	s.isBurning = true;

	if (typeof fp != UNDEFINED) {
		for (var k = 0, l = fp.length; k < l; k++) {
			var o = fp[k];

			if (!o) {
				continue;
			}

			var fireObj = new Fire();
			fireObj.x = o.x || 0;
			fireObj.y = o.y || 0;
			s.effectLayer.addChild(fireObj);
		}
	}

	s.lightLayer.graphics.drawRect(0, "", [0, 0, LGlobal.width, LGlobal.height], true, "#FF3131");

	for (var i = 0, l = list.length; i < l; i++) {
		var c = list[i], toHp = c.maxHp * ratio;

		if (c.hp > toHp) {
			c.hp = toHp;

			c.hpBarLayer.refresh(c.hp / c.maxHp);
		}
	}
};

SceneInterface.prototype.stopBurningCharacters = function (ln) {
	var s = this, fp = s.data.firePosition;

	if (!s.isBurning) {
		return;
	}

	if (ln == "ours") {
		Character.HP_RATIO_OURS = 1;
	} else if (ln == "enemies") {
		Character.HP_RATIO_ENEMIES = 1;
	}

	s.isBurning = false;

	if (typeof fp != UNDEFINED) {
		var trls = new Array();

		for (var k = 0, l = s.effectLayer.numChildren; k < l; k++) {
			if (l == 0) {
				return;
			}

			var o = s.effectLayer.getChildAt(k);

			if (o && o.fireFlag) {
				trls.push(o);
			}
		}

		for (var t = 0, n = trls.length; t < n; t++) {
			if (n == 0) {
				return;
			}

			trls[t].remove();
		}
	}

	s.initLightLayer();
};

SceneInterface.prototype.floodCharacters = function (ln) {
	var s = this, list = null, ratio = null;

	if (s.isFlooding) {
		return;
	}

	if (ln == "ours") {
		list = Character.LIST_OURS;
		ratio = Character.STEP_LENGTH_RATIO_OURS = 0.5;
	} else if (ln == "enemies") {
		list = Character.LIST_ENEMIES;
		ratio = Character.STEP_LENGTH_RATIO_ENEMIES = 0.5;
	}

	if (list == null || ratio == null) {
		return;
	}

	s.isFlooding = true;

	s.lightLayer.graphics.drawRect(0, "", [0, 0, LGlobal.width, LGlobal.height], true, "#00FFCC");

	for (var i = 0, l = list.length; i < l; i++) {
		var c = list[i];

		c.stepLength *= ratio;
	}
};

SceneInterface.prototype.stopFloodingCharacters = function (ln) {
	var s = this, list = null, ratio = null;

	if (!s.isFlooding) {
		return;
	}

	if (ln == "ours") {
		list = Character.LIST_OURS;
		ratio = Character.STEP_LENGTH_RATIO_OURS = 2;
	} else if (ln == "enemies") {
		list = Character.LIST_ENEMIES;
		ratio = Character.STEP_LENGTH_RATIO_ENEMIES = 2;
	}

	if (list == null || ratio == null) {
		return;
	}

	s.isFlooding = false;

	s.initLightLayer();

	for (var i = 0, l = list.length; i < l; i++) {
		var c = list[i];

		c.stepLength *= ratio;
	}
};

SceneInterface.prototype.addPauseMenuDlg = function () {
	var s = this;

	s.pauseMenuDlg = new MenuDlg(lang.system.GAME_MENU, true);
	s.pauseMenuDlg.x = (LGlobal.width - s.pauseMenuDlg.dlgW) / 2;
	s.pauseMenuDlg.y = (LGlobal.height - s.pauseMenuDlg.dlgH) / 2;
	s.pauseMenuDlg.visible = false;
	s.overLayer.addChild(s.pauseMenuDlg);
};

SceneInterface.prototype.addCurtain = function () {
	var s = this;

	var curtainLayer = new LSprite();
	curtainLayer.graphics.drawRect(0, "", [0, 0, LGlobal.width, LGlobal.height], true, "black");
	s.addChild(curtainLayer);

	LTweenLite.to(curtainLayer, 0.5, {
		alpha : 0,
		onComplete : function (o) {
			o.remove();
		}
	});
};

SceneInterface.prototype.isNotRun = function () {
	var s = this;

	return s.isWin || s.isLose || s.isPause;
};

SceneInterface.prototype.gameOver = function (v) {
	var s = this, txt = "", mefn;

	if (s.pauseBtn) {
		s.pauseBtn.mouseEnabled = false;
		s.pauseBtn.mouseChildren = false;
	}

	if (s.player) {
		s.player.stopMoving();
	}

	s.friendSelectorsLayer.mouseChildren = false;

	var showMenuDlg = function (txt, mefn) {
		s.talkManager.isPause = PauseBtn.MODE_PAUSE;
		
		var menuDlg = new MenuDlg(txt);
		menuDlg.mouseChildren = false;
		menuDlg.x = (LGlobal.width - menuDlg.dlgW) / 2;
		menuDlg.y = -menuDlg.dlgH - 10;
		s.overLayer.addChild(menuDlg);

		LTweenLite.to(menuDlg, 0.5, {
			delay : 1,
			y : (LGlobal.height - menuDlg.dlgH) / 2,
			ease : Back.easeOut,
			onStart : function () {
				if (typeof mefn != UNDEFINED && mefn) {
					playMusicEffect(mefn, true, true);
				}
			},
			onComplete : function (o) {
				o.mouseChildren = true;
			}
		});
	};

	if (v == SceneInterface.GAME_WIN) {
		s.isWin = true;

		var whenWin = function () {
			var oll = SelectingLevelInterface.UNLOCKED_LEVELS_LIST,
			noll = SelectingLevelInterface.NEW_UNLOCKED_LEVELS_LIST,
			npll = SelectingLevelInterface.NOT_PASSED_LEVELS_LIST,
			unlockList = s.data.unlockLevelList;

			if (
				typeof oll != UNDEFINED
				&& typeof noll != UNDEFINED
				&& typeof npll != UNDEFINED
			) {
				for (var i = 0, il = npll.length; i < il; i++) {
					if (s.data.id == npll[i]) {
						npll.splice(i, 1);

						break;
					}
				}

				if (typeof unlockList != UNDEFINED) {
					for (var k = 0, kl = unlockList.length; k < kl; k++) {
						var newLevelId = unlockList[k], isUnlocked = false;

						for (var j = 0, jl = oll.length; j < jl; j++) {
							if (newLevelId == oll[j]) {
								isUnlocked = true;

								break;
							}
						}

						if (!isUnlocked) {
							var hasPushedIntoUnlockList = false;

							for (var t = 0, tl = noll.length; t < tl; t++) {
								if (noll[t] == newLevelId) {
									hasPushedIntoUnlockList = true;
								}
							}

							if (!hasPushedIntoUnlockList) {
								noll.push(newLevelId);
								npll.push(newLevelId);
								oll.push(newLevelId);
							}
						}
					}
				}
			}

			showMenuDlg(lang.system.YOU_WIN, SceneInterface.WIN_MEF_NAME);
		};

		if (!s.talkManager.isQueueEmpty()) {
			s.talkManager.onQueueEmpty = whenWin;
		} else {
			whenWin();
		}
	} else if (v == SceneInterface.GAME_LOSE) {
		s.isLose = true;

		showMenuDlg(lang.system.YOU_LOSE, SceneInterface.LOSE_MEF_NAME);
	}
};

SceneInterface.prototype.destroy = function (i) {
	var s = this;

	Hint.removeHintsInRemoveList();
	/** to fix the bug that the next hints don't show if you destroy SceneInterface when the hints is showing */
	Hint.LIST_HINTS.splice(0, Hint.LIST_HINTS.length);

	closeAllMusicEffects();

	Character.HP_RATIO_OURS = 1;
	Character.HP_RATIO_ENEMIES = 1;

	Character.STEP_LENGTH_RATIO_OURS = 1;
	Character.STEP_LENGTH_RATIO_ENEMIES = 1;

	Character.LIST_OURS.splice(0, Character.LIST_OURS.length);
	Character.LIST_ENEMIES.splice(0, Character.LIST_ENEMIES.length);

	FriendSelector.LIST_ONLY.splice(0, FriendSelector.LIST_ONLY.length);

	/** make events that has been executed be not executed in order to execute them next time */
	var eventsList = [
		s.data.events ? s.data.events.enterFrame : null,
		s.data.events ? s.data.events.round : null
	];

	for (var j = 0, l = eventsList.length; j < l; j++) {
		var o = eventsList[j];

		if (!o) {
			continue;
		}

		for (var k = 0, m = o.length; k < m; k++) {
			var item = o[k];

			if (item.isExecuted) {
				item.isExecuted = false;
			}
		}
	}

	/** the meanings of value of i are in function addBtns of class MenuDlg */
	if (i == 0) {
		var saveDataFirst = false;

		if (s.isWin) {
			saveDataFirst = true;
		}

		loadSelectingLevelInterface(saveDataFirst);
	} else if (i == 1) {
		loadSceneInterface(s.data);
	}

	s.remove();
};