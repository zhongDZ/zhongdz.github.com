var gameLayer = cc.Layer.extend({
	characterRes : [
		res.character_1_0,
		res.character_2_0,
		res.character_3_0,
		res.character_4_0,
		res.character_5_0
	],
	characterArr : [],
    selfNum : 0,
    endLineNum : 975,
    gameOver : false,//到终点的标志
	ctor : function(_scene, _num){
		this._super();

		this.init(_scene, _num);

		this.initBg();

		this.initEndDoor();

		this.initDevice();

		this.testTXT();
	},
    init : function(_scene, _num){
        this.ignoreAnchorPointForPosition(false);

        this.anchorX = 0.5;

        this.anchorY = 0.5;

        this.x = size.width/2;

        this.y = size.height/2;

        this._scene = _scene;

        this._num = _num;
    },
    initBg : function(){
    	var gameBg = new cc.Sprite(res.gameBg);
    	gameBg.x = size.width/2;
    	gameBg.y = size.height/2;
    	this.addChild(gameBg);
    },
    initEndDoor : function(){
    	var _door = new sprFactory(this, res.door, 320, 1031);
    	var _endLine = new sprFactory(this, res.endLine, 320, 983);
    },
    testTXT : function(){
    	var label = this._label = cc.LabelTTF.create("8888888888888", "Arial", 48);
    	this._label.x = size.width/2;
    	this._label.y = size.height/2;
    	this.addChild(this._label);
    },
    initDevice : function(){
    	// var SHAKE_THRESHOLD = 3000;
    	var SHAKE_THRESHOLD = 10;
    	var last_update = 0;
    	var x = y = z = last_x = last_y = last_z = 0;
    	var _this = this;

    	var deviceMotionHandler = function (eventData) {
    		if(_this.gameOver)return;

            var acceleration = eventData.accelerationIncludingGravity;
            var curTime = new Date().getTime();
            if ((curTime - last_update) > 100) {
                var diffTime = curTime - last_update;
                last_update = curTime;
                x = acceleration.x;
                y = acceleration.y;
                z = acceleration.z;
                var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
                if (speed > SHAKE_THRESHOLD) {
                	_this.characterArr[_this.selfNum].y += 10;
                	if(_this.characterArr[_this.selfNum].y >= _this.endLineNum){
                		_this._label.setString("gameEnd");
                		_this._scene.initEndLayer();
                		window.removeEventListener('devicemotion');

                		_this.gameOver = true;
                	}
                }
                last_x = x;
                last_y = y;
                last_z = z;
            }
        };
        window.addEventListener('devicemotion', deviceMotionHandler, false);
    },
    initPlayer : function(_data){
    	var posXY = [
    		{'x' : 67, 'y' : 63, 'x1' : 65, 'y1' : 84, 's' : 0.31},
    		{'x' : 180, 'y' : 63, 'x1' : 66, 'y1' : 89, 's' : 0.31},
    		{'x' : 310, 'y' : 63, 'x1' : 60, 'y1' : 85, 's' : 0.31},
    		{'x' : 453, 'y' : 63, 'x1' : 66, 'y1' : 63, 's' : 0.3},
    		{'x' : 568, 'y' : 63, 'x1' : 66, 'y1' : 68, 's' : 0.35}
    	];
    	this.selfNum = _data.selfNum;

    	for(var i = 0;i < 5; i++){
    		var _info = _data.infoData[i];
    		var _character = new aniSprite(this, res.character_ani, posXY[_info.num].x, posXY[_info.num].y, _info.res_index);
    		this.characterArr.push(_character);
	    	_character.setLocalZOrder(100);
	    	//此处的位置通过所选资源来定所以用res_index
	    	_character.initHead(posXY[_info.res_index].x1, posXY[_info.res_index].y1, posXY[_info.res_index].s);
    	}
    },
    initTest : function(){
    	var _test = new sprFactory(this, res.test, 320, 1031, this.testFunc, true);
    },
    testFunc : function(){

    },
    onExit : function(){
    	this.removeAllChildrenWithCleanUp(true);
    }
});

var aniSprite = cc.Sprite.extend({
    texture:null,
    ctor:function(_n, _res, _x, _y, _index){
        this._super();

        this._w = 126;
        this._h = 143;
        this._t = 0.2;
        this._res = _res;
        this._len = 2;

        this.x = _x;
        this.y = _y;
        _n.addChild(this);

        this.addFirst(_index);
        this.AddAnimation(_index);
    },
    addFirst: function(_index){
        this.texture = cc.textureCache.addImage(this._res);//添加纹理到缓存
        var standFrame = new cc.SpriteFrame(this.texture, cc.rect(0, this._h * _index, this._w, this._h));
        this.setSpriteFrame(standFrame);
    },
    AddAnimation : function(_index){
        this.stopAllActions();
        var _frames = [];
        for(var i = 0; i < this._len; i++){
            var frame = new cc.SpriteFrame(this.texture,cc.rect(this._w * i, this._h * _index, this._w, this._h));
            _frames.push(frame);
        }
        var _Animation = new cc.Animation(_frames, this._t);
        _Animation.setRestoreOriginalFrame(true);
        var _Animate = this._Animate = cc.Animate.create(_Animation).repeatForever();
        this.runAction(this._Animate);
    },
    initHead : function(_x, _y, _s){
        var sprite = new cc.Sprite(res.defaultHead);
        sprite.setLocalZOrder(-1);
        this.addChild(sprite);
        sprite.scale = _s;
        sprite.x = _x;
        sprite.y = _y;
    }
});
