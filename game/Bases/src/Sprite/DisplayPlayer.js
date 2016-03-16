//
//  DisplayPlayer.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var DisplayPlayer = cc.Node.extend({
    ctor:function (img,w,h) {
        this._super();
        this.w = w;
        this.h = h;
        var frameSeq = [];
        for (var i = 0; i < 3; i++) {
            var frame = cc.SpriteFrame.create(img,cc.rect(w*i,h*0,w,h));
            frameSeq.push(frame);
        }
        this.wa = cc.Animation.create(frameSeq,0.2);
        this.ra = cc.RepeatForever.create(cc.Animate.create(this.wa));
        this.sprite = cc.Sprite.create(img,cc.rect(0,0,w,h));
        this.sprite.runAction(this.ra);
        this.sprite.setAnchorPoint(0.5,0.5);
        this.sprite.setPosition(0,0);
        this.addChild(this.sprite);
    },

    changeImage:function(img,w,h){
        this.sprite.stopAllActions();
        var frameSeq = [];
        for (var i = 0; i < 3; i++) {
            var frame = cc.SpriteFrame.create(img,cc.rect(w*i,h*0,w,h));
            frameSeq.push(frame);
        }
        this.wa = cc.Animation.create(frameSeq,0.2);
        this.ra = cc.RepeatForever.create(cc.Animate.create(this.wa));
        this.sprite.runAction(this.ra);
    }
});