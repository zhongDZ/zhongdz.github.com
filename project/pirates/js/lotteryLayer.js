var lotteryLayer = cc.Layer.extend({
	name : 'lotteryLayer',
	isRoundIng : false,
	ctor : function(){
		this._super();

		this.init();

		this.initLotteryOther();

		this.initRoundPan();

		this.initLotteryBtn();
	},
	init : function(){
		this.ignoreAnchorPointForPosition(false);

		this.anchorX = this.anchorY = 0.5;
	},
	initLotteryOther : function(){
		var _lottery_turret_left = new getPosSprite(this, res.lottery_turret, 420, 826);
		var _lottery_turret_right = new getPosSprite(this, res.lottery_turret, 222, 826);
		_lottery_turret_right.scaleX = -1;

		var _lottery_top = new getPosSprite(this, res.lottery_top, size.width/2, 896);

		var _lottery_Turntable_bg1 = new getPosSprite(this, res.lottery_Turntable_bg1, size.width/2, 557);

		var _lottery_bar = new getPosSprite(this, res.lottery_bar, size.width/2, 329);
		var _lottery_bar_size = _lottery_bar.getBoundingBox();
		var label_power = this.label_power = new cc.LabelTTF("50/50", "Arial", 24, cc.size(120, 24), cc.TEXT_ALIGNMENT_CENTER);
        label_power.setPosition(_lottery_bar_size.width/2, _lottery_bar_size.height/2);
        label_power.setColor(cc.color(255, 255, 255));
        _lottery_bar.addChild(label_power);

        var _lottery_power = new getPosSprite(this, res.lottery_power, 300, 293);
        var label_power_more = this.label_power_more = new cc.LabelTTF("+6", "Arial", 24, cc.size(120, 24), cc.TEXT_ALIGNMENT_CENTER);
        label_power_more.setPosition(size.width/2 + 20, 295);
        label_power.setColor(cc.color(255, 255, 255));
        this.addChild(label_power_more);
	},
	initRoundPan : function(){
		var _lottery_Turntable_bg2 = this._lottery_Turntable_bg2 = new getPosSprite(this, res.lottery_Turntable_bg2, size.width/2, 590);
		var _lottery_pointer = new getPosSprite(this, res.lottery_pointer, size.width/2, 595);

		var iconArr = [
			{res : res.lottery_icon1, x : 152, y : 351, rotation : 0},
			{res : res.lottery_icon2, x : 371, y : 278, rotation : 45},
			{res : res.lottery_icon3, x : 318, y : 117, rotation : 135},
			{res : res.lottery_icon4, x : 100, y : 191, rotation : 245},
		]
		for(var i = 0; i < iconArr.length; i++){
			var _icon = new getPosSprite(_lottery_Turntable_bg2, iconArr[i].res, iconArr[i].x, iconArr[i].y);
			_icon.rotation = iconArr[i].rotation;
		}

		// var test = new getPosSprite(_lottery_Turntable_bg2, res.test, size.width/2, 595, true);

		var iconTxt = [
			{txt : '2000', x : 236, y : 444, rotation : 0},
			{txt : '3000', x : 362, y : 402, rotation : 36},
			{txt : '攻击', x : 438, y : 295, rotation : 11},
			{txt : '5000', x : 435, y : 169, rotation : 11},
			{txt : '能量', x : 360, y : 64, rotation : 11},

			{txt : '15K', x : 235, y : 25, rotation : 11},
			{txt : '20K', x : 114, y : 63, rotation : 11},
			{txt : '护盾', x : 35, y : 168, rotation : 11},
			{txt : '25k', x : 36, y : 301, rotation : 11},
			{txt : '偷鸡', x : 107, y : 399, rotation : 11}
		];
		for(var i = 0; i < iconTxt.length; i++){
			var _txt = new cc.LabelTTF(iconTxt[i].txt, "Arial", 24, cc.size(120, 24), cc.TEXT_ALIGNMENT_CENTER);
			_txt.rotation = 36 * i;
			_txt.setPosition(iconTxt[i].x, iconTxt[i].y);
			_lottery_Turntable_bg2.addChild(_txt);
		}
	},
	initRoundAni : function(){
		var _this = this;
		var rb1 = new cc.rotateBy(1, 720);
		var rb2 = new cc.rotateBy(1, 360);
		var rb3 = new cc.rotateBy(1, 36);
		var call = new cc.callFunc(function(){
			_this.isRoundIng = false;
		});
		var seq = new cc.sequence(rb1, rb2, rb3, call);
		this._lottery_Turntable_bg2.runAction(seq);
	},
    initLotteryBtn : function(){
        var lotteryItem = new cc.MenuItemImage(res.lotteryBtn1, res.lotteryBtn2, this.lotteryBtnFun, this);
        var lotteryMenu = this.lotteryMenu = new cc.Menu(lotteryItem);
        lotteryMenu.x = size.width/2;
        lotteryMenu.y = 100;
        lotteryMenu.tag = childTagName.lotteryMenu;
        this.addChild(lotteryMenu, 1);

        this.initfog();
    },
    lotteryMenuAni : function(){
    	var _this = this;
    	var mt = new cc.moveBy(0.5, cc.p(0, -240));
    	mt.easing(cc.easeBackIn());
    	var call = new cc.callFunc(function(){
    		_this.thisAni();
    	});
    	var seq = new cc.sequence(mt, call);
    	this.getChildByTag(childTagName.lotteryMenu).runAction(seq);
    },
    lotteryBtnFun : function(){
        this.fog.AddAnimation(); 

        if(!this.isRoundIng){
        	this.isRoundIng = true;
        	this.initRoundAni();
        }
    },
    //雾
    initfog : function(){
        var fog = this.fog = new aniSprite(res.ani1);
        fog.x = size.width/2;
        fog.y = 120;
        this.addChild(this.fog);
    },
    thisAni : function(){
    	var _this = this;
    	var mt = new cc.moveTo(1, cc.p(-size.width, size.height/2));
    	var st = new cc.scaleTo(1, 1.5);
    	var spa = new cc.spawn(mt, st);
    	var call = new cc.callFunc(function(){
    		_this.parent.getChildByTag(childTagName.self_island).intoMax();
    	});
    	var seq = new cc.sequence(spa, call);
    	this.runAction(seq);
    }
});