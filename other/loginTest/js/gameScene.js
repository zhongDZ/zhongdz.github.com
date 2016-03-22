var size = {
    "width" : 1280,
    "height" : 720
}
var beginScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        var bgLayer = new backGroundLayer(cc.color(32, 32, 32));
        this.addChild(bgLayer);

        var lLayer = new loginLayer();
        this.addChild(lLayer);


        this.bg = new Background(res.gameBg);
        this.bg.attr({
          x:0,
          y:0,
          anchorX:0,
          anchorY:0
        });
        this.addChild(this.bg,0);

        
    },
    update:function(){
        this.bg.update(0,-GC.h,0);
    }
});

var backGroundLayer = cc.LayerColor.extend({
    ctor : function(aColor){
        this._super();

        this.setColor(aColor);

        var background = new addSprite(this, {
            "x" : size.width/2,
            "y" : size.height/2,
            "image" : res.background,
        });

        var infinite_rotate = new cc.repeatForever(new cc.rotateBy(60, 360));
        background.runAction(infinite_rotate);

        baseButton.addVedio(this);
    }
});

var loginLayer = cc.Layer.extend({
    SHOW_HIDE_ACTION: new cc.Sequence(new cc.FadeIn(1), new cc.FadeOut(1)),
    ctor:function(){
        this._super();

        var testSrite = new addSprite(this, {
            "x" : size.width/2,
            "y" : size.height/2,
            "image" : res.canvas,
            "rect" : true,
            "animation" : {
                "todo"    : true,
                "length"  : 8,
                "time"    : 0.2,
                "start_w" : 80,
                "start_h" : 0,
                "width"   : 80,
                "height"  : 80,
                "returnFirst" : true,
                "repeat"  : false
            },
            "listener" :true
        });

        var loginEditBox = baseButton.addEditBoxFixedToLayer(this, {
            "width" : size.width*0.3,
            "height": size.height*0.12,
            "image" : res.editbox,
            "position" : cc.p(size.width/2, size.height/2),
            "type" : cc.EDITBOX_INPUT_FLAG_PASSWORD,
            "fontsize" : 20,
            "placeHolder" : "please enter password"
        }, function(){
            console.log("changeCall");
        }, function(){
            console.log("enterCall");
        });
    }
});

