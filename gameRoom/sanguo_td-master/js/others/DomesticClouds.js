function DomesticClouds () {
	var s = this;
	LExtends(s, LSprite, []);

	var bmp = new LBitmap(new LBitmapData(dataList["domestic_clouds"]));
	s.addChild(bmp);

	s.scaleX = s.scaleY = 0.5 + Math.random() * 0.5;
	s.movingSpeed = 1 + Math.random() * 2;
	s.x = -s.getWidth();

	/** a dirty way to solve the bug that cities cannot be selected when the clouds cover them  */
	s.addShape(LShape.RECT, [0, 0, 0, 0]);
	s.addEventListener(LEvent.ENTER_FRAME, s.loop);
}

/** define a array to save clouds to be removed in order to fix the bug about clouds blink after previous clouds is being removed */
DomesticClouds.LIST_REMOVE = new Array();

DomesticClouds.removeCloudsInRemoveList = function () {
	var list = DomesticClouds.LIST_REMOVE, l = list.length;

	for (var i = 0; i < l; i++) {
		list[i].remove();
	}

	list.splice(0, l);
};

DomesticClouds.prototype.loop = function (e) {
	var s = e.currentTarget, p = s.parent, pp = (typeof p != UNDEFINED) ? p.parent : null;

	s.x += s.movingSpeed;

	if (pp && s.x > pp.movingLayer.getWidth()) {
		DomesticClouds.LIST_REMOVE.push(s);
	}
};