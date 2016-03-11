var beginState = function(e){
    function t() {
        e.call(this);
        this.initiliazed = false;
        this.init();
    }
    __extends(t, e);
    t.prototype.cleanup = function () {
        console.log('cleanup');
    };
    t.prototype.resume = function () {
        console.log('resume')
    };
    t.prototype.init = function () {
        this.initiliazed = true;

        this.bg = new BitmapFactory(this,'mainBg');

        this.beginBtn = new BitmapFactory(this,'beginbut',Game.w2,Game.h2);

        this.beginBtn.addEventListener("click",function(){
            StateManager.g_instance.changeState(gameState);
        });
    };
    t.prototype.isInitiliazed = function () {
        return this.initiliazed;
    };
    return t;
}(createjs.Container);

var endState = function(e){
    function t() {
        e.call(this);
        this.initiliazed = false;
        var n = this;
    }
    __extends(t, e);
    t.prototype.cleanup = function () {};
    t.prototype.resume = function () {};
    t.prototype.init = function () {
        this.initiliazed = true;
    };
    t.prototype.isInitiliazed = function () {
        return this.initiliazed
    };
    return t;
}(createjs.Container);

var gameState = function(e){
    function t() {
        e.call(this);
        //时间bar
        this.timeage=0;
        this.initiliazed = false;
        this.init();
    }
    __extends(t, e);
    t.prototype.cleanup = function () {};
    t.prototype.resume = function () {};
    t.prototype.init = function () {
        this.initiliazed = true;
        this.bg = new BitmapFactory(this,'mainBg');

        var data = new createjs.SpriteSheet({
            "images":[StateManager.g_instance.getResult('runningGrant')],
            "frames": {"regX": 0, "regY": 0, "width": 165, "height": 292, "count": 64},
            "animations": {"run": [0, 25, "jump", 1.5], "jump": [26, 63, "run"]}
            //              name   start end next time
        });

        var aniTest = new createjs.Sprite(data,'jump');
        aniTest.framerate = 30;
        this.addChild(aniTest);
    };
    t.prototype.isInitiliazed = function () {
        return this.initiliazed;
    };

    t.prototype.update = function (n) {
        this.timeage++;
    };

    return t;
}(createjs.Container);
