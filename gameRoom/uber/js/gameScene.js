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
        this.round.x = size.width/2;
        this.round.y = size.height - 200;
        this.addChild(this.round);

        var aT = cc.rotateTo(2, 45);
        var seq = cc.sequence(aT);
        var re  = seq.repeatForever();
        this.round.runAction(re)

        this.scheduleUpdate();
    },
    update:function(){

    }
})