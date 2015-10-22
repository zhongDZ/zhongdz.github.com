window.onload = function(){
        resourceCallBack();
    }
var MyLoaderScene = cc.Scene.extend({
    _interval : null,
    _length : 0,
    _count : 0,
    _label : null,
    _className:"MyLoaderScene",
    init : function(){
        var self = this;

        //logo
        var logoWidth = 160;
        var logoHeight = 200;

        // bg
        var bgLayer = self._bgLayer = cc.LayerColor.create(cc.color(32, 32, 32, 255));
        bgLayer.setPosition(cc.visibleRect.bottomLeft);
        self.addChild(bgLayer, 0);

        //image move to CCSceneFile.js
        var fontSize = 24, lblHeight =  -logoHeight / 2 + 100;
        var size = cc.director.getWinSize();
        var beginbackground = cc.Sprite.create(g_loadingPage);
        beginbackground.setPosition(size.width / 2, size.height / 2);
        beginbackground.setScale(1);
        bgLayer.addChild(beginbackground, 0);
        //loading percent

        var label = self._label = cc.LabelTTF.create("Loading... 0%", "Arial", fontSize);
        label.setPosition(size.width / 2, size.height / 2-200);
        label.setColor(cc.color(255, 255, 255));
        bgLayer.addChild(this._label, 10);
        return true;
    },

    _initStage: function (img, centerPos) {
        var self = this;
        var texture2d = self._texture2d = new cc.Texture2D();
        texture2d.initWithElement(img);
        texture2d.handleLoadedTexture();
        var logo = self._logo = cc.Sprite.create(texture2d);
        logo.setScale(cc.contentScaleFactor());
        logo.x = centerPos.x;
        logo.y = centerPos.y;
        self._bgLayer.addChild(logo, 10);
    },

    onEnter: function () {
        var self = this;
        cc.Node.prototype.onEnter.call(self);
        self.schedule(self._startLoading, 0.3);
    },

    onExit: function () {
        cc.Node.prototype.onExit.call(this);
        var tmpStr = "Loading... 100%";
        this._label.setString(tmpStr);
    },

    /**
     * init with resources
     * @param {Array} resources
     * @param {Function|String} cb
     */
    initWithResources: function (resources, cb) {
        if(typeof resources == "string") resources = [resources];
        this.resources = resources || [];
        this.cb = cb;
    },

    _startLoading: function () {
        var self = this;
        self.unschedule(self._startLoading);
        var res = self.resources;
        cc.loader.load(res,
            function (result, count, loadedCount) {
                var percent = (loadedCount / count * 100) | 0;
                percent = Math.min(percent, 100);
                self._label.setString("Loading... " + percent + "%");
            }, function () {
                if (self.cb)
                    self.cb();
            });
    },

    _updatePercent: function () {
        var self = this;
        var count = self._count;
        var length = self._length;
        var percent = (count / length * 100) | 0;
        percent = Math.min(percent, 100);
        self._label.setString("Loading... " + percent + "%");
        if(count >= length) self.unschedule(self._updatePercent);
    }
});
MyLoaderScene.preload = function(resources, cb){
    var _myLoaderScene = null;
    if(!_myLoaderScene) {
        _myLoaderScene = new MyLoaderScene();
        _myLoaderScene.init();
    }
    _myLoaderScene.initWithResources(resources, cb);

    cc.director.runScene(_myLoaderScene);
    return _myLoaderScene;
};
var thisismobile = false;
if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
    thisismobile = true;

}else{
    thisismobile = false;
}


function resourceCallBack(){
    cc.game.onStart = function(){
        cc.view.adjustViewPort(true);
        if(thisismobile){
            cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.EXACT_FIT);
        }else{
            cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL);
        }
        cc.view.resizeWithBrowserSize(true);
        //load resources
        MyLoaderScene.preload(g_resources, function () {
            cc.director.runScene(new StartScene());
        }, this);
    };
    cc.game.run("gameCanvas");
}

/*==========================startScene.js=======================*/
var StartLayer = cc.Layer.extend
({
    startNewGame: function()
    {
        cc.director.runScene(new GameScene());
    },
    
    ctor: function()
    {
        this._super();
        var _this = this;
        var size = cc.director.getWinSize();

        var bg = new cc.Sprite(res.beginBg);
        bg.width = pW(1);
        bg.height = pH(1);
        bg.setAnchorPoint(0.5, 0.5);
        bg.setPosition(pW(0.5), pH(0.5));
        this.addChild(bg, 0);

        var guizeBg = new cc.Sprite(res.guizeBg);
        guizeBg.width = pW(1);
        guizeBg.height = pH(1);
        guizeBg.setAnchorPoint(0.5, 0.5);
        guizeBg.setPosition(pW(0.5), pH(0.5));
        
        var menuItemPlay= new cc.MenuItemImage(res.beginbut,res.beginbut,
            this.startNewGame,
        this);
        menuItemPlay.setScale(1);
        var menu = new cc.Menu(menuItemPlay);
        menu.x = size.width/2;
        menu.y = size.height/2 + 130;
        this.addChild(menu, 2);

        var guizeItemPlay= new cc.MenuItemImage(res.guize,res.guize,function(){
            _this.addChild(guizeBg, 0);
            _this.addChild(menu2, 2);
            _this.removeChild(bg);
            _this.removeChild(menu);
            _this.removeChild(menu1);
        },this);
        guizeItemPlay.setScale(1);
        var menu1 = new cc.Menu(guizeItemPlay);
        menu1.setPosition(pW(0.5), pH(0.5) + 30);
        this.addChild(menu1, 2);

        var backItemPlay= new cc.MenuItemImage(res.back,res.back,function(){
            _this.removeChild(guizeBg);
            _this.removeChild(menu2);
            _this.addChild(bg);
            _this.addChild(menu);
            _this.addChild(menu1);
        },this);
        var menu2 = new cc.Menu(backItemPlay);
        menu2.setPosition(pW(0.5), pH(0.4) - 20);
        
        return true;
    }
});

var StartScene = cc.Scene.extend
({
    onEnter: function()
    {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});
/*==========================startScene.js=======================*/


/*==========================endScene.js=======================*/
var EndLayer = cc.Layer.extend
({
    restartGame: function()
    {
        cc.director.runScene(new StartScene());
    },

    ctor: function(score)
    {
        this._super();

        var size = cc.director.getWinSize();

        var bg = new cc.Sprite(res.endBg);
        bg.width = pW(1);
        bg.height = pH(1);
        bg.setAnchorPoint(0.5, 0.5);
        bg.setPosition(pW(0.5), pH(0.5));
        this.addChild(bg, 0);

        var menuItemPlay= new cc.MenuItemImage(res.again,res.again,
            this.restartGame
        ,this);
        var menu = new cc.Menu(menuItemPlay);
        menu.x = size.width/2 + 120;
        menu.y = size.height/2 - 100;
        this.addChild(menu, 2);


        var moreItem= new cc.MenuItemImage(res.more,res.more,function(){
            window.location.href = g_link;
        },this);
        var menu1 = new cc.Menu(moreItem);
        menu1.x = size.width/2 - 120;
        menu1.y = size.height/2 - 100;
        this.addChild(menu1, 2);

        var endScore = new cc.LabelTTF(""+score+"",'blod Arial',42);
        endScore.x = size.width/2 + 190;
        endScore.y = size.height/2 + 40;
        endScore.fillStyle = cc.color(255,0,0,255)
        this.addChild(endScore,1000);

        /*====================动态修改微信title和desc====================*/
        var _percent = 0;
        if(score == 0){
            _percent = 0;
        }else if(score<3){
            _percent = parseInt(Math.random()*20+50);
        }else if(score<8){
            _percent = parseInt(Math.random()*20+70);
        }else{
            _percent = parseInt(Math.random()*9+90);
        }
        $.dataConf = {
            "score": score,
            "percent":_percent
        };
        console.log($.dataConf)
        $.weixin();
        /*====================动态修改微信title和desc====================*/ 

        return true;
    }
});

var EndScene = cc.Scene.extend
({
    score: 0,
    
    setScore: function(sc)
    {
        this.score = sc;
        return this;
    },
    
    onEnter: function()
    {
        this._super();
        var layer = new EndLayer(this.score);
        this.addChild(layer);
    }
});
/*==========================endScene.js=======================*/

/*==========================gameScene.js=======================*/
var GAME_SPEED = 0.06;
var livesArr = [res.lives0,res.lives1,res.lives2,res.lives3,res.lives4,res.lives5];
var g_lives = 5;
function pW(arg)
{
    return cc.winSize.width * arg;
}

function pH(arg)
{
    return cc.winSize.height * arg;
}

var ManSprite = cc.Sprite.extend
({
    leftAnimate: null,
    leftAction: null,
    leftTimer: null,
    rightAnimate: null,
    rightAction: null,
    rightTimer: null,
    standFrame: null,
    speed: 20,
    g_speed: 0,
    g_aspeed: 1,
    block_speed: 0,
    blocking: false,
    max_hp: 5,
    hp: 5,
    
    ctor: function(width, height)
    {
        this._super(res.ani1);


        var left_frames = [];
        var right_frames = [];

        var texture_l = cc.textureCache.addImage(res.ani_r);//添加纹理到缓存
        var texture_r = cc.textureCache.addImage(res.ani_l);//添加纹理到缓存

        this.standFrame = new cc.SpriteFrame(texture_l,cc.rect(100 * 1,0,100,148));

        left_frames[0] = new cc.SpriteFrame(texture_l,cc.rect(100 * 0,0,100,148));
        left_frames[1] = new cc.SpriteFrame(texture_l,cc.rect(100 * 1,0,100,148));
        left_frames[2] = new cc.SpriteFrame(texture_l,cc.rect(100 * 0,0,100,148));
        left_frames[3] = new cc.SpriteFrame(texture_l,cc.rect(100 * 1,0,100,148));

        right_frames[0] = new cc.SpriteFrame(texture_r,cc.rect(100 * 0,0,100,148));
        right_frames[1] = new cc.SpriteFrame(texture_r,cc.rect(100 * 1,0,100,148));
        right_frames[2] = new cc.SpriteFrame(texture_r,cc.rect(100 * 0,0,100,148));
        right_frames[3] = new cc.SpriteFrame(texture_r,cc.rect(100 * 1,0,100,148));

        this.leftAnimate = cc.Animate.create(new cc.Animation(left_frames, 0.1));
        this.leftAnimate.retain();
        this.rightAnimate = cc.Animate.create(new cc.Animation(right_frames, 0.1));
        this.rightAnimate.retain();
        this.y = pH(0.7);
        var content_size = this.getContentSize();
        var scale_x = width / content_size.width;
        var scale_y = height / content_size.height;
        this.setAnchorPoint(cc.p(0.5, 0.5));
        this.setScale(scale_x, scale_y);
        this.setContentSize(width, height);
        this.schedule(this.fallingDown, GAME_SPEED / 2);
    },

    walkLeft: function()
    {
        if(this.rightAction)
        {
            this.stopAction(this.rightAction);
            this.rightAction = null;
            this.unschedule(this.moveRight);
        }
        if(!this.leftAction)
        {
            this.leftAction = this.runAction(cc.RepeatForever.create(this.leftAnimate));
            this.schedule(this.moveLeft, GAME_SPEED);
        }
    },
    
    moveLeft: function()
    {
        if(this.x - this.speed >= this.width / 2)
        {
            this.x -= this.speed;
        }
    },
    
    walkRight: function()
    {
        if(this.leftAction)
        {
            this.stopAction(this.leftAction);
            this.leftAction = null;
            this.unschedule(this.moveLeft);
        }
        if(!this.rightAction)
        {
            this.rightAction = this.runAction(cc.RepeatForever.create(this.rightAnimate));
            this.schedule(this.moveRight, GAME_SPEED);
        }
    },
    
    moveRight: function()
    {
        if(this.x + this.speed <= pW(1) - this.width / 2)
        {
            this.x += this.speed;
        }
    },
    
    stopWalk: function()
    {
        if(this.rightAction)
        {
            this.stopAction(this.rightAction);
            this.rightAction = null;
            this.unschedule(this.moveRight);
        }
        if(this.leftAction)
        {
            this.stopAction(this.leftAction);
            this.leftAction = null;
            this.unschedule(this.moveLeft);
        }
        this.setSpriteFrame(this.standFrame);
    },
    
    fallingDown: function()
    {
        if(this.blocking)
        {
            this.y += this.block_speed;
        }
        else
        {
            this.g_speed += this.g_aspeed;
            this.y -= this.g_speed;
        }
        if(this.y + this.height / 2 >= pH(0.9))
        {
            this.y -= 51;
            this.damage(1);
        }
        else if(this.y <= pH(0.1))
        {
            this.damage(this.max_hp);
        }
    },
    
    die: function()
    {
        this.unschedule(this.fallingDown);
        this.g_speed = 0;
        this.g_aspeed = 0;
        this.blocking = false;
        this.x = -100;
        cc.director.runScene((new EndScene()).setScore(parseInt(this.getParent().score)));
        this.getParent().man = null;
        this.getParent().removeChild(this);
    },
    
    damage: function(arg)
    {
        this.hp -= arg;
        if(this.hp <= 0)
        {
            this.die();
        }
        else
        {
            this.getParent().lblLives.initWithFile(livesArr[this.hp]);
            this.getParent().lblLives.setAnchorPoint(cc.p(1,1));
        }
    },
    
    recovery: function(arg)
    {
        this.hp += arg;
        if(this.hp > this.max_hp)
        {
            this.hp = this.max_hp;
        }
        this.getParent().lblLives.initWithFile(livesArr[this.hp]);
        this.getParent().lblLives.setAnchorPoint(cc.p(1,1));
    }
});

/*
 * 0：普通
 * 1：2秒后消失
 * 2：掉血
 * 3：弹跳
 * 4：向左移动
 * 5：向右移动
 * 6：快速上升
 * 7：负重力
 * 8：加血
 * 9：加速
 */
var blockArr = [res.block0,res.block1,res.block2,res.block3,res.block4,res.block5,res.block6,res.block7,res.block8,res.block9,]
var BlockSprite = cc.Sprite.extend
({
    speed: 7.5,
    block_index: 0,
    
    ctor: function(width, height, tx, ty, index)
    {
        this._super(blockArr[index]);
        var content_size = this.getContentSize();
        var scale_x = width / content_size.width;
        var scale_y = height / content_size.height;
        this.setAnchorPoint(cc.p(0.5, 0.5));
        this.setScale(scale_x, scale_y);
        this.setContentSize(width, height);
        this.setPosition(tx, ty);
        this.schedule(this.moveUp, GAME_SPEED / 2);
        this.block_index = index;
    },
    
    moveUp: function()
    {
        var b = this.getParent().man_block;
        var man = this.getParent().man;
        if(man != null && man.hp > 0 && (b == null || b == this))
        {
            if(man.x + man.width / 2 >= this.x - this.width / 2 && man.x - man.width / 2 <= this.x + this.width / 2 && Math.abs(man.y - man.height / 2 - (this.y + this.height / 2)) <= 50)
            {
                if(this.block_index != 3 && this.block_index != 7 || (this.block_index == 3 && man.g_speed > 0) || (this.block_index == 7 && man.g_aspeed > 0))
                {
                    man.y = this.y + this.height / 2 + man.height / 2;
                    man.g_speed = 0;
                }
                var parent = this.getParent();
                var that = this;
                if(!man.blocking)
                {
                    switch(this.block_index)
                    {
                    case 1:
                        this.scheduleOnce(
                                function()
                                {
                                    parent.removeChild(that);
                                    if(man != null && man.hp > 0 && man.x + man.width / 2 >= that.x - this.width / 2 && man.x - man.width / 2 <= that.x + that.width / 2 && Math.abs(man.y - man.height / 2 - (that.y + that.height / 2)) <= 50)
                                    {
                                        man.blocking = false;
                                        man.block_speed = 0;
                                        parent.man_block = null;
                                    }
                                }, 1.5);
                        break;
                    case 2:
                        man.damage(1);
                        break;
                    case 3:
                        man.g_speed = -25;
                        break;
                    case 6:
                        this.speed = 12;
                        break;
                    case 7:
                        man.g_aspeed = -1;
                        this.scheduleOnce(
                                function()
                                {
                                    if(man != null && man.hp > 0)
                                    {
                                        man.g_aspeed = 1;
                                    }
                                }, 0.75);
                        break;
                    case 8:
                        man.recovery(2);
                        break;
                    case 9:
                        man.speed = 40;
                        this.scheduleOnce(
                                function()
                                {
                                    if(man != null && man.hp > 0)
                                    {
                                        man.speed = 20;
                                    }
                                }, 0.75);
                        break;
                    }
                }
                else
                {
                    switch(this.block_index)
                    {
                    case 4:
                        man.x -= 5;
                        break;
                    case 5:
                        man.x += 5;
                        break;
                    }
                }
                if(this.block_index != 3 && this.block_index != 7)
                {
                    man.blocking = true;
                    man.block_speed = this.speed;
                    this.getParent().man_block = this;
                }
            }
            else
            {
                if(b == this)
                {
                    man.blocking = false;
                    man.block_speed = 0;
                    this.getParent().man_block = null;
                }
            }
        }
        
        if(this.y + this.speed <= this.getParent().height + this.height / 2)
        {
            this.y += this.speed;
        }
        else
        {
            this.getParent().removeChild(this);
        }
    }
});

var HPSprite = cc.Sprite.extend
({
    hp_blocks: null,
    
    ctor: function()
    {
        this._super();
        this.width = pW(1);
        this.height = pH(1);
        this.x = pW(1);
        this.y = pH(1);
        this.hp_blocks = new Array();
        for(var i = 0; i < 5; i++)
        {
            var hpsprite = new cc.Sprite(res.hp_1);
            hpsprite.setScale(pW(0.05)/ hpsprite.width, pW(0.05)/ hpsprite.width);
            hpsprite.width = pW(0.05);
            hpsprite.height = pH(0.05);
            hpsprite.setAnchorPoint(0.5, 0.5);
            hpsprite.setPosition(pW(0.05) * i + pW(0.025), 0);
            this.hp_blocks.push(hpsprite);
            this.addChild(hpsprite, 1);
        }
    },
    
    changeHP: function(arg)
    {
        var texture0 = cc.textureCache.addImage(res.hp_0);//添加纹理到缓存
        var texture1 = cc.textureCache.addImage(res.hp_1);//添加纹理到缓存

        this.standFrame0 = new cc.SpriteFrame(texture0,cc.rect(64 * 0,0,64,180));
        this.standFrame1 = new cc.SpriteFrame(texture1,cc.rect(64 * 0,0,64,180));

        var i = 0;
        for(i = 0; i < arg; i++)
        {
            this.hp_blocks[i].setSpriteFrame(this.standFrame1);
        }
        for(i = arg; i < 5; i++)
        {
            this.hp_blocks[i].setSpriteFrame(this.standFrame0);
        }
    }
});

var GameLayer = cc.Layer.extend
({
    man_block: null,
    man: null,
    score: 0,
    gaming: false,
    lblLives:null,

    
    startNewGame: function()
    {
        this.score = 0;
        this.man = new ManSprite(pW(0.1), pH(0.1));
        this.addChild(this.man, 1);
        this.gaming = true;
        this.man.x = this.createBlocks().x;
        this.schedule(this.createBlocks, 2);
        this.schedule(this.updateScore, 7);
    },
    
    createBlocks: function()
    {
        var block = new BlockSprite(pW(0.25), pH(0.03), pW(Math.random()), pH(0), parseInt(Math.random() * 10));
        this.addChild(block, 1);
        return block;
    },
    
    updateScore: function()
    {
        if(this.man != null && this.man.hp > 0)
        {
            this.score++;
            this.DistanceLabel.setString(this.score)
        }
    },
    
    ctor: function()
    {
        this._super();

        var size = cc.director.getWinSize();
        
        var bg = new cc.Sprite(res.gameBg);
        bg.width = pW(1);
        bg.height = pH(1);
        bg.setAnchorPoint(0.5, 0.5);
        bg.setPosition(pW(0.5), pH(0.5));
        this.addChild(bg, 0);

        var knife_bottom = new cc.Sprite(res.knife);
        knife_bottom.setScale(pW(1)/knife_bottom.width, 1);
        knife_bottom.width = pW(1);
        knife_bottom.height = pH(0.02);
        knife_bottom.setAnchorPoint(0.5, 0.5);
        knife_bottom.setPosition(pW(0.5), pH(0.925));
        this.addChild(knife_bottom, 2);
        
        
        var score_top = new cc.Sprite(res.topBar);
        score_top.setScale(pW(1)/score_top.width, 1);
        score_top.width = pW(1);
        score_top.height = pH(0.08);
        score_top.setAnchorPoint(0.5, 0.5);
        score_top.setPosition(pW(0.5), pH(0.975));
        this.addChild(score_top, 2);

        //生命
        this.lblLives = new cc.Sprite(livesArr[g_lives]);
        this.lblLives.setAnchorPoint(cc.p(1,1));
        this.lblLives.setPosition(cc.p(size.width,size.height - 6));
        this.addChild(this.lblLives,100);

        this.DistanceLabel = new cc.LabelTTF("0",'Arial',36);
        this.DistanceLabel.x = 115;
        this.DistanceLabel.y = size.height - 35;
        this.DistanceLabel.fillStyle = cc.color(255,0,0,255)
        this.addChild(this.DistanceLabel,1000);
        
        var flip_listener = cc.EventListener.create
        ({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            lastX: 0,
            swallowTouches: true,

            onTouchBegan: function(touch, event)
            {
                if(!event.getCurrentTarget().gaming || event.getCurrentTarget().man == null || event.getCurrentTarget().man.hp <= 0)
                {
                    return true;
                }
                this.lastX = touch.getLocation().x;
                return true;
            },

            onTouchMoved: function(touch, event)
            {
                if(!event.getCurrentTarget().gaming || event.getCurrentTarget().man == null || event.getCurrentTarget().man.hp <= 0)
                {
                    return true;
                }
                var cur_x = touch.getLocation().x;
                if(cur_x > this.lastX + 2.5)
                {
                    event.getCurrentTarget().man.walkRight();
                }
                else if(cur_x < this.lastX - 2.5)
                {
                    
                    event.getCurrentTarget().man.walkLeft();
                }
                this.lastX = cur_x;
                return true;
            },

            onTouchEnded: function(touch, event)
            {
                if(!event.getCurrentTarget().gaming || event.getCurrentTarget().man == null || event.getCurrentTarget().man.hp <= 0)
                {
                    return true;
                }
                event.getCurrentTarget().man.stopWalk();
                return true;
            }
        });
        
        cc.eventManager.addListener(flip_listener, this);
        
        this.startNewGame();
        return true;
    }
});

var GameScene = cc.Scene.extend
({
    onEnter: function()
    {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});
/*==========================gameScene.js=======================*/