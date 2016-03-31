function SimpleProgressbar () {
	var s = this;
	LExtends(s, LSprite, []);

	s.barW = 600;
	s.barH = 10;

	var bgLayer = new LSprite();
	bgLayer.graphics.drawRect(0, "", [0, 0, LGlobal.width, LGlobal.height], true, "#222222");
	s.addChild(bgLayer);

	var barLayer = new LSprite();
	barLayer.x = (LGlobal.width - s.barW) / 2;
	barLayer.y = (LGlobal.height - s.barH) / 2 + 20;
	barLayer.filters = [new LDropShadowFilter(null, null, "#101010")];
	s.addChild(barLayer); 

	var progressBgLayer = new LSprite();
	progressBgLayer.graphics.drawRoundRect(5, "black", [0, 0, s.barW, s.barH, 5], true, "black");
	barLayer.addChild(progressBgLayer);

	s.progressLayer = new LSprite();
	barLayer.addChild(s.progressLayer);

	s.progressTxt = new Label();
	s.progressTxt.weight = "italic";
	s.progressTxt.color = "white";
	s.progressTxt.text = "10%";
	s.progressTxt.size = 15;
	s.progressTxt.x = (LGlobal.width - s.progressTxt.getWidth()) / 2;
	s.progressTxt.y = 200;
	s.addChild(s.progressTxt);
}

SimpleProgressbar.prototype.setProgress = function (p) {
	var s = this;

	s.progressTxt.text = p + "%";
	s.progressTxt.x = (LGlobal.width - s.progressTxt.getWidth()) / 2;

	s.progressLayer.graphics.clear();
	s.progressLayer.graphics.drawRoundRect(0, "", [0, 0, s.barW * (p / 100), s.barH, 5], true, "#1E90FF");
};