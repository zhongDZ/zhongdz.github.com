//
//  Stage.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var Stage = cc.Class.extend({

    ctor:function (game) {
        this.game             = game;
        this.storage          = this.game.storage;
        this.enemyTargetChip  = null;
        this.chips            = [];
        this.trees            = [];
        
        var excludeNums = [];
        var items = [];
        for(var i=0;i<game.storage.stageItems.length;i++){            
            var type  = game.storage.stageItems[i]["type"];
            var count = game.storage.stageItems[i]["count"];
            for(var j=0;j<count;j++){
                var num = getRandNumberFromRangeAndExcludeNumbers(1,25,excludeNums);
                var obj = {"type":type,"count":count,"chipNum":num};
                items.push(obj);
                excludeNums.push(num);
            }
        }

        //床のマップチップを張る
        var chipNum = 1;
        var stageBaseNum = 0;
        for (var j=0 ; j< 9 ; j++){
            for(var i=0 ; i < 9 ; i++){
                if(CONFIG.STAGE_BASE[stageBaseNum] == 1){
                    var type = "normal";
                    for(var k=0;k<items.length;k++){
                        if(chipNum == items[k]["chipNum"]){
                            type = items[k]["type"];
                        }
                    }

                    //奇数行と偶数行で列の位置をずらす
                    if(Math.floor(j%2)==0){
                        var posX = 200 * i;
                        var posY = (105/2) * j;
                    }else{
                        var posX = 100 + Math.floor(200 * i);
                        var posY = (105/2) * j;  
                    }

                    this.chipSprite = new Chip(posX,posY,this.game,type);
                    this.game.mapNode.addChild(this.chipSprite);
                    this.chips.push(this.chipSprite);

                    this.tree = new Tower(posX,posY,this.game);
                    this.game.mapNode.addChild(this.tree,1000 - posY);
                    this.trees.push(this.tree);
                    this.tree.setVisible(false);

                    chipNum++;
                }
                stageBaseNum++;
            }
        }

        //コインを作成する
        var coinCnt = this.storage.itemCoinCnt;
        for (var i=0 ; i < coinCnt ; i++){
            var coinX = getRandNumberFromRange(0,CONFIG.MAP_WIDHT);
            var coinY = getRandNumberFromRange(0,CONFIG.MAP_WIDHT);
            this.addCoin(coinX,coinY);
        }
    },

    //敵が目標とするターゲットを取得する
    getEnemyTargetChip:function(){
        for(var i=0;i<this.chips.length;i++){
            if(this.chips[i].isOccupied == true && this.chips[i].type == "normal"){
                this.enemyTargetChip  = this.chips[i];
                break;
            }
        }
    },

    getTerritoryCnt:function(){
        var cnt = 0;
        for(var i=0;i<this.chips.length;i++){
            if(this.chips[i].isOccupied == true){
                cnt++;
            }
        }
        return cnt;
    },

    getMaxTerritoryCnt:function(){
        return CONFIG.MAX_X_CNT * CONFIG.MAX_Y_CNT;
    },

    update:function(){

        if(this.enemyTargetChip == null){
            this.getEnemyTargetChip();
        }

        for(var i=0;i<this.chips.length;i++){
            this.chips[i].update();

            if(this.chips[i].type == "normal"){
                //占領した場合は木を表示する
                if(this.chips[i].isOccupied == true){
                    this.trees[i].setVisible(true);
                }else{
                    this.trees[i].setVisible(false);
                }
                
                //木がプレイヤーが画面で重なっている場合は透過する
                if(this.trees[i].getPosition().x - 100 <= this.game.player.getPosition().x 
                    && this.game.player.getPosition().x <= this.trees[i].getPosition().x + 100
                    && this.trees[i].getPosition().y <= this.game.player.getPosition().y
                ){
                    this.trees[i].setAlpha(255*0.3);
                }else{
                    this.trees[i].setAlpha(255*1);
                }
            }else{
                this.trees[i].setVisible(false);
            }
        }
    },

    addCoin:function(x,y){
        var coin = new Coin();
        this.game.mapNode.addChild(coin,999);
        coin.set_position(x,y);
        this.game.coins.push(coin);
    },
});

