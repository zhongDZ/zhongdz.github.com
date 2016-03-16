//
//  GameUI.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var GameUI = cc.Node.extend({
    ctor:function (game) {
        this._super();
        this.game    = game;
        this.storage = this.game.storage;

        //card
        this.card001Amount = 3;
        this.card002Amount = 10;
        this.card003Amount = 20;
        this.card004Amount = 30;

        this.add001Amount  = 1;
        this.add002Amount  = 5;
        this.add003Amount  = 10;
        this.add004Amount  = 20;

        this.card001Label  = "×01\n[P03]";
        this.card002Label  = "×05\n[P10]";
        this.card003Label  = "×10\n[P20]";
        this.card004Label  = "×20\n[P30]";

        //header
        this.uiHeader = cc.LayerColor.create(cc.c4b(0,255,255,255 * 0),320,200);
        this.uiHeader.setPosition(0,430);
        this.uiHeader.setAnchorPoint(0,0);
        this.addChild(this.uiHeader);

        //footer
        this.uiFooter = cc.LayerColor.create(cc.c4b(0,255,255,255 * 0),320,80);
        this.uiFooter.setPosition(0,0);
        this.uiFooter.setAnchorPoint(0,0);
        this.addChild(this.uiFooter);

        //s_header
        this.imgHeader = cc.Sprite.create(s_header);
        this.imgHeader.setPosition(0,-30);
        this.imgHeader.setAnchorPoint(0,0);
        this.uiHeader.addChild(this.imgHeader);

        //s_footer
        this.imgHeader = cc.Sprite.create(s_footer);
        this.imgHeader.setPosition(0,0);
        this.imgHeader.setAnchorPoint(0,0);
        this.uiFooter.addChild(this.imgHeader);  

        //ミッション文字
        this.missionLabel = cc.LabelTTF.create("","Arial",14);        
        this.missionLabel.setPosition(90,420);
        this.missionLabel.setAnchorPoint(0,0);
        this.addChild(this.missionLabel);

        //プレイヤーキャラクターの表示
        this.charactor = new DisplayPlayer(
            game.player.image,game.player.imgWidth,game.player.imgHeight
        );
        this.charactor.setAnchorPoint(0.5,0.5);
        this.charactor.setPosition(40,20);
        this.charactor.setScale(1.5,1.5);
        this.uiHeader.addChild(this.charactor);

        //Territory
        this.territoryNumLable = cc.LabelTTF.create("","Arial",25);        
        this.territoryNumLable.setPosition(20,-25);
        this.territoryNumLable.setAnchorPoint(0,0);
        this.territoryNumLable.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        this.uiHeader.addChild(this.territoryNumLable);

        //EnergyGauge
        this.energyGauge = cc.LayerColor.create(cc.c4b(255,255,0,255),42,34);
        this.energyGauge.setPosition(22,18);
        this.energyGauge.setAnchorPoint(0,0);
        this.uiFooter.addChild(this.energyGauge);

        //コイン数
        this.coinNumLable = cc.LabelTTF.create("","Arial",20);        
        this.coinNumLable.setPosition(25,10);
        this.coinNumLable.setAnchorPoint(0,0);
        this.coinNumLable.setFontFillColor(cc.c4b(255,0,0,255));
        this.coinNumLable.enableStroke(cc.c4b(0,0,0,5),2,false);
        this.uiFooter.addChild(this.coinNumLable);

        //タイムリミット
        this.timeLabel = cc.LabelTTF.create("","Arial",20);
        this.timeLabel.setPosition(320/2,15);
        this.timeLabel.setAnchorPoint(0.5,0);
        this.uiHeader.addChild(this.timeLabel);

        //カードCover
        this.card001Gauge = cc.LayerColor.create(cc.c4b(0,0,0,255*0.75),52,52);
        this.card001Gauge.setPosition(40 + 55 * 1,5);
        this.card001Gauge.setAnchorPoint(0,0);
        this.uiFooter.addChild(this.card001Gauge,41);

        //カード
        var card001Button = cc.MenuItemImage.create(
            s_item_button,
            s_item_button_on,
            this.useCard001,
            this
        );
        card001Button.setAnchorPoint(0,0);
        card001Button.setPosition(40 + 55 * 1,0);

        this.uiFooter.addChild(
            createLabel(this.card001Label,15,40 + 55 + 5 * 1,10),
            40
        );

        //カードCover
        this.card002Gauge = cc.LayerColor.create(cc.c4b(0,0,0,255*0.75),52,52);
        this.card002Gauge.setPosition(40 + 55 * 2,5);
        this.card002Gauge.setAnchorPoint(0,0);
        this.uiFooter.addChild(this.card002Gauge,41);

        var card002Button = cc.MenuItemImage.create(
            s_item_button,
            s_item_button_on,
            this.useCard002,
            this
        );
        card002Button.setAnchorPoint(0,0);
        card002Button.setPosition(40 + 55 * 2,0);

        this.uiFooter.addChild(
            createLabel(this.card002Label,15,40 + 55 * 2 + 5,10),
            40
        );

        //カードCover
        this.card003Gauge = cc.LayerColor.create(cc.c4b(0,0,0,255*0.75),52,52);
        this.card003Gauge.setPosition(40+ 55 * 3,5);
        this.card003Gauge.setAnchorPoint(0,0);
        this.uiFooter.addChild(this.card003Gauge,41);

        var card003Button = cc.MenuItemImage.create(
            s_item_button,
            s_item_button_on,
            this.useCard003,
            this
        );
        card003Button.setAnchorPoint(0,0);
        card003Button.setPosition(40+ 55 * 3,0);
        
        this.uiFooter.addChild(
            createLabel(this.card003Label,15,40 + 55 * 3 + 5,10),
            40
        );

        //カードCover
        this.card004Gauge = cc.LayerColor.create(cc.c4b(0,0,0,255*0.75),52,52);
        this.card004Gauge.setPosition(40+ 55 * 4,5);
        this.card004Gauge.setAnchorPoint(0,0);
        this.uiFooter.addChild(this.card004Gauge,41);

        var card004Button = cc.MenuItemImage.create(
            s_item_button,
            s_item_button_on,
            this.useCard004,
            this
        );
        card004Button.setAnchorPoint(0,0);
        card004Button.setPosition(40+ 55 * 4,0); 

        this.uiFooter.addChild(
            createLabel(this.card004Label,15,40 + 55 * 4 + 5,10),
            40
        );

        //カード
        var homeButton = cc.MenuItemImage.create(
            s_home_button,
            s_home_button_on,
            onBackCallback,
            this
        );
        homeButton.setAnchorPoint(0,0);
        homeButton.setPosition(260,-15);

        //set header
        this.headerMenu = cc.Menu.create(
            homeButton
        );
        this.uiHeader.addChild(this.headerMenu,33);
        this.headerMenu.setPosition(0,0);

        //set footer
        this.footerMenu = cc.Menu.create(
            card001Button,
            card002Button,
            card003Button,
            card004Button
        );
        this.uiFooter.addChild(this.footerMenu,33);
        this.footerMenu.setPosition(0,0);

        var frameSeq = [];
        for (var i = 0; i <= 4; i++) {
            var frame = cc.SpriteFrame.create(s_break,cc.rect(48*i,0,48,96));
            frameSeq.push(frame);
        }
        this.wa = cc.Animation.create(frameSeq,0.1);
        this.raBreak = cc.RepeatForever.create(cc.Animate.create(this.wa));
        //this.raBreak = cc.Repeat.create(cc.Animate.create(this.wa),1);
        this.breakSprite = cc.Sprite.create(s_coin,cc.rect(0,0,48,96));
        this.breakSprite.setPosition(50,60);
        this.breakSprite.runAction(this.raBreak);
        this.addChild(this.breakSprite);

    },

    useCard001:function(){
        var amount = this.storage.coinAmount;
        if(amount >= this.card001Amount){
            playSE(s_se_dog);
            this.game.addColleagues(this.add001Amount);
            this.storage.useCoin(this.card001Amount);
            this.storage.productCnt+=this.add001Amount;
        }
    },

    useCard002:function(){
        var amount = this.storage.coinAmount;
        if(amount >= this.card002Amount){
            playSE(s_se_dog);
            this.game.addColleagues(this.add002Amount);
            this.storage.useCoin(this.card002Amount);
            this.storage.productCnt+=this.add002Amount;
        }
    },

    useCard003:function(){
        var amount = this.storage.coinAmount;
        if(amount >= this.card003Amount){
            playSE(s_se_dog);
            this.game.addColleagues(this.add003Amount);
            this.storage.useCoin(this.card003Amount);
            this.storage.productCnt+=this.add003Amount;
        }
    },

    useCard004:function(){
        var amount = this.storage.coinAmount;
        if(amount >= this.card004Amount){
            playSE(s_se_dog);
            this.game.addColleagues(this.add004Amount);
            this.storage.useCoin(this.card004Amount);
            this.storage.productCnt+=this.add004Amount;
        }
    },

    //UIのテキストをupdateする
    update:function() {

        //エネルギーを吸収しているときに、アイコンを光らせる処理
        if(this.game.getEnergyCnt >= 1){
            this.game.getEnergyCnt++;
            if(this.game.getEnergyCnt>=30*1){
                this.game.getEnergyCnt = 0;
            }
            this.breakSprite.setVisible(true);
        }else{
            this.breakSprite.setVisible(false);
        }
    
        //ミッションの表示
        this.missionLabel.setString(
            "" + this.game.missionLabel + "[" + this.game.missionCnt + "/" + this.game.missionMaxCnt+"]"
        );

        //ミッション時間の表示
        var time = getZeroPaddingNumber(Math.floor((this.game.missionTimeLimit - this.game.timeCnt)/30),3);
        this.timeLabel.setString(
            "" + time + "秒"
        );
        this.territoryNumLable.setString(
            "×"+ getZeroPaddingNumber(Math.floor(this.game.colleagueCnt + 1),2) + ""
        );

        //エネルギーの容量を表示
        var amount = getZeroPaddingNumber(this.storage.coinAmount,3);
        this.coinNumLable.setString(
            "" + amount + ""
        );
        var rate = this.storage.coinAmount / 20;
        if(rate > 1){rate = 1;}
        this.energyGauge.setScale(1,rate);

        if(amount >= this.card001Amount){
            this.card001Gauge.setVisible(false);
        }else{
            this.card001Gauge.setVisible(true);
        }
        if(amount >= this.card002Amount){
            this.card002Gauge.setVisible(false);
        }else{
            this.card002Gauge.setVisible(true);
        }
        if(amount >= this.card003Amount){
            this.card003Gauge.setVisible(false);
        }else{
            this.card003Gauge.setVisible(true);
        }
        if(amount >= this.card004Amount){
            this.card004Gauge.setVisible(false);
        }else{
            this.card004Gauge.setVisible(true);
        }
    },

});
