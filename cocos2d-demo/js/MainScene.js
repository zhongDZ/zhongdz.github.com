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

        if(true){
          //粒子系统
          // var layer = new DemoSnow();
          var layer = new DemoExplosion();
        }

        if(!true){
          //音效
          var layer = new SoundLayer();
        }

        if(!true){//Event demo
          //需要在loadScene.js  修改一下舞台大小
          var layer = new EventDemoLayer();
        }

        if(!true){
            var layer = new uiLayer();
        }

        if(!true){
            var layer = new EditBoxTestLayer();
        }

        if(!true){
            // var layer = new ScrollViewTestingLayer();
            var layer = new UIScrollViewTest_Vertical_Multiple();
        }

        if(!true){//自定义节点形状(裁剪)
          // var layer = new diySprRectLayer();
          var layer = new diySprRectLayer1();
        }

        if(!true){
          //winSize(320,480)
          // var layer = new TestLayer();

          var layer = new TestListView();
        }

        this.addChild(layer);

        this.scheduleUpdate();
    },
    update:function(){

    }
})