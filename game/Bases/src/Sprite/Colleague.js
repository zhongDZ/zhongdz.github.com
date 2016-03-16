//
//  Colleague.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var Colleague = cc.Node.extend({
    ctor:function (game) {
        this._super();
        this.game              = game;
        this.storage           = this.game.storage;
        this.player            = this.game.player;

        this.flashCnt          = 0;
        this.isCharaVisible    = true;
        this.damageCnt         = 0;
        this.isDamageOn        = false;

        //status
        this.lv                = this.storage.lv;
        this.hp                = this.storage.hp;
        this.maxHp             = this.storage.maxHp;
        this.attack            = this.storage.attack;
        this.defence           = this.storage.defence;
        this.eyeSightRange     = 20;
        this.walkSpeed         = this.storage.walkSpeed;
        this.createCot         = this.storage.createCot;

        //image
        this.charactorCode     = this.storage.charactorCode;
        this.image             = this.storage.image;
        this.imgWidth          = this.storage.imgWidth; 
        this.imgHeight         = this.storage.imgHeight;

        //init
        this.battleInterval    = 0;
        this.scale = 1;
        this.isChase           = false;
        this.isSetAttackCircle = false;
        this.targetEnemy       = null;
        this.direction         = "front";
        
        //HPゲージ
        this.gauge             = new Gauge(30,4,'blue');
        this.gauge.setPosition(-20,20);
        this.addChild(this.gauge,100);

        this.drawnode          = cc.DrawNode.create();
        this.addChild(this.drawnode);
        this.drawnode.drawDot(cc.p(0,0),this.eyeSightRange,cc.c4f(1,0,0,0.3));
        this.initSprite();
        this.damangeTexts      = new Array();
        this.isDamaged         = false;
        this.isStop            = false;
        this.directionCnt      = 0;
        this.beforeX           = this.getPosition().x;
        this.beforeY           = this.getPosition().y;
        this.isWait            = false;
        this.isSettableTargetEnemy = true;
        this.removeTargetEnemyCnt = 0;
        this.rollingId = getRandNumberFromRange(0,17);

        var frameSeq = [];
        for (var i = 0; i <= 4; i++) {
            var frame = cc.SpriteFrame.create(s_break,cc.rect(48*i,0,48,96));
            frameSeq.push(frame);
        }
        var wa = cc.Animation.create(frameSeq,0.1);
        this.energyRep = cc.Repeat.create(cc.Animate.create(wa),1);
        this.energyRep.retain();
        this.energySprite = cc.Sprite.create(s_coin,cc.rect(0,0,48,96));
        this.energySprite.retain();
        this.energySprite.setPosition(0,20);
        this.energySprite.runAction(this.energyRep);
        this.addChild(this.energySprite);
    },
    
    remove:function() {
        this.removeChild(this.sprite);
        this.removeChild(this.gauge);
        //damage text
        for(var i=0;i<this.damangeTexts.length;i++){
            this.removeChild(this.damangeTexts[i]);
        }
    },

    addFlashCnt:function(){
        this.flashCnt++;
        if(this.flashCnt>=3){
            this.flashCnt=0;
            if(this.isCharaVisible == true){
                this.isCharaVisible = false;
                this.sprite.setOpacity(255*0.2);
            }else{
                this.isCharaVisible = true;
                this.sprite.setOpacity(255*1);
            }
        }
    },

    update:function() {

        if(this.isDamageOn == true){
            this.addFlashCnt();
            this.damageCnt++;
            if(this.damageCnt>=50){
                this.damageCnt = 0;
                this.isDamageOn = false;
                this.sprite.setOpacity(255*1);
            }
        }

        if(this.energyRep.isDone() == true){
            this.energyRep.release();
            this.energySprite.release();
            this.removeChild(this.energySprite);
        }
        //一定時間が経過するまで敵をターゲットすることができない
        if(this.isSettableTargetEnemy == false){
            this.removeTargetEnemyCnt++;
            if(this.removeTargetEnemyCnt >= 30 * 2){
                this.isSettableTargetEnemy = true;
                this.removeTargetEnemyCnt = 0;
            }
        }

        if(this.hp == 0){
            this.remove();
            return false;
        }

        this.gauge.update(this.hp/this.maxHp);

        //damage text
        for(var i=0;i<this.damangeTexts.length;i++){
            if(this.damangeTexts[i].update() == false){
                this.removeChild(this.damangeTexts[i]);
                this.damangeTexts.splice(i, 1);
            }
        }

        this.drawnode.setVisible(false);


        if(this.isChase == true){            
            //作戦:プレイヤーを追従(コイ)
            if(this.game.strategyCode == 1){
                //プレイヤーのターゲットがいればそれを追いかける
                if(this.player.targetEnemy != null){
                    if(this.player.targetEnemy.hp > 0){
                        this.attackTo(this.player.targetEnemy);
                    }
                }else{
                    this.moveTo(this.player);
                }
            }

            //作戦:防御
            if(this.game.strategyCode == 4){
                var posX = this.player.getPosition().x 
                    + this.player.cubes[this.rollingId].rollingCube.getPosition().x;
                var posY = this.player.getPosition().y 
                    + this.player.cubes[this.rollingId].rollingCube.getPosition().y;
                this.moveToPositions(posX,posY);
            }
        }

        //向きの制御
        this.directionCnt++;
        if(this.directionCnt >= 5){
            this.directionCnt = 0;
            this.setDirection(this.beforeX,this.beforeY);
            this.beforeX = this.getPosition().x;
            this.beforeY = this.getPosition().y;
        }

        return true;
    },

    damage:function(damagePoint) {
        playSE(s_se_attack);
        
        this.hp = this.hp - damagePoint;
        if(this.hp < 0){
            this.hp = 0;
        }
        var damageText = new DamageText();
        this.addChild(damageText,5);
        this.damangeTexts.push(damageText);

        this.isDamageOn = true;
    },

    doLebelUp:function(){
        this.lv++;
        this.sprite.setScale(this.lv,this.lv);
    },

    getDirection:function(){
        return this.direction;
    },

    initSprite:function(){
        //足下の影
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

    attackToBullet:function(bullet){
        //if(this.isStop) return;
        if(this.getPosition().x < bullet.getPosition().x){
            if(Math.abs(this.getPosition().x - bullet.getPosition().x) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x + this.walkSpeed,
                    this.getPosition().y
                );
            }else{
                this.setPosition(
                    bullet.getPosition().x,
                    this.getPosition().y
                );
            }
        }
        if(this.getPosition().x > bullet.getPosition().x){
            if(Math.abs(this.getPosition().x - bullet.getPosition().x) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x - this.walkSpeed,
                    this.getPosition().y
                );
            }else{
                this.setPosition(
                    bullet.getPosition().x,
                    this.getPosition().y
                );
            }
        }
        if(this.getPosition().y < bullet.getPosition().y){
            if(Math.abs(this.getPosition().y - bullet.getPosition().y) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x,
                    this.getPosition().y + this.walkSpeed
                );
            }else{
                this.setPosition(
                    this.getPosition().x,
                    bullet.getPosition().y
                );
            }
        }
        if(this.getPosition().y > bullet.getPosition().y){
            if(Math.abs(this.getPosition().y - bullet.getPosition().y) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x,
                    this.getPosition().y - this.walkSpeed
                );
            }else{
                this.setPosition(
                    this.getPosition().x,
                    bullet.getPosition().y
                );
            }
        }
    },


    attackTo:function(enemy){
        if(this.isStop) return;

        if(this.getPosition().x < enemy.getPosition().x){
            if(Math.abs(this.getPosition().x - enemy.getPosition().x) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x + this.walkSpeed,
                    this.getPosition().y
                );
            }else{
                this.setPosition(
                    enemy.getPosition().x,
                    this.getPosition().y
                );
            }
        }
        if(this.getPosition().x > enemy.getPosition().x){
            if(Math.abs(this.getPosition().x - enemy.getPosition().x) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x - this.walkSpeed,
                    this.getPosition().y
                );
            }else{
                this.setPosition(
                    enemy.getPosition().x,
                    this.getPosition().y
                );
            }
        }
        if(this.getPosition().y < enemy.getPosition().y){
            if(Math.abs(this.getPosition().y - enemy.getPosition().y) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x,
                    this.getPosition().y + this.walkSpeed
                );
            }else{
                this.setPosition(
                    this.getPosition().x,
                    enemy.getPosition().y
                );
            }
        }
        if(this.getPosition().y > enemy.getPosition().y){
            if(Math.abs(this.getPosition().y - enemy.getPosition().y) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x,
                    this.getPosition().y - this.walkSpeed
                );
            }else{
                this.setPosition(
                    this.getPosition().x,
                    enemy.getPosition().y
                );
            }
        }
    },


    moveTo:function(player) {
        if(this.isStop) return;

        if(this.getPosition().x < player.getPosition().x){
            if(Math.abs(this.getPosition().x - player.getPosition().x) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x + this.walkSpeed,
                    this.getPosition().y
                );
            }else{
                this.setPosition(
                    player.getPosition().x,
                    this.getPosition().y
                );
            }
        }
        if(this.getPosition().x > player.getPosition().x){
            if(Math.abs(this.getPosition().x - player.getPosition().x) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x - this.walkSpeed,
                    this.getPosition().y
                );
            }else{
                this.setPosition(
                    player.getPosition().x,
                    this.getPosition().y
                );
            }
        }
        if(this.getPosition().y < player.getPosition().y){
            if(Math.abs(this.getPosition().y - player.getPosition().y) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x,
                    this.getPosition().y + this.walkSpeed
                );
            }else{
                this.setPosition(
                    this.getPosition().x,
                    player.getPosition().y
                );
            }
        }
        if(this.getPosition().y > player.getPosition().y){
            if(Math.abs(this.getPosition().y - player.getPosition().y) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x,
                    this.getPosition().y - this.walkSpeed
                );
            }else{
                this.setPosition(
                    this.getPosition().x,
                    player.getPosition().y
                );
            }
        }
    },


    moveToPositions:function(posX,posY) {

        //if(this.isStop) return;
        if(this.getPosition().x < posX){
            if(Math.abs(this.getPosition().x - posX) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x + this.walkSpeed,
                    this.getPosition().y
                );
            }else{
                this.setPosition(
                    posX,
                    this.getPosition().y
                );
            }
        }
        if(this.getPosition().x > posX){
            if(Math.abs(this.getPosition().x - posX) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x - this.walkSpeed,
                    this.getPosition().y
                );
            }else{
                this.setPosition(
                    posX,
                    this.getPosition().y
                );
            }
        }
        if(this.getPosition().y < posY){
            if(Math.abs(this.getPosition().y - posY) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x,
                    this.getPosition().y + this.walkSpeed
                );
            }else{
                this.setPosition(
                    this.getPosition().x,
                    posY
                );
            }
        }
        if(this.getPosition().y > posY){
            if(Math.abs(this.getPosition().y - posY) > this.walkSpeed){
                this.setPosition(
                    this.getPosition().x,
                    this.getPosition().y - this.walkSpeed
                );
            }else{
                this.setPosition(
                    this.getPosition().x,
                    posY
                );
            }
        }

    },

    setDirection:function(DX,DY){
        //横の距離が大きいとき
        var diffX = Math.floor(this.getPosition().x - DX);
        var diffY = Math.floor(this.getPosition().y - DY);
        
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