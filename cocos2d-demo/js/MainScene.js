var MainScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        var gameBg  = new cc.Sprite(res.gameBg);
        gameBg.x = winSize.width/2;
        gameBg.y = winSize.height/2;
        this.addChild(gameBg,0);

        if(!true){
          //进度条
          var layer = new LoadBar();
        }

        if(!true){
          //添加精灵以及精灵的动画的layer  详见sprite.js
          var layer = new SpriteMyLayer();
        }

        if(!true){
          //精灵添加事件以及各种eventType 详见event.js
          var layer = new EventMyLayer();
        }

        if(!true){
          //粒子系统
          var layer = new DemoSnow();
        }

        if(!true){
          //音效
          var layer = new SoundLayer();
        }

        if(true){//Event demo
          //需要在loadScene.js  修改一下舞台大小
          var layer = new EventDemoLayer();
        }


        this.addChild(layer);

        this.scheduleUpdate();
    },
    update:function(){

    }
})