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