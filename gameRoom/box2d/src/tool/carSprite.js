var carSprite = cc.Node.extend({
    space: null,
    wheelRadius: 15,
    carBodyWidth: 80,
    carBodyHeight: 30,
    mass: 1,
    pos: null,
    elasticity: 0.5,
    friction: 0.5,
    collisionType: BALL_COLLISION_TYPE,
    ctor: function(pos, space) {
        this._super();
        this.pos = pos;
        this.space = space;
        this.initPhysics();
    },
    onEnter: function() {
        this._super();
    },
    initPhysics: function() {

        //車身
        this.carBody = this.space.addBody(new cp.Body(this.mass, cp.momentForBox(this.mass, this.carBodyWidth, this.carBodyHeight)));
        this.carBody.setPos(this.pos);
        this.carShape = this.space.addShape(new cp.BoxShape(this.carBody, this.carBodyWidth, this.carBodyHeight));
        this.carShape.setElasticity(this.elasticity);
        this.carShape.setFriction(this.friction);
        this.carShape.setCollisionType(this.collisionType);



        //前輪
        this.firstCarWheel = this.space.addBody(new cp.Body(this.mass, cp.momentForCircle(this.mass, 0, this.wheelRadius, cp.v(0,0))));
        this.firstCarWheel.setPos(cp.v.add(cp.v(this.carBodyWidth - (this.wheelRadius * 3), -this.carBodyHeight), this.pos));
        this.firstCarWheelShape = this.space.addShape(new cp.CircleShape(this.firstCarWheel, this.wheelRadius, cp.v(0,0)));
        this.firstCarWheelShape.setElasticity(this.elasticity);
        this.firstCarWheelShape.setFriction(this.friction);
        this.firstCarWheelShape.setCollisionType(this.collisionType);

        //後輪
        this.lastCarWheel = this.space.addBody(new cp.Body(this.mass, cp.momentForCircle(this.mass, 0, this.wheelRadius, cp.v(0,0))));
        this.lastCarWheel.setPos(cp.v.add(cp.v(-this.carBodyWidth + (this.wheelRadius * 3), -this.carBodyHeight), this.pos));
        this.lastCarWheelShape = this.space.addShape(new cp.CircleShape(this.lastCarWheel, this.wheelRadius, cp.v(0,0)));
        this.lastCarWheelShape.setElasticity(this.elasticity);
        this.lastCarWheelShape.setFriction(this.friction);
        this.lastCarWheelShape.setCollisionType(this.collisionType);



        this.space.addConstraint(new cp.GrooveJoint(this.carBody, this.lastCarWheel, cp.v(-30, -15), cp.v(-30, -30), cp.v(0,0)));
        this.space.addConstraint(new cp.GrooveJoint(this.carBody, this.firstCarWheel, cp.v( 30, -15), cp.v( 30, -30), cp.v(0,0)));

        this.space.addConstraint(new cp.DampedSpring(this.carBody, this.lastCarWheel, cp.v(-30, 0), cp.v(0,0), 50, 200, 10));
        this.space.addConstraint(new cp.DampedSpring(this.carBody, this.firstCarWheel, cp.v( 30, 0), cp.v(0,0), 50, 200, 10));

    }
});
