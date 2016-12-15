var topLayer = cc.Layer.extend({
	ctor : function(){
		this._super();

        this.init();

        this.initBg();

        this.initLeft();

        this.initMiddle();

        this.initRight();
	},
	init : function(){
		this.ignoreAnchorPointForPosition(false);

		this.anchorX = this.anchorY = 0.5;
	},
	initBg : function(){
		var menuTop = this.menuTop = new cc.Sprite(res.menuTop);
        menuTop.anchorY = 1;
        menuTop.x = size.width/2;
        menuTop.y = size.height;
        this.addChild(menuTop, 1);
        this.menuTopSize = menuTop.getBoundingBox();
	},
	initLeft : function(){
		var iconStar = new cc.Sprite(res.iconStar);
        iconStar.x = 25;
        iconStar.y = this.menuTopSize.height / 2;
        this.menuTop.addChild(iconStar);

        var label_star = this.label_star = new cc.LabelTTF("9999", "Arial", 24, cc.size(120, 24), cc.TEXT_ALIGNMENT_CENTER);
        label_star.setPosition(78, this.menuTopSize.height / 2 + 4);
        label_star.setColor(cc.color(255, 255, 255));
        this.menuTop.addChild(label_star);
	},
	initMiddle : function(){
		var wheel = this.wheel = new cc.Sprite(res.wheel);
        wheel.x = size.width/2;
        wheel.y = size.height + 10;
        this.addChild(wheel);
        var r1 = new cc.rotateBy(2.0, 360);
        var r2 = new cc.rotateBy(2.0, -360);
        var seq = new cc.sequence(r1, r2);
        var rp = r1.repeatForever();
        wheel.runAction(rp);
	},
	initRight : function(){
		var iconGlod = new cc.Sprite(res.iconGlod);
        iconGlod.x = this.menuTopSize.width * 3 / 4 - 30;
        iconGlod.y = this.menuTopSize.height/2;
        this.menuTop.addChild(iconGlod);

        var label_glod = this.label_glod = new cc.LabelTTF("999999999", "Arial", 24, cc.size(130, 24), cc.TEXT_ALIGNMENT_CENTER);
        label_glod.setPosition(this.menuTopSize.width - 105, this.menuTopSize.height / 2 + 4);
        label_glod.setColor(cc.color(255, 255, 255));
        this.menuTop.addChild(label_glod);

        var iconAddItem = new cc.MenuItemImage(res.iconAdd1, res.iconAdd2, this.addBtnFun, this);
        var iconAddMenu = new cc.Menu(iconAddItem);
        iconAddMenu.x = this.menuTopSize.width - 20;
        iconAddMenu.y = this.menuTopSize.height/2;
        this.menuTop.addChild(iconAddMenu);
	},
    addBtnFun : function(){
        console.log('addBtn')
    }
});