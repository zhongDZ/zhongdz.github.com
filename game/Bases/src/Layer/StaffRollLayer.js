//
//  StaffRollLayer.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var StaffRollLayer = cc.Layer.extend({

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

            this.infoTextPosX = 10;
            this.infoTextPosY = -600;

            var rtn = "";
            rtn += "\n";
            rtn += "\n";
            rtn += "ALL STAGE CLEAR !!\n";
            rtn += "CONGRATULATIONS\n";
            rtn += "\n";
            rtn += "\n";
            rtn += "";
            rtn += "\n";
            rtn += "\n";
            rtn += "\n";
            rtn += "\n";
            rtn += "\n";
            rtn += "CHARACTER DESIGN\n";
            rtn += "ひみつ(Urochi)\n";
            rtn += "http://uros.web.fc2.com\n";
            rtn += "\n";
            rtn += "\n";
            rtn += "MAP DESIGN\n";
            rtn += "ドット絵世界\n";
            rtn += "http://yms.main.jp/index.html\n";
            rtn += "\n";
            rtn += "\n";      
            rtn += "EFFECT DESIGN\n";
            rtn += "ぴぽや\n";
            rtn += "http://piposozai.blog76.fc2.com/\n";
            rtn += "\n";
            rtn += "\n";
            rtn += "MUSIC\n";
            rtn += "魔王魂\n";
            rtn += "http://maoudamashii.jokersounds.com\n";
            rtn += "\n";
            rtn += "\n";
            rtn += "PHOTO\n";
            rtn += "ゆんフリー写真素材集\n";
            rtn += "http://www.yunphoto.net\n";
            rtn += "\n";
            rtn += "\n";
            rtn += "\n";
            rtn += "DIRECTOR & PROGRAMMER\n";
            rtn += "OGGATA\n";
            rtn += "http://oggata.github.io/\n";
            rtn += "\n";
            rtn += "\n";
            rtn += "\n";
            rtn += "Thank you for playing\n";
            rtn += "Hope to see you play better next time !";
            rtn += "\n";

            this.infoText = cc.LabelTTF.create(rtn,"Arial",15);
            this.infoText.setAnchorPoint(0,0);
            this.infoText.setPosition(this.infoTextPosX,this.infoTextPosY);
            this.addChild(this.infoText);
 
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

            //ツイッターへ投稿するボタン
            var twitterButton = cc.MenuItemImage.create(
                s_twitter_button,
                s_twitter_button_on,
                this.onTweet,
                this
            );
            twitterButton.setAnchorPoint(0,0);
            twitterButton.setPosition(210,20);

            //Facebookに投稿するボタン
            var facebookButton = cc.MenuItemImage.create(
                s_facebook_button,
                s_facebook_button_on,
                this.onFacebook,
                this
            );
            facebookButton.setAnchorPoint(0,0);
            facebookButton.setPosition(250,20);
            this.menu = cc.Menu.create(
                twitterButton,
                facebookButton
            );
            this.addChild(this.menu);
            this.menu.setPosition(0,0);

            this.scheduleUpdate();
            this.setTouchEnabled(true);

            bRet = true;
        }

        return bRet;
    },

    update:function(dt){
        this.infoTextPosY+=0.5;
        this.infoText.setPosition(this.infoTextPosX,this.infoTextPosY);
    },

    onTweet:function(){
        goTwitterClear(getZeroPaddingNumber(100,6));
    },

    onFacebook:function(){
        goFacebook(getZeroPaddingNumber(100,6));
    },
});

StaffRollLayer.create = function (storage) {
    var sg = new StaffRollLayer(storage);
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};
