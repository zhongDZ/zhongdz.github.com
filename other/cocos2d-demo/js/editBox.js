var EditBoxTestLayer = cc.Layer.extend({
    _box1: null,
    _box2: null,
    _box3: null,
    _box4: null,

    ctor: function () {
        this._super();
        cc.associateWithNative(this, cc.Layer);
        this.init();
    },

    init: function () {
        this._box1 = new cc.EditBox(cc.size(250, 80), new cc.Scale9Sprite(res.green_edit), new cc.Scale9Sprite(res.orange_edit));
        this._box1.setString("EditBoxs");
        this._box1.x = winSize.width/2;
        this._box1.y = winSize.height - 180;
        this._box1.setFontColor(cc.color(251, 250, 0));
        this._box1.fontSize = 48;
        this._box1.setDelegate(this);
        this.addChild(this._box1);

        this._box2 = new cc.EditBox(cc.size(180, 50), new cc.Scale9Sprite(res.green_edit));
        this._box2.setString("EditBox Sample");
        this._box2.x = winSize.width/2;;
        this._box2.y = winSize.height - 300;
        this._box2.setInputFlag(cc.EDITBOX_INPUT_FLAG_PASSWORD);
        this._box2.setFontColor(cc.color(255, 250, 0));
        this._box2.fontSize = 48;
        this._box2.setPlaceHolder("please enter password");
        this._box2.setPlaceholderFontColor(cc.color(255, 255, 255));
        this._box2.setDelegate(this);
        this.addChild(this._box2);

        this._box3 = new cc.EditBox(cc.size(65, 50), new cc.Scale9Sprite(res.orange_edit));
        this._box3.setString("Image");
        this._box3.x = winSize.width/2;;
        this._box3.y = winSize.height - 400;
        this._box3.setFontColor(cc.color(15, 250, 245));
        this._box3.setDelegate(this);
        this.addChild(this._box3);

        this._box4 = new cc.EditBox(cc.size(180, 50), new cc.Scale9Sprite(res.orange_edit));
        this._box4.setPlaceholderFontColor(cc.color(255, 0, 0));
        this._box4.setPlaceHolder("Tooltip:");
        this._box4.x = 100;;
        this._box4.y = -350;
        this._box4.setDelegate(this);
        this._box4.setFontColor(cc.color(5, 4, 10));
        this._box4.setMaxLength(10);
        this._box3.addChild(this._box4);

        return true;
    },

    editBoxEditingDidBegin: function (editBox) {
        cc.log("editBox " + this._getEditBoxName(editBox) + " DidBegin !");
    },

    editBoxEditingDidEnd: function (editBox) {
        cc.log("editBox " + this._getEditBoxName(editBox) + " DidEnd !");
    },

    editBoxTextChanged: function (editBox, text) {
        cc.log("editBox " + this._getEditBoxName(editBox) + ", TextChanged, text: " + text);
    },

    editBoxReturn: function (editBox) {
        cc.log("editBox " + this._getEditBoxName(editBox) + " was.... returned !");
    },

    _getEditBoxName :function(editBox){
        if (this._box1 == editBox) {
            return "box1";
        }
        return "Unknown EditBox";
    }
});