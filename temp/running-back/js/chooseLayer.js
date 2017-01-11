// var chooseLayer = cc.Layer.extend({
var chooseLayer = cc.LayerColor.extend({
	_scene : null,
	characterTag : 2,
	canChoose : true,
    characterArr : [],
    movePoint : [
    	cc.p(240, 663 + 180),
    	cc.p(143, 564 + 150),
    	cc.p(320, 416 + 130),
    	cc.p(497, 564 + 150),
    	cc.p(400, 663 + 180)
	],
	scaleNumArr : [
		0.4,
		0.6,
		1,
		0.6,
		0.4
	],
	opacityArr : [
		150,
		200,
		255,
		200,
		150
	],
    zorderArr : [
        1,
        10,
        100,
        10,
        1
    ],
	ctor : function(_scene, _initRuleBtn){
		// this._super();
		this._super(cc.color(0, 0, 0, 125));

		this.init(_scene);

		this.initBg();

		this.initBtn();

		this.initCharacter();

        if(_initRuleBtn == 1){
            this.initRuleBtn();
        }else{
            this.initBeginBtn();
        }
	},
    init : function(_scene){
        this.ignoreAnchorPointForPosition(false);

        this.anchorX = 0.5;

        this.anchorY = 0.5;

        this.x = size.width/2;

        this.y = size.height/2;

        this._scene = _scene;
    },
    initBg : function(){
    	var bg = new cc.Sprite(res.personBg);
    	bg.x = size.width/2;
    	bg.y = 680;
    	this.addChild(bg);
    },
    initCharacter : function(){
	    var info = [
	    	{'res' : res.character_5, 'scale' : 0.5, 'opacity' : 150},
	    	{'res' : res.character_4, 'scale' : 0.5, 'opacity' : 200},
	    	{'res' : res.character_3, 'scale' : 1, 'opacity' : 255},
	    	{'res' : res.character_2, 'scale' : 0.5, 'opacity' : 200},
	    	{'res' : res.character_1, 'scale' : 0.5, 'opacity' : 150},
	    ];

	    for(var i = 0;i < info.length;i++){
	    	var _character = new sprFactory(this, info[i].res, this.movePoint[i].x, this.movePoint[i].y);
	    	_character.scale = this.scaleNumArr[i];
	    	_character.opacity = this.opacityArr[i];
	    	this.characterArr.push(_character);
	    }

	    var _character = new sprFactory(this, res.kuang, 320, 550);
    },
    dealPosition : function(_index, _dir){
    	var acitonArr = [
    		[3, 4, 0, 1, 2],
    		[4, 0, 1, 2, 3],
    		[0, 1, 2, 3, 4],
    		[1, 2, 3, 4, 0],
    		[2, 3, 4, 0, 1]
    	];

    	for(var i = 0;i < acitonArr[_index].length;i++){
            var _this = this;
            var _t = 0.35;
    		var _mt = new cc.moveTo(_t, this.movePoint[acitonArr[_index][i]]);
    		var _st = new cc.scaleTo(_t, this.scaleNumArr[acitonArr[_index][i]]);
    		var _fi = new cc.FadeTo(_t, this.opacityArr[acitonArr[_index][i]]);
    		var _call = new cc.callFunc(function(){
    			this.canChoose = true;
    		}, this);
    		var _spa = new cc.spawn(_mt, _fi, _st);
    		var _seq = new cc.sequence(_spa, _call);
    		this.characterArr[i].runAction(_seq);
    	}
    },
    initBtn : function(){
    	var tempX = 85,
            tempY = 475;
    	var _leftBtn = new sprFactory(this, res.icon_jiantou, tempX, tempY, this.leftBtnFunc);
    	var mbl1 = new cc.moveBy(1, cc.p(-20, 0));
    	var mbl2 = new cc.moveBy(1, cc.p(20, 0));
    	var seqL = new cc.sequence(mbl1.clone(), mbl2.clone()).repeatForever();
    	_leftBtn.runAction(seqL);

    	var _rightBtn = new sprFactory(this, res.icon_jiantou, size.width - tempX, tempY, this.rightBtnFunc);
    	_rightBtn.scale = -1;
    	var seqR = new cc.sequence(mbl2.clone(), mbl1.clone()).repeatForever();
    	_rightBtn.runAction(seqR);
    },
    leftBtnFunc : function(){
    	var _this = this.parent;

    	if(!_this.canChoose)return;
    	_this.canChoose = false;

    	_this.characterTag -= 1;
    	if(_this.characterTag < 0){
    		_this.characterTag = 4;
    	}
    	_this.dealPosition(_this.characterTag, 'left');
    },
    rightBtnFunc : function(){
    	var _this = this.parent;

    	if(!_this.canChoose)return;
    	_this.canChoose = false;

    	_this.characterTag += 1;
    	if(_this.characterTag > 4){
    		_this.characterTag = 0;
    	}
    	_this.dealPosition(_this.characterTag, 'right');
    },
    initHead:function(x, y){
        var clipper = new cc.ClippingNode();

        var drawNode = new cc.DrawNode();       
        drawNode.clear();//清除节点缓存
        drawNode.ctor();
        drawNode.drawCircle(cc.p(0, 0), 60, 0, 8000, false, 0, cc.color(125, 125, 100, 255));

        clipper.setStencil(drawNode);

        var sprite = new cc.Sprite(res.defaultHead);
        clipper.addChild(sprite);
        clipper.x = x;
        clipper.y = y;

        clipper.scale = 0.8;

        this.addChild(clipper);

        return clipper;
    },
    initRuleBtn : function(){
        var _rightBtn = new sprFactory(this, res.ruleBtn, size.width/2, 200, this.ruleBtn);
    },
    ruleBtn : function(){
        this.parent._scene.initRule();
    },
    initBeginBtn : function(){
        var _beginBtn = new sprFactory(this, res.beginBtn, size.width/2, 200, this.beginFunc, true); 
    },
    beginFunc : function(){
        var _this = this.parent;
        _this._scene.beginGame(_this.characterTag);
    }
});