var boxSprite = absBoxSprite.extend({
    ctor: function(pos, space) {
        this._super();

        this.space = space;
        this.pos = pos;
        this.elasticity = 0.5;
        this.friction = 0.9;
        this.boxWidth = 150;
        this.boxHeight = 10;

        this.initPhysics();
    },
    onEnter: function() {
        this._super();
    }
});