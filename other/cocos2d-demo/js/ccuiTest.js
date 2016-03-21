var ccuiLayer = cc.Layer.extend({
	ctor:function(){
		this._super();

		var test = new cc.Sprite(res.start_png);
		this.addChild(test);
		test.x = size.width/2;
		test.y = size.height/2;

		var delay = new cc.delayTime(0.5);
		var aaCall = new cc.callFunc(function(){
			console.log('success');

			// var overScene = new ccuiTestScene();
			// var overScenTrans = randTransition(overScene);
   //          cc.director.runScene(overScenTrans);
		});
		var seq = new cc.sequence(delay , aaCall);
		test.runAction(seq);


		//比赛而曲线
		this._lankuang = new cc.NodeGrid();
		var jl = new cc.Sprite(res.mario09_png);
        jl.attr({
            x:size.width/2,
            y:size.height/2,
            anchorX:0.5,
            anchorY:0,
            scaleX:0.1,
            scaleY:0.1
        });
        this._lankuang.addChild(jl);
        this.addChild(this._lankuang);

        var _this = this;
        jl.runAction(cc.sequence(
            new cc.BezierTo(1,[cc.p(0,size.height-size.height/4),cc.p(0,size.height/4),cc.p(size.width/2,0)]).repeat(2),
            new cc.BezierTo(1,[cc.p(0,size.height/2),cc.p(size.width,size.height/2),cc.p(size.width/2,0)]),
            cc.callFunc(function () {
                
            }),
            new cc.BezierTo(1,[cc.p(size.width,size.height/4),cc.p(size.width,size.height-size.height/4),cc.p(size.width/2,size.height/2)]).repeat(2),
            cc.callFunc(function () {
            	_this.unscheduleUpdate();
            })
        ));
	},
	update:function(){
		var jl = this._lankuang.getChildren()[0];
        var njl = new cc.Sprite(res.mario09_png);
        njl.attr({
            x:jl.x,
            y:jl.y,
            anchorX:jl.anchorX,
            anchorY:jl.anchorY,
            scaleX:jl.scaleX,
            scaleY:jl.scaleY
        });
        this.addChild(njl);
	},
	onEnter:function(){
		this._super();
        this.scheduleUpdate();
	}
});

var ccuiTestScene = cc.Scene.extend({
	ctor:function(){
		this._super();

		console.log('success');
	}
});

var transitionList = [
    cc.TransitionCrossFade,
    cc.TransitionFadeBL,
    cc.TransitionFadeDown,
    cc.TransitionFadeUp,
    cc.TransitionFadeTR,
    cc.TransitionMoveInL,
    cc.TransitionMoveInR,
    cc.TransitionMoveInB,
    cc.TransitionMoveInT,
    cc.TransitionSlideInB,
    cc.TransitionSlideInR,
    cc.TransitionSlideInL,
    cc.TransitionSlideInT,
    cc.TransitionRotoZoom,
    cc.TransitionJumpZoom,
    cc.TransitionZoomFlipAngular,
    cc.TransitionZoomFlipX,
    cc.TransitionZoomFlipY,
    cc.TransitionSplitCols,
    cc.TransitionSplitRows,
    cc.TransitionProgressRadialCCW,
    cc.TransitionProgressRadialCW

]
function randTransition(scene){
    return new transitionList[Math.floor(Math.random()*transitionList.length)](0.5,scene);
}