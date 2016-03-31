function SelectingLevelInterface (saveDataFirst) {
	var s = this;
	LExtends(s, LSprite, []);

	playBackgroundMusic(SelectingLevelInterface.BGM_NAME);

	/** if you win and return to SelectingLevelInterface, save the data first in order not to load old data */
	if (saveDataFirst) {
		s.saveData(0);
	}
	s.getData();

	s.addCouldsSpeed = 300;
	s.addCouldsIndex = s.addCouldsSpeed;
	/** define a object to save mouse previous position in order to make map follow mouse */
	s.mousePrePos = null;
	s.currentCityIndex = SelectingLevelInterface.SELECTED_CITY_INDEX;
	s.currentLevelIndex = SelectingLevelInterface.SELECTED_LEVEL_INDEX;

	s.movingLayer = new LSprite();
	s.movingLayer.x = SelectingLevelInterface.MOVING_LAYER_POSITION.x;
	s.movingLayer.y = SelectingLevelInterface.MOVING_LAYER_POSITION.y;
	s.addChild(s.movingLayer);

	s.cloudsLayer = new LSprite();
	s.cloudsLayer.x = s.movingLayer.x;
	s.cloudsLayer.y = s.movingLayer.y;
	s.addChild(s.cloudsLayer);

	var mapBmp = new LBitmap(new LBitmapData(dataList["chinese_map"]));
	mapBmp.scaleX = mapBmp.scaleY = (LGlobal.width + 100) / mapBmp.getWidth();
	s.movingLayer.addChild(mapBmp);

	s.citiesLayer = new LSprite();
	s.movingLayer.addChild(s.citiesLayer);

	s.goldenArrow = new GoldenArrow();
	s.movingLayer.addChild(s.goldenArrow);

	var confirmBtn = new ConfirmBtn();
	confirmBtn.x = LGlobal.width - confirmBtn.getWidth() - 20;
	confirmBtn.y = LGlobal.height - confirmBtn.getHeight() - 20;
	s.addChild(confirmBtn);
	confirmBtn.addEventListener(LMouseEvent.MOUSE_UP, function () {
		s.destroy();
	});

	var border = new Border(LGlobal.width, LGlobal.height, true);
	s.addChild(border);

	var closeBtn = new CloseBtn();
	closeBtn.x = LGlobal.width - closeBtn.getWidth() - 5;
	closeBtn.y = 5;
	s.addChild(closeBtn);
	closeBtn.addEventListener(LMouseEvent.MOUSE_UP, function () {
		loadBeginningInterface();

		s.remove();
	});

	s.addCities();
	s.addCurtain();
	s.setGoldenArrowBmpAt(s.currentCityIndex, s.currentLevelIndex);

	s.addEventListener(LEvent.ENTER_FRAME, s.loop);
	s.movingLayer.addEventListener(LMouseEvent.MOUSE_DOWN, s.mouseDown);
	s.addEventListener(LMouseEvent.MOUSE_MOVE, s.mouseMove);
	s.addEventListener(LMouseEvent.MOUSE_UP, s.mouseUp);
}

SelectingLevelInterface.BGM_NAME = "selecting_level_bgm";

/**
all levels:
	"ying_chuan",
	"hu_lao_guan",
	"wu_jun",
	"shou_chun",
	"xia_pi",
	"guan_du",
	"chang_ban",
	"chi_bi",
	"cheng_du",
	"he_fei",
	"han_zhong",
	"fan_cheng",
	"nan_zhong",
	"yi_ling",
	"wu_zhang_yuan"
*/
SelectingLevelInterface.UNLOCKED_LEVELS_LIST = [
	"ying_chuan"
];
SelectingLevelInterface.NEW_UNLOCKED_LEVELS_LIST = new Array();
SelectingLevelInterface.NOT_PASSED_LEVELS_LIST = SelectingLevelInterface.UNLOCKED_LEVELS_LIST.slice(0, SelectingLevelInterface.UNLOCKED_LEVELS_LIST.length);

SelectingLevelInterface.MOVING_LAYER_POSITION = {x : 0, y : 0};
SelectingLevelInterface.SELECTED_CITY_INDEX = 0;
SelectingLevelInterface.SELECTED_LEVEL_INDEX = 0;

SelectingLevelInterface.DIFFICULTY_HEAVEN = "heaven";
SelectingLevelInterface.DIFFICULTY_EASY = "easy";
SelectingLevelInterface.DIFFICULTY_NORMAL = "normal";
SelectingLevelInterface.DIFFICULTY_HARD = "hard";
SelectingLevelInterface.DIFFICULTY_EXPERT = "expert";
SelectingLevelInterface.DIFFICULTY_SHURA = "shura";
SelectingLevelInterface.CURRENT_DIFFICULTY = SelectingLevelInterface.DIFFICULTY_NORMAL;

SelectingLevelInterface.prototype.addCities = function () {
	var s = this,
	oll = SelectingLevelInterface.UNLOCKED_LEVELS_LIST,
	noll = SelectingLevelInterface.NEW_UNLOCKED_LEVELS_LIST,
	npll = SelectingLevelInterface.NOT_PASSED_LEVELS_LIST,
	msgDlgText = null;

	var cityBmp = new LBitmap(new LBitmapData(dataList["city"]));
	cityBmp.scaleX = cityBmp.scaleY = 1;

	var nameTxt = new Label();
	nameTxt.color = "white";
	nameTxt.lineWidth = 2;
	nameTxt.lineColor = "orangered";
	nameTxt.stroke = true;
	nameTxt.weight = "bold";

	for (var i = 0, ci = 0, l = levelData.length; i < l; i++) {
		var o = levelData[i], name = o.name, id = o.id, isOpenLevel = false, isNotPassed = false;

		if (typeof o == UNDEFINED || typeof o.location == UNDEFINED) {
			continue;
		}

		if (noll.length > 0) {
			for (var k = 0, kl = noll.length; k < kl; k++) {
				var nv = noll[k];

				if (id == nv) {
					if (msgDlgText) {
						msgDlgText += ", " + name;
					} else {
						msgDlgText = name;
					}
				}
			}
		}

		for (var j = 0, jl = oll.length; j < jl; j++) {
			if (id == oll[j]) {
				isOpenLevel = true;

				break;
			}
		}

		if (!isOpenLevel) {
			continue;
		}

		for (var t = 0, tl = npll.length; t < tl; t++) {
			if (id == npll[t]) {
				isNotPassed = true;

				break;
			}
		}

		var bmp = cityBmp.clone();

		if (isNotPassed) {
			bmp.filters = [new LDropShadowFilter(null, null, "orangered")];
		}

		var txt = nameTxt.clone();
		txt.text = name;
		txt.x = (bmp.getWidth() - txt.getWidth()) / 2;
		txt.y = -txt.getHeight() - 5;

		var cityLayer = new LSprite();
		cityLayer.cityIndex = ci++;
		cityLayer.dataIndex = i;
		cityLayer.x = o.location.x;
		cityLayer.y = o.location.y;
		
		cityLayer.addChild(bmp);
		cityLayer.addChild(txt);
		s.citiesLayer.addChild(cityLayer);

		cityLayer.addEventListener(LMouseEvent.MOUSE_UP, function (e) {
			var ec = e.currentTarget;

			s.setGoldenArrowBmpAt(ec.cityIndex, ec.dataIndex);
		});
	}

	if (msgDlgText) {
		var newOpenLevelMsgDlg = new MsgDlg(lang.system.NEW_LEVEL_OPENED + "\n" + msgDlgText);
		s.addChild(newOpenLevelMsgDlg);
	}

	noll.splice(0, noll.length);
};

SelectingLevelInterface.prototype.mouseDown = function (e) {
	e.currentTarget.parent.mousePrePos = {
		x : e.offsetX,
		y : e.offsetY
	};
};

SelectingLevelInterface.prototype.mouseMove = function (e) {
	var s = e.currentTarget, m = s.mousePrePos;

	if (m) {
		var ox = e.offsetX,
		oy = e.offsetY,
		minX = LGlobal.width - s.movingLayer.getWidth(),
		minY = LGlobal.height - s.movingLayer.getHeight();

		s.movingLayer.x += ox - m.x;
		s.movingLayer.y += oy - m.y;

		if (s.movingLayer.x > 0) {
			s.movingLayer.x = 0;
		} else if (s.movingLayer.x < minX) {
			s.movingLayer.x = minX;
		}
		if (s.movingLayer.y > 0) {
			s.movingLayer.y = 0;
		} else if (s.movingLayer.y < minY) {
			s.movingLayer.y = minY;
		}

		s.cloudsLayer.x = s.movingLayer.x;
		s.cloudsLayer.y = s.movingLayer.y;

		m.x = ox;
		m.y = oy;
	}
};

SelectingLevelInterface.prototype.mouseUp = function (e) {
	e.currentTarget.mousePrePos = null;
};

SelectingLevelInterface.prototype.addCurtain = function () {
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

SelectingLevelInterface.prototype.loop = function (e) {
	var s = e.currentTarget;

	DomesticClouds.removeCloudsInRemoveList();

	if (s.addCouldsIndex++ > s.addCouldsSpeed) {
		s.addCouldsIndex = 0;

		var clouds = new DomesticClouds();
		clouds.y = Math.floor((s.movingLayer.getHeight() - 100) * Math.random());
		s.cloudsLayer.addChild(clouds);
	}
};

SelectingLevelInterface.prototype.setGoldenArrowBmpAt = function (ci, di) {
	var s = this, target = s.citiesLayer.getChildAt(ci);

	if (target) {
		s.currentCityIndex = ci;
		s.currentLevelIndex = di;

		s.goldenArrow.x = target.startX() + (target.getWidth() - s.goldenArrow.getWidth()) / 2;
		s.goldenArrow.y = target.startY() + 10;
	}
};

SelectingLevelInterface.prototype.destroy = function () {
	var s = this, data = levelData[s.currentLevelIndex];

	if (
		!data
		|| !data.background
		|| !data.characters
		|| typeof data.initialMoney == UNDEFINED
		|| typeof data.nextRoundSpeed == UNDEFINED
		|| typeof data.nextCharacterSpeed == UNDEFINED
		|| typeof data.rewardRatio == UNDEFINED
	) {
		var notOpenMsgDlg = new MsgDlg(lang.system.THIS_LEVEL_IS_NOT_OPEN);
		s.addChild(notOpenMsgDlg);

		return;
	}

	var difficultyList = [
		{label : lang.system.HEAVEN, value : SelectingLevelInterface.DIFFICULTY_HEAVEN},
		{label : lang.system.EASY, value : SelectingLevelInterface.DIFFICULTY_EASY},
		{label : lang.system.NORMAL, value : SelectingLevelInterface.DIFFICULTY_NORMAL},
		{label : lang.system.HARD, value : SelectingLevelInterface.DIFFICULTY_HARD},
		{label : lang.system.EXPERT, value : SelectingLevelInterface.DIFFICULTY_EXPERT},
		{label : lang.system.SHURA, value : SelectingLevelInterface.DIFFICULTY_SHURA}
	];

	var dlgContentLayer = new LSprite();

	var hintTxt = new Label();
	hintTxt.text = lang.system.SELECT_DIFFICULTY;
	hintTxt.color = "white";
	hintTxt.size = 20;
	hintTxt.weight = "bold";
	hintTxt.lineWidth = 2;
	hintTxt.lineColor = "#0088FF";
	hintTxt.stroke = true;
	dlgContentLayer.addChild(hintTxt);

	var difficultyComboBox = new ComboBox(difficultyList, 250, 50, SelectingLevelInterface.CURRENT_DIFFICULTY);
	difficultyComboBox.y = hintTxt.y + hintTxt.getHeight() + 40;
	dlgContentLayer.addChild(difficultyComboBox);
	
	hintTxt.x = (difficultyComboBox.barW - hintTxt.getWidth()) / 2;
	/** set sizeW and sizeH to control position of content in MsgDlg */
	dlgContentLayer.sizeW = difficultyComboBox.barW;
	dlgContentLayer.sizeH = 80;

	var selectingDifficultyDlg = new MsgDlg(dlgContentLayer, function () {
		DomesticClouds.removeCloudsInRemoveList();

		SelectingLevelInterface.CURRENT_DIFFICULTY = difficultyComboBox.value;

		SelectingLevelInterface.SELECTED_CITY_INDEX = s.currentCityIndex;
		SelectingLevelInterface.SELECTED_LEVEL_INDEX = s.currentLevelIndex;
		SelectingLevelInterface.MOVING_LAYER_POSITION.x = s.movingLayer.x;
		SelectingLevelInterface.MOVING_LAYER_POSITION.y = s.movingLayer.y;

		loadSceneInterface(data);

		if (s.goldenArrow) {
			s.goldenArrow.destroy();
		}

		s.saveData(1);

		s.remove();
	}, true);
	s.addChild(selectingDifficultyDlg);
};

SelectingLevelInterface.prototype.getData = function () {
	if (typeof dataManager != UNDEFINED && dataManager) {
		var ull = dataManager.get(DataManager.UNLOCKED_LEVELS_LIST),
		npll = dataManager.get(DataManager.NOT_PASSED_LEVELS_LIST),
		sci = dataManager.get(DataManager.SELECTED_CITY_INDEX),
		sli = dataManager.get(DataManager.SELECTED_LEVEL_INDEX),
		mlpx = dataManager.get(DataManager.MOVING_LAYER_POSITION_X),
		mlpy = dataManager.get(DataManager.MOVING_LAYER_POSITION_Y),
		cd = dataManager.get(DataManager.CURRENT_DIFFICULTY);

		if (ull != DataManager.NO_DATA && ull != DataManager.ERROR_DATA) {
			SelectingLevelInterface.UNLOCKED_LEVELS_LIST = ull;
		}

		if (npll != DataManager.NO_DATA && npll != DataManager.ERROR_DATA) {
			SelectingLevelInterface.NOT_PASSED_LEVELS_LIST = npll;
		} else {
			SelectingLevelInterface.NOT_PASSED_LEVELS_LIST = SelectingLevelInterface.UNLOCKED_LEVELS_LIST.slice(0, SelectingLevelInterface.UNLOCKED_LEVELS_LIST.length);
		}

		if (sci != DataManager.NO_DATA && sci != DataManager.ERROR_DATA) {
			SelectingLevelInterface.SELECTED_CITY_INDEX = sci;
		} else {
			SelectingLevelInterface.SELECTED_CITY_INDEX = 0;
		}

		if (sli != DataManager.NO_DATA && sli != DataManager.ERROR_DATA) {
			SelectingLevelInterface.SELECTED_LEVEL_INDEX = sci;
		} else {
			SelectingLevelInterface.SELECTED_LEVEL_INDEX = 0;
		}

		if (mlpx != DataManager.NO_DATA && mlpx != DataManager.ERROR_DATA) {
			SelectingLevelInterface.MOVING_LAYER_POSITION.x = mlpx;
		} else {
			SelectingLevelInterface.MOVING_LAYER_POSITION.x = 0;
		}

		if (mlpy != DataManager.NO_DATA && mlpy != DataManager.ERROR_DATA) {
			SelectingLevelInterface.MOVING_LAYER_POSITION.y = mlpy;
		} else {
			SelectingLevelInterface.MOVING_LAYER_POSITION.y = 0;
		}

		if (cd != DataManager.NO_DATA && cd != DataManager.ERROR_DATA) {
			SelectingLevelInterface.CURRENT_DIFFICULTY = cd;
		} else {
			SelectingLevelInterface.CURRENT_DIFFICULTY = SelectingLevelInterface.DIFFICULTY_NORMAL;
		}
	}
};

SelectingLevelInterface.prototype.saveData = function (p) {
	var s = this;

	if (typeof dataManager != UNDEFINED && dataManager) {
		if (p == 0) {
			dataManager.set(DataManager.UNLOCKED_LEVELS_LIST, DataManager.TYPE_ARRAY, SelectingLevelInterface.UNLOCKED_LEVELS_LIST);
			dataManager.set(DataManager.NOT_PASSED_LEVELS_LIST, DataManager.TYPE_ARRAY, SelectingLevelInterface.NOT_PASSED_LEVELS_LIST);
		} else if (p == 1) {
			dataManager.set(DataManager.SELECTED_CITY_INDEX, DataManager.TYPE_NUMBER, SelectingLevelInterface.SELECTED_CITY_INDEX);
			dataManager.set(DataManager.SELECTED_LEVEL_INDEX, DataManager.TYPE_NUMBER, SelectingLevelInterface.SELECTED_LEVEL_INDEX);
			dataManager.set(DataManager.MOVING_LAYER_POSITION_X, DataManager.TYPE_NUMBER, SelectingLevelInterface.MOVING_LAYER_POSITION.x);
			dataManager.set(DataManager.MOVING_LAYER_POSITION_Y, DataManager.TYPE_NUMBER, SelectingLevelInterface.MOVING_LAYER_POSITION.y);
			dataManager.set(DataManager.CURRENT_DIFFICULTY, DataManager.TYPE_STRING, SelectingLevelInterface.CURRENT_DIFFICULTY);
		}
	}
};