function MediaManager () {
	var s = this;

	s.bgmList = {};
	s.mefList = {};
	s.mefPlayingList = new Array();
	s.currentBgMusic = null;
	s.musicEnabled = true;

	if (typeof dataManager != UNDEFINED || dataManager) {
		var v = dataManager.get(DataManager.SETTINGS_SOUND);

		if (v != DataManager.NO_DATA && v != DataManager.ERROR_DATA) {
			s.musicEnabled = v;
		}
	}

	s.loopLayer = new LSprite();
	if (typeof stage != UNDEFINED && stage) {
		stage.addChild(s.loopLayer);
	}

	s.loopLayer.addEventListener(LEvent.ENTER_FRAME, function () {
		if (typeof s.currentBgMusic != UNDEFINED && s.currentBgMusic && !s.currentBgMusic.playing) {
			s.currentBgMusic.play();
		}
	});
}

MediaManager.prototype.addBackgroundMusic = function (name, audio) {
	this.bgmList[name] = new LSound(audio);
};

MediaManager.prototype.addMusicEffect = function (name, audio) {
	this.mefList[name] = new LSound(audio);
};

MediaManager.prototype.playBackgroundMusic = function (name) {
	var s = this, list = s.bgmList;

	for (var k in list) {
		var o = list[k];

		if (k == name) {
			s.currentBgMusic = o;
			s.currentBgMusic.play();
		}
	}
};

MediaManager.prototype.closeCurrentBackgroundMusic = function (useTween) {
	var s = this;

	if (typeof s.currentBgMusic != UNDEFINED && s.currentBgMusic) {
		s.closeSound(s.currentBgMusic, useTween);

		s.currentBgMusic = null;
	}
};

MediaManager.prototype.playMusicEffect = function (name, isStopBgm, useTween) {
	var s = this, m = s.mefList[name];

	if (typeof m == UNDEFINED && !m) {
		return;
	}

	m.play(0, 1);

	s.mefPlayingList.push(m);

	if (isStopBgm) {
		s.closeCurrentBackgroundMusic(useTween);
	}
};

MediaManager.prototype.closeAllMusicEffects = function () {
	var s = this, list = s.mefPlayingList;

	for (var i = 0, l = list.length; i < l; i++) {
		s.closeSound(list[i]);
	}

	list.splice(0, list.length);
};

MediaManager.prototype.closeSound = function (sound, useTween, onTweenComplete) {
	if (typeof sound != UNDEFINED && sound && sound.data) {
		if (useTween) {
			var fo = {
				times : 1
			};

			LTweenLite.to(fo, 1, {
				times : 0,
				onUpdate : function () {
					var toV = parseFloat(fo.times)

					if (toV < 0) {
						toV = 0;
					}

					sound.setVolume(toV);
				},
				onComplete : function () {
					sound.close();
					sound.setVolume(1);

					if (typeof onTweenComplete == "function") {
						onTweenComplete();
					}
				}
			});
		} else {
			sound.close();
		}
	}
};