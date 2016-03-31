function Fire () {
	var s = this;
	LExtends(s, LSprite, []);

	s.fireFlag = true;
	s.loopIndex = 0;
	s.loopSpeed = 3;
	s.delayShowSpeed = Math.floor(Math.random() * 10);

	var bmpd = new LBitmapData(dataList["fire"]),
	list = Fire.LIST_IMAGE || s.getCoordinateList(bmpd.width, bmpd.height);
	
	bmpd.setProperties(0, 0, 64, 64);

	s.anima = new LAnimation(null, bmpd, list);
	s.anima.visible = false;
	s.addChild(s.anima);

	s.addEventListener(LEvent.ENTER_FRAME, s.loop);
}

Fire.LIST_IMAGE = null;

Fire.prototype.getCoordinateList = function (w, h) {
	var l = LGlobal.divideCoordinate(w, h, 10, 1),
	fl = new Array();

	fl.push(new Array());

	for (var i = 0, le = l.length; i < le; i++) {
		var item = l[i][0];

		if (typeof item != UNDEFINED) {
			fl[0].push(item);
		}
	}

	Fire.LIST_IMAGE = fl;

	return fl;
};

Fire.prototype.loop = function (e) {
	var s = e.currentTarget;

	if (!s.anima.visible && s.loopIndex++ >= s.delayShowSpeed) {
		s.loopIndex = s.loopSpeed;
		s.anima.visible = true;
	} else if (s.anima.visible && s.loopIndex++ >= s.loopSpeed) {
		s.loopIndex = 0;

		s.anima.onframe();

		if (s.anima.colIndex == 3) {
			s.anima.setAction(null, null, 1);
		} else if (s.anima.colIndex == 6) {
			s.anima.setAction(null, null, -1);
		}
	}
};