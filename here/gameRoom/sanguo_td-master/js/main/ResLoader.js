function ResLoader () {
	var s = this;

	s.hasLoadedList = new Array();
	s.loadList = {
		init : [
			{path : "./lang/lang.js"}
		],

		progressbar : [
			{path : "./js/ui/Progressbar.js"},
			{path : "./js/ui/Border.js"},
			{name : "border_left", path : "./images/ui/border_left.png"},
			{name : "border_top", path : "./images/ui/border_top.png"},
			{name : "border_decoration", path : "./images/ui/border_decoration.png"},
			{name : "loading_bg01", path : "./images/backgrounds/loading_bg01.png"},
			{name : "loading_bg02", path : "./images/backgrounds/loading_bg02.png"},
			{name : "loading_bg03", path : "./images/backgrounds/loading_bg03.png"},
			{name : "loading_bg04", path : "./images/backgrounds/loading_bg04.png"},
			{name : "loading_bg05", path : "./images/backgrounds/loading_bg05.png"}
		],

		data : [
			{path : "./data/levelData.js"},
			{path : "./data/characterData.js"}
		],

		/** content is pushed in ResLoader's method named getLanguageFile */
		language : [],

		beginningInterface : [
			{path : "./js/interfaces/BeginningInterface.js"},
			{name : "ink_button", path : "./images/ui/ink_button.png"},
			{name : "ducle_logo", path : "./images/others/ducle_logo.png"},
			{name : "beginning_bg", path : "./images/backgrounds/beiginning_bg.png"},
			{name : "beginning_bgm", path : "./sounds/glage_at_the_world.ogg"}
		],

		selectingLevelInterface : [
			{path : "./js/interfaces/SelectingLevelInterface.js"},
			{path : "./js/others/GoldenArrow.js"},
			{path : "./js/others/DomesticClouds.js"},
			{path : "./js/ui/CloseBtn.js"},
			{path : "./js/ui/ConfirmBtn.js"},
			{path : "./js/ui/ComboBox.js"},
			{path : "./js/ui/MsgDlg.js"},
			{name : "texture_bg", path : "./images/ui/texture_bg.png"},
			{name : "widgets", path : "./images/ui/widgets.png"},
			{name : "city", path : "./images/others/city.png"},
			{name : "golden_arrow", path : "./images/others/golden_arrow.png"},
			{name : "confirm_icon", path : "./images/others/confirm_icon.png"},
			{name : "domestic_clouds", path : "./images/others/domestic_clouds.png"},
			{name : "chinese_map", path : "./images/backgrounds/chinese_map.png"},
			{name : "selecting_level_bgm", path : "./sounds/tetsujin_drive.ogg"}
		],

		/** content is pushed in ResLoader's method named getSceneRes */
		sceneInterface : [],

		aboutInterface : [
			{path : "./js/interfaces/AboutInterface.js"},
			{path : "./js/ui/CloseBtn.js"},
			{name : "widgets", path : "./images/ui/widgets.png"},
			{name : "lufylegend.js", path : "./images/others/lufylegend.js.png"},
			{name : "nw", path : "./images/others/nw.png"},
			{name : "about_bg", path : "./images/backgrounds/about_bg.png"},
			{name : "about_bgm", path : "./sounds/dawn_of_the_wish.ogg"}
		],

		settingsInterface : [
			{path : "./js/interfaces/SettingsInterface.js"},
			{path : "./js/ui/CloseBtn.js"},
			{path : "./js/ui/ConfirmBtn.js"},
			{path : "./js/ui/ComboBox.js"},
			{name : "widgets", path : "./images/ui/widgets.png"},
			{name : "confirm_icon", path : "./images/others/confirm_icon.png"},
			{name : "settings_bg", path : "./images/backgrounds/settings_bg.png"},
			{name : "settings_bgm", path : "./sounds/a_ways_away.ogg"}
		]
	};
}

ResLoader.prototype.load = function (listName, onComplete) {
	var s = this, list = s.loadList[listName], toLoadList = new Array();

	for (var k = 0, l = list.length; k < l; k++) {
		var i = list[k], p = i.path;

		if (!s.isLoad(p)) {
			toLoadList.push(i);

			/** some files need to be refreshed forcibly like language files, level data and character data */
			if (listName != "language" && listName != "data") {
				s.hasLoadedList.push(p);
			}
		}
	}

	var loadComplete = function (r) {
		if (typeof r != UNDEFINED && r) {
			for (var k in r) {
				var loadedRes = r[k];

				if (loadedRes instanceof Audio && typeof mediaManager != UNDEFINED && mediaManager) {
					/** 
					 * _bgm - background music
					 * _mef - music effect
					*/
					if (k.indexOf("_bgm") >= 0) {
						mediaManager.addBackgroundMusic(k, loadedRes);
					} else if (k.indexOf("_mef")) {
						mediaManager.addMusicEffect(k, loadedRes);
					}
				}

				dataList[k] = loadedRes;
			}
		}

		onComplete();
	};

	if (toLoadList.length == 0) {
		loadComplete();

		return;
	}

	var pb = SimpleProgressbar;
	if (typeof Progressbar != UNDEFINED) {
		pb = Progressbar;
	}

	var progressLayer = new pb();
	stage.addChild(progressLayer);

	if (listName == "language") {
		if (typeof lang != UNDEFINED) {
			for (var k in lang) {
				var item = lang[k];

				if (k == "hint" || k == "system" || k == "place") {
					for (var i in item) {
						delete item[i];
					}
				} else {
					delete item;
				}
			}
		}
	}

	if (listName == "data") {
		if (typeof levelData != UNDEFINED) {
			for (var k in levelData) {
				delete levelData[k];
			}
		}

		if (typeof characterData != UNDEFINED) {
			for (var k in characterData) {
				delete characterData[k];
			}
		}
	}

	LLoadManage.load(
		toLoadList,
		function (p) {
			progressLayer.setProgress(p)
		},
		function (r) {
			loadComplete(r);

			progressLayer.remove();
		}
	);
};

ResLoader.prototype.isLoad = function (u) {
	var s = this;

	for (var i = 0, l = s.hasLoadedList.length; i < l; i++) {
		if (u == s.hasLoadedList[i]) {
			return true;
		}
	}

	return false;
};

ResLoader.prototype.getLanguageFile = function (language) {
	var s = this, list = s.loadList.language;

	list.splice(0, list.length);

	list.push({
		path : "./lang/" + language + ".js"
	});
};

ResLoader.prototype.getSceneRes = function (data) {
	var s = this,
	list = s.loadList.sceneInterface,
	charaList = new Array(),
	bg = data.background,
	bgmIndex = data.backgroundMusicIndex,
	bgmIndexToPath = {
		1 : "./sounds/welcome_to_China.ogg",
		2 : "./sounds/slash_the_demon.ogg",
		3 : "./sounds/the_two_heroes.ogg",
		4 : "./sounds/the_battle_without_justice.ogg",
		5 : "./sounds/geniuses_sanctuaries.ogg"
	},
	chara = data.characters,
	eventsList = [
		data.events ? data.events.enterFrame : null,
		data.events ? data.events.round : null
	];
	
	list.splice(0, list.length);

	if (typeof chara.ours != UNDEFINED) {
		if (typeof chara.ours.lord != UNDEFINED) {
			charaList.push(s.getCharacterImageName(chara.ours.lord));
		}
		if (typeof chara.ours.player != UNDEFINED) {
			charaList.push(s.getCharacterImageName(chara.ours.player));
		}

		if (typeof chara.ours.friends != UNDEFINED) {
			for (var y = 0, t = chara.ours.friends.length; y < t; y++) {
				charaList.push(s.getCharacterImageName(chara.ours.friends[y]));
			}
		}
	}
	if (typeof chara.enemies != UNDEFINED) {
		for (var k in chara.enemies) {
			var r = chara.enemies[k];

			for (var j = 0, m = r.length; j < m; j++) {
				charaList.push(s.getCharacterImageName(r[j]));
			}
		}
	}
	for (var u = 0, r = eventsList.length; u < r; u++) {
		var o = eventsList[u];

		if (!o) {
			continue;
		}

		for (var q = 0, w = o.length; q < w; q++) {
			var oi = o[q].instructions;

			for (var f = 0, g = oi.length; f < g; f++) {
				var item = oi[f], na = item.name;

				/** some instructions will add characters like addFriend, push the param into charaList to load them */
				if (na == "addFriend") {
					charaList.push(s.getCharacterImageName(item.param));
				} else if (na == "burn") {
					list.push({path : "./js/others/Fire.js"});
					list.push({name : "fire", path : "./images/others/fire.png"});
				}
			}
		}
	}

	for (var i = 0, l = charaList.length; i < l; i++) {
		var n = charaList[i],
		gp = "./images/characters/" + n + "/";

		list.push({name : n + "_stand", path : gp + "stand.png"});
		list.push({name : n + "_move", path : gp + "move.png"});
		list.push({name : n + "_atk", path : gp + "atk.png"});
		list.push({name : n + "_face", path : gp + "face.png"});
	}

	list.push({path : "./js/interfaces/SceneInterface.js"});
	list.push({path : "./js/characters/Character.js"});
	list.push({path : "./js/characters/Player.js"});
	list.push({path : "./js/characters/Npc.js"});
	list.push({path : "./js/characters/Enemy.js"});
	list.push({path : "./js/characters/Friend.js"});
	list.push({path : "./js/characters/Lord.js"});
	list.push({path : "./js/others/Face.js"});
	list.push({path : "./js/others/TalkManager.js"});
	list.push({path : "./js/ui/TalkBox.js"});
	list.push({path : "./js/ui/NpcHpBar.js"});
	list.push({path : "./js/ui/PlayerHpBar.js"});
	list.push({path : "./js/ui/Hint.js"});
	list.push({path : "./js/ui/FriendSelector.js"});
	list.push({path : "./js/ui/RoundBar.js"});
	list.push({path : "./js/ui/PauseBtn.js"});
	list.push({path : "./js/ui/MenuDlg.js"});
	list.push({name : "gold_ingot", path : "./images/others/gold_ingot.png"});
	list.push({name : "flag", path : "./images/others/flag.png"});
	list.push({name : "btn_pause_sheet", path : "./images/ui/btn_pause_sheet.png"});
	list.push({name : bg, path : "./images/backgrounds/" + bg + ".png"});
	list.push({name : "scene_bgm" + bgmIndex, path : bgmIndexToPath[bgmIndex]});
	list.push({name : "win_mef", path : "./sounds/victory_jubilee.ogg"});
	list.push({name : "lose_mef", path : "./sounds/deathblow.ogg"});
};

ResLoader.prototype.getCharacterImageName = function (n) {
	var s = this, chara = characterData[n];

	if (typeof chara != UNDEFINED && !chara.isNormal) {
		return n;
	} else {
		return "normal";
	}
};