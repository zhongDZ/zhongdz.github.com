var ele = function(id){
	return document.getElementById(''+id+'');
}
var addListener = function(id,callfun){
	ele(''+id+'').addEventListener("touchend",callfun,true);
}

var gameScoreNum = 0;

window.onload = function(){//loading
	onloadFun();
}

function onloadFun(){
    var loadingNum = 0;
    var tickNum = 0;
    var loadTick = setInterval(function(){
        tickNum++;
        if(tickNum % 20 == 0){
            tickNum = 0;
            loadingNum++;
            console.log('succes') 
        }
        if(loadingNum >= 99){
            loadingNum = 99;
        }
        $("#loadingNum1").html(loadingNum);
    });
    var Timenum = parseInt(Math.random()*500 + 2000);
    setTimeout(function(){
        document.getElementById('loadingWrap').style.display = 'none';
        document.getElementById('mainDiv').style.display = 'block';
        $("#title").animate({'top':'15%'},1000,function(){
        	$("#title").addClass('bt');
        	$("#startBtn").fadeIn(2500);
        	$("#startBtn").addClass('st');

        	$("#iLikeBtn").animate({'opacity':'1','top':'78%','left':'50%'},500);
        	$("#gouBtn").animate({'opacity':'1','top':'45%','left':'14%'},500);
        	$("#xijieBtn").animate({'opacity':'1','top':'70%','left':'15%'},500,function(){
        		$(".carrond1").show();
        		$(".carrond2").show();
        		$(".carrond3").show();
        		$(".carrond4").show();
        		$(".carrond5").show();
        		$(".carrond6").show();
        	});
        });
    },Timenum);

    gameAllCheck = $("#bbbb").html();
}

//开始游戏为ta拿分
addListener('startBtn',startBtnFun);
function startBtnFun(e){
	// console.log('startBtnFun');
    console.log(gameAllCheck)
    if(gameAllCheck == 'true'){
        console.log("sss");
        gameAllCheck = 'true';
        $("#DoNot").show();
    }else{
        console.log('ffff');
        gameAllCheck = 'true';
        $('#mainDiv').hide();
        $('#gameDiv').show();
        $('#startGameBtn').animate({'top':'35%'},1500);
        $("#startGameBtn").addClass('st');

        _czc.push(["_trackEvent", "开始游戏为ta拿分", "click", 'startup', 1]);
        _hmt.push(['_trackEvent', "开始游戏为ta拿分", "click", 'startup', 1]);
    }
}

//提示
addListener('DoNot',DoNotFun);
function DoNotFun(e){
    $("#DoNot").hide();
}

//我也要赢大奖
addListener('iLikeBtn',iLikeBtnFun);
function iLikeBtnFun(e){
    var hn = $("#hostName").html();
    // console.log(hn)
    var linkTo = 'http://'+hn+'/biz/musicnation_s01e01/startup?cc='+getQueryString('cc');
    // console.log(linkTo)
	window.location.href = ''+linkTo+'';

    _czc.push(["_trackEvent", "我也要赢大奖", "click", 'startup', 1]);
    _hmt.push(['_trackEvent', "我也要赢大奖", "click", 'startup', 1]);
}

//购门票按钮
addListener('gouBtn',gouBtnFun);
function gouBtnFun(e){
	console.log('购门票');
	// window.location.href = 'http://wap.koudaitong.com/v2/goods/ide8fgc8?spm=fake1920143_h1902130';
    $('#haibao').show();

    _czc.push(["_trackEvent", "购门票按钮", "click", 'startup', 1]);
    _hmt.push(['_trackEvent', "购门票按钮", "click", 'startup', 1]);
}

//关闭海报
addListener('haibao',haibaoFun);
function haibaoFun(e){
    // console.log('取消');
    $('#haibao').hide();
}

//活动细节
addListener('xijieBtn',xijieBtnFun);
function xijieBtnFun(e){
	console.log('活动细节');
	$('#XJDiv').show();

    _czc.push(["_trackEvent", "活动细节", "click", 'startup', 1]);
    _hmt.push(['_trackEvent', "活动细节", "click", 'startup', 1]);
}

// addListener('seeAll',seeAllFun);
// function seeAllFun(){
// 	console.log('查看奖品')
// }

//活动细节内容页
addListener('XJDiv',XJDivFun);
function XJDivFun(e){
	console.log('弹出分享提示页');
	$('#XJDiv').hide();
}

//为ta加分游戏结束后立即参与按钮
addListener('endTellBtnLeft',endTellBtnLeftFun);
function endTellBtnLeftFun(e){
	console.log('立即参与');
	var hn = $("#hostName").html();
    // console.log(hn)
    var linkTo = 'http://'+hn+'/biz/musicnation_s01e01/startup?cc='+getQueryString('cc');
    // console.log(linkTo)
    window.location.href = ''+linkTo+'';

    _czc.push(["_trackEvent", "游戏结束后立即参与", "click", 'startup', 1]);
    _hmt.push(['_trackEvent', "游戏结束后立即参与", "click", 'startup', 1]);
}

//游戏结束下右
addListener('endTellBtnRight',endTellBtnRightFun);
function endTellBtnRightFun(e){
    // console.log('endTellBtnFun');
    $('#yiji').show();

    _czc.push(["_trackEvent", "荧光屏", "click", 'startup', 1]);
    _hmt.push(['_trackEvent', "荧光屏", "click", 'startup', 1]);
}

//应急海报
addListener('yiji',yijiFun);
function yijiFun(e){
    // console.log('endTellBtnFun');
    $('#yiji').hide();
}

//游戏结束关闭按钮
addListener('close',closeBtnFun);
function closeBtnFun(e){
	console.log('close');
	$('#endPage').hide();
	$('#mainDiv').show();

    _czc.push(["_trackEvent", "游戏结束关闭", "click", 'startup', 1]);
    _hmt.push(['_trackEvent', "游戏结束关闭", "click", 'startup', 1]);
}

// e.preventDefault();
// e.stopPropagation();

var sendScore1 = function(s){//发送分数
	// var s = 111;//从url获取 instance
    var iiii = $("#aaaaa").html();//玩玩之后继续带回给后台告诉后台哪个玩家的
    // alert(iiii)
    Zepto.ajax({
        type : 'post',
        url : '/biz/musicnation_s01e01/score',
        data : JSON.stringify({
            _csrf:_csrf,
            instance:""+iiii+"",
            score:""+s+""
        }),
        contentType : "application/json",
        dataType : 'json',
        beforeSend : function () {
        },
        success : function (data, status, xhr) {
            console.log(data)
        },
        error : function (xhr, errorType, error) {
            console.log('have fail')
        }
    });
}