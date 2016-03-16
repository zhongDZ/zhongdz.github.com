//
//  ResultLayer.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var ResultLayer = cc.Layer.extend({

    ctor:function (storage) {
        this._super();
        this.storage  = storage;
    },

    init:function () {
        var bRet = false;
        if (this._super()) {
            //bgm
            playSystemBGM();
            changeLoadingImage();

            //back
            var back = cc.Sprite.create(loading_png);
            back.setAnchorPoint(0,0);
            this.addChild(back, 0, 1);

            //back
            var sp = cc.Sprite.create(s_result_clear);
            sp.setAnchorPoint(0,0);
            this.addChild(sp, 0, 1);

            //スコア
            this.scoreText = cc.LabelTTF.create(
                getZeroPaddingNumber(this.storage.gameScore,6),
                "Arial",
                50
            );
            this.scoreText.setAnchorPoint(0.5,0);       
            this.scoreText.setPosition(320/2,250);
            this.addChild(this.scoreText);

            //結果
            this.resultText = cc.LabelTTF.create(
                  "復元×" + getZeroPaddingNumber(this.storage.occupiedCnt,6) + "\n"
                + "キル×" + getZeroPaddingNumber(this.storage.killedEnemyCnt,6) + "\n"
                + "生産×" + getZeroPaddingNumber(this.storage.productCnt,6) + "\n"
                + "お金×" + getZeroPaddingNumber(this.storage.coinAmount,6) + "\n"
            ,"Arial",15);
            this.resultText.setAnchorPoint(0,0);       
            this.resultText.setPosition(50,150);
            this.resultText.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
            this.addChild(this.resultText);

            //ホームボタン
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

            //nextボタン
            var nextButton = new ButtonItem("次のステージ",200,50,this.onNextGame,this);
            nextButton.setPosition(160,120);
            this.addChild(nextButton);

            //nextボタン
            var changeButton = new ButtonItem("キャラ選択",200,50,this.onCharaSelect,this);
            changeButton.setPosition(160,60);
            this.addChild(changeButton);

            //ツイッターへ投稿するボタン
            var twitterButton = cc.MenuItemImage.create(
                s_twitter_button,
                s_twitter_button_on,
                this.onTweet,
                this
            );
            twitterButton.setAnchorPoint(0,0);
            twitterButton.setPosition(210,160);

            //Facebookに投稿するボタン
            var facebookButton = cc.MenuItemImage.create(
                s_facebook_button,
                s_facebook_button_on,
                this.onFacebook,
                this
            );
            facebookButton.setAnchorPoint(0,0);
            facebookButton.setPosition(250,160);
            this.menu = cc.Menu.create(
                twitterButton,
                facebookButton
            );
            this.addChild(this.menu);
            this.menu.setPosition(0,0);

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

    onNextGame:function () {
        this.storage = getStageDataFromJson(this.storage,this.storage.stageNumber);
        cc.LoaderScene.preload(g_resources, function () {
            var scene = cc.Scene.create();
            scene.addChild(GameLayer.create(this.storage));
            cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
        }, this);
    },

    onTweet:function(){
        goTwitter(getZeroPaddingNumber(this.storage.gameScore,6));
    },

    onFacebook:function(){
        goFacebook(getZeroPaddingNumber(this.storage.gameScore,6));
    },
});

ResultLayer.create = function (storage) {
    var sg = new ResultLayer(storage);
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};
