function RoundBar () {
	var s = this;
	LExtends(s, LSprite, []);

	s.roundBarW = 170;
	s.roundBarH = 40;
	s.roundBarColor = LGlobal.canvas.createLinearGradient(0, 0, 0, s.roundBarH * 1.5);
	s.roundBarColor.addColorStop(0, "#660099");
	s.roundBarColor.addColorStop(1, "white");

	var iconBmp = new LBitmap(new LBitmapData(dataList["flag"]));
	s.addChild(iconBmp);

	var barLayer = new LSprite();
	barLayer.x = iconBmp.getWidth();
	barLayer.y = 30;
	s.addChild(barLayer);

	var bgColor = LGlobal.canvas.createLinearGradient(0, 0, 0, s.roundBarH * 1.5);
	bgColor.addColorStop(0, "#111111");
	bgColor.addColorStop(1, "white");
	var bgLayer = new LSprite();
	bgLayer.graphics.drawRect(0, "", [0, 0, s.roundBarW, s.roundBarH], true, bgColor);
	barLayer.addChild(bgLayer);

	s.contentLayer = new LSprite();
	barLayer.addChild(s.contentLayer);

	var border = new Border(s.roundBarW, s.roundBarH);
	barLayer.addChild(border);

	s.refresh(0);
}

RoundBar.prototype.refresh = function (ratio) {
	var s = this,
	w = s.roundBarW,
	h = s.roundBarH,
	color = s.roundBarColor;

	if (ratio < 0) {
		ratio = 0;
	} else if (ratio > 1) {
		ratio = 1;
	}

	s.contentLayer.graphics.clear();
	s.contentLayer.graphics.drawRect(0, "", [0, 0, w * ratio, h], true, color);
};