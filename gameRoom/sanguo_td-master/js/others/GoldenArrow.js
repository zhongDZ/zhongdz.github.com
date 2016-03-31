function GoldenArrow () {
	var s = this;
	LExtends(s, LSprite, []);

	var bmp = new LBitmap(new LBitmapData(dataList["golden_arrow"]));
	s.addChild(bmp);

	s.tween = LTweenLite.to(bmp, 0.3, {
		y : -5,
		loop : true
	}).to(bmp, 0.3, {
		y : 5
	});

	s.scaleY = -1;

	s.addShape(LShape.RECT, [0, 0, 0, 0]);
}

GoldenArrow.prototype.destroy = function () {
	LTweenLite.remove(this.tween);
};