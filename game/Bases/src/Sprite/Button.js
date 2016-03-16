//
//  Button.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var ButtonItem = cc.Node.extend({
    ctor:function (title,w,h,execute,current,pTag) {
        this._super();

        var tag = pTag || 1;

		this.back = cc.Scale9Sprite.create(s_button001_scale9);
		this.addChild(this.back);
		this.back.setPosition(0,0);
		this.back.setContentSize(w,h);

        // new game
        this.label = cc.LabelTTF.create(title,"Arial",18);
        this.label.setFontFillColor(cc.c4b(255,255,255,255));
        //this.label.enableStroke(cc.c4b(0,0,0,255),2,true);
        this.button = cc.MenuItemLabel.create(
        	this.label,
        	execute,
        	current
        );
        this.button.setPosition(0,0);


        this.button.setTag(tag);

        var menu = cc.Menu.create(
            this.button
        );
        menu.setPosition(0,0);
        this.addChild(menu);
    },

    set_visible:function(isVisible){
    	this.back.setVisible(isVisible);
    	this.button.setVisible(isVisible);
    }
});
