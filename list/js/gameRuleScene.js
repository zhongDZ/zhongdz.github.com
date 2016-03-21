var ruleScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        var ruleBg  = new cc.Sprite(res.ruleBg1);
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