var size = {
    "width" : 640,
    "height": 1007
}
var canChangePage = true;
var curScene = null;
var gameScene = cc.Scene.extend({
    listener: null,
    accelListener: null,
    currentIndex: 0,//记录当前页的参数
    sceneList: [],
    ctor: function () {
        this._super();
        // cc.spriteFrameCache.addSpriteFrames(res.firstPage_plist);
    },
    onEnter: function () {//此方法是场景初始化完成即将展示的消息回调
        this._super();//调用构造函数，确保Scene被正确初始化
        this.initUI();
        this.initBottom();
        this.addTouch();
        // this.initHideEvent();
        // curScene = this;
        initMusic();
        // playMusic(true);
       // this.addAccel();
    },
    initUI: function () {
        var bg = new cc.Sprite(res.layer2);
        bg.anchorX = 0;
        bg.anchorY = 0;
        bg.scaleX = cc.winSize.width / bg.width;
        bg.scaleY = cc.winSize.height / bg.height;
        this.addChild(bg, 0);

        this.menuItemToggle = new cc.MenuItemToggle(new cc.MenuItemImage(res.music_y), new cc.MenuItemImage(res.music_n), this.toggleMusicCallback, this);
        this.menuItemToggle.setPosition(cc.pAdd(cc.visibleRect.right, cc.p(-this.menuItemToggle.width / 2 - 30, 420)));
        var togglemenu = new cc.Menu(this.menuItemToggle);
        togglemenu.anchorX = 0;
        togglemenu.anchorY = 0;
        togglemenu.x = 0;
        togglemenu.y = 0;
        this.addChild(togglemenu, 1);

        // this.animLayer = new cc.Layer();
        // this.addChild(this.animLayer);
        // this.sceneList.push(new Layer1());
        // this.sceneList.push(new Layer2());
        // this.sceneList.push(new Layer3());
        // this.sceneList.push(new Layer4());
        // this.sceneList.push(new Layer5());
        // for (var i = 0; i < this.sceneList.length; i++) {
        //     var scene = this.sceneList[i];
        //     scene.anchorX = 0;
        //     scene.anchorY = 0;
        //     scene.x = 0;
        //     scene.y = 0;
        //     if (this.currentIndex != i) {
        //         scene.setVisible(false);
        //     }
        //     this.animLayer.addChild(scene, this.sceneList.length - i);
        // }
    },
    initBottom:function(){
        this.arrow = new cc.Sprite(res.arrow);
        this.arrow.setPosition(cc.pAdd(cc.visibleRect.bottom, cc.p(0, 50)));
        var posY = this.arrow.y;
        var arrowAction = cc.repeatForever(cc.sequence(cc.spawn(cc.moveTo(0.8, cc.p(this.arrow.x, posY + 30)).easing(cc.easeIn(0.5)), cc.fadeOut(1)), cc.delayTime(0.8), cc.callFunc(function () {
            this.arrow.y = this.arrow.y - 30;
            this.arrow.opacity = 255;
        }, this)));
        this.arrow.runAction(arrowAction);
        this.addChild(this.arrow, 1);
    },
    initHideEvent: function () {//用来监听浏览器进入后台，和从后台进入前台的事件，用来控制音乐的播放状态
        cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function () {
            playMusic(true);
        });
        cc.eventManager.addCustomListener(cc.game.EVENT_HIDE, function () {
            playMusic(false);
        });

    },
    toggleMusicCallback: function (sender) {//控制音乐的回调函数
        if (sender.getSelectedIndex() == 0) {
            playMusic(true);
        } else {
            playMusic(false);
        }
    },
    togleArrow: function (status) {//控制箭头的显示和隐藏
        if (status) {
            this.arrow.visible = true;
        }
        else {
            this.arrow.visible = false;
        }
    },
    addTouch: function () {
        var self = this;
        self.listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            startPosY: 0,
            onTouchBegan: function (touch, event) {
                this.startPosY = touch.getLocation().y;
                return true;
            },
            onTouchMoved: function (touch, event) {

            },
            onTouchEnded: function (touch, event) {
                if (musicPlayStatus) {
                    playMusic(true);
                }
                if (canChangePage) {
                    var delta = touch.getLocation().y - this.startPosY;
                    if (delta > 15 && self.currentIndex < self.sceneList.length - 1) {
                        self.changePage(++self.currentIndex, true);
                    } else if (delta < -15 && self.currentIndex > 0) {
                        self.changePage(--self.currentIndex, false);
                    }
                }
            },
            onTouchCancelled: function (touch, event) {

            }
        });
        cc.eventManager.addListener(self.listener, self);
    },
    addAccel: function () {
        var self = this;
        cc.inputManager.setAccelerometerInterval(1 / 30);
        cc.inputManager.setAccelerometerEnabled(true);
        this.accelListener = {
            event: cc.EventListener.ACCELERATION,
            callback: function (acc, event) {
                for (var i = 0; i < self.sceneList.length; ++i) {
                    self.sceneList[i].accelEvent(acc, event);
                }
            }
        }
        cc.eventManager.addListener(this.accelListener, self);
    },
    changePage: function (index, next) {//切换页面  
        canChangePage = false;
        var scene = next ? this.sceneList[index - 1] : this.sceneList[index + 1];
        if (index == 4) {
            this.togleArrow(false);
        } else {
            this.togleArrow(true);
        }
        var nextPage = function () {
            scene.visible = false;
            this.sceneList[index].visible = true;
            this.sceneList[index].appear();
        };
        if (scene) {
            scene.disappear(nextPage, this);
        }
    }
});


/******************************************************************************/
var getById = function (id) {
    return document.getElementById(id);
}
var initMusic = function () {
    var audio = getById("myAudio");
    audio.src = "res/bg.mp3";
    audio.play();
}
var playMusic = function (status) {
    var audio = getById("myAudio");
    if (status) {
        if (audio.paused) {
            audio.play();
            musicPlayStatus = true;
        }
    } else {
        if (!audio.paused) {
            audio.pause();
            musicPlayStatus = false;
        }
    }
}