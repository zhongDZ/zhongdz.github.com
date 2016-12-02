var MyLoaderScene = cc.Scene.extend({
    _interval : null,
    _length : 0,
    _count : 0,
    _label : null,
    _className:"MyLoaderScene",
    init : function(){
        var self = this;

        //logo
        var logoWidth = 160;
        var logoHeight = 200;

        // bg
        var bgLayer = self._bgLayer = cc.LayerColor.create(cc.color(32, 32, 32, 255));
        bgLayer.setPosition(cc.visibleRect.bottomLeft);
        self.addChild(bgLayer, 0);

        //image move to CCSceneFile.js
        var fontSize = 24, lblHeight =  -logoHeight / 2 + 100;
        var size = cc.director.getWinSize();
        
        var beginbackground = cc.Sprite.create(res.loadingPage);
        beginbackground.setPosition(size.width / 2, size.height / 2);
        beginbackground.setScale(1);
        bgLayer.addChild(beginbackground, 0);
        //loading percent

        var label = self._label = cc.LabelTTF.create("Loading... 0%", "Arial", fontSize);
        label.setPosition(size.width / 2, size.height / 2-200);
        label.setColor(cc.color(255, 255, 255));
        bgLayer.addChild(this._label, 10);
        return true;
    },

    _initStage: function (img, centerPos) {
        var self = this;
        var texture2d = self._texture2d = new cc.Texture2D();
        texture2d.initWithElement(img);
        texture2d.handleLoadedTexture();
        var logo = self._logo = cc.Sprite.create(texture2d);
        logo.setScale(cc.contentScaleFactor());
        logo.x = centerPos.x;
        logo.y = centerPos.y;
        self._bgLayer.addChild(logo, 10);
    },

    onEnter: function () {
        var self = this;
        cc.Node.prototype.onEnter.call(self);
        self.schedule(self._startLoading, 0.3);
    },

    onExit: function () {
        cc.Node.prototype.onExit.call(this);
        var tmpStr = "Loading... 100%";
        this._label.setString(tmpStr);
    },

    /**
     * init with resources
     * @param {Array} resources
     * @param {Function|String} cb
     */
    initWithResources: function (resources, cb) {
        if(typeof resources == "string") resources = [resources];
        this.resources = resources || [];
        this.cb = cb;
    },

    _startLoading: function () {
        var self = this;
        self.unschedule(self._startLoading);
        var res = self.resources;
        cc.loader.load(res,
            function (result, count, loadedCount) {
                var percent = (loadedCount / count * 100) | 0;
                percent = Math.min(percent, 100);
                self._label.setString("Loading... " + percent + "%");
            }, function () {
                if (self.cb)
                    self.cb();
            });
    },

    _updatePercent: function () {
        var self = this;
        var count = self._count;
        var length = self._length;
        var percent = (count / length * 100) | 0;
        percent = Math.min(percent, 100);
        self._label.setString("Loading... " + percent + "%");
        if(count >= length) self.unschedule(self._updatePercent);
    }
});
MyLoaderScene.preload = function(resources, cb){
    var _myLoaderScene = null;
    if(!_myLoaderScene) {
        _myLoaderScene = new MyLoaderScene();
        _myLoaderScene.init();
    }
    _myLoaderScene.initWithResources(resources, cb);

    cc.director.runScene(_myLoaderScene);
    return _myLoaderScene;
};
var thisismobile = false;
if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
    thisismobile = true;

}else{
    thisismobile = false;
}

function resourceCallBack(){
    cc.game.onStart = function(){
        cc.view.adjustViewPort(true);
        if(thisismobile){
            //EXACT_FIT
            cc.view.setDesignResolutionSize(640, 1024, cc.ResolutionPolicy.EXACT_FIT);
        }else{
            // SHOW_ALL
            cc.view.setDesignResolutionSize(640, 1024, cc.ResolutionPolicy.SHOW_ALL);
        }
        cc.view.resizeWithBrowserSize(true);
        //load resources
        MyLoaderScene.preload(g_resources, function () {
            cc.director.runScene(new ruleScene());
        }, this);
    };
    cc.game.run("gameCanvas");
}

var size = {
    "width" : 640,
    "height" : 1024
}
var k_Acceleration = 2;
var globalSpr = null;

var ruleScene = cc.Scene.extend({
    ctor : function(){
        this._super();

        var ruleBg = new cc.Sprite(res.ruleBg);
        ruleBg.x = size.width/2;
        ruleBg.y = size.height/2;
        this.addChild(ruleBg);

        var knowBtnItem = new cc.MenuItemImage(res.knowBtn,res.knowBtn,this.knowBtnCall,this);
        var knowBtnMenu = new cc.Menu(knowBtnItem);
        knowBtnMenu.x = size.width/2;
        knowBtnMenu.y = size.height/2 - 250;
        this.addChild(knowBtnMenu);
    },
    knowBtnCall : function(){
        if(!global_game_start){return;}
        global_game_start = false;
        cc.director.runScene(new gameScene());
    }
});

var gameScene = cc.Scene.extend({
    PipeSpriteList:[],
    m_DeltaY:0,
    m_startPosition:null,
    m_targetPosition:null,

    tick:0,

    passTime:0,

    gameEnd:false,

    noHitArr:[],
    scoreLabel:null,
    acrossCheck:false,
    scoreNum:0,
    ctor:function(){
        this._super();

        this.m_startPosition = cc.p(0, 0);
        this.m_targetPosition = cc.p(0, 0);

        this.init();

        this.gameEnd = false;

        this.scoreNum = 0;

        this.PipeSpriteList = [];

        this.noHitArr.length = 0;

        this.loadListener();
    },
    init:function(){
        var gameBg = new cc.Sprite(res.bg);
        gameBg.x = size.width/2;
        gameBg.y = size.height/2;
        this.addChild(gameBg);

        this.bottomBg = new cc.Sprite(res.bottomBg);
        this.bottomBg.anchorY = 0;
        this.bottomBg.x = size.width/2;
        this.bottomBg.y = 0;
        this.addChild(this.bottomBg, 100);

        this.bus = new cc.Sprite(res.bus);
        this.bus.x = 100;
        this.bus.y = 200;
        this.addChild(this.bus, 1000);

        this.car = new cc.Sprite(res.car);
        this.car.x = size.width - 100;
        this.car.y = 200;
        this.addChild(this.car, 1000);

        var mb = new cc.moveBy(0.1, cc.p(0,3));
        var remb = mb.reverse();
        var seq = cc.sequence(mb, remb);
        var repeatSeq = new cc.RepeatForever(seq);

        this.bus.runAction(repeatSeq);
        this.car.runAction(repeatSeq.clone());

        this.scoreLabel = new cc.LabelTTF("0", "Arial", 64);
        this.scoreLabel.x = size.width/2;
        this.scoreLabel.y = size.height - 80;
        this.scoreLabel.fillStyle = cc.color(238,10,0)
        this.addChild(this.scoreLabel, 10000);

        this.initBird();

        this.initLoopBg();
        
        this.scheduleUpdate(); 
    },
    initLoopBg:function(){
        this.bg = new Background(res.beiying, 1);
        this.bg.attr({
          x:0,
          y:0,
          anchorX:0,
          anchorY:0
        });
        this.addChild(this.bg);

        this.bg1 = new Background(res.beiying, 1);
        this.bg1.xx = 640;//此处添加时为了解决两个背景相接处出现黑边
        this.bg1.attr({
          x:0,
          y:0,
          anchorX:0,
          anchorY:0
        });
        this.addChild(this.bg1);


        this.bg2 = new Background(res.cloud, 1);
        this.bg2.attr({
          x:0,
          y:0,
          anchorX:0,
          anchorY:0
        });
        this.addChild(this.bg2);

        this.bg3 = new Background(res.cloud, 1);
        this.bg3.xx = 640;//此处添加时为了解决两个背景相接处出现黑边
        this.bg3.attr({
          x:0,
          y:0,
          anchorX:0,
          anchorY:0
        });
        this.addChild(this.bg3);

        this.bg4 = new Background(res.moveBg, 3);
        this.bg4.attr({
          x:0,
          y:0,
          anchorX:0,
          anchorY:0
        });
        this.addChild(this.bg4);

        this.bg5 = new Background(res.moveBg, 3);
        this.bg5.xx = 1919;//此处添加时为了解决两个背景相接处出现黑边
        this.bg5.attr({
          x:0,
          y:0,
          anchorX:0,
          anchorY:0
        });
        this.addChild(this.bg5);

        this.bg6 = new Background(res.road, 2);
        this.bg6.attr({
          x:0,
          y:0,
          anchorX:0,
          anchorY:0
        });
        this.addChild(this.bg6, 100);

        this.bg7 = new Background(res.road, 2);
        this.bg7.xx = 640;//此处添加时为了解决两个背景相接处出现黑边
        this.bg7.attr({
          x:0,
          y:0,
          anchorX:0,
          anchorY:0
        });
        this.addChild(this.bg7, 100);
    },
    update:function(){
        this.bg.update(225,-640,0);
        this.bg1.update(225,0,640);

        this.bg2.update(750,-640,0);
        this.bg3.update(750,0,640);

        this.bg4.update(225,-1919,0);
        this.bg5.update(225,0,1919);

        this.bg6.update(171,-640,0);
        this.bg7.update(171,0,640);

        for(var i = 0; i < this.PipeSpriteList.length; ++ i) {
            var pipe = this.PipeSpriteList[i];
            pipe.setPositionX(pipe.getPositionX() - 3);
            if (pipe.getPositionX() < -pipe.getContentSize().width / 2) {
                this.PipeSpriteList.splice(i, 1);

                this.acrossCheck = false;
            }

            if(pipe.getPositionX() < 230 && pipe.getPositionX() > 227){//  在update里面每一个柱子是以3的速度向左移动，所以保证位置区间在3以内就是进来一次里面

                this.noHitArr.push(0);

                this.scoreNum = Math.floor(this.noHitArr.length/2);
                this.scoreLabel.setString(this.scoreNum);//上下各有一个  所以要除以2
            }
        }

        this.passTime += 1;
        if(this.passTime >= size.width/4){
            this.addPipe();
            this.passTime = 0;
        }

        this.checkCollision();
    },
    initBird:function(){
        var texture = cc.textureCache.addImage(res.ani);//添加纹理到缓存
        
        var sprFrames = [];
        sprFrames[0] = new cc.SpriteFrame(texture,cc.rect(141 * 0,0,141,84));
        sprFrames[1] = new cc.SpriteFrame(texture,cc.rect(141 * 1,0,141,84));
        sprFrames[2] = new cc.SpriteFrame(texture,cc.rect(141 * 2,0,141,84));
        sprFrames[3] = new cc.SpriteFrame(texture,cc.rect(141 * 3,0,141,84));
        var animation = new cc.Animation(sprFrames,0.3);
        var animate = new cc.animate(animation);

        cc.animationCache.addAnimation(animation, "FlyBirdAnimation");

        globalSpr = this.flyBird = new cc.Sprite(res.ani1);
        this.flyBird.x = size.width/2;
        this.flyBird.y = size.height/2;
        this.addChild(this.flyBird, 1000);

        var flyAction = new cc.repeatForever(animate);

        this.flyBird.runAction(flyAction);
    },
    runBirdAction:function(){
        var riseHeight = 50; 
        var birdX = this.flyBird.getPositionX(); 
        var birdY = this.flyBird.getPositionY(); 
        // var bottomY = this.groundSprite.getContentSize().height - this.flyBird.getContentSize().height / 2; 
        var bottomY = 80;
      
        var actionFrame = new cc.animate(cc.animationCache.getAnimation("FlyBirdAnimation")); 
        var flyAction = new cc.repeatForever(actionFrame); 
        //上升动画 
        var riseMoveAction = cc.MoveTo.create(0.2, cc.p(birdX, birdY + riseHeight)); 
        var riseRotateAction = cc.RotateTo.create(0, -30); 
        var riseAction = cc.Spawn.create(riseMoveAction, riseRotateAction); 
        //下落动画 
        //模拟自由落体运动 
        var fallMoveAction = FreeFall.create(birdY - bottomY);
        var fallRotateAction =cc.RotateTo.create(0, 30); 
        var fallAction = new cc.Spawn(fallMoveAction, fallRotateAction); 
        this.flyBird.stopAllActions(); 
        this.flyBird.runAction(flyAction); 

        // var spaseq = new cc.sequence(riseAction, fallAction)

        this.flyBird.runAction(new cc.Spawn(new cc.sequence(riseAction, fallAction)));
    },
    addPipe:function(){
        var randomNum = parseInt(Math.random()*8);
        // var upRes = upArr[randomNum];
        // var downRes = downArr[randomNum];

        var upRes = res.up;
        var downRes = res.down

        var downPipe = new cc.Sprite(downRes);
        var pipeHeight = downPipe.getContentSize().height;
        var pipeWidth = downPipe.getContentSize().width;
        var groundHeight = 250;//滚动背景的高度

        var acrossHeight = 300;//小鸟飞行区间高度
        var downPipeHeight = 100 + getRandom(400);

        var upPipeHeight = size.height - downPipeHeight - acrossHeight - groundHeight;
        var pipeX = size.width + pipeWidth/2;
        downPipe.x = pipeX + pipeWidth/2;
        downPipe.y = groundHeight + pipeHeight/2 - (pipeHeight - downPipeHeight);

        var upPipe = new cc.Sprite(upRes);
        upPipe.x = pipeX + pipeWidth/2;
        upPipe.y = size.height + (pipeHeight - upPipeHeight) - pipeHeight/2;

        this.addChild(downPipe,98);
        this.addChild(upPipe,98);

        this.PipeSpriteList.push(downPipe);
        this.PipeSpriteList.push(upPipe);
    },
    getRect:function(spr){
        var pos = spr.getPosition();
        var content = spr.getContentSize();

        return cc.rect(pos.x - content.width/2,pos.y - content.height/2,content.width,content.height);
    },
    collide:function(a, b){
        var aRect = this.getRect(a);
        var bRect = this.getRect(b);
        return cc.rectIntersectsRect(aRect, bRect);
    },
    checkCollision:function(){
        if(this.collide(this.flyBird, this.bottomBg)){
            // console.log("hit floor");
            this.birdFallAction();
            return;
        }
        for(var i=0;i<this.PipeSpriteList.length;i++){
            var pipe = this.PipeSpriteList[i];
            if(this.collide(this.flyBird, pipe)){
                // console.log("hit pipe i="+i);
                this.birdFallAction();
                break;
            }
        }
    },
    birdFallAction:function(){
        this.flyBird.stopAllActions();
        var birdX = this.flyBird.getPositionX();
        var birdY = this.flyBird.getPositionY();

        // var bottomY = this.groundSprite.getContentSize().height + this.flyBird.getContentSize().width/2;
        var bottomY = 50;
        var fallMoveAction = FreeFall.create(birdY - bottomY);
        var fallRotateAction = new cc.RotateTo(0,180);
        var fallAction = new cc.Spawn(fallMoveAction, fallRotateAction);
        this.flyBird.runAction(new cc.sequence(new cc.delayTime(0.1),fallAction));

        this.runAction(new cc.sequence(new cc.delayTime(0.1), new cc.callFunc(this.gameOver, this)));
    },
    gameOver:function(){
        if(this.gameEnd)return;
        this.gameEnd = true;
        this.car.stopAllActions();
        this.bus.stopAllActions();
        this.unscheduleUpdate();

        $('.middlePage').removeClass('hide');

        this.removeAllChildrenWithCleanup();

        var endScore = this.scoreNum;
        GD.doingGame(endScore, function(){
            $('.middlePage').addClass('hide');
            $('.endPage').removeClass('hide');
        });

        /*====================动态修改微信title和desc====================*/
        var _percent = 0;
        if(endScore == 0){
            _percent = 0;
        }else if(endScore<40){
            _percent = parseInt(Math.random()*20+50);
        }else if(endScore<60){
            _percent = parseInt(Math.random()*20+70);
        }else{
            _percent = parseInt(Math.random()*9+90);
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
        var self = this.target;
        if(!self.gameEnd){
            self.runBirdAction();
        }
    }
});


var FreeFall = cc.ActionInterval.extend( {
    timeElasped:0,
    m_positionDeltaY:null,
    m_startPosition:null,
    m_targetPosition:null,
    ctor:function() {
        cc.ActionInterval.prototype.ctor.call(this);
        this.yOffsetElasped = 0;
        this.timeElasped = 0;
        this.m_positionDeltaY = 0;
        this.m_startPosition = cc.p(0, 0);
        this.m_targetPosition = cc.p(0, 0);
    },
    initWithDuration:function (duration) {//是设置该action运行的时间，时间的长短决定下降的速度。
        if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
            return true;
        }
        return false;
    },
    initWithOffset:function(deltaPosition) {
        //自由落体运动计算公式
        var dropTime = Math.sqrt(2.0*Math.abs(deltaPosition)/k_Acceleration) * 0.1;
        // console.log(dropTime)
        //cc.log("dropTime=" + dropTime);
        if (this.initWithDuration(dropTime))
        {
            this.m_positionDeltaY = deltaPosition;
            // console.log(this.m_positionDeltaY , deltaPosition)
            return true;
        }
        cc.log("dropTime =" + dropTime + "; deltaPosition=" + deltaPosition);
        return false;
    },
    isDone:function() {//函数设置了动作是否运行结束。
        if (this.m_targetPosition.y >= this._target.getPositionY()) {
            return true;
        }
        return false;
    },
    //Node的runAction函数会调用ActionManager的addAction函数，在ActionManager的addAction函数中会调用Action的startWithTarget，然后在Action类的startWithTarget函数中设置_target的值。
    startWithTarget:function(target) {//函数由ActionManager调用，设置_target的值
        //cc.log("startWithTarget target=" + target);
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this.m_startPosition = target.getPosition();
        // console.log(this.m_startPosition)
        this.m_targetPosition = cc.p(this.m_startPosition.x, this.m_startPosition.y  - this.m_positionDeltaY);
    },
    update:function(dt) {//函数在ActionInterval的step函数中会调用，在这个函数中不断更新精灵的坐标，使用了自由落体计算位移的公式。
        this.timeElasped += dt;
        // cc.log("isdone=" + this.timeElasped);
        if (globalSpr && !(this.m_targetPosition.y >= globalSpr.getPositionY())) {
            var yMoveOffset = 0.5 * k_Acceleration * this.timeElasped * this.timeElasped * 0.3;
            if (cc.ENABLE_STACKABLE_ACTIONS) {
                var newPos =  cc.p(this.m_startPosition.x, this.m_startPosition.y - yMoveOffset);
                if (this.m_targetPosition.y > newPos.y) {
                    newPos.y = this.m_targetPosition.y;
                    globalSpr.stopAction(this);
                }
                   
                globalSpr.setPosition(newPos);
                 
            } else {
                globalSpr.setPosition(cc.p(this.m_startPosition.x, this.m_startPosition.y + this.m_positionDeltaY * dt));
            }
        }
    }           
});

FreeFall.create = function(deltaPosition) {
    var ff = new FreeFall();
    ff.initWithOffset(deltaPosition);
    return ff; 
};

function getRandom(maxSize) {
    return Math.floor(Math.random() * maxSize) % maxSize;
}

var Background = cc.Sprite.extend({
    yy:0,
    xx:0,
    ctor:function(res, tick){
        this._super();
        this.initWithFile(res);

        this.tick = tick;
    },
    update: function (a,b,c) {
        this.xx-= this.tick;
        this.yy=a;
        if(this.xx<b){
            this.xx=c;
        }
        this.setPosition(this.xx,this.yy);
    }
});

function randomArr(){
    var flag = 1;
    var n = 0;
    var arr = [];
    for(var i = 0;i < 8;i++){
        flag = 1;
        n = parseInt(Math.random()*8+1);
        for(var j = 0;j < i;j++){
            if(arr[j] == n){
                flag = 0;
                i--;
            }
        }
        if(flag == 1){
            arr.push(n);
        }
    }
    return arr;
}