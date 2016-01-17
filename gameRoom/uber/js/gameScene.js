var size = {
    "width" : 640,
    "height" : 1136
}
var imgArr = [
    res.img1,res.img2,res.img3,res.img4,
    res.img5,res.img6,res.img7,res.img8,
    res.img9,res.img10,res.img11,res.img12
];
var tipArr = [
    res.tip1,res.tip2,res.tip3,res.tip4,
    res.tip5,res.tip6,res.tip7,res.tip8,
    res.tip9,res.tip10,res.tip11,res.tip12
];

//page2
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

        this.step1();

        this.initOther();
    },
    initOther:function(){
        this.roundSpr = new cc.Sprite(imgArr[(G_Obj.constellation - 1)]);
        this.roundSpr.x = size.width/2 - 155;
        this.roundSpr.y = size.height/2 + 35;

        this.tip = new cc.Sprite(tipArr[(G_Obj.constellation - 1)]);
        this.tip.x = size.width/2 + 30;
        this.tip.y = size.height/2 + 30;

        this.round2 = new cc.Sprite(res.round);
        this.round2.x = size.width - 202;
        this.round2.y = 221;

        this.cc = new cc.LabelTTF(G_Obj.address, "Arial", 36);
        this.cc.x = size.width/2 - 30;
        this.cc.y = 250;
        this.cc.fillStyle = new cc.color(31,186,214);

        this.dd = new cc.LabelTTF("是你Uber之旅的第一站", "Arial", 26);
        this.dd.x = size.width/2 - 120;
        this.dd.y = 210;
    },
    step1:function(){
        this.round = new cc.Sprite(res.round);
        this.round.x = size.width - 132;
        this.round.y = size.height - 268;
        this.addChild(this.round);

        var delayTime1 = new cc.delayTime(0.5);
        var st1 = new cc.scaleTo(0,0);
        var st2 = new cc.scaleTo(0.5,1);
        var call1 = new cc.callFunc(function(){
            this.initCar();

            var _this = this;
            setTimeout(function(){
                _this.addChild(_this.aa);
                _this.addChild(_this.bb);
            },600);
        },this);

        var seq = new cc.sequence(delayTime1,st1,st2,call1);
        this.round.runAction(seq)

        this.aa = new cc.LabelTTF(G_Obj.timeString, "Arial", 36);
        this.aa.x = size.width/2;
        this.aa.y = size.height - 200;
        this.aa.fillStyle = new cc.color(31,186,214);

        this.bb = new cc.LabelTTF("你开启了Uber之旅", "Arial", 32);
        this.bb.x = size.width/2 - 38;
        this.bb.y = size.height - 250;
    },
    initCar:function(){
        this.car = new cc.Sprite(res.car1);
        this.car.x = size.width - 132;
        this.car.y = size.height - 268;
        this.addChild(this.car);

        this.car.rotation = 50;

        var mt1 = new cc.moveTo(3,cc.p(size.width/2 - 155, size.height/2 + 35));
        var delayTime1 = new cc.delayTime(0.3);
        var mt1Call = new cc.callFunc(function(){
            this.car.rotation = -36;

            //添加星座
            this.addChild(this.roundSpr);
            var rt = new cc.rotateBy(2,360);
            var rtCall = new cc.callFunc(function(){
                //添加星座文案
                this.addChild(this.tip);
            },this);
            var act1 = new cc.sequence(rt,rtCall);
            this.roundSpr.runAction(act1);
        },this);
        var mt2 = new cc.moveTo(3,cc.p(size.width - 202, 221));
        var mt2Call = new cc.callFunc(function(){
            this.addChild(this.round2);

            var st1 = new cc.scaleTo(0,0);
            var st2 = new cc.scaleTo(1,1);
            var mt2seq = new cc.sequence(st1, st2);
            var mt2seqRep = new cc.repeatForever(mt2seq);
            this.round2.runAction(mt2seqRep);
        },this);
        var mt2Call1 = new cc.callFunc(function(){
            this.addChild(this.cc);
            this.addChild(this.dd);

            this.initMenu();
        },this);
        var seq = new cc.sequence(mt1, delayTime1, mt1Call, mt2, mt2Call, mt2Call1);


        this.car.runAction(seq);
    },
    initMenu:function(){
        var btnItem = new cc.MenuItemImage(res.btn,res.btn,this.btnCallFun,this);
        var btnMenu = new cc.Menu(btnItem);
        btnMenu.x = size.width - 202;
        btnMenu.y = 221;
        this.addChild(btnMenu,10);
    },
    btnCallFun:function(){
        cc.director.runScene(new gameScene1())
    },
    onExit:function(){
        this.removeAllChildrenWithCleanup(true);
    }
});
//page3
var gameScene1 = cc.Scene.extend({
    rotationTemp1:265,
    rotationTemp2:0,
    check:false,
    over2:false,
    over3:false,
    over4:false,
    ctor:function(){
        this._super();
        this.init();

        // this.initOTxt2();

        // this.initOTxt4();

        this.scheduleUpdate();
    },
    init:function(){
        var bg2  = new cc.Sprite(res.bg2);
        bg2.x = size.width/2;
        bg2.y = size.height/2;
        this.addChild(bg2,0);

        this.initCarAndEarth();

        this.initOTxt1();
    },
    initOTxt1:function(){
        this.round1 = new cc.Sprite(res.round);
        this.round1.x = 150;
        this.round1.y = size.height - 175;

        this.txt1 = new cc.LabelTTF(G_Obj.cs, "Arial", 48);
        this.txt1.x = size.width/2 - 35;
        this.txt1.y = size.height - 250;
        this.txt1.fillStyle = new cc.color(31,186,214);

        var arr = [
            "2015年",
            "你完成了",
            "           次行程"
        ];
        var X = size.width/2 - 20;
        var Y = size.height - 250;
        var xy = [
            {"x":X,"y":Y + 100},
            {"x":X + 10,"y":Y + 50},
            {"x":X + 30,"y":Y}
        ];
        var txtArr = [];

        for(var i=0;i<arr.length;i++){
            var temp = new cc.LabelTTF(arr[i], "Arial", 32);
            temp.x = xy[i].x;
            temp.y = xy[i].y;
            txtArr.push(temp);
        }

        this.addChild(this.round1);

        var st = new cc.scaleTo(0,0);
        var st1 = new cc.scaleTo(0.5,1);
        var st1Call = new cc.callFunc(function(){
            this.addChild(txtArr[0]);
            this.addChild(txtArr[1]);
            this.addChild(txtArr[2]);

            this.addChild(this.txt1);    
        },this);
        var seq = new cc.sequence(st, st1, st1Call);
        this.round1.runAction(seq);
    },
    initOTxt2:function(){
        this.round2 = new cc.Sprite(res.round);
        this.round2.x = size.width/2 - 50;
        this.round2.y = size.height/2 + 170;
        
        this.txt22 = new cc.LabelTTF(G_Obj.hour, "Arial", 48);
        this.txt22.x = size.width/2 + 75;
        this.txt22.y = size.height/2 + 160;
        this.txt22.fillStyle = new cc.color(31,186,214);
        
        this.txt222 = new cc.LabelTTF(G_Obj.kilometer, "Arial", 44);
        this.txt222.x = size.width/2 + 210;
        this.txt222.y = size.height/2 + 110;
        this.txt222.fillStyle = new cc.color(31,186,214);

        var arr = [
            "在Uber上度过了",
            "      小时",
            "累计行程          公里"
        ];
        var X = size.width/2 + 150;
        var Y = size.height/2 + 110;
        var xy = [
            {"x":X,"y":Y + 100},
            {"x":X - 20,"y":Y + 50},
            {"x":X + 25,"y":Y}
        ];
        var txtArr = [];

        for(var i=0;i<arr.length;i++){
            var temp = new cc.LabelTTF(arr[i], "Arial", 32);
            temp.x = xy[i].x;
            temp.y = xy[i].y;
            txtArr.push(temp);
        }



        this.addChild(this.round2);

        var delay1 = new cc.delayTime(0.5);
        var st0 = new cc.scaleTo(0,0);
        var st1 = new cc.scaleTo(0.5,1);
        var st1Call = new cc.callFunc(function(){
            this.addChild(txtArr[0]);
            this.addChild(txtArr[1]);
            this.addChild(txtArr[2]);

            this.addChild(this.txt22);
            this.addChild(this.txt222);
        },this);
        var seq = new cc.sequence(delay1, st0, st1, st1Call);

        this.round2.runAction(seq);
    },
    initOTxt3:function(){
        this.round3 = new cc.Sprite(res.round);
        this.round3.x = size.width/2 + 75;
        this.round3.y = size.height/2 - 160;

        this.txt33 = new cc.LabelTTF(G_Obj.money, "Arial", 48);
        this.txt33.x = size.width/2 + 125;
        this.txt33.y = size.height/2 - 220;
        this.txt33.fillStyle = new cc.color(31,186,214);

        var arr = [
            "共花费              元",
            "可以看3场郭德纲相声"
        ];
        var X = size.width/2 + 100;
        var Y = size.height/2 - 320;
        var xy = [
            {"x":X - 5,"y":Y + 100},
            {"x":X + 20,"y":Y + 50}
        ];
        var txtArr = [];

        for(var i=0;i<arr.length;i++){
            var temp = new cc.LabelTTF(arr[i], "Arial", 32);
            temp.x = xy[i].x;
            temp.y = xy[i].y;
            txtArr.push(temp);
        }


        this.addChild(this.round3);

        var delay1 = new cc.delayTime(0.5);
        var st0 = new cc.scaleTo(0,0);
        var st1 = new cc.scaleTo(0.5,1);
        var st1Call = new cc.callFunc(function(){
            this.addChild(txtArr[0]);
            this.addChild(txtArr[1]);

            this.addChild(this.txt33);
        },this);
        var seq = new cc.sequence(delay1, st0, st1, st1Call);

        this.round3.runAction(seq);  
    },
    initOTxt4:function(){
        this.round4 = new cc.Sprite(res.round);
        this.round4.x = size.width/2 - 150;
        this.round4.y = 120;

        this.txt44 = new cc.LabelTTF(G_Obj.city, "Arial", 48);
        this.txt44.x = size.width/2 - 30;
        this.txt44.y = 170;
        this.txt44.fillStyle = new cc.color(31,186,214);

        var arr = [
            "Uber伴你走过了",
            "    个城市",
            "下一个会是哪里呢?"
        ];
        var X = size.width/2 + 50;
        var Y = 120;
        var xy = [
            {"x":X,"y":Y + 100},
            {"x":X - 10,"y":Y + 50},
            {"x":X + 15,"y":Y}
        ];
        var txtArr = [];

        for(var i=0;i<arr.length;i++){
            var temp = new cc.LabelTTF(arr[i], "Arial", 32);
            temp.x = xy[i].x;
            temp.y = xy[i].y;
            txtArr.push(temp);
        }

        this.addChild(this.round4);

        var st2 = new cc.scaleTo(0,0);
        var st3 = new cc.scaleTo(0.8,1);
        var seq1 = new cc.sequence(st2, st3);
        var ryRepeat = new cc.RepeatForever(seq1);

        var delay1 = new cc.delayTime(0.5);
        var st0 = new cc.scaleTo(0,0);
        var st1 = new cc.scaleTo(0.5,1);
        var st1Call = new cc.callFunc(function(){
            this.addChild(txtArr[0]);
            this.addChild(txtArr[1]);
            this.addChild(txtArr[2]);

            this.addChild(this.txt44);

            var _this = this;
            setTimeout(function(){
                _this.round4.stopAllActions();
                _this.round4.runAction(ryRepeat);

                _this.initMenu();
            },300);
            
        },this);
        var seq = new cc.sequence(delay1, st0, st1, st1Call);

        this.round4.runAction(seq);
    },
    initCarAndEarth:function(){
        this.earth = new cc.Sprite(res.earth);
        this.earth.x = 0;
        this.earth.y = size.height/2 - 100;
        this.addChild(this.earth);

        this.center = new cc.Sprite(res.center);
        this.center.x = 35;
        this.center.y = size.height/2 - 108;
        this.addChild(this.center,100);
        //265
        this.center.rotation = 265;

        this.car = new cc.Sprite(res.car1);
        this.car.x = 364;
        this.car.y = 0;
        this.center.addChild(this.car,100);

        var rb = new cc.rotateBy(5,360);
        var rbRepeat = new cc.RepeatForever(rb);
        this.earth.runAction(rbRepeat);
    },
    initMenu:function(){
        var btnItem = new cc.MenuItemImage(res.btn,res.btn,this.btnCallFun,this);
        var btnMenu = new cc.Menu(btnItem);
        btnMenu.x = size.width/2 - 150;
        btnMenu.y = 120;
        this.addChild(btnMenu,1000);
    },
    btnCallFun:function(){
        cc.director.runScene(new gameScene2());
    },
    update:function(){
        if(!this.check){
            if(parseInt(this.rotationTemp1) % 360 == 0){
                this.check = true;
                this.rotationTemp1 = 265;
                this.rotationTemp2 = 0;
            }
            this.rotationTemp1 += 0.2;
            this.center.rotation = this.rotationTemp1;
        }else{
            this.rotationTemp2 += 0.2;
            this.center.rotation = this.rotationTemp2;
        }

        switch(parseInt(this.center.rotation)){
            case 60:{//经过第四个圆的位置
                if(!this.over4){
                    this.over4 = true;
                    this.initOTxt4();
                }
            };break;
            case 90:{//经过轨迹左下角
                this.rotationTemp2 = 0;
                this.check = false;
            };break;
            case 310:{//经过第二个圆的位置
                if(!this.over2){
                    this.over2 = true;
                    this.initOTxt2();
                }
            };break;
            case 360:{//经过第三个圆的位置
               if(!this.over3){
                    this.over3 = true;
                    this.initOTxt3();
                } 
            };break;
        }
    }
});
//page4
var gameScene2 = cc.Scene.extend({
    rotationTemp0:0,
    showLayer:false,
    ctor:function(){
        this._super();
        this.init();

        this.scheduleUpdate();
    },
    init:function(){
        var bg3  = new cc.Sprite(res.bg3);
        bg3.x = size.width/2;
        bg3.y = size.height/2;
        this.addChild(bg3,0);

        this.initTop();

        this.initMiddle();

        this.initBottom();

        this.initShare();
    },
    initTop:function(){
        var temp1 = 0,
            temp2 = 0,
            temp3 = 0;

        if(G_Obj.card == 1){
            temp1 = res.card1;
            temp2 = res.card11;
            temp3 = res.card111;
        }else if(G_Obj.card == 2){
            temp1 = res.card3;
            temp2 = res.card33;
            temp3 = res.card333;
        }else{
            temp1 = res.card2;
            temp2 = res.card22;
            temp3 = res.card222;
        }

        var card1X = size.width/2 - 80;
        var card1Y = size.height/2 + 350;
        this.card1 = new cc.Sprite(temp1);
        this.card1.x = card1X;
        this.card1.y = card1Y;
        this.addChild(this.card1);

        var mt1 = new cc.moveTo(0.1,cc.p(card1X,card1Y + 5));
        var mt2 = new cc.moveTo(0.1,cc.p(card1X,card1Y));
        var seq = new cc.sequence(mt1, mt2);
        var seqRepeat = new cc.RepeatForever(seq);
        this.card1.runAction(seqRepeat)

        this.card11 = new cc.Sprite(temp2);
        this.card11.x = size.width/2;
        this.card11.y = size.height/2 + 350;
        this.addChild(this.card11);

        this.card111 = new cc.Sprite(temp3);
        this.card111.x = size.width/2 + 5;
        this.card111.y = size.height/2 + 302;
        this.addChild(this.card111);

        var ry = new cc.rotateBy(0.5,360);
        var ryRepeat = new cc.RepeatForever(ry);
        this.card111.runAction(ryRepeat)

        this.round = new cc.Sprite(res.round);
        this.round.x = size.width/2 + 5;
        this.round.y = size.height/2 + 302;
        this.round.scale = 0.6;
        this.addChild(this.round);

        var st = new cc.scaleTo(1,0.9);
        var stCall = new cc.callFunc(function(){
            this.round.scale = 0;
        },this);
        var seq = new cc.sequence(st,stCall);
        var seqAction = new cc.RepeatForever(seq);
        this.round.runAction(seqAction);
    },
    initMiddle:function(){
        var txtArr = [
            "根据你的旅途回顾",
            "你已获得Uber         一张",
            "现在起至                ,再完成    个搭乘",
            "即可迅速升级为    卡会员"
        ];
        var Ytemp = size.height/2 + 170;
        var txtArrY = [Ytemp , Ytemp - 50, Ytemp - 100, Ytemp - 150];
        var txtSpr = [];
        for(var i=0;i<txtArr.length;i++){
            var txt = new cc.LabelTTF(txtArr[i], "Arial", 32);
            txt.x = size.width/2;
            txt.y = txtArrY[i];
            txt.textAlign = cc.TEXT_ALIGNMENT_CENTER;

            txtSpr.push(txt);
            this.addChild(txtSpr[i]);
        }
        /*******************上为静态,下为动态********************/
        var index1 = null;
        var index2 = G_Obj.timeEnd;
        var index3 = G_Obj.num;
        var index4 = null;


        if(G_Obj.card == 1){
            index1 = "铂金";
            index4 = "铂";
        }else if(G_Obj.card == 2){
            index1 = "金卡";
            index4 = "金";
        }else{
            index1 = "银卡";
            index4 = "银";
        }
        
            

        var inputArr = [
            index1,
            index2,
            index3,
            index4
        ];
        var centerX = size.width/2;
        var centerY = size.height/2 + 50;
        var xy = [
            {"x":centerX + 70,"y":centerY + 70},
            {"x":centerX - 55,"y":centerY + 20},
            {"x":centerX + 140,"y":centerY + 20},
            {"x":centerX + 65,"y":centerY - 30}
        ];
        var inputArrTemp = [];
        for(var i=0;i<inputArr.length;i++){
            var temp = null;
            temp = new cc.LabelTTF(inputArr[i], "Arial", 36);
            temp.x = xy[i].x;
            temp.y = xy[i].y;
            temp.fillStyle = new cc.color(31,186,214); 

            inputArrTemp.push(temp);
            this.addChild(inputArrTemp[i]); 
        } 
    },
    initBottom:function(){
        this.txt = new cc.Sprite(res.txt);
        this.txt.x = size.width/2;
        this.txt.y = 280;
        this.addChild(this.txt);

        var car1X0 = size.width/2 + 180;
        var car1X1 = size.width/2 + 265;
        var car1X2 = size.width/2 - 265;
        var car1X3 = size.width/2 - 180;
        var car1Y0 = 470;
        var car1Y1 = 75;

        this.car1 = new cc.Sprite(res.car1);
        this.car1.x = car1X0;
        this.car1.y = car1Y0;
        this.car1.rotation = -90;
        this.addChild(this.car1);

        var mt1 = new cc.moveTo(0.5,cc.p(car1X1, car1Y0));
        var mt1Call = new cc.callFunc(function(){
            this.car1.rotation = 0;
        },this);
        var spa1 = new cc.spawn(mt1, mt1Call);

        var mt2 = new cc.moveTo(2.3,cc.p(car1X1, car1Y1));
        var mt2Call = new cc.callFunc(function(){
            this.car1.rotation = 90;
        },this);
        var spa2 = new cc.spawn(mt2, mt2Call);

        var mt3 = new cc.moveTo(3.1,cc.p(car1X2, car1Y1));
        var mt3Call = new cc.callFunc(function(){
            this.car1.rotation = 180;
        },this);
        var spa3 = new cc.spawn(mt3, mt3Call);

        var mt4 = new cc.moveTo(2.3,cc.p(car1X2, car1Y0));
        var mt4Call = new cc.callFunc(function(){
            this.car1.rotation = 270;
        },this);
        var spa4 = new cc.spawn(mt4, mt4Call);

        var mt5 = new cc.moveTo(0.5,cc.p(car1X3, car1Y0));
        var mt5Call = new cc.callFunc(function(){
            this.car1.x = car1X0;
        },this);
        var spa5 = new cc.spawn(mt5, mt5Call);

        var seq = new cc.sequence(mt1, mt1Call, mt2, mt2Call, mt3, mt3Call, mt4, mt4Call, mt5, mt5Call);
        // var seqRepeat = seq.repeatForever();
        var seqRepeat = new cc.RepeatForever(seq);
        this.car1.runAction(seqRepeat);
    },
    initShare:function(){
        var btnItem = new cc.MenuItemImage(res.share,res.share,this.btnCallFun,this);
        var btnMenu = new cc.Menu(btnItem);
        btnMenu.x = size.width/2;
        btnMenu.y = size.height/2 - 40;
        this.addChild(btnMenu,10);
    },
    btnCallFun:function(){
        if(!this.showLayer){
            this.initLayer();
        }
    },
    initLayer:function(){
        this.cLayer = new cc.LayerColor(cc.color(125,125,125,200), 640, 1136);
        this.addChild(this.cLayer,1000);

        // this.center = new cc.Sprite(res.center);
        // this.center.x = size.width;
        // this.center.y = size.height/2 + 200;

        // this.car11 = new cc.Sprite(res.car1);
        // this.car11.x = -300;
        // this.car11.y = 0;
        // this.car11.rotation = 180;
        // this.center.addChild(this.car11);
        // this.cLayer.addChild(this.center);

        var roade = new cc.Sprite(res.roade);
        roade.x = size.width;
        roade.y = size.height;
        roade.anchorX = 1;
        roade.anchorY = 1;
        this.cLayer.addChild(roade);

        this.showLayer = true;

        this.loadListener();
    },
    update:function(){
        if(this.showLayer){
            // if(this.rotationTemp0 == 90){
            //     this.rotationTemp0 = 0;
            // }
            // this.rotationTemp0 += 0.5;
            // this.center.rotation = this.rotationTemp0; 
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
        var target = event.getCurrentTarget();

        if(self.showLayer){
            self.showLayer = false;
            self.removeChild(self.cLayer);
            // self.center.rotation = 0;
            // self.rotationTemp0 = 0;
        }
    }
});
//page1
var gameScene3 = cc.Scene.extend({
    canTouch:false,
    check1:false,
    rotationTemp1:320,
    rotationTemp2:0,
    beginTurn:false,
    ctor:function(){
        this._super();
        this.init();

        this.scheduleUpdate();
    },
    init:function(){
        var bg4  = new cc.Sprite(res.bg4);
        bg4.x = size.width/2;
        bg4.y = size.height/2;
        this.addChild(bg4,0);

        this.initHead();

        this.initMenu();

        this.initCar();

        this.initRound1();

        this.initRound2And3();

        this.initBottomTips();
    },
    initHead:function(){
        var clipper = new cc.ClippingNode();

        var drawNode = new cc.DrawNode();       
        drawNode.clear()                      //清除节点缓存
        drawNode.ctor()  
        drawNode.drawCircle(cc.p(0,0), 80, 0, 8000, false, 6, cc.color(125, 125, 100, 255));

        clipper.setStencil(drawNode);

        var sprite = new cc.Sprite(G_Obj.head);
        clipper.addChild(sprite);
        clipper.x = size.width/2 - 3;
        clipper.y = size.height/2 + 115;

        this.addChild(clipper);
    },
    initMenu:function(){
        this.kuang = new cc.Sprite(res.menu1);
        this.kuang.x = size.width/2;
        this.kuang.y = size.height/2 - 200;

        var blink = new cc.Blink(50, 100);
        this.blinkRepeat = new cc.repeatForever(blink);
        
        var btnItem = new cc.MenuItemImage(res.menu2,res.menu2,this.btnCallFun,this);
        var btnMenu = new cc.Menu(btnItem);
        btnMenu.x = size.width/2;
        btnMenu.y = size.height/2 - 200;
        this.addChild(btnMenu);
    },
    btnCallFun:function(){
        if(this.canTouch){
            this.canTouch = false;
            cc.director.runScene(new gameScene());
        }
    },
    initCar:function(){
        this._center = new cc.Sprite(res.center);
        this._center.x = size.width/2 - 3;
        this._center.y = size.height/2 + 115;
        this._center.rotation = 320;

        this.car = new cc.Sprite(res.car1);
        this.car.x = 160;
        this.car.y = 0;
        this._center.addChild(this.car);
    },
    initRound1:function(){
        this.round1 = new cc.Sprite(res.begin_round3);
        this.round1.x = size.width/2 + 90;
        this.round1.y = size.height/2 + 250;
        this.round1.scale = 0;
        this.addChild(this.round1);

        this.st0 = new cc.scaleTo(0.5,1);
        var st0Call = new cc.callFunc(function(){
            //添加转心
            this.addChild(this._center, 100);
            //小车开始转动
            this.beginTurn = true;
        },this);
        this.seq0 = new cc.sequence(this.st0,st0Call);

        var st00 = new cc.scaleTo(0,0);
        var st01 = new cc.scaleTo(0.5,1);
        this.seq00 = new cc.sequence(st00,st01);
    },
    initRound2And3:function(){
        this.round2 = new cc.Sprite(res.begin_round1);
        this.round2.x = size.width - 40;
        this.round2.y = 360;
        this.round2.scale = 1;
        this.addChild(this.round2);

        var delay = new cc.delayTime(1);
        var st1 = new cc.scaleTo(0,0);
        var st2 = new cc.scaleTo(1,1);
        var stCall1 = new cc.callFunc(function(){
            this.round2.scale = 0;
        },this);
        var seq1 = new cc.sequence(st2,stCall1);
        var repeat = new cc.Repeat(seq1,2);

        var stCall2 = new cc.callFunc(function(){
            this.round2.scale = 1;

            this.round1.runAction(this.seq0);
            this.round3.runAction(this.st0.clone());

            this.canTouch =  true;//可以点击按钮跳转了

            this.addChild(this.kuang);
            this.kuang.runAction(this.blinkRepeat);
        },this);
        var seq2 = new cc.sequence(delay,st1,repeat,stCall2);
        this.round2.runAction(seq2);

        this.round3 = new cc.Sprite(res.begin_round2);
        this.round3.x = size.width/2 - 30;
        this.round3.y = 220;
        this.round3.scale = 0;
        this.addChild(this.round3);
    },
    initBottomTips:function(){
        var txt = new cc.LabelTTF("还没使用过Uber?\n输入新用户代码\"优步年终奖\"领取30元优惠!", "Arial", 20);
        txt.x = size.width/2;
        txt.y = 120;
        txt.textAlign = cc.TEXT_ALIGNMENT_CENTER;
        this.addChild(txt)
    },
    update:function(){
        if(!this.beginTurn)return;
        if(!this.check1){
            this.rotationTemp1 += 1;
            if(parseInt(this.rotationTemp1%360) == 0){
                this.check1 = true;
                this.check2 = true;
            }
            this._center.rotation = this.rotationTemp1;    
        }else{
            this.rotationTemp2++;
            if(this.rotationTemp2%320==0){
                this.round1.runAction(this.seq00);
            }
            if(this.rotationTemp2%360==0){
                this.rotationTemp2 = 0;
            }
            this._center.rotation = this.rotationTemp2;
        }
    }
});