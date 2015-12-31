var size = {
    "width" : 720,
    "height" : 1280
}

var clickArr = [];
var sprArr = [];
var MapRow = 4;
var MapCol = 4;
var checkResult = false;
var lineArr = [];
var starArr = [];
var sceneLayer = null;

var _X_0 = 50,_X_1 = 160,_X_2 = 280,_X_3 = 400,_X_4 = 510,_X_5 = 620;
var _Y_0 = 240,_Y_1 = 360,_Y_2 = 480,_Y_3 = 600,_Y_4 = 710,_Y_5 = 820;
var XY = [
    [
        {"x":_X_0,"y":_Y_0,"tag":0},
        {"x":_X_1,"y":_Y_0,"tag":0},
        {"x":_X_2,"y":_Y_0,"tag":0},
        {"x":_X_3,"y":_Y_0,"tag":0},
        {"x":_X_4,"y":_Y_0,"tag":0},
        {"x":_X_5,"y":_Y_0,"tag":0}
    ],
    [   
        {"x":_X_0,"y":_Y_1,"tag":0},
        {"x":_X_1,"y":_Y_1,"tag":1},
        {"x":_X_2,"y":_Y_1,"tag":2},
        {"x":_X_3,"y":_Y_1,"tag":3},
        {"x":_X_4,"y":_Y_1,"tag":4},
        {"x":_X_5,"y":_Y_1,"tag":0}
    ],
    [
        {"x":_X_0,"y":_Y_2,"tag":0},
        {"x":_X_1,"y":_Y_2,"tag":5},
        {"x":_X_2,"y":_Y_2,"tag":6},
        {"x":_X_3,"y":_Y_2,"tag":7},
        {"x":_X_4,"y":_Y_2,"tag":8},
        {"x":_X_5,"y":_Y_2,"tag":0},
    ],
    [
        {"x":_X_0,"y":_Y_3,"tag":0},
        {"x":_X_1,"y":_Y_3,"tag":9},
        {"x":_X_2,"y":_Y_3,"tag":10},
        {"x":_X_3,"y":_Y_3,"tag":11},
        {"x":_X_4,"y":_Y_3,"tag":12},
        {"x":_X_5,"y":_Y_3,"tag":0}
    ],
    [   
        {"x":_X_0,"y":_Y_4,"tag":0},
        {"x":_X_1,"y":_Y_4,"tag":13},
        {"x":_X_2,"y":_Y_4,"tag":14},
        {"x":_X_3,"y":_Y_4,"tag":15},
        {"x":_X_4,"y":_Y_4,"tag":16},
        {"x":_X_5,"y":_Y_4,"tag":0},
    ],
    [
        {"x":_X_0,"y":_Y_5,"tag":0},
        {"x":_X_1,"y":_Y_5,"tag":0},
        {"x":_X_2,"y":_Y_5,"tag":0},
        {"x":_X_3,"y":_Y_5,"tag":0},
        {"x":_X_4,"y":_Y_5,"tag":0},
        {"x":_X_5,"y":_Y_5,"tag":0}
    ]
];
var info = [
    {"res":res.type0,"type":0},
    {"res":res.type1,"type":1},
    {"res":res.type2,"type":2},
    {"res":res.type3,"type":3},
    {"res":res.type4,"type":4},
    {"res":res.type5,"type":5},
    {"res":res.type6,"type":6},
    {"res":res.type7,"type":7},
    {"res":res.type8,"type":8}
];
var randomArr = [];
var len = MapRow*MapCol;
var tempArr = GetRandomArr();
for(var i=0;i<len/2;i++){
    randomArr.push(info[tempArr[i]]);
    randomArr.push(info[tempArr[i]]);
}

//row & col test
// randomArr = [
//     info[0],info[1],info[1],info[0],
//     info[3],info[2],info[3],info[4],
//     info[6],info[2],info[5],info[5],
//     info[6],info[7],info[7],info[4],
// ];
//checkOnce
// randomArr = [
//     info[1],info[5],info[0],info[1],
//     info[0],info[2],info[2],info[6],
//     info[4],info[3],info[3],info[5],
//     info[6],info[7],info[7],info[4],
// ];
//checkTwic
// randomArr = [
//     info[5],info[6],info[5],info[3],
//     info[7],info[7],info[2],info[4],
//     info[6],info[1],info[2],info[0],
//     info[0],info[1],info[3],info[4],
// ];
// console.log(randomArr[0])
// randomArr = [
//     info[0],info[1],info[1],info[4],
//     info[2],info[2],info[3],info[4],
//     info[6],info[5],info[3],info[5],
//     info[6],info[7],info[0],info[7],
// ];
// randomArr = [
//     info[0],info[1],info[1],info[4],
//     info[2],info[7],info[2],info[7],
//     info[3],info[5],info[5],info[3],
//     info[6],info[0],info[6],info[4],
// ];
// randomArr = [
//     info[0],info[1],info[2],info[4],
//     info[5],info[1],info[2],info[5],
//     info[7],info[3],info[6],info[7],
//     info[0],info[3],info[6],info[4],
// ];
// randomArr = [
//     info[5],info[1],info[1],info[4],
//     info[5],info[2],info[2],info[4],
//     info[0],info[3],info[3],info[7],
//     info[0],info[6],info[6],info[7],
// ];

var sprArr = [];
for(var i = 0;i<MapRow + 2;i++){
    sprArr[i] = [];
}

var gameScene = cc.Scene.extend({
    PipeSpriteList:[],
    ctor:function(){
        this._super();

        randomArr.shuffle();

        this.init();

        sceneLayer = this;
    },
    init:function(){
        this.PipeSpriteList = [];

        this.bg = new cc.Sprite(res.bg);
        this.bg.x = size.width/2;
        this.bg.y = size.height/2;
        this.addChild(this.bg);

        var sum = 0;
        var num = 0;
        for(var i = 0;i<MapRow + 2;i++){
            for(var j = 0;j<MapCol + 2;j++){
                if(i==0 || i==5 || j==0 || j==5){
                    sprArr[i][j] = new touchSprite(res.stay,0,XY[i][j].tag,XY[i][j].x,XY[i][j].y,j,i,0,false);
                    this.addChild(sprArr[i][j]);
                }else{
                    num = sum++;
                    sprArr[i][j] = new touchSprite(randomArr[num].res,randomArr[num].type,XY[i][j].tag,XY[i][j].x,XY[i][j].y,j,i,1,true);
                    this.addChild(sprArr[i][j]);    
                }
            }
        }

        //开始先检查一次有无解
        if(!isSolvable()){
            resetSpr();
        }

        var star = new cc.Sprite(res.star);
        star.visible = false;
        this.addChild(star)

        starArr.push(star);
        
        this.scheduleUpdate(); 
    },
    update:function(){

    }
});

var isSolvable = function(){
    var spr1, spr2;
    for(var i=1;i<MapRow+1;i++){
        for(var j=1;j<MapCol+1;j++){
            if(sprArr[i][j]._index == 0)continue;
            spr1 = sprArr[i][j];

            for( var m=1;m<MapRow+1;m++){
                for(var n=1;n<MapCol+1;n++){
                    if(sprArr[m][n]._index == 0)continue;
                    spr2 = sprArr[m][n];

                    if(spr1._index == spr2._index){
                        console.log('true');
                        return true;
                    }
                }
            }
        }
    }
}
var resetSpr = function(){
    console.log('reset');
    // var aliveSprArr = [];
    // var spr_index = [];
    // var temp = null;

    // for(var i=1;i<MapRow+1;i++){
    //     for(var j=1;j<MapCol+1;j++){
    //         temp = sprArr[i][j];
    //         if(temp._index != 0){
    //             aliveSprArr.push(temp);
    //             spr_index.push(temp._index);
    //         }
    //     }
    // }

    // spr_index.shuffle();
    // for(var i=0;i<aliveSprArr.length;i++){
    //     aliveSprArr[i].initWithFile = 
    // }
}

var checkClick = function(){
    if(clickArr.length>2)return;
    if(clickArr.length==2){
        if(clickArr[0].tag == clickArr[1].tag){
            clickArr.splice(0,1);
            return;
        }else{
            if(clickArr[0].type != clickArr[1].type){
                clickArr[0].opacity = 255;
                clickArr.splice(0,1);
            }else{
                searchPath();

                if(checkResult){
                    clickArr[0].opacity = 200;
                    clickArr[1].opacity = 200;
                    var s1 = clickArr[0];
                    var s2 = clickArr[1];
                    clickArr.splice(0,clickArr.length);

                    var x_1, y_1;
                    var x_2, y_2;
                    var x_3, y_3;
                    var x_4, y_4;

                    var sum = lineArr.length;
                    switch(sum){
                        case 2:{
                            x_1 = lineArr[0].x;
                            y_1 = lineArr[0].y;
                            x_2 = lineArr[1].x;
                            y_2 = lineArr[1].y;

                            starArr[0].x = x_1;
                            starArr[0].y = y_1;
                            starArr[0].visible = true;

                            var mt = cc.moveTo(1,cc.p(x_2,y_2));
                            var mtCall = cc.callFunc(function(){
                                starArr[0].visible = false;

                                lineArr.splice(0,lineArr.length);

                                s1.visible = false;
                                s2.visible = false;

                                sceneLayer.removeChild(sceneLayer.getChildByTag(s1.tag));
                                sceneLayer.removeChild(sceneLayer.getChildByTag(s2.tag));
                            },this);
                            var seq = cc.sequence(mt,mtCall);
                            starArr[0].runAction(seq);
                        }break;
                        case 3:{
                            x_1 = lineArr[0].x;
                            y_1 = lineArr[0].y;
                            x_2 = lineArr[1].x;
                            y_2 = lineArr[1].y;
                            x_3 = lineArr[2].x;
                            y_3 = lineArr[2].y;

                            starArr[0].x = x_1;
                            starArr[0].y = y_1;
                            starArr[0].visible = true;

                            var mt = cc.moveTo(1,cc.p(x_2,y_2));
                            var mt1 = cc.moveTo(1,cc.p(x_3,y_3));
                            var mtCall = cc.callFunc(function(){
                                starArr[0].visible = false;

                                lineArr.splice(0,lineArr.length);

                                s1.visible = false;
                                s2.visible = false;

                                sceneLayer.removeChild(sceneLayer.getChildByTag(s1.tag));
                                sceneLayer.removeChild(sceneLayer.getChildByTag(s2.tag));
                            },this);
                            var seq = cc.sequence(mt, mt1, mtCall);
                            starArr[0].runAction(seq);
                        }break;
                        case 4:{
                            x_1 = lineArr[0].x;
                            y_1 = lineArr[0].y;
                            x_2 = lineArr[1].x;
                            y_2 = lineArr[1].y;
                            x_3 = lineArr[2].x;
                            y_3 = lineArr[2].y;
                            x_4 = lineArr[3].x;
                            y_4 = lineArr[3].y;

                            starArr[0].x = x_1;
                            starArr[0].y = y_1;
                            starArr[0].visible = true;

                            var mt = cc.moveTo(1,cc.p(x_2,y_2));
                            var mt1 = cc.moveTo(1,cc.p(x_3,y_3));
                            var mt2 = cc.moveTo(1,cc.p(x_4,y_4));
                            var mtCall = cc.callFunc(function(){
                                starArr[0].visible = false;

                                lineArr.splice(0,lineArr.length);

                                s1.visible = false;
                                s2.visible = false;

                                sceneLayer.removeChild(sceneLayer.getChildByTag(s1.tag));
                                sceneLayer.removeChild(sceneLayer.getChildByTag(s2.tag));
                            },this);
                            var seq = cc.sequence(mt, mt1, mt2, mtCall);
                            starArr[0].runAction(seq);
                        }break;
                    }
                }else{
                    clickArr[0].opacity = 255;
                    clickArr.splice(0,1);
                }
            }
        }
    }
}

var searchPath = function(){
    _x1 = clickArr[0].row;
    _y1 = clickArr[0].col;
    _x2 = clickArr[1].row;
    _y2 = clickArr[1].col;

    checkResult = checkRow(_x1, _y1, _x2, _y2);
    if(checkResult){
        sprArr[_y1][_x1]._index = 0;
        sprArr[_y2][_x2]._index = 0;
        return;
    }

    checkResult = checkCol(_x1, _y1, _x2, _y2);
    if(checkResult){
        sprArr[_y1][_x1]._index = 0;
        sprArr[_y2][_x2]._index = 0;
        return; 
    }

    checkResult = checkOnce(_x1, _y1, _x2, _y2);
    if(checkResult){
        sprArr[_y1][_x1]._index = 0;
        sprArr[_y2][_x2]._index = 0;
        return;   
    }

    //二次折线检查横向检测    
    checkResult = checkTwiceRow(_x1, _y1, _x2, _y2);  
    // console.log(checkResult);
    if(checkResult){
        sprArr[_y1][_x1]._index = 0;
        sprArr[_y2][_x2]._index = 0;
        return;
    }
    //二次折线检查纵向检测    
    checkResult = checkTwiceCol(_x1, _y1, _x2, _y2);
    if(checkResult){
        sprArr[_y1][_x1]._index = 0;
        sprArr[_y2][_x2]._index = 0;
        return;
    }
}

var checkRow = function(x1, y1, x2, y2){
    // console.log(x1, y1, x2, y2)
    var CR = false;
    if(y1 > sprArr.length)return CR;
    if(y1 != y2){
        return false;
    }else if(Math.abs(x1 - x2) == 1){
        lineArr.splice(0,lineArr.length);
        lineArr.push(sprArr[y1][x1]);
        lineArr.push(sprArr[y2][x2]);
        return true;
    }


    for(var i = Math.min(x1,x2)+1;i<Math.max(x1,x2);i++){
        if(i>sprArr.length)continue;
        if(sprArr[y1][i]._index == 0){
            CR = true;
        }else{
            CR = false;
            break;
        }
    }

    if(CR){
        lineArr.splice(0,lineArr.length);
        lineArr.push(sprArr[y1][x1]);
        lineArr.push(sprArr[y2][x2]);
    }

    return CR;
}

var checkCol = function(x1, y1, x2, y2){
    // console.log(x1, y1, x2, y2)
    var CR = false;
    if(x1>sprArr.length)return CR;
    if(x1 != x2){
        return false;
    }else if(Math.abs(y1 - y2) == 1){
        lineArr.splice(0,sprArr.length);
        lineArr.push(sprArr[y1][x1]);
        lineArr.push(sprArr[y2][x2]);
        return true;
    }

    for(var i = Math.min(y1,y2)+1;i<Math.max(y1,y2);i++){
        if(i>sprArr.length)continue;
        if(sprArr[i][x1]._index == 0){
            CR = true;
        }else{
            CR = false;
            break;
        }
    }

    if(CR){
        lineArr.splice(0,sprArr.length);
        lineArr.push(sprArr[y1][x1]);
        lineArr.push(sprArr[y2][x2]);
    }

    

    return CR;
}

var checkOnce = function(x1, y1, x2, y2){
    var CR = false;
    if(x1 < x2){
        CR = checkRow(x1, y1, x2 + 1, y1) && checkCol(x2, y1, x2, y2);
        if(CR){
            lineArr.splice(0,lineArr.length);
            lineArr.push(sprArr[y1][x1]);
            lineArr.push(sprArr[y1][x2]);
            lineArr.push(sprArr[y2][x2]);
        }else{
            CR = checkRow(x1-1, y2, x2, y2) && checkCol(x1, y1, x1, y2);
            if(CR){
                lineArr.splice(0, lineArr.length); 
                lineArr.push(sprArr[y1][x1]);
                lineArr.push(sprArr[y2][x1]);
                lineArr.push(sprArr[y2][x2]);
            }
        }
    }else{
        CR = checkRow(x2-1, y1, x1, y1) && checkCol(x2, y1, x2, y2);
        if(CR){
            lineArr.splice(0, lineArr.length); 
            lineArr.push(sprArr[y1][x1]);
            lineArr.push(sprArr[y1][x2]);
            lineArr.push(sprArr[y2][x2]);

        } else{
            CR = checkRow(x1+1, y2, x2, y2) && checkCol(x1, y2, x1, y1);
            if(CR){
                lineArr.splice(0, lineArr.length); 
                lineArr.push(sprArr[y1][x1]);
                lineArr.push(sprArr[y2][x1]);
                lineArr.push(sprArr[y2][x2]);
            }
        }
    }
    return CR;
}

/**
  * 二次折线检查横向检测
  *判断四种情况,
  *1表示点击图片,0表示检索路径,3表示其他图片
  *一
  *0000
  *0330
  *1331
  *二
  *1331
  *0330
  *0000
  *三
  *1333
  *0333
  *0000
  *3330
  *3331
  *四
  *3331
  *3330
  *0000
  *0333
  *1333
  */
var checkTwiceRow = function (x1, y1, x2, y2){
    var CR = false;
    if(x1 == x2) return false;
    for(var i = 0; i<MapCol + 2; i++){
        if(x1 <= x2){
            if(checkRow(x1-1, i, x2+1, i)){
                if(checkCol(x1, y1, x1, i) && checkCol(x2, y2, x2, i)){
                    CR = true;
                    lineArr.splice(0, lineArr.length); 
                    lineArr.push(sprArr[y1][x1]);
                    lineArr.push(sprArr[i][x1]);
                    lineArr.push(sprArr[i][x2]);
                    lineArr.push(sprArr[y2][x2]);
                    break;
                }
            }
        }else{
            if(checkRow(x2-1, i, x1+1, i)){
                if(checkCol(x1, y1, x1, i) && checkCol(x2, y2, x2, i)){
                    CR = true;
                    lineArr.splice(0, lineArr.length); 
                    lineArr.push(sprArr[y1][x1]);
                    lineArr.push(sprArr[i][x1]);
                    lineArr.push(sprArr[i][x2]);
                    lineArr.push(sprArr[y2][x2]);
                    break;
                }
            }
        }
    }
    return CR;
};

var checkTwiceCol = function(x1,y1,x2,y2){
    var CR = false;
    if(y1 == y2)return false;
    for(var i = 0;i<MapRow + 2;i++){
        if(y1 <= y2){
            console.log(checkCol(i,y1-1,i,y2+1))
            if(checkCol(i,y1-1,i,y2+1)){
                if(checkRow(x1,y1,i,y1)&&checkRow(x2,y2,i,y2)){
                    CR = true;
                    lineArr.splice(0, lineArr.length); 
                    lineArr.push(sprArr[y1][x1]);
                    lineArr.push(sprArr[y1][i]);
                    lineArr.push(sprArr[y2][i]);
                    lineArr.push(sprArr[y2][x2]);
                    break;
                }
            }
        }else{
            if(checkCol(i,y2-1,i,y1+1)){
                if(checkRow(x1,y1,i,y1)&&checkRow(x2,y2,i,y2)){
                    CR = true;
                    lineArr.splice(0, lineArr.length); 
                    lineArr.push(sprArr[y1][x1]);
                    lineArr.push(sprArr[y1][i]);
                    lineArr.push(sprArr[y2][i]);
                    lineArr.push(sprArr[y2][x2]);
                    break;
                }
            }
        }
    }
    return CR;
};

var touchSprite = cc.Sprite.extend({
    ctor:function(RES, TYPE, TAG, X, Y, ROW, COL, INDEX, EVENT_FLAG){
        this._super(RES, TAG, TYPE, ROW, COL, INDEX, EVENT_FLAG);

        this.initWithFile(RES);
        this.row = ROW;
        this.col = COL;
        this.tag = TAG;
        this.type = TYPE;
        this.x = X;
        this.y = Y;
        this._index = INDEX;



        if(EVENT_FLAG){
            this.loadListener();    
        }
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
        var locationInNode = self.convertToNodeSpace(touch.getLocation());
        var size = self.getContentSize();
        var rect = cc.rect(0, 0, size.width, size.height);
        if (!cc.rectContainsPoint(rect, locationInNode)) {
            return false;
        }
        return true;
    },
    onTouchMoved : function (touch, event) {
        var self = this.target;
    },
    onTouchEnded : function (touch, event) {
        var self = this.target;
        var target = event.getCurrentTarget();
        // var tag = target.tag;

        // console.log(target.row,target.col);

        target.opacity = 200;
        clickArr.push(target);
        checkClick();
    },
    onTouchDispose : function(touch, event, _layer){//处理点击
        var _this = event.getCurrentTarget();
    }
});

function GetRandomArr(){
    var flag = 1;
    var n = 0;
    var arr = [];
    for(var i = 0;i < 8;i++){
        flag = 1;
        n = parseInt(Math.random()*8);
        for(var j = 0;j < i;j++){
            if(arr[j] == n){
                flag = 0;
                i--;
            }
        }
        if(flag == 1){
            arr.push(n);
        }
    }
    return arr;
}

//aray
Array.prototype.shuffle = function() {
    for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
    return this;
};
Array.prototype.del=function(n) {　//n表示第几项，从0开始算起。
//prototype为对象原型，注意这里为对象增加自定义方法的方法。
　if(n<0)　//如果n<0，则不进行任何操作。
　　return this;
　else
　　return this.slice(0,n).concat(this.slice(n+1,this.length));
　　/*
　　　concat方法：返回一个新数组，这个新数组是由两个或更多数组组合而成的。
　　　　　　　　　这里就是返回this.slice(0,n)/this.slice(n+1,this.length)
　　 　　　　　　组成的新数组，这中间，刚好少了第n项。
　　　slice方法： 返回一个数组的一段，两个参数，分别指定开始和结束的位置。
　　*/
}