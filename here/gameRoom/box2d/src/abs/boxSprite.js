var absBoxSprite = cc.PhysicsSprite.extend({
    space: null,
    pos: null,
    elasticity: 1,
    friction: 1,
    collisionType: BOX_COLLISION_TYPE,
    boxWidth: 150,
    boxHeight: 5,
    ctor: function() {
        this._super();
    },
    onEnter: function() {
        this._super();
    },
    initPhysics: function() {
        this.body = this.space.addBody(new cp.Body(1, cp.momentForBox(1, this.boxWidth, this.boxHeight)));
        this.body.setPos(this.pos);

        this.shape = this.space.addShape(new cp.BoxShape(this.body, this.boxWidth, this.boxHeight));
        this.shape.setElasticity(this.elasticity);
        this.shape.setFriction(this.friction);
        this.shape.setCollisionType(this.collisionType);
    }
});
