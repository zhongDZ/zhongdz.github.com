var SpriteMyLayer = cc.Layer.extend({
    size:null,
    sprObj:null,
    sprTag:1,
    listener:null,//事件
    ctor:function () {
        this._super();

        if(true){
            this.addLabel();  
        }
        if(true){
            this.addSprite();
        }
        if(true){
            this.addAnimation();
        }
        if(true){
            this.addSpritePlist();
        }

        if(true){
            this.addEventSpr();
        }
    },
    addLabel:function(){//添加label
        var label = new cc.LabelTTF("Hello World", "Arial", 40);
        label.x = winSize.width/2;
        label.y = winSize.height - 200;
        this.addChild(label,1);
        label.fillStyle = cc.color(255,255,0);
    },
    addSprite:function(){//添加精灵
        this.sprObj = new cc.Sprite(res.spr);
        this.sprObj.x = winSize.width/2;
        this.sprObj.y = winSize.height - 350;
        this.addChild(this.sprObj,1,this.sprTag);
        // console.log(this.getChildByTag(this.sprTag));
        this.getChildByTag(this.sprTag).setTag(2);
        // console.log(this.sprObj.getTag());

        if(!true){
            this.sprObj.attr({
                x: 100,
                y: 170,
                opacity: 128,
                scaleX: 2.5,
                scaleY: -1.0,
                rotation: 120,
                color: cc.color(255, 0, 0)
            });
        }

        if(true){
            var mt = cc.moveTo(1,cc.p(50,700));
            var mb = cc.moveBy(1,cc.p(50,0));
            var delay = cc.delayTime(0.25);
            var st = cc.scaleTo(1,1.5);
            var sb = cc.scaleBy(1,0.5);
            var mbR = mb.reverse();
            var aT = cc.rotateTo(2, 45);
            var aT1 = cc.rotateTo(2, -45);
            var aT2 = cc.rotateTo(2, 0);
            var call = cc.callFunc(this.actionCallback,this);
            var sep = cc.sequence(mb,mbR,st,aT,delay,call);
            var rep = sep.repeatForever();
            this.sprObj.runAction(rep);
        }
    },
    actionCallback:function(){//action回调函数
        console.log("action success!!!!!!!");
    },
    addAnimation:function(){//利用cache缓存
        var aniSprObjTag = 3;
        var texture = cc.textureCache.addImage(res.ani);//添加纹理到缓存
        var aniSpr = new cc.SpriteFrame(texture,cc.rect(80*4,0,80,80));//注意 new  别缺少了!!!!!!!!!
        var aniSprObj = new cc.Sprite(aniSpr);
        this.addChild(aniSprObj,1,aniSprObjTag);
        aniSprObj.x = winSize.width/2;
        aniSprObj.y = winSize.height/2;
        var sprFrames = [];
        sprFrames[0] = new cc.SpriteFrame(texture,cc.rect(80 * 4,0,80,80));
        sprFrames[1] = new cc.SpriteFrame(texture,cc.rect(80 * 5,0,80,80));
        sprFrames[2] = new cc.SpriteFrame(texture,cc.rect(80 * 6,0,80,80));
        sprFrames[3] = new cc.SpriteFrame(texture,cc.rect(80 * 7,0,80,80));
        var animation = new cc.Animation(sprFrames,0.2);
        var animate = new cc.animate(animation);
        var repeat = animate.repeatForever();
        aniSprObj.runAction(animate);
    },
    addSpritePlist:function(){//添加用plist的精灵纹理
        //加载plist资源
        var plist = cc.spriteFrameCache.addSpriteFrames(res.sprite1Plist);
        var spr = new cc.Sprite("#bone_1_1.png");
        this.addChild(spr,1);
        spr.name = "spr_plist";
        spr.setPosition(winSize.width/2,winSize.height/2 - 200);

        var shadow = new cc.Sprite(res.shadow);
        spr.addChild(shadow);
        shadow.setAnchorPoint(0.12,0.2);

        var animate = this.getAnimatePlist(4);
        spr.runAction(animate.repeatForever());
    },
    getAnimatePlist:function(dir){
        var frames = [];
        for (var i = 0; i < 8; i++){
            var str = "bone_" + (dir + 1) + "_" + (i + 1) +".png";
            //从缓存里面获取精灵纹理
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            frames.push(frame);
        }
        var animation = new cc.Animation(frames, 0.1);
        return cc.animate(animation);
    },
    addEventSpr:function(){
        var eventSpr = new event_spr();
        this.addChild(eventSpr);
        eventSpr.x = winSize.width/2;
        eventSpr.y = 100;
    }
});

var event_spr = cc.Sprite.extend({
    ctor:function(){
        this._super();

        this.initWithFile(res.spr);

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
        var pos = touch.getLocation();
        var locationInNode = self.convertToNodeSpace(touch.getLocation());
        var _size = self.getContentSize();
        var rect = cc.rect(0, 0, _size.width, _size.height);
        if (!cc.rectContainsPoint(rect, locationInNode)) {
            return false;
        }
        return true;
    },
    onTouchMoved : function (touch, event) {
        var self = this.target;
        var pos = touch.getLocation();
        var target = event.getCurrentTarget();

        self.onTouchDispose(touch, event);
    },
    onTouchEnded : function (touch, event) {
        var self = this.target;
        var target = event.getCurrentTarget();
        // console.log(parseInt(target.x),parseInt(target.y))
    },
    onTouchDispose : function(touch, event){//处理点击
        var target = event.getCurrentTarget();
        var pos = touch.getLocation();
        target.x = pos.x;
        console.log(parseInt(target.x),parseInt(target.y))
    }
});