var BackgroundLayer = cc.Layer.extend({
    map00:null,
    map01:null,
    mapWidth:0,
    mapIndex:0,
    space:null,
    spriteSheet:null,
    objects:[],


    ctor:function (space) {
        this._super();


        // clean old array here
        this.objects = [];
        this.space = space;

        this.init();
    },

    init:function () {
        this._super();

        this.map00 = cc.TMXTiledMap.create(s_map00);
        this.addChild(this.map00);

        this.mapWidth = this.map00.getContentSize().width;

        this.map01 = cc.TMXTiledMap.create(s_map01);
        this.map01.setPosition(cc.p(this.mapWidth, 0));
        this.addChild(this.map01);

        // create sprite sheet
        cc.SpriteFrameCache.getInstance().addSpriteFrames(s_background_plist);
        this.spriteSheet = cc.SpriteBatchNode.create(s_background);
        this.addChild(this.spriteSheet);


        this.loadObjects(this.map00, 0);
        this.loadObjects(this.map01, 1);


        this.scheduleUpdate();

    },
    loadObjects:function (map, mapIndex) {
        // add coins
        var coinGroup = map.getObjectGroup("coin");
        var coinArray = coinGroup.getObjects();
        for (var i = 0; i < coinArray.length; i++) {
            var coin = new Coin(this.spriteSheet,
                this.space,
                cc.p(coinArray[i]["x"] + this.mapWidth * mapIndex,coinArray[i]["y"]));
            coin.mapIndex = mapIndex;
            this.objects.push(coin);
        }

        // add rock
        var rockGroup = map.getObjectGroup("rock");
        var rockArray = rockGroup.getObjects();
        for (var i = 0; i < rockArray.length; i++) {
            var rock = new Rock(this.spriteSheet,
                this.space,
                rockArray[i]["x"] + this.mapWidth * mapIndex);
            rock.mapIndex = mapIndex;
            this.objects.push(rock);
        }
    },

    removeObjects:function (mapIndex) {
        while((function (obj, index) {
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].mapIndex == index) {
                    obj[i].removeFromParent();
                    obj.splice(i, 1);
                    return true;
                }
            }
            return false;
        })(this.objects, mapIndex));
    },

    removeObjectByShape:function (shape) {
        for (var i = 0; i < this.objects.length; i++) {
            if (this.objects[i].getShape() == shape) {
                this.objects[i].removeFromParent();
                this.objects.splice(i, 1);
                break;
            }
        }
    },

    checkAndReload:function (eyeX) {
        var newMapIndex = parseInt(eyeX / this.mapWidth);
        if (this.mapIndex == newMapIndex) {
            return false;
        }

        if (0 == newMapIndex % 2) {
            // change mapSecond
            this.map01.setPositionX(this.mapWidth * (newMapIndex + 1));
            this.loadObjects(this.map01, newMapIndex + 1);
        } else {
            // change mapFirst
            this.map00.setPositionX(this.mapWidth * (newMapIndex + 1));
            this.loadObjects(this.map00, newMapIndex + 1);
        }

        this.removeObjects(newMapIndex - 1);

        this.mapIndex = newMapIndex;

        return true;
    },

    update:function (dt) {
        var animationLayer = this.getParent().getChildByTag(TagOfLayer.Animation);
        var eyeX = animationLayer.getEyeX();
        this.checkAndReload(eyeX);
        var camera = this.getCamera();
        var eyeZ = cc.Camera.getZEye();
        camera.setEye(eyeX, 0, eyeZ);
        camera.setCenter(eyeX, 0, 0);
    }

});
