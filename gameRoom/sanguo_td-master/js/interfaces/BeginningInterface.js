function BeginningInterface () {
	var s = this;
	LExtends(s, LSprite, []);

	playBackgroundMusic(BeginningInterface.BGM_NAME);

	s.bgBmpMoveDir = -1;

	s.bgBmp = new LBitmap(new LBitmapData(dataList["beginning_bg"]));
	s.addChild(s.bgBmp);

	s.btnLayer = new LSprite();
	s.addChild(s.btnLayer);

	var titleTxt = new Label();
	titleTxt.text = lang.system.GAME_TITLE;
	titleTxt.size = 45;
	titleTxt.weight = "bold";
	titleTxt.x = (LGlobal.width - titleTxt.getWidth()) / 2;
	titleTxt.y = 30;
	titleTxt.filters = [new LDropShadowFilter(null, null, "black", 10)];
	s.addChild(titleTxt);

	s.addBtns();
	s.addCurtain();

	s.addEventListener(LEvent.ENTER_FRAME, s.loop);
}

BeginningInterface.BGM_NAME = "beginning_bgm";

BeginningInterface.prototype.addBtns = function () {
	var s = this;

	var btnBmpd = new LBitmapData(dataList["ink_button"]);
	btnBmpd.setProperties(0, 352, 195, 55);
	var btnBmp = new LBitmap(btnBmpd);
	btnBmp.scaleX = 1.5;
	btnBmp.scaleY = 1.4;

	var btnNormalBmp = btnBmp.clone();
	var btnOverBmp = btnBmp.clone();
	btnOverBmp.alpha = 0.8;

	var txt = new Label();
	txt.x = 30;
	txt.y = 25;
	txt.color = "white";
	txt.weight = "bold";
	txt.size = 12;
	txt.filters = [new LDropShadowFilter(2, 45, "white", 10)];

	var btnTextList = [
		lang.system.START,
		lang.system.ABOUT,
		lang.system.SETTINGS,
		lang.system.EXIT
	];

	for (var i = 0, l = btnTextList.length; i < l; i++) {
		var btnTxt = txt.clone();
		btnTxt.text = btnTextList[i];

		var normalLayer = new LSprite();
		normalLayer.addChild(btnNormalBmp.clone());
		normalLayer.addChild(btnTxt.clone());
		var overLayer = new LSprite();
		overLayer.addChild(btnOverBmp.clone());
		overLayer.addChild(btnTxt.clone());

		var btn = new LButton(normalLayer, overLayer);
		btn.y = (btn.getHeight() + 5) * i;
		btn.index = i;
		btn.setCursorEnabled(false);
		s.btnLayer.addChild(btn);

		btn.addEventListener(LMouseEvent.MOUSE_UP, function (e) {
			s.destroy(e.currentTarget.index);
		});
	}

	s.btnLayer.x = (LGlobal.width - s.btnLayer.getWidth()) / 2;
	s.btnLayer.y = 130;
};

BeginningInterface.prototype.loop = function (e) {
	var s = e.currentTarget;

	if (s.bgBmp.x >= 0) {
		s.bgBmpMoveDir = -1;
	} else if (s.bgBmp.x <= LGlobal.width - s.bgBmp.getWidth()) {
		s.bgBmpMoveDir = 1;
	}

	s.bgBmp.x += s.bgBmpMoveDir;
};

BeginningInterface.prototype.destroy = function (i) {
	var s = this;
	
	/** the meanings of value of i are in function addBtns */
	if (i == 0) {
		loadSelectingLevelInterface();
	} else if (i == 1) {
		loadAboutInterface();
	} else if (i == 2) {
		loadSettingsInterface();
	} else if (i == 3) {
		exitGame();
	}

	s.remove();
};

BeginningInterface.prototype.addCurtain = function () {
	var s = this;

	var curtainLayer = new LSprite();
	curtainLayer.graphics.drawRect(0, "", [0, 0, LGlobal.width, LGlobal.height], true, "black");
	s.addChild(curtainLayer);

	LTweenLite.to(curtainLayer, 1, {
		alpha : 0,
		onComplete : function (o) {
			o.remove();
		}
	});
};