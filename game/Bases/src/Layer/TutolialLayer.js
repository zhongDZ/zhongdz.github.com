var TutolialLayer = cc.Layer.extend({

    ctor:function () {
        this._super();
        //this.storage  = storage;
    },

    init:function () {

        var bRet = false;
        if (this._super()) {
            //bgm
            //playSystemBGM();
            changeLoadingImage();

            //back
            var story = cc.Sprite.create(s_story_001);
            story.setAnchorPoint(0,0);
            story.setPosition(0,210);
            this.addChild(story);

            //story
            this.rtn = "";
            this.textDisplayTime = 0;
            this.textDisplayNum = 0;
            this.storyNo = 1;
            this.infoText = cc.LabelTTF.create("test","Arial",15);
            this.infoText.setAnchorPoint(0,0);
            this.infoText.setPosition(50,80);
            this.addChild(this.infoText);
            this.changeText(this.storyNo);

            //new game
            this.nextButton = new ButtonItem("NEXT",200,40,this.onNextStory,this);
            this.nextButton.setPosition(320/2,60);
            this.addChild(this.nextButton);

            //Home键
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


            this.scheduleUpdate();
            this.setTouchEnabled(true);

            bRet = true;
        }
        return bRet;
    },

    update:function(dt){
        this.textDisplayTime++;
        if(this.textDisplayTime>=5){
            this.textDisplayTime = 0;
            this.textDisplayNum++;
        }
    
        var displayText = this.rtn.substring(0,this.textDisplayNum);
        this.infoText.setString(displayText);
    },

    onNextStory : function(){

        this.storyNo++;
        this.changeText(this.storyNo);
        if(this.storyNo == 14){
            onBackCallback();
        }
    },

    changeText: function(num){
        this.textDisplayTime=0;
        this.textDisplayNum =0;

        if(num == 1){
            this.rtn = "";
            this.rtn += "[1/6]\n";
            this.rtn += "\n";
            this.rtn += "公元30XX年，\n";
            this.rtn += "人类是破坏核战争。\n";
            this.rtn += "土地摧毁剩下的就是..\n";
            this.rtn += "\n";            
        }else if(num == 2){
            this.rtn = "";
            this.rtn += "[2/6]\n";
            this.rtn += "\n";
            this.rtn += "土地\n";
            this.rtn += "外星人邪恶结算，\n";
            this.rtn += "生活在这个地方再次孕育\n";
            this.rtn += "这似乎是不可能的\n";
        }else if(num == 3){
            this.rtn = "";
            this.rtn += "[3/6]\n";
            this.rtn += "\n";
            this.rtn += "然而，很长一段时间后，\n";
            this.rtn += "生活在清新的绿色复兴。\n";   
            this.rtn += "为了新生活在这片土地培养，\n";
            this.rtn += "收回土地满目疮痍。\n";        
        }else if(num == 4){
            this.rtn = "";
            this.rtn += "[4/6]\n";
            this.rtn += "\n";
            this.rtn += "唯一的办法是在一组打。\n";
            this.rtn += "\n";
            this.rtn += "\n";
            this.rtn += "\n";
        }else if(num == 5){
            this.rtn = "";
            this.rtn += "[5/6]\n";
            this.rtn += "\n";
            this.rtn += "通过改变土地满目疮痍绿色\n";
            this.rtn += "获得吸收了“大地的能量”\n";
            this.rtn += "无论是征服外星人增加绿化人\n";
            this.rtn += "\n";
        }else if(num == 6){
            this.rtn = "";
            this.rtn += "[6/6]\n";
            this.rtn += "\n";
            this.rtn += "再次绿色丰富青春气息\n";
            this.rtn += "回来的生活，直到那一天...\n";
            this.rtn += "\n";
            this.rtn += "\n";
        }else if(num == 7){
            this.rtn = "";
            this.rtn += "[操作説明 1/7]\n";
            this.rtn += "\n";
            this.rtn += "当你点击屏幕\n";
            this.rtn += "绿人会移动。\n";
            this.rtn += "如果你是在满目疮痍的土地之上\n";
            this.rtn += "并在一定的时间“恢复”的绿色。\n";
        }else if(num == 8){
            this.rtn = "";
            this.rtn += "[操作説明 2/7]\n";
            this.rtn += "\n";
            this.rtn += "当它恢复绿色\n";
            this.rtn += "“地球能源”产生，\n";
            this.rtn += "当你得到这个\n";
            this.rtn += "它将在瓶子的左下角积累\n";
        }else if(num == 9){
            this.rtn = "";
            this.rtn += "[操作説明 3/7]\n";
            this.rtn += "\n";
            this.rtn += "存储在瓶\n";
            this.rtn += "地球的能量\n";
            this.rtn += "按按钮\n";
            this.rtn += "您可以创建一个绿色的人\n";
        }else if(num == 10){
            this.rtn = "";
            this.rtn += "[操作説明 4/7]\n";
            this.rtn += "\n";
            this.rtn += "更绿人\n";
            this.rtn += "部队夺回土地雅\n";
            this.rtn += "动力攻击外星人\n";
            this.rtn += "这将增加\n";
        }else if(num == 11){
            this.rtn = "";
            this.rtn += "[操作説明 5/7]\n";
            this.rtn += "\n";
            this.rtn += "土地项目\n";
            this.rtn += "按职业\n";
            this.rtn += "还可以得到特殊的力量\n";
            this.rtn += "你能\n";
        }else if(num == 12){
            this.rtn = "";
            this.rtn += "[操作説明 6/7]\n";
            this.rtn += "\n";
            this.rtn += "有一次，它占用的土地\n";
            this.rtn += "并尝试重新夺回外星人\n";
            this.rtn += "因为来\n";
            this.rtn += "请适度继续下跌\n";
        }else if(num == 13){
            this.rtn = "";
            this.rtn += "[操作説明 7/7]\n";
            this.rtn += "\n";
            this.rtn += "的IT\n";
            this.rtn += "\n";
            this.rtn += "\n";
        }

        rtn = rtn.substring(1,100);
        this.infoText.setString(rtn);
    }
});

TutolialLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = TutolialLayer.create();
    scene.addChild(layer);
    return scene;
};

TutolialLayer.create = function () {
    var sg = new TutolialLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};
