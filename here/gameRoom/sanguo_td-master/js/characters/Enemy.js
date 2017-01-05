function Enemy (name, startX, strengthening) {
	var s = this;
	LExtends(s, Npc, [name, Character.DIR_LEFT, startX, "enemies", strengthening]);

	Character.LIST_ENEMIES.push(s);

	s.isDebuting = true;
	s.hp *= (Character.HP_RATIO_ENEMIES <= 1) ? Character.HP_RATIO_ENEMIES : 1;
	s.stepLength *= (Character.STEP_LENGTH_RATIO_ENEMIES <= 1) ? Character.STEP_LENGTH_RATIO_ENEMIES : 1;

	s.hpBarLayer.refresh(s.hp / s.maxHp);
}

Enemy.prototype.removeFromCharacterList = function () {
	var s = this, p = s.parent,
	pp = p ? p.parent : null,
	ppp = pp ? pp.parent : null;

	s.callParent("removeFromCharacterList", [Character.LIST_ENEMIES]);

	if (ppp) {
		ppp.changeMoney(s.properties.cost * ppp.rewardRatio);

		if (!Character.LIST_ENEMIES.length && !ppp.isNotRun() && ppp.isAllEnemiesPlay) {
			ppp.gameOver(SceneInterface.GAME_WIN);
		}
	}
};

Enemy.prototype.getAtkTargetList = function () {
	var s = this, list = new Array();

	if (!s.isDebuting) {
		for (var i = 0, l = Character.LIST_OURS.length; i < l; i++) {
			var o = Character.LIST_OURS[i];

			if (s.isAtkThisCharacter(o)) {
				list.push(o);
			}
		}
	}

	return list;
};

Enemy.prototype.loopHandler = function () {
	var s = this;

	if (s.isDebuting) {
		var p = s.parent,
		pp = p ? p.parent : null,
		ppp = pp ? pp.parent : null;

		if (ppp && s.x <= ppp.bgBmp.getWidth() - ppp.stageMargin + s.beAtkRange) {
			s.isDebuting = false;
		}
	}

	s.callParent("loopHandler", arguments);
};