var menuLayer = cc.Layer.extend({
	name : 'menuLayer',
	ctor : function(){
		this._super();

		cc.spriteFrameCache.addSpriteFrames(res.game_menu_plist);

		this.init();

		this.initMenu();
	},
	init : function(){
		this.ignoreAnchorPointForPosition(false);

		this.anchorX = this.anchorY = 0.5;
	},
    initMenu : function(){
        var _X1 = 55,
            _X2 = size.width - _X1,
            _Y1 = size.height - 145,
            _Y2 = 130;
        //排行榜按钮
        var _phbBtn = new sprFactory(this, "phbBtn.png", _X1, _Y1, true, this.phbBtnFun);
        //邀请按钮
        var _invoteBtn = new sprFactory(this, "invoteBtn.png", _X1, _Y1 - 120, true, this.invoteBtnFun, true);
        //指南针按钮
        var _panBtn = this._panBtn = new sprFactory(this, "panBtn.png", _X2, _Y1);
        var _panBtn1 = this._panBtn1 = new sprFactory(this, "panBtn1.png", _X2, _Y1, true, this.panBtnFun);
        _panBtn1.zIndex = 3;
        //海盗助手
        var _helpBtn = this._helpBtn = new sprFactory(this, "helpBtn.png", _X2, _Y1 - 120, true, this.helpBtnFun, true);
        //打怪兽
        var _fightBtn = this._fightBtn = new sprFactory(this, "fightBtn.png", _X2, _Y1 - 240, true, this.fightBtnFun, true);
        //地图
        var _mapBtn = this._mapBtn = new sprFactory(this, "mapBtn.png", _X1 + 5, _Y2 - 50, true, this.mapBtnFun);
        //自己的岛屿
        var _selfBtn = new sprFactory(this, "selfBtn.png", _X2 - 20, _Y2 + 100, true, this.slefBtnFun, true);
        var st = new cc.scaleTo(1, 1.1);
        var st1 = new cc.scaleTo(1, 1);
        var seq = new cc.sequence(st, st1).repeatForever();
        _selfBtn.runAction(seq)
        //金蛋
        var _eggBtn = this._eggBtn = new sprFactory(this, "eggBtn.png", _X2 - 20, _Y2 - 50, true, this.eggBtnFun);
        //每日登陆
        var _everyDayBtn = this._everyDayBtn = new sprFactory(this, "everyDayBtn.png", _X2, _Y1, true, this.everyDayBtnFun);
        _everyDayBtn.visible = false;
        //新手礼包
        var _new_player_btn = this._new_player_btn = new sprFactory(this, "newPlayerBtn.png", _X2, _Y1, true, this.newPlayerBtnFun);
        _new_player_btn.visible = false;
        //游戏帮助
        var _G_help_btn = this._G_help_btn = new sprFactory(this, "GhelpBtn.png", _X2, _Y1, true, this.GhelpBtnFun);
        _G_help_btn.visible = false;

        this.initStar();

        this.initZ();
    },
    initStar : function(){
        var x1 = size.width - 75,
            y1 = 80;
        var st0 = new cc.scaleTo(1.5, 1.2);
        var st1 = new cc.scaleTo(1.5, 0);
        var st2 = new cc.scaleBy(2, 1.2);
        var st3 = new cc.scaleTo(2.5, 1.5);
        var st4 = new cc.scaleTo(2.5, 2.0);

        var seq1 = new cc.sequence(st0.clone(), st1.clone());
        var seq2 = new cc.sequence(st2.clone(), st1.clone());
        var seq3 = new cc.sequence(st3.clone(), st1.clone());
        var seq4 = new cc.sequence(st4.clone(), st1.clone());

        var starPos = [
            [x1 - 20, y1 + 20],
            [x1 + 20, y1 + 20],
            [x1 - 20, y1 - 20],
            [x1 + 20, y1 - 20],
            [x1 - 30, y1 + 30],
            [x1 + 0, y1 - 30],
            [x1 - 30, y1 - 35],
            [x1 + 30, y1 - 35]
        ];
        var sprArr = [];
        for(var i = 0;i < 8;i++){
            var spr = new cc.Sprite("#star.png");
            spr.x = starPos[i][0];
            spr.y = starPos[i][1];
            spr.scale = 0.5;
            sprArr.push(spr);
            this._eggBtn.addChild(spr);

            switch(i){
            	case 0:case 5:{
            		sprArr[i].runAction(seq1.clone().repeatForever());
            	}break;
            	case 1:case 4:{
            		sprArr[i].runAction(seq2.clone().repeatForever());
            	}break;
            	case 2:case 6:{
            		sprArr[i].runAction(seq3.clone().repeatForever());
            	}break;
            	case 3:case 7:{
            		sprArr[i].runAction(seq4.clone().repeatForever());
            	}break;
            }
        }
    },
    initZ : function(){
        //1
        var z1PosX = size.width - 70,
            z1PosY = 90;
        var z1 = new cc.Sprite("#sprZ.png");
        z1.x = z1PosX;
        z1.y = z1PosY;
        z1.scale = 0.4;
        z1.opacity = 0;
        this._eggBtn.addChild(z1);

        var aniT = 1.2;
        var mt1 = new cc.moveBy(aniT, cc.p(30, 25));
        var mt2 = new cc.moveBy(aniT, cc.p(-25, 25));
        var mt3 = new cc.moveBy(aniT, cc.p(50, 25));
        var fo = new cc.fadeOut(0.2);
        var mt4 = new cc.moveTo(aniT, cc.p(z1PosX, z1PosY));
        var fi = new cc.fadeIn(0.1);
        var seq1 = new cc.sequence(new cc.spawn(mt1, fi), mt2, mt3, fo, mt4);
        z1.runAction(seq1.repeatForever());

        //2
        var z2 = new cc.Sprite("#sprZ.png");
        z2.x = z1PosX;
        z2.y = z1PosY;
        z2.opacity = 0;
        z2.scale = 0.6;
        this._eggBtn.addChild(z2);

        var dl = new cc.delayTime(0.8);
        var mt1_1 = new cc.moveBy(aniT, cc.p(30, 25));
        var mt2_1 = new cc.moveBy(aniT, cc.p(-25, 25));
        var mt3_1 = new cc.moveBy(aniT, cc.p(50, 25));
        var fo_1 = new cc.fadeOut(0.2);
        var mt4_1 = new cc.moveTo(aniT, cc.p(z1PosX, z1PosY));
        var fi_1 = new cc.fadeIn(0.1);
        var seq1_1 = new cc.sequence(dl, new cc.spawn(mt1_1, fi_1), mt2_1, mt3_1, fo_1, mt4_1);
        z2.runAction(seq1_1.repeatForever());
    },
    invoteBtnFun : function(){
        console.log('invoteBtnFun')  
    },
    phbBtnFun : function(){
        var _this = this.parent;

        _this.parent.initPhb();
    },
    panBtnFun : function(){
        var _this = this.parent;
        var mbt = 0.45;
        var r1 = new cc.rotateBy(mbt, 180);
        var r2 = new cc.rotateBy(mbt, -180);

        var mb1 = new cc.moveBy(mbt, cc.p(0, - 120));
        var mb1Reverse = mb1.reverse();
        var mb2 = new cc.moveBy(mbt, cc.p(0, - 240));
        var mb2Reverse = mb2.reverse();
        var mb3 = new cc.moveBy(mbt, cc.p(0, - 360));
        var mb3Reverse = mb3.reverse();

        if(!_this.openFlag && _this._panBtn1.rotation == 0){
            _this.openFlag = true;
            _this._panBtn1.runAction(r1);

            _this._helpBtn.runAction(mb1Reverse.clone());
            _this._fightBtn.runAction(new cc.sequence(mb2Reverse.clone(), new cc.callFunc(function(){
                _this._helpBtn.visible = false;
                _this._fightBtn.visible = false;
            
                //三个子按钮
                _this._everyDayBtn.visible = true;
                _this._new_player_btn.visible = true;
                _this._G_help_btn.visible = true;

                _this._everyDayBtn.runAction(mb1);
                _this._new_player_btn.runAction(mb2);
                _this._G_help_btn.runAction(mb3);
            })));
        }else if(_this._panBtn1.rotation == 180){
            _this.openFlag = false;
            _this._panBtn1.runAction(r2);

            //三个子按钮
            _this._everyDayBtn.runAction(mb1Reverse);
            _this._new_player_btn.runAction(mb2Reverse);
            _this._G_help_btn.runAction(new cc.sequence(mb3Reverse, new cc.callFunc(function(){
                _this._everyDayBtn.visible = false;
                _this._new_player_btn.visible = false;
                _this._G_help_btn.visible = false;

                _this._helpBtn.visible = true;
                _this._fightBtn.visible = true;

                _this._helpBtn.runAction(mb1);
                _this._fightBtn.runAction(mb2);
            })));
        }
    },
    helpBtnFun : function(){
        console.log('helpBtnFun')  
    },
    fightBtnFun : function(){
        console.log('fightBtnFun')  
    },
    mapBtnFun : function(){
        console.log('mapBtnFun')  
    },
    slefBtnFun : function(){
        var _this = this.parent;

        _this._mapBtn.visible = false;

        _this._eggBtn.visible = false;

        _this.parent.getChildByTag(childTagName.lotteryLayer).lotteryMenuAni();
    },
    eggBtnFun : function(){
        console.log('eggBtnFun');
    },
    everyDayBtnFun : function(){
        console.log('everyDayBtnFun')  
    },
    newPlayerBtnFun : function(){
        console.log('newPlayerBtnFun');
    },
    GhelpBtnFun : function(){
        console.log('GhelpBtnFun');
    }
});