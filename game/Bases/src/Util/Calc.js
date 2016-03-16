//
//  Calc.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var getDistance = function(x1,y1,x2,y2){
    var dirX = x1 - x2;
    var dirY = y1 - y2;
    return Math.sqrt(Math.pow(dirX,2) + Math.pow(dirY,2));
};

var getRandNumberFromRange = function (min,max) {
	var rand = min + Math.floor( Math.random() * (max - min));
    return rand;
};

var getRandNumberFromRangeAndExcludeNumbers = function (min,max,excludeNums) {
	//min-maxの配列を作成する
	var numArray = [];
	for(var i=min;i<max;i++){
		numArray.push(i);
	}
	//min-maxの配列からexcludeNumsを削除する
	for(var h=0;h<numArray.length;h++){
		for(var i=0;i<excludeNums.length;i++){
			if(numArray[h] == excludeNums[i]){
				numArray.splice(h,1);
			}
		}
	}
	//残ったnumArrayの要素数をランダムで取得
	var rand = getRandNumberFromRange(0,numArray.length);
	return numArray[rand];
};

var getZeroPaddingNumber = function(targetNum,paddingNum){
	var zeroTxt = "";
	for(var i=1;i<paddingNum;i++){
		zeroTxt = zeroTxt + "0";
	}
	return (zeroTxt+targetNum).slice(-1*paddingNum);
};

var getBulletDirection = function(x,y,w){
	//三角形の斜辺の長さ
	var obliqueSide = Math.sqrt(x*x + y*y );
	//斜辺の長さの率
	var rate = w / obliqueSide;
	return [x*rate,y*rate];
};