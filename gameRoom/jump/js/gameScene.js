var g_sharedGameLayer;
var size = {
    "width" : 640,
    "height" : 1024
}
var beginScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        var gameBg  = new cc.Sprite(res.gameBg);
        gameBg.x = size.width/2;
        gameBg.y = size.height/2;
        this.addChild(gameBg,0);

        var beginItem = new cc.MenuItemImage(res.beginBtn,res.beginBtn,this.beginCall,this);
        var beginMenu = new cc.Menu(beginItem);
        beginMenu.x = size.width/2;
        beginMenu.y = size.height/2;
        this.addChild(beginMenu);

        this.scheduleUpdate();
    },
    update:function(){

    },
    beginCall:function(){
        cc.director.runScene(new ruleScene());
    }
});

var ruleScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        var ruleBg  = new cc.Sprite(res.ruleBg);
        ruleBg.x = size.width/2;
        ruleBg.y = size.height/2;
        this.addChild(ruleBg,0);

        var knowItem = new cc.MenuItemImage(res.knowBtn,res.knowBtn,this.knowCall,this);
        var knowMenu = new cc.Menu(knowItem);
        knowMenu.x = size.width/2;
        knowMenu.y = size.height/2;
        this.addChild(knowMenu);

        this.scheduleUpdate();
    },
    update:function(){

    },
    knowCall:function(){
        cc.director.runScene(new gameScene());
    }
});

var GameLayer = cc.Layer.extend({
    startGameLayer:null,
    rightGameLayer:null,
    leftGameLayer:null,
    game_over:false,
    currentScoreLabel:null,
    gameoverLayer: null,
    score:0,
    ctor:function(){
        this._super();

        cc.spriteFrameCache.addSpriteFrames(res.images_plist);

        this.init();
    },
    init:function(){
        var size = cc.director.getWinSize();

        var gameBg  = new cc.Sprite(res.gameBg);
        gameBg.x = size.width/2;
        gameBg.y = size.height/2;
        this.addChild(gameBg,0);

        // var queenSprite = new cc.Sprite("#queen_1.png");
        // queenSprite.x = size.width/2;
        // queenSprite.y = size.height/2;
        // this.addChild(queenSprite);
        //bar
        this.barSprite = BarSprite.create();
        this.barSprite.x = size.width/2;
        this.barSprite.y = size.height/2;
        this.addChild(this.barSprite, 0);
        //左边
        this.leftGameLayer = LeftGameLayer.create();
        this.leftGameLayer.tag = LAYER_TAG.left_game;
        this.addChild(this.leftGameLayer);
        // 右边
        this.rightGameLayer = RightGameLayer.create();
        this.rightGameLayer.tag = LAYER_TAG.right_game;
        this.addChild(this.rightGameLayer);

        // 当前分数
        this.currentScoreLabel = ScoreLabel.create();
        this.currentScoreLabel.setVisible(false);
        this.currentScoreLabel.x = 100;
        this.currentScoreLabel.y = size.height - 100;
        this.addChild(this.currentScoreLabel, 2);

        //结束
        // this.gameoverLayer = GameOverLayer.create();
        // this.addChild(this.gameoverLayer, 2);
        // this.gameoverLayer.setVisible(false);
        g_sharedGameLayer = this;

        this.onPlay();


        this.scheduleUpdate();
    },
    update:function(){
        console.log(this.score)
    },
    initListener:function(){
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: null,
            onTouchEnded: null
        }, this);
        return true;
    },
    onPlay:function(){
        this.currentScoreLabel.setVisible(true);
        this.barSprite.slow_long();
        // 左手
        var leftHandSprite = FingerSprite.create();
        leftHandSprite.attr({
            x: size.width / 2 - 120,
            y: size.height / 2 + 120
        });
        this.addChild(leftHandSprite, 0);
        // 右手
        var rightHandSprite = FingerSprite.create();
        rightHandSprite.attr({
            x: size.width / 2 + 120,
            y: size.height / 2 - 120
        });
        this.addChild(rightHandSprite, 0);
        this.leftGameLayer.createLeftBox((Math.floor(Math.random() * 2) + 1.5) * 1000);
        this.rightGameLayer.createRightBox((Math.floor(Math.random() * 2) + 1.5) * 1000);
    },
    onTouchBegan: function (touch, event) {
        // 获取当前点击点所在相对按钮的位置坐标
        var target = event.getCurrentTarget();
        var rect = cc.rect(0, 0, size.width / 2, size.height);
        var position;
        var action;
        var target_eye;
        if (cc.rectContainsPoint(rect, touch.getLocation())) {
            // 停止动画前点击无效
            target_eye = target.getChildByTag(LAYER_TAG.left_game).leftEyeSprite;
            action = target_eye.getActionByTag(ACTION_TAG.jump);
            if (action === null || action && action.isDone()) {
                position = cc.p(size.width / 2 - 240, target_eye.getPositionY());
                target_eye.jump(position);
            }
        } else {
            target_eye = target.getChildByTag(LAYER_TAG.right_game).rightEyeSprite;
            action = target_eye.getActionByTag(ACTION_TAG.jump);
            if (action === null || action && action.isDone()) {
                position = cc.p(size.width / 2 + 240, target_eye.getPositionY());
                target_eye.jump(position);
            }
        }
        return true;
    },
    onRestGame:function(){
        this.gameoverLayer.setVisible(false);
        this.currentScoreLabel.fly_from_right();    // 从右侧飞入
        this.barSprite.slow_long();
        this.leftGameLayer.resetLeftGame();
        this.rightGameLayer.resetRightGame();
        this.leftGameLayer.createLeftBox((Math.floor(Math.random() * 2) + 1.5) * 1000);
        this.rightGameLayer.createRightBox((Math.floor(Math.random() * 2) + 1.5) * 1000);
        this.score = 0;
        this.game_over = false;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: null,
            onTouchEnded: null
        }, this);
    }
});

var gameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new GameLayer();
        layer.initListener();
        this.addChild(layer);
    }
});

/*****************************************/

var BoxSprite = cc.Sprite.extend({
    is_score: false,
    corresponding_eye: null,
    ctor: function () {
        this._super();
        this.size = cc.director.getWinSize();
    },
    init: function (random, direct) {
        if (this._super()) {
            // 两种箱子，两种移动方向，可由四种随机值产生
            var spriteFrame;
            if (random === 0) {
                spriteFrame = cc.spriteFrameCache.getSpriteFrame("box_1.png");
                this.initWithSpriteFrame(spriteFrame);
            } else {
                spriteFrame = cc.spriteFrameCache.getSpriteFrame("box_2.png");
                this.initWithSpriteFrame(spriteFrame);
            }
            return true;
        }
    },
    move_up: function () {
        var y = this.getPositionY();
        if (y > size.height + this.height) {
            this.unscheduleAllCallbacks();
        } else {
            this.setPositionY(this.getPositionY() + 30);
            if(cc.rectIntersectsRect(this.collideRect(), this.corresponding_eye.collideRect())) {
                this.unscheduleAllCallbacks();
                // g_sharedGameLayer.onGameOver();
                console.log('game over');

                g_sharedGameLayer.game_over = true;
                return;
            }
            if (this.is_score === false && this.getPositionY() > size.height / 2) {
                this.is_score = true;   // 防止重复计分
                g_sharedGameLayer.score++;
                g_sharedGameLayer.currentScoreLabel.setString(g_sharedGameLayer.score);
            }
        }
    },
    move_down: function () {
        var y = this.getPositionY();
        if(y < - this.height) {
            this.unscheduleAllCallbacks();
        } else {
            this.setPositionY(this.getPositionY() - 30);
            if(cc.rectIntersectsRect(this.collideRect(), this.corresponding_eye.collideRect())) {
                this.unscheduleAllCallbacks();
                // g_sharedGameLayer.onGameOver();
                console.log("game over");
                g_sharedGameLayer.game_over = true;
                return;
            }
            if (this.is_score === false && this.getPositionY() < size.height / 2) {
                this.is_score = true;   // 防止重复计分
                g_sharedGameLayer.score++;
                g_sharedGameLayer.currentScoreLabel.setString(g_sharedGameLayer.score);
            }
        }
    },
    collideRect : function() {
        var s = this.getContentSize();
        var p = this.getPosition();
        return cc.rect(p.x - s.width / 2, p.y - s.height / 2, s.width, s.height);
    }
});
BoxSprite.create = function (random, direct) {
    var sp = new BoxSprite();
    if (sp && sp.init(random, direct)) {
        return sp;
    }
    return null;
};

/*****************************************/
var FingerSprite = cc.Sprite.extend({
    init: function() {
        if(this._super()) {
            var spriteFrame = cc.spriteFrameCache.getSpriteFrame("finger.png");
            this.initWithSpriteFrame(spriteFrame);
            this.schedule(this.disappear, FRAME_RATE.finger_disapper);
            return true;
        }
    },
    disappear: function() {
        var action = cc.FadeOut.create(1);  // 1s内淡出
        var _this = this;
        var actionFin = cc.CallFunc.create(function(){
            _this.unscheduleAllCallbacks();
            g_sharedGameLayer.removeChild(_this);
        });
        this.runAction(cc.Sequence.create([action, actionFin]));
    }
});
FingerSprite.create = function () {
    var sp = new FingerSprite();
    if (sp && sp.init()) {
        return sp;
    }
    return null;
};


/*****************************************/


var BarSprite = cc.Sprite.extend({
    init: function() {
        if(this._super()) {
            var spriteFrame = cc.spriteFrameCache.getSpriteFrame("bar.png");
            this.initWithSpriteFrame(spriteFrame);
            this.setScaleY(0.2);
            return true;
        }
    },
    slow_long: function() {
        // 黑条变长特效
        this.stopAllActions();
        var action = cc.ScaleTo.create(1, 1, 1);
        this.runAction(action);
    },
    slow_short: function() {
        // 黑条变短特效
        this.stopAllActions();
        var action = cc.ScaleTo.create(0.1, 1, 0.2);
        var _this = this;
        var actionFinish = cc.CallFunc.create(function(){
            g_sharedGameLayer.displayGameOverMenu();
        });
        this.runAction(cc.Sequence.create([action, actionFinish]));;
    }
});
BarSprite.create = function() {
    var sp = new BarSprite();
    if(sp && sp.init()) {
        return sp;
    }
    return null;
}

/************************config**************************/
if(typeof FRAME_RATE == "undefined") {
    var FRAME_RATE = {};
    FRAME_RATE.eye_changed = 2; // 眼睛动画的时间间隔
    FRAME_RATE.eye_jump = 0.5;  // 眼睛跳起的时长
    FRAME_RATE.finger_disapper = 2;   // 指示手指显示的时长
    FRAME_RATE.create_box = 2;  // 产生箱子的时间间隔
    FRAME_RATE.box_move = 0.1;  // 箱子移动的时间间隔
};
//var BG_FRAME_RATE = 2;  // 背景颜色变化的时间间隔
if(typeof SPRITE_TAG == "undefined") {
    var SPRITE_TAG = {};
    SPRITE_TAG.left_eye = 01;
    SPRITE_TAG.right_eye = 02
};
if(typeof ACTION_TAG == "undefined") {
    var ACTION_TAG = {};
    ACTION_TAG.jump = 0;
};
if(typeof LAYER_TAG == "undefined") {
    var LAYER_TAG = {};
    LAYER_TAG.left_game = 0;
    LAYER_TAG.right_game = 1;
};
/************************config**************************/

var LeftGameLayer = cc.Layer.extend({
    leftEyeSprite: null,
    box_array: null,
    createBoxTimeout:null,
    init: function() {
        if(this._super()) {
            var centerPoint = cc.p(size.width / 2, size.height / 2);
            this.leftEyeSprite = EyeSprite.create();
            this.leftEyeSprite.attr({
                x: centerPoint.x-22,
                y: centerPoint.y
            });
            this.leftEyeSprite.tag = SPRITE_TAG.left_eye;
            this.addChild(this.leftEyeSprite, 1);
            this.box_array = [];
            return true;
        }
    },
    stopCreateBox:function(){
        if(this.createBoxTimeout){
            clearTimeout(this.createBoxTimeout);
            this.createBoxTimeout = null;
        }
    },
    createLeftBox: function(time) {
        var _this = this;
        this.stopCreateBox();
        this.createBoxTimeout = setTimeout(function(){
            if(g_sharedGameLayer.game_over === true) {
                return;
            } else {
                var random = Math.floor(Math.random() * 2);
                var box;
                if(random === 0) {
                    box = BoxSprite.create(random, 0);   // 小箱子
                    box.attr({
                        x: size.width / 2 - 30,
                        y: box.height / 2
                    });
                } else {
                    box = BoxSprite.create(random, 0);   // 大箱子
                    box.attr({
                        x: size.width / 2 - 36,
                        y: box.height / 2
                    });
                }
                box.corresponding_eye = _this.leftEyeSprite;
                box.schedule(box.move_up, FRAME_RATE.box_move);
                _this.addChild(box, 0);
                _this.box_array.push(box);
                time = (Math.floor(Math.random() * 2) + 1.5) * 1000;
                _this.createLeftBox(time);
            }
        }, time);
    },
    onLeftGameOver: function() {
        var i = this.box_array.length;
        while(i--) {
            this.box_array[i].unscheduleAllCallbacks();
        }
        this.leftEyeSprite.stopAllActions();
    },
    resetLeftGame: function() {
        this.leftEyeSprite.attr({
            x: size.width / 2 - 22,
            y: size.height / 2
        });
        this.leftEyeSprite.setRotation(0);
        var i = this.box_array.length;
        while(i--) {
            this.removeChild(this.box_array[i]);
        }
        this.box_array = [];
    }
});
LeftGameLayer.create = function() {
    var sp = new LeftGameLayer();
    if(sp && sp.init()) {
        return sp;
    }
    return null;
}

/*******************************************************/
var EyeSprite = cc.Sprite.extend({
    init: function() {
        if(this._super()) {
            var eye = "eye_" + (Math.floor(Math.random() * 4) + 1) + ".png";
            var spriteFrame = cc.spriteFrameCache.getSpriteFrame(eye);
            this.initWithSpriteFrame(spriteFrame);
            this.schedule(this.change_state, FRAME_RATE.eye_changed);
            return true;
        }
    },
    change_state: function() {
        var eye = "eye_" + (Math.floor(Math.random() * 4) + 1) + ".png";
        var spriteFrame = cc.spriteFrameCache.getSpriteFrame(eye);
        this.initWithSpriteFrame(spriteFrame);
    },
    jump: function(p) {
        var current_p = this.getPosition();
        var jumpUp = cc.MoveTo.create(FRAME_RATE.eye_jump, p);
        var jumpDown = cc.MoveTo.create(FRAME_RATE.eye_jump, current_p);
        var rotateAction = cc.RotateBy.create(FRAME_RATE.eye_jump * 2, 90);
        var jumpAction = cc.Sequence.create([jumpUp, jumpDown]);
        var action = cc.Spawn.create(jumpAction, rotateAction);
        action.tag = ACTION_TAG.jump;
        this.runAction(action);
    },
    collideRect : function() {
        var s = this.getContentSize();
        var p = this.getPosition();
        return cc.rect(p.x - s.width / 2, p.y - s.height / 2, s.width, s.height);
    }
});
EyeSprite.create = function() {
    var sp = new EyeSprite();
    if(sp && sp.init()) {
        return sp;
    }
    return null;
}

/*********************************************/

var RightGameLayer = cc.Layer.extend({
    rightEyeSprite: null,
    createBoxTimeout: null,
    init: function() {
        if(this._super()) {
            var centerPoint = cc.p(size.width / 2, size.height / 2);
            this.rightEyeSprite = EyeSprite.create();
            this.rightEyeSprite.attr({
                x: centerPoint.x+22,
                y: centerPoint.y
            });
            this.rightEyeSprite.tag = SPRITE_TAG.right_eye;
            this.addChild(this.rightEyeSprite, 1);
            this.box_array = [];
            return true;
        }
    },
    stopCreateBox:function(){
        if(this.createBoxTimeout){
            clearTimeout(this.createBoxTimeout);
            this.createBoxTimeout = null;
        }
    },
    createRightBox: function(time) {
        var _this = this;
        this.stopCreateBox();
        this.createBoxTimeout = setTimeout(function(){
            if(g_sharedGameLayer.game_over === true) {
                return;
            } else {
                var random = Math.floor(Math.random() * 2);
                var box;
                if(random === 0) {
                    box = BoxSprite.create(random, 0);   // 小箱子
                    box.attr({
                        x: size.width / 2 + 30,
                        y: size.height - box.height / 2
                    });
                } else {
                    box = BoxSprite.create(random, 0);   // 大箱子
                    box.attr({
                        x: size.width / 2 + 36,
                        y: size.height - box.height / 2
                    });
                }
                box.corresponding_eye = _this.rightEyeSprite;
                box.schedule(box.move_down, FRAME_RATE.box_move);
                _this.addChild(box, 0);
                _this.box_array.push(box);
                time = (Math.floor(Math.random() * 2) + 1.5) * 1000;
                _this.createRightBox(time);
            }
        }, time);
    },
    onRightGameOver: function() {
        var i = this.box_array.length;
        while(i--) {
            this.box_array[i].unscheduleAllCallbacks();
        }
        this.rightEyeSprite.stopAllActions();
    },
    resetRightGame: function() {
        this.rightEyeSprite.attr({
            x: size.width / 2 + 22,
            y: size.height / 2
        });
        this.rightEyeSprite.setRotation(0);
        var i = this.box_array.length;
        while(i--) {
            this.removeChild(this.box_array[i]);
        }
        this.box_array = [];
    }
});
RightGameLayer.create = function() {
    var sp = new RightGameLayer();
    if(sp && sp.init()) {
        return sp;
    }
    return null;
}

/***********************************/
var ScoreLabel = cc.LabelBMFont.extend({
    size: null,
    init: function () {
        if (this._super()) {
            this.size = cc.director.getWinSize();
            this.initWithString("0", res.number84);
            return true;
        }
    },
    scale_disappear: function () {
        var action = cc.ScaleTo.create(0.5, 0, 0);   // 内缩消失
        this.runAction(action);
    },
    fly_from_right: function () {
        // 从右侧复原飞入
        this.setScale(1.5);
        this.setString("0");
        this.setPosition(this.size.width, this.size.height / 2);
        var moveAction = cc.MoveTo.create(0.5, cc.p(100, this.size.height / 2 + 400));
        var scaleAction = cc.ScaleTo.create(0.5, 1, 1);
        var action = cc.Spawn.create(moveAction, scaleAction);
        this.runAction(action);
    },
    show_narrow: function () {
        // 缩小出现
        this.setScale(1.5);
        var action = cc.ScaleTo.create(0.2, 1, 1);
        this.runAction(action);
    }
});
ScoreLabel.create = function () {
    var sp = new ScoreLabel();
    if (sp && sp.init()) {
        return sp;
    }
    return null;
};