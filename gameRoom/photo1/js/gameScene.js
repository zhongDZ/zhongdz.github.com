var beginBtn = null;
var stop = false;
var yellowBox = null;
var BlackBox = null;
var endBox = null;
var score = 0;
var RSmenu = null;
var Mmenu = null;
var req1 = null;
var timeNumLabel = null;
var timeNum = 0;
var timeNumCheck = 3;
var gameScene = cc.Scene.extend({
    winSize:null,
    ctor:function(){
        this._super();
        this.init();
        this.scheduleUpdate();
    },
    init:function(){
        var size = cc.director.getWinSize();
        this.winSize = size;
        var _this = this;

        this.action1();
        this.action2();
        this.action3();
        this.action4();
        
        var gameBg  = new cc.Sprite(res.gameBg);
        gameBg.x = size.width/2;
        gameBg.y = size.height/2;
        this.addChild(gameBg,0);

        timeNumLabel  = new cc.Sprite(res.num_3);
        timeNumLabel.x = size.width/2;
        timeNumLabel.y = size.height/2;
        this.addChild(timeNumLabel,0);

        beginBtn  = new cc.Sprite(res.beginBtn);
        beginBtn.x = size.width/2;
        beginBtn.y = size.height/2 - 450;
        this.addChild(beginBtn,0);
        beginBtn.runAction(req1);

        BlackBox = new cc.LayerColor(cc.color(255,255,255,1), size.width, size.height);
        BlackBox.x = 0;
        BlackBox.y = 0;
        BlackBox.opacity = 0;
        this.addChild(BlackBox,10);

        endBox = new cc.LayerColor(cc.color(255,255,255,100), size.width, size.height);
        endBox.x = 0;
        endBox.y = 0;
        endBox.setVisible(false);
        this.addChild(endBox,100);

        this.scoreLabel = new cc.LabelTTF('','Arial',72);
        this.scoreLabel.x = size.width/2;
        this.scoreLabel.y = size.height/2;
        this.scoreLabel.fillStyle = cc.color(255,0,0,255);
        this.addChild(this.scoreLabel,1000);

        var RSmenuItem = new cc.MenuItemImage(res.reStart,res.reStart,function(){
            cc.director.runScene(new gameScene());
            /***********reset***********/
            timeNum = 0;
            timeNumCheck = 3;
            _this.scheduleUpdate();
            /***********reset***********/
        },this);
        RSmenu = new cc.Menu(RSmenuItem);
        RSmenu.x = size.width/2;
        RSmenu.y = size.height/2 - 200;
        this.addChild(RSmenu,101);
        RSmenu.setVisible(false);

        var MmenuItem = new cc.MenuItemImage(res.more,res.more,function(){
            window.location.href = g_link;
        },this);
        Mmenu = new cc.Menu(MmenuItem);
        Mmenu.x = size.width/2;
        Mmenu.y = size.height/2 - 300;
        this.addChild(Mmenu,101);
        Mmenu.setVisible(false);

        this.spr2  = new cc.Sprite(res.spr2);
        this.spr2.x = 225;
        this.spr2.y = 225;

        yellowBox = new cc.LayerColor(cc.color(237,227,200,255), 450, 450);
        yellowBox.x = size.width/2 - 225;
        yellowBox.y = size.height/2 - 225;
        yellowBox.anchorX = 0.5;
        yellowBox.anchorY = 0.5;
        yellowBox.setVisible(false);
        this.addChild(yellowBox,10000);
        yellowBox.addChild(this.spr2);

        this.flower  = new cc.Sprite(res.flower);
        this.flower.x = size.width/2;
        this.flower.y = size.height/2 + 500;
        this.flower.opacity = 0;
        this.addChild(this.flower,10);

        this.rocket  = new cc.Sprite(res.rocket);
        this.rocket.x = 0;
        this.rocket.y = 0;
        this.addChild(this.rocket,100);
        this.rocket.setVisible(false);
        var rmt = cc.moveTo(2,cc.p(size.width,size.height));
        var rcf = cc.callFunc(function(){
            _this.addChild(_this.share,0);
            _this.removeChild(_this.rocket);
        },this);
        this.rseq = cc.sequence(rmt,rcf);

        this.share  = new cc.Sprite(res.share);
        this.share.x = size.width;
        this.share.y = size.height;
        this.share.anchorX = 1;
        this.share.anchorY = 1;

        this.loadListener(beginBtn);
    },
    action1:function(){
        var size = cc.director.getWinSize();
        var fi = new cc.FadeIn(0.3);
        var mt = cc.moveTo(3,cc.p(size.width/2,-200));
        var aT = cc.rotateBy(3, 3600);
        this.seq = cc.spawn(fi,mt,aT);
    },
    action2:function(){
        var _this = this;
        
        var mt = cc.moveTo(1,cc.p(-90,600));
        var delay = cc.delayTime(0.7);
        var st = cc.scaleTo(.5,0.9);
        var aT = cc.rotateTo(.5, 45);
        var call = cc.callFunc(function(){
            _this.flower.setVisible(false);
            yellowBox.setVisible(true);
            yellowBox.runAction(this.seq2);
            yellowBox.setScale(0.5);
        },this);

        this.seq1 = cc.spawn(st,call);

        this.seq2 = cc.sequence(delay,mt,delay.clone(),aT,cc.callFunc(function(){
            RSmenu.setVisible(true);
            Mmenu.setVisible(true);
            endBox.setVisible(true);
            _this.scoreLabel.setString(score+"分");
            _this.rocket.runAction(_this.rseq);
            _this.rocket.setVisible(true);
        }));
    },
    action3:function(){
        var fi = new cc.FadeIn(0.3);
        var fo = new cc.FadeOut(0.3);
        this.seq3 = cc.sequence(fi,fo);
    },
    action4:function(){
        var st1 = cc.scaleTo(.8,1.1);
        var st2 = cc.scaleTo(.8,1);
        var seq = cc.sequence(st1,st2);
        req1 = cc.repeatForever(seq);
    },
    update:function(){
        console.log(0)
        if(timeNumCheck<=0){
            this.unscheduleUpdate();
            return;
        }
        timeNum++;
        if(timeNum%60 == 0){
            timeNumCheck --;
            switch(timeNumCheck){
                case 2:{
                    timeNumLabel.initWithFile(res.num_2);
                }break;
                case 1:{
                    timeNumLabel.initWithFile(res.num_1);
                }break;
                case 0:{
                    this.removeChild(timeNumLabel);
                    this.flower.runAction(this.seq);
                    stop = true;//开始掉花
                }break;
            }
        }
    },
    loadListener : function(_target){
        var listener = cc.EventListener.create({
            event           : cc.EventListener.TOUCH_ONE_BY_ONE,
            target          : this,
            swallowTouches  : true,
            onTouchBegan    : this.onTouchBegan,
            onTouchMoved    : this.onTouchMoved,
            onTouchEnded    : this.onTouchEnded
        });
        cc.eventManager.addListener(listener, _target);
    },
    onTouchBegan: function (touch, event) {
        var self = this.target;
        var locationInNode = self.convertToNodeSpace(touch.getLocation());
        var size = self.getContentSize();
        var rect = cc.rect(0, 0, size.width, size.height);
        if (!cc.rectContainsPoint(rect, locationInNode)) {
            return false;
        }
        // 触摸处理
        self.onTouchDispose();
        return true;

    },
    onTouchMoved : function (touch, event) {
        //var self = this.target;
    },
    onTouchEnded : function (touch, event) {
        //var self = this.target;
    },
    onTouchDispose : function(){//处理点击
        if(!stop)return;
        this.flower.stopAllActions();
        au1.play();
        BlackBox.runAction(this.seq3);
        var _this = this;
        stop = false;

        var _canvas = document.getElementById("gameCanvas"); 
        var ctx = _canvas.getContext("2d");
        var imageUrl = _canvas.toDataURL("image/png");

        var aa = 0,
            bb = 0,
            img = new Image();
        img.src = imageUrl;
        img.onload = function(){
            aa = img.width;
            bb = img.height;
            var texture = cc.textureCache.addImage(imageUrl);//添加纹理到缓存
            var standFrame = new cc.SpriteFrame(texture,cc.rect((aa-450)/2,(bb-450)/2,450,450));
            _this.spr2.setSpriteFrame(standFrame);
            _this.spr2.runAction(_this.seq1);
        }

        var scoreCheck = this.flower.y;
        if(scoreCheck>950){
            score = (Math.random()*20+20).toFixed(2);
        }else if(scoreCheck>750&&scoreCheck<=950){
            score = (Math.random()*20+50).toFixed(2);
        }else if(scoreCheck>450&&scoreCheck<=750){
            score = (Math.random()*29+70).toFixed(2);
        }else if(scoreCheck>200&&scoreCheck<=450){
            score = (Math.random()*20+50).toFixed(2);
        }else{
            score = (Math.random()*20+20).toFixed(2);
        }
    }
});



var beginScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        var size = cc.director.getWinSize();
        var _this = this;

        var beginBg = new cc.Sprite(res.beginBg);
        beginBg.x = size.width/2;
        beginBg.y = size.height/2;
        this.addChild(beginBg);

        var guizeBg = new cc.Sprite(res.guizeBg);
        guizeBg.x = size.width/2;
        guizeBg.y = size.height/2;

        var beginItem = new cc.MenuItemImage(res.begin,res.begin,function(){
            cc.director.runScene(new gameScene())
        },this);
        var beginMenu = new cc.Menu(beginItem);
        beginMenu.x = size.width/2;
        beginMenu.y = size.height/2 - 100;
        this.addChild(beginMenu);


        var guizeItem = new cc.MenuItemImage(res.begin,res.begin,function(){
            _this.addChild(guizeBg);
            _this.addChild(backMenu,10);
            _this.removeChild(beginBg);
            _this.removeChild(beginMenu);
            _this.removeChild(guizeMenu);
        },this);
        var guizeMenu = new cc.Menu(guizeItem);
        guizeMenu.x = size.width/2;
        guizeMenu.y = size.height/2 - 300;
        this.addChild(guizeMenu);

        var backItem = new cc.MenuItemImage(res.back,res.back,function(){
            _this.removeChild(guizeBg);
            _this.removeChild(backMenu,10);
            _this.addChild(beginBg);
            _this.addChild(beginMenu);
            _this.addChild(guizeMenu);
        },this);
        var backMenu = new cc.Menu(backItem);
        backMenu.x = size.width/2;
        backMenu.y = size.height/2 - 100;
    }
});