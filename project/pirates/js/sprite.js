/**
* 菜单按钮的构造方法
* @param n string 
* @param _res string 资源
* @param _x Num 水平坐标
* @param _y Num 竖直坐标
* @param _y Function 回调
*/
var menuFactor = function(_n, _res, _x, _y, _callFun){
    var _menuItem = new cc.MenuItemImage(_res, _res, _callFun, _n);
    var _menuItemMenu = new cc.Menu(_menuItem);
    _menuItemMenu.x = _x;
    _menuItemMenu.y = _y;
    _n.addChild(_menuItemMenu)
    return _menuItemMenu;
}

var Background = cc.Sprite.extend({
    yy:0,
    xx:0,
    ctor:function(_res, tick){
        this._super();
        // this.initWithFile(_res);
        spriteFrame = cc.spriteFrameCache.getSpriteFrame(_res);
        this.initWithSpriteFrame(spriteFrame);

        this.tick = tick;
    },
    update: function (a,b,c) {
        this.xx-= this.tick;
        this.yy=a;
        if(this.xx<b){
            this.xx=c;
        }
        this.setPosition(this.xx,this.yy);
    }
});

var aniSprite = cc.Sprite.extend({
    texture:null,
    ctor:function(_res){
        this._super();

        this.texture = cc.textureCache.addImage(_res);//添加纹理到缓存
        var standFrame = new cc.SpriteFrame(this.texture,cc.rect(0,0, 356, 209));
        this.setSpriteFrame(standFrame);
    },
    AddAnimation : function(){
        this.stopAllActions();
        var _frames = [];
        for(var i = 0; i < 5; i++){
            var frame = new cc.SpriteFrame(this.texture,cc.rect(356 * i, 0, 356, 209));
            _frames.push(frame);
        }
        var _Animation = new cc.Animation(_frames, 0.01);
        _Animation.setRestoreOriginalFrame(true);
        // var _Animate = cc.Animate.create(_Animation).repeatForever();
        var _Animate = cc.Animate.create(_Animation);
        this.runAction(_Animate);
    }
});

// var gameBg = new getPosSprite(this, res.gameBg, 0, 0, true);
var getPosSprite = cc.Sprite.extend({
    name : 'getPosition',
    ctor : function(_n, _res, _x, _y, _listener){
        this._super();
        this.initWithFile(_res);

        this.x = _x == null || undefined ? size.width/2 : _x;

        this.y = _y == null || undefined ? size.height/2 : _y;

        _n.addChild(this);

        this._listener = _listener == null || undefined ? false : _listener;

        if(_listener){
            this.loadListener();
        }
    },
    loadListener : function(){
        var listener = cc.EventListener.create({
            event           : cc.EventListener.TOUCH_ONE_BY_ONE,
            target          : this,
            swallowTouches  : true,
            onTouchBegan    : this.onTouchBegan,
            onTouchMoved    : this.onTouchMoved,
            onTouchEnded    : this.onTouchEnded
        });
        cc.eventManager.addListener(listener, this);
    },
    onTouchBegan: function (touch, event) {
        var self = this.target;
        var locationInNode = self.convertToNodeSpace(touch.getLocation());
        var size = self.getContentSize();
        var rect = cc.rect(0, 0, size.width, size.height);
        if (!cc.rectContainsPoint(rect, locationInNode)) {
            return false;
        }
        // 触摸处理
        self.onTouchDispose();
        return true;

    },
    onTouchMoved : function (touch, event) {
        var self = this.target;
        var pos = touch.getLocation();
        self.x = pos.x;
        self.y = pos.y;
    },
    onTouchEnded : function (touch, event) {
        var self = this.target;
        console.log(Math.ceil(self.x), Math.ceil(self.y));
    },
    onTouchDispose : function(){
    }
});


/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
var sprFactory = cc.Sprite.extend({
    name : 'sprFactory',
    ctor : function(_n, _res, _x, _y, _addListener, _callFun, _point){
        this._super();
        spriteFrame = cc.spriteFrameCache.getSpriteFrame(_res);
        this.initWithSpriteFrame(spriteFrame);

        this.x = _x == null || undefined ? 0 : _x;

        this.y = _y == null || undefined ? 0 : _y;

        // this.scale = 1.2;
        this.scale = 1;

        // this.scaleX = _sx == null || undefined ? 1 : _sx;

        // this.scaleY = _sy == null || undefined ? 1 : _sy;

        _n.addChild(this);

        if(_addListener){
            this._callFun = _callFun;
            this.loadListener();
        }

        if(_point){
            this.addPoint();
        }
    },
    addPoint : function(){
        var point = new cc.Sprite(res.point);
        point.anchorX = point.anchorY = 0.5;
        point.scale = 1;
        point.x = this.getBoundingBox().width * 3 / 4;
        point.y = this.getBoundingBox().height * 3 / 4;
        this.addChild(point, -1);
    },
    addTxt : function(_txt, _x, _y){
        var txt = new cc.LabelTTF(_txt, "Arial", 32, cc.size(120, 32), cc.TEXT_ALIGNMENT_CENTER);
        var _thisSize = this.getBoundingBox();
        var txtSize = txt.getBoundingBox();
        txt.setPosition(_thisSize.width/2 + _x, _thisSize.height/2 + _y);
        txt.setColor(cc.color(255, 255, 255));
        this.addChild(txt);
    },
    loadListener : function(){
        var listener = cc.EventListener.create({
            event           : cc.EventListener.TOUCH_ONE_BY_ONE,
            target          : this,
            swallowTouches  : true,
            onTouchBegan    : this.onTouchBegan,
            onTouchMoved    : this.onTouchMoved,
            onTouchEnded    : this.onTouchEnded
        });
        cc.eventManager.addListener(listener, this);
    },
    onTouchBegan: function (touch, event) {
        var self = this.target;
        var locationInNode = self.convertToNodeSpace(touch.getLocation());
        var size = self.getContentSize();
        var rect = cc.rect(0, 0, size.width, size.height);
        if (!cc.rectContainsPoint(rect, locationInNode)) {
            return false;
        }
        // 触摸处理
        self.onTouchDispose();
        return true;

    },
    onTouchMoved : function (touch, event) {
        var self = this.target;
    },
    onTouchEnded : function (touch, event) {
        var self = this.target;
    },
    onTouchDispose : function(){
        this._callFun();
    }
});