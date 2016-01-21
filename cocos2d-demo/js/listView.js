//行间距
var LINE_SPACE = 40;
//坐标
var curPos = {x:0,y:0};
var TestLayer = cc.LayerGradient.extend({
    YOffset : 0,
    ctor: function () {
        this._super(cc.color(0,0,0,255), cc.color(0x46,0x82,0xB4,255));
        this.init();
    },
    init: function () {
        // 全局变量
        director = cc.director;
        winSize = director.getWinSize();

        this._itemMenu = new cc.Menu();

        for (var i = 0, len = testNames.length; i < len; i++) {
            var label = new cc.LabelTTF(testNames[i].title, "Arial", 24);
            var menuItem = new cc.MenuItemLabel(label, this.onMenuCallback, this);
            this._itemMenu.addChild(menuItem, i + 10000);
            menuItem.x = winSize.width / 2;
            menuItem.y = (winSize.height - (i + 1) * LINE_SPACE);
            menuItem.setEnabled(true);
        }

        this._itemMenu.width = winSize.width;
        this._itemMenu.height = (testNames.length + 1) * LINE_SPACE;
        this._itemMenu.x = curPos.x;
        this._itemMenu.y = curPos.y;
        this.addChild(this._itemMenu);

        //通过事件监听，获得鼠标(鼠标滚轮)或touch移动偏移量，来改变menu的坐标
        if ('touches' in cc.sys.capabilities)
            cc.eventManager.addListener({
                event: cc.EventListener.TOUCH_ALL_AT_ONCE,
                onTouchesMoved: function (touches, event) {
                    var target = event.getCurrentTarget();
                    var delta = touches[0].getDelta();
                    target.moveMenu(delta);
                    return true;
                }
            }, this);
        else if ('mouse' in cc.sys.capabilities) {
            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                onMouseMove: function (event) {
                    if(event.getButton() == cc.EventMouse.BUTTON_LEFT)
                        event.getCurrentTarget().moveMenu(event.getDelta());
                },
                onMouseScroll: function (event) {
                    var delta = cc.sys.isNative ? event.getScrollY() * 6 : -event.getScrollY();
                    event.getCurrentTarget().moveMenu({y : delta});
                    return true;
                }
            }, this);
        }
    },
    onMenuCallback:function (sender) {
        var idx = sender.getLocalZOrder() - 10000;
        // get the userdata, it's the index of the menu item clicked
        console.log(testNames[idx].title);
        alert("你选择了 "+testNames[idx].title);
        return;

    },
    moveMenu:function(delta) {
        var newY = this._itemMenu.y + delta.y;
        if (newY < 0 )
            newY = 0;
        if( newY > ((testNames.length + 1) * LINE_SPACE - winSize.height))
            newY = ((testNames.length + 1) * LINE_SPACE - winSize.height);
        this._itemMenu.y = newY;
    }
});

var testNames = [
    {
        title:"MenuItem01 Test"
    },
    {
        title:"MenuItem02 Test"
    },
    {
        title:"MenuItem03 Test"
    },
    {
        title:"MenuItem04 Test"
    },
    {
        title:"MenuItem05 Test"
    },
    {
        title:"MenuItem06 Test"
    },
    {
        title:"MenuItem07 Test"
    },
    {
        title:"MenuItem08 Test"
    },
    {
        title:"MenuItem09 Test"
    },
    {
        title:"MenuItem10 Test"
    },
    {
        title:"MenuItem11 Test"
    },
    {
        title:"MenuItem12 Test"
    },
    {
        title:"MenuItem13 Test"
    },
    {
        title:"MenuItem14 Test"
    },
    {
        title:"MenuItem15 Test"
    },
    {
        title:"MenuItem16 Test"
    },
    {
        title:"MenuItem17 Test"
    },
    {
        title:"MenuItem18 Test"
    },
    {
        title:"MenuItem19 Test"
    },
    {
        title:"MenuItem20 Test"
    }
];

var TestListView = cc.LayerGradient.extend({
    ctor: function () {
        this._super(cc.color(0,0,0,255), cc.color(0x46,0x82,0xB4,255));
        this.init();
    },
    init: function () {
        //create the list view
        var listView = new ccui.ListView();
        listView.setDirection(ccui.ScrollView.DIR_VERTICAL);
        listView.setTouchEnabled(true);
        listView.setBounceEnabled(true);
        //listView.setBackGroundImage(res.listviewBg);
        //listView.setBackGroundImageScale9Enabled(true);
        //设置listview可见区域
        listView.setContentSize(cc.size(300, 200));
        listView.x = (cc.winSize.width - listView.width) / 2;
        listView.y = (cc.winSize.height - listView.height) / 2 - 20;
        listView.addEventListener(this.selectedItemEvent, this);
        // create model
        var default_label =new cc.LabelTTF("第0关","Microsoft YaHei",24);
 
        var default_item = new ccui.Layout();
        default_item.setTouchEnabled(true);
        default_item.setContentSize(cc.size(300,35));
        default_item.width = listView.width;
        default_item.addChild(default_label);
        // set model
        listView.setItemModel(default_item);
 
        for (var i = 0; i < 10; ++i) {
            // add default item
            listView.pushBackDefaultItem();
            // add custom item
            var lblMenu=new cc.LabelTTF("第"+(i+1)+"关","Microsoft YaHei",24);
            lblMenu.x = 150;
            lblMenu.y = 35 * -1*i - 10;
            console.log(lblMenu.y)
 
            var lblLayer=new ccui.Layout();
            lblLayer.width = listView.width;
            lblLayer.addChild(lblMenu);
 
            listView.insertCustomItem(lblLayer);
        }
        // 设置所有item重力方向
        listView.setGravity(ccui.ListView.GRAVITY_CENTER_VERTICAL);
        this.addChild(listView);
    },
    selectedItemEvent: function (sender, type) {
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