function CloseBtn () {
	var s = this;
	LExtends(s, LSprite, []);

	var bmpd = new LBitmapData(dataList["widgets"]);
	bmpd.setProperties(0, 0, 40, 32);

	var normalBmpd = bmpd.clone();
	normalBmpd.setCoordinate(350, 304);
	var normalBmp = new LBitmap(normalBmpd);

	var overBmpd = bmpd.clone();
	overBmpd.setCoordinate(350, 337);
	var overBmp = new LBitmap(overBmpd);

	var btn = new LButton(normalBmp, normalBmp, overBmp);
	btn.setCursorEnabled(false);
	btn.staticMode = true;
	s.addChild(btn);

	s.scaleX = s.scaleY = 1.5;
}