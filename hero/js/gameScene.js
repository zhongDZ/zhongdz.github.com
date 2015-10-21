var _size = null,
    Score = 0,
    ScoreText = null,
    menuViewLayer = null,
    gameViewBackGroundLayer = null,
    gameView = null,
    hero = null,
    sbSize = null,
    _localStorage = null,
    test;
    //游戏背景X轴偏移量
    var gameViewXOffset = 0,
    //前一个黑块信息
    preBlackXOffset = 0,
    //生成黑块信息
    currBlackXOffset = 0,
    //两块间距
    betweenXOffset = 0,
    //增长黑块对象
    upBlackObject;
var gameScene = cc.Scene.extend({
    _score:0,
    onEnter:function(){
        this._super();

        this.init();
    },
    init:function(){
        _size = cc.director.getWinSize();

        gameViewBackGroundLayer = new BackGroundLayer();
        this.addChild(gameViewBackGroundLayer);

        gameView = new gameViewLayer();
        this.addChild(gameView);

        menuViewLayer = new menuLayer();
        this.addChild(menuViewLayer);

        _localStorage = cc.sys.localStorage;
        Score = this._score;
    }
});

var gameViewLayer = cc.Layer.extend({
    _this:null,
    _start:false,
    ctor:function(){
        this._super();

        _this = this;

        var stick_black = new cc.Sprite(res.stick_black);
        sbSize = stick_black.getContentSize();
        stick_black.setScale(180/sbSize.width, 387/sbSize.height);
        stick_black.x = _size.width/2;
        stick_black.y = sbSize.height/2-50;
        this.addChild(stick_black,1000);

        hero = new npcController();
        heroSize = hero.getContentSize();
        hero.x = _size.width/2;
        hero.y = sbSize.height + heroSize.height/2;
        this.addChild(hero,1000000);
        hero.yao();

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            target:this,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchEnded: this.onTouchEnded
        }, this);
        return true;
    },
    startGame:function(){
        var _width = 180;
        gameViewXOffset = -_width/2 + _size.width/2;
        preBlackXOffset = _width;
        this.runAction(cc.sequence(cc.moveBy(0.2, cc.p(-gameViewXOffset, 100))));
        this.npcRun(0.001);

        hero.runAction(cc.sequence(cc.moveBy(0.2, cc.p(_width/2-28, 0)),cc.callFunc(this.npcYao, this),cc.callFunc(this.addBlock, this)));
    },
    onTouchBegan:function(){
        if(_this._start){
            _this.startSchedule();
            return true;
        }
        return false;
    },
    onTouchEnded:function(){
        _this.stopSchedule();
    },
    addBlock:function(){
        _this._start = true;

        upBlackObject =  new cc.Sprite(res.stick_black);
        upBlackObject.setAnchorPoint(cc.p(0.5, 0));
        var upSize = upBlackObject.getContentSize();
        upBlackObject.x = gameViewXOffset+preBlackXOffset-2.5;
        upBlackObject.y = sbSize.height;
        upBlackObject.setScaleY(0);
        this.addChild(upBlackObject);

        //增加黑条方法
        //生成随机的宽度10～50
        //位置，屏幕右侧
        //动作结束可以可以触发手指按下动作
        //var flag = (cc.random0To1()*2.5+0.4)*20;
        var flag = cc.random0To1()*120+40;
        var stickBlack = new cc.Sprite(res.stick_black);
        var tSize = stickBlack.getContentSize();
        stickBlack.setScale(flag/sbSize.width, 387/sbSize.height);
        stickBlack.x = gameViewXOffset+_size.width+flag/2;
        stickBlack.y = tSize.height/2-50;
        this.addChild(stickBlack);

        var _offset = _size.width - preBlackXOffset;
        // var flag1 = (cc.random0To1()+1)/4;
        var flag1 = (cc.random0To1()+0.6)/2;
        currBlackXOffset = flag;
        betweenXOffset = flag1*_offset;

        stickBlack.runAction(cc.sequence(cc.moveBy(0.05, cc.p(-betweenXOffset, 0))));
    },
    npcRun:function(falg){
        hero.walk(falg);
    },
    npcKick:function(){
        //NPC踢
        hero.kick();
    },
    npcShake:function(){
        //NPC抖
        hero.shake();
    },
    npcYao:function(){
        //NPC摇
        hero.yao();
    },
    startSchedule:function(){
        this.schedule(this.upBlack, 0.02);
        this.npcShake();
    },
    upBlack:function(dt){
        var scaleY = upBlackObject.getScaleY();
        upBlackObject.setScaleY(scaleY+0.07);
    },
    stopSchedule:function(){
        this.unschedule(this.upBlack);
        this.npcKick();
        _this._start = false;
        upBlackObject.runAction(cc.sequence(cc.delayTime(0.3),cc.rotateBy(0.1, 90),cc.callFunc(this.rotateEnd, this)));
    },
    rotateEnd:function(){
        var uSize = upBlackObject.getContentSize();
        var finalHeight = upBlackObject.getScaleY()*uSize.height;
        //判断是否可以通过,
        var offsetll = (betweenXOffset+preBlackXOffset);
        var result = _size.width - offsetll;
        if (result+5<=finalHeight && (result+currBlackXOffset>=finalHeight)) {
            //成功
            // preBlackXOffset = currBslackXOffset;
            this.next(result+currBlackXOffset);
        } else {
            //失败
            if(result+currBlackXOffset < finalHeight){
                this.gameOver(result+currBlackXOffset+50);
            }else{
                this.gameOver(finalHeight+30);
            }
        }
    },
    next:function(offset){
        var flag = offset/500;
        this.npcRun(flag/30);
        hero.runAction(cc.sequence(cc.moveBy(flag, cc.p(offset, 0)),cc.callFunc(this.nextBlack, this)));
    },
    gameOver:function(offset){
        var flag = offset/500;
        this.npcRun(flag/30);
        hero.runAction(cc.sequence(cc.moveBy(flag, cc.p(offset, 0)),cc.callFunc(this.gameFaile, this)));
    },
    nextBlack:function(){
        Score++;
        ScoreText.setString(Score);
        
        if (Score>_localStorage.getItem("bestScore")) {
            _localStorage.setItem("bestScore", Score);  
        }
        
        this.npcYao();
        preBlackXOffset = currBlackXOffset+40;
        var result = _size.width - (betweenXOffset)-40;
        gameViewXOffset += result;
        this.runAction(cc.sequence(cc.moveBy(0.3, cc.p(-result, 0)),cc.callFunc(this.addBlock, this)));
    },
    gameFaile:function(){
        this.npcYao();
        hero.runAction(cc.sequence(cc.moveTo(0.3, cc.p(hero.getPositionX(), -200)),cc.callFunc(this.addGameFailView, this)));
        upBlackObject.runAction(cc.sequence(cc.rotateBy(0.1, 90)));
    },
    addGameFailView:function(){
        var gameOver = new gameOverViewLayer();
        this.addChild(gameOver,1000);
    }
});

var menuLayer = cc.Layer.extend({
    ctor:function(){
        this._super();

        var startMenuItem = new cc.MenuItemImage(res.startBtn,res.startBtn,this.startCallFun,this);
        this.startMenu = new cc.Menu(startMenuItem);
        this.addChild(this.startMenu);
        this.startMenu.x = _size.width/2;
        this.startMenu.y = _size.height/2;

        return true;
    },
    startCallFun:function(){
        // this.removeChild(this.startMenu);
        this.removeFromParent(true);
        gameViewBackGroundLayer.initBasic();
        gameView.startGame();
    }
});

var BackGroundLayer = cc.Layer.extend({
    ctor:function(){
        this._super();

        var gameBg  = new cc.Sprite(res.gameBg);
        gameBg.x = _size.width/2;
        gameBg.y = _size.height/2;
        this.addChild(gameBg,0);

        return true;
    },
    initBasic:function(){
        var scoreBg  = new cc.Sprite(res.scoreBg);
        scoreBg.x = _size.width/2;
        scoreBg.y = _size.height/2 + 350;
        this.addChild(scoreBg,0);

        var guide_text  = new cc.Sprite(res.guide_text);
        guide_text.x = _size.width/2;
        guide_text.y = _size.height/2 + 250;
        this.addChild(guide_text,0);

        ScoreText = new cc.LabelTTF("0","bold 宋体",46);
        ScoreText.x = _size.width/2;
        ScoreText.y = _size.height/2 + 350;
        ScoreText.fillStyle = new cc.color(255,255,255,255);
        this.addChild(ScoreText,2);
    }
});

var gameOverViewLayer = cc.Layer.extend({
    ctor:function(){
        this._super();

        var centerX = _size.width/2 + gameViewXOffset;
        var centerY = _size.height/2 - 100;

        var scoreBg = new cc.Sprite(res.overSoreBg);
        scoreBg.x = centerX;
        scoreBg.y = centerY;
        this.addChild(scoreBg,1000);

        var score = new cc.LabelTTF("本次成绩:"+Score,"Arial", 36);
        score.x = centerX;
        score.y = _size.height/2;
        score.fillStyle = new cc.color(255,0,0,255);
        this.addChild(score,1001);

        var _bestScore = _localStorage.getItem("bestScore");
        var BestScore = new cc.LabelTTF("历史最佳:"+_bestScore,"Arial", 36);
        BestScore.x = centerX;
        BestScore.y = _size.height/2 - 100;
        BestScore.fillStyle = new cc.color(255,0,0,255);
        this.addChild(BestScore,1001);

        var againMenuItem = new cc.MenuItemImage(res.again,res.again,this.againCallFun,this);
        var againMenu = new cc.Menu(againMenuItem);
        this.addChild(againMenu,1001);
        againMenu.x = centerX - 150;
        againMenu.y = centerY - 250;

        var moreMenuItem = new cc.MenuItemImage(res.more,res.more,this.moreCallFun,this);
        var moreMenu = new cc.Menu(moreMenuItem);
        this.addChild(moreMenu,1001);
        moreMenu.x = centerX + 150;
        moreMenu.y = centerY - 250;

        return true;
    },
    againCallFun:function(){
        this.removeFromParent(true);

        cc.director.runScene(new gameScene());
    },
    moreCallFun:function(){
        window.location.href = g_link;
    }
});

var npcController = cc.Sprite.extend({
    texture:null,
    ctor:function(){
        this._super();

        this.yaoTexture = cc.textureCache.addImage(res.yao);//添加纹理到缓存
        this.walkTexture = cc.textureCache.addImage(res.walk);//添加纹理到缓存
        this.kickTexture = cc.textureCache.addImage(res.kick);//添加纹理到缓存
        this.shakeTexture = cc.textureCache.addImage(res.shake);//添加纹理到缓存
        var standFrame = new cc.SpriteFrame(this.yaoTexture,cc.rect(150 * 0,0,150,150));
        this.setSpriteFrame(standFrame);
    },
    walk:function(falg){
        this.stopAllActions();
        var walk_frames = [];
        for(var i = 0;i<5;i++){
            var frame = new cc.SpriteFrame(this.walkTexture,cc.rect(150 * 0,0,150,150));
            walk_frames.push(frame);
        }
        var walkAnimation = new cc.Animation(walk_frames, falg);
        var walkAnimate = cc.Animate.create(walkAnimation).repeatForever();
        this.runAction(walkAnimate);
    },
    shake:function(){
        this.stopAllActions();
        var shake_frames = [];
        for(var i = 0;i<5;i++){
            var frame = new cc.SpriteFrame(this.shakeTexture,cc.rect(150 * 0,0,150,150));
            shake_frames.push(frame);
        }
        var shakeAnimation = new cc.Animation(shake_frames, 0.1);
        var shakeAnimate = cc.Animate.create(shakeAnimation).repeatForever();
        this.runAction(shakeAnimate);
    },
    kick:function(){
        this.stopAllActions();
        var kick_frames = [];
        for(var i = 0;i<5;i++){
            var frame = new cc.SpriteFrame(this.kickTexture,cc.rect(150 * 0,0,150,150));
            kick_frames.push(frame);
        }
        var kickAnimation = new cc.Animation(kick_frames, 0.1);
        var kickAnimate = cc.Animate.create(kickAnimation).repeatForever();
        this.runAction(kickAnimate);
    },
    yao:function(){
        this.stopAllActions();
        var yao_frames = [];
        for(var i = 0;i<5;i++){
            var frame = new cc.SpriteFrame(this.yaoTexture,cc.rect(150 * i,0,150,150));
            yao_frames.push(frame);
        }
        var yaoAnimation = new cc.Animation(yao_frames, 0.1);
        var yaoAnimate = cc.Animate.create(yaoAnimation).repeatForever();
        this.runAction(yaoAnimate);
    }
});