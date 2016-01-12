var size = {
    "width" : 640,
    "height" : 1280
}
var k_Acceleration = 2;
var globalSpr = null;
var gameScene = cc.Scene.extend({
    PipeSpriteList:[],
    m_DeltaY:0,
    m_startPosition:null,
    m_targetPosition:null,

    tick:0,

    passTime:0,
    ctor:function(){
        this._super();

        this.m_startPosition = cc.p(0, 0);
        this.m_targetPosition = cc.p(0, 0);

        this.init();

        // this.initReady();

        cc.spriteFrameCache.addSpriteFrames(res.flappy_packer,res.flappy_packer_png); 

        this.PipeSpriteList = [];

        this.initBird();

        this.loadListener();
    },
    init:function(){
        var gameBg = new cc.Sprite(res.bg);
        gameBg.x = size.width/2;
        gameBg.y = size.height/2;
        this.addChild(gameBg);

        this.initLoopBg();
        
        this.scheduleUpdate(); 
    },
    initLoopBg:function(){
        this.bg = new Background(res.ground);
        this.bg.attr({
          x:0,
          y:0,
          anchorX:0,
          anchorY:0
        });
        this.addChild(this.bg,0);

        this.bg1 = new Background(res.ground);
        this.bg1.xx = 840;//此处添加时为了解决两个背景相接处出现黑边
        this.bg1.attr({
          x:0,
          y:-840,
          anchorX:0,
          anchorY:0
        });
        this.addChild(this.bg1,0);
    },
    update:function(){
        // this.bg.update(0,-840,0);
        // this.bg1.update(0,0,840);

        for(var i = 0; i < this.PipeSpriteList.length; ++ i) {
            var pipe = this.PipeSpriteList[i];
            pipe.setPositionX(pipe.getPositionX() - 3);
            if (pipe.getPositionX() < -pipe.getContentSize().width / 2) {
                this.PipeSpriteList.splice(i, 1);
            }
        }

        this.passTime += 1;
        if(this.passTime >= size.width/4){
            this.addPipe();
            this.passTime = 0;
        }

        this.checkCollision();
    },
    initReady:function(){
        this.bird = new cc.Sprite(res.bird);
        this.bird.x = size.width/2;
        this.bird.y = size.height/2;
        this.addChild(this.bird);
    },
    initBird:function(){
        var texture = cc.textureCache.addImage(res.ani);//添加纹理到缓存
        
        var sprFrames = [];
        sprFrames[0] = new cc.SpriteFrame(texture,cc.rect(100 * 0,0,100,148));
        sprFrames[1] = new cc.SpriteFrame(texture,cc.rect(100 * 1,0,100,148));
        var animation = new cc.Animation(sprFrames,0.3);
        var animate = new cc.animate(animation);
        // var repeat = animate.repeatForever();

        cc.animationCache.addAnimation(animation, "FlyBirdAnimation");

        globalSpr = this.flyBird = new cc.Sprite(res.bird);
        this.flyBird.x = size.width/2;
        this.flyBird.y = size.height/2;
        this.addChild(this.flyBird);

        // var actionFrame = cc.Animate(animation); 
        var flyAction = new cc.repeatForever(animate);

        // this.flyBird.runAction(flyAction);
    },
    runBirdAction:function(){
        var riseHeight = 50; 
        var birdX = this.flyBird.getPositionX(); 
        var birdY = this.flyBird.getPositionY(); 
        // var bottomY = this.groundSprite.getContentSize().height - this.flyBird.getContentSize().height / 2; 
        var bottomY = 250;
      
        // var actionFrame = cc.Animate.create(cc.AnimationCache.getInstance().getAnimation("FlyBirdAnimation")); 
        // var flyAction = cc.RepeatForever.create(actionFrame); 
        //上升动画 
        var riseMoveAction = cc.MoveTo.create(0.2, cc.p(birdX, birdY + riseHeight)); 
        var riseRotateAction = cc.RotateTo.create(0, -30); 
        var riseAction = cc.Spawn.create(riseMoveAction, riseRotateAction); 
        //下落动画 
        //模拟自由落体运动 
        var fallMoveAction = FreeFall.create(birdY - bottomY); 
        // var bb = birdY - bottomY;
        // var fallMoveAction = new cc.callFunc(this.test(bb),this);
        var fallRotateAction =cc.RotateTo.create(0, 30); 
        var fallAction = new cc.Spawn(fallMoveAction, fallRotateAction); 
        this.flyBird.stopAllActions(); 
        // this.flyBird.runAction(flyAction); 

        var spaseq = new cc.sequence(riseAction, fallAction)
        // this.flyBird.runAction(cc.Spawn.create( 
        //     cc.Sequence.create(riseAction, fallAction) ) 
        // );

        this.flyBird.runAction(new cc.Spawn(new cc.sequence(riseAction, fallAction)));
    },
    addPipe:function(){
        var downPipe = new cc.Sprite(res.down);
        var pipeHeight = downPipe.getContentSize().height;
        var pipeWidth = downPipe.getContentSize().width;
        var groundHeight = 250;//滚动背景的高度

        var acrossHeight = 300;//小鸟飞行区间高度
        var downPipeHeight = 100 + getRandom(400);

        var upPipeHeight = size.height - downPipeHeight - acrossHeight - groundHeight;
        var pipeX = size.width + pipeWidth/2;
        downPipe.x = pipeX + pipeWidth/2;
        downPipe.y = groundHeight + pipeHeight/2 - (pipeHeight - downPipeHeight);


        var upPipe = new cc.Sprite(res.up);
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
        // if(this.collide(this.flyBird, this.groundSprite)){
        //     //console.log("hit floor");
        //     this.birdFallAction();
        //     return;
        // }
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
        var bottomY = 250;
        var fallMoveAction = FreeFall.create(birdY - bottomY);
        var fallRotateAction = new cc.RotateTo(0,90);
        var fallAction = new cc.Spawn(fallMoveAction, fallRotateAction);
        this.flyBird.runAction(new cc.sequence(new cc.delayTime(0.1),fallAction));

        this.runAction(new cc.sequence(new cc.delayTime(1), new cc.callFunc(this.gameOver, this)));
    },
    gameOver:function(){
        console.log('gameOver');
        this.unscheduleUpdate();
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
        // var target = event.getCurrentTarget();
        // var tag = target.tag;
        // var tag = self.tag;

        self.runBirdAction();
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
    ctor:function(res){
        this._super();
        this.initWithFile(res);
    },
    update: function (a,b,c) {
        this.xx-=3;
        this.yy-=a;
        if(this.xx<b){
            this.xx=c;
        }
        this.setPosition(this.xx,this.yy);
    }
});

var touchSprite = cc.Sprite.extend({
    numArr:[],
    ctor:function(x,y,row,col,num,M,tag,layer){
        this._super();

        var texture = cc.textureCache.addImage(res.main);
        var frame = new cc.SpriteFrame(texture,cc.rect(160 * row ,160 * col,160,160));
        this.setSpriteFrame(frame);
        this.x = x;
        this.y = y;
        this.tag = tag;
        this.layer = layer;

        this.num == null?null:num;
        this.M == null?null:M;

        this.loadListener();
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
        // var target = event.getCurrentTarget();
        // var tag = target.tag;
        var tag = self.tag;

        if(tag == 0 && !beginMove){//点击第一张
            beginMove = true;
            self.layer.removeChild(self.layer.getChildByTag(tag));

            sprInfo[0].flag = null;//!!!!!!!!!!!将第一个位置为空 null
            globalRandomArr = randomArr();

            for(var i = 1;i<=8;i++){
                sprArr[i].x = sprInfo[globalRandomArr[i - 1]].x;
                sprArr[i].y = sprInfo[globalRandomArr[i - 1]].y;
                sprArr[i].num = globalRandomArr[i-1];
                sprArr[i].M = i;
            }
        }else if(tag !== 0 && beginMove){
            self.onTouchDispose(touch, event, self);
            self.dealSuccess(self.layer);
        }
    },
    onTouchDispose : function(touch, event, _layer){//处理点击
        var _this = event.getCurrentTarget();
        _this.numArr = [];
        switch(_this.num){
            case 0:{
                _this.numArr = [1,3];
            };break;
            case 1:{
                _this.numArr = [0,2,4];
            };break;
            case 2:{
                _this.numArr = [1,5];
            };break;
            case 3:{
                _this.numArr = [0,4,6];
            };break;
            case 4:{
                _this.numArr = [1,3,5,7];
            };break;
            case 5:{
                _this.numArr = [2,4,8];
            };break;
            case 6:{
                _this.numArr = [3,7];
            };break;
            case 7:{
                _this.numArr = [4,6,8];
            };break;
            case 8:{
                _this.numArr = [5,7];
            };break;
        }
        _layer.checkTNarr(_this.numArr,event);
    },
    checkTNarr:function(arr,event,_layer){
        step++;
        GameLayer.reNewScore(step);
        var _this = event.getCurrentTarget();
        for(var i = 0;i < arr.length;i++){
            if(sprInfo[arr[i]].flag == null){
                sprInfo[_this.num].flag = null;
                sprInfo[arr[i]].flag = _this.num;

                _this.x = sprInfo[arr[i]].x;
                _this.y = sprInfo[arr[i]].y
                _this.num = arr[i];
                // return true;
            }
        }
        // return false;
    },
    dealSuccess:function(_layer){
        var successCheck = true;
        for(var i = 1;i<9;i++){
            if(sprArr[i].num != sprArr[i].M){
                successCheck = false;
                break;
            }
        }
        if(!successCheck){
            var best = window.localStorage.getItem('localStep') > step ? window.localStorage.getItem('localStep') : step;
            window.localStorage.setItem('localStep',best);
            // if(step>1){

                cc.director.runScene(new gameScene());
                beginMove = false;

                $('.outTime').show();
                $('.outTimeTip').html('正在提交分数,请稍后...');

                sendScore(step);
            // }
        }else{
            console.log("nnn");
        }
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