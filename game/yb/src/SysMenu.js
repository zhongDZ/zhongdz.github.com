//输出客户端信息
cc.sys.dump();

var SysMenu = cc.Layer.extend({

    init: function(){
        var bRet = false;
        if(this._super()) {

            var winSize = cc.director.getWinSize();
            var _this = this;

            var bg = new cc.Sprite(res.beginBg);
            bg.x = winSize.width / 2;
            bg.y = winSize.height / 2;
            this.addChild(bg);

            var guizeBg = new cc.Sprite(res.guizeBg);
            guizeBg.x = winSize.width / 2;
            guizeBg.y = winSize.height / 2;

            //按钮菜单
            var itemPlay = cc.MenuItemSprite.create(
                new cc.Sprite(res.beginBtn),  //开始
                new cc.Sprite(res.beginBtn),  //开始
                function(){
                    var scene = GameLayer.scene();
                    cc.director.runScene(cc.TransitionFade.create(0.8, scene));
            }, this);
            var menu1 = cc.Menu.create(itemPlay);
            menu1.x = winSize.width / 2;
            menu1.y = winSize.height / 2;
            this.addChild(menu1);

            var itemMore = cc.MenuItemSprite.create(
                new cc.Sprite(res.guize),    //规则
                new cc.Sprite(res.guize),
                function(){
                    _this.addChild(guizeBg);
                    _this.addChild(menu3);
                    menu1.setVisible(false);
                    menu2.setVisible(false);
            }, this);
            var menu2 = cc.Menu.create(itemMore);
            menu2.x = winSize.width / 2;
            menu2.y = winSize.height / 2 - 200;
            this.addChild(menu2);

            var backItem = cc.MenuItemSprite.create(
                new cc.Sprite(res.back),
                new cc.Sprite(res.back),
                function(){
                    _this.removeChild(guizeBg);
                    _this.removeChild(menu3);
                    menu1.setVisible(true);
                    menu2.setVisible(true);
            }, this);
            var menu3 = cc.Menu.create(backItem);
            menu3.x = winSize.width / 2;
            menu3.y = winSize.height / 2 - 200;


            bRet = true;
        }
        return bRet;
    }
});

SysMenu.create = function () {
    var sg = new SysMenu();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

SysMenu.scene = function () {
    var scene = cc.Scene.create();
    var layer = SysMenu.create();
    scene.addChild(layer);
    return scene;
};