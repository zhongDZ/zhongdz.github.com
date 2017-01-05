var absBallSprite = cc.PhysicsSprite.extend({
    space: null,
    radius: null,
    pos: null,
    elasticity: 1,
    friction: 1,
    collisionType: BALL_COLLISION_TYPE,
    ctor: function() {
        this._super();
    },
    onEnter: function() {
        this._super();
    },
    initPhysics: function() {
        this.body = this.space.addBody(new cp.Body(10, cp.momentForCircle(10, 0, this.radius, cp.v(0,0))));
        this.body.setPos(this.pos);

        this.shape = this.space.addShape(new cp.CircleShape(this.body, this.radius, cp.v(0,0)));
        this.shape.setElasticity(this.elasticity);
        this.shape.setFriction(this.friction);
        this.shape.setCollisionType(this.collisionType);
    }
});
