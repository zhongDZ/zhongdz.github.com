//
//  DamageText.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var DamageText = cc.Node.extend({
    ctor:function () {
        this._super();
        this.effectTime     = 0;
        this.dx             = 0;
        this.dy             = 2;
        this.isEffect       = true;
        this.comicText = cc.Sprite.create(s_damage_001);
        this.addChild(this.comicText);
        var randX = getRandNumberFromRange(-30,30);
        var randY = getRandNumberFromRange(-30,30);
        this.setPosition(randX,randY);
        
    },

    update:function() {        
        this.effectTime++;
        if(this.effectTime<=30){
            var pp = this.getPosition();
            this.setPosition(pp.x + this.dx,pp.y + this.dy);
            //this.setScale(
            //    1+this.effectTime*0.005,
            //    1+this.effectTime*0.005
            //);
            return true;
        }
        this.removeChild(this.comicText);
        return false;
    },

    set_text:function(text){
        this.damageNumLabel.setString(text);
    },
});
