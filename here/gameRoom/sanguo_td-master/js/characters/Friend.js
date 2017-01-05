function Friend (name, startX, strengthening) {
	var s = this;
	LExtends(s, Npc, [name, Character.DIR_RIGHT, startX, "ours", strengthening]);

	Character.LIST_OURS.push(s);

	s.hp *= (Character.HP_RATIO_OURS <= 1) ? Character.HP_RATIO_OURS : 1;
	s.stepLength *= (Character.STEP_LENGTH_RATIO_OURS <= 1) ? Character.STEP_LENGTH_RATIO_OURS : 1;

	s.hpBarLayer.refresh(s.hp / s.maxHp);
}

Friend.prototype.removeFromCharacterList = function () {
	var s = this;

	s.callParent("removeFromCharacterList", [Character.LIST_OURS]);

	if (s.data.isOnly) {
		for (var i = 0, l = FriendSelector.LIST_ONLY.length; i < l; i++) {
			if (!l) {
				break;
			}

			var o = FriendSelector.LIST_ONLY[i];

			if (!o) {
				continue;
			}

			if (o.characterObjectIndex == s.objectIndex) {
				o.selector.startDelaying(null);

				FriendSelector.LIST_ONLY.splice(i, 1);

				break;
			}
		}
	}
};

Friend.prototype.getAtkTargetList = function () {
	var s = this, list = new Array();

	for (var i = 0, l = Character.LIST_ENEMIES.length; i < l; i++) {
		if (!l) {
			break;
		}
		
		var o = Character.LIST_ENEMIES[i];

		if (s.isAtkThisCharacter(o)) {
			list.push(o);
		}
	}

	return list;
};