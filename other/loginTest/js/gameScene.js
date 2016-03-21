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
    },
    update:function(){

    }
});

var backGroundLayer = cc.LayerColor.extend({
    ctor : function(aColor){
        this._super();

        this.setColor(aColor);

        var background = base.addSpriteToScene(this, res.background, size.width/2, size.height/2);

        var infinite_rotate = new cc.repeatForever(new cc.rotateBy(60, 360));
        background.runAction(infinite_rotate);

        // base.addUITextToScene(this, "test", 20, size.width/2, size.height/2);

        base.addVedio(this);
    }
});

var loginLayer = cc.Layer.extend({
    SHOW_HIDE_ACTION: new cc.Sequence(new cc.FadeIn(1), new cc.FadeOut(1)),
    ctor:function(){
        this._super();

        // base.addUITextToScene(this, "注册", 36, size.width/2, size.height/2);
        var test = new addSpriteToSceneWithEvent(this, {
            "x" : size.width/2,
            "y" : size.height/2,
            "image" : res.music,
            "listener" :true
        });

        // var loginEditBox = base.addEditBoxFixedToLayer(this, {
        //     "width" : size.width*0.3,
        //     "height": size.height*0.12,
        //     "image" : res.editbox,
        //     "position" : cc.p(size.width/2, size.height/2),
        //     "type" : cc.EDITBOX_INPUT_FLAG_PASSWORD,
        //     "fontsize" : 20,
        //     "placeHolder" : "please enter password"
        // }, function(){
        //     console.log("changeCall");
        // }, function(){
        //     console.log("enterCall");
        // });
    }
});

