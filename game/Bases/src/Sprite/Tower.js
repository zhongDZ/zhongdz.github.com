//
//  Tower.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var Tower = cc.Node.extend({
    ctor:function (posX,posY,game) {
        this._super();
        this.game     = game;
        this.storage  = this.game.storage;
        this.posX     = posX;
        this.posY     = posY;
        this.setPosition(posX,posY);
        this.tree     = cc.Sprite.create(s_mapchip_sakura);
        this.tree.setPosition(0,50);
        //this.tree.setVisible(false);
        this.addChild(this.tree);
    },

    setAlpha:function(alpha){
    	this.tree.setOpacity(alpha);
    }
});