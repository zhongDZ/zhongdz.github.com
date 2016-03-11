var EventDemoLayer = cc.Layer.extend({
	size        :null,
	rocker      :null,   //摇杆
	boneGril    :null,   //精灵
	boneDir     :0,      //精灵方向
	boneSpeed   :0.8,    //精灵速度
	ctor:function(){
		this._super();
		this.size = cc.director.getWinSize();

		// 加载背景
        this.loadBg();
        // 加载摇杆
        this.loadRocker();
        //加载骨精灵
        this.loadBoneGirl();
	},
	loadBg:function(){
		var bg = new cc.Sprite(res.demoBg);
        this.addChild(bg,0);
        bg.x = this.size.width/2;
        bg.y = this.size.height/2;
	},
	loadRocker:function(){
		this.rocker = new Rocker(res.control_base,res.control_knob,"DEFAULT");
       	// this.rocker = new Rocker(res.base_png, res.knob_png, "AUTO");
       	// this.rocker = new Rocker(res.base_png, res.knob_png, "HIDE");
       	// this.rocker = new Rocker(res.base_png, res.knob_png, 128);
		this.rocker.callback = this.onCallback.bind(this);
		this.addChild(this.rocker);
		this.rocker.setPosition(150,150);
	},
	loadBoneGirl:function(){
		cc.spriteFrameCache.addSpriteFrames(res.bone_plist);

		var size = cc.director.getWinSize();
		this.boneGril = new cc.Sprite("#bone_1_1.png");
        this.addChild(this.boneGril, 1);
        this.boneGril.name = "骨精灵";
        this.boneGril.setPosition(size.width/2,size.height* 0.4);
        // 阴影[骨精灵脚下]
        var shadow = new cc.Sprite(res.shadow2);
        this.boneGril.addChild(shadow);
        shadow.setAnchorPoint(0.12, 0.2);
        // 动作
        var animate = this.getAnimate(0);
        this.boneGril.runAction(animate.repeatForever());
	},
	getAnimate:function(dir){
		var frames = [];
		for(var i=0;i<8;i++){
			var str = "bone_" + (dir + 1) + "_" + (i + 1) +".png";
			var frame = cc.spriteFrameCache.getSpriteFrame(str);
			frames.push(frame);
		}
		var Animation = new cc.Animation(frames,0.1);
		var animate = cc.animate(Animation);
		return animate;
	},
	//回调函数【摇杆中触发】
	onCallback:function(sender){
		var dir = this.rocker.direction;
		if(dir != this.boneDir){
			this.boneDir = dir;
			this.boneChangeDir(this.boneDir);
		}else{
			this.onRun();
		}
	},
	boneChangeDir:function(dir){
		this.boneGril.stopAllActions();
		if(dir>0){
			this.boneGril.runAction(this.getAnimate(dir - 1).repeatForever());
		}
	},
	onRun:function(){
		//获取摇杆方向
		var dir = this.rocker.direction;
		//获取摇杆速度取值[0,1];
		var rockerSpeed = this.rocker.speed;
		//获取摇杆弧度
		var radians = this.rocker.radians;

		// var tmpCos = Math.cos(radians);
        // var tmpSin = Math.sin(radians);
        // cc.log("tmpCos : "+ tmpCos + "tmpSin :" +tmpSin);

		switch (dir){
            case Direction.D_UP:
                this.boneGril.y += rockerSpeed * this.boneSpeed;
                break;
            case Direction.D_RIGHT_UP:
                // TODO 为毛线全是 +=
                this.boneGril.x += rockerSpeed * this.boneSpeed * Math.cos(radians);
                this.boneGril.y += rockerSpeed * this.boneSpeed * Math.sin(radians);
                break;
            case Direction.D_RIGHT:
                this.boneGril.x += rockerSpeed * this.boneSpeed;
                break;
            case Direction.D_RIGHT_DOWN:
                this.boneGril.x += rockerSpeed * this.boneSpeed * Math.cos(radians);
                this.boneGril.y += rockerSpeed * this.boneSpeed * Math.sin(radians);
                break;
            case Direction.D_DOWN:
                this.boneGril.y -= rockerSpeed * this.boneSpeed;
                break;
            case Direction.D_LEFT_DOWN:
                this.boneGril.x += rockerSpeed * this.boneSpeed * Math.cos(radians);
                this.boneGril.y += rockerSpeed * this.boneSpeed * Math.sin(radians);
                break;
            case Direction.D_LEFT:
                this.boneGril.x -= rockerSpeed * this.boneSpeed;
                break;
            case Direction.D_LEFT_UP:
                this.boneGril.x += rockerSpeed * this.boneSpeed * Math.cos(radians);
                this.boneGril.y += rockerSpeed * this.boneSpeed * Math.sin(radians);
                break;
            case Direction.DEFAULT:
            default :
                break;
        }
	}
});