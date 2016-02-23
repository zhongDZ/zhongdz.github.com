
var MenuLayer = cc.Layer.extend({
    ctor : function(){
        //1. call super class's ctor function
        this._super();

    },
    init:function(){
        this._super();

        //2. get the singleton director
        var director = cc.Director.getInstance();
        //3. get the screen size of your game canvas
        var winsize = director.getWinSize();
        //4. calculate the center point
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

        //5. create a background image and set it's position at the center of the screen
        var spritebg = cc.Sprite.create(s_HelloBG);
        spritebg.setPosition(centerpos);
        this.addChild(spritebg);

        //6.create a menu and assign onPlay event callback to it
        cc.MenuItemFont.setFontSize(60);
        var menuItemPlay= cc.MenuItemSprite.create(
            cc.Sprite.create(s_start_n),
            cc.Sprite.create(s_start_s),
            this.onPlay, this);
        var menu = cc.Menu.create(menuItemPlay);
        menu.setPosition(centerpos);
        this.addChild(menu);

        //preload audio resources
        var audioEngine = cc.AudioEngine.getInstance();
        audioEngine.preloadMusic(s_music_background);
        audioEngine.preloadEffect(s_music_jump);
        audioEngine.preloadEffect(s_music_pickup_coin);

    },

    //this is the callback when the menu is clicked
    onPlay : function(){
        cc.log("==onplay clicked");
        var director = cc.Director.getInstance();
        director.replaceScene(new PlayScene());
    }
});

var MenuScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new MenuLayer();
        layer.init();
        this.addChild(layer);
    }
});
