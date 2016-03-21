var gameScene = cc.Scene.extend({
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

        this.testBtn();

        this.scheduleUpdate();
    },
    update:function(){

    },
    gameOver:function(){
        cc.director.runScene(new endsuccessScene())
    },
    testBtn:function(){
        var successBtnItem = new cc.MenuItemImage(res.successBtn,res.successBtn,this.successBtnCall,this);
        var successBtnMenu = new cc.Menu(successBtnItem);
        successBtnMenu.x = size.width/2;
        successBtnMenu.y = size.height/2 + 100;
        this.addChild(successBtnMenu);

        var FailBtnItem = new cc.MenuItemImage(res.FailBtn,res.FailBtn,this.FailBtnCall,this);
        var FailBtnMenu = new cc.Menu(FailBtnItem);
        FailBtnMenu.x = size.width/2;
        FailBtnMenu.y = size.height/2 - 100;
        this.addChild(FailBtnMenu);
    },
    successBtnCall:function(){
        cc.director.runScene(new endsuccessScene());
    },
    FailBtnCall:function(){
        cc.director.runScene(new endFailScene());
    }
});