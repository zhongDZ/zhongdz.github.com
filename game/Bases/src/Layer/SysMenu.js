// cc.dumpConfig();

var SysMenu = cc.Layer.extend({
    init:function () {
        //bgm
        playSystemBGM();
        changeLoadingImage();
        var userGameStatus = 1; // 1：新2：是保存数据3：清理完毕后

        //3:android 4:iphone 5:ipad 100:mobile_web 101:pc_web
        var platform = cc.Application.getInstance().getTargetPlatform();
        this.storage = new Storage();

        if(platform == 100 || platform == 101){
            //(加载//数据)
            if (!window.localStorage) {
                alert("您不能保存在这个浏览器游戏状态。(ERR:localStorage)");
                return;
            }
            try{
                var storageData = JSON.parse(window.localStorage.getItem("gameStorage"));
                if(storageData["saveData"] == true){
                    cc.log("有一个存储数据");
                    this.storage.setJson(storageData);
                    userGameStatus = 2;
                }else{
                    cc.log("没有存储的数据");
                }
            }catch(e){
                cc.log("没有存储的数据");
            }
        }

        //back
        var sp = cc.Sprite.create(loading_png);
        sp.setAnchorPoint(0,0);
        this.addChild(sp, 0, 1);

        //新游戏
        this.newGameButton = new ButtonItem("NEW GAME",200,40,this.onNewGame,this);
        this.newGameButton.setPosition(160,80);
        this.addChild(this.newGameButton);

        //故事 & 教程
        this.newGameButton = new ButtonItem("TUTORIAL",200,40,this.onTutorial,this);
        this.newGameButton.setPosition(160,30);
        this.addChild(this.newGameButton);

        //加载游戏
        var loadGameTitle = "LOAD GAME (cleared)";
        if(this.storage.maxStageNumber < CONFIG.MAX_STAGE_NUMBER){
            loadGameTitle = "LOAD GAME (stage:" + Math.floor(this.storage.maxStageNumber) + ")";
        }
        this.loadGameButton = new ButtonItem(loadGameTitle,200,40,this.onLoadGame,this);
        this.loadGameButton.setPosition(160,130);
        this.addChild(this.loadGameButton);
        if(userGameStatus == 1){
            //这个地方通过缓存来判断玩到第几关
            this.loadGameButton.set_visible(false);
        }

        // debug
        this.label = cc.LabelTTF.create("DEBUG", "Arial", 18);
        this.debugModeButton = cc.MenuItemLabel.create(this.label,this.onDebugMode,this);
        this.debugModeButton.setPosition(320/2,400);
        if(CONFIG.DEBUG_FLAG == 1){
            this.debugModeButton.setVisible(true);
        }else{
            this.debugModeButton.setVisible(false);
        }
        var menu = cc.Menu.create(
            this.debugModeButton
        );
        menu.setPosition(0,0);
        this.addChild(menu);

        //score
        this.infoTextPosX = 320;
        this.infoTextPosY = 450;

        rtn = "试用版的所有六个阶段（ver1.01）。数据存储在浏览器中。SCORE---->";
        rtn += '到达阶段:' + this.storage.maxStageNumber + ' ';
        rtn += '总分 × ' + this.storage.totalGameScore + ' ';
        rtn += '占用土地 × ' + this.storage.totalOccupiedCnt + ' ';
        rtn += '克敌制胜的数 × ' + this.storage.totalKilledEnemyCnt + ' ';
        rtn += '它的盟友产生的数 × ' + this.storage.totalProductCnt + ' ';
        rtn += '能源号 × ' + this.storage.totalCoinAmount + '';

        this.infoText = cc.LabelTTF.create(rtn,"Arial",15);
        this.infoText.setAnchorPoint(0,0);
        this.infoText.setPosition(this.infoTextPosX,this.infoTextPosY);
        this.addChild(this.infoText);

        this.scheduleUpdate();
        this.setTouchEnabled(true);

        return true;
    },

    update:function(dt){
        //要获得阶段的信息（难度）
        this.infoText.setPosition(this.infoTextPosX,this.infoTextPosY);
        this.infoTextPosX -= 1;
        if(this.infoTextPosX <= -900){
            this.infoTextPosX = 320;
        }
    },

    onNewGame:function (pSender) {
        playSystemButton();

        cc.LoaderScene.preload(g_chara_select_resources, function () {
            var scene = cc.Scene.create();

            //从右侧传递游戏信息到左侧
            this.storage = getStageDataFromJson(this.storage,1);

            scene.addChild(CharaSelectLayer.create(this.storage));
            cc.Director.getInstance().replaceScene(cc.TransitionSlideInR.create(1.2, scene));
        }, this);
    },

    onLoadGame:function (pSender) {
        playSystemButton();

        if(this.storage.maxStageNumber >= CONFIG.MAX_STAGE_NUMBER){
            //全部清除
            var scene = cc.Scene.create();
            scene.addChild(StaffRollLayer.create(this.storage));
            cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
        }else{
            cc.LoaderScene.preload(g_chara_select_resources, function () {
                var scene = cc.Scene.create();

                //要获得阶段的信息（难度）
                this.storage = getStageDataFromJson(this.storage,this.storage.maxStageNumber);

                scene.addChild(CharaSelectLayer.create(this.storage));
                cc.Director.getInstance().replaceScene(cc.TransitionSlideInR.create(1.2, scene));
            }, this);
        }
    },

    onTutorial:function (pSender) {
        playSystemButton();

        cc.LoaderScene.preload(g_chara_select_resources, function () {
            var scene = cc.Scene.create();
            scene.addChild(TutolialLayer.create());
            cc.Director.getInstance().replaceScene(cc.TransitionSlideInR.create(1.2, scene));
        }, this);
    },

    onDebugMode:function (pSender) {

        this.storage.resetJson();
        //var jsonFile = {"saveData":false};
        //localStorage.setItem("gameStorage",JSON.stringify(jsonFile));
        localStorage.removeItem("gameStorage");

        playSystemButton();

        cc.LoaderScene.preload(g_resources, function () {

            //为了新存储至创纪录的游戏信息
            var storage = new Storage();

            //为了让玩家参数
            storage = getCharactorDataFromJson(storage,0);

            //要获取信息阶段
            storage = getStageDataFromJson(storage,CONFIG.DEBUG_STAGE_NUM);

            //storage.coinAmount = 50;

            var scene = cc.Scene.create();
            scene.addChild(GameLayer.create(storage));
            //scene.addChild(StaffRollLayer.create(storage));

            cc.Director.getInstance().replaceScene(cc.TransitionSlideInR.create(1.2, scene));
        }, this);
    },
});

SysMenu.create = function () {
    var sg = new SysMenu();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

SysMenu.scene = function () {
    var scene = cc.Scene.create();
    var layer = SysMenu.create();
    scene.addChild(layer);
    return scene;
};

//for XCode Compile
var MyScene = cc.Scene.extend({
    ctor:function() {
        this._super();
    },
    onEnter:function () {
        this._super();
        var layer = new SysMenu();
        this.addChild(layer);
        layer.init();
    }
});

