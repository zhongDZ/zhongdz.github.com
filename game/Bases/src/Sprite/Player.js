//
//  Player.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var Player = cc.Node.extend({

    ctor:function (game) {
        this._super();
        this.game              = game;
        this.storage           = this.game.storage;

        //status
        this.lv               = this.storage.lv;
        this.hp               = this.storage.hp;
        this.maxHp            = this.storage.maxHp;
        this.attack           = this.storage.attack;
        this.defence          = this.storage.defence;
        this.eyeSightRange    = this.storage.eyeSightRange;
        this.walkSpeed        = this.storage.walkSpeed;
        this.createCot        = this.storage.createCot;

        //image
        this.charactorCode     = this.storage.charactorCode;
        this.image             = this.storage.image;
        this.imgWidth          = this.storage.imgWidth; 
        this.imgHeight         = this.storage.imgHeight;

        //init
        this.scale             = 1;
        this.battleInterval    = 0;
        this.targetEnemy       = null;
        this.direction         = "front";
        this.bulletSpeed       = CONFIG.BULLET_SPEED;

        this.targetChip        = null;
        this.damangeTexts      = new Array();
        this.isDamaged         = false;
        this.isStop            = false;

        //HPゲージ
        this.gauge             = new Gauge(30,4,'blue');
        this.gauge.setPosition(-20,20);
        this.addChild(this.gauge,100);

        //AttackCube
        this.cubes = new Array();
        for (var i=0 ; i < 18 ; i++){
            this.cube = new Cube(i);
            this.cubes.push(this.cube);
            this.addChild(this.cube,999);
        }

        //initialize Animation
        this.initializeWalkAnimation();
    },
    
    init:function () {
    },

    update:function() {
        this.gauge.update(this.hp/this.maxHp);

        //update eye sight range
        this.eyeSightRange = 50 + this.game.colleagueCnt * 5;

        //damage text
        for(var i=0;i<this.damangeTexts.length;i++){
            if(this.damangeTexts[i].update() == false){
                this.removeChild(this.damangeTexts[i]);
                this.damangeTexts.splice(i, 1);
            }
        }

        //cubes
        for(var i=0;i<this.cubes.length;i++){
            this.cubes[i].update();
        }
    },

    remove:function() {
        this.removeChild(this.sprite);
        this.removeChild(this.gauge);
        //damage text
        for(var i=0;i<this.damangeTexts.length;i++){
            this.removeChild(this.damangeTexts[i]);
        }
    },
    
    damage:function(damagePoint) {
        playSE(s_se_attack);
        
        this.hp = this.hp - damagePoint;
        if(this.hp < 0){
            this.hp = 0;
        }
        this.storage.playerHp = this.hp;

        var damageText = new DamageText();
        this.addChild(damageText,5);
        this.damangeTexts.push(damageText);
    },

    getDirection:function(){
        return this.direction;
    },

    initializeWalkAnimation:function(){
        //足下の陰
        this.shadow = cc.Sprite.create(s_shadow);
        this.shadow.setPosition(0,-20);
        this.shadow.setOpacity(255*0.4);
        this.addChild(this.shadow);

        var frameSeq = [];
        for (var i = 0; i < 3; i++) {
            //96/3,194/4
            var frame = cc.SpriteFrame.create(this.image,cc.rect(this.imgWidth*i,this.imgHeight*0,this.imgWidth,this.imgHeight));
            frameSeq.push(frame);
        }
        this.wa = cc.Animation.create(frameSeq,0.2);
        this.ra = cc.RepeatForever.create(cc.Animate.create(this.wa));
        this.sprite = cc.Sprite.create(this.image,cc.rect(0,0,this.imgWidth,this.imgHeight));
        this.sprite.runAction(this.ra);
        this.addChild(this.sprite);

        //デバッグ
        if(CONFIG.DEBUG_FLAG==1){
            this.sigh = cc.LayerColor.create(cc.c4b(255,0,0,255),3,3);
            this.sigh.setPosition(0,0);
            this.addChild(this.sigh);
        }
    },

    walkLeftDown:function(){
        //左下
        if(this.direction != "front"){
            this.direction = "front";
            this.sprite.stopAllActions();
            var frameSeq = [];
            for (var i = 0; i < 3; i++) {
                var frame = cc.SpriteFrame.create(this.image,cc.rect(this.imgWidth*i,this.imgHeight*0,this.imgWidth,this.imgHeight));
                frameSeq.push(frame);
            }
            this.wa = cc.Animation.create(frameSeq,0.2);
            this.ra = cc.RepeatForever.create(cc.Animate.create(this.wa));
            this.sprite.runAction(this.ra);
        }
    },

    walkRightDown:function(){
        //右下
        if(this.direction != "left"){
            this.direction = "left";
            this.sprite.stopAllActions();
            var frameSeq = [];
            for (var i = 0; i < 3; i++) {
                var frame = cc.SpriteFrame.create(this.image,cc.rect(this.imgWidth*i,this.imgHeight*1,this.imgWidth,this.imgHeight));
                frameSeq.push(frame);
            }
            this.wa = cc.Animation.create(frameSeq,0.2);
            this.ra = cc.RepeatForever.create(cc.Animate.create(this.wa));
            this.sprite.runAction(this.ra);
        }
    },

    walkLeftUp:function(){
        //左上
        if(this.direction != "right"){
            this.direction = "right";
            this.sprite.stopAllActions();
            var frameSeq = [];
            for (var i = 0; i < 3; i++) {
                var frame = cc.SpriteFrame.create(this.image,cc.rect(this.imgWidth*i,this.imgHeight*2,this.imgWidth,this.imgHeight));
                frameSeq.push(frame);
            }
            this.wa = cc.Animation.create(frameSeq,0.2);
            this.ra = cc.RepeatForever.create(cc.Animate.create(this.wa));
            this.sprite.runAction(this.ra);
        }
    },

    walkRightUp:function(){
        //右上
        if(this.direction != "back"){
            this.direction = "back";
            this.sprite.stopAllActions();
            var frameSeq = [];
            for (var i = 0; i < 3; i++) {
                var frame = cc.SpriteFrame.create(this.image,cc.rect(this.imgWidth*i,this.imgHeight*3,this.imgWidth,this.imgHeight));
                frameSeq.push(frame);
            }
            this.wa = cc.Animation.create(frameSeq,0.2);
            this.ra = cc.RepeatForever.create(cc.Animate.create(this.wa));
            this.sprite.runAction(this.ra);
        }
    },

    moveToTargetMarker:function(targetSprite) {
        if(this.isStop) return;

        if(this.getPosition().x < targetSprite.getPosition().x){
            if(Math.abs(this.getPosition().x - targetSprite.getPosition().x) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x + this.walkSpeed,
                    this.getPosition().y
                );
            }else{
                this.setPosition(
                    targetSprite.getPosition().x,
                    this.getPosition().y
                );
            }
        }
        if(this.getPosition().x > targetSprite.getPosition().x){
            if(Math.abs(this.getPosition().x - targetSprite.getPosition().x) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x - this.walkSpeed,
                    this.getPosition().y
                );
            }else{
                this.setPosition(
                    targetSprite.getPosition().x,
                    this.getPosition().y
                );
            }
        }
        if(this.getPosition().y < targetSprite.getPosition().y){
            if(Math.abs(this.getPosition().y - targetSprite.getPosition().y) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x,
                    this.getPosition().y + this.walkSpeed
                );
            }else{
                this.setPosition(
                    this.getPosition().x,
                    targetSprite.getPosition().y
                );
            }
        }
        if(this.getPosition().y > targetSprite.getPosition().y){
            if(Math.abs(this.getPosition().y - targetSprite.getPosition().y) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x,
                    this.getPosition().y - this.walkSpeed
                );
            }else{
                this.setPosition(
                    this.getPosition().x,
                    targetSprite.getPosition().y
                );
            }
        }
    },

    playerDirectionManage:function(targetSprite){
        //横の距離が大きいとき
        var diffX = Math.floor(targetSprite.getPosition().x - this.getPosition().x);
        var diffY = Math.floor(targetSprite.getPosition().y - this.getPosition().y);
        
        if(diffX > 0 && diffY > 0){
            this.walkRightUp();
        }
        if(diffX > 0 && diffY < 0){
            this.walkRightDown();
        }
        if(diffX < 0 && diffY > 0){
            this.walkLeftUp();
        }
        if(diffX < 0 && diffY < 0){
            this.walkLeftDown();
        }
    },

});