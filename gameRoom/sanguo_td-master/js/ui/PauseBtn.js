function PauseBtn () {
	var s = this;
	LExtends(s, LSprite, []);

	s.mode = PauseBtn.MODE_PLAY;

	var bmpd = new LBitmapData(dataList["btn_pause_sheet"]);
	var w = bmpd.width / 1, h = bmpd.height / 3;
	bmpd.setProperties(0, 0, w, h);
	var normalBmp = new LBitmap(bmpd.clone());
	var overBmp = new LBitmap(bmpd.clone());
	overBmp.bitmapData.setCoordinate(0, h);
	var downBmp = new LBitmap(bmpd.clone());
	downBmp.bitmapData.setCoordinate(0, h * 2);
	var disableBmp = downBmp.clone();

	s.btn = new LButton(normalBmp, overBmp, downBmp, disableBmp);
	s.btn.setCursorEnabled(false);
	s.addChild(s.btn);

	s.addEventListener(LMouseEvent.MOUSE_UP, s.mouseUp);
}

PauseBtn.MODE_PLAY = false;
PauseBtn.MODE_PAUSE = true;

PauseBtn.prototype.mouseUp = function (e) {
	var s = e.currentTarget;

	s.mode = !s.mode;

	if (s.mode == PauseBtn.MODE_PAUSE) {
		s.btn.setState(LButton.STATE_DISABLE);
	} else {
		s.btn.setState(LButton.STATE_ENABLE);
	}
};