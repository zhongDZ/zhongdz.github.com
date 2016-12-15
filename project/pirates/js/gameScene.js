var gameScene = cc.Scene.extend({
    name : 'gameScene',
    openFlag : false,
    ctor : function(){
        this._super();

        this.initBg();

        this.initTop();

        this.initMenu();

        this.initLottery();

        this.initSelfLand();

        this.initPhb();
    },
    initBg : function(){
        var _bgLayer = new bgLayer();
        _bgLayer.x = size.width/2;
        _bgLayer.y = size.height/2;
        this.addChild(_bgLayer, zindex.bgLayer);
    },
    initTop : function(){
        var _topLayer = new topLayer();
        _topLayer.x = size.width/2;
        _topLayer.y = size.height/2;
        this.addChild(_topLayer, zindex.topLayer);
    },
    initMenu : function(){
        var _menuLayer = new menuLayer();
        _menuLayer.x = size.width/2;
        _menuLayer.y = size.height/2;
        this.addChild(_menuLayer, zindex.menuLayer);
    },
    initLottery : function(){
        var _lotteryLayer = new lotteryLayer();
        _lotteryLayer.x = size.width/2;
        _lotteryLayer.y = size.height/2;
        _lotteryLayer.tag = childTagName.lotteryLayer;
        this.addChild(_lotteryLayer, zindex.lotteryLayer);
    },
    //初始化自己的岛屿
    initSelfLand : function(){
        var self_island = new IsLand();
        self_island.intoMini();
        self_island.tag = childTagName.self_island;
        this.addChild(self_island, zindex.IsLand);
    },
    initPhb : function(){
        this.layer_2 = new listLayer(this, 'dafd');
        this.addChild(this.layer_2, 100);
    }
});