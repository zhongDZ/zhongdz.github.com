var GameLayer = cc.Layer.extend({
    TILE_STATE_CLOSED:        0,
    TILE_STATE_CLOSED_FLAG:   1,
    TILE_STATE_EMPTY:         2,
    TILE_STATE_NUMBER:        3,
    TILE_STATE_MINE_EXPLODED: 4,
    TILE_STATE_MINE:          5,
    TILE_STATE_MINE_DEFUSED:  6,
    TILE_STATE_FLAG_WRONG:    7,

    MOUSE:                         0,
    TOUCHSCREEN_LEFT_BUTTON_MODE:  1,
    TOUCHSCREEN_RIGHT_BUTTON_MODE: 2,
    TOUCHSCREEN_BOTH_BUTTONS_MODE: 3,

    _game_started: false,
    _minefield_tiles: null,
    _tiles_total: null,
    _mines_count: null,
    _opened_tiles: null,
    _tile_size: null,
    _columns: null,
    _rows: null,

    _last_tile_coords: null,

    _input_mode: null,
    _selected_mode_button: null,

    _left_button_pressed: false,
    _both_buttons_pressed: false,
    _right_button_pressed: false,

    _timer_label: null,
    _mines_left_label: null,

    _flags: null,
    _opened: null,

    _tile_open_sound_tag: null,

    ctor: function(aIsNewGame) {
        //////////////////////////////
        // 1. super init first
        this._super();

        // ask the window size
        var size = cc.winSize;

        this._opened = [];
        this._flags = [];

        if (!aIsNewGame) {
            aIsNewGame = (helper.sendActionToServer('continue_previous_game').status !== 'OK');
        }

        if (aIsNewGame) {
            localStorage.setItem('_rows', sessionStorage.last_rows_value);
            localStorage.setItem('_columns', sessionStorage.last_columns_value);
            localStorage.setItem('_mines', sessionStorage.last_mines_value);
            this._removeExpiredData();
        } else {
            sessionStorage.last_rows_value = localStorage.getItem('_rows');
            sessionStorage.last_columns_value = localStorage.getItem('_columns');
            sessionStorage.last_mines_value = localStorage.getItem('_mines');
        }

        var newGameButton = helper.addButton({
            layer: this,
            string: "Новая игра",
            y: size.height*0.95,
            preferredSize: cc.size(size.width*0.25, size.height*0.1),
            callback: function() {
                this.parent.addChild(new GameLayer(helper.START_NEW_GAME)); this.removeFromParent();
            }.bind(this)
        });
        newGameButton.setTitleTTFSizeForState(size.height*0.04, cc.CONTROL_STATE_NORMAL);

        var timerSprite = new cc.Sprite();
        timerSprite.initWithFile(images.timer, cc.rect(0, 0, 137, 60));
        timerSprite.setAnchorPoint(cc.p(0.5, 0.5));
        timerSprite.setPosition(cc.p(size.width*0.25, size.height*0.05));
        if (isMobile) {
            timerSprite.setScale(5/8);
        }
        this.addChild(timerSprite);

        this._timer_label = new cc.LabelTTF();
        this._timer_label.setAnchorPoint(cc.p(0.5, 0.5));
        this._timer_label.setPosition(cc.p(size.width*0.27, size.height*0.045));
        this._timer_label.fontName = "Impact";
        this._timer_label.fontSize = size.height*0.045;
        this._timer_label.string = 0;
        this.addChild(this._timer_label);

        var minesLeftSprite = new cc.Sprite();
        minesLeftSprite.initWithFile(images.mines_left, cc.rect(0, 0, 137, 60));
        minesLeftSprite.setAnchorPoint(cc.p(0.5, 0.5));
        minesLeftSprite.setPosition(cc.p(size.width*0.75, size.height*0.05));
        if (isMobile) {
            minesLeftSprite.setScale(5/8);
        }
        this.addChild(minesLeftSprite);

        this._mines_left_label = new cc.LabelTTF();
        this._mines_left_label.setAnchorPoint(cc.p(0.5, 0.5));
        this._mines_left_label.setPosition(cc.p(size.width*0.77, size.height*0.045));
        this._mines_left_label.fontName = "Impact";
        this._mines_left_label.fontSize = size.height*0.045;
        this._mines_left_label.string = +sessionStorage.last_mines_value;
        this.addChild(this._mines_left_label);

        var returnButton = helper.addButton({
            layer: this,
            string: "В меню",
            y: size.height*0.05,
            preferredSize: cc.size(size.width*0.25, size.height*0.1),
            callback: function() { helper.changeSceneTo(MenuScene); }
        });
        returnButton.setTitleTTFSizeForState(size.height*0.04, cc.CONTROL_STATE_NORMAL);

        this._createBlankMineField();

        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playMusic(musics.ingame, true);

        helper.setSoundsStateAndAddButtonsToLayer(this);

        if (!aIsNewGame) {
            var i, opened = JSON.parse(localStorage.getItem('_opened')) || [];
            for (i = 0; i < opened.length; i++) {
                this._changeStateOf(opened[i].point, opened[i].value);
            }

            var flags = JSON.parse(localStorage.getItem('_flags')) || [];
            for (i = 0; i < flags.length; i++) {
                this._addFlagTo(flags[i]);
            }
            this._game_started = true;

            this._startTimer(localStorage.getItem('timer'));
        }

        if (!isMobile) {
            this._input_mode = this.MOUSE;
        } else {
            this._initTouchscreenModeButtons();
        }

        return true;
    },

    _removeExpiredData: function() {
        localStorage.removeItem('_mineField');
        localStorage.removeItem('_safe_tiles_left');

        helper.sendActionToServer('clear_mine_field');

        localStorage.removeItem('_flags');
        localStorage.removeItem('_opened');
        localStorage.removeItem('timer');
    },

    _switchTouchscreenMode: function(aTarget) {
        this._left_button_pressed = this._right_button_pressed = this._both_buttons_pressed = false;

        if (this._selected_mode_button) {
            this._selected_mode_button.setScale(0.7);
            this._selected_mode_button.setColor(cc.color(255, 255, 255));
        }

        aTarget.setScale(1.2);
        aTarget.setColor(cc.color(255, 255, 80));

        this._selected_mode_button = aTarget;
        this._input_mode = aTarget.mode;


        if (aTarget.mode === this.TOUCHSCREEN_BOTH_BUTTONS_MODE) {
            this._right_button_pressed = this._both_buttons_pressed = true;
        }
    },

    _getButton: function(aEvent) {
        switch (this._input_mode) {
        case this.MOUSE: return aEvent.getButton();
        case this.TOUCHSCREEN_RIGHT_BUTTON_MODE: return cc.EventMouse.BUTTON_RIGHT;
        default: return cc.EventMouse.BUTTON_LEFT;
        }
    },

    _initTouchscreenModeButtons: function() {
        var sprite, name, size = cc.winSize;

        var buttons = [
            {
                name: 'left',
                mode: this.TOUCHSCREEN_LEFT_BUTTON_MODE,
                y: 0.73
            },
            {
                name: 'both',
                mode: this.TOUCHSCREEN_BOTH_BUTTONS_MODE,
                y: 0.5
            },
            {
                name: 'right',
                mode: this.TOUCHSCREEN_RIGHT_BUTTON_MODE,
                y: 0.27
            }
        ];

        var params = {
            layer: this,
            x: size.width*0.06,
            preferredSize: cc.size(75, 75),
            custom: true,
            scale: 0.7,
            callback: this._switchTouchscreenMode.bind(this),
            touch_up_outside_callback: function(aTarget) {
                if (aTarget !== this._selected_mode_button) {
                    aTarget.runAction(new cc.ScaleTo(0.3, 0.7));
                }
            }.bind(this)
        };

        for (var i = 0; i < 3; i++) {
            params.y = size.height*buttons[i].y;
            name = buttons[i].name + '_mb_mode_button';
            sprite = cc.Scale9Sprite.create(images[name], cc.rect(0, 0, 120, 120), cc.rect(0, 0, 120, 120));
            this['_' + name] = helper.addButton(params);
            this['_' + name].setBackgroundSpriteForState(sprite, cc.CONTROL_STATE_NORMAL);
            this['_' + name].mode = buttons[i].mode;
        }

        params.callback(this._left_mb_mode_button);
    },


    _createBlankMineField: function() {
        var i,j;
        if (this._minefield_tiles) {
            var old_rows = this._rows,
                old_columns = this._columns;
            for (i = 0; i < old_rows; i++) {
                for (j = 0; j < old_columns; j++) {
                    this._minefield_tiles[i][j].removeFromParent();
                    this._minefield_tiles[i][j] = null;
                }
                this._minefield_tiles[i] = null;
            }
            this._minefield_tiles = this._rows = this._columns = null;
        }

        var tile, row,
            rows = sessionStorage.last_rows_value,
            columns = sessionStorage.last_columns_value,
            size = cc.winSize,
            tile_size = Math.min(size.width*0.8/columns, size.height*0.8/rows),
            margin_x = (size.width  - tile_size*columns)/2,
            margin_y = (size.height + tile_size*rows)/2;
        this._minefield_tiles = [];
        this._tiles_total = rows*columns;
        this._columns = columns;
        this._mines_count = sessionStorage.last_mines_value;
        this._rows = rows;
        this._tile_size = tile_size;

        for (i = 0; i < rows; i++) {
            row = [];
            for (j = 0; j < columns; j++) {
                tile = helper.addTileToLayer(this);

                tile.state = this.TILE_STATE_CLOSED;
                tile.setScale(tile_size/helper.rect.width, tile_size/helper.rect.width);
                tile.setPosition(cc.p(margin_x + (j + 0.5)*tile_size, margin_y - (i + 0.5)*tile_size));
                row.push(tile);
            }
            this._minefield_tiles.push(row);
        }

        helper.addMouseActionsTo(
            this,
            this._mineFieldOnMouseDownCallback.bind(this),
            this._mineFieldOnMouseMoveCallback.bind(this),
            this._mineFieldOnMouseUpCallback.bind(this)
        );
    },

    _mineFieldOnMouseDownCallback: function(aEvent) {
        var button = this._getButton(aEvent);
        if (button === cc.EventMouse.BUTTON_LEFT) {
            this._left_button_pressed = true;
        } else if (button === cc.EventMouse.BUTTON_RIGHT) {
            this._right_button_pressed = true;
        }
        if (this._left_button_pressed && this._right_button_pressed) {
            this._both_buttons_pressed = true;
        }

        var coords = this._getTileXYUnderMouse(aEvent),
            tile = this._getTileAt(coords);
        if (!tile) {
            return true;
        }
        if (!this._both_buttons_pressed) {
            if (button === cc.EventMouse.BUTTON_LEFT) {
                if (tile.state === this.TILE_STATE_CLOSED) {
                    tile.initWithFile(images.tile_pressed, helper.rect);
                }
            } else if (button === cc.EventMouse.BUTTON_RIGHT) {
                if (tile.state === this.TILE_STATE_CLOSED) {
                    this._addFlagTo(coords);
                    tile.initWithFile(images.tile_closed_flag_highlighted, helper.rect);
                } else if (tile.state === this.TILE_STATE_CLOSED_FLAG) {
                    this._removeFlagFrom(coords);
                    tile.initWithFile(images.tile_closed_highlighted, helper.rect);
                }
            }
        } else {
            this._last_tile_coords = coords;
            this._set9TilesToPressed();
        }
        return true;
    },

    _mineFieldOnMouseMoveCallback: function(aEvent) {
        var new_res, coords = this._getTileXYUnderMouse(aEvent),
            tile = this._getTileAt(coords);
        this._setLast9TilesToNormal();
        this._last_tile_coords = coords;
        if (this._last_tile_coords) {
            if (!this._both_buttons_pressed) {
                switch (tile.state) {
                case this.TILE_STATE_CLOSED: new_res = this._left_button_pressed ? images.tile_pressed : images.tile_closed_highlighted; break;
                case this.TILE_STATE_CLOSED_FLAG: new_res = images.tile_closed_flag_highlighted; break;
                }
                if (new_res) {
                    tile.initWithFile(new_res, helper.rect);
                }
            } else {
                this._set9TilesToPressed();
            }
        }
    },

    _mineFieldOnMouseUpCallback: function(aEvent) {
        var coords = this._getTileXYUnderMouse(aEvent),
            tile = this._getTileAt(coords),
            button = this._getButton(aEvent);
        if (button === cc.EventMouse.BUTTON_LEFT) {
            this._left_button_pressed = false;
            if (this._both_buttons_pressed) {
                this._both_buttons_pressed = false;
                this._setLast9TilesToNormal();
                this._callBothButtonsSpecialActionAt(coords);
            } else if (tile && tile.state === this.TILE_STATE_CLOSED) {
                if (!this._game_started) {
                    this._game_started = true;
                    this._setMineFieldStateWithStartPoint(coords);
                }
                this._changeStateOf(coords);
            }
        } else if (button === cc.EventMouse.BUTTON_RIGHT) {
            this._right_button_pressed = false;
            if (tile) {
                switch (tile.state) {
                case this.TILE_STATE_CLOSED: tile.initWithFile(images.tile_closed, helper.rect); break;
                case this.TILE_STATE_CLOSED_FLAG: tile.initWithFile(images.tile_closed_flag, helper.rect); break;
                }
            }
        }
    },

    _setMineFieldStateWithStartPoint: function(aPoint) {
        server.processAction({
            action: 'create_mine_field',
            login: sessionStorage.login,
            password: sessionStorage.password,
            columns: this._columns,
            rows: this._rows,
            maxMines: this._mines_count,
            x: aPoint.x,
            y: aPoint.y
        });

        this._opened_tiles = 0;

        this._startTimer();
    },

    _getTileXYUnderMouse: function(aEvent) {
        var size = cc.winSize,
            margin_x = (size.width  - this._tile_size*this._columns)/2,
            margin_y = (size.height - this._tile_size*this._rows)/2,
            loc = aEvent.getLocation();
            if (margin_x < loc.x && loc.x < size.width  - margin_x &&
                margin_y < loc.y && loc.y < size.height - margin_y) {
                var x = Math.floor((loc.x - margin_x)/(size.width - 2*margin_x)*this._columns),
                    y = this._rows - 1 - Math.floor((loc.y - margin_y)/(size.height - 2*margin_y)*this._rows);
                return cc.p(x, y);
            }
        return null;
    },

    _getTileAt: function(aPoint) {
        return aPoint &&
               this._minefield_tiles[aPoint.y] !== undefined &&
               this._minefield_tiles[aPoint.y][aPoint.x] !== undefined &&
               this._minefield_tiles[aPoint.y][aPoint.x] ||
               null;
    },

    _changeStateOf: function(aPoint, aValueFromPreviousGame) {
        var sprite, state,
            responseRaw, response, value;
        if (aValueFromPreviousGame !== undefined) {
            value = aValueFromPreviousGame;
        } else {
            responseRaw = server.processAction({
                action: 'ask_value_of_tile',
                login: sessionStorage.login,
                password: sessionStorage.password,
                x: aPoint.x,
                y: aPoint.y
            });
            response = JSON.parse(responseRaw);
            value = response.status === 'OK' && response.value;
        }

        this._opened.push({point:aPoint, value:value});
        localStorage.setItem('_opened', JSON.stringify(this._opened));

        switch(value) {
        case '*': {
            sprite = images.tile_mine_exploded;
            state = this.TILE_STATE_MINE_EXPLODED;
            break;
        }
        case   0: {
            sprite = images.tile_empty;
            state = this.TILE_STATE_EMPTY;
            this._opened_tiles++;
            break;
        }
        default : {
            sprite = images['tile_' + value];
            state = this.TILE_STATE_NUMBER;
            this._opened_tiles++;
            break;
        }}

        var tile = this._getTileAt(aPoint);
        tile.state = state;
        tile.value = value;
        tile.initWithFile(sprite, helper.rect);

        if (aValueFromPreviousGame !== undefined) {
            return;
        }

        if (state === this.TILE_STATE_EMPTY) {
            this.scheduleOnce(function() {
                if (this._tile_open_sound_tag) {
                    cc.audioEngine.stopEffect(this._tile_open_sound_tag);
                    this._tile_open_sound_tag = null;
                }
                this._tile_open_sound_tag = cc.audioEngine.playEffect(sounds.empty_tile_opened);
                this._changeStateOfSurroundingsOf(aPoint);
            }, 0.1);
        } else if (state === this.TILE_STATE_MINE_EXPLODED) {
            this._runFailActions(); return;
        }
        if (this._opened_tiles === this._tiles_total - this._mines_count) {
            this._runWinActions();
        }
    },

    _changeStateOfSurroundingsOf: function(aPoint) {
        var point, tile;
        for (var i = 0; i < 8; i++) {
            point = cc.p(
                aPoint.x + helper.deltas8[i][0],
                aPoint.y + helper.deltas8[i][1]
            );
            tile = this._getTileAt(point);
            if (tile && tile.state === this.TILE_STATE_CLOSED) {
                this._changeStateOf(point);
            }
        }
    },

    _addFlagTo: function(aPoint) {
        this._mines_left_label.string--;
        var tile = this._getTileAt(aPoint);
        tile.state = this.TILE_STATE_CLOSED_FLAG;
        tile.initWithFile(images.tile_closed_flag, helper.rect);

        this._flags.push(aPoint);
        localStorage.setItem('_flags', JSON.stringify(this._flags));
    },

    _removeFlagFrom: function(aPoint) {
        this._mines_left_label.string++;
        var tile = this._getTileAt(aPoint);
        tile.state = this.TILE_STATE_CLOSED;
        tile.initWithFile(images.tile_closed, helper.rect);

        var index = 0;
        while (this._flags[index].x !== aPoint.x && this._flags[index].y !== aPoint.y) {
            index++;
        }

        var tmp = this._flags;
        this._flags = tmp.slice(0, index).concat(tmp.slice(index + 1));
        localStorage.setItem('_flags', JSON.stringify(this._flags));
    },

    _startTimer: function(aFrom) {
        if (aFrom) {
            this._timer_label.string = aFrom;
        }
        this._timer_label.schedule(function() {
            this.string++;
            localStorage.setItem('timer', this.string);
        }, 1);
    },

    _set9TilesToPressed: function() {
        for (var i = 0; i < 9; i++) {
            var tile = this._getTileAt(cc.p(this._last_tile_coords.x + helper.deltas9[i][0], this._last_tile_coords.y + helper.deltas9[i][1]));
            if (tile && tile.state === this.TILE_STATE_CLOSED) {
                tile.initWithFile(images.tile_pressed, helper.rect);
            }
        }
    },

    _setLast9TilesToNormal: function() {
        if (this._last_tile_coords) {
            for (var i = 0; i < 9; i++) {
                tile = this._getTileAt(cc.p(this._last_tile_coords.x + helper.deltas9[i][0], this._last_tile_coords.y + helper.deltas9[i][1]));
                if (tile && tile.state === this.TILE_STATE_CLOSED) {
                    tile.initWithFile(images.tile_closed, helper.rect);
                } else if (tile && tile.state === this.TILE_STATE_CLOSED_FLAG) {
                    tile.initWithFile(images.tile_closed_flag, helper.rect);
                }
            }
        }
    },

    _setXOnTile: function(aTile, aX) {
        aTile.initWithFile(images['tile_' + aTile.value + (aX ? 'x' : '')], helper.rect);
    },

    _callBothButtonsSpecialActionAt: function(aCoords) {
        var tile = this._getTileAt(aCoords);
        if (tile && tile.state === this.TILE_STATE_NUMBER) {
            var mines_expected = tile.value,
                closed_count = 0,
                flags_count = 0,
                states = [],
                ps = [],
                tile_delta,
                p, i;
            for (i = 0; i < 8; i++) {
                p = cc.p(aCoords.x + helper.deltas8[i][0], aCoords.y + helper.deltas8[i][1]);
                ps.push(p);
                tile_delta = this._getTileAt(p);
                states.push(tile_delta && tile_delta.state);
                switch(states[i]) {
                case this.TILE_STATE_CLOSED_FLAG: flags_count++;  break;
                case this.TILE_STATE_CLOSED     : closed_count++; break;
                }
            }
            if (mines_expected === flags_count) {
                for (i = 0; i < 8; i++) {
                    if (states[i] === this.TILE_STATE_CLOSED) {
                        this._changeStateOf(ps[i]);
                    }
                }
            } else if (mines_expected === flags_count + closed_count) {
                for (i = 0; i < 8; i++) {
                    if (states[i] === this.TILE_STATE_CLOSED) {
                        this._addFlagTo(ps[i]);
                    }
                }
            } else {
                cc.audioEngine.stopAllEffects();
                cc.audioEngine.playEffect(sounds.both_buttons_pressed_mode_fail);

                for (i = 0; i < 4; i++) {
                    this.scheduleOnce(this._setXOnTile.bind(this, tile, i%2 === 0), i*0.25);
                }
            }
        }
    },

    _updateStatistics: function(aMinesDefused, aWin) {
        sessionStorage.games             = helper.sendActionWithDataToServer('increase_value', 'games', 1).value;
        sessionStorage.total_time_played = helper.sendActionWithDataToServer('increase_value', 'total_time_played', +this._timer_label.string).value;
        if (aMinesDefused) {
            sessionStorage.mines_defused = helper.sendActionWithDataToServer('increase_value', 'mines_defused', +aMinesDefused).value;
        }
        if (aWin) {
            sessionStorage.wins          = helper.sendActionWithDataToServer('increase_value', 'wins', 1).value;
        }
    },

    _runWinActions: function() {
        for (var i = 0; i < this._rows; i++) {
            for (var j = 0; j < this._columns; j++) {
                if (this._getTileAt(cc.p(j, i)).state === this.TILE_STATE_CLOSED) {
                    this._addFlagTo(cc.p(j, i));
                }
            }
        }
        cc.eventManager.removeListeners(this, false);
        this._timer_label.unscheduleAllCallbacks();
        cc.audioEngine.stopMusic();
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.playEffect(sounds.victory);

        this._updateStatistics(this._mines_count, true);

        this._removeExpiredData();
    },

    _runFailActions: function() {
        var i, j, tile, defused = 0,
            mines_coords = helper.sendActionToServer('get_all_mines').value;
        for (i = 0; i < mines_coords.length; i++) {
            tile = this._getTileAt(mines_coords[i]);
            if (tile.state === this.TILE_STATE_CLOSED_FLAG) {
                defused++;
                tile.state = this.TILE_STATE_MINE_DEFUSED;
                tile.initWithFile(images.tile_mine_defused, helper.rect);
            } else if (tile.state === this.TILE_STATE_CLOSED) {
                tile.state = this.TILE_STATE_MINE;
                tile.initWithFile(images.tile_mine, helper.rect);
            }
        }
        for (i = 0; i < this._rows; i++) {
            for (j = 0; j < this._columns; j++) {
                tile = this._getTileAt(cc.p(j, i));
                if (tile.state === this.TILE_STATE_CLOSED_FLAG) {
                    tile.state = this.TILE_STATE_FLAG_WRONG;
                    tile.initWithFile(images.tile_closed_flag_wrong, helper.rect);
                }
            }
        }

        cc.eventManager.removeListeners(this, false);
        this._timer_label.unscheduleAllCallbacks();

        cc.audioEngine.stopMusic();
        cc.audioEngine.playEffect(sounds.game_over);

        this._updateStatistics(defused);

        this._removeExpiredData();
    }
});

var GameScene = cc.Scene.extend({
    _is_new_game: null,
    ctor: function(isNewGame) {
        this._super();
        this._is_new_game = isNewGame;
    },
    onEnter: function() {
        this._super();
        layer = new GameLayer(this._is_new_game);
        helper.AddTryCatchersToAllMethodsOf(layer);
        this.addChild(layer);
    }
});
