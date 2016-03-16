var CharaSelectLayer = cc.Layer.extend({

    init:function (storage) {

        var bRet = false;
        if (this._super()) {

            changeLoadingImage();

            this.storage = storage;
            this.image          = null;
            this.charactorCode  = 0;
            this.isOpenDetail   = false;

            //文件的获取
            var jsonFile        = cc.FileUtils.getInstance().getStringFromFile(charactor_json);
            this.jsonData       = JSON.parse(jsonFile);
            this.charactorData  = this.jsonData["charactors"];

            //背景
            var back = cc.Sprite.create(loading_png);
            back.setAnchorPoint(0,0);
            this.addChild(back);

            //UI
            var ui = cc.Sprite.create(s_chara_select);
            ui.setAnchorPoint(0,0);
            this.addChild(ui);

            this.charactors = [];
            for (var i=1 ; i < this.charactorData.length; i++){
                var row = Math.floor((i-1)/4);
                var col = Math.floor((i-1)%4) + 1;
                this.charactor = new DisplayPlayer(
                    this.charactorData[i]["image"],
                    this.charactorData[i]["image_width"],
                    this.charactorData[i]["image_height"]
                );
                this.charactors.push(this.charactor);
                this.addChild(this.charactor);
                this.charactor.setAnchorPoint(0.5,0.5);
                this.charactor.setPosition(60 * col,80 * row + 120 + 200);

                var selectButton = new ButtonItem("OK",50,40,this.openDetailWindow,this,i);
                selectButton.setPosition(0,-50);
                selectButton.setTag(i);
                this.charactor.addChild(selectButton);
            }

            //Back Menu
            var label = cc.LabelTTF.create("-戻る-", "Arial", 20);
            var back = cc.MenuItemLabel.create(label,onBackCallback);
            var menu = cc.Menu.create(back);
            menu.setPosition( 320 / 2, 40);
            this.addChild(menu);

            //从这里详细信息窗口------------------------>
            this.detailWindow = cc.LayerColor.create(cc.c4b(255,255,255,255 * 0.3),280,250);
            this.detailWindow.setPosition(20,100);
            this.addChild(this.detailWindow);

            //字符的显示
            this.charactor = new DisplayPlayer(
                this.charactorData[0]["image"],
                this.charactorData[0]["image_width"],
                this.charactorData[0]["image_height"]
            );
            this.charactor.setAnchorPoint(0.5,0.5);
            this.charactor.setPosition(140,140);
            this.charactor.setScale(3,3);
            this.detailWindow.addChild(this.charactor);

            //字符描述
            this.infoText = cc.LabelTTF.create("","Arial",13);
            this.infoText.setAnchorPoint(0,1);       
            this.infoText.setPosition(140,170);
            this.detailWindow.addChild(this.infoText);

            // ok
            this.okButton = new ButtonItem("OK",80,40,this.okTapped,this);
            this.okButton.setPosition(100,30);
            this.detailWindow.addChild(this.okButton);

            // ng
            this.ngButton = new ButtonItem("NG",80,40,this.closeDetailWindow,this);
            this.ngButton.setPosition(190,30);
            this.detailWindow.addChild(this.ngButton);

            bRet = true;
        }

        this.scheduleUpdate();

        return bRet;
    },

    update:function(dt){
        if(this.isOpenDetail == true){
            this.detailWindow.setVisible(true);
            //不显示字符的列表
            for(var i=0;i<this.charactors.length;i++){
                this.charactors[i].setVisible(false);
            }
        }else{
            this.detailWindow.setVisible(false);
            //看到字符列表
            for(var i=0;i<this.charactors.length;i++){
                this.charactors[i].setVisible(true);
            }
        }
    },

    closeDetailWindow:function(){
        if(this.isOpenDetail == false) return;

        playSystemButton();
        this.isOpenDetail = false;
    },

    openDetailWindow:function(sender){
        if(this.isOpenDetail == true) return;

        //打开屏幕细节
        playSystemButton();
        this.isOpenDetail = true;

        //到详细的基础上查看图像和文字屏幕的字符代码
        this.charactorCode = sender.getTag();
        this.charactor.changeImage(
            this.charactorData[this.charactorCode]["image"],
            this.charactorData[this.charactorCode]["image_width"],
            this.charactorData[this.charactorCode]["image_height"]
        );
        this.infoText.setString(
            this.charactorData[this.charactorCode]["detail"]
        );
    },

    okTapped:function(sender){
        if(this.isOpenDetail == false) return;

        playSystemButton();
        this.onNewGame(this.image,this.charactorCode);
    },

    onNewGame:function (img,charactorCode) {
        cc.LoaderScene.preload(g_resources, function () {            
            var scene = cc.Scene.create();

            //从选定的字符，让玩家参数
            storage = getCharactorDataFromJson(this.storage,charactorCode);
            console.log(storage,this.storage)

            scene.addChild(GameLayer.create(this.storage));
            cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
        },this);
    },
});

CharaSelectLayer.create = function (storage) {
    var sg = new CharaSelectLayer();
    if (sg && sg.init(storage)) {
        return sg;
    }
    return null;
};
