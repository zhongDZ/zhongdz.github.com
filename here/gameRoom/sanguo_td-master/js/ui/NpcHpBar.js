function NpcHpBar (side, name) {
	var s = this;
	LExtends(s, LSprite, []);

	var barColor = (side == "ours") ? "#00CC00" : "red",
	txtColor = (side == "ours") ? "#0088FF" : "orangered";

	s.hpBarW = 30;
	s.hpBarH = 5;
	s.hpBarColor = LGlobal.canvas.createLinearGradient(0, 0, 0, s.hpBarH * 1.8);
	s.hpBarColor.addColorStop(0, barColor);
	s.hpBarColor.addColorStop(1, "white");

	s.nameTxt = new Label();
	s.nameTxt.text = name;
	s.nameTxt.size = 9;
	s.nameTxt.color = "white";
	s.nameTxt.x = (s.hpBarW - s.nameTxt.getWidth()) / 2;
	s.nameTxt.y = -s.nameTxt.getHeight() - 5;
	s.nameTxt.stroke = true;
	s.nameTxt.lineWidth = 1;
	s.nameTxt.lineColor = txtColor;
	s.addChild(s.nameTxt);

	s.refresh(1);
}

NpcHpBar.prototype.refresh = function (ratio) {
	var s = this,
	w = s.hpBarW,
	h = s.hpBarH,
	color = s.hpBarColor;

	if (ratio < 0) {
		ratio = 0;
	}

	s.graphics.clear();
	s.graphics.drawRect(0, "", [0, 0, w * ratio, h], true, color);
	s.graphics.drawRect(1, "black", [0, 0, w, h]);
};