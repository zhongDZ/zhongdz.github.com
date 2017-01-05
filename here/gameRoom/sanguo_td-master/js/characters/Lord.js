function Lord (name, strengthening) {
	var s = this;
	LExtends(s, Friend, [name, 0, strengthening]);

	s.lordFlag = true;
	s.sendSOS = false;
	s.isKeepStanding = true;
	s.x += s.data.scaleXCenter + 10;
	s.hp *= 2;
	s.maxHp *= 2;
	s.hpBarLayer.hpBarW *= 2;

	s.hpBarLayer.refresh(1);
	s.hpBarLayer.x = -s.hpBarLayer.getWidth() / 2;
	s.hpBarLayer.nameTxt.x = (s.hpBarLayer.hpBarW - s.hpBarLayer.nameTxt.getWidth()) / 2;
	s.stopMoving();
}