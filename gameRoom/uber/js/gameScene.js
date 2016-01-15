var size = {
    "width" : 640,
    "height" : 1136
}

var gameScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        var bg1  = new cc.Sprite(res.bg1);
        bg1.x = size.width/2;
        bg1.y = size.height/2;
        this.addChild(bg1,0);

        this.round = new cc.Sprite(res.round);
        this.round.x = size.width - 132;
        this.round.y = size.height - 268;
        this.addChild(this.round);

        this.aa = new cc.LabelTTF("2015.09.28", "Arial", 36);
        this.aa.x = size.width/2;
        this.aa.y = size.height - 200;
        this.aa.fillStyle = new cc.color(31,186,214);
        this.addChild(this.aa);

        this.bb = new cc.LabelTTF("你开启了Uber之旅", "Arial", 32);
        this.bb.x = size.width/2 - 38;
        this.bb.y = size.height - 250;
        this.addChild(this.bb);

        this.roundSpr = new cc.Sprite(res.img1);
        this.roundSpr.x = size.width/2 - 155;
        this.roundSpr.y = size.height/2 + 35;
        this.addChild(this.roundSpr);

        this.tip = new cc.Sprite(res.tip1);
        this.tip.x = size.width/2 + 30;
        this.tip.y = size.height/2 + 30;
        this.addChild(this.tip);

        this.round2 = new cc.Sprite(res.round);
        this.round2.x = size.width - 202;
        this.round2.y = 221;
        this.addChild(this.round2);

        this.cc = new cc.LabelTTF("北京", "Arial", 36);
        this.cc.x = size.width/2 - 30;
        this.cc.y = 250;
        this.cc.fillStyle = new cc.color(31,186,214);
        this.addChild(this.cc);

        this.dd = new cc.LabelTTF("是你Uber之旅的第一站", "Arial", 26);
        this.dd.x = size.width/2 - 120;
        this.dd.y = 210;
        this.addChild(this.dd);

        this.car = new cc.Sprite(res.car);
        this.car.x = size.width/2;
        this.car.y = size.height/2 + 155;
        this.addChild(this.car);

        this.scheduleUpdate();
    },
    update:function(){

    },
    onExit:function(){
        this.removeAllChildrenWithCleanup(true);
    }
});

var gameScene1 = cc.Scene.extend({
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        var bg2  = new cc.Sprite(res.bg2);
        bg2.x = size.width/2;
        bg2.y = size.height/2;
        this.addChild(bg2,0);

        this.car = new cc.Sprite(res.car);
        this.car.x = size.width/2 - 30;
        this.car.y = 200;
        this.addChild(this.car);
        this.car.attr({
            rotation:355
        });

        this.round1 = new cc.Sprite(res.round);
        this.round1.x = 150;
        this.round1.y = size.height - 175;
        this.addChild(this.round1);

        this.bb = new cc.LabelTTF("2015年\n你完成了\n           次行程", "Arial", 32);
        this.bb.x = size.width/2 - 38;
        this.bb.y = size.height - 250;
        this.addChild(this.bb);

        this.aa = new cc.LabelTTF("888", "Arial", 44);
        this.aa.x = size.width/2 - 100;
        this.aa.y = size.height - 300;
        this.aa.fillStyle = new cc.color(31,186,214);
        this.addChild(this.aa);

        this.round2 = new cc.Sprite(res.round);
        this.round2.x = size.width/2 - 50;
        this.round2.y = size.height/2 + 160;
        this.addChild(this.round2);

        this.cc = new cc.LabelTTF("在Uber上度过了\n      小时\n累计行程        公里", "Arial", 32);
        this.cc.x = size.width/2 + 170;
        this.cc.y = size.height/2 + 180;
        this.addChild(this.cc);

        this.aa = new cc.LabelTTF("888", "Arial", 44);
        this.aa.x = size.width/2 + 70;
        this.aa.y = size.height/2 + 180;
        this.aa.fillStyle = new cc.color(31,186,214);
        this.addChild(this.aa);

        this.aa = new cc.LabelTTF("888", "Arial", 44);
        this.aa.x = size.width/2 + 200;
        this.aa.y = size.height/2 + 150;
        this.aa.fillStyle = new cc.color(31,186,214);
        this.addChild(this.aa);

        this.round3 = new cc.Sprite(res.round);
        this.round3.x = size.width/2 + 70;
        this.round3.y = size.height/2 - 160;
        this.addChild(this.round3);

        this.cc = new cc.LabelTTF("共花费\n      元\n可以看3场郭德纲相声", "Arial", 26);
        this.cc.x = size.width/2 + 150;
        this.cc.y = size.height/2 - 230;
        this.addChild(this.cc);

        this.aa = new cc.LabelTTF("888", "Arial", 44);
        this.aa.x = size.width/2 + 50;
        this.aa.y = size.height/2 - 230;
        this.aa.fillStyle = new cc.color(31,186,214);
        this.addChild(this.aa);

        this.round4 = new cc.Sprite(res.round);
        this.round4.x = size.width/2 - 150;
        this.round4.y = 120;
        this.addChild(this.round4);

        this.cc = new cc.LabelTTF("Uber伴你走过了\n    个\n下一个会是哪里呢？", "Arial", 26);
        this.cc.x = size.width/2 + 50;
        this.cc.y = 100;
        this.addChild(this.cc);

        this.aa = new cc.LabelTTF("888", "Arial", 44);
        this.aa.x = size.width/2 - 90;
        this.aa.y = 100;
        this.aa.fillStyle = new cc.color(31,186,214);
        this.addChild(this.aa);
    }
});

var gameScene2 = cc.Scene.extend({
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        var bg3  = new cc.Sprite(res.bg3);
        bg3.x = size.width/2;
        bg3.y = size.height/2;
        this.addChild(bg3,0);

        this.card = new cc.Sprite(res.Glod_card);
        this.card.x = size.width/2;
        this.card.y = size.height/2 + 350;
        this.addChild(this.card);

        this.round = new cc.Sprite(res.round);
        this.round.x = size.width/2;
        this.round.y = size.height/2 + 280;
        this.round.scale = 0.6;
        this.addChild(this.round);

        var st = new cc.scaleTo(1,0.9);
        var stCall = new cc.callFunc(function(){
            this.round.scale = 0;
        },this);
        var seq = new cc.sequence(st,stCall);
        var seqAction = new cc.RepeatForever(seq);
        this.round.runAction(seqAction);

        this.bb = new cc.LabelTTF("根据你的旅途回顾\n你已获得Uber      一张\n现在起至        ,再完成   个搭乘\n即可迅速升级为     卡会员", "Arial", 32);
        this.bb.x = size.width/2;
        this.bb.y = size.height/2 + 80;
        this.addChild(this.bb);

        this.txt = new cc.Sprite(res.txt);
        this.txt.x = size.width/2;
        this.txt.y = 250;
        this.addChild(this.txt);

        this.car1 = new cc.Sprite(res.car1);
        this.car1.x = size.width/2 + 180;
        this.car1.y = 440;
        this.car1.rotation = -90;
        this.addChild(this.car1);
    }
});

var gameScene3 = cc.Scene.extend({
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        var bg4  = new cc.Sprite(res.bg4);
        bg4.x = size.width/2;
        bg4.y = size.height/2;
        this.addChild(bg4,0);

        var clipper = new cc.ClippingNode();

        var drawNode = new cc.DrawNode();       
        drawNode.clear()                      //清除节点缓存
        drawNode.ctor()  
        drawNode.drawCircle(cc.p(0,0), 80, 0, 8000, false, 6, cc.color(125, 125, 100, 255));

        clipper.setStencil(drawNode);

        var sprite = new cc.Sprite(res.test);
        clipper.addChild(sprite);
        clipper.x = size.width/2 - 3;
        clipper.y = size.height/2 + 115;

        this.addChild(clipper);

        this.round1 = new cc.Sprite(res.round);
        this.round1.x = size.width/2 + 90;
        this.round1.y = size.height/2 + 250;
        this.round1.scale = 0.5;
        this.addChild(this.round1);

        this.round2 = new cc.Sprite(res.round);
        this.round2.x = size.width - 40;
        this.round2.y = 360;
        this.round2.scale = 0.9;
        this.addChild(this.round2);

        this.round3 = new cc.Sprite(res.round);
        this.round3.x = size.width/2 - 30;
        this.round3.y = 220;
        this.round3.scale = 0.9;
        // this.round3.scale = 0.5;
        this.addChild(this.round3);

        // var st = new cc.scaleTo(1,0.9);
        // var stCall = new cc.callFunc(function(){
        //     this.round3.scale = 0;
        // },this);
        // var seq = new cc.sequence(st,stCall);
        // var seqAction = new cc.RepeatForever(seq);
        // this.round3.runAction(seqAction);


        var center = new cc.Sprite(res.center);
        center.x = size.width/2 - 3;
        center.y = size.height/2 + 115;
        this.addChild(center, 100);

        this.car = new cc.Sprite(res.car1);
        this.car.x = 160;
        this.car.y = 0;
        center.addChild(this.car);
        this.car.attr({
            rotation:0
        });
        var rotate = new cc.RotateBy.create(5, 360);
        var action = new cc.RepeatForever(rotate);
        // center.runAction(action)



        // var btnItem = new cc.MenuItemImage(res.menu,res.menu,this.btnCallFun,this);
        // var btnMenu = new cc.Menu(btnItem);
        // btnMenu.x = size.width/2;
        // btnMenu.y = size.height/2;
        // this.addChild(btnMenu);
    },
    btnCallFun:function(){
        console.log('success');
    }
});