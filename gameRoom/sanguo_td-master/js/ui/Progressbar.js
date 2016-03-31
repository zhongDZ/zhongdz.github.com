function Progressbar () {
	var s = this;
	LExtends(s, LSprite, []);

	s.barW = 500;
	s.barH = 50;

	var bgList = [
		dataList["loading_bg01"],
		dataList["loading_bg02"],
		dataList["loading_bg03"],
		dataList["loading_bg04"],
		dataList["loading_bg05"]
	];

	var bgBmpd = new LBitmapData(bgList[Math.round(Math.random() * (bgList.length - 1))]);
	var bgBmp = new LBitmap(bgBmpd);
	s.addChild(bgBmp);

	var txt = new Label();
	txt.text = lang.system.LOADING;
	txt.weight = "bold";
	txt.size = 25;
	txt.x = (LGlobal.width - txt.getWidth()) / 2;
	txt.y = 180;
	s.addChild(txt);

	var barLayer = new LSprite();
	s.addChild(barLayer);

	barLayer.x = (LGlobal.width - s.barW) / 2;
	barLayer.y = (LGlobal.height - s.barH) / 2 + 30;

	s.progressLayer = new LShape();
	s.progressLayer.alpha = 0.7;
	barLayer.addChild(s.progressLayer);

	var barBorder = new Border(s.barW, s.barH);
	barLayer.addChild(barBorder);

	var interfaceBorder = new Border(LGlobal.width, LGlobal.height, true);
	s.addChild(interfaceBorder);
}

Progressbar.prototype.setProgress = function (p) {
	var s = this;

	s.progressLayer.graphics.clear();
	s.progressLayer.graphics.drawRect(0, "", [0, 0, s.barW * (p / 100), s.barH], true, "black");
};