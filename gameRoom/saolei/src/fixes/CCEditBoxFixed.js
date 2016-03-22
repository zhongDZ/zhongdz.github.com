/**
 * This is the same EditBox, but with fixed constructor.
 * See https://github.com/cocos2d/cocos2d-html5/pull/2989 for details.
 */

cc.EditBoxFixed = cc.EditBox.extend({
    /**
     * constructor of cc.EditBoxFixed
     * @param {cc.Size} size
     * @param {cc.Scale9Sprite} normal9SpriteBg
     * @param {cc.Scale9Sprite} press9SpriteBg
     * @param {cc.Scale9Sprite} disabled9SpriteBg
     */
    ctor: function (size, normal9SpriteBg, press9SpriteBg, disabled9SpriteBg) {
        cc.ControlButton.prototype.ctor.call(this);

        this._textColor = cc.color.WHITE;
        this._placeholderColor = cc.color.GRAY;
        this.setContentSize(size);
        var tmpDOMSprite = this._domInputSprite = new cc.Sprite();
        tmpDOMSprite.draw = function () {};  //redefine draw function
        this.addChild(tmpDOMSprite);
        var selfPointer = this;
        var tmpEdTxt = this._edTxt = cc.newElement("input");
        tmpEdTxt.type = "text";
        tmpEdTxt.style.fontSize = this._edFontSize + "px";
        tmpEdTxt.style.color = "#000000";
        tmpEdTxt.style.border = 0;
        tmpEdTxt.style.background = "transparent";
        //tmpEdTxt.style.paddingLeft = "2px";
        tmpEdTxt.style.width = "100%";
        tmpEdTxt.style.height = "100%";
        tmpEdTxt.style.active = 0;
        tmpEdTxt.style.outline = "medium";
        tmpEdTxt.style.padding = "0";
        var onCanvasClick = function() { tmpEdTxt.blur();};
        
        // TODO the event listener will be remove when EditBox removes from parent.
        cc._addEventListener(tmpEdTxt, "input", function () {
            if (selfPointer._delegate && selfPointer._delegate.editBoxTextChanged)
                selfPointer._delegate.editBoxTextChanged(selfPointer, this.value);
        });
        cc._addEventListener(tmpEdTxt, "keypress", function (e) {
            if (e.keyCode === cc.KEY.enter) {
                e.stopPropagation();
                e.preventDefault();
                if (selfPointer._delegate && selfPointer._delegate.editBoxReturn)
                    selfPointer._delegate.editBoxReturn(selfPointer);
                cc._canvas.focus();
            }
        });
        cc._addEventListener(tmpEdTxt, "focus", function () {
            if (this.value === selfPointer._placeholderText) {
                this.value = "";
                this.style.fontSize = selfPointer._edFontSize + "px";
                this.style.color = cc.colorToHex(selfPointer._textColor);
                if (selfPointer._editBoxInputFlag === cc.EDITBOX_INPUT_FLAG_PASSWORD)
                    selfPointer._edTxt.type = "password";
                else
                    selfPointer._edTxt.type = "text";
            }
            if (selfPointer._delegate && selfPointer._delegate.editBoxEditingDidBegin)
                selfPointer._delegate.editBoxEditingDidBegin(selfPointer);
            cc._addEventListener(cc._canvas, "click", onCanvasClick);
        });
        cc._addEventListener(tmpEdTxt, "blur", function () {
            if (this.value === "") {
                this.value = selfPointer._placeholderText;
                this.style.fontSize = selfPointer._placeholderFontSize + "px";
                this.style.color = cc.colorToHex(selfPointer._placeholderColor);
                selfPointer._edTxt.type = "text";
            }
            if (selfPointer._delegate && selfPointer._delegate.editBoxEditingDidEnd)
                selfPointer._delegate.editBoxEditingDidEnd(selfPointer);
            cc._canvas.removeEventListener('click', onCanvasClick);
        });

        cc.DOM.convert(tmpDOMSprite);
        tmpDOMSprite.dom.appendChild(tmpEdTxt);
        tmpDOMSprite.dom.showTooltipDiv = false;
        tmpDOMSprite.dom.style.width = (size.width - 6) + "px";
        tmpDOMSprite.dom.style.height = (size.height - 6) + "px";

        //this._domInputSprite.dom.style.borderWidth = "1px";
        //this._domInputSprite.dom.style.borderStyle = "solid";
        //this._domInputSprite.dom.style.borderRadius = "8px";
        tmpDOMSprite.canvas.remove();

        if (this.initWithSizeAndBackgroundSprite(size, normal9SpriteBg)) {
            if (press9SpriteBg)
                this.setBackgroundSpriteForState(press9SpriteBg, cc.CONTROL_STATE_HIGHLIGHTED);
            if (disabled9SpriteBg)
                this.setBackgroundSpriteForState(disabled9SpriteBg, cc.CONTROL_STATE_DISABLED);
        }
    }
});

/**
 * get the rect of a node in world coordinate frame
 * @function
 * @param {cc.Node} node
 * @return {cc.Rect}
 */
cc.EditBoxFixed.getRect = function (node) {
    var contentSize = node.getContentSize();
    var rect = cc.rect(0, 0, contentSize.width, contentSize.height);
    return cc.rectApplyAffineTransform(rect, node.getNodeToWorldTransform());
};
