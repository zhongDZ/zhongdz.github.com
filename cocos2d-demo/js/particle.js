var DemoFirework = cc.Layer.extend({
    onEnter:function () {
        this._super();

        this._emitter = new cc.ParticleFireworks();
        this.addChild(this._emitter, 10);
        this._emitter.texture = cc.textureCache.addImage(res.particle_star_png);
        if (this._emitter.setShapeType)
            this._emitter.setShapeType(cc.ParticleSystem.STAR_SHAPE);
        // this.setEmitterPosition();
    },
    title:function () {
        return "ParticleFireworks";
    }
});

var DemoExplosion = cc.Layer.extend({
    onEnter:function () {
        this._super();

        this._emitter = new cc.ParticleExplosion();
        this.addChild(this._emitter, 10);

        this._emitter.texture = cc.textureCache.addImage(res.particle_star_png);
        this._emitter.shapeType = cc.ParticleSystem.STAR_SHAPE;

        this._emitter.setAutoRemoveOnFinish(true);

        // this.setEmitterPosition();
    },
    onExit: function() {
        this._super();
    },
    title:function () {
        return "ParticleExplosion";
    }
});

var DemoSnow = cc.Layer.extend({
    onEnter:function () {
        this._super();

        this._emitter = new cc.ParticleSnow();
        this.addChild(this._emitter, 10);

        this._emitter.life = 3;
        this._emitter.lifeVar = 1;

        // gravity
        this._emitter.gravity = cc.p(0, -10);

        // speed of particles
        this._emitter.speed = 130;
        this._emitter.speedVar = 30;


        var startColor = this._emitter.startColor;
        startColor.r = 230;
        startColor.g = 230;
        startColor.b = 230;
        this._emitter.startColor = startColor;

        var startColorVar = this._emitter.startColorVar;
        startColorVar.b = 26;
        this._emitter.startColorVar = startColorVar;

        this._emitter.emissionRate = this._emitter.totalParticles / this._emitter.life;

        this._emitter.texture = cc.textureCache.addImage(res.particle_star_png);
        this._emitter.shapeType = cc.ParticleSystem.STAR_SHAPE;

        // this.setEmitterPosition();
    },
    title:function () {
        return "ParticleSnow";
    }
});