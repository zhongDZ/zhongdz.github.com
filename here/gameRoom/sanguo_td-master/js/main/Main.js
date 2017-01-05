LGlobal.webAudio = false;
LGlobal.aspectRatio = LANDSCAPE;
LInit(1000 / 60, "mygame", 800, 480, main);

var dataList = {}, stage, loader, mediaManager, dataManager;

function main () {
	LGlobal.setDebug(false);

	createStage();
	createFps();
	createLoader();

	LGlobal.stage.addEventListener(LEvent.WINDOW_RESIZE, function () {
		fullScreen(getFullScreen());
	});
}

function createStage () {
	stage = new LSprite();
	addChild(stage);
}

function createFps () {
	if (false) {
		var fps = new FPS();
		fps.addEventListener(LMouseEvent.MOUSE_DOWN, function (e) {
			e.currentTarget.startDrag();
		});
		fps.addEventListener(LMouseEvent.MOUSE_UP, function (e) {
			e.currentTarget.stopDrag();
		});
		addChild(fps);
	}
}

function createLoader () {
	LLoadManage.load(
		[
			{path : "./lib/LLoadManage.js"},
			{path : "./js/main/ResLoader.js"},
			{path : "./js/main/Label.js"},
			{path : "./js/main/DataManager.js"},
			{path : "./js/media/MediaManager.js"},
			{path : "./js/ui/SimpleProgressbar.js"}
		],
		null,
		function () {
			dataManager = new DataManager();

			mediaManager = new MediaManager();

			fullScreen(getFullScreen());

			loader = new ResLoader();
			loader.load("init", function () {
				loadLanguage(getLanguage(), loadProgressbar);
			});
		}
	);
}

function fullScreen (isFullScreen) {
	document.body.style.margin = "0px";
	document.body.style.padding = "0px";
	document.body.style.background = "black";
	document.body.style.fontSize = "0px";
		
	if (isFullScreen) {
		LGlobal.stageScale = LStageScaleMode.SHOW_ALL;
	} else {
		LGlobal.stageScale = LStageScaleMode.NO_SCALE;
	}

	LGlobal.screen(LGlobal.FULL_SCREEN);
}

function getFullScreen () {
	if (typeof dataManager != UNDEFINED && dataManager) {
		var fullScreen = dataManager.get(DataManager.SETTINGS_FULL_SCREEN);

		if (fullScreen != DataManager.NO_DATA && fullScreen != DataManager.ERROR_DATA) {
			return fullScreen;
		}
	}

	return false;
}

function loadLanguage (language, onComplete) {
	loader.getLanguageFile(language);

	loader.load("language", onComplete);
}

function getLanguage () {
	var nativeLanguege = navigator.language;

	if (nativeLanguege && nativeLanguege.indexOf("zh") > -1) {
		nativeLanguege = "zh";
	} else {
		nativeLanguege = "en";
	}

	if (typeof dataManager != UNDEFINED && dataManager) {
		var languege = dataManager.get(DataManager.SETTINGS_LANGUAGE);

		if (languege != DataManager.NO_DATA && languege != DataManager.ERROR_DATA) {
			return languege;
		}
	}

	return nativeLanguege;
}

function loadProgressbar () {
	loader.load("progressbar", function () {
		loadData(loadBeginningInterface);
	});
}

function loadData (onComplete) {
	loader.load("data", onComplete);
}

function loadBeginningInterface () {
	closeCurrentBackgroundMusic();

	loader.load("beginningInterface", function () {
		var beginningLayer = new BeginningInterface();
		stage.addChild(beginningLayer);
	});
}

function loadSelectingLevelInterface (saveDataFirst) {
	closeCurrentBackgroundMusic();

	loader.load("selectingLevelInterface", function () {
		var selectingLevelLayer = new SelectingLevelInterface(saveDataFirst);
		stage.addChild(selectingLevelLayer);
	});
}

function loadSceneInterface (data) {
	closeCurrentBackgroundMusic();

	loader.getSceneRes(data);

	loader.load("sceneInterface", function () {
		var sceneLayer = new SceneInterface(data);
		stage.addChild(sceneLayer);
	});
}

function loadAboutInterface () {
	closeCurrentBackgroundMusic();

	loader.load("aboutInterface", function () {
		var aboutLayer = new AboutInterface();
		stage.addChild(aboutLayer);
	});
}

function loadSettingsInterface () {
	closeCurrentBackgroundMusic();

	loader.load("settingsInterface", function () {
		var settingsLayer = new SettingsInterface();
		stage.addChild(settingsLayer);
	});
}

function exitGame () {
	closeCurrentBackgroundMusic();
	
	var layer = new LSprite();
	layer.alpha = 0;
	layer.graphics.drawRect(0, "", [0, 0, LGlobal.width, LGlobal.height], true, "white");
	stage.addChild(layer);

	var logoBmp = new LBitmap(new LBitmapData(dataList["ducle_logo"]));
	logoBmp.filters = [new LDropShadowFilter(null, null, "dimgray")];
	logoBmp.x = (LGlobal.width - logoBmp.getWidth()) / 2;
	logoBmp.y = (LGlobal.height - logoBmp.getHeight()) / 2 - 50;
	layer.addChild(logoBmp);

	var logoTxt = new Label();
	logoTxt.color = "black";
	logoTxt.size = 35;
	logoTxt.text = "DUCLE";
	logoTxt.weight = "bold";
	logoTxt.filters = [new LDropShadowFilter(null, null, "black", 10)];
	logoTxt.x = (LGlobal.width - logoTxt.getWidth()) / 2;
	logoTxt.y = logoBmp.y + logoBmp.getHeight() + 20;
	layer.addChild(logoTxt);

	LTweenLite.to(layer, 1.5, {
		alpha : 1,
		onComplete : function () {
			LGlobal.sleep(2000);

			window.close();
		}	
	});
}

function playBackgroundMusic (name) {
	if (typeof mediaManager != UNDEFINED && mediaManager && mediaManager.musicEnabled) {
		mediaManager.playBackgroundMusic(name);
	}
}

function playMusicEffect (name, isStopBgm, useTween) {
	if (typeof mediaManager != UNDEFINED && mediaManager && mediaManager.musicEnabled) {
		mediaManager.playMusicEffect(name, isStopBgm, useTween);
	}
}

function closeCurrentBackgroundMusic () {
	if (typeof mediaManager != UNDEFINED && mediaManager) {
		mediaManager.closeCurrentBackgroundMusic();
	}
}

function closeAllMusicEffects () {
	if (typeof mediaManager != UNDEFINED && mediaManager) {
		mediaManager.closeAllMusicEffects();
	}
}