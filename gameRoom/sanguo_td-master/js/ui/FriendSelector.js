function FriendSelector (name) {
	var s = this, m = 0;
	LExtends(s, LSprite, []);

	s.isPause = PauseBtn.MODE_PLAY;
	s.isStop = false;
	s.mouseEnabled = false;
	s.cost = characterData[name].properties.cost;
	s.delay = characterData[name].delay;
	s.delayIndex = 0;

	s.face = new Face(name, 85);
	s.addChild(s.face);

	var costLayer = new LSprite();
	costLayer.alpha = 0.8;
	s.addChild(costLayer);

	var costTxt = new Label();
	costTxt.text = s.cost;
	costTxt.color = "white";
	costTxt.size = 12;
	costLayer.addChild(costTxt);

	m = 5;
	var cw = costTxt.getWidth() + m * 2,
	ch = costTxt.getHeight() + m * 2;
	costLayer.graphics.drawRoundRect(0, "", [-m, -m, cw, ch, 5], true, "#000000");
	costLayer.x = s.face.faceW - costLayer.getWidth();
	costLayer.y = s.face.faceH - costLayer.getHeight();

	s.delayLayer = new LSprite();
	s.delayLayer.alpha = 0.7;
	s.addChild(s.delayLayer);

	s.nameHintLayer = new LSprite();
	s.nameHintLayer.alpha = 0.7;
	s.nameHintLayer.visible = false;
	s.addChild(s.nameHintLayer);

	m = 10;
	var nameTxt = new Label();
	nameTxt.text = characterData[name].name;
	nameTxt.x = nameTxt.y = m;
	nameTxt.color = "white";
	nameTxt.heightMode = LTextField.HEIGHT_MODE_BASELINE;
	s.nameHintLayer.addChild(nameTxt);

	var as = 16,
	nw = nameTxt.getWidth() + m * 2,
	nh = nameTxt.getHeight() + m * 2;
	s.nameHintLayer.graphics.drawRoundRect(0, "", [0, 0, nw, nh, 5], true, "#000000");
	s.nameHintLayer.graphics.drawVertices(0, "", [[nw / 2 - as / 2, nh], [nw / 2, nh + as], [nw / 2 + as / 2, nh]], true, "#000000");
	s.nameHintLayer.x = (s.face.faceW - s.nameHintLayer.getWidth()) / 2;
	s.nameHintLayer.y = -s.nameHintLayer.getHeight() + 5;

	s.face.addEventListener(LMouseEvent.MOUSE_OVER, function () {
		s.nameHintLayer.visible = true;
	});
	s.face.addEventListener(LMouseEvent.MOUSE_OUT, function () {
		s.nameHintLayer.visible = false;
	});
	s.addEventListener(LEvent.ENTER_FRAME, s.loop);
}

FriendSelector.LIST_ONLY = new Array();

FriendSelector.prototype.loop = function (e) {
	var s = e.currentTarget;

	if (s.isPause || s.isStop) {
		return;
	}

	if (s.delayIndex++ > s.delay) {
		s.mouseEnabled = s.isStop = true;
		s.delayIndex = 0;

		return;
	}

	s.refresh(s.delayIndex / s.delay);
};

FriendSelector.prototype.startDelaying = function (o) {
	var s = this;

	s.mouseEnabled = false;

	if (o != null) {
		s.isStop = true;

		FriendSelector.LIST_ONLY.push({characterObjectIndex : o, selector : s});

		s.refresh(0);
	} else {
		s.isStop = false;
	}
};

FriendSelector.prototype.refresh = function (ratio) {
	var s = this, w = s.face.faceW, h = s.face.faceH;

	s.delayLayer.graphics.clear();
	s.delayLayer.graphics.drawRect(0, "", [0, h * ratio, w, h * (1 - ratio)], true, "black");
};