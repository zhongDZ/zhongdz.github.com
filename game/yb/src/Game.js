var Game = Game || {};

//是否开启音频
Game.MUSIC = 0;

//游戏状态
Game.status = 0;
Game.STATE_INIT = 0;
Game.STATE_PLAYING = 1;
Game.STATE_GAMEOVER = 2;
Game.STATE_PAUSE = 3;

//答题耗时
Game.questionUseTime = 0;

//死法，怎么死的
Game.DIE_TYPE = 0;  //0-伞志啃的， 1-答错题的

//游戏进行时间
Game.startTime = 0;
Game.endTime = 0;
Game.timeCount = 0;
Game.bestTime = 0;
Game.SCORE = 0;

Game.shareStatus = 0;

//计时器 1/10秒
Game.scheduleTimeCount = 0;

//伞志的缓存
Game.Enemy = [];

//伞志速度倍率
Game.EnemySpeedRate = 1;

Game.EnemyType = [
    //纷果
    {
        type: 2,
        lifeTime: 1000000,
        textureName: res.pig
    },
    //纷可
    {
        type: 2,
        lifeTime: 1000000,
        textureName: res.pig
    },
    //伞志
    {
        type: 2,
        lifeTime: 1000000,
        textureName: res.pig
    }
];

Game.rndInt = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

Game.rndString = function(len, strings) {
    var ret = "";
    var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(strings) str = strings;
    var strLen = str.length;
    while(len--) {
        ret += "" + str.charAt(Game.rndInt(0, strLen - 1));
    }
    return ret;
};

Game.getRndEnemyType = function () {
    var rnd = Game.rndInt(0, 100);
    if (rnd < 20) return Game.EnemyType[1];
    return Game.EnemyType[2];
};

//两点间距离
Game.getDistance = function (x1, y1, x2, y2) {
    var calX = x1 - x2;
    var calY = y1 - y2;
    return Math.pow((calX * calX + calY * calY), 0.5);
};


//伞志追缤果的速度
Game.getSanjiSpeed = function() {
    if(Game.timeCount <= 5) return 4;
    if(Game.timeCount <= 10) return 2.5;
    if(Game.timeCount <= 15) return 2.1;
    if(Game.timeCount <= 20) return 1.8;
    if(Game.timeCount <= 30) return 1.5;
    if(Game.timeCount <= 40) return 1.2;
    return 1;
};

//伞志追缤果的概率
Game.getSanjiRate = function() {
    if(Game.timeCount <= 5) return 100;
    if(Game.timeCount <= 10) return 90;
    if(Game.timeCount <= 15) return 85;
    if(Game.timeCount <= 20) return 60;
    if(Game.timeCount <= 30) return 40;
    if(Game.timeCount <= 40) return 30;
    return 20;
};

Game.setCookie = function(name, value) {
    var Days = 360;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
};

Game.getCookie = function(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)) return unescape(arr[2]);
    return null;
};

Game.getTime = function() {
    return new Date().getTime(); //毫秒
};
Game.getEndTime = function() {
    return Game.getTime() - Game.questionUseTime;
};

Game.genCookieId = function() {
    return new Date().format('yyyyMMddhhmmssS') + "" + Game.rndString(15, "1234567890");
};

Date.prototype.format =function(format) {
    var o = {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(), //day
        "h+" : this.getHours(), //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3), //quarter
        "S" : this.getMilliseconds() //millisecond
    };
    if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
        (this.getFullYear()+"").substr(4- RegExp.$1.length));
    for(var k in o)if(new RegExp("("+ k +")").test(format))
        format = format.replace(RegExp.$1,
                RegExp.$1.length==1? o[k] :
                ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
};

/*====================menu.js==================*/
//输出客户端信息
cc.sys.dump();

var SysMenu = cc.Layer.extend({

    init: function(){
        var bRet = false;
        if(this._super()) {

            var winSize = cc.director.getWinSize();
            var _this = this;

            var bg = new cc.Sprite(res.beginBg);
            bg.x = winSize.width / 2;
            bg.y = winSize.height / 2;
            this.addChild(bg);

            var guizeBg = new cc.Sprite(res.guizeBg);
            guizeBg.x = winSize.width / 2;
            guizeBg.y = winSize.height / 2;

            //按钮菜单
            var itemPlay = cc.MenuItemSprite.create(
                new cc.Sprite(res.beginBtn),  //开始
                new cc.Sprite(res.beginBtn),  //开始
                function(){
                    var scene = GameLayer.scene();
                    cc.director.runScene(cc.TransitionFade.create(0.8, scene));
            }, this);
            var menu1 = cc.Menu.create(itemPlay);
            menu1.x = winSize.width / 2;
            menu1.y = winSize.height / 2;
            this.addChild(menu1);

            var itemMore = cc.MenuItemSprite.create(
                new cc.Sprite(res.guize),    //规则
                new cc.Sprite(res.guize),
                function(){
                    _this.addChild(guizeBg);
                    _this.addChild(menu3);
                    menu1.setVisible(false);
                    menu2.setVisible(false);
            }, this);
            var menu2 = cc.Menu.create(itemMore);
            menu2.x = winSize.width / 2;
            menu2.y = winSize.height / 2 - 200;
            this.addChild(menu2);

            var backItem = cc.MenuItemSprite.create(
                new cc.Sprite(res.back),
                new cc.Sprite(res.back),
                function(){
                    _this.removeChild(guizeBg);
                    _this.removeChild(menu3);
                    menu1.setVisible(true);
                    menu2.setVisible(true);
            }, this);
            var menu3 = cc.Menu.create(backItem);
            menu3.x = winSize.width / 2;
            menu3.y = winSize.height / 2 - 200;


            bRet = true;
        }
        return bRet;
    }
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
/*====================menu.js==================*/

/*====================gameLayer.js==================*/
var instanceGameLayer;
var instanceGameScene;
var holdTime = 0;
var GameLayer = cc.Layer.extend({

    //触摸
    _touchOnCloud: null,
    _touchEndedPos: null,

    //暂停开始时间
    pauseStartTime: 0,

    //主角
    _benko: null,
    _benkoStatus: 1,
    _benkoStatusChangedTime: 0,
    _benkoScale: 1,
    _touchPos: null,
    _benkoFrame: [],

    //是否发生了清屏
    _clear: 1,

    //是否正在检查
    chkCollide: 0,

    //生命
    life: 1,
    lifeContainer: null,
    //计数
    timer: null,
    score: null,

    winSize: null,

    //问题
    question: null,

    helpBG: null,
    help: null,

    init: function () {
        var bRet = false;
        if (this._super()) {

            Game.timeCount = 60;
            Game.SCORE = 0;

            this.winSize = cc.director.getWinSize();
            var centerPos = cc.p(this.winSize.width / 2, this.winSize.height / 2);

            //底图
            var bg = cc.Sprite.create(res.gameBg);
            bg.setPosition(centerPos);
            this.addChild(bg, 1);

            //帮助底图
            this.helpBG = cc.Sprite.create(res.readyBg);
            this.helpBG.setPosition(centerPos);
            this.helpBG.opacity = 255;
            this.addChild(this.helpBG, 9900);

            //帮助
            this.help = cc.Sprite.create(res.tips);
            this.help.setPosition(centerPos);
            this.addChild(this.help, 10000);

            //分数
            // this.score = cc.LabelBMFont.create("60.0", res.t_front);
            this.score = new cc.LabelTTF("60.0",'Arial',70);
            this.score.attr({
                x: this.winSize.width - 170,
                y: this.winSize.height - 40
            });
            this.addChild(this.score, 1000);

            //放入缤果
            this._benko = cc.Sprite.create(res.yb);
            this._benko.setPosition(centerPos);
            this._benko.scale = this._benkoScale;
            this.addChild(this._benko, 2000);


            instanceGameLayer = this;
            bRet = true;

            Game.status = Game.STATE_INIT;
            Game.DIE_TYPE = 0;

            //监听触摸事件 {{
            if ('mouse' in cc.sys.capabilities)
                cc.eventManager.addListener({
                    event: cc.EventListener.MOUSE,
                    onMouseDown: function(event) {
                        event.getCurrentTarget().beginTouch();
                    },
                    onMouseUp: function (event) {
                        event.getCurrentTarget().resetTouch();
                    },
                    onMouseMove: function (event) {
                        if (event.getButton() != undefined)
                            event.getCurrentTarget().processEvent(event);
                    }
                }, this);
            if (cc.sys.capabilities.hasOwnProperty('touches')) {
                cc.eventManager.addListener({
                    event: cc.EventListener.TOUCH_ALL_AT_ONCE,
                    onTouchesBegan: function (touches, event) {
                        event.getCurrentTarget().beginTouch(touches[0]);
                    },
                    onTouchesEnded: function (touches, event) {
                        event.getCurrentTarget().resetTouch(touches[0]);
                    },
                    onTouchesMoved: function (touches, event) {
                        event.getCurrentTarget().processEvent(touches[0]);
                    }
                }, this);
            }
            // }} 监听触摸事件结束

            this._clear = 1;
            Game.questionUseTime = 0;
            Game.startTime = Game.endTime = Game.getTime();

            this.addEnemy2(Game.EnemyType[2]);

            this.scheduleUpdate();
            this.schedule(this.updateTimer, 1);
            this.schedule(this.updateScore, 0.1);
        }
        return bRet;
    },

    update: function(dt) {
        this.checkCollide();
    },

    updateScore: function() {
        if(Game.status == Game.STATE_PLAYING) {
            Game.endTime = Game.getEndTime();
            var s = ((60000 - (Game.endTime - Game.startTime)) / 1000).toFixed(1);
            this.score.setString(s);
            holdTime = s;//传值到结束页面
        }
    },

    beginTouch: function(touch) {
        if(Game.status == Game.STATE_INIT) {
            this.helpBG.active = false;
            this.helpBG.visible = false;
            this.help.active = false;
            this.help.visible = false;
            Game.timeCount = 59;
            Game.SCORE = 9;
            Game.startTime = Game.endTime = Game.getTime();
            Game.status = Game.STATE_PLAYING;
            //this.timer.setString(Game.timeCount); //todo
        } else if(Game.status == Game.STATE_PLAYING) {
            // this._benko.setSpriteFrame(this._benkoFrame[1]);
        }
    },

    resetTouch: function (touch) {
        this._touchPos = null;
        // this._benko.setSpriteFrame(this._benkoFrame[0]);
    },
    updateTimer: function () {
        if(Game.status == Game.STATE_INIT) return ;
        if (Game.status == Game.STATE_PLAYING) {
            Game.timeCount--;
        }
        this.updateEnemy();
    },
    processEvent: function (touch) {
        if (Game.status == Game.STATE_PLAYING) {
            if (this._touchPos != null) {
                var target = this._benko;
                var curPos = cc.p(target.x, target.y);
                var pos = touch.getLocation();
                this._touchEndedPos = pos;
                curPos = cc.p(curPos.x + pos.x - this._touchPos.x, curPos.y + pos.y - this._touchPos.y);
                //x
                if (curPos.x >= 0 && curPos.x <= instanceGameLayer.winSize.width) {
                    target.x = curPos.x;
                } else if (curPos.x < 0) {
                    target.x = 0;
                } else {
                    target.x = instanceGameLayer.winSize.width;
                }
                //y
                if (curPos.y >= 0 && curPos.y <= instanceGameLayer.winSize.height) {
                    target.y = curPos.y;
                } else if (curPos.y < 0) {
                    target.y = 0;
                } else {
                    target.y = instanceGameLayer.winSize.height;
                }
            } else {
                // this._benko.setSpriteFrame(this._benkoFrame[1]);
            }
            this._touchPos = touch.getLocation();
        }
    },
    addEnemy2: function(enemyType) {
        //伞志
        var num = 2;
        if (this._clear) {
            num = 5 + parseInt((60 - Game.timeCount) / 3);
            if(Game.timeCount < 15) {
                num = 5 + parseInt((60 - Game.timeCount) / 3 * 2);
            }
            this._clear = 0;
        }
        for (var i = 0; i < num; i++) {
            var enemy = Enemy.getOrCreate(enemyType);
            var rnd = Game.rndInt(0, 100);
            if (rnd % 4 == 1) {
                enemy.x = Game.rndInt(-10, this.winSize.width + 10);
                enemy.y = this.winSize.height + 10;
            } else if (rnd % 4 == 2) {
                enemy.x = -10;
                enemy.y = Game.rndInt(-10, this.winSize.height + 10);
            } else if (rnd % 4 == 3) {
                enemy.x = Game.rndInt(-10, this.winSize.width + 10);
                enemy.y = -10;
            } else {
                enemy.x = this.winSize.width + 10;
                enemy.y = Game.rndInt(-10, this.winSize.height + 10);
            }
        }
    },
    updateEnemy: function () {
        if(Game.status != Game.STATE_PLAYING) return ;
        if (Game.timeCount % 3 == 0) {
            this.addEnemy2(Game.EnemyType[2]);
        }
        var s = ((60000 - (Game.endTime - Game.startTime)) / 1000);
        if (s > 20 && Game.timeCount > 0 && Game.timeCount % 5 == 0) {
                var q = Enemy.getOrCreate(Game.EnemyType[0]); //Game.rndInt(0, 10) > 3 ? 0 : 1
                rnd = Game.rndInt(0, 10);
                if (rnd % 4 == 1) {
                    q.x = Game.rndInt(-10, this.winSize.width + 10);
                    q.y = this.winSize.height + 10;
                } else if (rnd % 4 == 2) {
                    q.x = -10;
                    q.y = Game.rndInt(-10, this.winSize.height + 10);
                } else if (rnd % 4 == 3) {
                    q.x = Game.rndInt(-10, this.winSize.width + 10);
                    q.y = -10;
                } else {
                    q.x = this.winSize.width + 10;
                    q.y = Game.rndInt(-10, this.winSize.height + 10);
                }
        }
    },
    collidRect: function () {
        //缤果的碰撞区域
        //var x = 60 * this._benkoScale;
        return cc.rect(this._benko.x - 45, this._benko.y - 48, 90, 85);
    },
    checkCollide1: function () {
        var w = this._benko.width, h = this._benko.height;
        var s = 0.4;
        w = w * s;
        h = h * s;
        //
        var benkoRect = this.collidRect(); //cc.rect(this._benko.x -  45, this._benko.y -  45, 90, 90);
        var dotRect = cc.rect(500 - 2, 500 - 2, 4, 4);
        if (cc.rectIntersectsRect(benkoRect, dotRect)) {
            cc.log(Game.timeCount + " 碰撞啦~ x=" + this._benko.x + ", y=" + this._benko.y + ", w=" + w + ", h=" + h);
        }
    },
    checkCollide: function () {
        if(Game.status != Game.STATE_PLAYING) return ;
        if(Game.getEndTime() - Game.startTime > 60100) {
            if(Game.status == Game.STATE_PLAYING) Game.endTime = Game.getEndTime();
            Game.status = Game.STATE_GAMEOVER;
            this.gameOver();
            return ;
        }
        if (this.chkCollide) return;
        //检查是否碰撞
        for (var i = 0; i < Game.Enemy.length; i++) {
            var enemy = Game.Enemy[i];
            if (!enemy.active || (!this._benkoStatus && enemy.enemyType > 1)) continue; //闪的时候可以吃问号
            //
            var benkoRect = this.collidRect();
            //发生碰撞
            if (cc.rectIntersectsRect(benkoRect, enemy.collideRect())) {
                if (enemy.enemyType == 0 || enemy.enemyType == 1) {
                    enemy.active = false;
                    enemy.visible = false;
                    cc.log("触发一个问题....");
                    this.pauseStartTime = Game.timeCount;
                    this._benkoStatus = 0; //无敌
                    Game.status = Game.STATE_PAUSE;
                }else if (enemy.enemyType == 2) {
                    //伞志
                    this._benkoStatus = 0;
                    this.gameOver();
                }
            }
        }
        this.chkCollide = 0;
    },

    hurtBenko: function () {
        //闪烁，然后生命减1
        var opac0 = cc.FadeTo.create(0.2, 50); //透明
        var opac1 = cc.FadeTo.create(0.2, 255); //不透明
        this._benko.runAction(cc.Sequence.create(opac0, opac1, opac0, opac1, opac0, opac1, opac0, opac1, opac0, opac1, new BenkoActive()));
        this.life--;
        if (Game.MUSIC) cc.audioEngine.playEffect(res.music_benkoHurt);
        this.updateBenkoLife();
    },

    updateBenkoLife: function () {
        if (this.life > 0) {

        } else {
            //GameOver
            Game.DIE_TYPE = 0;
            this.gameOver();
        }
    },

    gameOver: function () {
        // if(Game.status == Game.STATE_PLAYING) Game.endTime = Game.getEndTime();
        // cc.log("用时=====" + (Game.endTime - Game.startTime) + "ms, e=" + Game.endTime + ", s=" + Game.startTime);
        Game.status = Game.STATE_GAMEOVER;
        for (var i = 0; i < Game.Enemy.length; i++) {
            var enemy = Game.Enemy[i];
            enemy.active = false;
            enemy.visible = false;
        }
        this.unschedule(this.update);
        this.unschedule(this.updateScore);
        this.unschedule(this.updateTimer);
        cc.director.runScene(new gameOverScene);
    }
});

GameLayer.create = function () {
    var sg = new GameLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

GameLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = GameLayer.create();
    scene.addChild(layer, 1);
    instanceGameScene = scene;
    return scene;
};

GameLayer.prototype.addEnemy = function (enemy) {
    this.addChild(enemy, 10);
};

var BenkoActive = cc.ActionInterval.extend({
    ctor: function () {
    },
    update: function () {
        instanceGameLayer._benkoStatus = 1;
    }
});

var gameOverScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        var size = cc.director.getWinSize();

        var _holdTime = 60 - (parseInt(holdTime)).toFixed(2);
        var _percent = 0;
        if(_holdTime == 0){
            _percent = 0;
        }else if(_holdTime<20){
            _percent = parseInt(Math.random()*20+50);
        }else if(_holdTime<40){
            _percent = parseInt(Math.random()*20+70);
        }else{
            _percent = parseInt(Math.random()*9+90);
        }

        var time1Label = new cc.LabelTTF("坚持了"+_holdTime+"秒，打败了全国"+_percent+"%的玩家",'Arial',36);
        time1Label.x = size.width/2;
        time1Label.y = size.height - 200;
        this.addChild(time1Label,10);
        
        //底图
        var gameEnd = cc.Sprite.create(res.gameEnd);
        gameEnd.x = size.width/2;
        gameEnd.y = size.height/2;
        this.addChild(gameEnd);

        //按钮菜单
        var itemReStart = cc.MenuItemSprite.create(
            new cc.Sprite(res.reStart),  //开始
            new cc.Sprite(res.reStart),  //开始
            function(){
                var scene = GameLayer.scene();
                cc.director.runScene(cc.TransitionFade.create(0.8, scene));
        }, this);
        var menu1 = cc.Menu.create(itemReStart);
        menu1.x = size.width / 2;
        menu1.y = size.height / 2;
        this.addChild(menu1);

        //按钮菜单
        var itemMore = cc.MenuItemSprite.create(
            new cc.Sprite(res.more),  //开始
            new cc.Sprite(res.more),  //开始
            function(){
                window.location.href = g_link;
        }, this);
        var menu2 = cc.Menu.create(itemMore);
        menu2.x = size.width / 2;
        menu2.y = cc.visibleRect.bottom.y + 100;
        this.addChild(menu2);
    }
});
/*====================gameLayer.js==================*/

/*====================Enemy.js==================*/
var Enemy = cc.Sprite.extend({

    //存活时间，秒
    lifeTime: 10,
    enemyType: 0,

    active: true,
    speed: 1,

    acting: 1,
    frames: null,

    die: null,

    ctor: function(arg) {
        // this._super("#" + arg.textureName);
        this._super(res.pig);
        this.enemyType = arg.type;
        this.lifeTime = Game.EnemyType[this.enemyType].lifeTime;
        this.speed = Game.rndInt(1, 60);
        if(this.enemyType == 2) {
            // 伞志气
            //动画
            this.frames = [];
            for (var i = 1; i <= 4; i++) {
                // this.frames.push(cc.spriteFrameCache.getSpriteFrame("enemy/move/02000" + i + ".png"));
            }
            /*if(arg.type == 1) {
             this.scale = 0.5;
             }*/
        }
        // this.die = cc.Sprite.create("#enemy/die/030001.png");
        // this.die.active = false;
        // this.die.visible = false;
        //
        this.schedule(this.attack, 0.2);
        this.schedule(this.update, 1);
        this.attack();
        this.run();
    },

    actFrames: function() {
        if(this.frames != null) this.runAction(cc.RepeatForever.create(cc.Animate.create(cc.Animation.create(this.frames, 0.1))));
    },

    run: function() {
        if(this.enemyType == 2) {
            // this.actFrames();
        } else {
            this.runAction(cc.RepeatForever.create(cc.RotateBy.create(0.3, 60)));
        }
    },

    update: function() {
        if(this.lifeTime < 0 && this.active) {
            this.visible = false;
            this.active = false;
            this.destory();
        }
        if((this.enemyType < 2 && this.lifeTime < 0) || this.lifeTime <= -2) {
            this.stopAllActions();
            this.acting = 0;
            // this.die.active = false;
            // this.die.visible = false;
        }
        this.lifeTime--;
    },

    destory: function() {
        if(this.enemyType == 2) {
            //伞志气
            //动画
            var frames = [];
            for(var i = 1; i <= 3; i++) {
                // frames.push(cc.spriteFrameCache.getSpriteFrame("enemy/die/03000" + i + ".png"));
            }
            // this.die.active = true;
            // this.die.visible = true;
            // this.die.x = this.x;
            // this.die.y = this.y;
            // this.die.runAction(cc.Animate.create(cc.Animation.create(frames, 0.1)));
        }
    },

    attack: function() {
        //if(this.enemyType == 2 && Game.status == Game.STATE_PLAYING) {
        if(Game.status == Game.STATE_PLAYING) {
            if(this.acting == 0 && this.enemyType == 2) {
                this.acting = 1;
                // this.actFrames();
            }
            var x = 0, y = 0;
            //伞志追缤果的概率
            var rate = Game.getSanjiRate();
            if(Game.rndInt(0, 100) <= rate) {
                //cc.log("rate=" + rate + ", t=" + (60 - Game.timeCount));
                //缤果的快照坐标
                x = instanceGameLayer._benko.x;
                y = instanceGameLayer._benko.y;
            } else {
                var rnd = Game.rndInt(0, 100);
                if(rnd % 4 == 0) {
                    //移动到随机坐标
                    x = Game.rndInt(-50, instanceGameLayer.winSize.width + 50);
                    y = Game.rndInt(-50, instanceGameLayer.winSize.height + 50);
                } else if(rnd % 4 == 1) {
                    //移动到随机坐标
                    x = Game.rndInt(-50, instanceGameLayer.winSize.width / 2);
                    y = Game.rndInt(-50, instanceGameLayer.winSize.height / 2);
                } else if(rnd % 4 == 2) {
                    //移动到随机坐标
                    x = Game.rndInt(-50, instanceGameLayer.winSize.width / 2);
                    y = Game.rndInt(instanceGameLayer.winSize.height / 2, instanceGameLayer.winSize.height + 50);
                } else if(rnd % 4 == 3) {
                    //移动到随机坐标
                    x = Game.rndInt(instanceGameLayer.winSize.width / 2, instanceGameLayer.winSize.width + 50);
                    y = Game.rndInt(-50, instanceGameLayer.winSize.height / 2);
                } else {
                    //移动到随机坐标
                    x = Game.rndInt(instanceGameLayer.winSize.width / 2, instanceGameLayer.winSize.width + 50);
                    y = Game.rndInt(instanceGameLayer.winSize.height / 2, instanceGameLayer.winSize.height + 50);
                }
            }
            //寻路，追缤果
            this.speed = Game.rndInt(1, 60) * Game.getSanjiSpeed();
            //计算距离、时间
            var distance = Game.getDistance(this.x, this.y, x, y);
            var duration = distance / (this.speed * Game.EnemySpeedRate);
            this.runAction(cc.MoveTo.create(duration, cc.p(x, y)));
        } else { // if(this.enemyType == 2) {
            this.stopAllActions();
            this.acting = 0;
        }
    },

    collideRect:function () {
        if(this.enemyType == 2) {
            return cc.rect(this.x - 34, this.y - 33, 67, 63);
        } else {
            //return cc.rect(this.x - 41 * this.scale / 0.5, this.y - 31 * this.scale / 0.5, 74 * this.scale / 0.5, 58 * this.scale / 0.5);
            return cc.rect(this.x - 29, this.y - 27, 63, 53);
        }
    }

});

Enemy.create = function(arg) {
    var enemy = new Enemy(arg);
    instanceGameLayer.addEnemy(enemy);
    // instanceGameLayer.addEnemy(enemy.die);
    Game.Enemy.push(enemy);
    return enemy;
};

Enemy.getOrCreate = function(arg) {
    var enemy = null;
    for(var i = 0; i < Game.Enemy.length; i++) {
        enemy = Game.Enemy[i];
        if(enemy.enemyType != arg.type) continue;
        if(enemy.active == false && enemy.lifeTime < Game.lifeTime + 2) {
            enemy.active = true;
            enemy.visible = true;
            enemy.run();
            enemy.attack();
            enemy.schedule(enemy.attack, 0.2);
            enemy.schedule(enemy.update, 1);
            enemy.lifeTime = Game.EnemyType[enemy.enemyType].lifeTime;
            this.acting = 1;
            // this.actFrames();
            return enemy;
        }
    }
    enemy = new Enemy.create(arg);
    return enemy;
};

Enemy.preSet = function() {
    for(var t = 0; t < 3; t++)
        for(var i = 0; i < 20; i++) {
            new Enemy.create(Game.EnemyType[t]);
        }
};
/*====================Enemy.js==================*/