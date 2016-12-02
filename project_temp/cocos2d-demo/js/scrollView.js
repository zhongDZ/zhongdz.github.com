var ScrollViewTestingLayer=cc.Layer.extend({
    ctor:function () {
        this._super();
        // Create the list view
        var listView = new ccui.ListView();
        // set list view ex direction
        listView.setDirection(ccui.ScrollView.DIR_VERTICAL);
        listView.setTouchEnabled(true);
        listView.setBounceEnabled(true);
        listView.setBackGroundImage(res.green_edit);
        listView.setBackGroundImageScale9Enabled(true);
        listView.setContentSize(cc.size(350, 300));
        listView.x = winSize.width/2 - 100;
        listView.y = winSize.height/2;
        listView.addEventListener(this.selectedItemEvent, this);
        this.addChild(listView);

        // var default_item = new ccui.Layout();
        var default_item = new ccui.ImageView();
        default_item.loadTexture(res.orange_edit)
        default_item.setTouchEnabled(true);
        default_item.setContentSize(cc.size(30,20));
        default_item.width = listView.width;
        //default_item.addChild(default_button);
        // set model
        listView.setItemModel(default_item);

        for (var i = 0; i < 20; ++i) {
            listView.pushBackDefaultItem();//注意这一行，相当重要！！！内部占坑用的，我就奇怪设计api的时候直接让传个参数进去内部调用不也行么？官方二不兮兮的这么封装我也是醉了
        }

        // for(var i=0;i<20;i++){
        //     var lblMenu=new cc.LabelBMFont(i.toString(),100);
        //     var lblLayer=new ccui.Layout();
        //     lblMenu.setContentSize(cc.size(100,20));
        //     lblMenu.width=80;
        //     lblMenu.x=50;
        //     lblMenu.y=20*-1*i;
        //     lblLayer.addChild(lblMenu);
        //     listView.insertCustomItem(lblLayer);
        // }
        // // set all items layout gravity
        // listView.setGravity(ccui.ListView.GRAVITY_CENTER_VERTICAL);
    },
    selectedItemEvent: function (sender, type) {
        cc.log("selectedItemEvent");
        switch (type) {
            case ccui.ListView.EVENT_SELECTED_ITEM:
                var listViewEx = sender;
                cc.log("select child index = " + listViewEx.getCurSelectedIndex());
                break;

            default:
                break;
        }
    }
});

var testLayer = cc.Layer.extend({
    ctor:function(){
        this._super();

        var sp = new cc.Sprite(res.green_edit)
        sp.setAnchorPoint( cc.p (0,0) );
        var offset = sp.getContentSize().height - 300;
        sp.setPosition(cc.p( 0, 0));
        sp.setVisible(true);
        // var container = new cc.LayerRGBA();
        // var _color = new cc.color(255, 0, 0);  // 设置颜色
        // container.setColor(_color);
        // container.setAnchorPoint( cc.p (0,0) );
        // container.addChild(sp);
        // container.setPosition( cc.p (0,300)) ;
        // container.setVisible(true);

        console.log('0')
        var scroll_card = cc.ScrollView.create();
        scroll_card.setContainer();
        scroll_card.setContentSize(cc.size(512,1200));
        scroll_card.setViewSize(cc.size(512,300));
        scroll_card.setPosition(cc.p(100,100));
        scroll_card.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL);
        scroll_card.setVisible(true);
        scroll_card.setBounceable(true);
        scroll_card.setContentOffset(cc.p(150,0) , false);
    }
});

var UIScrollViewTest_Vertical_Multiple = cc.Layer.extend({
    _scrollView:null,
    _itemNumber:100,
    ctor: function () {
        // if (this._super()) {

            this._super();
            // var widgetSize = this._widget.getContentSize();
            // //init text
            // this._topDisplayLabel.setString("Move by vertical direction");
            // this._topDisplayLabel.x = widgetSize.width / 2.0;
            // this._topDisplayLabel.y = widgetSize.height / 2.0 + this._topDisplayLabel.height * 1.5;
            // this._bottomDisplayLabel.setString("Compare drawCalls and FPS with Previous Version");
            // this._bottomDisplayLabel.setFontSize(25);
            // this._bottomDisplayLabel.x = widgetSize.width / 2;
            // this._bottomDisplayLabel.y = widgetSize.height / 2 - this._bottomDisplayLabel.height * 4;

            // var background = this._widget.getChildByName("background_Panel");

            // Create the scrollview
            var scrollView = this._scrollView = new ccui.ScrollView();
            scrollView.setDirection(ccui.ScrollView.DIR_VERTICAL);
            scrollView.setTouchEnabled(true);
            scrollView.setContentSize(cc.size(400, 450));
            scrollView.setBackGroundImage(res.green_edit);
            scrollView.setBackGroundImageScale9Enabled(true);

            scrollView.x = 100;
            scrollView.y = 100;
            this.addChild(scrollView);

            // var labelText = new cc.LabelTTF("Texts", "Arial", 25);
            // var labelButton = new cc.LabelTTF("Buttons", "Arial", 25);
            // var labelS9sprite = new cc.LabelTTF("s9Sprites", "Arial", 25);

            // var menuItem1 = new cc.MenuItemLabel(labelText, this.drawTexts, this);
            // var menuItem2 = new cc.MenuItemLabel(labelButton, this.drawButtons, this, false);
            // var menuItem3 = new cc.MenuItemLabel(labelS9sprite, this.drawS9Buttons, this);
            // var menu = new cc.Menu(menuItem1, menuItem2, menuItem3);
            // menu.x = 0;
            // menu.y = 0;
            // menuItem1.x = menuItem2.x = menuItem3.x = 120;
            // menuItem1.y = 150;
            // menuItem2.y = 200;
            // menuItem3.y = 250;
            // this.addChild(menu, 1);
            this.drawButtons1();
            this.drawButtons();
            this.drawTexts();

            // this.addLi();
            
            return true;
        // }
        // return false;
    },
    drawTexts:function() {
        var scrollView = this._scrollView;
        var n = this._itemNumber/2;
        // if(scrollView.getChildren())
        //     scrollView.removeAllChildren(true);
        var Texts = [];
        var start = new ccui.Text("---start---", "Thonburi", 10);
        var innerWidth = scrollView.width;
        var innerHeight = n * start.height;
        scrollView.setInnerContainerSize(cc.size(innerWidth, innerHeight));

        start.x = innerWidth / 2;
        start.y = scrollView.getInnerContainerSize().height - start.height / 2;
        Texts[0] = start;
        scrollView.addChild(start);

        for (var i = 1; i < n; i++) {
            var text = new ccui.Text("This is a test label: " + i, "Thonburi", 10);
            text.setFontSize(30)
            text.x = innerWidth / 2;
            text.y = Texts[i - 1].getBottomBoundary() - text.height / 2;
            Texts[i] = text;
            scrollView.addChild(Texts[i]);
        }
    },
    drawButtons:function() {
        var scrollView = this._scrollView;
        var n = this._itemNumber/2;
        // if(scrollView.getChildren())
        //     scrollView.removeAllChildren(true);
        var Buttons = [];
        var innerWidth = scrollView.width;

        for (var j = 0; j < n; j++) {
            var button = new ccui.Button();
            button.setTouchEnabled(true);
            button.loadTextures(res.green_edit);
            button.x = innerWidth / 2;
            if(j===0) {
                var innerHeight = n * button.height;
                scrollView.setInnerContainerSize(cc.size(innerWidth, innerHeight));
                button.y =scrollView.getInnerContainerSize().height - button.height / 2;
            }
            else
                button.y =Buttons[j - 1].getBottomBoundary() - button.height / 2;
            Buttons.push(button);
            scrollView.addChild(button);
        }
    },
    drawButtons1:function() {
        var scrollView = this._scrollView;
        var n = this._itemNumber/2;
        // if(scrollView.getChildren())
        //     scrollView.removeAllChildren(true);
        var Buttons = [];
        var innerWidth = scrollView.width;

        for (var j = 0; j < n; j++) {
            var button = new ccui.Button();
            button.setTouchEnabled(true);
            button.loadTextures(res.orange_edit);
            button.x = innerWidth / 2 + 80;
            if(j===0) {
                var innerHeight = n * button.height;
                scrollView.setInnerContainerSize(cc.size(innerWidth, innerHeight));
                button.y =scrollView.getInnerContainerSize().height - button.height / 2;
            }
            else
                button.y =Buttons[j - 1].getBottomBoundary() - button.height / 2;
            Buttons.push(button);
            scrollView.addChild(button);
        }

    },
    addLi:function(){
        var scrollView = this._scrollView;
        for(var i = 0;i<30;i++){
            
        var sprite = new cc.Sprite(res.orange_edit);
        sprite.x = 100;
        sprite.y = 100 + 80 * i;

        // this.addChild(sprite);


        var sprite1 = new cc.Sprite(res.green_edit);
        sprite1.x = 10;
        sprite1.y = 10;
        sprite.addChild(sprite1);

        var txt = new cc.LabelTTF(''+i+'','Arial',30);
        txt.x = 30;
        txt.y = 10;
        sprite.addChild(txt);
        var innerWidth = scrollView.width;
        var innerHeight = i * 85;
        scrollView.setInnerContainerSize(cc.size(innerWidth, innerHeight));


        scrollView.addChild(sprite)
        }
        
    }
});