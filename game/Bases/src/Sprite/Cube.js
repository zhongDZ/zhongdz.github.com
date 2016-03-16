//
//  Cube.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var Cube = cc.Node.extend({
    ctor:function (num) {
        this._super();
        this.eyeSightRange = 60;
        if(CONFIG.DEBUG_FLAG == 1){
            this.alpha = 255 * 1;
        }else{
            this.alpha = 255 * 0;
        }
        //AttackRollingCube
        this.rollingCube = cc.LayerColor.create(cc.c4b(255,0,0,this.alpha),2,2);
        this.addChild(this.rollingCube,999);
        this.cubeAngle   = num * 20;
    },

    init:function () {
    },

    update:function() {
        //update rolling cube
        this.cubeAngle+=2;
        if(this.cubeAngle>=360){
            this.cubeAngle = 0;
        }
        var cubeRad = this.cubeAngle * Math.PI / 180;
        var cubeX = this.eyeSightRange * Math.cos(cubeRad) + 0;
        var cubeY = this.eyeSightRange * Math.sin(cubeRad) + 0;
        this.rollingCube.setPosition(cubeX,cubeY);
    }
});
