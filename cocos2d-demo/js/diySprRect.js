var diySprRectLayer =  cc.Layer.extend({
	ctor:function(){
		this._super();
		this.init();
	},
	init:function(){
		var center = new cc.Sprite(res.center);
		center.x = winSize.width/2;
		center.y = winSize.height/2;
		this.addChild(center);

		var rt = new cc.RotateBy(5,360);
		// var action = new cc.RepeatForever(rotate);
		var action = rt.repeatForever();

		center.runAction(action);

		var car = new cc.Sprite(res.car1);
		car.x = 100;
		car.y = 0;
		center.addChild(car);
		/**********************************************/

		/**
		* 圆运动
		* @param {Number} duration
		* @param {cc.Node|cc.p} dot 圆心点坐标或者node
		* @param {Number} [r]  半径 如果为负数, 反时钟方向
		* @param {Number} [angle] 旋转角度
		* @returns {cc.CardinalSplineTo}
		*/
		cc.circleBy = function(duration, dot, r, angle){
		    var dp = angle || 20, dpr = 360 / dp, ary = [];
		    r = r || 20;
		    if(r < 0) dpr = -dpr;
		    r = Math.abs(r) * dp.scale;
		    for(var i = 0; i < dp; i ++){
		        ary.push(cc.p(Math.sin(dpr * i * cc.RAD) * r + dot.x, Math.cos(dpr * i * cc.RAD) * r + dot.y));
		    }
		    ary.push(ary[0]);
		    return cc.cardinalSplineTo(duration, ary, 0);
		};
		var spr = new cc.Sprite(res.car1);
		spr.x = 100;
		spr.y = 100;
		spr.runAction(cc.circleBy(1, spr, -20).repeatForever());
		// this.addChild(spr)

		/**********************************************/
		var clipper = new cc.ClippingNode();

        var drawNode = new cc.DrawNode();       
        drawNode.clear();                      //清除节点缓存
        drawNode.ctor();  
        drawNode.drawCircle(cc.p(0,0), 80, 0, 8000, false, 6, cc.color(125, 125, 100, 255));

        clipper.setStencil(drawNode);

        var sprite = new cc.Sprite(res.test);
        clipper.addChild(sprite);
        clipper.x = winSize.width/2 - 3;
        clipper.y = winSize.height/2 + 300;

        this.addChild(clipper);

        /**********************************************/
	}
});

var diySprRectLayer1 = cc.Layer.extend({
	ctor:function(){
		this._super();
		this.init();
	},
	init:function(){

        var clip = this.clipper();
		var clipSize = clip.getContentSize();
		clip.x = winSize.width/2;
		clip.y = winSize.height/2 - 200;

		var spark = new cc.Sprite(res.spark);
		var gameTitle = new cc.Sprite(res.game_title);
		
		clip.addChild(gameTitle, 1);//先添加标题,会完全显示出来,因为跟模板一样大小
		spark.x = -winSize.width / 2;
		spark.y = 0;
		clip.addChild(spark,2);//会被裁减
		clip.setScaleY(1.2);
		this.addChild(clip,4);

		var mt = new cc.moveTo(2,cc.p(clipSize.width,0));
        var mt1 = new cc.moveTo(2,cc.p(-clipSize.width,0));
        var seq = new cc.sequence(mt, mt1);
        var repeat = seq.repeatForever();
		spark.runAction(repeat)
	},
	clipper:function(){
		var clipper1 = new cc.ClippingNode();


		var game_title = new cc.Sprite(res.game_title);
		var content = game_title.getContentSize();

		clipper1.setAlphaThreshold(0);
		clipper1.setStencil(game_title);

		clipper1.setContentSize(cc.size(content.width,content.height));

		return clipper1;
	}
});