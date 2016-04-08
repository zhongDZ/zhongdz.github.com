var canChangePage = true;
var curScene = null;
var MainScene = cc.Scene.extend({
    listener: null,
    accelListener: null,
    currentIndex: 0,//记录当前页的参数
    sceneList: [],
    ctor: function () {
        this._super();
        cc.spriteFrameCache.addSpriteFrames(res.firstPage_plist);
    },
    onEnter: function () {//此方法是场景初始化完成即将展示的消息回调
        this._super();//调用构造函数，确保Scene被正确初始化
        this.initUI();
        // this.addTouch();
        this.initHideEvent();
        curScene = this;
        initMusic();
        playMusic(true);
       // this.addAccel();

       this.loadListener();
    },
    initUI: function () {
        var bg = new cc.Sprite(res.layer4);
        bg.anchorX = 0;
        bg.anchorY = 0;
        bg.scaleX = cc.winSize.width / bg.width;
        bg.scaleY = cc.winSize.height / bg.height;
        this.addChild(bg, 0);

        this.arrow = new cc.Sprite("#arrow.png");
        this.arrow.setPosition(cc.pAdd(cc.visibleRect.bottom, cc.p(0, 50)));
        var posY = this.arrow.y;
        var arrowAction = cc.repeatForever(cc.sequence(cc.spawn(cc.moveTo(0.8, cc.p(this.arrow.x, posY + 30)).easing(cc.easeIn(0.5)), cc.fadeOut(1)), cc.delayTime(0.8), cc.callFunc(function () {
            this.arrow.y = this.arrow.y - 30;
            this.arrow.opacity = 255;
        }, this)));
        this.arrow.runAction(arrowAction);
        this.addChild(this.arrow, 1);

        this.menuItemToggle = new cc.MenuItemToggle(new cc.MenuItemImage("#music.png"), new cc.MenuItemImage("#music_sel.png"), this.toggleMusicCallback, this);
        this.menuItemToggle.setPosition(cc.pAdd(cc.visibleRect.right, cc.p(-this.menuItemToggle.width / 2 - 30, 420)));
        var togglemenu = new cc.Menu(this.menuItemToggle);
        togglemenu.anchorX = 0;
        togglemenu.anchorY = 0;
        togglemenu.x = 0;
        togglemenu.y = 0;
        this.addChild(togglemenu, 1);

        this.animLayer = new cc.Layer();
        this.addChild(this.animLayer);
        this.sceneList.push(new Layer1());
        this.sceneList.push(new Layer2());
        this.sceneList.push(new Layer3());
        this.sceneList.push(new Layer4());
        this.sceneList.push(new Layer5());
        for (var i = 0; i < this.sceneList.length; i++) {
            var scene = this.sceneList[i];
            scene.anchorX = 0;
            scene.anchorY = 0;
            scene.x = 0;
            scene.y = 0;
            if (this.currentIndex != i) {
                scene.setVisible(false);
            }
            this.animLayer.addChild(scene, this.sceneList.length - i);
        }
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
    loadListener : function(){
        var listener = cc.EventListener.create({
            event           : cc.EventListener.TOUCH_ONE_BY_ONE,
            target          : this,
            swallowTouches  : true,
            onTouchBegan    : this.onTouchBegan,
            onTouchMoved    : this.onTouchMoved,
            onTouchEnded    : this.onTouchEnded
        });
        cc.eventManager.addListener(listener, this);
    },
    onTouchBegan: function (touch, event) {
        var self = this.target;
        self.startPosY = touch.getLocation().y;
        var locationInNode = self.convertToNodeSpace(touch.getLocation());
        var size = self.getContentSize();
        var rect = cc.rect(0, 0, size.width, size.height);
        if (!cc.rectContainsPoint(rect, locationInNode)) {
            return false;
        }
        return true;
    },
    onTouchMoved : function (touch, event) {
        var self = this.target;
    },
    onTouchEnded : function (touch, event) {
        console.log("isSuccess")
        var self = this.target;
        if (musicPlayStatus) {
            playMusic(true);
        }
        if (canChangePage) {
            var delta = touch.getLocation().y - self.startPosY;
            if (delta > 15 && self.currentIndex < self.sceneList.length - 1) {
                self.changePage(++self.currentIndex, true);
            } else if (delta < -15 && self.currentIndex > 0) {
                self.changePage(--self.currentIndex, false);
            }
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
var Layer1 = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.initUI();
    },
    onEnter: function () {
        this._super();
        this.appear();
    },
    initUI: function () {
        canChangePage = false;
        this.accLayer = new cc.Layer();
        this.accLayer.anchorX = 0;
        this.accLayer.anchorY = 0;
        this.accLayer.x = 0;
        this.accLayer.y = 0;
        this.addChild(this.accLayer);

        this.logo = new cc.Sprite(res.first_logo);
        this.logo.scale = 0;
        this.logo.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(0, this.logo.height / 3 * 2)));
        this.addChild(this.logo);

        this.leftFont = new cc.Sprite(res.first_1);
        this.leftFont.setPosition(cc.pAdd(cc.visibleRect.left, cc.p(-this.leftFont.width / 2, -this.leftFont.height / 2)));
        this.addChild(this.leftFont);

        this.rightFont = new cc.Sprite(res.first_2);
        this.rightFont.setPosition(cc.pAdd(cc.visibleRect.right, cc.p(this.rightFont.width / 2, -this.rightFont.height / 2)));
        this.addChild(this.rightFont);

        this.leftUpPic = new cc.Sprite("#block_left up.png");
        this.leftUpPic.anchorX = 0, this.leftUpPic.anchorY = 1;
        this.leftUpPic.setPosition(cc.pAdd(cc.visibleRect.topLeft, cc.p(-this.leftUpPic.width, this.leftUpPic.height)));
        this.accLayer.addChild(this.leftUpPic);


        this.leftDownPic = new cc.Sprite("#block_left down.png");
        this.leftDownPic.anchorX = 0, this.leftDownPic.anchorY = 0;
        this.leftDownPic.setPosition(cc.pAdd(cc.visibleRect.bottomLeft, cc.p(-this.leftDownPic.width + 20, -this.leftDownPic.height)));
        this.accLayer.addChild(this.leftDownPic);

        this.rightUpPic = new cc.Sprite("#block_right up.png");
        this.rightUpPic.anchorX = 1, this.rightUpPic.anchorY = 1;
        this.rightUpPic.setPosition(cc.pAdd(cc.visibleRect.topRight, cc.p(this.rightUpPic.width, this.rightUpPic.height)));
        this.accLayer.addChild(this.rightUpPic);

        this.rightDownPic = new cc.Sprite("#block_right down.png");
        this.rightDownPic.anchorX = 1, this.rightDownPic.anchorY = 0;
        this.rightDownPic.setPosition(cc.pAdd(cc.visibleRect.bottomRight, cc.p(this.rightDownPic.width, -this.rightDownPic.height)));
        this.accLayer.addChild(this.rightDownPic);
    },
    accelEvent: function (acc, event) {
        if (this.visible) {
            movArea(acc, this.accLayer);
        }
    },
    appear: function () {
        var logoAction = cc.sequence(cc.scaleTo(0.5, 1), cc.callFunc(function () {
            this.leftUpPic.leftUpAction = cc.moveTo(0.5, cc.p(this.leftUpPic.x + this.leftUpPic.width, this.leftUpPic.y - this.leftUpPic.height + 80));
            this.leftUpPic.runAction(this.leftUpPic.leftUpAction);

            this.leftDownPic.leftDownAction = cc.moveTo(0.5, cc.p(this.leftDownPic.x + this.leftDownPic.width, this.leftDownPic.y + this.leftDownPic.height));
            this.leftDownPic.runAction(this.leftDownPic.leftDownAction);

            this.rightUpPic.rightUpAction = cc.moveTo(0.5, cc.p(this.rightUpPic.x - this.rightUpPic.width - 30, this.rightUpPic.y - this.rightUpPic.height - 30));
            this.rightUpPic.runAction(this.rightUpPic.rightUpAction);

            this.rightDownPic.rightDownAction = cc.moveTo(0.5, cc.p(this.rightDownPic.x - this.rightDownPic.width, this.rightDownPic.y + this.rightDownPic.height));
            this.rightDownPic.runAction(this.rightDownPic.rightDownAction);

            this.leftFont.fontLeftAction = cc.sequence(cc.delayTime(0.3), cc.moveTo(0.5, cc.p(this.leftFont.x + this.leftFont.width, this.leftFont.y)));
            this.leftFont.runAction(this.leftFont.fontLeftAction);

            this.rightFont.fontRightAction = cc.sequence(cc.delayTime(0.4), cc.moveTo(0.4, cc.p(this.rightFont.x - this.rightFont.width, this.rightFont.y)));
            this.rightFont.runAction(this.rightFont.fontRightAction);

        }, this), cc.delayTime(1.3), cc.callFunc(function () {
            canChangePage = true;
        }, this));
        this.logo.runAction(logoAction);

    },
    disappear: function (callback, target) {

        var action = cc.sequence(cc.scaleTo(0.5, 0), cc.callFunc(function () {
            this.leftUpPic.runAction(this.leftUpPic.leftUpAction.reverse());
            this.leftDownPic.runAction(this.leftDownPic.leftDownAction.reverse());
            this.rightUpPic.runAction(this.rightUpPic.rightUpAction.reverse());
            this.rightDownPic.runAction(this.rightDownPic.rightDownAction.reverse());
            this.leftFont.runAction(this.leftFont.fontLeftAction.reverse());
            this.rightFont.runAction(this.rightFont.fontRightAction.reverse());
        }, this), cc.delayTime(0.9), cc.callFunc(function () {

            if (target && callback) {
                callback.call(target);
            }
        }, this));
        this.logo.runAction(action);
    }
});
var Layer2 = cc.Layer.extend({
    ctor: function () {
        this._super();
    },
    onEnter: function () {
        this._super();
        cc.spriteFrameCache.addSpriteFrames(res.secondPage_plist);
        this.initUI();
       // this.appear();
    },
    initUI: function () {
        this.accLayer = new cc.Layer();
        this.accLayer.anchorX = 0;
        this.accLayer.anchorY = 0;
        this.accLayer.x = 0;
        this.accLayer.y = 0;
        this.addChild(this.accLayer);

        this.lineLeftUp = new cc.Sprite("#line_left up.png");
        this.lineLeftUp.setPosition(cc.pAdd(cc.visibleRect.topLeft, cc.p(-this.lineLeftUp.width / 2, -this.lineLeftUp.height)));
        this.addChild(this.lineLeftUp);
        this.blockLeftUp = new cc.Sprite("#block_left_up.png");
        this.blockLeftUp.setPosition(cc.pAdd(cc.visibleRect.topLeft, cc.p(-this.blockLeftUp.width / 2, -this.blockLeftUp.height)));
        this.accLayer.addChild(this.blockLeftUp);


        this.lineRightDown = new cc.Sprite("#line_right down.png");
        this.lineRightDown.setPosition(cc.pAdd(cc.visibleRect.bottomRight, cc.p(this.lineRightDown.width / 2, this.lineRightDown.height / 2 * 3)));
        this.addChild(this.lineRightDown);
        this.blockRightDown = new cc.Sprite("#block_right_down.png");
        this.blockRightDown.setPosition(cc.pAdd(cc.visibleRect.bottomRight, cc.p(this.blockRightDown.width / 2, this.blockRightDown.height / 2 * 3)));
        this.accLayer.addChild(this.blockRightDown);

        this.lineLeftDown = new cc.Sprite("#line_left down.png");
        this.lineLeftDown.setPosition(cc.pAdd(cc.visibleRect.bottomLeft, cc.p(-this.lineLeftDown.width / 2, -this.lineLeftDown.height / 2)));
        this.addChild(this.lineLeftDown);
        this.blockLeftDown = new cc.Sprite("#block_left_down.png");
        this.blockLeftDown.setPosition(cc.pAdd(cc.visibleRect.bottomLeft, cc.p(-this.blockLeftDown.width / 2, -this.blockLeftDown.height / 2)));
        this.accLayer.addChild(this.blockLeftDown);

        this.lineRightUp = new cc.Sprite("#line_right up.png");
        this.lineRightUp.setPosition(cc.pAdd(cc.visibleRect.topRight, cc.p(this.lineRightUp.width / 2, this.lineRightUp.height / 2)));
        this.addChild(this.lineRightUp);
        this.blockRightUp = new cc.Sprite("#block_right_up.png");
        this.blockRightUp.setPosition(cc.pAdd(cc.visibleRect.topRight, cc.p(this.blockRightUp.width / 2, this.blockRightUp.height / 2)));
        this.accLayer.addChild(this.blockRightUp);


        this.fontLogo = new cc.Sprite(res.font1);
        this.fontLogo.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(0, 0)));
        this.fontLogo.setScale(0);
        this.addChild(this.fontLogo);

    },
    accelEvent: function (acc, event) {
        if (this.visible) {
            movArea(acc, this.accLayer);
        }
    },
    appear: function () {

        var logoAction = cc.sequence(cc.scaleTo(0.5, 0.8), cc.callFunc(function () {
            this.blockLeftUp.leftUpAction = cc.moveTo(0.3, cc.p(this.blockLeftUp.x + this.blockLeftUp.width + 20, this.blockLeftUp.y + this.blockLeftUp.height / 2 - 20));
            this.blockLeftUp.runAction(this.blockLeftUp.leftUpAction);
            this.lineLeftUp.leftUpAction = cc.moveTo(0.3, cc.p(this.lineLeftUp.x + this.lineLeftUp.width, this.lineLeftUp.y + this.lineLeftUp.height / 2));
            this.lineLeftUp.runAction(this.lineLeftUp.leftUpAction);

            this.blockRightDown.rightDownAction = cc.moveTo(0.3, cc.p(this.blockRightDown.x - this.blockRightDown.width - 20, this.blockRightDown.y - this.blockRightDown.height - 20));
            this.blockRightDown.runAction(this.blockRightDown.rightDownAction);
            this.lineRightDown.rightDownAction = cc.moveTo(0.3, cc.p(this.lineRightDown.x - this.lineRightDown.width, this.lineRightDown.y - this.lineRightDown.height));
            this.lineRightDown.runAction(this.lineRightDown.rightDownAction);

            this.lineLeftDown.leftDownAction = cc.sequence(cc.delayTime(0.3), cc.moveTo(0.3, cc.p(this.lineLeftDown.x + this.lineLeftDown.width + 20, this.lineLeftDown.y + this.lineLeftDown.height + 20)));
            this.lineLeftDown.runAction(this.lineLeftDown.leftDownAction);
            this.blockLeftDown.leftDownAction = cc.sequence(cc.delayTime(0.3), cc.moveTo(0.3, cc.p(this.blockLeftDown.x + this.blockLeftDown.width, this.blockLeftDown.y + this.blockLeftDown.height)));
            this.blockLeftDown.runAction(this.blockLeftDown.leftDownAction);

            this.blockRightUp.rightUpAction = cc.sequence(cc.delayTime(0.3), cc.moveTo(0.3, cc.p(this.blockRightUp.x - this.blockRightUp.width - 20, this.blockRightUp.y - this.blockRightUp.height - 20)));
            this.blockRightUp.runAction(this.blockRightUp.rightUpAction);
            this.lineRightUp.rightUpAction = cc.sequence(cc.delayTime(0.3), cc.moveTo(0.3, cc.p(this.lineRightUp.x - this.lineRightUp.width, this.lineRightUp.y - this.lineRightUp.height)));
            this.lineRightUp.runAction(this.lineRightUp.rightUpAction);

        }, this), cc.delayTime(0.8), cc.callFunc(function () {

            canChangePage = true;
        }, this));
        this.fontLogo.runAction(logoAction);
    },
    disappear: function (callback, target) {

        var logoAction = cc.sequence(cc.scaleTo(0.5, 0), cc.callFunc(function () {
            this.blockLeftUp.runAction(this.blockLeftUp.leftUpAction.reverse());
            this.lineLeftUp.runAction(this.lineLeftUp.leftUpAction.reverse());

            this.blockRightDown.runAction(this.blockRightDown.rightDownAction.reverse());
            this.lineRightDown.runAction(this.lineRightDown.rightDownAction.reverse());

            this.lineLeftDown.runAction(this.lineLeftDown.leftDownAction.reverse());
            this.blockLeftDown.runAction(this.blockLeftDown.leftDownAction.reverse());

            this.blockRightUp.runAction(this.blockRightUp.rightUpAction.reverse());
            this.lineRightUp.runAction(this.lineRightUp.rightUpAction.reverse());
        }, this), cc.delayTime(0.8), cc.callFunc(function () {

            if (target && callback) {
                callback.call(target);
            }
        }, this));
        this.fontLogo.runAction(logoAction);
    }
});
var Layer3 = cc.Layer.extend({
    speed: 200,
    ctor: function () {
        this._super();
    },
    onEnter: function () {
        this._super();
        cc.spriteFrameCache.addSpriteFrames(res.thirdPage_plist);
        this.initUI();
       // this.appear();
    },
    initUI: function () {

        this.accLayer = new cc.Layer();
        this.accLayer.anchorX = 0;
        this.accLayer.anchorY = 0;
        this.accLayer.x = 0;
        this.accLayer.y = 0;
        this.addChild(this.accLayer);

        this.leftUpPic = new cc.Sprite("#block_left_up2.png");
        this.leftUpPic.setPosition(cc.pAdd(cc.visibleRect.topLeft, cc.p(-this.leftUpPic.width / 2, this.leftUpPic.height / 2)));
        this.accLayer.addChild(this.leftUpPic);


        this.leftDownPic = new cc.Sprite("#block_left_down2.png");
        this.leftDownPic.setPosition(cc.pAdd(cc.visibleRect.bottomLeft, cc.p(-this.leftDownPic.width / 2, -this.leftDownPic.height / 2)));
        this.accLayer.addChild(this.leftDownPic);

        this.rightUpPic = new cc.Sprite("#block_right_up2.png");
        this.rightUpPic.setPosition(cc.pAdd(cc.visibleRect.topRight, cc.p(this.rightUpPic.width / 2, -this.rightUpPic.height / 2)));
        this.accLayer.addChild(this.rightUpPic);

        this.rightDownPic = new cc.Sprite("#block_right_down2.png");
        this.rightDownPic.setPosition(cc.pAdd(cc.visibleRect.bottomRight, cc.p(this.rightDownPic.width / 2, -this.rightDownPic.height / 2)));
        this.accLayer.addChild(this.rightDownPic);

        this.line = new cc.ProgressTimer(new cc.Sprite(res.line_png));
        this.line.type = cc.ProgressTimer.TYPE_BAR;
        this.line.midPoint = cc.p(0, 1);
        this.line.barChangeRate = cc.p(0, 1);
        this.line.percentage = 0;
        this.line.setPosition(cc.p(cc.winSize.width / 2 - 30, cc.winSize.height - this.line.height / 2));
        this.addChild(this.line);

        this.firstPoint = new cc.Sprite("#circle_red.png");
        this.firstPoint.setPosition(cc.p(35, this.line.height - 111));
        this.firstPoint.scale = 0;
        this.line.addChild(this.firstPoint);

        this.firstText = new cc.Sprite(res.des1);
        this.firstText.setPosition(cc.p(this.firstPoint.x + this.firstPoint.width / 2 + 20 + this.firstText.width, this.firstPoint.y - 50));
        this.firstText.opacity = 0;
        this.line.addChild(this.firstText);

        this.secondPoint = new cc.Sprite("#circle_org.png");
        this.secondPoint.setPosition(cc.p(395, 395));
        this.secondPoint.scale = 0;
        this.line.addChild(this.secondPoint);

        this.secondText = new cc.Sprite(res.des2);
        this.secondText.setPosition(cc.p(this.secondPoint.x - this.firstPoint.width / 2 - 20 - this.secondText.width, this.secondPoint.y - 20));
        this.secondText.opacity = 0;
        this.line.addChild(this.secondText);

        this.thirdPoint = new cc.Sprite("#circle_green.png");
        this.thirdPoint.setPosition(cc.p(15, 168));
        this.thirdPoint.scale = 0;
        this.line.addChild(this.thirdPoint);

        this.thirdText = new cc.Sprite(res.des3);
        this.thirdText.setPosition(cc.p(this.thirdPoint.x + this.thirdPoint.width / 2 + 20 + this.thirdText.width, this.thirdPoint.y - 22));
        this.thirdText.opacity = 0;
        this.line.addChild(this.thirdText);

        this.forthPoint = new cc.Sprite("#circle_end.png");
        this.forthPoint.setPosition(cc.p(150, -this.forthPoint.height / 2 + 5));
        this.line.addChild(this.forthPoint);
        this.forthPoint.scale = 0;

    },
    accelEvent: function (acc, event) {
        if (this.visible) {
            movArea(acc, this.accLayer);
        }
    },
    appear: function () {//20,50,80,100
        this.leftUpPic.inAciton = cc.moveTo(0.2, cc.p(this.leftUpPic.x + this.leftUpPic.width + 20, this.leftUpPic.y - this.leftUpPic.height + 20));
        this.leftUpPic.runAction(this.leftUpPic.inAciton);

        this.leftDownPic.inAciton = cc.moveTo(0.2, cc.p(this.leftDownPic.x + this.leftDownPic.width + 20, this.leftDownPic.y + this.leftDownPic.height + 20));
        this.leftDownPic.runAction(this.leftDownPic.inAciton);

        this.rightUpPic.inAciton = cc.moveTo(0.2, cc.p(this.rightUpPic.x - this.rightUpPic.width - 30, this.rightUpPic.y - this.rightUpPic.height - 30));
        this.rightUpPic.runAction(this.rightUpPic.inAciton);

        this.rightDownPic.inAciton = cc.moveTo(0.2, cc.p(this.rightDownPic.x - this.rightDownPic.width - 20, this.rightDownPic.y + this.rightDownPic.height + 80));
        this.rightDownPic.runAction(this.rightDownPic.inAciton);

        var action = cc.sequence(cc.delayTime(0.2), cc.progressTo(0.3, 20), cc.callFunc(function () {
            this.firstPoint.inAction = cc.scaleTo(0.2, 1);
            this.firstPoint.runAction(this.firstPoint.inAction);
            this.firstText.inAction = cc.sequence(cc.delayTime(0.2), cc.spawn(cc.moveTo(0.2, cc.p(this.firstText.x - this.firstText.width / 2, this.firstText.y)), cc.fadeIn(0.5)));
            this.firstText.runAction(this.firstText.inAction);
        }, this), cc.delayTime(0.7), cc.progressTo(0.3, 50), cc.callFunc(function () {
            this.secondPoint.inAction = cc.scaleTo(0.2, 1);
            this.secondPoint.runAction(this.secondPoint.inAction);
            this.secondText.inAction = cc.sequence(cc.delayTime(0.2), cc.spawn(cc.moveTo(0.2, cc.p(this.secondText.x + this.secondText.width / 2, this.secondText.y)), cc.fadeIn(0.5)));
            this.secondText.runAction(this.secondText.inAction);
        }, this), cc.delayTime(0.7), cc.progressTo(0.3, 80), cc.callFunc(function () {
            this.thirdPoint.inAction = cc.scaleTo(0.2, 1);
            this.thirdPoint.runAction(this.thirdPoint.inAction);
            this.thirdText.inAction = cc.sequence(cc.delayTime(0.2), cc.spawn(cc.moveTo(0.2, cc.p(this.thirdText.x - this.thirdText.width / 2, this.thirdText.y)), cc.fadeIn(0.5)));
            this.thirdText.runAction(this.thirdText.inAction);
        }, this), cc.delayTime(0.7), cc.progressTo(0.3, 100), cc.callFunc(function () {
            this.forthPoint.inAction = cc.scaleTo(0.2, 1);
            this.forthPoint.runAction(this.forthPoint.inAction);
            canChangePage = true;
           // this.disappear();
        }, this));
        this.line.runAction(action);
    },
    disappear: function (callback, target) {

        this.leftUpPic.runAction(this.leftUpPic.inAciton.reverse());
        this.leftDownPic.runAction(this.leftDownPic.inAciton.reverse());
        this.rightUpPic.runAction(this.rightUpPic.inAciton.reverse());
        this.rightDownPic.runAction(this.rightDownPic.inAciton.reverse());

        this.forthPoint.inAction = cc.sequence(cc.delayTime(0.2), cc.scaleTo(0.2, 0));
        this.forthPoint.runAction(this.forthPoint.inAction);

        var action = cc.sequence(cc.progressFromTo(0.5, 100, 0), cc.delayTime(0.5), cc.callFunc(function () {

            if (target && callback) {
                callback.call(target);
            }
        }, this));
        this.line.runAction(action);
        this.thirdPoint.inAction = cc.sequence(cc.delayTime(0.2), cc.scaleTo(0.2, 0));
        this.thirdPoint.runAction(this.thirdPoint.inAction);
        this.thirdText.inAction = cc.spawn(cc.moveTo(0.3, cc.p(this.thirdText.x + this.thirdText.width / 2, this.thirdText.y)), cc.fadeOut(0.3));
        this.thirdText.runAction(this.thirdText.inAction);
        this.secondPoint.inAction = cc.sequence(cc.delayTime(0.2), cc.scaleTo(0.2, 0));
        this.secondPoint.runAction(this.secondPoint.inAction);
        this.secondText.inAction = cc.spawn(cc.moveTo(0.5, cc.p(this.secondText.x - this.secondText.width / 2, this.secondText.y)), cc.fadeOut(0.3));
        this.secondText.runAction(this.secondText.inAction);
        this.firstPoint.inAction = cc.sequence(cc.delayTime(0.2), cc.scaleTo(0.2, 0));
        this.firstPoint.runAction(this.firstPoint.inAction);
        this.firstText.inAction = cc.spawn(cc.moveTo(0.3, cc.p(this.firstText.x + this.firstText.width / 2, this.firstText.y)), cc.fadeOut(0.3));
        this.firstText.runAction(this.firstText.inAction);
    }
});
var Layer4 = cc.Layer.extend({
    ctor: function () {
        this._super();
    },
    onEnter: function () {
        this._super();
        cc.spriteFrameCache.addSpriteFrames(res.forthPage_plist);
        this.initUI();
       this.appear();

    },
    initUI: function () {
        this.accLayer = new cc.Layer();
        this.accLayer.anchorX = 0;
        this.accLayer.anchorY = 0;
        this.accLayer.x = 0;
        this.accLayer.y = 0;
        this.addChild(this.accLayer);

        this.map = new cc.Sprite(res.map_png);
        this.accLayer.addChild(this.map);
        this.map.setPosition(cc.pAdd(cc.visibleRect.top, cc.p(0, this.map.height / 2)));

        this.greenDot = new cc.Sprite("#destination_1.png");
        this.map.addChild(this.greenDot);
        this.greenDot.setPosition(cc.p(145, 305));
        var anim = cc.repeatForever(cc.sequence(cc.animate(new cc.Animation([cc.spriteFrameCache.getSpriteFrame("destination_1.png"), cc.spriteFrameCache.getSpriteFrame("destination_2.png")], 0.3)), cc.delayTime(0.5)));
        this.greenDot.runAction(anim);

        this.timeAngle = new cc.Sprite("#light_2.png");
        this.time = new cc.Sprite(res.time1);
        this.time.setPosition(cc.p(this.time.width - 18, this.time.height / 2 - 23));
        this.timeAngle.addChild(this.time);
        this.timeAngle.setPosition(cc.p(this.greenDot.x + this.greenDot.width / 2 + this.timeAngle.width / 2 + 4, this.greenDot.y + 11));
        this.map.addChild(this.timeAngle);
        this.timeAngle.scale = 0;

        this.registerBtn = new cc.MenuItemImage("#button_normal.png", "#button_hover.png", this.registerClick, this);
        this.registerBtn.setPosition(cc.pAdd(cc.visibleRect.bottom, cc.p(0, -this.registerBtn.height / 2)));
        var menu = new cc.Menu(this.registerBtn);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu);
    },
    registerClick: function () {
        var item = getById("regPage");
        removeClass(item, "hide");
        removeClass(item, "animOut");
        addClass(item, "anim");
        var game = getById("Cocos2dGameContainer");
        addClass(game,"hide");
        setTimeout(function () {
            removeClass(item, "anim");
        }, 800);
    },
    accelEvent: function (acc, event) {
        if (this.visible) {
            movArea(acc, this.accLayer);
        }
    },
    appear: function () {
        this.map.mapAction = cc.moveTo(0.5, cc.p(this.map.x, this.map.y - this.map.height)).easing(cc.easeIn(0.5));
        this.map.runAction(this.map.mapAction);

        this.registerBtn.inAction = cc.moveTo(0.5, cc.p(this.registerBtn.x, this.registerBtn.y + this.registerBtn.height / 2 + 160)).easing(cc.easeIn(0.5));
        this.registerBtn.runAction(this.registerBtn.inAction);

        this.timeAngle.inAction = cc.sequence(cc.delayTime(0.5), cc.scaleTo(0.3, 1), cc.delayTime(0.3), cc.callFunc(function () {
            canChangePage = true;
        }, this));
        this.timeAngle.runAction(this.timeAngle.inAction);

    },
    disappear: function (callback, target) {
        var timeAngleAction = cc.scaleTo(0.3, 0);
        this.timeAngle.runAction(timeAngleAction);
        var registerAction = cc.sequence(cc.delayTime(0.3), cc.moveTo(0.5, cc.p(this.registerBtn.x, this.registerBtn.y - this.registerBtn.height / 2 - 160)).easing(cc.easeIn(0.5)));
        this.registerBtn.runAction(registerAction);
        var mapAction = cc.sequence(cc.delayTime(0.3), cc.moveTo(0.5, cc.p(this.map.x, this.map.y + this.map.height)).easing(cc.easeIn(0.5)), cc.delayTime(0.6), cc.callFunc(function () {
            if (target && callback) {
                callback.call(target);
            }
        }, this));
        this.map.runAction(mapAction);
    }
});
var Layer5 = cc.Layer.extend({
    ctor: function () {
        this._super();
    },
    onEnter: function () {
        this._super();
        cc.spriteFrameCache.addSpriteFrames(res.fifPage_plist);
        this.initUI();
       // this.appear();
    },
    initUI: function () {
        this.accLayer = new cc.Layer();
        this.accLayer.anchorX = 0;
        this.accLayer.anchorY = 0;
        this.accLayer.x = 0;
        this.accLayer.y = 0;
        this.addChild(this.accLayer);

        this.leftUp = new cc.Sprite("#left_up.png");
        this.leftUp.setPosition(cc.pAdd(cc.visibleRect.topLeft, cc.p(-this.leftUp.width / 2, -this.leftUp.height * 3 / 2)));
        this.accLayer.addChild(this.leftUp);
        this.leftDown = new cc.Sprite("#left_down.png");
        this.leftDown.setPosition(cc.pAdd(cc.visibleRect.bottomLeft, cc.p(-this.leftDown.width / 2, -this.leftDown.height / 2)));
        this.accLayer.addChild(this.leftDown);
        this.rightUp = new cc.Sprite("#right_up.png");
        this.rightUp.setPosition(cc.pAdd(cc.visibleRect.topRight, cc.p(this.rightUp.width / 2, this.rightUp.height / 2)));
        this.accLayer.addChild(this.rightUp);
        this.rightDown = new cc.Sprite("#right_down.png");
        this.rightDown.setPosition(cc.pAdd(cc.visibleRect.bottomRight, cc.p(this.rightDown.width / 2, this.rightDown.height * 3 / 2)));
        this.accLayer.addChild(this.rightDown);

        this.code = new cc.Sprite(res.code);
        this.code.setPosition(cc.pAdd(cc.visibleRect.top, cc.p(0, this.code.height / 2)));
        this.addChild(this.code);

        this.text = new cc.Sprite(res.des1);
        this.text.setPosition(cc.pAdd(cc.visibleRect.left, cc.p(-this.text.width / 2, -20)));
        this.addChild(this.text);

        this.shareText = new cc.Sprite("#share.png");
        this.shareText.setPosition(cc.pAdd(cc.visibleRect.bottomLeft, cc.p(this.shareText.width / 2 + 30, -this.shareText.height / 2)));
        this.addChild(this.shareText);

    },
    appear: function () {
        this.leftUp.moveAction = cc.moveTo(0.2, cc.p(this.leftUp.x + this.leftUp.width, this.leftUp.y + this.leftUp.height / 2));
        this.leftUp.runAction(this.leftUp.moveAction);
        this.rightDown.moveAction = cc.moveTo(0.2, cc.p(this.rightDown.x - this.rightDown.width, this.rightDown.y - this.rightDown.height));
        this.rightDown.runAction(this.rightDown.moveAction);

        this.leftDown.moveAction = cc.sequence(cc.delayTime(0.2), cc.moveTo(0.2, cc.p(this.leftDown.x + this.leftDown.width, this.leftDown.y + this.leftDown.height + 30)));
        this.leftDown.runAction(this.leftDown.moveAction);
        this.rightUp.moveAction = cc.sequence(cc.delayTime(0.2), cc.moveTo(0.2, cc.p(this.rightUp.x - this.rightUp.width, this.rightUp.y - this.rightUp.height)));
        this.rightUp.runAction(this.rightUp.moveAction);

        this.code.moveAction = cc.sequence(cc.delayTime(0.5), cc.moveTo(0.2, cc.p(this.code.x, this.code.y - this.code.height - 80)));
        this.code.runAction(this.code.moveAction);

        this.shareText.moveAction = cc.sequence(cc.delayTime(0.5), cc.moveTo(0.2, cc.p(this.shareText.x + 40, this.shareText.y + this.shareText.height + 20)));
        this.shareText.runAction(this.shareText.moveAction);

        this.text.moveAction = cc.sequence(cc.delayTime(0.7), cc.moveTo(0.2, cc.p(cc.visibleRect.center.x + 20, this.text.y)).easing(cc.easeIn(0.8)), cc.moveTo(0.05, cc.p(cc.visibleRect.center.x, this.text.y)).easing(cc.easeIn(0.8)), cc.delayTime(0.25), cc.callFunc(function () {
            canChangePage = true;
        }, this));
        this.text.runAction(this.text.moveAction);

    },
    disappear: function (callback, target) {
        var action = cc.sequence(cc.moveTo(0.2, cc.p(cc.visibleRect.left.x - this.text.width / 2, this.text.y)).easing(cc.easeOut(0.8)), cc.delayTime(0.3), cc.callFunc(function () {
            this.leftUp.runAction(this.leftUp.moveAction.reverse());
            this.rightDown.runAction(this.rightDown.moveAction.reverse());
            this.leftDown.runAction(this.leftDown.moveAction.reverse());
            this.rightUp.runAction(this.rightUp.moveAction.reverse());
            this.code.runAction(this.code.moveAction.reverse());
            this.shareText.runAction(this.shareText.moveAction.reverse());
        }, this), cc.delayTime(0.3), cc.callFunc(function () {
            if (target && callback) {
                callback.call(target);
            }
        }, this));
        this.text.runAction(action);
    }
});

var movArea = function (acc, node) {
    var curx = node.x + 20 * acc.x;
    var cury = node.y + 20 * acc.y;
    node.x = Math.abs(curx) < 7 ? curx : node.x;
    node.y = Math.abs(cury) < 7 ? cury : node.y;

}
/************************************************************************************************************************************/
var reclick = true;
var isSuccess = false;
var musicPlayStatus = true;
var getById = function (id) {
    return document.getElementById(id);
}
var moveIn = function () {
    var obj = getById();
}
function hasClass(ele, cls) {
    var result = ele && ele.className && (ele.className.search(new RegExp('(\\s|^)' + cls + '(\\s|$)')) != -1);
    return !!result;
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls) && ele)
        ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

window["onCloseClick"] = function () {
    removeClass(getById("regPage"), "anim");
    addClass(getById("regPage"), "animOut");
    var game = getById("Cocos2dGameContainer");
    removeClass(game,"hide");
    setTimeout(function () {
        addClass(getById("regPage"), "hide");
    }, 300);
}

window["onSubmitClick"] = function () {
    if (!reclick) {
        window["showAlert"]("申请发送中，请勿重复发送~");
        return false;
    }
    if (checkForm()) {
        reclick = false;
        post({
            "realname": getById("realname").value.trim(),
            "telephone": getById("telephone").value.trim(),
            "email": getById("email").value.trim(),
            "company": getById("company").value.trim(),
            "position": getById("position").value.trim(),
            "extra": getById("extra").value.trim(),
            "from": "mobile"
        }, function (result) {
            var message = "";
            if (result["status"] == 1) {
                isSuccess = true;
                message = "您的报名信息已经成功提交";
                window["showAlert"](message);
            } else {
                if (result["error"]) {
                    if (result["error"]["email_unique"]) {
                        message = result["error"]["email_unique"];
                    } else if (result["error"]["telephone_unique"]) {
                        message = result["error"]["telephone_unique"];
                    } else if (result["error"]["from"]) {
                        message = result["error"]["from"];
                    } else if (result["error"]["realname"]) {
                        message = result["error"]["realname"];
                    } else if (result["error"]["position"]) {
                        message = result["error"]["position"];
                    } else if (result["error"]["email"]) {
                        message = result["error"]["email"];
                    } else if (result["error"]["telephone"]) {
                        message = result["error"]["telephone"];
                    } else if (result["error"]["company"]) {
                        message = result["error"]["company"];
                    } else if (result["error"] && typeof result["error"] == "string") {
                        message = result["error"];
                    } else {
                        message = "未知错误";
                    }
                }
                window["showAlert"](message);
            }
        });
    }
}
window["onOkClick"] = function () {
    var alertItem = getById("alertItem");
    removeClass(alertItem, "alertAnimIn");
    addClass(alertItem, "alertAnimOut");
    setTimeout(function () {
        addClass(alertItem, "hide");
        if (isSuccess) {
            isSuccess = false;
            window["onCloseClick"]();
            if (curScene) {
                curScene.changePage(++curScene.currentIndex, true);
            }
        }
    }, 280);
}
window["showAlert"] = function (msg) {
    if (!msg) msg = "";
    var alertText = getById("alertText");
    var alertItem = getById("alertItem");
    alertText.innerHTML = msg;
    removeClass(alertItem, "alertAnimOut");
    addClass(alertItem, "alertAnimIn");
    removeClass(alertItem, "hide");
    setTimeout(function () {
        removeClass(alertItem, "alertAnimIn");
    }, 300);
}
var checkForm = function () {
    var checkStatus = true;
    var list = ["realname", "telephone", "email", "company", "position"];
    var data = [];
    for (var i = 0; i < list.length; i++) {
        data[i] = getById(list[i]).value.trim();
    }
    for (var i = 0; i < list.length; i++) {
        var item = getById(list[i]);
        if (data[i] == "") {
            removeClass(item, "inputItem_normal");
            addClass(item, "inputItem_error");
            item.placeholder = "此项不能为空";
            checkStatus = false;
        } else {
            removeClass(item, "inputItem_error");
            addClass(item, "inputItem_normal");
        }
    }
    var phoneReg = /^[0-9]*[1-9][0-9]*$/;
    if (data[1].length != 11 || !phoneReg.test(data[1])) {
        var item = getById(list[1]);
        data[1] = "";
        item.value = "";
        item.placeholder = "请输入正确的手机号码";
        removeClass(item, "inputItem_normal");
        addClass(item, "inputItem_error");
        checkStatus = false;
    } else {
        addClass(getById(list[2]), "inputItem_normal");
    }
    var emailReg = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{1,4}$/gi;
    if (!emailReg.test(data[2])) {
        var item = getById(list[2]);
        data[2] = "";
        item.value = "";
        item.placeholder = "请输入正确的邮箱";
        removeClass(item, "inputItem_normal");
        addClass(item, "inputItem_error");
        checkStatus = false;
    } else {
        addClass(getById(list[2]), "inputItem_normal");
    }
    return checkStatus;
}
var post = function (data, callfunc) {
    var self = this;
    var xhr = cc.loader.getXMLHttpRequest();
    var oUrl = window.location.host;
    oUrl = encodeURIComponent(oUrl);
    xhr.open("POST", "YOUR URL", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
    xhr.timeout = 10000;
    xhr.ontimeout = function () {
        reclick = true;
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            reclick = true;
        }
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = JSON.parse(xhr.responseText);
            callfunc(result);
        }
    };
    var param = "";
    for (var key in data) {
        param = param + key + "=" + data[key] + "&";
    }
    param = encodeURI(param);
    xhr.send(param);
};
var initMusic = function () {
    var audio = getById("myAudio");
    audio.src = "res/bg.mp3";
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
