var baseButton = {
	addButton:function(b_params){
		var _button = new cc.ControlButton();

		if (!b_params.custom) {
            _button.setBackgroundSpriteForState(this.createS9TileFromRes(res.button_normal),      cc.CONTROL_STATE_NORMAL);
            _button.setBackgroundSpriteForState(this.createS9TileFromRes(res.button_highlighted), cc.CONTROL_STATE_HIGHLIGHTED);
            _button.setBackgroundSpriteForState(this.createS9TileFromRes(res.button_disabled),    cc.CONTROL_STATE_DISABLED);
        }
        _button.setPreferredSize(b_params.preferredSize || cc.size(size.width*0.25, size.height*0.13));
        _button.setAnchorPoint(cc.p(0.5, 0.5));
        _button.setPosition(cc.p(b_params.x || size.width*0.5, b_params.y));
        _button.setScale(b_params.scale || 1);

        _button.addTargetWithActionForControlEvents(_button, b_params.callback, cc.CONTROL_EVENT_TOUCH_UP_INSIDE);
        if (b_params.touch_up_outside_callback) {
            _button.addTargetWithActionForControlEvents(_button, b_params.touch_up_outside_callback, cc.CONTROL_EVENT_TOUCH_UP_OUTSIDE);
        }

        if (b_params.string) {
            _button.setTitleForState(b_params.string, cc.CONTROL_STATE_NORMAL);
            _button.setTitleTTFForState('Impact', cc.CONTROL_STATE_NORMAL);
            _button.setTitleTTFSizeForState(size.height*0.07, cc.CONTROL_STATE_NORMAL);
            _button.setTitleColorForState(cc.color(170,170,170), cc.CONTROL_STATE_DISABLED);
        }
        if (b_params.disabled) {
            _button.setEnabled(false);
        }

        b_params.layer.addChild(_button);

        return _button;
	},
	addVedio:function(b_layer){
		var isMobile = false;
		var buttonSize = isMobile ? cc.size(75, 75) : cc.size(120, 120);
		var _this = this;

		var soundButton = this.addButton({
            layer: b_layer,
            x: size.width*0.94,
            y: size.height*0.9,
            preferredSize: buttonSize,
            custom: true,
            callback: function(aTarget) {
                _this.setVolume(aTarget, 'sound', true);
            }
        });
        this.setVolume(soundButton, 'sound');

        var musicButton = this.addButton({
            layer: b_layer,
            x: size.width*0.94,
            y: size.height*0.73,
            preferredSize: buttonSize,
            custom: true,
            callback: function(aTarget) {
                _this.setVolume(aTarget, 'music', true);
            }
        });
        this.setVolume(musicButton, 'music');
	},
	createS9TileFromRes:function(aRes) {
		var isMobile = false;
        return cc.Scale9Sprite.create(aRes, cc.rect(0, 0, 110, 110), isMobile ? cc.rect(15, 15, 80, 80) : cc.rect(25, 25, 65, 65));
    },
    setVolume:function(aTarget, aName, aSwitch) {
    	if (aSwitch) {
            sessionStorage[aName + '_enabled'] = (sessionStorage[aName + '_enabled'] === 'false') ? 'true' : 'false';
            if (sessionStorage.login && sessionStorage.password) {
                helper.sendActionWithDataToServer('update_value', aName + '_enabled', sessionStorage[aName + '_enabled']);
            }
        }
        var isDisabled = sessionStorage[aName + '_enabled'] === 'false';
        if (aName === 'sound') {
            cc.audioEngine.setEffectsVolume(isDisabled ? 0 : 0.5);
        } else {
            cc.audioEngine.setMusicVolume(isDisabled ? 0 : 0.25);
        }
        aTarget.setBackgroundSpriteForState(cc.Scale9Sprite.create(res[aName + (isDisabled ? '_disabled' : '')], cc.rect(0, 0, 120, 120), cc.rect(0, 0, 120, 120)), cc.CONTROL_STATE_NORMAL);
        aTarget.setBackgroundSpriteForState(cc.Scale9Sprite.create(res[aName + (isDisabled ? '' : '_disabled')], cc.rect(0, 0, 120, 120), cc.rect(0, 0, 120, 120)), cc.CONTROL_STATE_HIGHLIGHTED);
    },
    addEditBoxFixedToLayer:function(b_layer, b_params, b_changeCall, b_enterCall) {
        _eb = new cc.EditBox(cc.size(b_params.width, b_params.height), this.createS9TileFromRes(b_params.image));
        _eb.setString("EditBox Sample");
        _eb.setPosition(b_params.position)
        _eb.setInputFlag(b_params.type);
        _eb.setFontColor(cc.color(255, 250, 0));
        _eb.fontSize = _eb.placeHolderFontSize = b_params.fontsize;
        _eb.setPlaceHolder(b_params.placeHolder);
        _eb.setPlaceholderFontColor(cc.color(255, 255, 255));

        var loginLayerEditBoxDelegate = new cc.EditBoxDelegate();
        loginLayerEditBoxDelegate.editBoxTextChanged = b_changeCall.bind(this);
        loginLayerEditBoxDelegate.editBoxReturn = b_enterCall.bind(this);

        _eb.setDelegate(loginLayerEditBoxDelegate);
        b_layer.addChild(_eb);

        return _eb;
    }
};

var addSprite = cc.Sprite.extend({
    ctor:function(b_layer, b_params){
        this._super(b_layer, b_params);

        if(false || b_params.rect){
            this.initWithFile(b_params.image,cc.rect(0, 0, b_params.animation.width, b_params.animation.height));
        }else{
            this.initWithFile(b_params.image);
        }
        this.x = b_params.x;
        this.y = b_params.y;

        if(b_params.listener){
        	this.loadListener();
        }

        if(b_params.animation && b_params.animation.todo){
            this.addAni(this, b_params);
        }

        b_layer.addChild(this);
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
        var pos = touch.getLocation();
        var locationInNode = self.convertToNodeSpace(touch.getLocation());
        var _size = self.getContentSize();
        var rect = cc.rect(0, 0, _size.width, _size.height);
        if (!cc.rectContainsPoint(rect, locationInNode)) {
            return false;
        }
        return true;
    },
    onTouchMoved : function (touch, event) {
        var self = this.target;
        var pos = touch.getLocation();
        var target = event.getCurrentTarget();

        self.onTouchDispose(touch, event);
    },
    onTouchEnded : function (touch, event) {
        var self = this.target;
        var target = event.getCurrentTarget();
    },
    onTouchDispose : function(touch, event){//处理点击
        var target = event.getCurrentTarget();
        var pos = touch.getLocation();
        target.x = pos.x;
        target.y = pos.y;
        console.log(parseInt(target.x),parseInt(target.y))
    },
    addAni : function(b_which, b_params){
        var texture = cc.textureCache.addImage(b_params.image);
        var sprFrames = [];
        for(var i = 0; i < b_params.animation.length; i++){
        	var spr = new cc.SpriteFrame(texture,cc.rect(b_params.animation.start_w*i, b_params.animation.start_h, b_params.animation.width, b_params.animation.height));
        	sprFrames.push(spr);
        }
        var animation = new cc.Animation(sprFrames, b_params.animation.time);
        animation.setRestoreOriginalFrame(b_params.animation.returnFirst)
        var animate = new cc.animate(animation);
        if(b_params.animation.repeat){
            animate.repeatForever();
        }

        b_which.runAction(animate);

        return animate;
    }
});

/*use*/

// var testSrite = new addSprite(this, {
//     "x" : size.width/2,
//     "y" : size.height/2,
//     "image" : res.canvas,
//     "rect" : true,
//     "animation" : {
//         "todo"    : true,
//         "length"  : 8,
//         "time"    : 0.2,
//         "start_w" : 80,
//         "start_h" : 0,
//         "width"   : 80,
//         "height"  : 80,
//         "returnFirst" : true,
//         "repeat"  : false
//     },
//     "listener" :true
// });

// var loginEditBox = baseButton.addEditBoxFixedToLayer(this, {
//     "width" : size.width*0.3,
//     "height": size.height*0.12,
//     "image" : res.editbox,
//     "position" : cc.p(size.width/2, size.height/2),
//     "type" : cc.EDITBOX_INPUT_FLAG_PASSWORD,
//     "fontsize" : 20,
//     "placeHolder" : "please enter password"
// }, function(){
//     console.log("changeCall");
// }, function(){
//     console.log("enterCall");
// });