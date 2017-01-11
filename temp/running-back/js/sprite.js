var sprFactory = cc.Sprite.extend({
    name : 'sprFactory',
    ctor : function(_n, _res, _x, _y, _callFun, _getPos){
        this._super();
        // spriteFrame = cc.spriteFrameCache.getSpriteFrame(_res);
        // this.initWithSpriteFrame(spriteFrame);
        this.initWithFile(_res);

        this.x = _x == null || undefined ? 0 : _x;

        this.y = _y == null || undefined ? 0 : _y;

        this._getPos = _getPos;

        _n.addChild(this);

        if(_callFun != undefined && _callFun != null && typeof(_callFun) == 'function'){
            this._callFun = _callFun;
            this.loadListener();
        }
    },
    addTxt : function(_txt, _x, _y, _color){
        if(_x == null || _x == ''){
            _x = 0;
        }
        if(_y == null || _y == ''){
            _y = 0;
        }
        if(_color == null || _color == ''){
            _color = cc.color(255, 255, 255);
        }else{
            _color = _color;
        }
        var txt = this.txt = new cc.LabelTTF(_txt, "Arial", 32, cc.size(220, 32), cc.TEXT_ALIGNMENT_CENTER);
        var _thisSize = this.getBoundingBox();
        var txtSize = txt.getBoundingBox();
        txt.setPosition(_thisSize.width/2 + _x, _thisSize.height/2 + _y);
        txt.setColor(_color);
        this.addChild(txt);
    },
    initHead : function(_x, _y, _s){
        var sprite = new cc.Sprite(res.defaultHead);
        sprite.setLocalZOrder(-1);
        this.addChild(sprite);
        sprite.scale = _s;
        sprite.x = _x;
        sprite.y = _y;
    },
    returnTag : function(){
        return this.tag;
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
        return true;
    },
    onTouchMoved : function (touch, event) {
        var self = this.target;

        if(self._getPos){
            var pos = touch.getLocation();
            self.x = pos.x;
            self.y = pos.y;
        }
    },
    onTouchEnded : function (touch, event) {
        var self = this.target;

        if(self._getPos){
            console.log(Math.floor(self.x), Math.floor(self.y));
        }

        // 触摸处理
        self.onTouchDispose();
    },
    onTouchDispose : function(){
        this._callFun();
    }
});