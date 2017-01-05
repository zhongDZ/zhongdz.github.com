function Npc (name, dir, startX, side, strengthening) {
	var s = this;
	LExtends(s, Character, [name, dir, strengthening]);

	s.isKeepStanding = false;
	s.hasKeepStanding = false;

	var na = s.data.isOnly ? s.data.name : "";
	s.hpBarLayer = new NpcHpBar(side, na);
	s.hpBarLayer.x = -s.hpBarLayer.hpBarW / 2;
	s.hpBarLayer.y = -s.hpBarLayer.hpBarH - 5;
	s.addChild(s.hpBarLayer);

	/** some character's size is too big and a large area of images is blank, because of it, the hp bar's position isn't proper, so adjust the position */
	if (typeof s.data.hpBarOffsetY != UNDEFINED) {
		s.hpBarLayer.y += s.data.hpBarOffsetY;
	}

	s.x = startX;

	if (dir == Character.DIR_LEFT) {
		s.hpBarLayer.nameTxt.scaleX *= -1;
		s.hpBarLayer.nameTxt.x = (s.hpBarLayer.hpBarW - s.hpBarLayer.nameTxt.getWidth()) / 2;
	}

	s.startMoving();
}

Npc.prototype.starkAtk = function () {
	var s = this;

	s.callParent("starkAtk", arguments);

	s.hasKeepStanding = false;
};

Npc.prototype.loopHandler = function () {
	var s = this, atl = s.getAtkTargetList();

	if (atl && atl.length) {
		s.stopMoving();
		s.starkAtk();
	} else {
		s.startMoving(function () {
			s.stopAtk();
		});
	}
};

Npc.prototype.startMoving = function (onMovingStart) {
	var s = this, cv = "isMoving", cm = Character.MODE_MOVE;

	/** if the npc must keep standing, make the npc stand but not move */
	if (s.isKeepStanding) {
		cv = "hasKeepStanding";
		
		cm = Character.MODE_STAND;
	}

	/** atk animation must be complete when the move animation starts, so I define a function to finish changing into move mode, and call the function in proper time */
	var handler = function () {
		s[cv] = true;

		s.changeTo(cm);

		if (typeof onMovingStart == "function") {
			onMovingStart();
		}
	};

	if (!s[cv]) {
		/** when atk animation is playing, set atkAnimaCompleteHandler to wait for atk animation stoping and when it stops start move animation */
		if (s.isAtk && !s.isWaitingAtk) {
			s.atkAnimaCompleteHandler = handler;
		} else {
			handler();
		}
	}
};

Npc.prototype.stopMoving = function () {
	var s = this;

	if (s.isMoving) {
		s.isMoving = false;

		s.changeTo(Character.MODE_STAND);
	}
};