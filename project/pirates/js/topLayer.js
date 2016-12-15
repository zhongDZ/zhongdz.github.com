var topLayer = cc.Layer.extend({
	ctor : function(){
		this._super();

		cc.spriteFrameCache.addSpriteFrames(res.game_top_plist);

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
		var menuTop = this.menuTop = new sprFactory(this, "menuTop.png", size.width/2, size.height);
        menuTop.anchorY = 1;
        this.menuTopSize = menuTop.getBoundingBox();
	},
	initLeft : function(){
		var menu_Y = this.menuTopSize.height / 2;
	    var iconStar = new sprFactory(this.menuTop, "iconStar.png", 25, menu_Y);

        var label_star = this.label_star = new cc.LabelTTF("----", "Arial", 24, cc.size(120, 24), cc.TEXT_ALIGNMENT_CENTER);
        label_star.setPosition(78, this.menuTopSize.height / 2 + 4);
        label_star.setColor(cc.color(255, 255, 255));
        this.menuTop.addChild(label_star);

        var menu_shield_1 = new sprFactory(this.menuTop, "menu_shield.png", 128, menu_Y + 3);
        var menu_shield_2 = new sprFactory(this.menuTop, "menu_shield.png", 165, menu_Y + 3);
        var menu_shield_3 = new sprFactory(this.menuTop, "menu_shield.png", 202, menu_Y + 3);
	},
	initMiddle : function(){
        var wheel = this.wheel = new sprFactory(this, "wheel.png", size.width/2, size.height + 10);

        var r1 = new cc.rotateBy(2.0, 360);
        var r2 = new cc.rotateBy(2.0, -360);
        var seq = new cc.sequence(r1, r2);
        var rp = r1.repeatForever();
        wheel.runAction(rp);
	},
	initRight : function(){
        var iconGlod = new sprFactory(this.menuTop, "iconGlod.png", this.menuTopSize.width * 3 / 4 - 30, this.menuTopSize.height/2);

        var label_glod = this.label_glod = new cc.LabelTTF("-------", "Arial", 24, cc.size(130, 24), cc.TEXT_ALIGNMENT_CENTER);
        label_glod.setPosition(this.menuTopSize.width - 105, this.menuTopSize.height / 2 + 4);
        label_glod.setColor(cc.color(255, 255, 255));
        this.menuTop.addChild(label_glod);

        var iconAddItem = new cc.MenuItemSprite(
        	new cc.Sprite("#iconAdd1.png"), 
        	new cc.Sprite("#iconAdd2.png"),
        	this.addBtnFun,
        	this);
        var iconAddMenu = new cc.Menu(iconAddItem);
        iconAddMenu.x = this.menuTopSize.width - 20;
        iconAddMenu.y = this.menuTopSize.height/2;
        this.menuTop.addChild(iconAddMenu);
	},
    addBtnFun : function(){
        console.log('addBtn')
    }
});