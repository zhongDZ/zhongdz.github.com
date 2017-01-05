var ballSprite = absBallSprite.extend({
    ctor: function(pos, space) {
        this._super();
        this.space = space;
        this.radius = 15;
        this.pos = pos;
        this.elasticity = 0.5;
        this.friction = 0.9;

        this.initPhysics();
    },
    onEnter: function() {
        this._super();
    }
});