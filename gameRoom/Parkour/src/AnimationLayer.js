// define enum for runner status
if(typeof RunnerStat == "undefined") {
    var RunnerStat = {};
    RunnerStat.running = 0;
    RunnerStat.jumpUp = 1;
    RunnerStat.jumpDown = 2;
};


var AnimationLayer = cc.Layer.extend({
    spriteSheet:null,
    runningAction:null,
    sprite:null,
    space:null,
    body:null,
    shape:null,

    recognizer:null,
    stat:RunnerStat.running,// init with running status
    jumpUpAction:null,
    jumpDownAction:null,


    ctor:function (space) {
        this._super();
        this.space = space;
        this.init();

        this._debugNode = cc.PhysicsDebugNode.create(this.space);
        this._debugNode.setVisible(false);
        // Parallax ratio and offset
        this.addChild(this._debugNode, 10);

    },

    init:function () {
        this._super();

        // create sprite sheet
        cc.SpriteFrameCache.getInstance().addSpriteFrames(s_runnerplist);
        this.spriteSheet = cc.SpriteBatchNode.create(s_runner);
        this.addChild(this.spriteSheet);

        //init  actions
        this.initAction();
//        // init runningAction
//        var animFrames = [];
//        for (var i = 0; i < 8; i++) {
//            var str = "runner" + i + ".png";
//            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
//            animFrames.push(frame);
//        }
//
//        var animation = cc.Animation.create(animFrames, 0.1);
//        this.runningAction = cc.RepeatForever.create(cc.Animate.create(animation));

        //create runner through physic engine
        this.sprite = cc.PhysicsSprite.createWithSpriteFrameName("runner0.png");
        var contentSize = this.sprite.getContentSize();
        // init body
        this.body = new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));
        this.body.p = cc.p(g_runnerStartX, g_groundHight + contentSize.height / 2);
        this.body.applyImpulse(cp.v(150, 0), cp.v(0, 0));//run speed
        this.space.addBody(this.body);
        //init shapekk
        this.shape = new cp.BoxShape(this.body, contentSize.width - 14, contentSize.height);
        this.space.addShape(this.shape);

        this.sprite.setBody(this.body);
        this.sprite.runAction(this.runningAction);

        this.spriteSheet.addChild(this.sprite);

        //initialize the recognizer
        this.recognizer = new SimpleRecognizer();
        // enable touch
        this.setTouchEnabled(true);
        // set touch mode to kCCTouchesOneByOne
        this.setTouchMode(1);




        this.scheduleUpdate();

    },
    onExit:function() {
        this.runningAction.release();
        this.jumpUpAction.release();
        this.jumpDownAction.release();

        this._super();
    },
    initAction:function () {
        // init runningAction
        var animFrames = [];
        // num equal to spriteSheet
        for (var i = 0; i < 8; i++) {
            var str = "runner" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.1);
        this.runningAction = cc.RepeatForever.create(cc.Animate.create(animation));
        this.runningAction.retain();

        // init jumpUpAction
        animFrames = [];
        for (var i = 0; i < 4; i++) {
            var str = "runnerJumpUp" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        animation = cc.Animation.create(animFrames, 0.2);
        this.jumpUpAction = cc.Animate.create(animation);
        this.jumpUpAction.retain();

        // init jumpDownAction
        animFrames = [];
        for (var i = 0; i < 2; i++) {
            var str = "runnerJumpDown" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        animation = cc.Animation.create(animFrames, 0.3);
        this.jumpDownAction = cc.Animate.create(animation);
        this.jumpDownAction.retain();
    },

    onTouchBegan:function(touch, event) {
        var pos = touch.getLocation();
        this.recognizer.beginPoint(pos.x, pos.y);
        return true;
    },

    onTouchMoved:function(touch, event) {
        var pos = touch.getLocation();
        this.recognizer.movePoint(pos.x, pos.y);
    },

    onTouchEnded:function(touch, event) {
        var rtn = this.recognizer.endPoint();
        cc.log("rnt = " + rtn);
        switch (rtn) {
            case "up":
                this.jump();
                break;
            default:
                break;
        }
    },

    jump:function () {
        cc.log("jump");
        //stop bg music
        var audioEngine = cc.AudioEngine.getInstance();
        audioEngine.playEffect(s_music_jump);

        if (this.stat == RunnerStat.running) {
            this.body.applyImpulse(cp.v(0, 250), cp.v(0, 0));
            this.stat = RunnerStat.jumpUp;
            this.sprite.stopAllActions();
            this.sprite.runAction(this.jumpUpAction);
        }
    },



    getEyeX:function () {
        return this.sprite.getPositionX() - g_runnerStartX;
    },

    update:function (dt) {
        // update meter
        var statusLayer = this.getParent().getChildByTag(TagOfLayer.Status);
        statusLayer.updateMeter(this.sprite.getPositionX() - g_runnerStartX);

        // check and update runner stat
        var vel = this.body.getVel();
        if (this.stat == RunnerStat.jumpUp) {
            if (vel.y < 0.1) {
                this.stat = RunnerStat.jumpDown;
                this.sprite.stopAllActions();
                this.sprite.runAction(this.jumpDownAction);
            }
        } else if (this.stat == RunnerStat.jumpDown) {
            if (vel.y == 0) {
                this.stat = RunnerStat.running;
                this.sprite.stopAllActions();
                this.sprite.runAction(this.runningAction);
            }
        }


        var eyeX = this.sprite.getPositionX() - g_runnerStartX;
        var camera = this.getCamera();
        var eyeZ = cc.Camera.getZEye();
        camera.setEye(eyeX, 0, eyeZ);
        camera.setCenter(eyeX, 0, 0);
    }

});