var size = {
    "width" : 600,
    "height": 1007
}

var aaa = 0;
var end = 7;

var canChangePage = true;//如果有动画，在播放完之后才允许拨动下一页
var curScene = null;
var glbalScene = null;
var _Layer9 = null;
var _Layer10 = null;
var showZW = false;
var bgColor = [
        "#ffffff",
        "#57BDDA",
        "#F6E688",
        "#C0E086",
        "#FF7670",
        "#E3B220",
        "#FF7670",
        "#FF7670",
        "#E9324B",
        "#ffffff"
    ]
var desArr = [
    res.describle1,
    res.describle2,
    res.describle3,
    res.describle4,
    res.describle5,
    res.describle6,
    res.describle7
];
var desNameArr = [
    "OTC市场总监",
    "媒介策划总监",
    "项目经理",
    "媒介策划经理",
    "栏目策划经理",
    "资深影视文案",
    "媒介专员"
]
var gameScene = cc.Scene.extend({
    listener: null,
    currentIndex:aaa,
    sceneList: [],
    page1:true,
    ctor:function(){
        this._super();
        glbalScene = this;
        this.init();

        this.initTouch();
        this.initBottom();

        document.body.style.backgroundColor = "white";
    },
    init:function(){
        var size = cc.director.getWinSize();

        this.animLayer = new cc.Layer();
        this.addChild(this.animLayer);
        this.sceneList.push(new Layer1());
        this.sceneList.push(new Layer2());
        this.sceneList.push(new Layer3());
        this.sceneList.push(new Layer4());
        this.sceneList.push(new Layer5());
        this.sceneList.push(new Layer6());
        this.sceneList.push(new Layer7());
        this.sceneList.push(new Layer8());
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
    initTouch:function(){
        var self = this;
        self.listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            startPosY: 0,
            onTouchBegan: function (touch, event) {
                this.startPosX = touch.getLocation().x;
                return true;
            },
            onTouchMoved: function (touch, event) {

            },
            onTouchEnded: function (touch, event) {
                if (canChangePage && !showZW) {
                    var delta = touch.getLocation().x - this.startPosX;
                    if(self.page1 && self.currentIndex < self.sceneList.length - 1){
                        self.page1 = false;
                        self.changePage(++self.currentIndex, true);
                        console.log("next1")
                    }else if (Math.abs(delta) > 45 && delta < 0 && self.currentIndex < self.sceneList.length - 1) {
                        self.changePage(++self.currentIndex, true);
                        console.log("next")
                    } else if(Math.abs(delta) > 45 && delta > 0 && self.currentIndex > 0){
                        self.changePage(--self.currentIndex, false);
                        console.log("pre")
                    }
                }
            },
            onTouchCancelled: function (touch, event) {

            }
        });
        cc.eventManager.addListener(self.listener, self);
    },
    changePage:function(index, next){
        // canChangePage = false;
        var scene = next ? this.sceneList[index - 1] : this.sceneList[index + 1];
        if(index==0){
            this.page1 = true;
        }

        if (index == end || index == 0) {//最后一页隐藏按钮
            this.bottom.visible = false;
        } else {
            this.bottom.visible = true;
        }

        if(scene){
            scene.visible = false;
            this.sceneList[index].visible = true;
            this.sceneList[index].removeAction();
            this.sceneList[index].initAction();

            document.body.style.backgroundColor = bgColor[index];
        }
    },
    initBottom:function(){
        var bottom = this.bottom = new cc.Sprite(res.move);
        bottom.x = size.width/2;
        bottom.y = 100;
        this.addChild(bottom,1000);
        bottom.visible = false;

        var mb = new cc.moveTo(1,cc.p(size.width/2 - 50,100));
        var mbCall = new cc.callFunc(function(){
            bottom.x = size.width/2;
            bottom.y = 100;
        },this);
        var seq = new cc.sequence(mb,mbCall).repeatForever();
        
        bottom.runAction(seq);
    }
})

var Layer1 = cc.Layer.extend({
    tick:0,
    ctor: function () {
        this._super();
        this.initUI();
    },
    initUI: function () {
        this.layer1 = new cc.Sprite(res.layer1);
        this.layer1.x = size.width/2;
        this.layer1.y = size.height/2;
        this.addChild(this.layer1);

        var beginBtn = new cc.Sprite(res.beginBtn);
        beginBtn.x = size.width/2;
        beginBtn.y = size.height/2;
        this.addChild(beginBtn);

        var st = new cc.scaleTo(1,1.3);
        var stCall = new cc.callFunc(function(){
            beginBtn.scale = 1;
        },this);
        var req = new cc.sequence(st, stCall).repeatForever();
        beginBtn.runAction(req);

        this.addAni();

        // this.scheduleUpdate();
    },
    initAction:function(){},
    removeAction:function(){},
    update:function(){
        // this.tick++;
    },
    onExit:function(){
        // this.unscheduleUpdate();
    },
    addAni:function(){
        var aniSprObjTag = 3;
        var texture0 = cc.textureCache.addImage(res.huo1);//添加纹理到缓存
        var texture1 = cc.textureCache.addImage(res.huo2);//添加纹理到缓存
        var texture2 = cc.textureCache.addImage(res.huo3);//添加纹理到缓存
        var aniSpr = new cc.SpriteFrame(texture0,cc.rect(0,0,640,452));//注意 new  别缺少了!!!!!!!!!
        var aniSprObj = new cc.Sprite(aniSpr);
        this.addChild(aniSprObj,1,aniSprObjTag);
        aniSprObj.anchorY = 0;
        aniSprObj.x = size.width/2;
        aniSprObj.y = 0;
        var sprFrames = [];
        sprFrames[0] = new cc.SpriteFrame(texture0,cc.rect(0,0,640,452));
        sprFrames[1] = new cc.SpriteFrame(texture1,cc.rect(0,0,640,452));
        sprFrames[2] = new cc.SpriteFrame(texture2,cc.rect(0,0,640,452));
        var animation = new cc.Animation(sprFrames,0.6);
        var animate = new cc.animate(animation);
        var repeat = animate.repeatForever();
        aniSprObj.runAction(animate);
    }
});
var Layer2 = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.initUI();
    },
    initUI: function () {
        this.layer1 = new cc.Sprite(res.layer2);
        this.layer1.x = size.width/2;
        this.layer1.y = size.height/2;
        this.addChild(this.layer1);

        this.addAni();
    },
    initAction:function(){
        this.zi2 = new cc.Sprite(res.zi2);
        this.zi2.x = size.width/2 * 0;
        this.zi2.y = size.height/2 * 0;
        this.addChild(this.zi2, 10);

        var mt = new cc.moveTo(1.5,cc.p(size.width/2 - 100, size.height - 180));
        var mtCall = new cc.callFunc(function(){
            this.zi2.runAction(repeat);
        },this);
        var seq = new cc.sequence(mt, mtCall);

        var rb = new cc.rotateBy(3,5);
        var Rrb = rb.reverse();
        var repeat = new cc.sequence(rb,Rrb).repeatForever();

        this.zi2.runAction(seq)
    },
    removeAction:function(){
        this.removeChild(this.zi2);
    },
    addAni:function(){
        var aniSprObjTag = 3;
        var texture0 = cc.textureCache.addImage(res.yan1);//添加纹理到缓存
        var texture1 = cc.textureCache.addImage(res.yan2);//添加纹理到缓存
        var aniSpr = new cc.SpriteFrame(texture0,cc.rect(0,0,640,764));//注意 new  别缺少了!!!!!!!!!
        var aniSprObj = new cc.Sprite(aniSpr);
        this.addChild(aniSprObj,1,aniSprObjTag);
        aniSprObj.anchorY = 0;
        aniSprObj.x = size.width/2;
        aniSprObj.y = 0;
        var sprFrames = [];
        sprFrames[0] = new cc.SpriteFrame(texture0,cc.rect(0,0,640,764));
        sprFrames[1] = new cc.SpriteFrame(texture1,cc.rect(0,0,640,764));
        var animation = new cc.Animation(sprFrames,0.6);
        var animate = new cc.animate(animation);
        var repeat = animate.repeatForever();
        aniSprObj.runAction(animate);
    }
});
var Layer3 = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.initUI();
    },
    initUI: function () {
        this.layer1 = new cc.Sprite(res.layer3);
        this.layer1.x = size.width/2;
        this.layer1.y = size.height/2;
        this.addChild(this.layer1);

        this.addAni();
    },
    initAction:function(){
        this.zi3 = new cc.Sprite(res.zi3);
        this.zi3.x = size.width/2;
        this.zi3.y = size.height/2 * 0;
        this.addChild(this.zi3, 10);

        var mt = new cc.moveTo(0.8,cc.p(size.width/2, size.height - 160));
        var mtCall = new cc.callFunc(function(){
            this.zi3.runAction(repeat);
        },this);
        var seq = new cc.sequence(mt, mtCall);

        var rb = new cc.rotateBy(3,5);
        var Rrb = rb.reverse();
        var repeat = new cc.sequence(rb,Rrb).repeatForever();

        this.zi3.runAction(seq);
    },
    removeAction:function(){
        this.removeChild(this.zi3);
    },
    addAni:function(){
        var aniSprObjTag = 3;
        var texture0 = cc.textureCache.addImage(res.p1);//添加纹理到缓存
        var texture1 = cc.textureCache.addImage(res.p2);//添加纹理到缓存
        var aniSpr = new cc.SpriteFrame(texture0,cc.rect(0,0,392,286));//注意 new  别缺少了!!!!!!!!!
        var aniSprObj = new cc.Sprite(aniSpr);
        this.addChild(aniSprObj,1,aniSprObjTag);
        aniSprObj.x = size.width/2 + 85;
        aniSprObj.y = size.height/2 + 130;
        var sprFrames = [];
        sprFrames[0] = new cc.SpriteFrame(texture0,cc.rect(0,0,392,286));
        sprFrames[1] = new cc.SpriteFrame(texture1,cc.rect(0,0,392,286));
        var animation = new cc.Animation(sprFrames,0.6);
        var animate = new cc.animate(animation);
        var repeat = animate.repeatForever();
        aniSprObj.runAction(animate);
    }
});
var Layer4 = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.initUI();
    },
    initUI: function () {
        this.layer1 = new cc.Sprite(res.layer4);
        this.layer1.x = size.width/2;
        this.layer1.y = size.height/2;
        this.addChild(this.layer1);
    },
    initAction:function(){
        this.zi4 = new cc.Sprite(res.zi4);
        this.zi4.x = size.width/2;
        this.zi4.y = -size.height/2;
        this.addChild(this.zi4, 10);

        var mt = new cc.moveTo(1.5,cc.p(size.width/2, size.height - 160));
        var mtCall = new cc.callFunc(function(){
            this.zi4.runAction(repeat);
        },this);
        var seq = new cc.sequence(mt, mtCall);

        var rb = new cc.rotateBy(3,5);
        var Rrb = rb.reverse();
        var repeat = new cc.sequence(rb,Rrb).repeatForever();

        this.zi4.runAction(seq)

        var tShirt = this.tShirt = new cc.Sprite(res.tShirt);
        tShirt.x = size.width/2;
        tShirt.y = size.height * 3/2;
        this.addChild(tShirt);

        var aMt = new cc.moveTo(2,cc.p(size.width/2,size.height/2 - 100));
        var actionByCall = new cc.callFunc(function(){
            this.addAni();
        },this);
        var seq = new cc.sequence(aMt,actionByCall);

        tShirt.runAction(seq);
    },
    removeAction:function(){
        this.removeChild(this.zi4);
        this.removeChild(this.tShirt);
        this.removeChild(this.aniSpr);
    },
    addAni:function(){
        var aniSprObjTag = 3;
        var texture0 = cc.textureCache.addImage(res.s1);//添加纹理到缓存
        var texture1 = cc.textureCache.addImage(res.s2);//添加纹理到缓存
        var texture2 = cc.textureCache.addImage(res.s3);//添加纹理到缓存
        var texture3 = cc.textureCache.addImage(res.s4);//添加纹理到缓存
        var aniSpr = new cc.SpriteFrame(texture0,cc.rect(0,0,470,479));//注意 new  别缺少了!!!!!!!!!
        var aniSprObj = this.aniSpr = new cc.Sprite(aniSpr);
        this.addChild(aniSprObj,1,aniSprObjTag);
        aniSprObj.anchorY = .5;
        aniSprObj.x = size.width/2 + 20;
        aniSprObj.y = size.height/2 - 115;
        var sprFrames = [];
        sprFrames[0] = new cc.SpriteFrame(texture0,cc.rect(0,0,470,479));
        sprFrames[1] = new cc.SpriteFrame(texture1,cc.rect(0,0,470,479));
        sprFrames[2] = new cc.SpriteFrame(texture2,cc.rect(0,0,470,479));
        sprFrames[3] = new cc.SpriteFrame(texture3,cc.rect(0,0,470,479));
        var animation = new cc.Animation(sprFrames,0.6);
        var animate = new cc.animate(animation);
        var repeat = animate.repeatForever();
        aniSprObj.runAction(animate);
    }
});
var Layer5 = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.initUI();
    },
    initUI: function () {
        this.layer1 = new cc.Sprite(res.layer5);
        this.layer1.x = size.width/2;
        this.layer1.y = size.height/2;
        this.addChild(this.layer1);
    },
    initAction:function(){
        this.zi5 = new cc.Sprite(res.zi5);
        this.zi5.x = size.width/2;
        this.zi5.y = size.height - 200;
        this.addChild(this.zi5, 10);
        this.zi5.opacity = 0;

        var fi = new cc.FadeIn(1.5);
        var fiCall = new cc.callFunc(function(){
            this.zi5.runAction(rbRrb)
        },this);
        var rb = new cc.rotateBy(3,5);
        var Rrb = rb.reverse();
        var rbRrb = new cc.sequence(rb,Rrb).repeatForever();
        var seq = new cc.sequence(fi,fiCall)
        this.zi5.runAction(seq);

        var l = this.l = new cc.Layer();
        l.anchorX = 0;
        l.anchorY = 0;
        l.x = -300;
        l.y = 0;
        this.addChild(l);
        var lMt = new cc.moveTo(5,cc.p(0,0));
        l.runAction(lMt);

        var bike = new cc.Sprite(res.bike);
        bike.x = size.width/2;
        bike.y = 250;
        l.addChild(bike,10);

        var lRound = new cc.Sprite(res.l);
        lRound.x = size.width/2 - 132;
        lRound.y = 210;
        l.addChild(lRound);

        var rRound = new cc.Sprite(res.r);
        rRound.x = size.width/2 + 200;
        rRound.y = 200;
        l.addChild(rRound);

        var rb = new cc.rotateBy(6,360);
        var Rrb = rb.repeatForever();

        lRound.runAction(Rrb.clone());
        rRound.runAction(Rrb.clone());
    },
    removeAction:function(){
        this.removeChild(this.zi5);
        this.removeChild(this.l);
    }
});
var Layer6 = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.initUI();
    },
    initUI: function () {
        this.layer6 = new cc.Sprite(res.layer6);
        this.layer6.x = size.width/2;
        this.layer6.y = size.height/2;
        this.addChild(this.layer6);
    },
    initAction:function(){
        this.zi6 = new cc.Sprite(res.zi6);
        this.zi6.x = size.width/2;
        this.zi6.y = -size.height/2;
        this.addChild(this.zi6, 10);

        var mt = new cc.moveTo(0.8,cc.p(size.width/2, size.height - 160));
        var mtCall = new cc.callFunc(function(){
            var rb = new cc.rotateBy(3,5);
            var Rrb = rb.reverse();
            var repeat = new cc.sequence(rb,Rrb).repeatForever();
            this.zi6.runAction(repeat);
        },this);
        var seq = new cc.sequence(mt, mtCall);

        this.zi6.runAction(seq)

        var shine = this.shine = new cc.Sprite(res.shine);
        shine.anchorX = 1;
        shine.x = size.width + 35;
        shine.y = size.height/2 + 15;
        this.addChild(shine,10);

        var fo = new cc.FadeOut(0.5);
        var fi = new cc.FadeIn(0.5);
        var seq = new cc.sequence(fo,fi).repeatForever();
        shine.runAction(seq);

        var lRound = this.lRound = new cc.Sprite(res.ll);
        lRound.x = size.width/2 - 130;
        lRound.y = size.height/2 + 130;
        this.addChild(lRound);

        var rRound = this.rRound = new cc.Sprite(res.rr);
        rRound.x = size.width/2 + 35;
        rRound.y = size.height/2 + 125;
        this.addChild(rRound);

        var rb = new cc.rotateBy(6,360);
        var Rrb = rb.repeatForever();

        lRound.runAction(Rrb.clone());
        rRound.runAction(Rrb.clone());
    },
    removeAction:function(){
        this.removeChild(this.zi6);
        this.removeChild(this.shine);
        this.removeChild(this.lRound);
        this.removeChild(this.rRound);
    }
});
var Layer7 = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.initUI();
    },
    initUI: function () {
        this.layer7 = new cc.Sprite(res.layer7);
        this.layer7.x = size.width/2;
        this.layer7.y = size.height/2;
        this.addChild(this.layer7);
    },
    initAction:function(){
        var erhuan = this.erhuan = new cc.Sprite(res.erhuan);
        erhuan.anchorY = 1;
        erhuan.x = size.width/2 - 18;
        erhuan.y = size.height - 200;
        this.addChild(erhuan);

        var erhuan1 = this.erhuan1 = new cc.Sprite(res.erhuan);
        erhuan1.anchorY = 1;
        erhuan1.x = size.width/2 - 70;
        erhuan1.y = size.height - 200;
        this.addChild(erhuan1);

        var rb = new cc.rotateBy(3,10);
        var Rrb = rb.reverse();
        var repeat1 = new cc.sequence(rb,Rrb).repeatForever();
        erhuan.runAction(repeat1);
        erhuan1.runAction(repeat1.clone());

        this.zi7 = new cc.Sprite(res.zi7);
        this.zi7.x = size.width/2;
        this.zi7.y = -size.height/2;
        this.addChild(this.zi7, 10);

        var mt = new cc.moveTo(0.8,cc.p(size.width/2 + 150, size.height - 160));
        var mtCall = new cc.callFunc(function(){
            this.zi7.runAction(repeat);
        },this);
        var seq = new cc.sequence(mt, mtCall);

        var rb = new cc.rotateBy(3,15);
        var Rrb = rb.reverse();
        var repeat = new cc.sequence(rb,Rrb).repeatForever();

        this.zi7.runAction(seq)
    },
    removeAction:function(){
        this.removeChild(this.erhuan);
        this.removeChild(this.erhuan1);
        this.removeChild(this.zi7);
    }
});
var Layer8 = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.initUI();
    },
    initUI: function () {
        this.layer8 = new cc.Sprite(res.layer8);
        this.layer8.x = size.width/2;
        this.layer8.y = size.height/2;
        this.addChild(this.layer8);

        var upX = size.width - 80;
        var upY = size.height/2 + 100;
        var up = new cc.Sprite(res.up);
        up.x = upX;
        up.y = upY;
        this.addChild(up);

        var mt1 = new cc.moveTo(0.8,cc.p(upX,upY + 30));
        var mt1Call = new cc.callFunc(function(){
            up.x = upX;
            up.y = upY;
        },this);
        var repeat1 = new cc.sequence(mt1,mt1Call).repeatForever();
        up.runAction(repeat1);

        var downX = size.width/2 - 50;
        var downY = size.height/2 - 30;
        var down = new cc.Sprite(res.down);
        down.x = downX;
        down.y = downY;
        this.addChild(down);

        var mt2 = new cc.moveTo(0.8,cc.p(downX,downY - 30));
        var mt2Call = new cc.callFunc(function(){
            down.x = downX;
            down.y = downY;
        },this);
        var repeat2 = new cc.sequence(mt2,mt2Call).repeatForever();
        down.runAction(repeat2);

        var menuItem = new cc.MenuItemSprite(new cc.Sprite(res.taijie),new cc.Sprite(res.taijie),function(){
                if(showZW)return;
                var atick = setInterval(function(){
                    menu.y -= 5;
                    if(menu.y <= size.height/2 - 280){
                        window.clearInterval(atick);
                       _Layer9 = new Layer9();
                        _Layer9.anchorX = 0;
                        _Layer9.anchorY = 0;
                        _Layer9.x = 0;
                        _Layer9.y = 0;
                        glbalScene.addChild(_Layer9,100);
                        menu.y = size.height/2 - 250;

                        document.body.style.backgroundColor = "#E9324B";
                    }
                },100);

                showZW = true;
        },this);
        var menu = new cc.Menu(menuItem);
        menu.x = size.width/2 - 60;
        menu.y = size.height/2 - 250;
        this.addChild(menu,1);

        var menuItem1 = new cc.MenuItemSprite(new cc.Sprite(res.cs),new cc.Sprite(res.cs),function(){
                //alert("长页面")
            var detailpage=document.getElementById("detail");
            detailpage.style.display="block";
        },this);
        var menu1 = new cc.Menu(menuItem1);
        menu1.x = size.width - 70;
        menu1.y = size.height/2 + 280;
        this.addChild(menu1,1);

        var floor = new cc.Sprite(res.floor);
        floor.anchorY = 0;
        floor.x = size.width/2;
        floor.y = 0;
        this.addChild(floor,1);
    },
    initAction:function(){},
    removeAction:function(){}
});
var Layer9 = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.initUI();
    },
    initUI: function () {
        this.layer9 = new cc.Sprite(res.layer9);
        this.layer9.x = size.width/2;
        this.layer9.y = size.height/2;
        this.addChild(this.layer9);

        var info = [
            {"res":res.zhiwei1,"res1":res.zhiwei11,"x":size.width/2 - 100,"y":size.height/2 + 270},
            {"res":res.zhiwei2,"res1":res.zhiwei22,"x":size.width/2 + 100,"y":size.height/2 + 270},
            {"res":res.zhiwei3,"res1":res.zhiwei33,"x":size.width/2 - 190,"y":size.height/2 + 20},
            {"res":res.zhiwei4,"res1":res.zhiwei44,"x":size.width/2,       "y":size.height/2 + 20},
            {"res":res.zhiwei5,"res1":res.zhiwei55,"x":size.width/2 + 190,"y":size.height/2 + 20},
            {"res":res.zhiwei6,"res1":res.zhiwei66,"x":size.width/2 - 100,"y":size.height/2 - 240},
            {"res":res.zhiwei7,"res1":res.zhiwei77,"x":size.width/2 + 100,"y":size.height/2 - 240},
        ];

        var info1 = [
            {"x":93,"y":140},
            {"x":85,"y":140},
            {"x":80,"y":180},
            {"x":80,"y":150},
            {"x":80,"y":160},
            {"x":80,"y":180},
            {"x":85,"y":160}
        ]

        for(var i=0;i<info.length;i++){
            var spr = new TouchSpr(info[i].res, i, info[i].res1, info1[i].x, info1[i].y);
            spr.x = info[i].x;
            spr.y = info[i].y;
            this.addChild(spr,1)
        }

        var backItem = new cc.MenuItemSprite(new cc.Sprite(res.back),new cc.Sprite(res.back),function(){
                glbalScene.removeChild(_Layer9);

                showZW = false;
                document.body.style.backgroundColor = "#FF7670";
        },this);
        var backMenu = new cc.Menu(backItem);
        backMenu.x = size.width/2;
        backMenu.y = 50;
        this.addChild(backMenu,1);
    }
});
var Layer10 = cc.Layer.extend({
    ctor: function (index) {
        this._super(index);
        this.initUI(index);
    },
    initUI: function (index) {
        this.layer10 = new cc.Sprite(res.layer10);
        this.layer10.x = size.width/2;
        this.layer10.y = size.height/2;
        this.addChild(this.layer10);

        this.des = new cc.Sprite(desArr[index]);
        this.des.x = size.width/2;
        this.des.y = size.height/2 + 80;
        this.addChild(this.des);


        var menuItem = new cc.MenuItemSprite(new cc.Sprite(res.go),new cc.Sprite(res.go),function(){
                // glbalScene.removeChild(_Layer10);
                var dialog = document.getElementById('getInfo');
                dialog.style.display = "block";


        },this);
        var menu = new cc.Menu(menuItem);
        menu.x = size.width/2;
        menu.y = 150;
        this.addChild(menu,1);

        var menuItem1 = new cc.MenuItemSprite(new cc.Sprite(res.goBack),new cc.Sprite(res.goBack),function(){
                glbalScene.removeChild(_Layer10);

                document.body.style.backgroundColor = "#E9324B";
        },this);
        var menu1 = new cc.Menu(menuItem1);
        menu1.x = size.width/2;
        menu1.y = 50;
        this.addChild(menu1,1);
    }
});
var Layer11 = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.initUI();
    },
    initUI: function () {
        this.layer11 = new cc.Sprite(res.layer11);
        this.layer11.x = size.width/2;
        this.layer11.y = size.height/2;
        this.addChild(this.layer11);
    }
});
var Layer12 = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.initUI();
    },
    initUI: function () {
        this.layer12 = new cc.Sprite(res.layer12);
        this.layer12.x = size.width/2;
        this.layer12.y = size.height/2;
        this.addChild(this.layer12);
    }
});



var TouchSpr = cc.Sprite.extend({
    ctor:function(res, flag, res1, x1, y1){
        this._super(res, flag, res1, x1, y1);
        var self = this;

        this.initWithFile(res);
        this.scale = 0.8;
        this.flag = flag;

        var spr = new cc.Sprite(res1);
        spr.x = x1;
        spr.y = y1;
        this.addChild(spr);
        spr.scale = 0.1;

        var st = new cc.scaleTo(1,1);
        spr.runAction(st);

        this.loadListener();
    },
    getType:function(){
        return this.flag;
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
        var self = this.target;
        console.log(this.getType())

        document.body.style.backgroundColor = "#ffffff";
        

        _Layer10 = new Layer10(this.getType());
        _Layer10.anchorX = 0;
        _Layer10.anchorY = 0;
        _Layer10.x = 0;
        _Layer10.y = 0;
        glbalScene.addChild(_Layer10,10000);
        // glbalScene.removeChild(_Layer9);
    }
});

//点击详情页返回
function detailBack(){
    var detailp=document.getElementById("detail");
    detailp.style.display="none";
}