/**
 * Created by Administrator on 16-2-25.
 */
var mainScene = (function (_super) {
    __extends(mainScene, _super);
    function mainScene() {
        _super.call(this);
        this.tick = 0;
        this.resArr = ["eye_1", "eye_2", "eye_3", "eye_4"];
        this.resLIndex = 0;
        this.resRIndex = 1;
        this.canTouchStageL = false;
        this.canTouchStageR = false;
        this.beginGame = false; //开始游戏
        this.boxArr = []; //存放箱子
        this.beginAddBox = false;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=mainScene,p=c.prototype;
    p.onAddToStage = function (event) {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        this.createGameScene();
    };
    p.createGameScene = function () {
        this.beginAddBox = false;
        var _bgImage = this.createBitmapByName("bgImage", 0, 0, null);
        this.addChild(_bgImage);
        var _bar = this.createBitmapByName("bar", this.stageW / 2, this.stageH / 2, null);
        this.addChild(_bar);
        _bar.scaleY = 4;
        _bar.anchorOffsetX = _bar.width / 2;
        _bar.anchorOffsetY = _bar.height / 2;
        var _left = this.createBitmapByName("eye_1", null, null, null);
        this.addChild(_left);
        _left.x = (this.stageW - _left.width) / 2 - 25;
        _left.y = (this.stageH - _left.height) / 2;
        var _right = this.createBitmapByName("eye_2", null, null, null);
        this.addChild(_right);
        _right.x = (this.stageW - _right.width) / 2 + 25;
        _right.y = (this.stageH - _right.height) / 2;
        var _start_press = this.createBitmapByName("start_press", null, null, null);
        this.addChild(_start_press);
        _start_press.scaleX = 0.5;
        _start_press.scaleY = 0.5;
        _start_press.x = (this.stageW - _start_press.width) / 2;
        _start_press.y = this.stageH - 250;
        _start_press.touchEnabled = true;
        _start_press.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("开始游戏");
            this.removeChild(_start_press);
            this.beginGame = true;
        }, this);
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
            var _x = evt.stageX;
            var xTemp = 200;
            if (_x < this.stageW / 2 && _x > 0) {
                if (this.canTouchStageL)
                    return;
                this.canTouchStageL = true;
                var _leftSpr = egret.Tween.get(_left);
                _leftSpr.to({ x: _left.x - xTemp }, 300).to({ x: _left.x }, 500);
                _leftSpr.call(function () {
                    this.canTouchStageL = false;
                }, this);
            }
            else {
                if (this.canTouchStagR)
                    return;
                this.canTouchStagR = true;
                var _rightSpr = egret.Tween.get(_right);
                _rightSpr.to({ x: _right.x + xTemp }, 300).to({ x: _right.x }, 500);
                _rightSpr.call(function () {
                    this.canTouchStagR = false;
                }, this);
            }
        }, this);
        var a = 0;
        this.addEventListener(egret.Event.ENTER_FRAME, function () {
            //bar变长
            if (Math.floor(a) <= 5 && this.beginGame) {
                a += 0.05;
                _bar.scaleY = a;
            }
            else {
                //开始添加箱子
                this.beginAddBox = true;
            }
            //变眼睛
            this.tick++;
            if (this.tick % 30 == 0) {
                _left.texture = RES.getRes(this.resArr[this.resLIndex]);
                this.resLIndex++;
                if (this.resLIndex > 3) {
                    this.resLIndex = 0;
                }
                _right.texture = RES.getRes(this.resArr[this.resRIndex]);
                this.resRIndex++;
                if (this.resRIndex > 3) {
                    this.resRIndex = 0;
                }
            }
            //添加障碍物
            if (this.tick % 60 == 0 && this.beginGame && this.beginAddBox) {
                this.addLeftBox();
            }
            this.checkHit(_left);
            this.checkHit(_right);
        }, this);
    };
    p.addLeftBox = function () {
        //var Rnum:number = 1;
        //Rnum = Math.floor(Math.random()*4 + 1);
        var Ytemp = 50;
        var boxResArr = [
            { "res": "box_1", "x": this.stageW / 2 - 35, "y": this.stageH + Ytemp, "y1": 0 + Ytemp },
            { "res": "box_1", "x": this.stageW / 2 + 35, "y": 0 - Ytemp, "y1": this.stageH + Ytemp },
            { "res": "box_2", "x": this.stageW / 2 - 35, "y": this.stageH + Ytemp, "y1": 0 + Ytemp },
            { "res": "box_2", "x": this.stageW / 2 + 35, "y": 0 - Ytemp, "y1": this.stageH + Ytemp }
        ];
        switch (1) {
            case 1:
                {
                    var _Rnum = 0;
                    _Rnum = Math.floor(Math.random() * 4);
                    var _l = this.createBitmapByName(boxResArr[_Rnum].res, boxResArr[_Rnum].x, boxResArr[_Rnum].y, boxResArr[_Rnum].y1);
                    _l.anchorOffsetX = _l.width / 2;
                    _l.anchorOffsetY = _l.height / 2;
                    this.addChild(_l);
                    this.boxArr.push(_l);
                }
                ;
                break;
            case 2:
                {
                    var sprArr = [[0, 1], [0, 3], [1, 2], [2, 3]];
                    var _Rnum = 0;
                    _Rnum = Math.floor(Math.random() * 4);
                    for (var i = 0; i < sprArr[_Rnum].length; i++) {
                        var _i = sprArr[_Rnum][i];
                        var _l = this.createBitmapByName(boxResArr[_i].res, boxResArr[_i].x, boxResArr[_i].y, boxResArr[_i].y1);
                        _l.anchorOffsetX = _l.width / 2;
                        _l.anchorOffsetY = _l.height / 2;
                        this.addChild(_l);
                        this.boxArr.push(_l);
                    }
                }
                ;
                break;
        }
    };
    p.spriteMoveFinished = function (spr) {
        this.removeChild(spr);
        var index = this.boxArr.indexOf(spr);
        if (index > -1) {
            this.boxArr.splice(index, 1);
        }
    };
    p.checkHit = function (obj2) {
        for (var i in this.boxArr) {
            var obj1 = this.boxArr[i];
            var rect1 = obj1.getBounds();
            var rect2 = obj2.getBounds();
            rect1.x = obj1.x;
            rect1.y = obj1.y;
            rect2.x = obj2.x;
            rect2.y = obj2.y;
            if (rect1.intersects(rect2)) {
                console.log('game over');
                this.beginGame = false;
            }
        }
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    p.createBitmapByName = function (name, x, y, y1) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        result.x = x == null ? null : x;
        result.y = y == null ? null : y;
        if (!(y1 == null)) {
            var _lSpr = egret.Tween.get(result);
            _lSpr.to({ y: y1 }, 2200);
            _lSpr.call(function () {
                this.spriteMoveFinished(result);
            }, this);
        }
        return result;
    };
    return mainScene;
})(egret.DisplayObjectContainer);
egret.registerClass(mainScene,'mainScene');
