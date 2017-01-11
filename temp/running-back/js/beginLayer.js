var beginLayer = cc.Layer.extend({
    name : 'beginLayer',
    canTouch : true,
	ctor : function(_scene){
		this._super(_scene);

		this.init(_scene);

		this.initTitle();

		this.initBtn();
	},
    init : function(_scene){
        this.ignoreAnchorPointForPosition(false);

        this.anchorX = 0.5;

        this.anchorY = 0.5;

        this.size = cc.size(size.width, size.height);

        this.x = size.width/2;

        this.y = size.height/2;

        this._scene = _scene;
    },
    initTitle : function(){
        var _person = new sprFactory(this, res.person, size.width/2, 920);

    	var _title = new sprFactory(this, res.title, size.width/2, 780);

        var rb1 = new cc.rotateTo(2, 10);
        var rb2 = new cc.rotateTo(2, -10);
        var seq = new cc.sequence(rb1, rb2).repeatForever();
        _title.runAction(seq);
    },
    ttest : function(){

    },
    initBtn : function(){
    	var commonX = size.width/2;
    	var beginY = size.height/2;
    	var _beginBtn = new sprFactory(this, res.beginBtn, commonX, beginY, this.beginFunc);
        var st1 = new cc.scaleTo(1, 1.1);
        var st2 = new cc.scaleTo(1, 0.9);
        var seq = new cc.sequence(st1, st2).repeatForever();
        _beginBtn.runAction(seq);

    	// var _rightBtn = new sprFactory(this, res.listBtn, commonX, beginY - 150, this.listFunc);

    	var _ruleBtn = new sprFactory(this, res.ruleBtn, commonX, beginY - 150, this.ruleFunc);
    },
    beginFunc : function(){
    	var _this = this.parent;

        if(!_this.canTouch)return;
        _this.canTouch = false;

        _this._scene.removeChild(_this);
        _this._scene.initTip();
    },
    ruleFunc : function(){
        var _this = this.parent;

        if(!_this.canTouch)return;
        _this.canTouch = false;

        _this._scene.initRule();
    },
    listFunc : function(){
    	var _this = this.parent;
        _this._scene.initList();
    },
    onExit : function(){
        this.removeAllChildrenWithCleanup(true);
    }
});