//
//  SettingsLayer.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var SettingsLayer = cc.Layer.extend({
    init:function () {
        var bRet = false;
        if (this._super()) {

            //back
            var back = cc.Sprite.create(loading_png);
            back.setAnchorPoint(0,0);
            this.addChild(back, 0, 1);

            var label = cc.LabelTTF.create("Go back", "Arial", 14);
            var back = cc.MenuItemLabel.create(label,onBackCallback);
            var menu = cc.Menu.create(back);
            menu.setPosition( 320 / 2, 40);
            this.addChild(menu);
            bRet = true;
        }

        return bRet;
    }
});

SettingsLayer.create = function () {
    var sg = new SettingsLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};
