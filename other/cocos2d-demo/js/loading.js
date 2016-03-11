var LoadBar = cc.Layer.extend({
	time1:null,
	time2:null,
	texture:null,
	rectX:276,
	tick:0,
	loadNum:100,
	ctor:function(){
		this._super();

        var load1 = new cc.Sprite(res.load1);
        this.addChild(load1);
        load1.x = winSize.width/2;
        load1.y = winSize.height/2;
		
		this.timeLoadingBar = new loadingSprite(winSize.width/2 - 140, winSize.height/2, 100, res.load2);
        this.timeLoadingBar.setPrecent(100);
        this.addChild(this.timeLoadingBar,10);

        var to1 = cc.sequence(cc.progressTo(15, 100));
        var to2 = cc.sequence(cc.progressTo(2, 100), cc.progressTo(0, 0));
        var to3 = cc.sequence(cc.progressTo(2, 100), cc.progressTo(0, 0)).repeatForever();

        var load11 = new cc.Sprite(res.load1);
        this.addChild(load11);
        load11.x = winSize.width/2;
        load11.y = winSize.height/2 - 200;

        var left = new cc.ProgressTimer(new cc.Sprite(res.load2));
        left.type = cc.ProgressTimer.TYPE_BAR;
        //    Setup for a bar starting from the left since the midpoint is 0 for the x
        left.midPoint = cc.p(0, 0);
        //    Setup for a horizontal bar since the bar change rate is 0 for y meaning no vertical change
        left.barChangeRate = cc.p(1, 0);
        this.addChild(left);
        left.x = winSize.width/2;
        left.y = winSize.height/2 - 200;
        // left.runAction(to1);
        // left.runAction(to2);
        left.runAction(to3);

		this.scheduleUpdate();
	},
	update:function(){
		this.tick++;
		if(this.tick%10==0){
			this.loadNum-=1;
            this.timeLoadingBar.setPrecent(this.loadNum);
        }
	}
});

var loadingSprite = cc.Sprite.extend({
    textureWidth:null,
    textureHeight:null,
    basic:0,
    ctor:function(xx, yy, basic, _res){
        this._super();
        this.basic = basic;
        this.init(xx, yy, _res);
    },
    init:function(xx, yy, _res){
        this.initWithFile(_res);
        this.textureWidth = this.getContentSize().width;
        this.textureHeight = this.getContentSize().height;
        this.setPosition(xx, yy);
        this.setAnchorPoint(0, 0.5);
    },setPrecent:function(pre){
        var rect = this.getTextureRect();
        var res = pre/this.basic;
        this.setTextureRect( cc.rect( rect.x,rect.y,this.textureWidth*res,this.textureHeight));
    }
});