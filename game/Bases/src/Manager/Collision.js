//
//  Collision.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

//プレイヤとマップチップの衝突判定
var collisionPlayerAndChip = function(game){
    game.player.targetChip = null;

    for(var i=0;i<game.stage.chips.length;i++){
        if(
            game.stage.chips[i].getPosition().x -50 <= game.player.getPosition().x 
        &&  game.player.getPosition().x <= game.stage.chips[i].getPosition().x + 50

        &&  game.stage.chips[i].getPosition().y -50 <= game.player.getPosition().y
        &&  game.player.getPosition().y <= game.stage.chips[i].getPosition().y + 50

        ){
            game.player.targetChip = game.stage.chips[i];
            //このチップと仲間全員との距離を測る
            var cnt = getCollisionColleagueAndChipCount(game,game.stage.chips[i]);
            //最大値は8程度
            if(cnt >= 8){cnt = 8;}
            game.stage.chips[i].hp -= 0.01 + cnt * CONFIG.PLAYER_OCCUPY_POWER;
            game.stage.chips[i].colleagueCnt = cnt;
        }else{
            if(game.stage.chips[i].isOccupied == false){
                game.stage.chips[i].hp = 100;
            }
        }
    }
};

//仲間とマップチップの衝突判定
var getCollisionColleagueAndChipCount = function(game,chip){
    var cnt    = 0;
    var margin = 50;
    for(var i=0;i<game.colleagues.length;i++){
        if(
            chip.getPosition().x  - margin <= game.colleagues[i].getPosition().x 
        &&  game.colleagues[i].getPosition().x <= chip.getPosition().x + 100 + margin

        &&  chip.getPosition().y - margin <= game.colleagues[i].getPosition().y
        &&  game.colleagues[i].getPosition().y <= chip.getPosition().y + 100 + margin

        ){
            cnt+=1;
        }
    }
    return cnt;
};

//敵とマップチップの衝突判定
var collisionEnemyAndChip = function(game){
    var cnt    = 0;
    var margin = 50;
    for(var i=0;i<game.stage.chips.length;i++){
        for(var k=0;k<game.enemies.length;k++){
            //敵はアイテムチップには反応しない.
            if(game.stage.chips[i].type == "normal"){
                if(
                    game.stage.chips[i].getPosition().x - 50 <= game.enemies[k].getPosition().x 
                &&  game.enemies[k].getPosition().x <= game.stage.chips[i].getPosition().x + 50

                &&  game.stage.chips[i].getPosition().y - 50 <= game.enemies[k].getPosition().y
                &&  game.enemies[k].getPosition().y <= game.stage.chips[i].getPosition().y + 50
                ){
                    game.stage.chips[i].enemyCollisionCnt = 1;
                    game.stage.chips[i].hp += CONFIG.ENEMY_OCCUPY_POWER;
                }
            }
        }
    }
};


//プレイヤーと仲間の衝突判定
var collisionPlayerAndColleague = function(player,colleagues,game){
    
    for(var i=0;i<colleagues.length;i++){
        var colleague = colleagues[i];
        var distance = cc.pDistance(player.getPosition(),colleague.getPosition());
        
        //付近に来たら仲間になる（プレイヤーを追いかける）
        if(distance < 50){
            colleague.isChase = true;
        }
        
        //近づき過ぎたら止まる
        colleague.isStop = false;
        if(distance < CONFIG.PLAYER_AND_COLLEAGUE_KNOCK_BACK_RANGE){
            colleague.isStop = true;
        }  
    }
};

//プレイヤーと弾丸の衝突判定
var collisionPlayerAndEnemyBullet = function(player,bullets){
    
    for(var i=0;i<bullets.length;i++){
        var bullet = bullets[i];
        var distance = cc.pDistance(player.getPosition(),bullet.getPosition());
        
        if(distance < 50 && bullet.isEffect == true){
            player.damage(bullet.attack);
            bullet.isEffect = false;
        }
    }
};

//仲間と弾丸の衝突判定
var collisionColleguesAndEnemyBullet = function(colleagues,bullets){
    for(var j=0;j<colleagues.length;j++){
        for(var i=0;i<bullets.length;i++){
            var bullet = bullets[i];
            var distance = cc.pDistance(colleagues[j].getPosition(),bullet.getPosition());

            if(distance < 50 && bullet.isEffect == true){
                colleagues[j].damage(bullet.attack);
                bullet.isEffect = false;
            }
        }
    }
};


//仲間同士のあたり判定(ノックバックする)
var collisionColleagueAndColleague = function(colleagues){
    //ColleagueとColleagueの衝突判定
    for(var j=0;j<colleagues.length;j++){
        var colleagueOne = colleagues[j];
        for(var k=0;k<colleagues.length;k++){
            var colleagueTwo = colleagues[k];

            if(j != k){
                var distance = cc.pDistance(colleagueOne.getPosition(),colleagueTwo.getPosition());

                //ノックバック
                if(distance < CONFIG.COLLEAGUE_AND_COLLEAGUE_KNOCK_BAKC_RANGE){
                    var diffX = colleagueTwo.getPosition().x - colleagueOne.getPosition().x;
                    var diffY = colleagueTwo.getPosition().y - colleagueOne.getPosition().y;
                    if(diffX > 0){
                        colleagueTwo.setPosition(
                            colleagueTwo.getPosition().x + colleagueTwo.walkSpeed,
                            colleagueTwo.getPosition().y
                        );
                    }
                    if(diffX < 0){
                        colleagueTwo.setPosition(
                            colleagueTwo.getPosition().x - colleagueTwo.walkSpeed,
                            colleagueTwo.getPosition().y
                        );
                    }
                    if(diffY > 0){
                        colleagueTwo.setPosition(
                            colleagueTwo.getPosition().x,
                            colleagueTwo.getPosition().y + colleagueTwo.walkSpeed
                        );
                    }
                    if(diffY < 0){
                        colleagueTwo.setPosition(
                            colleagueTwo.getPosition().x,
                            colleagueTwo.getPosition().y - colleagueTwo.walkSpeed
                        );
                    }
                }
            }
        }
    }
};

//仲間と敵の衝突判定
var collisionColleagueAndEnemy = function(colleagues,enemies){
    for(var j=0;j<colleagues.length;j++){
        for(var k=0;k<enemies.length;k++){
            var distance = cc.pDistance(colleagues[j].getPosition(),enemies[k].getPosition());

            if(distance < 50 && colleagues[j].isChase == true){

                //ターゲットにSet可能状態のときのみ、ターゲットをセットする
                if(colleagues[j].isSettableTargetEnemy == true){
                    colleagues[j].targetEnemy = enemies[k];
                }

                if(enemies[k].type == "normal"){
                    //敵->仲間 (ダメージ)
                    enemies[k].battleIntervalToPlayer++;
                    if(enemies[k].battleIntervalToPlayer >= 30){
                        enemies[k].battleIntervalToPlayer = 0;
                        colleagues[j].damage(enemies[k].attack);
                    }
                }

                //仲間->敵 (ダメージ)
                colleagues[j].battleInterval++;
                if(colleagues[j].battleInterval >= 30){
                    colleagues[j].battleInterval = 0;
                    enemies[k].damage(colleagues[j].attack);
                }
            }

            //ノックバック
            if(distance < 30){
                var diffX = colleagues[j].getPosition().x - enemies[k].getPosition().x;
                var diffY = colleagues[j].getPosition().y - enemies[k].getPosition().y;
                if(diffX > 0){
                    colleagues[j].setPosition(
                        colleagues[j].getPosition().x + 10,
                        colleagues[j].getPosition().y
                    );
                }
                if(diffX < 0){
                    colleagues[j].setPosition(
                        colleagues[j].getPosition().x - 10,
                        colleagues[j].getPosition().y
                    );
                }
                if(diffY > 0){
                    colleagues[j].setPosition(
                        colleagues[j].getPosition().x,
                        colleagues[j].getPosition().y + 10
                    );
                }
                if(diffY < 0){
                    colleagues[j].setPosition(
                        colleagues[j].getPosition().x,
                        colleagues[j].getPosition().y - 10
                    );
                }
            }
        }
    }
};

//プレイヤーと敵の衝突判定
var collisionPlayerAndEnemy = function(player,enemies){

    player.targetEnemy = null;

    for(var i=0;i<enemies.length;i++){
        var enemy = enemies[i];
        var distance = cc.pDistance(player.getPosition(),enemy.getPosition());

        //ターゲットを決定する        
        if(distance < player.eyeSightRange){
            player.targetEnemy = enemy;
        }

        //敵が追いかけてくる
        enemy.walkStatus = "normal";
        if(distance < enemy.eyeSight){
            enemy.walkStatus = "chase";
        } 

        //プレイヤ->敵 (ダメージ)
        if(distance < player.eyeSightRange){
            player.battleInterval++;
            if(player.battleInterval >= 30){
                player.battleInterval = 0;
                enemies[i].damage(player.attack);
            }
        }

        //敵->プレイヤー(ダメージ)
        if(enemies[i].type == "normal"){
            if(distance < 50){
                enemies[i].battleIntervalToPlayer++;
                if(enemies[i].battleIntervalToPlayer >= 30){
                    enemies[i].battleIntervalToPlayer = 0;
                    player.damage(enemies[i].attack);
                }
            }
        }

        //プレイヤーと敵のノックバック用の判定
        if(distance < CONFIG.PLAYER_AND_ENEMY_KNOCK_BAKC_RANGE){
            var diffX = player.getPosition().x - enemy.getPosition().x;
            var diffY = player.getPosition().y - enemy.getPosition().y;
            if(diffY>0){
                player.setPosition(
                    player.getPosition().x,
                    player.getPosition().y + player.walkSpeed
                );
                enemy.setPosition(
                    enemy.getPosition().x,
                    enemy.getPosition().y - player.walkSpeed
                );
            }
            if(diffY<0){
                player.setPosition(
                    player.getPosition().x,
                    player.getPosition().y - player.walkSpeed
                );
                enemy.setPosition(
                    enemy.getPosition().x,
                    enemy.getPosition().y + player.walkSpeed
                );
            }
            if(diffX>0){
                player.setPosition(
                    player.getPosition().x + player.walkSpeed,
                    player.getPosition().y
                );
                enemy.setPosition(
                    enemy.getPosition().x - player.walkSpeed,
                    enemy.getPosition().y
                );
            }
            if(diffX<0){
                player.setPosition(
                    player.getPosition().x - player.walkSpeed,
                    player.getPosition().y
                );
                enemy.setPosition(
                    enemy.getPosition().x - player.walkSpeed,
                    enemy.getPosition().y
                );
            }
        } 
    }
};

//敵同士の衝突判定
var collisionEnemyAndEnemy = function(enemies){
    for(var j=0;j<enemies.length;j++){
        var colleagueOne = enemies[j];
        for(var k=0;k<enemies.length;k++){
            var colleagueTwo = enemies[k];

            if(j != k){
                var distance = cc.pDistance(colleagueOne.getPosition(),colleagueTwo.getPosition());

                //ノックバック
                if(distance < CONFIG.COLLEAGUE_AND_COLLEAGUE_KNOCK_BAKC_RANGE){
                    var diffX = colleagueTwo.getPosition().x - colleagueOne.getPosition().x;
                    var diffY = colleagueTwo.getPosition().y - colleagueOne.getPosition().y;
                    if(diffX > 0){
                        colleagueTwo.setPosition(
                            colleagueTwo.getPosition().x + colleagueTwo.walkSpeed,
                            colleagueTwo.getPosition().y
                        );
                    }
                    if(diffX < 0){
                        colleagueTwo.setPosition(
                            colleagueTwo.getPosition().x - colleagueTwo.walkSpeed,
                            colleagueTwo.getPosition().y
                        );
                    }
                    if(diffY > 0){
                        colleagueTwo.setPosition(
                            colleagueTwo.getPosition().x,
                            colleagueTwo.getPosition().y + colleagueTwo.walkSpeed
                        );
                    }
                    if(diffY < 0){
                        colleagueTwo.setPosition(
                            colleagueTwo.getPosition().x,
                            colleagueTwo.getPosition().y - colleagueTwo.walkSpeed
                        );
                    }
                }
            }
        }
    }
};

//Playerとコインの衝突判定
var collisionPlayerAndCoin = function(game){
    for(var i=0;i<game.coins.length;i++){
        var distance = cc.pDistance(game.player.getPosition(),game.coins[i].getPosition());
        if(distance < 30){

            playSE(s_se_coin);

            game.coins[i].remove();
            game.coins.splice(i,1);
            game.storage.coinAmount+=1;
            game.getEnergyCnt=1;
        } 
    }
};

