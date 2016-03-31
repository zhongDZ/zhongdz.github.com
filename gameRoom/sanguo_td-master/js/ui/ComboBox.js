function ComboBox (contentList, w, h, initialValue) {
	var s = this;
	LExtends(s, LSprite, []);

	s.barW = w;
	s.barH = h;
	s.value = null;
	s.currentIndex = null;
	s.bmp = new LBitmap(new LBitmapData(dataList["widgets"]));

	s.addBar();
	s.addBtns();

	s.contentLayer = new LSprite();
	s.addChild(s.contentLayer);

	s.addContent(contentList);
	s.setValueAt(initialValue);
}

ComboBox.prototype.addBar = function () {
	var s = this;

	var barBmpTemp = s.bmp.clone();
	barBmpTemp.bitmapData.setProperties(235, 315, 15, 35);

	var barLayer = new LSprite();
	barLayer.scaleY = s.barH / barBmpTemp.getHeight();
	s.addChild(barLayer);

	while (barLayer.getWidth() < s.barW) {
		var barBmp = barBmpTemp.clone();
		barBmp.x = barLayer.getWidth();
		barLayer.addChild(barBmp);
	}

	var maskShape = new LShape();
	maskShape.graphics.drawRect(0, "", [0, 0, s.barW, s.barH]);

	barLayer.mask = maskShape;
};

ComboBox.prototype.addBtns = function () {
	var s = this;

	var btnBmpTemp = s.bmp.clone();
	btnBmpTemp.bitmapData.setProperties(0, 0, 64, 48);
	btnBmpTemp.scaleX = btnBmpTemp.scaleY = s.barH * 1.5 / btnBmpTemp.getHeight();

	var normalBmp = btnBmpTemp.clone();
	normalBmp.bitmapData.setCoordinate(0, 291);
	var overBmp = btnBmpTemp.clone();
	overBmp.bitmapData.setCoordinate(0, 339);
	var downBmp = btnBmpTemp.clone();
	downBmp.bitmapData.setCoordinate(0, 389);

	var preBtn = new LButton(normalBmp, overBmp, downBmp);
	preBtn.x = -preBtn.getWidth() + 60;
	preBtn.y = (s.barH - preBtn.getHeight()) / 2;
	preBtn.setCursorEnabled(false);
	preBtn.staticMode = true;
	s.addChild(preBtn);
	preBtn.addEventListener(LMouseEvent.MOUSE_UP, function () {
		s.changeContent(-1);
	});

	var nextBtn = preBtn.clone();
	nextBtn.scaleX = -1;
	nextBtn.x = s.barW - nextBtn.getWidth() - 60;
	nextBtn.y = preBtn.y;
	nextBtn.setCursorEnabled(false);
	nextBtn.staticMode = true;
	s.addChild(nextBtn);
	nextBtn.addEventListener(LMouseEvent.MOUSE_UP, function () {
		s.changeContent(1);
	});
};

ComboBox.prototype.addContent = function (list) {
	var s = this;

	for (var k = 0, m = list.length; k < m; k++) {
		var o = list[k];

		var txt = new Label();
		txt.text = o.label;
		txt.value = o.value;
		txt.color = "white";
		txt.size = 15;
		txt.heightMode = Label.HEIGHT_MODE_BASELINE;
		txt.x = (s.barW - txt.getWidth()) / 2;
		txt.y = (s.barH - 15 - txt.getHeight()) / 2;
		s.contentLayer.addChild(txt);
	}
};

ComboBox.prototype.setValueAt = function (v) {
	var s = this;

	/** the parameter can be a Label object or lanuage string */
	if (typeof v == UNDEFINED || v < 0) {
		return;
	} else if (typeof v == "object") {
		v = v.value;
	}

	s.value = v;

	for (var i = 0, l = s.contentLayer.numChildren; i < l; i++) {
		var o = s.contentLayer.getChildAt(i);

		if (o) {
			if (o.value == v) {
				o.visible = true;
				if (s.currentIndex == null) {
					s.currentIndex = i;
				}
			} else {
				o.visible = false;
			}
		}
	}
};

ComboBox.prototype.changeContent = function (v) {
	var s = this, cl = s.contentLayer, ma = cl.numChildren - 1, mi = 0;

	s.currentIndex += v;

	if (s.currentIndex > ma) {
		s.currentIndex = mi;
	}

	if (s.currentIndex < mi) {
		s.currentIndex = ma;
	}

	s.setValueAt(cl.getChildAt(s.currentIndex));
};