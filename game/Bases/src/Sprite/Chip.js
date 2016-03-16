//
//  Chip.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var Chip = cc.Node.extend({

    ctor:function (posX,posY,game,type) {
        this._super();
        this.game              = game;
        this.type              = type;
        this.isOccupied        = false;

        this.enemyCollisionCnt = 0;
        this.enemyCollisionFlg = false;
        this.hp                = 100;
        this.maxHp             = 100;
        this.colleagueCnt      = 0;
        this.posX              = posX;
        this.posY              = posY;

        //デバッグ用の中心を表示するサインマーカー
        if(CONFIG.DEBUG_FLAG==1){
            this.sigh = cc.LayerColor.create(cc.c4b(255,0,0,255),3,3);
            this.sigh.setPosition(posX,posY);
            this.addChild(this.sigh,-9995);
        }

        //マップイメージ
        if(this.type == "normal"){
            this.chipSprite = cc.Sprite.create(s_mapchip_001);
        }else if(this.type == "levelup"){
            this.chipSprite = cc.Sprite.create(s_mapchip_002);
        }else if(this.type == "recover"){
            this.chipSprite = cc.Sprite.create(s_mapchip_003);
        }else if(this.type == "bomb"){
            this.chipSprite = cc.Sprite.create(s_mapchip_004);
        }else if(this.type == "costdown"){
            this.chipSprite = cc.Sprite.create(s_mapchip_005);
        }

        //マップ配置
        this.addChild(this.chipSprite);
        this.chipSprite.setPosition(0,0);
        this.chipSprite.setAnchorPoint(0.5,0.5);
        this.setPosition(posX,posY);

        //ゲージ配置s_mapchip_black
        this.rectBase = cc.Sprite.create(s_mapchip_black);
        this.rectBase.setOpacity(255*0.7);
        this.rectBase.setPosition(0,0);
        this.rectBase.setAnchorPoint(0.5,0.5);
        this.addChild(this.rectBase);
    },

    getCirclePos:function(cubeAngle){
        if(cubeAngle>=360){
            cubeAngle = 0;
        }
        var cubeRad = cubeAngle * Math.PI / 180;
        var cubeX = 50 * Math.cos(cubeRad) + this.posX;
        var cubeY = 50 * Math.sin(cubeRad) + this.posY;
        return [cubeX,cubeY];
    },

    update:function() {

        if(this.enemyCollisionCnt == 1){
            this.enemyCollisionFlg = true;
            this.enemyCollisionCnt++;
            if(this.enemyCollisionCnt>=10){
                this.enemyCollisionCnt = 0;
                this.enemyCollisionFlg = false;
            }
        }

        //プレイヤーが占領する
        if(this.isOccupied == false && this.hp <= 0){
            this.isOccupied = true;
            this.game.storage.occupiedCnt++;
            //SE
            playSE(s_se_occupied);
            if(this.type == "normal"){           
                this.game.setTerritoryCnt();

                //占領ミッションの場合はカットインを表示する
                if(this.game.storage.missionGenre == "occupy"){
                    this.game.cutIn.set_text(
                        "占領した!.[" + this.game.territoryCnt + "/" + this.game.missionMaxCnt + "]"
                    );
                }

                //コインを作成する
                for (var i=0 ; i < 6 ; i++){
                    var data = this.getCirclePos(i * 60);
                    this.game.stage.addCoin(data[0],data[1]);
                }
            }
            if(this.type == "recover"){
                this.game.setAllUnitRecover();
                this.game.cutIn.set_text("全ユニット回復!!");
            }
            if(this.type == "levelup"){           
                this.game.setLevelUpPlayerAndColleagues();
                this.game.cutIn.set_text("パワーアップ × " + this.game.player.lv + "");
                this.game.strategyCode = 4;
            }
            if(this.type == "bomb"){
                this.game.setRemoveAllEnemies();
                this.game.cutIn.set_text("Map上の敵を排除!");
            }
            if(this.type == "costdown"){
                this.game.setBornCostDecrease();
                this.game.cutIn.set_text("仲間生産コスト↓");
            }
        }

        //敵が占領する
        if(this.isOccupied == true && this.hp >= 100){
            this.isOccupied = false;
            this.game.storage.occupiedCnt--;
            //SE
            playSE(s_se_enemyOccupied);
            //ターゲットを削除する
            this.game.stage.enemyTargetChip = null;
            //新しいターゲットを選択
            this.game.stage.getEnemyTargetChip();
            //CutIN
            this.game.setTerritoryCnt();
            this.game.cutIn.set_text("敵に占領された.[" + this.game.territoryCnt + "/" + this.game.missionMaxCnt + "]");
        }

        //HPの最大と最小
        if(this.hp <= 0)   this.hp = 0;
        if(this.hp >= 100) this.hp = 100;
        var rate = this.hp / this.maxHp;
        this.rectBase.setScale(rate);
    },
});
