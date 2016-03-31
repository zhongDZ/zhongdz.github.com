function Face (name, w, h, hideMask, hideBorder) {
	var s = this;
	LExtends(s, LSprite, []);

	s.characterName = name;

	s.faceW = w;
	s.faceH = h || s.faceW;

	var faceBmp = new LBitmap(new LBitmapData(dataList[s.getFaceImageName(name) + "_face"]));
	s.addChild(faceBmp);

	if (typeof s.faceW != "number") {
		s.faceW = faceBmp.getWidth();
	}
	if (typeof s.faceH != "number") {
		s.faceH = faceBmp.getHeight();
	}
	faceBmp.scaleX = faceBmp.scaleY = s.faceW / faceBmp.getWidth();

	if (typeof hideMask == UNDEFINED || !hideMask) {
		var faceMask = new LShape();
		faceMask.graphics.drawRect(0, "", [0, 0, s.faceW, s.faceH]);
		
		faceBmp.mask = faceMask;
		faceBmp.y = -10;
	}

	if (typeof hideBorder == UNDEFINED || !hideBorder) {
		var border = new Border(s.faceW, s.faceH);
		s.addChild(border);
	}
}

Face.prototype.getFaceImageName = function(charaName) {
	var cd = characterData[charaName];

	if (typeof cd != UNDEFINED && cd && !cd.isNormal) {
		return charaName;
	}

	return "normal";
};