var endLayer = cc.LayerColor.extend({
    name : 'endLayer',
    canTouch : true,
	ctor : function(_scene, _data){
		this._super(cc.color(0, 0, 0,200));

		this.init(_scene);

        this.initNice();

        this.initTai();

        this.initTitle('xxxxx');

        this.initPlayer(_data);

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
    initTitle : function(_name){
        var _end_title_1 = cc.LabelTTF.create("恭喜  " + _name, "Arial", 40);
        _end_title_1.fillStyle = cc.color.RED;
        this.addChild(_end_title_1);
        _end_title_1.x = size.width/2;
        _end_title_1.y = 790;
        _end_title_1.scale = 0;
        var _end_title_2 = cc.LabelTTF.create("获得最佳“撸机小能手”", "Arial", 40);
        _end_title_2.fillStyle = cc.color.RED;
        this.addChild(_end_title_2);
        _end_title_2.x = size.width/2;
        _end_title_2.y = 740;
        _end_title_2.scale = 0;
        
        var dl = new cc.delayTime(0.5);
        var st1 = new cc.scaleTo(0.25, 1.1);
        var st2 = new cc.scaleTo(0.2, 0.9);
        var st3 = new cc.scaleTo(0.2, 1);
        var seq = new cc.sequence(dl, st1, st2, st3);

        _end_title_1.runAction(seq.clone());

        _end_title_2.runAction(seq.clone());
    },
    initNice : function(){
        var _end_shine_1 = new sprFactory(this, res.end_shine, size.width/2, 850);

        var _end_shine_2 = new sprFactory(this, res.end_shine, size.width/2, 850);

        var rb1 = new cc.rotateBy(2, 360);
        var rp1 = rb1.repeatForever();
        _end_shine_1.runAction(rp1.clone());
        
        var rb2 = new cc.rotateBy(2, -360);
        var rp2 = rb2.repeatForever();
        _end_shine_2.runAction(rp2.clone());
    },
    initTai : function(){
        var _end_bg = new sprFactory(this, res.end_bg, size.width/2, size.height/2);

        var _end_tai = new sprFactory(this, res.end_tai, size.width/2, size.height + 150);
        _end_tai.scale = 0;

        var mt = new cc.moveTo(0.5, cc.p(size.width/2, 437));
        var st = new cc.scaleTo(0.5, 1);
        var spa = new cc.spawn(mt, st);
        _end_tai.runAction(spa);
    },
    initPlayer : function(_data){
        var playerXY = [
            {'x' : 325, 'y' : 560},
            {'x' : 190, 'y' : 550},
            {'x' : 460, 'y' : 510}
        ];
        var posXY = [
            {'res' : res.end_icon1, 'x1' : 64, 'y1' : 79, 's' : 0.35},
            {'res' : res.end_icon2, 'x1' : 64, 'y1' : 92, 's' : 0.43},
            {'res' : res.end_icon3, 'x1' : 60, 'y1' : 92, 's' : 0.43},
            {'res' : res.end_icon4, 'x1' : 66, 'y1' : 63, 's' : 0.4},
            {'res' : res.end_icon5, 'x1' : 66, 'y1' : 68, 's' : 0.4}
        ];
        var characterArr = [];

        for(var i = 0;i < _data.successNumArr.length; i++){
            var _index = _data.successNumArr[i];
            var _character = new sprFactory(this, posXY[_index].res, playerXY[i].x, playerXY[i].y, this.testFunc, true);
            _character.opacity = 0;
            _character.scale = 0;
            characterArr.push(_character);
            _character.setLocalZOrder(100);
            _character.initHead(posXY[_index].x1, posXY[_index].y1, posXY[_index].s);
        }

        var t_1 = 0.5;
        var fi_1 = new cc.fadeIn(t_1);
        var st_1 = new cc.scaleTo(t_1, 1);
        var spa_1 = new cc.spawn(fi_1, st_1);
        var dl_1 = new cc.delayTime(0.8);
        var seq_1 = new cc.sequence(dl_1, spa_1);
        characterArr[0].runAction(seq_1.clone());

        var t_2 = 0.5;
        var fi_2 = new cc.fadeIn(t_2);
        var st_2 = new cc.scaleTo(t_2, 1);
        var spa_2 = new cc.spawn(fi_2, st_2);
        var dl_2 = new cc.delayTime(0.7);
        var seq_2 = new cc.sequence(dl_2, spa_2);
        characterArr[1].runAction(seq_2.clone());

        var t_3 = 0.5;
        var fi_3 = new cc.fadeIn(t_3);
        var st_3 = new cc.scaleTo(t_3, 1);
        var spa_3 = new cc.spawn(fi_3, st_3);
        var dl_3 = new cc.delayTime(0.6);
        var seq_3 = new cc.sequence(dl_3, spa_3);
        characterArr[2].runAction(seq_3.clone());

        var tempX = size.width/2,
            tempY = size.height/2 + 80;
        var txtPosArr = [
            {'x' : tempX, 'y' : tempY},
            {'x' : tempX - 135, 'y' : tempY},
            {'x' : tempX + 135, 'y' : tempY}
        ];
        var dl_txt = new cc.delayTime(1.1);
        var fi = new cc.fadeIn(0.5);
        var seq_txt = new cc.sequence(dl_txt, fi);
        for(var i = 0;i < _data.successName.length; i++){
            var _nameTxt = cc.LabelTTF.create(_data.successName[i], "Arial", 40);
            _nameTxt.opacity = 0;
            _nameTxt.fillStyle = cc.color.BLACK;
            _nameTxt.x = txtPosArr[i].x;
            _nameTxt.y = txtPosArr[i].y;
            _nameTxt.runAction(seq_txt.clone());
            this.addChild(_nameTxt);
        }
    },
    initBtn : function(){
    	var commonX = size.width/2;
    	var beginY = -350;

        var mt1 = new cc.moveBy(0.9, cc.p(0, 580));
        var mt2 = new cc.moveBy(1, cc.p(0, 580));

    	var _end_list = new sprFactory(this, res.end_list, commonX, beginY, this.listFunc);

    	var _end_again = new sprFactory(this, res.end_again, commonX, beginY - 120, this.againFunc);

        _end_list.runAction(mt1.clone());
        _end_again.runAction(mt2.clone());
    },
    againFunc : function(){
    	var _this = this.parent;
        if(!_this.canTouch)return;
        _this.canTouch = false;

        _this._scene.removeChild(_this);
        _this._scene.initBeginLayer();
    },
    listFunc : function(){
    	var _this = this.parent;
        if(!_this.canTouch)return;
        _this.canTouch = false;

        _this._scene.initList();
    },
    testFunc : function(){

    }
});