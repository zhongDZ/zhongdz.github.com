function Border (w, h, isDecoration) {
	var s = this;
	LExtends(s, LSprite, []);

	var hBmpd = new LBitmapData(dataList["border_top"]), hScale = w / hBmpd.width;
	var vBmpd = new LBitmapData(dataList["border_left"]), vScale = h / vBmpd.height;
	var dBmpd = new LBitmapData(dataList["border_decoration"], 280, 90, 230, 65);

	if (isDecoration) {
		var topRightBmp = new LBitmap(dBmpd);
		topRightBmp.scaleX = -1;
		topRightBmp.scaleY = -1;
		topRightBmp.x = w;
		topRightBmp.y = topRightBmp.getHeight() - 5;

		var bottomLeftBmp = new LBitmap(dBmpd);
		bottomLeftBmp.y = h - bottomLeftBmp.getHeight() + 5;

		s.addChild(topRightBmp);
		s.addChild(bottomLeftBmp);
	}

	var topBmp = new LBitmap(hBmpd);
	topBmp.scaleX = hScale;
	topBmp.y = -3;
	var bottomBmp = new LBitmap(hBmpd);
	bottomBmp.y = h + 3;
	bottomBmp.scaleX = hScale;
	bottomBmp.scaleY = -1;
	var leftBmp = new LBitmap(vBmpd);
	leftBmp.x = -3;
	leftBmp.scaleY = vScale;
	var rightBmp = new LBitmap(vBmpd);
	rightBmp.x = w + 3;
	rightBmp.scaleX = -1;
	rightBmp.scaleY = vScale;

	s.addChild(rightBmp);
	s.addChild(bottomBmp);
	s.addChild(leftBmp);
	s.addChild(topBmp);
}