var g_gameCount = 6;
var g_gameTime = 40;

var size = {
    "width" : 640,
    "height" : 1024
}
var beginScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        var gameBg  = new cc.Sprite(res.gameBg);
        gameBg.x = size.width/2;
        gameBg.y = size.height/2;
        this.addChild(gameBg,0);

        var beginItem = new cc.MenuItemImage(res.beginBtn,res.beginBtn,this.beginCall,this);
        var beginMenu = new cc.Menu(beginItem);
        beginMenu.x = size.width/2;
        beginMenu.y = size.height/2;
        this.addChild(beginMenu);

        this.scheduleUpdate();
    },
    update:function(){

    },
    beginCall:function(){
        cc.director.runScene(new ruleScene());
    }
});

var ruleScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        var ruleBg  = new cc.Sprite(res.ruleBg);
        ruleBg.x = size.width/2;
        ruleBg.y = size.height/2;
        this.addChild(ruleBg,0);

        var knowItem = new cc.MenuItemImage(res.knowBtn,res.knowBtn,this.knowCall,this);
        var knowMenu = new cc.Menu(knowItem);
        knowMenu.x = size.width/2;
        knowMenu.y = size.height/2;
        this.addChild(knowMenu);

        this.scheduleUpdate();
    },
    update:function(){

    },
    knowCall:function(){
        cc.director.runScene(new gameScene());
    }
});

var gameScene = cc.Scene.extend({
    score:0,
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        var size = cc.director.getWinSize();
        
        var gameBg  = new cc.Sprite(res.gameBg);
        gameBg.x = size.width/2;
        gameBg.y = size.height/2;
        this.addChild(gameBg,0);

        //时间
        var time1 = new cc.Sprite("#time.png");
        time1.setPosition(size.width*0.31,size.height*0.95);
        this.addChild(time1,0);
        var time2 = this.time2 = new cc.Sprite("#jdt1.png");
        time2.setPosition(time1.width*0.065,time1.height*0.402);
        time2.anchorX = 0;
        time1.addChild(time2,0);

        //得分
        var scoreBg = new cc.Sprite("#score.png");
        scoreBg.setPosition(size.width*0.805,size.height*0.95);
        this.addChild(scoreBg,0);
        var score = this.scoreText = new cc.LabelTTF("0","Microsoft YaHei",36);
        score.setPosition(scoreBg.width*0.65,scoreBg.height*0.5);
        //tempValue.strokeStyle = cc.color.RED;
        //tempValue.fillStyle = cc.color.RED;
        scoreBg.addChild(score);

        this.scoreTemp = new cc.LabelTTF("","Microsoft YaHei",32);
        this.scoreTemp.setPosition(size.width*0.5,size.height*0.88);
        this.scoreTemp.color = cc.color.RED;
        this.addChild(this.scoreTemp);

        //游戏次数
        var countPnt = new cc.Sprite("#small_kuang.png");
        countPnt.setPosition(size.width-80,size.height*0.3);
        this.addChild(countPnt,0);
        var arrow1 = new cc.Sprite("#jian.png");
        arrow1.setPosition(countPnt.width*0.2,countPnt.height*0.49);
        countPnt.addChild(arrow1,0);
        arrow1.scale = 0.63;
        countTxt = new cc.LabelTTF(" X "+g_gameCount,"Microsoft YaHei",30);
        countTxt.setPosition(countPnt.width*0.6,countPnt.height*0.5);
        countTxt.color = cc.color(132,84,38);
        countPnt.addChild(countTxt);

        var rope = this.rope = new cc.Sprite("#ba.png");
        rope.setPosition(size.width*0.1,size.height*0.71);
        this.addChild(rope,0);
        var descLabel = this.descLabel = new cc.LabelTTF("国企改革","Microsoft YaHei",28);
        descLabel.setPosition(rope.width*0.5,rope.height*0.1);
        descLabel.color = cc.color.RED;
        descLabel.strokeStyle = cc.color.RED;
        descLabel.fillStyle = cc.color.RED;
        rope.addChild(descLabel);

        var infinite = this.infinite = new cc.Sprite("#yuan.png");
        infinite.setPosition(size.width*0.1,size.height*0.765);
        this.addChild(infinite,0);
        infinite.runAction(cc.sequence(cc.moveBy(3,cc.p(size.width*1.1,0)),cc.callFunc(function(){
            descLabel.setString("并购重组");
        })));
        var viewSize = cc.view.getFrameSize();

        if(cc.sys.isMobile){
            infinite.scaleX = size.width/viewSize.width*size.width/size.height*0.93;
            infinite.scaleY = size.height/viewSize.height*size.width/size.height*0.93;
        }
        var bow_1 = bow1 = new cc.Sprite(res.bow_1);
        bow_1.setPosition(size.width*0.5,size.height*0.145);
        this.addChild(bow_1,0);
        var bow_2 = bow2 = new cc.Sprite(res.bow_2);
        bow_2.setPosition(size.width*0.5,size.height*0.1);
        this.addChild(bow_2,0);
        bow_2.visible = false;

        arrow = new cc.Sprite("#jian.png");
        arrow.setPosition(size.width*0.5,size.height*0.27);
        this.addChild(arrow,0);
        cc.eventManager.addListener(listener,arrow);

        zhiyin = new cc.Sprite("#zhiyin.png");
        zhiyin.setPosition(size.width*0.5,size.height*0.13);
        zhiyin.runAction(cc.blink(0.5,3));
        this.addChild(zhiyin,0);

        var menuBack = this.menuBack = new cc.MenuItemImage(res.js_guideBG,null,this.onStart, this);
        menuBack.setPosition(size.width*0.5, size.height*0.5);
        var menu = new cc.Menu(menuBack);
        menu.setPosition(0,0);
        this.addChild(menu,1);

        this.countDown();
        this.scheduleUpdate();
        this.schedule(this.randomMove,3);
    },
    countDown: function () {
        this.schedule(function(){
            if(g_gameTime<=0 && !this.overFlag){
                this.overFlag = true;
                g_gameTime = 0;
                this.gameOver();
            }
            g_gameTime -= 0.1;
            this.time2.scaleX = g_gameTime/40;
        },0.1);
    },
    arr : ["定向增发","业绩扭亏","高管增持","股权激励"],
    arrR : ["国企改革","并购重组"],
    randomMove: function () {
        var t = Math.random()*1.5+2;
        var callback = cc.callFunc(function () {
            if(this.arrR.length == 6){
                this.descLabel.setString(this.arrR[Math.floor(Math.random()*this.arrR.length)]);
            }else{
                this.descLabel.setString(this.arr[0]);
                this.arrR.push(this.arr[0]);
                this.arr.splice(0,1);
                console.log(this.arr);
                console.log(this.arr.length);
                console.log(this.arrR.length)
            }

        },this);
        if(this.infinite.x > size.width/2){
            this.infinite.runAction(cc.sequence(cc.moveBy(t,cc.p(-size.width*1.5,0)),callback));
        }else{
            this.infinite.runAction(cc.sequence(cc.moveBy(t,cc.p(size.width*1.5,0)),callback));
        }
    },
    addHole: function (pos) {
        var hole = new cc.Sprite("#duang.png");
        hole.x = pos.x-16;
        hole.y = pos.y-18;
        this.infinite.addChild(hole);
    },
    gameOver:function(){
        //查询数据库
        if(!this.tempFlag){
            this.tempFlag = true;
            cc.director.pause();
            // var self = this;
            // self.addChild(new GameEndLayer(self.score,6000,1));
        }
    },
    update: function () {
        this.rope.x = this.infinite.x;
        var rect = this.infinite.getBoundingBox();
        var point = arrow.getPosition();
        if(cc.rectContainsPoint(rect,point)){
            arrow.stopAllActions();
            arrow.y = size.height*0.27;
            //arrow.visible = false;
            clickFlag = false;
            arrow.scaleY = 1;
            //this.infinite.stopAllActions();
            var score = Math.floor((this.infinite.width/2-Math.abs(this.infinite.x - point.x))*1.21*10)/100;
            if(score<0) {score = Math.abs(score)};
            this.scoreTemp.setString("+"+score);
            this.scoreTemp.scale = 0.3;
            this.scoreTemp.x= size.width/2;
            this.scoreTemp.y = size.height*0.88;
            //this.scoreTemp.runAction(cc.sequence(cc.fadeIn(0.1),cc.delayTime(1),cc.fadeOut(0.5)));
            this.scoreTemp.runAction(cc.sequence(cc.fadeIn(0.1),cc.scaleTo(0.5,1.9),cc.scaleTo(0.2,1.5),cc.delayTime(0.8),cc.spawn(cc.scaleTo(0.5,0.1),cc.moveTo(0.5,cc.p(600,900)),cc.fadeOut(0.8))));
            this.score = accAdd(this.score,score);
            var pos = cc.p(point.x,this.infinite.y);
            pos = this.infinite.convertToNodeSpace(pos);
            this.addHole(pos);
            var str = this.score+"";
            if(str.length > 5){
                this.score = Math.floor(this.score);
            }

            console.log(this.score)
            this.scoreText.setString(this.score);
        }
        if(arrow.y > size.height*1.1){
            arrow.stopAllActions();
            clickFlag = false;
            arrow.y = size.height*0.27;
            arrow.scaleY = 1;
        }

        if(g_gameCount == 0 && !this.overFlag ){
            this.overFlag = true;
            cc.eventManager.removeAllListeners();
            this.scheduleOnce(this.gameOver,1.5);
        }
    }
});

var clickFlag = false;
var listener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function (touch, event) {
        if(!clickFlag){
            clickFlag = true;
            zhiyin.visible = false;
            bow1.visible = false;
            bow2.visible = true;
            arrow.runAction(cc.moveBy(0.1,cc.p(0,-cc.winSize.height*0.09)));
            return true;
        }
    },
    onTouchMoved:function(touch, event){       //实现onTouchMoved事件处理回调函数, 触摸移动时触发
        var target = event.getCurrentTarget();      // 移动当前按钮精灵的坐标位置
        var delta = touch.getDelta();               //获取事件数据: delta
    },
    onTouchEnded: function () {
        console.log("shoot");
        bow1.visible = true;
        bow2.visible = false;
        arrow.runAction(cc.moveBy(0.5,cc.p(0,cc.winSize.height)));
        arrow.runAction(cc.scaleTo(0.5,1,0.3));
        g_gameCount --;
        countTxt.setString("X "+g_gameCount);
    }
});

//加法函数
function accAdd(arg1, arg2) {
    var r1, r2, m;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
}
//乘法函数  
function accMul(arg1, arg2) {  
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();  
    try {  
        m += s1.split(".")[1].length;  
    }  
    catch (e) {  
    }  
    try {  
        m += s2.split(".")[1].length;  
    }  
    catch (e) {  
    }  
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);  
} 

//除法函数  
function accDiv(arg1, arg2) {  
    var t1 = 0, t2 = 0, r1, r2;  
    try {  
        t1 = arg1.toString().split(".")[1].length;  
    }  
    catch (e) {  
    }  
    try {  
        t2 = arg2.toString().split(".")[1].length;  
    }  
    catch (e) {  
    }  
    with (Math) {  
        r1 = Number(arg1.toString().replace(".", ""));  
        r2 = Number(arg2.toString().replace(".", ""));  
        return (r1 / r2) * pow(10, t2 - t1);  
    }  
} 