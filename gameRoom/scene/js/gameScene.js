var size = {
    "width" : 600,
    "height": 1000
}

var aaa = 0;
var end = 7;

var canChangePage = true;//如果有动画，在播放完之后才允许拨动下一页
var curScene = null;
var glbalScene = null;
var _Layer9 = null;
var _Layer10 = null;
var gameScene = cc.Scene.extend({
    listener: null,
    currentIndex:aaa,
    sceneList: [],
    ctor:function(){
        this._super();
        glbalScene = this;
        this.init();

        this.initTouch();
        this.initBottom();
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
                if (canChangePage) {
                    var delta = touch.getLocation().x - this.startPosX;
                    if (delta < 45 && self.currentIndex < self.sceneList.length - 1) {
                        self.changePage(++self.currentIndex, true);
                        console.log("next")
                    } else if(delta > -45 && self.currentIndex > 0){
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

        if (index == end) {//最后一页隐藏按钮
            this.bottom.visible = false;
        } else {
            this.bottom.visible = true;
        }

        if(scene){
            scene.visible = false;
            this.sceneList[index].visible = true;
        }
    },
    initBottom:function(){
        var bottom = this.bottom = new cc.Sprite(res.move);
        bottom.x = size.width/2;
        bottom.y = 100;
        this.addChild(bottom,1000);

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

        // this.scheduleUpdate();
    },
    update:function(){
        // this.tick++;
    },
    onExit:function(){
        // this.unscheduleUpdate();
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

        var tShirt = new cc.Sprite(res.tShirt);
        tShirt.x = size.width/2;
        tShirt.y = size.height/2 - 100;
        this.addChild(tShirt);
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

        var bike = new cc.Sprite(res.bike);
        bike.x = size.width/2;
        bike.y = 250;
        this.addChild(bike,10);

        var lRound = new cc.Sprite(res.l);
        lRound.x = size.width/2 - 132;
        lRound.y = 210;
        this.addChild(lRound);

        var rRound = new cc.Sprite(res.r);
        rRound.x = size.width/2 + 200;
        rRound.y = 200;
        this.addChild(rRound);

        var rb = new cc.rotateBy(6,360);
        var Rrb = rb.repeatForever();

        lRound.runAction(Rrb.clone());
        rRound.runAction(Rrb.clone());
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

        var shine = new cc.Sprite(res.shine);
        shine.anchorX = 1;
        shine.x = size.width + 35;
        shine.y = size.height/2 + 15;
        this.addChild(shine,10);

        var fo = new cc.FadeOut(0.5);
        var fi = new cc.FadeIn(0.5);
        var seq = new cc.sequence(fo,fi).repeatForever();
        shine.runAction(seq);

        var lRound = new cc.Sprite(res.ll);
        lRound.x = size.width/2 - 130;
        lRound.y = size.height/2 + 130;
        this.addChild(lRound);

        var rRound = new cc.Sprite(res.rr);
        rRound.x = size.width/2 + 35;
        rRound.y = size.height/2 + 125;
        this.addChild(rRound);

        var rb = new cc.rotateBy(6,360);
        var Rrb = rb.repeatForever();

        lRound.runAction(Rrb.clone());
        rRound.runAction(Rrb.clone());
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
                menu.y = size.height/2 - 280;

                _Layer9 = new Layer9();
                _Layer9.anchorX = 0;
                _Layer9.anchorY = 0;
                _Layer9.x = 0;
                _Layer9.y = 0;
                glbalScene.addChild(_Layer9,10000);
        },this);
        var menu = new cc.Menu(menuItem);
        menu.x = size.width/2 - 60;
        menu.y = size.height/2 - 250;
        this.addChild(menu,1);

        var menuItem1 = new cc.MenuItemSprite(new cc.Sprite(res.cs),new cc.Sprite(res.cs),function(){
                _Layer10 = new Layer10();
                _Layer10.anchorX = 0;
                _Layer10.anchorY = 0;
                _Layer10.x = 0;
                _Layer10.y = 0;
                glbalScene.addChild(_Layer10,10000);
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
    }
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
            {"res":res.zhiwei1,"x":size.width/2 - 100,"y":size.height/2 + 270},
            {"res":res.zhiwei2,"x":size.width/2 + 100,"y":size.height/2 + 270},
            {"res":res.zhiwei3,"x":size.width/2 - 190,"y":size.height/2 + 20},
            {"res":res.zhiwei4,"x":size.width/2,       "y":size.height/2 + 20},
            {"res":res.zhiwei5,"x":size.width/2 + 190,"y":size.height/2 + 20},
            {"res":res.zhiwei6,"x":size.width/2 - 100,"y":size.height/2 - 240},
            {"res":res.zhiwei7,"x":size.width/2 + 100,"y":size.height/2 - 240},
        ];

        for(var i=0;i<info.length;i++){
            var spr = new TouchSpr(info[i].res, i+1);
            spr.x = info[i].x;
            spr.y = info[i].y;
            this.addChild(spr,1)
        }

        var backItem = new cc.MenuItemSprite(new cc.Sprite(res.back),new cc.Sprite(res.back),function(){
                glbalScene.removeChild(_Layer9);
        },this);
        var backMenu = new cc.Menu(backItem);
        backMenu.x = size.width/2;
        backMenu.y = 50;
        this.addChild(backMenu,1);
    }
});
var Layer10 = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.initUI();
    },
    initUI: function () {
        this.layer10 = new cc.Sprite(res.layer10);
        this.layer10.x = size.width/2;
        this.layer10.y = size.height/2;
        this.addChild(this.layer10);

        this.des = new cc.Sprite(res.describle1);
        this.des.x = size.width/2;
        this.des.y = size.height/2;
        this.addChild(this.des);


        var menuItem = new cc.MenuItemSprite(new cc.Sprite(res.go),new cc.Sprite(res.go),function(){
                glbalScene.removeChild(_Layer10);
        },this);
        var menu = new cc.Menu(menuItem);
        menu.x = size.width/2;
        menu.y = 150;
        this.addChild(menu,1);

        var menuItem1 = new cc.MenuItemSprite(new cc.Sprite(res.goBack),new cc.Sprite(res.goBack),function(){
                glbalScene.removeChild(_Layer10);
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
    ctor:function(res, flag){
        this._super(res, flag);
        var self = this;

        this.initWithFile(res);
        this.scale = 0.8;
        this.flag = flag;

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
        

        // var describle = new Layer10();
        // describle.anchorX = 0;
        // describle.anchorY = 0;
        // describle.x = 0;
        // describle.y = 0;
        // glbalScene.addChild(describle);
        // glbalScene.removeChild(_Layer9);
    }
});