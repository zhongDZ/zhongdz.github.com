var helper = {
    COLUMNS_MIN: 9,
    COLUMNS_MAX: 50,
    ROWS_MIN: 9,
    ROWS_MAX: 50,
    MINES_MIN: 1,
    MINES_MAX: 999,

    rect: cc.rect(0, 0, 110, 110), // Rect of tile resources.

    deltas8: [
        [-1, -1],  [0, -1], [+1, -1],
        [-1,  0],/*[x,  y]*/[+1,  0],
        [-1, +1],  [0, +1], [+1, +1]
    ],
    deltas9: [
        [-1, -1],  [0, -1], [+1, -1],
        [-1,  0],  [0,  0], [+1,  0],
        [-1, +1],  [0, +1], [+1, +1]
    ],

    CONTINUE_PREVIOUS_GAME: false,
    START_NEW_GAME: true,

    soundButton: null,
    musicButton: null,

    createS9TileFromRes: function(aRes) {
        return cc.Scale9Sprite.create(aRes, cc.rect(0, 0, 110, 110), isMobile ? cc.rect(15, 15, 80, 80) : cc.rect(25, 25, 65, 65));
    },

    createUIText: function(aString, aFontSize) {
        var t = new ccui.Text();
        t.attr({
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            string: aString,
            fontName: 'Impact',
            fontSize: aFontSize
        });
        t.enableOutline(cc.color(0, 0, 0), aFontSize*0.15);

        return t;
    },

    addButton: function(aParams) {
        var size = cc.winSize;

        var b = new cc.ControlButton();

        if (!aParams.custom) {
            b.setBackgroundSpriteForState(helper.createS9TileFromRes(images.button_normal),      cc.CONTROL_STATE_NORMAL);
            b.setBackgroundSpriteForState(helper.createS9TileFromRes(images.button_highlighted), cc.CONTROL_STATE_HIGHLIGHTED);
            b.setBackgroundSpriteForState(helper.createS9TileFromRes(images.button_disabled),    cc.CONTROL_STATE_DISABLED);
        }
        b.setPreferredSize(aParams.preferredSize || cc.size(size.width*0.25, size.height*0.13));
        b.setAnchorPoint(cc.p(0.5, 0.5));
        b.setPosition(cc.p(aParams.x || size.width*0.5, aParams.y));
        b.setScale(aParams.scale || 1);

        b.addTargetWithActionForControlEvents(b, aParams.callback, cc.CONTROL_EVENT_TOUCH_UP_INSIDE);
        if (aParams.touch_up_outside_callback) {
            b.addTargetWithActionForControlEvents(b, aParams.touch_up_outside_callback, cc.CONTROL_EVENT_TOUCH_UP_OUTSIDE);
        }

        if (aParams.string) {
            b.setTitleForState(aParams.string, cc.CONTROL_STATE_NORMAL);
            b.setTitleTTFForState('Impact', cc.CONTROL_STATE_NORMAL);
            b.setTitleTTFSizeForState(size.height*0.07, cc.CONTROL_STATE_NORMAL);
            b.setTitleColorForState(cc.color(170,170,170), cc.CONTROL_STATE_DISABLED);
        }
        if (aParams.disabled) {
            b.setEnabled(false);
        }

        aParams.layer.addChild(b);

        return b;
    },

    addEditBoxFixedToLayer: function(aLayer, aWidth, aPosition, aDelegateEl) {
        var size = cc.winSize;

        var eb = new cc.EditBoxFixed(cc.size(aWidth, size.height*0.1), helper.createS9TileFromRes(images.editbox));
        eb.setAdjustBackgroundImage(false);
        eb.fontName = eb.placeHolderFontName = 'Impact';
        eb.fontSize = eb.placeHolderFontSize = size.height*0.04;
        eb.color = cc.color(125,124,124)
        eb.setPosition(aPosition);
        eb.setAnchorPoint(cc.p(0.5, 0.5));
        eb.setDelegate(aDelegateEl);

        aLayer.addChild(eb);

        return eb;
    },

    addTileToLayer: function(aLayer) {
        var b = new cc.Sprite();
        b.initWithFile(images.tile_closed, helper.rect);
        b.setAnchorPoint(cc.p(0.5, 0.5));
        aLayer.addChild(b);

        return b;
    },

    addUITextToLayer: function(aLayer, aString, aFontSize, aY, aX) {
        var t = helper.createUIText(aString, aFontSize);
        t.setPosition(cc.p(aX || cc.winSize.width*0.5, aY));

        aLayer.addChild(t);

        return t;
    },

    addMouseActionsTo: function(aNode, aMouseDownCallback, aMouseMoveCallback, aMouseUpCallback) {
        var l = cc.EventListener.create({
            event: isMobile ? cc.EventListener.TOUCH_ONE_BY_ONE : cc.EventListener.MOUSE,
            onMouseDown:  aMouseDownCallback,
            onTouchBegan: aMouseDownCallback,

            onMouseMove:  aMouseMoveCallback,
            onTouchMoved: aMouseMoveCallback,

            onMouseUp:        aMouseUpCallback,
            onTouchEnded:     aMouseUpCallback,
            onTouchCancelled: aMouseUpCallback
        });

        cc.eventManager.addListener(l, aNode);
    },

    setSoundsStateAndAddButtonsToLayer: function(aLayer) {
        var size = cc.winSize,
            buttonSize = isMobile ? cc.size(75, 75) : cc.size(120, 120);

        helper.soundButton = helper.addButton({
            layer: aLayer,
            x: size.width*0.94,
            y: size.height*0.9,
            preferredSize: buttonSize,
            custom: true,
            callback: function(aTarget) {
                helper.setVolume(aTarget, 'sound', true);
            }
        });
        helper.setVolume(helper.soundButton, 'sound');

        helper.musicButton = helper.addButton({
            layer: aLayer,
            x: size.width*0.94,
            y: size.height*0.73,
            preferredSize: buttonSize,
            custom: true,
            callback: function(aTarget) {
                helper.setVolume(aTarget, 'music', true);
            }
        });
        helper.setVolume(helper.musicButton, 'music');
    },

    setVolume: function(aTarget, aName, aSwitch) {
        if (aSwitch) {
            sessionStorage[aName + '_enabled'] = (sessionStorage[aName + '_enabled'] === 'false') ? 'true' : 'false';
            if (sessionStorage.login && sessionStorage.password) {
                helper.sendActionWithDataToServer('update_value', aName + '_enabled', sessionStorage[aName + '_enabled']);
            }
        }
        var isDisabled = sessionStorage[aName + '_enabled'] === 'false';
        if (aName === 'sound') {
            cc.audioEngine.setEffectsVolume(isDisabled ? 0 : 0.5);
        } else {
            cc.audioEngine.setMusicVolume(isDisabled ? 0 : 0.25);
        }
        aTarget.setBackgroundSpriteForState(cc.Scale9Sprite.create(images[aName + (isDisabled ? '_disabled' : '')], cc.rect(0, 0, 120, 120), cc.rect(0, 0, 120, 120)), cc.CONTROL_STATE_NORMAL);
        aTarget.setBackgroundSpriteForState(cc.Scale9Sprite.create(images[aName + (isDisabled ? '' : '_disabled')], cc.rect(0, 0, 120, 120), cc.rect(0, 0, 120, 120)), cc.CONTROL_STATE_HIGHLIGHTED);
    },

    changeSceneTo: function(aScene, aParam) {
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.stopMusic();

        var scene = aParam !== undefined ? new aScene(aParam) : new aScene();
        cc.director.runScene(new cc.TransitionFade(0.5, scene));
    },

    sendActionToServer: function(aAction) {
        return helper.sendActionWithDataToServer(aAction);
    },

    sendActionWithDataToServer: function(aAction, aName, aValue) {
        var data = {
            action: aAction,
            login: sessionStorage.login,
            password: sessionStorage.password
        };
        if (aName) {
            data.name = aName;
        }
        if (aValue) {
            data.value = aValue;
        }
        return JSON.parse(server.processAction(data));
    },

    _ReplaceMethodWithTryCatched: function(aMethod) {
        return function() {
            try {
                return aMethod.apply(this, arguments);
            } catch (e) {
                cc.error(e);
            }
        };
    },

    AddTryCatchersToAllMethodsOf: function(aObject) {
        var method_name, method;
        for (method_name in aObject) {
            method = aObject[method_name];
            if (typeof method === "function") {
                aObject[method_name] = helper._ReplaceMethodWithTryCatched(method).bind(aObject);
            }
        }
    }
};

helper.AddTryCatchersToAllMethodsOf(helper);
