//
//  Enemy.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var Enemy = cc.Node.extend({
    ctor:function (game,code) {
        this._super();
        this.game    = game;
        this.storage = this.game.storage;
        //HPゲージ
        this.gauge = new Gauge(30,4,'red');
        this.gauge.setPosition(-20,20);
        this.addChild(this.gauge,100);

        //initialize
        this.initializeParam(code);
        this.initSprite();
    },

    loadEnemyJson : function() {
        var jsonFile = cc.FileUtils.getInstance().getStringFromFile(enemy_json);
        this.dict    = JSON.parse(jsonFile);
        return this.dict["enemies"];
    },

    initializeParam:function(code){
        var data             = this.loadEnemyJson();
        var jsonData         = data[code];
        this.hp              = jsonData["hp"];
        this.maxHp           = jsonData["hp"];
        this.attack          = jsonData["attack"];
        this.defence         = jsonData["defence"];
        this.imagePath       = jsonData["image"];
        this.imgWidth        = jsonData["image_width"];
        this.imgHeight       = jsonData["image_height"];
        this.walkSpeed       = jsonData["walk_speed"];
        this.type            = jsonData["type"];
        this.walkRangeX      = jsonData["eye_sight"];
        this.walkRangeY      = jsonData["eye_sight"];
        this.eyeSight        = jsonData["eye_sight"];
        this.direction       = "front";
        this.dx              = 2;
        this.damangeTexts    = new Array();
        this.isDamaged       = false;
        this.walkStatus      = "normal";

        this.battleIntervalToPlayer     = 0;
        this.battleIntervalToColleague  = 0;
        this.walkDistination = new Array();
        this.waklDistSeqNum  = 0;

        //歩行方向
        this.beforeX         = this.getPosition().x;
        this.beforeY         = this.getPosition().y;
        this.directionCnt    = 0;
        //ダメージ表示
        this.flashCnt          = 0;
        this.isCharaVisible    = true;
        this.damageCnt         = 0;
        this.isDamageOn        = false;
        //弾丸発射用
        this.bulletLncTime     = 0;
        this.bulletLncMaxTime  = 30 * 2;
    },

    setPos:function(depX,depY,walkingRange){
        this.setPosition(depX,depY);
        this.walkDistination = walkingRange;
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
        //敵の攻撃タイプがbulletだった場合は弾丸を発射する
        if(this.type == "bullet"){
            this.bulletLncTime++;
            if(this.bulletLncTime >= this.bulletLncMaxTime){
                this.bulletLncTime = 0;
                this.game.addEnemyBullet(this);
            }
        }

        //ダメージを受けた場合は、透過で点滅する
        if(this.isDamageOn == true){
            this.addFlashCnt();
            this.damageCnt++;
            if(this.damageCnt>=40){
                this.damageCnt = 0;
                this.isDamageOn = false;
                this.sprite.setOpacity(255*1);
            }
        }

        //通常は、ターゲットのmapチップを目指して動く
        if(this.walkStatus == "normal"){
            if(this.game.stage.enemyTargetChip == null){
                var dX = this.game.player.getPosition().x - this.getPosition().x;
                var dY = this.game.player.getPosition().y - this.getPosition().y;
                if(dX>0){
                    this.setPosition(this.getPosition().x + this.walkSpeed, this.getPosition().y);
                }
                if(dX<0){
                    this.setPosition(this.getPosition().x - this.walkSpeed, this.getPosition().y);
                }
                if(dY>0){
                    this.setPosition(this.getPosition().x, this.getPosition().y + this.walkSpeed);
                }
                if(dY<0){
                    this.setPosition(this.getPosition().x, this.getPosition().y - this.walkSpeed);
                }
            }else{
                var dX = this.getPosition().x - this.game.stage.enemyTargetChip.getPosition().x;
                var dY = this.getPosition().y - this.game.stage.enemyTargetChip.getPosition().y;

                if(dX>0){
                    this.setPosition(this.getPosition().x - this.walkSpeed, this.getPosition().y);
                }
                if(dX<0){
                    this.setPosition(this.getPosition().x + this.walkSpeed, this.getPosition().y);
                }
                if(dY>0){
                    this.setPosition(this.getPosition().x, this.getPosition().y - this.walkSpeed);
                }
                if(dY<0){
                    this.setPosition(this.getPosition().x, this.getPosition().y + this.walkSpeed);
                }
                if((dX==0)&&(dY==0)){
                    this.waklDistSeqNum+=1;
                    if(this.waklDistSeqNum>2){
                        this.waklDistSeqNum = 0;
                    }
                } 
            }
        //プレイヤーを追いかける
        }else if(this.walkStatus == "chase"){
            var dX = this.game.player.getPosition().x - this.getPosition().x;
            var dY = this.game.player.getPosition().y - this.getPosition().y;
            if(dX>0){
                this.setPosition(this.getPosition().x + this.walkSpeed, this.getPosition().y);
            }
            if(dX<0){
                this.setPosition(this.getPosition().x - this.walkSpeed, this.getPosition().y);
            }
            if(dY>0){
                this.setPosition(this.getPosition().x, this.getPosition().y + this.walkSpeed);
            }
            if(dY<0){
                this.setPosition(this.getPosition().x, this.getPosition().y - this.walkSpeed);
            }
        }

        this.gauge.update(this.hp/this.maxHp);

        //HPが0になった場合は死ぬ
        if(this.hp == 0){
            this.remove();
            return false;
        }

        //ダメージを受けたら表示する漫画テキスト
        for(var i=0;i<this.damangeTexts.length;i++){
            if(this.damangeTexts[i].update() == false){
                //ここでRemoveしないと、spriteがどんどん増えていく
                this.removeChild(this.damangeTexts[i]);
                this.damangeTexts.splice(i, 1);
            }
        }

        //方向制御
        this.directionCnt++;
        if(this.directionCnt >= 5){
            this.directionCnt = 0;
            this.setDirection(this.beforeX,this.beforeY);
            this.beforeX = this.getPosition().x;
            this.beforeY = this.getPosition().y;
        }

        return true;
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

    remove:function() {
        this.removeChild(this.sprite);
        this.removeChild(this.gauge);
        /*
        //damage text
        for(var i=0;i<this.damangeTexts.length;i++){
            this.removeChild(this.damangeTexts[i]);
        }*/
    },

    getNearistColleague:function(){
        var colleague = null;
        for(var i=0;i<this.game.colleagues.length;i++){
            var distance = cc.pDistance(
                this.getPosition(),
                this.game.colleagues[i].getPosition()
            );
            if(distance <= 150){
                colleague = this.game.colleagues[i];
            }
        }
        return colleague;
    },

    damage:function(damagePoint) {
        playSE(s_se_attack);

        this.hp = this.hp - damagePoint;
        if(this.hp < 0){
            this.hp = 0;
        }
        
        this.damageText = new DamageText();
        this.addChild(this.damageText,5);
        this.damangeTexts.push(this.damageText);

        this.isDamageOn = true;
    },

    initSprite:function(){
        //足下の影
        this.shadow = cc.Sprite.create(s_shadow);
        this.shadow.setPosition(0,-20);
        this.shadow.setOpacity(255*0.4);
        this.addChild(this.shadow);

        var frameSeq = [];
        for (var i = 0; i < 3; i++) {
            var frame = cc.SpriteFrame.create(this.imagePath,cc.rect(this.imgWidth*i,this.imgHeight*0,this.imgWidth,this.imgHeight));
            frameSeq.push(frame);
        }
        this.wa = cc.Animation.create(frameSeq,0.2);
        this.ra = cc.RepeatForever.create(cc.Animate.create(this.wa));
        this.sprite = cc.Sprite.create(this.imagePath,cc.rect(0,0,this.imgWidth,this.imgHeight));
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
                var frame = cc.SpriteFrame.create(this.imagePath,cc.rect(this.imgWidth*i,this.imgHeight*0,this.imgWidth,this.imgHeight));
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
                var frame = cc.SpriteFrame.create(this.imagePath,cc.rect(this.imgWidth*i,this.imgHeight*1,this.imgWidth,this.imgHeight));
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
                var frame = cc.SpriteFrame.create(this.imagePath,cc.rect(this.imgWidth*i,this.imgHeight*2,this.imgWidth,this.imgHeight));
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
                var frame = cc.SpriteFrame.create(this.imagePath,cc.rect(this.imgWidth*i,this.imgHeight*3,this.imgWidth,this.imgHeight));
                frameSeq.push(frame);
            }
            this.wa = cc.Animation.create(frameSeq,0.2);
            this.ra = cc.RepeatForever.create(cc.Animate.create(this.wa));
            this.sprite.runAction(this.ra);
        }
    },
});