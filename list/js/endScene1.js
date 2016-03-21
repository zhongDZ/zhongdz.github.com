var endFailScene = cc.Scene.extend({
    ctor:function(scoreAtNow, scoreBest, pm, headRes){
        this._super(scoreAtNow, scoreBest, pm, headRes);

        this.scoreAtNow = scoreAtNow == null||undefined ? 0 : scoreAtNow;
        this.scoreBest = scoreBest == null||undefined ? 0 : scoreBest;
        this.pm = pm == null||undefined ? 0 : pm;
        this.headRes = headRes == null||undefined ? null : headRes;

        this.init();
        this.initHead(this.headRes);
    },
    init:function(){
        var gameBg  = new cc.Sprite(res.gameBg);
        gameBg.x = size.width/2;
        gameBg.y = size.height/2;
        this.addChild(gameBg,0);

        var endBg  = new cc.Sprite(res.endBg1);
        endBg.x = size.width/2;
        endBg.y = size.height/2;
        this.addChild(endBg, 1);

        var success = new cc.Sprite(res.fail);
        success.x = size.width/2;
        success.y =  size.height - 250;
        success.scale = 2.0;
        this.addChild(success, 10);

        var st = new cc.scaleTo(0.8,1);
        st.easing(cc.easeBackInOut());
        success.runAction(st);

        var star = new cc.Sprite(res.star);
        star.x = size.width/2;
        star.y =  size.height - 130;
        star.scaleY = 0.2;
        this.addChild(star);

        var st1 = new cc.scaleTo(0.8,1,1);
        st1.easing(cc.easeBackInOut());
        star.runAction(st1);

        var yTemp = size.height/2 + 100;

        this.txt11 = cc.LabelTTF.create(""+this.scoreAtNow+"", "Arial", 64, cc.TEXT_ALIGN_CENTER);
        this.txt11.fillStyle = cc.color(0,0,0);
        this.txt11.x = size.width/2;
        this.txt11.y = yTemp - 120;
        this.addChild(this.txt11, 1);

        this.txt1 = cc.LabelTTF.create(""+this.scoreBest+"", "Arial", 36);
        this.txt1.fillStyle = cc.color(239,80,80);
        this.txt1.x = size.width/2 + 60;
        this.txt1.y = yTemp - 190;
        this.addChild(this.txt1, 1);

        this.txt2 = cc.LabelTTF.create(""+this.pm+"", "Arial", 36);
        this.txt2.fillStyle = cc.color(239,80,80);
        this.txt2.x = size.width/2 + 60;
        this.txt2.y = yTemp - 230;
        this.addChild(this.txt2, 1);

        var menu1Item = new cc.MenuItemImage(res.btn1,res.btn1,this.btn1Call,this);
        menu1Item.x = 0;
        menu1Item.y = 100;

        var menu2Item = new cc.MenuItemImage(res.btn2,res.btn2,this.btn2Call,this);
        menu2Item.x = 220;
        menu2Item.y = 100;

        var menu = new cc.Menu(menu1Item, menu2Item);
        menu.x = size.width/2 - 110;
        menu.y = size.height/2 - 320;
        this.addChild(menu, 1);
    },
    btn1Call:function(){
        console.log('btn1Call');
    },
    btn2Call:function(){
        console.log('btn2Call');
        // cc.director.runScene(new gameScene());
    },
    initHead:function(headRes){
        var clipper = new cc.ClippingNode();

        var drawNode = new cc.DrawNode();       
        drawNode.clear()                      //清除节点缓存
        drawNode.ctor()  
        drawNode.drawCircle(cc.p(0,0), 80, 0, 8000, false, 6, cc.color(125, 125, 100, 255));

        clipper.setStencil(drawNode);

        var headTemp = res.defaultHead;
        if(headRes == '' || headRes == undefined){
            headTemp = res.defaultHead;
        }else{
            headTemp = headRes;
        }
        var sprite = new cc.Sprite(headTemp);
        clipper.addChild(sprite);
        clipper.x = size.width/2;
        clipper.y = size.height - 135;

        this.addChild(clipper, 1);

        // var mt = new cc.moveTo(1,cc.p(size.width/2, size.height - 160));
        // mt.easing(cc.easeBackIn());

        // clipper.runAction(mt);
    }
});