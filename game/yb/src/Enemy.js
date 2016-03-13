var Enemy = cc.Sprite.extend({

    //存活时间，秒
    lifeTime: 10,
    enemyType: 0,

    active: true,
    speed: 1,

    acting: 1,
    frames: null,

    die: null,

    ctor: function(arg) {
        // this._super("#" + arg.textureName);
        this._super(res.pig);
        this.enemyType = arg.type;
        this.lifeTime = Game.EnemyType[this.enemyType].lifeTime;
        this.speed = Game.rndInt(1, 60);
        if(this.enemyType == 2) {
            // 伞志气
            //动画
            this.frames = [];
            for (var i = 1; i <= 4; i++) {
                // this.frames.push(cc.spriteFrameCache.getSpriteFrame("enemy/move/02000" + i + ".png"));
            }
            /*if(arg.type == 1) {
             this.scale = 0.5;
             }*/
        }
        // this.die = cc.Sprite.create("#enemy/die/030001.png");
        // this.die.active = false;
        // this.die.visible = false;
        //
        this.schedule(this.attack, 0.2);
        this.schedule(this.update, 1);
        this.attack();
        this.run();
    },

    actFrames: function() {
        if(this.frames != null) this.runAction(cc.RepeatForever.create(cc.Animate.create(cc.Animation.create(this.frames, 0.1))));
    },

    run: function() {
        if(this.enemyType == 2) {
            // this.actFrames();
        } else {
            this.runAction(cc.RepeatForever.create(cc.RotateBy.create(0.3, 60)));
        }
    },

    update: function() {
        if(this.lifeTime < 0 && this.active) {
            this.visible = false;
            this.active = false;
            this.destory();
        }
        if((this.enemyType < 2 && this.lifeTime < 0) || this.lifeTime <= -2) {
            this.stopAllActions();
            this.acting = 0;
            // this.die.active = false;
            // this.die.visible = false;
        }
        this.lifeTime--;
    },

    destory: function() {
        if(this.enemyType == 2) {
            //伞志气
            //动画
            var frames = [];
            for(var i = 1; i <= 3; i++) {
                // frames.push(cc.spriteFrameCache.getSpriteFrame("enemy/die/03000" + i + ".png"));
            }
            // this.die.active = true;
            // this.die.visible = true;
            // this.die.x = this.x;
            // this.die.y = this.y;
            // this.die.runAction(cc.Animate.create(cc.Animation.create(frames, 0.1)));
        }
    },

    attack: function() {
        //if(this.enemyType == 2 && Game.status == Game.STATE_PLAYING) {
        if(Game.status == Game.STATE_PLAYING) {
            if(this.acting == 0 && this.enemyType == 2) {
                this.acting = 1;
                // this.actFrames();
            }
            var x = 0, y = 0;
            //伞志追缤果的概率
            var rate = Game.getSanjiRate();
            if(Game.rndInt(0, 100) <= rate) {
                //cc.log("rate=" + rate + ", t=" + (60 - Game.timeCount));
                //缤果的快照坐标
                x = instanceGameLayer._benko.x;
                y = instanceGameLayer._benko.y;
            } else {
                var rnd = Game.rndInt(0, 100);
                if(rnd % 4 == 0) {
                    //移动到随机坐标
                    x = Game.rndInt(-50, instanceGameLayer.winSize.width + 50);
                    y = Game.rndInt(-50, instanceGameLayer.winSize.height + 50);
                } else if(rnd % 4 == 1) {
                    //移动到随机坐标
                    x = Game.rndInt(-50, instanceGameLayer.winSize.width / 2);
                    y = Game.rndInt(-50, instanceGameLayer.winSize.height / 2);
                } else if(rnd % 4 == 2) {
                    //移动到随机坐标
                    x = Game.rndInt(-50, instanceGameLayer.winSize.width / 2);
                    y = Game.rndInt(instanceGameLayer.winSize.height / 2, instanceGameLayer.winSize.height + 50);
                } else if(rnd % 4 == 3) {
                    //移动到随机坐标
                    x = Game.rndInt(instanceGameLayer.winSize.width / 2, instanceGameLayer.winSize.width + 50);
                    y = Game.rndInt(-50, instanceGameLayer.winSize.height / 2);
                } else {
                    //移动到随机坐标
                    x = Game.rndInt(instanceGameLayer.winSize.width / 2, instanceGameLayer.winSize.width + 50);
                    y = Game.rndInt(instanceGameLayer.winSize.height / 2, instanceGameLayer.winSize.height + 50);
                }
            }
            //寻路，追缤果
            this.speed = Game.rndInt(1, 60) * Game.getSanjiSpeed();
            //计算距离、时间
            var distance = Game.getDistance(this.x, this.y, x, y);
            var duration = distance / (this.speed * Game.EnemySpeedRate);
            this.runAction(cc.MoveTo.create(duration, cc.p(x, y)));
        } else { // if(this.enemyType == 2) {
            this.stopAllActions();
            this.acting = 0;
        }
    },

    collideRect:function () {
        if(this.enemyType == 2) {
            return cc.rect(this.x - 34, this.y - 33, 67, 63);
        } else {
            //return cc.rect(this.x - 41 * this.scale / 0.5, this.y - 31 * this.scale / 0.5, 74 * this.scale / 0.5, 58 * this.scale / 0.5);
            return cc.rect(this.x - 29, this.y - 27, 63, 53);
        }
    }

});

Enemy.create = function(arg) {
    var enemy = new Enemy(arg);
    instanceGameLayer.addEnemy(enemy);
    // instanceGameLayer.addEnemy(enemy.die);
    Game.Enemy.push(enemy);
    return enemy;
};

Enemy.getOrCreate = function(arg) {
    var enemy = null;
    for(var i = 0; i < Game.Enemy.length; i++) {
        enemy = Game.Enemy[i];
        if(enemy.enemyType != arg.type) continue;
        if(enemy.active == false && enemy.lifeTime < Game.lifeTime + 2) {
            enemy.active = true;
            enemy.visible = true;
            enemy.run();
            enemy.attack();
            enemy.schedule(enemy.attack, 0.2);
            enemy.schedule(enemy.update, 1);
            enemy.lifeTime = Game.EnemyType[enemy.enemyType].lifeTime;
            this.acting = 1;
            // this.actFrames();
            return enemy;
        }
    }
    enemy = new Enemy.create(arg);
    return enemy;
};

Enemy.preSet = function() {
    for(var t = 0; t < 3; t++)
        for(var i = 0; i < 20; i++) {
            new Enemy.create(Game.EnemyType[t]);
        }
};