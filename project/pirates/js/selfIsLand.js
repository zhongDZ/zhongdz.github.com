var IsLand = cc.Layer.extend({
	ctor : function(){
		this._super();

		this.init();

		var island_water_lines_1 = new getPosSprite(this, res.island_water_lines_1, 327, 357);
		var st_1 = new cc.scaleTo(1.5, 1.15);
		var st_2 = new cc.scaleTo(1.5, 1);
		var seq_water = new cc.sequence(st_1, st_2);
		var seq_water_repeat = seq_water.repeatForever();
		island_water_lines_1.runAction(seq_water_repeat);

		var island_1 = new getPosSprite(this, res.island_1, size.width/2, size.height/2 - 180);

		var tree = new getPosSprite(this, res.island_tree, 245, 478);

		var pos_1 = [
			{x : 138, y : 285},
			{x : 120, y : 251},
			{x : 93, y : 207}
		];
		var t1 = 1.2;
		var island_water_lines_2 = new getPosSprite(this, res.island_water_lines_2, pos_1[0].x, pos_1[0].y);
		island_water_lines_2.opacity = 0;
		var fi1_1 = new cc.fadeIn(t1);
		var mt1_1_1 = new cc.moveTo(t1, cc.p(pos_1[1].x, pos_1[1].y));
		var fo1_1 = new cc.fadeOut(t1);
		var mt1_1_2 = new cc.moveTo(t1, cc.p(pos_1[2].x, pos_1[2].y));
		var call1_1 = new cc.callFunc(function(){
			island_water_lines_2.x = pos_1[0].x;
			island_water_lines_2.y = pos_1[0].y;
		});
		var seq1_1 = new cc.sequence(new cc.spawn(mt1_1_1, fi1_1), new cc.spawn(mt1_1_2, fo1_1), call1_1).repeatForever();
		island_water_lines_2.runAction(seq1_1);
		
		var pos_2 = [
			{x : 469, y : 260},
			{x : 482, y : 230},
			{x : 494, y : 177}
		];
		var t1 = 1;
		var island_water_lines_3 = new getPosSprite(this, res.island_water_lines_3, pos_2[0].x, pos_2[0].y);
		island_water_lines_3.opacity = 0;
		var fi1_2 = new cc.fadeIn(t1);
		var mt1_2_1 = new cc.moveTo(t1, cc.p(pos_2[1].x, pos_2[1].y));
		var fo1_2 = new cc.fadeOut(t1);
		var mt1_2_2 = new cc.moveTo(t1, cc.p(pos_2[2].x, pos_2[2].y));
		var call1_2 = new cc.callFunc(function(){
			island_water_lines_3.x = pos_2[0].x;
			island_water_lines_3.y = pos_2[0].y;
		});
		var seq1_2 = new cc.sequence(new cc.spawn(mt1_2_1, fi1_2), new cc.spawn(mt1_2_2, fo1_2), call1_2).repeatForever();
		island_water_lines_3.runAction(seq1_2);

		var island_boat = new getPosSprite(this, res.island_boat, 478, 312);
		var mt1 = new cc.moveTo(2, cc.p(478, 330));
		var mt2 = new cc.moveTo(2, cc.p(478, 312));
		var seq = new cc.sequence(mt1, mt2).repeatForever();
		island_boat.runAction(seq);
	},
	init : function(){
		this.ignoreAnchorPointForPosition(false);//忽略锚点

		this.anchorX = this.anchorY = 0.5;
	},
	intoMini : function(){
		this.x = size.width * 3 / 4;
        this.y = size.height / 3 + 120;
        this.scale = 0.6;
	},
	intoMax : function(){
		this.x = size.width/2;
        this.y = size.height/2;
        this.scale = 1;
	}
});