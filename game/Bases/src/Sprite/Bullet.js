//
//  Bullet.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var Bullet = cc.Node.extend({
    ctor:function (enemy) {
        this._super();

        this.effect_time = 0;
        this.hitTime     = 0;
        this.attack      = enemy.attack;
        this.dx          = 0;
        this.dy          = 0;
        var frameSeq = [];
        for (var i = 0; i <= 5; i++) {
            var frame = cc.SpriteFrame.create(effect_fire,cc.rect(60*i,0,60,60));
            frameSeq.push(frame);
        }
        this.wa = cc.Animation.create(frameSeq,0.05);
        this.ra = cc.RepeatForever.create(cc.Animate.create(this.wa));
        this.sprite = cc.Sprite.create(effect_fire,cc.rect(0,0,60,60));
        this.sprite.runAction(this.ra);
        this.addChild(this.sprite);
        this.isEffect    = true;

        this.sprite.setPosition(0,30);
    },

    init:function () {
    },

    update:function() {
        if(this.isEffect == false){
            this.hitTime++;
            if(this.hitTime <= 10){
                var pp = this.getPosition();
                this.setPosition(pp.x + this.dx,pp.y + this.dy);
                return true;
            }
        }else{
            this.effect_time++;
            if(this.effect_time <= CONFIG.BULLET_EFFECT_TIME){
                var pp = this.getPosition();
                this.setPosition(pp.x + this.dx,pp.y + this.dy);
                return true;
            }
            this.removeChild(this.sprite);
        }
        return false;
    },

    set_position:function(x,y){
        this.setPosition(x,y);
    },

    set_direction:function(dx,dy){
        this.dx = dx;
        this.dy = dy;
    },
});
