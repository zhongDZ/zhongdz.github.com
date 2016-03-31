function ConfirmLevelBtn () {
	var s = this;
	LExtends(s, LSprite, []);

	var confirmBmp = new LBitmap(new LBitmapData(dataList["confirm_icon"]));

	var r = 40, shape = [r, r, r, 0, Math.PI * 2];

	var normalLayer = new LSprite();
	normalLayer.alpha = 0.7;
	normalLayer.graphics.drawArc(3, "white", shape, true, "black");
	var overLayer = new LSprite();
	overLayer.alpha = normalLayer.alpha;
	overLayer.graphics.drawArc(3, "white", shape, true, "#0088FF");
	var downLayer = new LSprite();
	downLayer.alpha = normalLayer.alpha;
	downLayer.graphics.drawArc(3, "white", shape, true, "orangered");

	confirmBmp.x = (normalLayer.getWidth() - confirmBmp.getWidth()) / 2;
	confirmBmp.y = (normalLayer.getHeight() - confirmBmp.getHeight()) / 2;

	normalLayer.addChild(confirmBmp.clone());
	overLayer.addChild(confirmBmp.clone());
	downLayer.addChild(confirmBmp.clone());

	var btn = new LButton(normalLayer, overLayer, downLayer);
	btn.setCursorEnabled(false);
	btn.staticMode = true;
	s.addChild(btn);
}