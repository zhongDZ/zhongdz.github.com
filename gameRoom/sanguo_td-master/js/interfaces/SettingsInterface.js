function SettingsInterface () {
	var s = this;
	LExtends(s, LSprite, []);

	playBackgroundMusic(SettingsInterface.BGM_NAME);

	if (typeof mediaManager != UNDEFINED && mediaManager) {
		SettingsInterface.SOUND = mediaManager.musicEnabled;
	}

	s.languageComboBox = null;
	s.soundComboBox = null;

	var bgBmp = new LBitmap(new LBitmapData(dataList["settings_bg"]));
	bgBmp.x = bgBmp.y = -200;
	s.addChild(bgBmp);

	s.contentLayer = new LSprite();
	s.addChild(s.contentLayer);

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

	var confirmBtn = new ConfirmBtn();
	confirmBtn.x = LGlobal.width - confirmBtn.getWidth() - 20;
	confirmBtn.y = LGlobal.height - confirmBtn.getHeight() - 20;
	s.addChild(confirmBtn);
	confirmBtn.addEventListener(LMouseEvent.MOUSE_UP, function () {
		s.destroy();
	});

	s.addContent();
	s.addCurtain();

	s.contentLayer.x = (LGlobal.width - s.contentLayer.getWidth()) / 2;
	s.contentLayer.y = 40;
}

SettingsInterface.BGM_NAME = "settings_bgm";

SettingsInterface.LANGUAGE = getLanguage();
SettingsInterface.SOUND = true;
SettingsInterface.FULL_SCREEN = getFullScreen();

SettingsInterface.prototype.addContent = function () {
	var s = this;

	var titleTxt = new Label();
	titleTxt.text = lang.system.SETTINGS;
	titleTxt.size = 30;
	titleTxt.weight = "bold";
	titleTxt.color = "white";
	titleTxt.filters = [new LDropShadowFilter(null, null, "white")];
	titleTxt.marginBottom = 70;
	s.contentLayer.addChild(titleTxt);

	var contentList = [
		{
			title : lang.system.LANGUAGE,
			initialValue : SettingsInterface.LANGUAGE,
			content : [
				{label : lang.system.ENGLISH, value : "en"},
				{label : lang.system.SIMPLIFIED_CHINESE, value : "zh"}
			]
		},
		{
			title : lang.system.SOUND,
			initialValue : SettingsInterface.SOUND,
			content : [
				{label : lang.system.ON, value : true},
				{label : lang.system.OFF, value : false}
			]
		},
		{
			title : lang.system.FULL_SCREEN,
			initialValue : SettingsInterface.FULL_SCREEN,
			content : [
				{label : lang.system.ON, value : true},
				{label : lang.system.OFF, value : false}
			]
		}
	];

	var itemTitleTxtTemp = new Label();
	itemTitleTxtTemp.weight = "bold";
	itemTitleTxtTemp.size = 20;
	itemTitleTxtTemp.color = "white";
	itemTitleTxtTemp.lineWidth = 3;
	itemTitleTxtTemp.lineColor = "#0088FF";
	itemTitleTxtTemp.stroke = true;

	for (var i = 0, l = contentList.length; i < l; i++) {
		var o = contentList[i];

		var itemLayer = new LSprite();
		itemLayer.x = -30;
		itemLayer.marginBottom = 20;
		s.contentLayer.addChild(itemLayer);

		var itemTitleTxt = itemTitleTxtTemp.clone();
		itemTitleTxt.text = o.title;
		itemLayer.addChild(itemTitleTxt);

		var itemComboBox = new ComboBox(o.content, 300, 50, o.initialValue);
		itemComboBox.x = 200;
		itemLayer.addChild(itemComboBox);

		if (o.title == lang.system.LANGUAGE) {
			s.languageComboBox = itemComboBox;
		} else if (o.title == lang.system.SOUND) {
			s.soundComboBox = itemComboBox;
		} else if (o.title == lang.system.FULL_SCREEN) {
			s.fullScreenComboBox = itemComboBox;
		}
	}

	for (var k = 0, m = s.contentLayer.numChildren, ty = 0; k < m; k++) {
		var n = s.contentLayer.getChildAt(k);

		if (n) {
			if (!n.marginBottom) {
				n.marginBottom = 0;
			}

			n.x += (s.contentLayer.getWidth() - n.getWidth()) / 2;
			n.y += ty;

			ty += n.getHeight() + n.marginBottom;
		}
	}
};

SettingsInterface.prototype.addCurtain = function () {
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

SettingsInterface.prototype.destroy = function () {
	var s = this,
	lv = s.languageComboBox.value,
	sv = s.soundComboBox.value,
	fv = s.fullScreenComboBox.value,
	ch = false;

	var handler = function () {
		if (fv != SettingsInterface.FULL_SCREEN) {
			SettingsInterface.FULL_SCREEN = fv;

			if (typeof dataManager != UNDEFINED && dataManager) {
				dataManager.set(DataManager.SETTINGS_FULL_SCREEN, DataManager.TYPE_BOOLEAN, fv);
			}

			fullScreen(fv);
		}
		
		s.remove();

		loadSettingsInterface();
	};

	if (lv != SettingsInterface.LANGUAGE) {
		ch = true;

		SettingsInterface.LANGUAGE = lv;

		loadLanguage(
			lv,
			function () {
				loadData(handler);
			}
		);

		if (typeof dataManager != UNDEFINED && dataManager) {
			dataManager.set(DataManager.SETTINGS_LANGUAGE, DataManager.TYPE_STRING, lv);
		}
	}

	if (sv != SettingsInterface.SOUND && typeof mediaManager != UNDEFINED && mediaManager) {
		mediaManager.musicEnabled = SettingsInterface.SOUND = sv;

		if (typeof dataManager != UNDEFINED && dataManager) {
			dataManager.set(DataManager.SETTINGS_SOUND, DataManager.TYPE_BOOLEAN, sv);
		}
	}
	
	if (!ch) {
		handler();
	}
};