function PlayerHpBar (faceName) {
	var s = this;
	LExtends(s, LSprite, []);

	s.hpBarW = 250;
	s.hpBarH = 40;
	s.hpBarColor1 = LGlobal.canvas.createLinearGradient(0, 0, 0, s.hpBarH * 1.8);
	s.hpBarColor1.addColorStop(0, "#00CC00");
	s.hpBarColor1.addColorStop(1, "white");
	s.hpBarColor2 = LGlobal.canvas.createLinearGradient(0, 0, 0, s.hpBarH * 1.8);
	s.hpBarColor2.addColorStop(0, "orange");
	s.hpBarColor2.addColorStop(1, "white");
	s.hpBarColor3 = LGlobal.canvas.createLinearGradient(0, 0, 0, s.hpBarH * 1.8);
	s.hpBarColor3.addColorStop(0, "red");
	s.hpBarColor3.addColorStop(1, "white");

	s.barLayer = new LSprite();
	s.addChild(s.barLayer);

	var faceLayer = new Face(faceName, 85);
	s.addChild(faceLayer);

	var nameTxt = new Label();
	nameTxt.text = characterData[faceName].name;
	nameTxt.size = 20;
	nameTxt.color = "white";
	nameTxt.lineWidth = 3;
	nameTxt.lineColor = "#0088FF";
	nameTxt.stroke = true;
	nameTxt.weight = "bold";
	s.addChild(nameTxt);

	var border = new Border(s.hpBarW, s.hpBarH);
	s.barLayer.addChild(border);

	s.barLayer.x = faceLayer.faceW;
	s.barLayer.y = faceLayer.faceH - s.hpBarH;

	nameTxt.x = faceLayer.faceW + 20;
	nameTxt.y = s.barLayer.y - nameTxt.getHeight() - 8;

	s.refresh(1);
}

PlayerHpBar.prototype.refresh = function (ratio) {
	var s = this,
	w = s.hpBarW,
	h = s.hpBarH,
	color = s.hpBarColor1;

	if (ratio < 0) {
		ratio = 0;
	}

	if (ratio < 0.3) {
		color = s.hpBarColor3;
	} else if (ratio < 0.6) {
		color = s.hpBarColor2;
	}

	s.barLayer.graphics.clear();
	s.barLayer.graphics.drawRect(0, "", [0, 0, w * ratio, h], true, color);
};