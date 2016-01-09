var size = {
    "width" : 640,
    "height" : 1280
}
var gameScene = cc.Scene.extend({
    PipeSpriteList:[],
    ctor:function(){
        this._super();

        this.init();

        // this.initReady();

        cc.spriteFrameCache.addSpriteFrames(res.flappy_packer,res.flappy_packer_png); 

        this.PipeSpriteList = [];

        this.addPipe();

        this.initBird();

        // this.runBirdAction();

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
    },
    initReady:function(){
        this.bird = new cc.Sprite(res.bird);
        this.bird.x = size.width/2;
        this.bird.y = size.height/2;
        this.addChild(this.bird);
    },
    initBird:function(){
        var animation = cc.animationCache.getAnimation("FlyBirdAnimation");

        if(!animation){
            var animFrames = [];
            var str = "";
            var birdFrameCount = 4;
            for(var i=0; i<birdFrameCount; i++){
                str = "bird" +i+ ".png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
        }

        console.log(cc.spriteFrameCache.getSpriteFrame("bird1.png"))

        animation = new cc.Animation(animFrames, 0.05, true);
        cc.animationCache.addAnimation(animation, "FlyBirdAnimation");

        this.flyBird = new cc.Sprite(res.bird);
        this.flyBird.x = size.width/2;
        this.flyBird.y = size.height/2;
        this.addChild(this.flyBird);

        // var actionFrame = cc.Animate(animation); 
        // var flyAction = new cc.RepeatForever(actionFrame);

        // this.flyBird.runAction(flyAction);
    },
    runBirdAction:function(){
        var riseHeight = 50; 
        var birdX = this.flyBird.getPositionX(); 
        var birdY = this.flyBird.getPositionY(); 
        // var bottomY = this.groundSprite.getContentSize().height - this.flyBird.getContentSize().height / 2; 
        var bottomY = 700;
      
        // var actionFrame = cc.Animate.create(cc.AnimationCache.getInstance().getAnimation("FlyBirdAnimation")); 
        // var flyAction = cc.RepeatForever.create(actionFrame); 
    //上升动画 
        var riseMoveAction = cc.MoveTo.create(0.2, cc.p(birdX, birdY + riseHeight)); 
        var riseRotateAction = cc.RotateTo.create(0, -30); 
        var riseAction = cc.Spawn.create(riseMoveAction, riseRotateAction); 
    //下落动画 
    //模拟自由落体运动 
        var fallMoveAction = FreeFall.create(birdY - bottomY); 
        var fallRotateAction =cc.RotateTo.create(0, 30); 
        var fallAction = cc.Spawn.create(fallMoveAction, fallRotateAction); 
        // this.flyBird.stopAllActions(); 
        // this.flyBird.runAction(flyAction); 

        var seq = new cc.sequence(riseAction, fallAction)
        // this.flyBird.runAction(cc.Spawn.create( 
        //     cc.Sequence.create(riseAction, fallAction) ) 
        // );

        this.flyBird.runAction(seq)
    },
    addPipe:function(){
        var upPipe = new cc.Sprite(res.up);
        upPipe.anchorY = 1;
        upPipe.scaleY = 0.5;
        upPipe.x = size.width/2 + upPipe.getContentSize().width/2;
        upPipe.y = size.height + 100;

        this.addChild(upPipe);


        var downPipe = new cc.Sprite(res.down);
        downPipe.anchorY = 0;
        downPipe.scaleY = 0.5;
        downPipe.x = upPipe.x;
        downPipe.y = -60;

        this.addChild(downPipe);
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

        console.log('ok')

        self.runBirdAction();
    }
});

k_Acceleration = 2;
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

    initWithDuration:function (duration) {
        if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
            return true;
        }
        return false;
    },

    initWithOffset:function(deltaPosition) {
        //自由落体运动计算公式
        var dropTime = Math.sqrt(2.0*Math.abs(deltaPosition)/k_Acceleration) * 0.1;
        //cc.log("dropTime=" + dropTime);
        if (this.initWithDuration(dropTime))
        {
            this.m_positionDeltaY = deltaPosition;
            return true;
        }
         //cc.log("dropTime =" + dropTime + "; deltaPosition=" + deltaPosition);
        return false;
    },

    isDone:function() {
        if (this.m_targetPosition.y >= this._target.getPositionY()) {
            return true;
        }
        return false;
    },


    //Node的runAction函数会调用ActionManager的addAction函数，在ActionManager的addAction函数中会调用Action的startWithTarget，然后在Action类的startWithTarget函数中设置_target的值。
    startWithTarget:function(target) {
        //cc.log("startWithTarget target=" + target);
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this.m_startPosition = target.getPosition();
        this.m_targetPosition = cc.p(this.m_startPosition.x, this.m_startPosition.y  - this.m_positionDeltaY);
    },

    update:function(dt) {
        this.timeElasped += dt;
        //cc.log("isdone=" + this.timeElasped);

        if (this._target && !(this.m_targetPosition.y >= this._target.getPositionY())) {
            var yMoveOffset = 0.5 * k_Acceleration * this.timeElasped * this.timeElasped * 0.3;
            if (cc.ENABLE_STACKABLE_ACTIONS) {
                var newPos =  cc.p(this.m_startPosition.x, this.m_startPosition.y - yMoveOffset);
                if (this.m_targetPosition.y > newPos.y) {
                    newPos.y = this.m_targetPosition.y;
                    this._target.stopAction(this);
                }
                   
                this._target.setPosition(newPos);
                 
            } else {
                this._target.setPosition(cc.p(this.m_startPosition.x, this.m_startPosition.y + this.m_positionDeltaY * dt));
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