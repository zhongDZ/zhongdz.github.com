function TalkManager (layer) {
	var s = this;

	s.talkLayer = layer || new LSprite();
	s.talkList = {};
	s.talkQueue = new Array();
	s.delay = 180;
	s.delayIndex = s.delay;
	s.isDelay = true;
	s.isPause = PauseBtn.MODE_PLAY;
	s.currentTalkBox = null;
	s.onQueueEmpty = null;

	s.talkLayer.addEventListener(LEvent.ENTER_FRAME, function () {
		s.loop();
	});
};

TalkManager.prototype.setTalkList = function(o) {
	this.talkList = o || new Array();
};

TalkManager.prototype.addToQueue = function(name) {
	var s = this, item = s.talkList[name];

	if (typeof item == UNDEFINED || !item || !item.length) {
		return;
	}

	for (var i = 0, l = item.length; i < l; i++) {
		s.talkQueue.push(item[i]);
	}
};

TalkManager.prototype.loop = function () {
	var s = this;

	if (s.isQueueEmpty() || s.isPause || !s.isDelay) {
		return;
	}

	if (s.delayIndex++ < s.delay) {
		return;
	}

	if (typeof s.currentTalkBox != UNDEFINED && s.currentTalkBox) {
		s.isDelay = false;

		LTweenLite.to(s.currentTalkBox, 0.2, {
			x : -s.currentTalkBox.boxW,
			ease : Quad.easeIn,
			onComplete : function () {
				s.currentTalkBox.remove();

				s.currentTalkBox = null;

				s.talkQueue.shift();

				s.isDelay = true;

				if (s.isQueueEmpty() && typeof s.onQueueEmpty == "function") {
					s.onQueueEmpty();
				}
			}
		});

		return;
	}

	if (s.isQueueEmpty()) {
		return;
	}

	var content = s.talkQueue[0];
	s.currentTalkBox = new TalkBox(content);
	s.currentTalkBox.x = -s.currentTalkBox.boxW;
	s.currentTalkBox.y = (LGlobal.height - s.currentTalkBox.boxH) / 2 + 50;
	s.talkLayer.addChild(s.currentTalkBox);

	s.isDelay = false;

	LTweenLite.to(s.currentTalkBox, 0.2, {
		x : 20,
		ease : Quad.easeIn,
		onComplete : function () {
			s.delayIndex = 0;

			s.isDelay = true;
		}
	});
};

TalkManager.prototype.isQueueEmpty = function () {
	return (this.talkQueue.length == 0);
};