var gameScene = cc.Scene.extend({
    name : 'gameScene',
    _sendTextTimes : 0,
    canOpenDialog : true,//判断当前是否有弹窗
    characterNum : 0,//房主的角色代号
    ctor:function(){
        this._super();

        this.initBg();

        this.initBeginLayer();

        // this.initChooseLayer();

        // this.initNetWork();

        // this.initGameLayer();
        // this.beginGame();

        // this.initEndLayer();

        this.scheduleUpdate();
    },
    initBg : function(){
        var beginBg = new cc.Sprite(res.beginBg);
        beginBg.x = size.width/2;
        beginBg.y = size.height/2;
        this.addChild(beginBg);
    },
    initBeginLayer : function(){
        var _beginLayer = new beginLayer(this);
        _beginLayer.tag = layerTag.beginLayer;
        this.addChild(_beginLayer, layerZIndex.beginLayer);  
    },
    initChooseLayer : function(){
        var _chooseLayer = new chooseLayer(this, 0);
        _chooseLayer.tag = layerTag.chooseLayer;
        this.addChild(_chooseLayer, layerZIndex.chooseLayer);
    },
    initRule : function(){
        if(!this.canOpenDialog)return;
        this.canOpenDialog = false;

        var _commonLayer = new commonLayer(this, null, null, 0);
        _commonLayer.initRule();
        this.addChild(_commonLayer, layerZIndex.ruleLayer);
    },
    initList : function(){
        if(!this.canOpenDialog)return;
        this.canOpenDialog = false;

        var _commonLayer = new commonLayer(this);
        _commonLayer.initList();
        this.addChild(_commonLayer, layerZIndex.listLayer);
    },
    initTip : function(){
        var _commonLayer = new commonLayer(this, size.width/2, size.height * 1.5);
        _commonLayer.initCheckMode();
        this.addChild(_commonLayer, layerZIndex.checkCodeLayer);
    },
    initEndLayer : function(){
        var endData = {
            'endTitleNum' : 0,
            'successNumArr' : [0, 3, 4],//1 2 3名
            'successName' : ['--1--', '--2--', '--3--'],//1 2 3名
        };
        var _endLayer = new endLayer(this, endData);
        _endLayer.tag = layerTag.endLayer;
        this.addChild(_endLayer, layerZIndex.endLayer);
    },
    initCode : function(){
        $('.codeConterntPage').removeClass('hide');
        $('.codeConterntPage').addClass('animated bounceIn');
    },
    update : function(){
        if(beginSeletCharacter){
            beginSeletCharacter = false;
            this.initChooseLayer();
        }
    },
    beginGame : function(_characterTag){
        //开始游戏，发送数据给后端，在接收到开始之后，统一移除选择界面，进入游戏
        var onmessage = true;
        if(onmessage){
            this.removeChooseLayer();

            //send _characterTag
            //result
            var palyerData = {
                selfNum : 0,
                infoData : [
                    {'res_index' : 0, 'num' : 0},//res_index 所选角色资源, num 第几条赛道
                    {'res_index' : 1, 'num' : 1},
                    {'res_index' : 2, 'num' : 2},
                    {'res_index' : 3, 'num' : 3},
                    {'res_index' : 4, 'num' : 4}
                ]
            };
            this.initGameLayer(palyerData);
        }
    },
    removeChooseLayer : function(){
        this.removeChildByTag(layerTag.chooseLayer);
    },
    initGameLayer : function(_palyerData){
        var _gameLayer = new gameLayer(this, 0);
        _gameLayer.initPlayer(_palyerData);
        _gameLayer.tag = layerTag.gameLayer;
        this.addChild(_gameLayer, layerZIndex.gameLayer);
    },
    initNetWork:function(){
        var test = new cc.MenuItemImage(res.beginBtn, res.beginBtn, this.onMenuSendTextClicked, this);
        testMenu = new cc.Menu(test);
        testMenu.x = size.width/2;
        testMenu.y = size.height/2;
        this.addChild(testMenu);

        // Send Text Status Label
        this._sendTextStatus = new cc.LabelTTF("Send Text WS is waiting...", "Arial", 18, cc.size(240, 100), cc.TEXT_ALIGNMENT_CENTER, cc.VERTICAL_TEXT_ALIGNMENT_TOP);
        this._sendTextStatus.anchorX = 0;
        this._sendTextStatus.anchorY = 0;
        this._sendTextStatus.x = size.width/2;
        this._sendTextStatus.y = size.height - 250;
        this.addChild(this._sendTextStatus);

        var self = this;
        this.WEBSOCKET = new WebSocket("ws://1k6a023752.iok.la/Weixin/oauth/websocket");
        this.WEBSOCKET.onopen = function(evt) {
            self._sendTextStatus.setString("Send Text WS was opened.");
            console.log(evt)
        };

        this.WEBSOCKET.onmessage = function(evt) {
            // self._sendTextTimes++;
            // var textStr = "response text msg: "+evt.data+", "+self._sendTextTimes;
            // console.log(textStr);
            // self._sendTextStatus.setString(textStr);
            self.TODOMESSAGE(evt.data);
        };

        this.WEBSOCKET.onerror = function(evt) {
            cc.log("sendText Error was fired");
        };

        this.WEBSOCKET.onclose = function(evt) {
            cc.log("WEBSOCKET websocket instance closed.");
            self.WEBSOCKET = null;
        };
    },
    onMenuSendTextClicked: function(sender) {
        if (this.WEBSOCKET.readyState == WebSocket.OPEN)
        {
            this._sendTextStatus.setString("Send Text WS is waiting...");
            this.WEBSOCKET.send('begin');
        }
        else
        {
            var warningStr = "send text websocket instance wasn't ready...";
            cc.log(warningStr);
            this._sendTextStatus.setString(warningStr);
        }
    },
    TODOMESSAGE : function(data){
        var _this = this;
        var _data = JSON.parse(data);
        switch (_data.type){
            case 'welcome' : {
                _this.WEBSOCKET.send('ready');
            };break;
        }
    }
});

var touchSprite = cc.Sprite.extend({
    ctor:function(_res, n){
        this._super(_res, n);

        this.n = n;

        this.initWithFile(_res);

        this.loadListener();
    },
    loadListener : function(){
        var listener = cc.EventListener.create({
            event           : cc.EventListener.TOUCH_ONE_BY_ONE,
            target          : this,
            swallowTouches  : true,
            onTouchBegan    : this.onTouchBegan,
            onTouchMoved    : this.onTouchMoved,
            onTouchEnded    : this.onTouchEnded
        });
        cc.eventManager.addListener(listener, this);
    },
    onTouchBegan: function (touch, event) {
        var self = this.target;
        if(!self.n.gameBegin)return;
        if(gameOver)return;

        var locationInNode = self.convertToNodeSpace(touch.getLocation());
        var size = self.getContentSize();
        var rect = cc.rect(0, 0, size.width, size.height);
        if (!cc.rectContainsPoint(rect, locationInNode)) {
            return false;
        }

        point1 = touch.getLocation();
        return true;
    },
    onTouchMoved : function (touch, event) {
        var self = this.target;
        // 触摸处理
        self.onTouchDispose(touch, event);
    },
    onTouchEnded : function (touch, event) {
        var self = this.target;
        var target = event.getCurrentTarget();

        var player = target.n.player;

        point2 = touch.getLocation();

        var deltaX = Math.floor(Math.abs(point1.x - point2.x));
        var deltaY = Math.floor(Math.abs(point1.y - point2.y));

        // 比较X方向和Y方向的偏移量
        if(point1.y < point2.y){
        // if((point1.y < point2.y) && deltaX < 15){
            jump = true;//人物跳起来了

            player.stopAllActions();
            player.jumpAction(res.aniMap, 90, 200, target.n.personNum);
            

            setTimeout(function(){
                player.stopAllActions();
                player.addAnimation(res.aniMap, 90, 200, 0, 8, target.n.personNum);
            },900);
        }
    },
    onTouchDispose : function(touch, event){//处理点击
        var target = event.getCurrentTarget();
        var pos = touch.getLocation();

        var player = target.n.player;

        player.x = pos.x;
    }
});

var sendScore = function(score){
    // $.ajax({
    //     type : 'post',
    //     url : sysParam.ajaxDoingGameURL,
    //     data: JSON.stringify({
    //         score: score
    //     }),
    //     contentType : "application/json",
    //     dataType : 'json',
    //     success : function (data) {
    //         console.log("send-score + " + data);
    //     },
    //     error : function (data) {

    //     }
    // });
}