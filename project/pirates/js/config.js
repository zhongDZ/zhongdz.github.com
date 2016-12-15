var size = {
    "width" : 640,
    "height" : 1136
}

var zindex = {
	bgLayer : 10,
	topLayer : 20,
	IsLand : 25,
	lotteryLayer : 30,
	menuLayer : 40
}

//以便于在不同的布景里面通过tag来查找子节点
var childTagName = {
	lotteryLayer : 'lotteryLayer',//抽奖布景
	lotteryMenu : 'lotteryMenu',//抽奖按钮
	self_island : 'self_island'//自己的岛屿
}