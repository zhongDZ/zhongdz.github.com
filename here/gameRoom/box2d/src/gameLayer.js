var g_space = new cp.Space();

//重力
g_space.gravity = cp.v(0, -1000);
//跌代
g_space.iterations = 10;
//阻尼值
g_space.damping = 1;
//休眠時間閾值
g_space.sleepTimeThreshold = 0.5;

var gameLayer = cc.Layer.extend({
    space: null,
    ctor: function() {
        this._super();

        this.space = g_space;


        this.basket_x = Math.floor(Math.random() * (cc.winSize.width - 100)),
        this.basket_y = Math.floor(Math.random() * (cc.winSize.height / 2));

        this.addWalls();
        this.addBasket(this.basket_x, this.basket_y);

        this.scheduleUpdate();
        //debug
        this.setupDebugNode();
    },
    update: function(dt) {
        var timeStep = 0.03;
        this.space.step(timeStep);
    },
    setupDebugNode: function() {
        this._debugNode = new cc.PhysicsDebugNode(this.space);
        this._debugNode.visible = true;
        this.addChild(this._debugNode, 20);
    },
    addBasket: function(x, y) {
        var space = this.space;

        var basket1 = space.addStaticShape(new cp.SegmentShape(space.staticBody, cp.v(x + 2, y + 2), cp.v(x + 49 - 2 , y + 2), 0));
        basket1.setElasticity(1);
        basket1.setFriction(1);
        basket1.setCollisionType(BASKET_BOTTOM_COLLISION_TYPE);

        var basket1 = space.addStaticShape(new cp.SegmentShape(space.staticBody, cp.v(x, y), cp.v(x + 49, y), 0));
        basket1.setElasticity(1);
        basket1.setFriction(1);
        basket1.setCollisionType(BASKET_COLLISION_TYPE);

        var basket2 = space.addStaticShape(new cp.SegmentShape(space.staticBody, cp.v(x, y), cp.v(x, y + 49), 0));
        basket2.setElasticity(1);
        basket2.setFriction(1);
        basket2.setCollisionType(BASKET_COLLISION_TYPE);

        var basket3 = space.addStaticShape(new cp.SegmentShape(space.staticBody, cp.v(x + 49, y), cp.v(x + 49, y + 49), 0));
        basket3.setElasticity(1);
        basket3.setFriction(1);
        basket3.setCollisionType(BASKET_COLLISION_TYPE);
    },
    addWalls: function() {
        var space = this.space;

        var wall1 = space.addStaticShape(new cp.SegmentShape(space.staticBody, cp.v(0, cc.winSize.height), cp.v(cc.winSize.width, cc.winSize.height), 10));
        wall1.setElasticity(1);
        wall1.setFriction(1);
        wall1.setCollisionType(WALL_COLLISION_TYPE);

        var wall1 = space.addStaticShape(new cp.SegmentShape(space.staticBody, cp.v(0, 0), cp.v(0, cc.winSize.height), 10));
        wall1.setElasticity(1);
        wall1.setFriction(1);
        wall1.setCollisionType(WALL_COLLISION_TYPE);

        var wall2 = space.addStaticShape(new cp.SegmentShape(space.staticBody, cp.v(cc.winSize.width, 0), cp.v(cc.winSize.width, cc.winSize.height), 10));
        wall2.setElasticity(1);
        wall2.setFriction(1);
        wall2.setCollisionType(WALL_COLLISION_TYPE);

        var wall3 = space.addStaticShape(new cp.SegmentShape(space.staticBody, cp.v(0, 0), cp.v(cc.winSize.width, 0), 20));
        wall3.setElasticity(1);
        wall3.setFriction(1);
        wall3.setCollisionType(WALL_COLLISION_TYPE);
    },
    addStick: function(pos) {
        var radius = 15;

        var body = new cp.Body(1, cp.momentForBox(1, 150, 3) );
        body.setPos(pos);
        this.space.addBody( body );

        var shape = new cp.BoxShape( body, 150, 3);
        shape.setElasticity( 0.5 );
        shape.setFriction( 0.5 );
        shape.setCollisionType(BALL_COLLISION_TYPE);
        this.space.addShape(shape);
    },
    collisionBegin: function ( arbiter, space ) {
        // cc.log(arbiter);
        // cc.log(space);
        cc.log(arbiter);
        var shapes = arbiter.getShapes();
        var shapeA = shapes[0];
        var shapeB = shapes[1];

        var collTypeA = shapeA.collision_type;
        var collTypeB = shapeB.collision_type;
        // cc.log(collTypeA);
        // if (shapeA.group == ME_CHIPMUNK_GROUP) {
        //     switch(collTypeB){
        //         case BALL_COLLISION_TYPE:
        //             this.space.addPostStepCallback(function () {
        //                 this.getChildByTag(ME_ROLE_ID).addLife(-shapeB.atk);
        //             }.bind(this));
        //             break;
        //     }
        // }
        
        return true;
    },
    collisionPre: function ( arbiter, space ) {
        // cc.log('collision pre');
        return true;
    },
    collisionPost: function ( arbiter, space ) {
        // cc.log('collision post');
    },
    collisionSeparate: function ( arbiter, space ) {
        cc.log('collision separate');
    },
    is_stick: null,
    onEnter: function() {
        var that = this;

        this._super();


        var body = new cp.Body(1, cp.momentForBox(1, 80, 30) );
        body.setPos(cp.v(cc.winSize.width / 2, cc.winSize.height / 2));
        this.space.addBody( body );

        var shape = new cp.BoxShape( body, 80, 30);
        shape.setElasticity( 0.5 );
        shape.setFriction( 0.5 );
        this.space.addShape( shape );


        var car = new carSprite(cp.v(160, 100), g_space);


        // var ball1 = new ballSprite(cp.v(0, 0), g_space);
        // var ball2 = new ballSprite(cp.v(10, 10), g_space);


        // this.space.addConstraint(new cp.GrooveJoint(body, ball1.body, cp.v(-30, -10), cp.v(-30, -40), cp.v(0,0)));
        // this.space.addConstraint(new cp.GrooveJoint(body, ball2.body, cp.v( 30, -10), cp.v( 30, -40), cp.v(0,0)));

        // this.space.addConstraint(new cp.DampedSpring(body, ball1.body, cp.v(-30, 0), cp.v(0,0), 50, 20, 10));
        // this.space.addConstraint(new cp.DampedSpring(body, ball2.body, cp.v( 30, 0), cp.v(0,0), 50, 20, 10));


        // this.bodys = body;

        // this.space.addCollisionHandler(BALL_COLLISION_TYPE, BASKET_BOTTOM_COLLISION_TYPE,
        //     this.collisionBegin.bind(this),
        //     this.collisionPre.bind(this),
        //     this.collisionPost.bind(this),
        //     this.collisionSeparate.bind(this)
        // );




        if( 'mouse' in cc.sys.capabilities ) {
            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                onMouseDown: function(event){
                    if (that.is_stick) {
                        new boxSprite(event.getLocation(), g_space);
                    } else {
                        new ballSprite(event.getLocation(), g_space);
                    }
                }
            }, this);
        }

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event){
                switch (keyCode) {
                    case 83:
                        that.is_stick = true;
                        break;
                }

            },
            onKeyReleased: function(keyCode, event){
                switch (keyCode) {
                    case 83:
                        that.is_stick = false;
                        break;
                }
            }
        }, this);
    }
});