function Hint (content, showY) {
	var s = this;
	LExtends(s, LSprite, []);

	s.offsetY = 30;
	s.y = showY + s.offsetY;
	s.alpha = 0;

	var bgLayer = new LSprite();
	s.addChild(bgLayer);

	var txt = new Label();
	txt.text = content;
	txt.color = "white";
	txt.size = 15;
	txt.x = txt.y = 15;
	txt.heightMode = Label.HEIGHT_MODE_BASELINE;
	s.addChild(txt);

	var w = txt.getWidth() + txt.x * 2,
	h = txt.getHeight() + txt.y * 2;
	bgLayer.graphics.drawRoundRect(0, "", [0, 0, w, h, 10], true, "#222222");

	Hint.LIST_HINTS.push(s);

	if (Hint.LIST_HINTS.length == 1) {
		s.startShow();
	}
}

Hint.LIST_REMOVE = new Array();
Hint.LIST_HINTS = new Array();
Hint.HINT_SHOWING = null;

Hint.removeHintsInRemoveList = function () {
	var list = Hint.LIST_REMOVE, l = list.length;

	for (var k = 0; k < l; k++) {
		list[k].remove();
	}

	list.splice(0, l);
};

Hint.nextHint = function () {
	var list = Hint.LIST_HINTS;

	list.shift();

	if (list.length) {
		list[0].startShow();
	}
};

Hint.prototype.startShow = function () {
	var s = this;

	Hint.HINT_SHOWING = s;

	LTweenLite.to(s, 0.5, {
		alpha : 0.8,
		y : s.y - s.offsetY
	}).to(s, 0.5, {
		delay : 1,
		alpha : 0,
		y : s.y - s.offsetY * 2,
		onComplete : function () {
			Hint.LIST_REMOVE.push(s);

			Hint.nextHint();
		}
	});
};