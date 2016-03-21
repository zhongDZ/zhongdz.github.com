var inputArrY = [
    [690, 540, 392],
    [720, 590, 460, 330],
    [735, 620, 505, 385, 265]
];
var inputFailY = [
    [632, 485, 332],
    [662, 535, 400],
    [685, 573, 455]
];
var inputFailSprArr = [];
var infoLayer = cc.Layer.extend({
	ctor:function(len){
		this._super(len);
        this.len = len;

		this.init();
	},
	init:function(){
		var gameBg  = new cc.Sprite(res.gameBg);
        gameBg.x = size.width/2;
        gameBg.y = size.height/2;
        this.addChild(gameBg,0);

        var infoBg  = new cc.Sprite(res.infoBg);
        infoBg.x = size.width/2;
        infoBg.y = size.height/2;
        this.addChild(infoBg,0);

        inputFailSprArr.length = 0;
        for(var i = 0;i<3;i++){
            var inputFail  = new cc.Sprite(res.inputFail);
            inputFail.x = 200;
            inputFail.y = inputFailY[(this.len - 3)][i];
            this.addChild(inputFail,1);
            inputFail.visible = false;
            inputFailSprArr.push(inputFail);
        }

        var subSuccess  = new cc.Sprite(res.subSuccess);
        subSuccess.x = size.width/2;
        subSuccess.y = 210;
        this.addChild(subSuccess,0);

        var layer = new EditBoxTestLayer(this.len);
        this.addChild(layer);

        this.initSubmitBtn();
	},
	btn1Call:function(){
        cc.director.runScene(new gameScene());
	},
	btn2Call:function(){
        cc.director.runScene(new gameScene());
	},
    initSubmitBtn:function(){
        var menu1Item = new cc.MenuItemImage(res.submitBtn,res.submitBtn,this.btn1Call,this);
        menu1Item.x = 0;

        var menu2Item = new cc.MenuItemImage(res.backBtn,res.backBtn,this.btn2Call,this);
        menu2Item.x = 250;

        var menu = new cc.Menu(menu1Item, menu2Item);
        menu.x = size.width/2 - 130;
        menu.y = size.height/2 - 380;
        this.addChild(menu);
    }
});

var EditBoxTestLayer = cc.Layer.extend({
    _box1: null,
    _box1: null,
    _box3: null,
    _box4: null,
    _box5: null,
    _boxLength:3,
    ctor: function (len) {
        this._super(len);
        cc.associateWithNative(this, cc.Layer);

        this._boxLength = len;
        this.init();
        this.addEditBox();
    },
    init: function () {
        var editBox_x = 320;
    	this._box1 = new cc.EditBox(cc.size(450, 64), new cc.Scale9Sprite(res.orange_edit));
        this._box1.setPlaceholderFontColor(cc.color(255, 255, 255));
        this._box1.setPlaceHolder("姓名");
        this._box1.x = editBox_x;
        this._box1.setDelegate(this);
        this._box1.setFontColor(cc.color(5, 4, 10));
        this._box1.fontSize = 48;
        this._box1.placeHolderFontSize = 36;
        this._box1.setMaxLength(10);

        this._box2 = new cc.EditBox(cc.size(450, 64), new cc.Scale9Sprite(res.green_edit));
        this._box2.setFontColor(cc.color(125, 125, 125));
        this._box2.setPlaceHolder("手机号码");
        this._box2.x = editBox_x;
        this._box2.setDelegate(this);
        this._box2.fontSize = 48;
        this._box2.placeHolderFontSize = 36;
        this._box2.setMaxLength(11);

        this._box3 = new cc.EditBox(cc.size(450, 64), new cc.Scale9Sprite(res.orange_edit));
        this._box3.setPlaceholderFontColor(cc.color(255, 255, 255));
        this._box3.setPlaceHolder("地址");
        this._box3.x = editBox_x;
        this._box3.setDelegate(this);
        this._box3.setFontColor(cc.color(5, 4, 10));
        this._box3.fontSize = 48;
        this._box3.placeHolderFontSize = 36;

        this._box4 = new cc.EditBox(cc.size(450, 64), new cc.Scale9Sprite(res.orange_edit));
        this._box4.setPlaceholderFontColor(cc.color(255, 255, 255));
        this._box4.setPlaceHolder("选填");
        this._box4.x = editBox_x;
        this._box4.setDelegate(this);
        this._box4.setFontColor(cc.color(5, 4, 10));
        this._box4.fontSize = 48;
        this._box4.placeHolderFontSize = 36;

        this._box5 = new cc.EditBox(cc.size(450, 64), new cc.Scale9Sprite(res.orange_edit));
        this._box5.setPlaceholderFontColor(cc.color(255, 255, 255));
        this._box5.setPlaceHolder("选填");
        this._box5.x = editBox_x;
        this._box5.setDelegate(this);
        this._box5.setFontColor(cc.color(5, 4, 10));
        this._box5.fontSize = 48;
        this._box5.placeHolderFontSize = 36;

        return true;
    },
    addEditBox:function(){
        switch(this._boxLength){
            case 3:{
                this._box1.y = inputArrY[0][0];
                this.addChild(this._box1);

                this._box2.y = inputArrY[0][1];
                this.addChild(this._box2);

                this._box3.y = inputArrY[0][2];
                this.addChild(this._box3);
            };break;
            case 4:{
                this._box1.y = inputArrY[1][0];
                this.addChild(this._box1);

                this._box2.y = inputArrY[1][1];
                this.addChild(this._box2);

                this._box3.y = inputArrY[1][2];
                this.addChild(this._box3);

                this._box4.y = inputArrY[1][3];
                this.addChild(this._box4);
            };break;
            case 5:{
                this._box1.y = inputArrY[2][0];
                this.addChild(this._box1);

                this._box2.y = inputArrY[2][1];
                this.addChild(this._box2);

                this._box3.y = inputArrY[2][2];
                this.addChild(this._box3);

                this._box4.y = inputArrY[2][3];
                this.addChild(this._box4);

                this._box5.y = inputArrY[2][4];
                this.addChild(this._box5);
            };break;
        }
    },
    editBoxEditingDidBegin: function (editBox) {
        // cc.log("editBox " + this._getEditBoxName(editBox) + " DidBegin !");
    },
    editBoxEditingDidEnd: function (editBox, text) {
        // cc.log("editBox " + this._getEditBoxName(editBox) + " DidEnd !");
    },
    editBoxTextChanged: function (editBox, text) {
        // cc.log("editBox " + this._getEditBoxName(editBox) + ", TextChanged, text: " + text);
        if(this._getEditBoxName(editBox) === 'box2'){
            var result = this.checkPhone(text);
            if(result){
                inputFailSprArr[1].visible = false;
            }else{
                inputFailSprArr[1].visible = true;
            }
        }
        if(this._getEditBoxName(editBox) === 'box1'){
            if(text === '' || text === undefined){
                inputFailSprArr[0].visible = true;
            }else{
                inputFailSprArr[0].visible = false
            }
        }
        if(this._getEditBoxName(editBox) === 'box3'){
            if(text === '' || text === undefined){
                inputFailSprArr[2].visible = true;
            }else{
                inputFailSprArr[2].visible = false;
            }
        }
    },
    editBoxReturn: function (editBox) {
        // cc.log("editBox " + this._getEditBoxName(editBox) + " was.... returned !");
    },
    _getEditBoxName :function(editBox){
        if (this._box1 == editBox) {
            return "box1";
        }else if(this._box2 == editBox) {
            return "box2";
        }else if(this._box3 == editBox) {
            return "box3";
        }
        return "Unknown EditBox";
    },
    checkPhone:function(val){
    	var valTemp = parseInt(val);
        var phoneReg = /^[0-9]*[1-9][0-9]*$/;
        if(val.length != 11 || !phoneReg.test(valTemp)){
        	return false;
        }else{
        	return true;
        }
    }
});

// var fieldReg = /(手机号码?|联系电话|电话号码|电话|联系人(手机|电话))/g;
//         if(fieldReg.test(WhichField)){//验证字段为phone否
//             var phoneReg = /^[0-9]*[1-9][0-9]*$/;
//             if (n.length != 11 || !phoneReg.test(n)){
//                 flag = false;
//             }else{
//                 flag = true;
//             }
//         }