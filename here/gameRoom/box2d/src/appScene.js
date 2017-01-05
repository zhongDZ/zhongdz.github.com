var appScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        //設定除follow黑線
        cc.director.setProjection(cc.Director.PROJECTION_2D);
        var layer = new gameLayer();
        this.addChild(layer);
    }
});