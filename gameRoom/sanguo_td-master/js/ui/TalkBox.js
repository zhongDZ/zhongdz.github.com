function TalkBox (content) {
	var s = this;
	LExtends(s, LSprite, []);

	s.boxW = LGlobal.width * 0.6;
	s.boxH = 130;

	if (typeof content == UNDEFINED || !content) {
		content = {};
	}
	if (typeof content.speaker == UNDEFINED || !content.speaker) {
		content.speaker = "";
	}
	if (typeof content.side == UNDEFINED || !content.side) {
		content.side = "ours";
	}
	if (typeof content.content == UNDEFINED || !content.content) {
		content.content = "";
	}

	var bgLayer = new LSprite();
	bgLayer.alpha = 0.5;
	bgLayer.graphics.drawRoundRect(0, "", [0, 0, s.boxW, s.boxH, 8], true, "black");
	s.addChild(bgLayer);

	var face = new Face(content.speaker, null, null, true, true);
	face.x = 20;
	face.y = (s.boxH - face.faceH) / 2
	s.addChild(face);

	var txtLayer = new LSprite();
	txtLayer.x = face.faceW + face.x + 30;
	txtLayer.y = 20;
	s.addChild(txtLayer);

	var nameTxt = new Label();
	nameTxt.text = (typeof characterData[content.speaker] == UNDEFINED) ? "" : characterData[content.speaker].name;
	nameTxt.size = 15;
	nameTxt.weight = "bold";
	nameTxt.stroke = true;
	nameTxt.heightMode = LTextField.HEIGHT_MODE_BASELINE;
	nameTxt.color = "white";
	nameTxt.lineWidth = 3;
	if (content.side == "ours") {
		nameTxt.lineColor = "#0088FF";
	} else if (content.side == "enemies") {
		nameTxt.lineColor = "orangered";
	}
	txtLayer.addChild(nameTxt);

	var contentTxt = new Label();
	contentTxt.text = content.content;
	contentTxt.y = nameTxt.getHeight() + 10;
	contentTxt.size = 13;
	contentTxt.color = "#EEEEEE";
	contentTxt.filters = [new LDropShadowFilter(1, 45, "white", 2)];
	contentTxt.width = s.boxW * 0.7;
	contentTxt.setWordWrap(true, contentTxt.getHeight() * 1.2);
	txtLayer.addChild(contentTxt);

	s.addShape(LShape.RECT, [0, 0, 0, 0]);
}