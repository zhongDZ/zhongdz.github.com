var commonLayer = cc.LayerColor.extend({
	name : 'commonLayer',
	ctor : function(_scene, _x, _y, _s){
		this._super(cc.color(0, 0, 0,200));

		this.init(_scene, _x, _y);
	},
    init : function(_scene, _x, _y, _s){
        this.ignoreAnchorPointForPosition(false);

        this.anchorX = 0.5;

        this.anchorY = 0.5;

        this.size = cc.size(size.width, size.height);

        this.x = _x == null ? size.width/2 : _x;

        this.y = _y == null ? size.height/2 : _y;

        this.scale = _s == null ? 1 : _s;

        this._scene = _scene;
    },
    initRule : function(){
    	var ruleContent = new cc.Sprite(res.ruleContent);
    	ruleContent.x = size.width/2;
    	ruleContent.y = size.height/2;
    	this.addChild(ruleContent);

    	var close_btn = new sprFactory(this, res.close_btn, size.width/2, 380, this.closeFunc);
    	close_btn.addTxt('关闭');

        // var mt = new cc.moveTo(0.65, cc.p(size.width/2, size.height/2));
        // this.runAction(mt);

        var st1 = new cc.scaleTo(0.08, 1.1);
        var st2 = new cc.scaleTo(0.12, 0.9);
        var st3 = new cc.scaleTo(0.12, 1);
        var seq = new cc.sequence(st1, st2, st3);
        this.runAction(seq);
    },
    initList : function(){
    	var listBg = new cc.Sprite(res.listBg);
    	listBg.x = size.width/2;
    	listBg.y = size.height/2;
    	this.addChild(listBg);

    	var close_btn = new sprFactory(this, res.close_btn, size.width/2, 150, this.closeFunc);
    	close_btn.addTxt('关闭');

    	var BtnY = 235,
    		BtnX = 175;
    	var up_page_btn = new sprFactory(this, res.pageBtn, BtnX, BtnY, this.pageFunc);
    	up_page_btn.name = 'up_page_btn';
    	up_page_btn.addTxt('上一页');

    	var down_page_btn = new sprFactory(this, res.pageBtn, size.width - BtnX, BtnY, this.pageFunc);
    	down_page_btn.name = 'down_page_btn';
    	down_page_btn.addTxt('下一页');

    	var Y = 895,
    		tempY = 65;
    	for(var i = 0;i < 10;i++){
    		var test = new template(this, Y + tempY * i);
    	}
    },
    closeFunc : function(){
    	var _this = this.parent;
    	_this._scene.canOpenDialog = true;//重置开关，可以弹窗
    	_this._scene.removeChild(_this);

        var _endLayer = _this._scene.getChildByTag(layerTag.endLayer);
        if(_endLayer != null || _endLayer != undefined){
            _endLayer.canTouch = true;
        }

        var _beginLayer = _this._scene.getChildByTag(layerTag.beginLayer);
        if(_beginLayer != null || _beginLayer != undefined){
            _beginLayer.canTouch = true;
        }
    },
    pageFunc : function(){
    	var _name = this.name;
    	switch(_name){
    		case 'up_page_btn':{
    			console.log('up_page_btn')
    		};break;
    		case 'down_page_btn':{
    			console.log('down_page_btn')
    		};break;
    	}
    },
    initCheckMode : function(){
    	var checkBg = new cc.Sprite(res.checkBg);
    	checkBg.x = size.width/2;
    	checkBg.y = size.height/2;
    	this.addChild(checkBg);

    	var close_btn = new sprFactory(this, res.commonBtn, size.width/2, 635, this.viewFunc);
    	close_btn.addTxt('扫码加入战队', 0, 0, cc.color(54, 173, 253));

    	var close_btn = new sprFactory(this, res.commonBtn, size.width/2, 500, this.selfFunc);
    	close_btn.addTxt('自己组建战队', 0, 0, cc.color(54, 173, 253));

        var mt = new cc.moveTo(0.45, cc.p(size.width/2, size.height/2));
        this.runAction(mt);
    },
    selfFunc : function(){
    	var _this = this.parent;
        _this._scene.removeChild(_this);
        _this._scene.initCode();
    },
    viewFunc : function(){
    	console.log('viewFunc');
    },
    OnExit : function(){
    	this.removeAllChildrenWithCleanup(true);
    }
});

var template = cc.Layer.extend({
	ctor : function(_scene, _y){
		this._super();

		_scene.addChild(this);

		this.init(_y);

		this.initBg();
	},
    init : function(_y){
        this.ignoreAnchorPointForPosition(false);

        this.anchorX = 0.5;

        this.anchorY = 0.5;

        this.x = size.width;

        this.y = _y;
    },
    initBg : function(){
    	var _line = new sprFactory(this, res.line, 0, 0, this.pageFunc);
    }
});