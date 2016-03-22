var BackgroundLayer = cc.LayerColor.extend({
    ctor: function(aColor) {
        //////////////////////////////
        // 1. super init first
        this._super();

        this.setColor(aColor);

        // ask the window size
        var size = cc.winSize;

        var background_menu_mine = new cc.Sprite(images.background_menu_mine);
        background_menu_mine.setAnchorPoint(cc.p(0.5, 0.5));
        background_menu_mine.setPosition(cc.p(size.width/2, size.height/2));
        this.addChild(background_menu_mine, 0);

        if (isMobile) {
            background_menu_mine.setScale(5/8);
        }
        var infinite_rotate = new cc.RepeatForever(cc.RotateBy.create(60, 360));
        background_menu_mine.runAction(infinite_rotate);

        helper.addUITextToLayer(this, '工程师',        size.height*0.25, size.height*0.8);

        helper.addUITextToLayer(this, '2015 © zeird', size.height*0.03, size.height*0.02);

        helper.setSoundsStateAndAddButtonsToLayer(this);

        return true;
    }
});

var LoginLayer = cc.Layer.extend({
    _login: '',
    _password: '',
    _errorUIText: null,

    SHOW_HIDE_ACTION: new cc.Sequence(new cc.FadeIn(1), new cc.FadeOut(1)),

    ctor: function() {
        //////////////////////////////
        // 1. super init first
        this._super();

        cc.audioEngine.stopAllEffects();
        cc.audioEngine.stopMusic();

        // ask the window size
        var size = cc.winSize;
        console.log(size)

        var loginLayerEditBoxDelegate = new cc.EditBoxDelegate();
        loginLayerEditBoxDelegate.editBoxTextChanged = function() {
            this._login = loginEditBox.string;
            this._password = passwordEditBox.string;
            if (this._login && this._password) {
                if (!enterButton.enabled) {
                    enterButton.setEnabled(true);
                }
            } else {
                if (enterButton.enabled) {
                    enterButton.setEnabled(false);
                }
            }
        }.bind(this);
        loginLayerEditBoxDelegate.editBoxReturn = function() {
            if (this._login && this._password) {
                this._doLogin();
            }
        }.bind(this);

        helper.addUITextToLayer(this, '注册:',  size.height*0.06, size.height*0.65);

        var loginEditBox = helper.addEditBoxFixedToLayer(this, size.width*0.3, cc.p(size.width*0.5, size.height*0.57), loginLayerEditBoxDelegate);
        loginEditBox.placeHolder = '注册';

        helper.addUITextToLayer(this, '密码:', size.height*0.06, size.height*0.45);

        var passwordEditBox = helper.addEditBoxFixedToLayer(this, size.width*0.3, cc.p(size.width*0.5, size.height*0.37), loginLayerEditBoxDelegate);
        passwordEditBox.setInputFlag(cc.EDITBOX_INPUT_FLAG_PASSWORD);
        passwordEditBox.placeHolder = '密码';

        var enterButton = helper.addButton({
            layer: this,
            string: '登录/创建',
            y: size.height*0.25,
            preferredSize: cc.size(size.width*0.3, size.height*0.13),
            disabled: true,
            callback: this._doLogin.bind(this)
        });

        this._errorUIText = helper.addUITextToLayer(this, '',  size.height*0.06, size.height*0.1);
        this._errorUIText.setColor(cc.color(225, 0, 0));
        this._errorUIText.setOpacity(0);

        cc.audioEngine.playEffect(sounds.login_page);

        return true;
    },

    _doLogin: function() {
        var responseRaw = server.processAction({
            action: 'login',
            login: this._login,
            password: this._password
        });
        var response = JSON.parse(responseRaw);
        if (response.status === 'error') {
            this._showError(response.error);
        } else if (response.status === 'OK') {
            for (var key in response.player) {
                sessionStorage[key] = response.player[key];
            }
            this.parent.addChild(new MenuLayer());
            this.removeFromParent();
        }
    },

    _showError: function(aErrorText) {
        this._errorUIText.string = aErrorText;
        this._errorUIText.stopAllActions();
        this._errorUIText.runAction(this.SHOW_HIDE_ACTION);
    }
});

var OptionsLayer = cc.Layer.extend({
    _columns_edit_box: null,
    _rows_edit_box: null,
    _mines_edit_box: null,

    ctor: function() {
        //////////////////////////////
        // 1. super init first
        this._super();

        // ask the window size
        var input, size = cc.winSize;

        var optionsLayerEditBoxDelegate = new cc.EditBoxDelegate();
        optionsLayerEditBoxDelegate.editBoxTextChanged = function() {
            if (this._checkIfSettingsAreValid()) {
                if (!saveButton.enabled) {
                    saveButton.enabled = true;
                }
            } else if (saveButton.enabled) {
                saveButton.enabled = false;
            }
        }.bind(this);
        optionsLayerEditBoxDelegate.editBoxReturn = function() {
            if (this._checkIfSettingsAreValid()) {
                this._saveSettingsAndGoBackToMenu();
            }
        }.bind(this);

        var columnsUIText = helper.addUITextToLayer(this, '列:',  size.height*0.06, size.height*0.57);
        columnsUIText.setPositionX(size.width*0.12);

        azaza = this._columns_edit_box = helper.addEditBoxFixedToLayer(this, size.width*(false ? 0.08 : 0.06), cc.p(size.width*0.24, size.height*0.575), optionsLayerEditBoxDelegate);
        this._columns_edit_box.placeHolder = this._columns_edit_box.string = +sessionStorage.last_columns_value;
        input = this._columns_edit_box._edTxt;
        input.type = "number";
        input.min = helper.COLUMNS_MIN;
        input.max = helper.COLUMNS_MAX;

        var rowsUIText = helper.addUITextToLayer(this, '线:', size.height*0.06, size.height*0.57);
        rowsUIText.setPositionX(size.width*0.45);

        this._rows_edit_box = helper.addEditBoxFixedToLayer(this, size.width*(false ? 0.08 : 0.06), cc.p(size.width*0.55, size.height*0.575), optionsLayerEditBoxDelegate);
        this._rows_edit_box.placeHolder = this._rows_edit_box.string = +sessionStorage.last_rows_value;
        input = this._rows_edit_box._edTxt;
        input.type = "number";
        input.min = helper.ROWS_MIN;
        input.max = helper.ROWS_MAX;

        var minesUIText = helper.addUITextToLayer(this, '分:', size.height*0.06, size.height*0.57);
        minesUIText.setPositionX(size.width*0.8);

        this._mines_edit_box = helper.addEditBoxFixedToLayer(this, size.width*(false ? 0.095 : 0.072), cc.p(size.width*0.9, size.height*0.575), optionsLayerEditBoxDelegate);
        this._mines_edit_box.placeHolder = this._mines_edit_box.string = +sessionStorage.last_mines_value;
        input = this._mines_edit_box._edTxt;
        input.type = "number";
        input.min = helper.MINES_MIN;
        input.max = helper.MINES_MAX;

        var saveButton = helper.addButton({
            layer: this,
            string: '保留',
            y: size.height*0.4,
            callback: this._saveSettingsAndGoBackToMenu.bind(this)
        });

        helper.addButton({
            layer: this,
            string: '消除',
            y: size.height*0.25,
            callback: function() {
                this._changeLayer(MenuLayer);
            }.bind(this)
        });

        return true;
    },

    _checkIfSettingsAreValid: function() {
        var columns = this._columns_edit_box.string,
            rows    = this._rows_edit_box.string,
            mines   = this._mines_edit_box.string;
        if (!isNaN(columns) && +columns >= helper.COLUMNS_MIN && +columns <= helper.COLUMNS_MAX &&
            !isNaN(rows)    && +rows    >= helper.ROWS_MIN    && +rows    <= helper.ROWS_MAX &&
            !isNaN(mines)   && +mines   >= helper.MINES_MIN   && +mines   <= +this._columns_edit_box.string*+this._rows_edit_box.string - 9) { // 9 start empty tiles.
            return true;
        } else {
            return false;
        }
    },

    _saveSettingsAndGoBackToMenu: function() {
        var storedName, names = ['columns', 'rows', 'mines'];
        for (var i = 0; i < names.length; i++) {
            storedName = 'last_' + names[i] + '_value';
            sessionStorage[storedName] = +this['_' + names[i] + '_edit_box'].string;
            helper.sendActionWithDataToServer('update_value', storedName, sessionStorage[storedName]);
        }

        this._changeLayer(MenuLayer);
    },

    _changeLayer: function(aLayer) {
        this.parent.addChild(new aLayer());
        this.removeFromParent();
    }
});

var StatisticsLayer = cc.Layer.extend({
    ctor: function() {
        //////////////////////////////
        // 1. super init first
        this._super();

        // ask the window size
        var size = cc.winSize;

        helper.addUITextToLayer(this, '比赛场次: ' + sessionStorage.games, size.height*0.06, size.height*0.57, size.width*0.25);

        helper.addUITextToLayer(this, '场赢了: ' + sessionStorage.wins, size.height*0.06, size.height*0.47, size.width*0.25);

        helper.addUITextToLayer(this, '关注比例: ' + Math.floor(+sessionStorage.wins/(+sessionStorage.games || 1)*100) + '%' , size.height*0.06, size.height*0.37, size.width*0.25);

        helper.addUITextToLayer(this, '分观察: ' + sessionStorage.mines_defused, size.height*0.06, size.height*0.57, size.width*0.75);

        helper.addUITextToLayer(this, '时间已经过去: ' + sessionStorage.total_time_played, size.height*0.06, size.height*0.47, size.width*0.75);

        helper.addUITextToLayer(this, '敏敏: ' + Math.floor(+sessionStorage.mines_defused/(+sessionStorage.total_time_played || 1)*60), size.height*0.06, size.height*0.37, size.width*0.75);

        var backButton = helper.addButton({
            layer: this,
            string: '前',
            y: size.height*0.25,
            callback: this._changeLayer.bind(this, MenuLayer)
        });

        return true;
    },
    _changeLayer: function(aLayer) {
        this.parent.addChild(new aLayer());
        this.removeFromParent();
    }
});

var MenuLayer = cc.Layer.extend({
    ctor: function() {
        //////////////////////////////
        // 1. super init first
        this._super();

        // ask the window size
        var size = cc.winSize;

        helper.setVolume(helper.soundButton, 'sound');
        helper.setVolume(helper.musicButton, 'music');

        newGame = helper.addButton({
            layer: this,
            string: '新游戏',
            x: localStorage.getItem('_mineField') ? size.width*0.37 : undefined,
            y: size.height*0.55,
            callback: helper.changeSceneTo.bind(null, GameScene, helper.START_NEW_GAME)
        });
        if (localStorage.getItem('_mineField')) {
            helper.addButton({
                layer: this,
                string: '继续',
                x: size.width*0.63,
                y: size.height*0.55,
                callback: helper.changeSceneTo.bind(null, GameScene, helper.CONTINUE_PREVIOUS_GAME)
            });
        }

        helper.addButton({
            layer: this,
            string: '设置',
            x: size.width*0.37,
            y: size.height*0.4,
            callback: this._changeLayer.bind(this, OptionsLayer)
        });

        helper.addButton({
            layer: this,
            string: '统计',
            x: size.width*0.63,
            y: size.height*0.4,
            callback: this._changeLayer.bind(this, StatisticsLayer)
        });

        helper.addButton({
            layer: this,
            string: '出口',
            y: size.height*0.25,
            callback: function() {
                sessionStorage.clear();
                this._changeLayer.call(this, LoginLayer);
            }.bind(this)
        });

        if (!cc.audioEngine.isMusicPlaying()) {
            cc.audioEngine.playMusic(musics.menu, true);
        }

        return true;
    },

    _changeLayer: function(aLayer) {
        this.parent.addChild(new aLayer());
        this.removeFromParent();
    }
});

var MenuScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        var layer, isLoggedIn = sessionStorage.login && sessionStorage.password;

        layer = new BackgroundLayer(cc.color(32, 32, 32));
        helper.AddTryCatchersToAllMethodsOf(layer);
        this.addChild(layer);

        layer = !isLoggedIn ? new LoginLayer() : new MenuLayer();
        helper.AddTryCatchersToAllMethodsOf(layer);
        this.addChild(layer);
    }
});
