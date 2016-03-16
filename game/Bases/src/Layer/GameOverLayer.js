//
//  GameOverLayer.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var GameOverLayer = cc.Layer.extend({
    init:function (storage) {
        var bRet = false;
        if (this._super()) {

            changeLoadingImage();

            //bgm
            playSystemBGM();
            this.storage = storage;
            
            //背景
            var back = cc.Sprite.create(loading_png);
            back.setAnchorPoint(0,0);
            this.addChild(back);

            //ui
            var ui = cc.Sprite.create(s_result_gameover);
            ui.setAnchorPoint(0,0);
            this.addChild(ui);

            //home
            var homeButton = cc.MenuItemImage.create(
                s_home_button,
                s_home_button_on,
                onBackCallback,
                this
            );
            homeButton.setAnchorPoint(0,0);
            homeButton.setPosition(250,410);
            //set header
            this.menu = cc.Menu.create(
                homeButton
            );
            this.addChild(this.menu);
            this.menu.setPosition(0,0);

            //retryボタン
            var retryButton = new ButtonItem("リトライ",200,50,this.onCharaSelect,this);
            retryButton.setPosition(160,120);
            this.addChild(retryButton);

            //nextボタン
            var changeButton = new ButtonItem("キャラ選択",200,50,this.onCharaSelect,this);
            changeButton.setPosition(160,60);
            this.addChild(changeButton);

            bRet = true;
        }

        return bRet;
    },

    onCharaSelect:function () {
        this.storage = getStageDataFromJson(this.storage,this.storage.stageNumber);
        cc.LoaderScene.preload(g_resources, function () {
            var scene = cc.Scene.create();
            scene.addChild(CharaSelectLayer.create(this.storage));
            cc.Director.getInstance().replaceScene(cc.TransitionSlideInL.create(1.2, scene));
        }, this);
    },
    
    onRetryGame:function () {
        this.storage = getStageDataFromJson(this.storage,this.storage.stageNumber);
        cc.LoaderScene.preload(g_resources, function () {
            var scene = cc.Scene.create();
            scene.addChild(GameLayer.create(this.storage));
            cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
        }, this);
    },
});

GameOverLayer.create = function (storage) {
    var sg = new GameOverLayer();
    if (sg && sg.init(storage)) {
        return sg;
    }
    return null;
};
