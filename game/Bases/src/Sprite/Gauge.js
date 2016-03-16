//
//  Gauge.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var Gauge = cc.Node.extend({
    ctor:function (width,height,color) {
        this._super();
        this.width  = width;
        this.height = height;

        var rectBase = cc.LayerColor.create(cc.c4b(0,0,0,255),this.width,this.height);
        rectBase.setPosition(0,0);
        this.addChild(rectBase,1);

        var rectBack = cc.LayerColor.create(cc.c4b(169,169,169,255),this.width - 1,this.height - 1);
        rectBack.setPosition(1,1);
        this.addChild(rectBack,2);

        var colorCode = cc.c4b(255,255,255,255);
        if(color == "red"){
            colorCode = cc.c4b(255,0,0,255);
        }
        if(color == "blue"){
            colorCode = cc.c4b(0,0,255,255);
        }
        if(color == "lime"){
            colorCode = cc.c4b(0,255,0,255);
        }
        this.rectBar = cc.LayerColor.create(colorCode,this.width - 2,this.height - 2);
        this.rectBar.setPosition(2,2);
        this.addChild(this.rectBar,3);
        this.rectBar.setAnchorPoint(0,0);
    },
    init:function () {
    },
    update:function(scaleNum) {
        this.rectBar.setScale(scaleNum,1);
    },
});

