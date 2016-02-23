var GRABABLE_MASK_BIT = 1<<31;
var NOT_GRABABLE_MASK = ~GRABABLE_MASK_BIT;

var g_space = new cp.Space();

g_space.gravity = cp.v(100, -1000);
g_space.iterations = 15;
g_space.damping = 1;
//休眠時間閾值
g_space.sleepTimeThreshold = 0.5;
g_space.collisionSlop = 0;

var pSprite = cc.PhysicsSprite.extend({
    space: null,
    ctor:function(pos) {
        this._super();
        this.space = g_space;


        var radius = 15;

        this.body = this.space.addBody(new cp.Body(10, cp.momentForCircle(10, 0, radius, cp.v(0,0))));
        this.body.setPos(pos);
        // body.setMoment(100);
        // body.setMass(1000);//質量
        // this.body.setVel(cp.v(100, -1000));//線力
        // this.body.setAngVel(-1000);//旋轉


        this.shape = this.space.addShape(new cp.CircleShape(this.body, radius, cp.v(0,0)));
        this.shape.setElasticity(0.5);
        this.shape.setFriction(0.9);
        this.shape.setCollisionType(BALL_COLLISION_TYPE);

        var oldbodypos = {
            x:0,
            y:0
        };

        this.schedule(function(){
            var new_bodypos = this.body.getPos();

            if (oldbodypos.x == new_bodypos.x && oldbodypos.y == new_bodypos.y) {
                this.space.removeShape(this.shape);
                this.space.removeBody(this.body);
                this.removeFromParent(true);
            }

            oldbodypos.x = new_bodypos.x - 0;
            oldbodypos.y = new_bodypos.y - 0;

        }, 1);
    },
    bodypos: {
        x:0,
        y:0
    },
    onEnter: function() {
        this._super();
    }

});

var appLayer = cc.Layer.extend({
    space: null,
    ctor: function() {
        this._super();

        this.space = g_space;

        // this.space = new cp.Space();
        // this.space.gravity = cp.v(0, 0);
        // this.space.iterations = 15;
        // this.space.damping = 0.0001;

        // //休眠時間閾值
        // this.space.sleepTimeThreshold = 0.5;
        // this.space.collisionSlop = 0;


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

        var wall1 = space.addStaticShape(new cp.SegmentShape(space.staticBody, cp.v(0, cc.winSize.height), cp.v(cc.winSize.width, cc.winSize.height), 0));
        wall1.setElasticity(1);
        wall1.setFriction(1);
        wall1.setCollisionType(WALL_COLLISION_TYPE);

        var wall1 = space.addStaticShape(new cp.SegmentShape(space.staticBody, cp.v(0, 0), cp.v(0, cc.winSize.height), 0));
        wall1.setElasticity(1);
        wall1.setFriction(1);
        wall1.setCollisionType(WALL_COLLISION_TYPE);

        var wall2 = space.addStaticShape(new cp.SegmentShape(space.staticBody, cp.v(cc.winSize.width, 0), cp.v(cc.winSize.width, cc.winSize.height), 0));
        wall2.setElasticity(1);
        wall2.setFriction(1);
        wall2.setCollisionType(WALL_COLLISION_TYPE);

        var wall3 = space.addStaticShape(new cp.SegmentShape(space.staticBody, cp.v(0, 0), cp.v(cc.winSize.width, 0), 0));
        wall3.setElasticity(1);
        wall3.setFriction(1);
        wall3.setCollisionType(WALL_COLLISION_TYPE);
    },
    addBall: function(pos) {

        var p_srpite = new pSprite(pos);
        this.addChild(p_srpite);

        // var radius = 15;

        // var body = this.space.addBody(new cp.Body(10, cp.momentForCircle(10, 0, radius, cp.v(0,0))));
        // body.setPos(pos);
        // // body.setMoment(100);
        // // body.setMass(1000);//質量
        // body.setVel(cp.v(100, -1000));//線力
        // body.setAngVel(-100);//旋轉
        // // body.applyForce(cp.v(1, 1), cp.v(1000, 1));

        // var shape = this.space.addShape(new cp.CircleShape(body, radius, cp.v(0,0)));
        // shape.setElasticity(0.5);
        // shape.setFriction(0.9);
        // shape.setCollisionType(BALL_COLLISION_TYPE);




        // shape.group = 1;

        // var a = Math.floor(Math.random() * (cc.winSize.width - 100));
        // cc.log(a);
        // shape.setLayers(1);
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
        // cc.log('collision separate');
    },
    addVel: function() {
        this.bodys.setVel(cp.v(1000, 0))
    },
    onEnter: function() {
        this._super();

        var NUM_VERTS = 7;
        var verts = new Array(NUM_VERTS * 2);
        for(var i=0; i<NUM_VERTS*2; i+=2){
            var angle = -Math.PI*i/NUM_VERTS;
            cc.log(angle);
            verts[i]   = 30*Math.cos(angle);
            verts[i+1] = 30*Math.sin(angle);
        }
        cc.log(verts);
        var body = this.space.addBody(new cp.Body(1, cp.momentForPoly(1, verts, cp.v(0,0))));
        body.setPos(cp.v(350+60, 220+60));
        var poly = new cp.PolyShape(body, verts, cp.v(0,0));
        this.space.addShape(poly);





        var body = new cp.Body(1, cp.momentForBox(1, 48, 48) );
        body.setPos(cp.v(cc.winSize.width / 2, cc.winSize.height / 2));
        this.space.addBody( body );

        var shape = new cp.BoxShape( body, 48, 48);
        shape.setElasticity( 0.5 );
        shape.setFriction( 0.5 );
        this.space.addShape( shape );

        // shape.group = 1;
        // shape.setLayers(2);


        this.bodys = body;

        this.space.addCollisionHandler(BALL_COLLISION_TYPE, BASKET_BOTTOM_COLLISION_TYPE,
            this.collisionBegin.bind(this),
            this.collisionPre.bind(this),
            this.collisionPost.bind(this),
            this.collisionSeparate.bind(this)
        );

        if( 'mouse' in cc.sys.capabilities ) {
            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                onMouseDown: function(event){
                    // event.getCurrentTarget().addVel();
                    event.getCurrentTarget().addBall(event.getLocation());
                }
            }, this);
        }
    }
});