function AboutInterface () {
	var s = this;
	LExtends(s, LSprite, []);

	playBackgroundMusic(AboutInterface.BGM_NAME);

	s.ducleLogoTween = null;

	var bgBmp = new LBitmap(new LBitmapData(dataList["about_bg"]));
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

		if (s.ducleLogoTween) {
			LTweenLite.remove(s.ducleLogoTween);
		}

		s.remove();
	});

	s.addContent();
	s.addCurtain();

	s.contentLayer.x = (LGlobal.width - s.contentLayer.getWidth()) / 2;
	s.contentLayer.y += LGlobal.height;

	s.addEventListener(LEvent.ENTER_FRAME, s.loop);
}

AboutInterface.BGM_NAME = "about_bgm";

AboutInterface.prototype.addContent = function () {
	var s = this;

	var titleTxt = new Label();
	titleTxt.size = 30;
	titleTxt.color = "white";
	titleTxt.text = lang.system.ABOUT;
	titleTxt.weight = "bold";
	titleTxt.filters = [new LDropShadowFilter(null, null, "white")];
	titleTxt.marginTop = 80;
	s.contentLayer.addChild(titleTxt);

	var contentList = [
		{title : lang.system.GAME_DESIGNER, content : ["Peter Wang"]},
		{title : lang.system.PROGRAMER, content : ["Peter Wang", "Yuehao Wang(Yorhom)"]},
		{title : lang.system.TESTER, content : ["Peter Wang", "Yuyang Zhan", "Xingze Li", "Winter Van", "Dojo Wang", "Hao Wu"]},
		{title : lang.system.ARTS, content : [lang.system.FROM_THESE_WEBSITE_BELOW, "http://www.2gei.com/", "http://rm.66rpg.com/", "http://www.iconarchive.com/"]},
		{title : lang.system.MUSIC, content : ["A Ways Away", "Dawn of the wish", "Deathblow", "Geniuses Sanctuaries", "Glage at the World", "Slash The Demon", "Tetsujin Drive", "The Battle without Justice", "The Two Heroes", "Victory Jubilee", "Welcome to China"]},
		{title : lang.system.CHARACTER_DESIGNER, content : ["Peter Wang", "Yuehao Wang(Yorhom)"]},
		{title : lang.system.LEVEL_DESIGNER, content : ["Yuehao Wang(Yorhom)"]},
		{title : lang.system.GAME_ENGINE, content : [dataList["nw"], "nw.js v0.12.1", dataList["lufylegend.js"], "lufylegend.js v1.9.9"]},
		{title : lang.system.CONTACT_US, content : ["Weibo: @Yorhom", "Twitter: @YorhomWang", "Email: wangyuehao1999@gmail.com", "Website: http://wyh.wjjsoft.com"]}
	];

	var itemTitleTxtTemp = new Label();
	itemTitleTxtTemp.weight = "bold";
	itemTitleTxtTemp.size = 30;
	itemTitleTxtTemp.color = "white";
	itemTitleTxtTemp.lineWidth = 5;
	itemTitleTxtTemp.lineColor = "#0088FF";
	itemTitleTxtTemp.stroke = true;
	itemTitleTxtTemp.marginTop = 70;

	s.contentLayer.y -= itemTitleTxtTemp.marginTop;

	var contentTxtTemp = new Label();
	contentTxtTemp.size = 20;
	contentTxtTemp.color = "white";
	contentTxtTemp.marginTop = 20;

	for (var i = 0, l = contentList.length; i < l; i++) {
		var o = contentList[i];

		var itemTitleTxt = itemTitleTxtTemp.clone();
		itemTitleTxt.text = o.title;
		s.contentLayer.addChild(itemTitleTxt);

		for (var k = 0, y = o.content.length; k < y; k++) {
			var w = o.content[k];

			if (typeof w == "string") {
				var contentTxt = contentTxtTemp.clone();
				contentTxt.text = w;
				s.contentLayer.addChild(contentTxt);
			} else if (w instanceof Image) {
				var bmp = new LBitmap(new LBitmapData(w));
				bmp.marginTop = contentTxtTemp.marginTop + 20;
				s.contentLayer.addChild(bmp)
			}
		}
	}

	for (var j = 0, n = s.contentLayer.numChildren, ty = 0; j < n; j++) {
		var m = s.contentLayer.getChildAt(j);

		if (m) {
			if (!m.marginTop) {
				m.marginTop = 0;
			}

			m.x = (s.contentLayer.getWidth() - m.getWidth()) / 2;
			m.y = ty + m.marginTop;

			ty = m.getHeight() + m.y;
		}
	}

	titleTxt.y -= LGlobal.height / 2;
};

AboutInterface.prototype.addCurtain = function () {
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

AboutInterface.prototype.loop = function (e) {
	var s = e.currentTarget;

	if (!s.contentLayer.parent) {
		return;
	}

	s.contentLayer.y -= 2;

	if (s.contentLayer.y < LGlobal.height / 2 - s.contentLayer.getHeight() - 130) {
		s.contentLayer.remove();

		s.addDucleLogo();
	}
};

AboutInterface.prototype.addDucleLogo = function () {
	var s = this;

	var logoLayer = new LSprite();
	logoLayer.alpha = 0;
	s.addChild(logoLayer);

	var logoBmp = new LBitmap(new LBitmapData(dataList["ducle_logo"]));
	logoBmp.scaleX = logoBmp.scaleY = 0.6;
	logoLayer.addChild(logoBmp);

	var logoTxt = new Label();
	logoTxt.color = "white";
	logoTxt.size = 25;
	logoTxt.text = "DUCLE";
	logoTxt.weight = "bold";
	logoTxt.filters = [new LDropShadowFilter(null, null, "white")];
	logoTxt.x = (logoBmp.getWidth() - logoTxt.getWidth()) / 2;
	logoTxt.y = logoBmp.getHeight() + 20;
	logoLayer.addChild(logoTxt);

	var offsetY = 20;
	logoLayer.x = (LGlobal.width - logoLayer.getWidth()) / 2;
	logoLayer.y = (LGlobal.height - logoLayer.getHeight()) / 2 + offsetY;

	s.ducleLogoTween = LTweenLite.to(logoLayer, 1, {
		alpha : 1,
		y : logoLayer.y - offsetY
	});
};