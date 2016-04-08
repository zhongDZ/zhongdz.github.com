/**************config***************/
var VoArr = ['vo/2.mp3','vo/3.mp3','vo/4.mp3','vo/5.mp3','vo/6.mp3',
            'vo/7.mp3','vo/8.mp3','vo/9.mp3','vo/10.mp3','vo/11.mp3',
            'vo/12.mp3','vo/13.mp3','vo/14.mp3','vo/15.mp3','vo/16.mp3',
            'vo/17.mp3','vo/18.mp3','vo/19.mp3','vo/20.mp3','vo/21.mp3',
            'vo/22.mp3','vo/23.mp3','vo/24.mp3','vo/25.mp3','vo/26.mp3',
            'vo/27.mp3','vo/28.mp3','vo/29.mp3','vo/30.mp3','vo/31.mp3',
            'vo/32.mp3','vo/33.mp3','vo/34.mp3','vo/35.mp3','vo/36.mp3',
            'vo/37.mp3','vo/38.mp3','vo/39.mp3','vo/40.mp3','vo/41.mp3',
            'vo/42.mp3','vo/43.mp3','vo/44.mp3','vo/45.mp3','vo/46.mp3',
            'vo/47.mp3','vo/48.mp3','vo/49.mp3','vo/50.mp3','vo/51.mp3'];
var TrueVoArr = ['16号爱人','爱一个上一课','抱抱','独照','分身术',
                '花千树','华丽邂逅','黄色大门','挥着翅膀的女孩',
                '加大力度','借过','空港','乐观','连续剧',
                '另眼相看','隆重登场','明日恩典','男朋友与歌','女皇',
                '跑步机上','澎湃','怯','全新暑假','身娇肉贵',
                '世上只有','谁来爱我','搜神记','逃避你','桃色冒险',
                '特别嘉宾','天窗','天然呆','天之骄女','痛爱',
                '未知','我杯茶','我的骄傲','习惯失恋','小小',
                '心病','心淡','心花怒放','续集','烟霞',
                '一拍两散','越唱越强','再见我的初恋','这么近那么远','争气','最后一课'];
var AllArr = ['17号爱人','爱一个上一个','泡泡','合照','分身乏术',
                '樱花树下','美丽邂逅','红色大门','挥着棍棒的女孩','力度加大',
                '谢过','空巷','悲观','续集','令眼相看',
                '笼中登场','明日非典','男朋友与我','女人花','跑步机',
                '汹涌','初吻','全新寒假','香蕉肉贵','世上只有妈妈好',
                '有谁来爱我','聊斋','套比你','桃色交易','特别嘉斌',
                '窗外','天然萌','绝代双骄','疼爱','未解之谜',
                '我被查','我的嗷娇','失恋太少','小小葫芦娃','丧心病狂',
                '心灰意冷','心花路放','继续','二手烟','一拍即合',
                '越唱越长','再见二丁目','这么远那么近','争一口气','开学第一课',
                '15号爱人','悔恨又如何','宝宝','照片','人人是你',
                '很多恋人','无限宇宙','蓝色大门','隐形的翅膀','加快速度',
                '密友','空讲','让我这样吧','大结局','挑剔的他',
                '女王','明天过后','男朋友与鹅','红尘女子','忘情森巴舞',
                '膨胀','失恋','初夏','天梯','屎上只有',
                '爱错','搜身记','逃避','真心话大冒险','特别加班',
                '窗台','小呆萌','天之骄子','喜欢你','X档案',
                '你杯茶','骄傲的我','习惯','小苹果','生病',
                '你是我的眼','晚霞','再见我的钱包','最后一面'];
var gameLevelName = ['1','2','3','4','5'];
var trueImgArr = [
                  './res/checkArr/1.png','./res/checkArr/2.png','./res/checkArr/3.png','./res/checkArr/4.png',
                  './res/checkArr/5.png','./res/checkArr/6.png','./res/checkArr/7.png','./res/checkArr/8.png',
                  './res/checkArr/9.png','./res/checkArr/10.png','./res/checkArr/11.png','./res/checkArr/12.png',
                  './res/checkArr/13.png','./res/checkArr/14.png','./res/checkArr/15.png','./res/checkArr/16.png',
                  './res/checkArr/17.png','./res/checkArr/18.png','./res/checkArr/19.png','./res/checkArr/20.png',
                  './res/checkArr/21.png','./res/checkArr/22.png','./res/checkArr/23.png','./res/checkArr/24.png',
                  './res/checkArr/25.png','./res/checkArr/26.png','./res/checkArr/27.png','./res/checkArr/28.png',
                  './res/checkArr/29.png','./res/checkArr/30.png','./res/checkArr/31.png','./res/checkArr/32.png',
                  './res/checkArr/33.png','./res/checkArr/34.png','./res/checkArr/35.png','./res/checkArr/36.png',
                  './res/checkArr/37.png','./res/checkArr/38.png','./res/checkArr/39.png','./res/checkArr/40.png',
                  './res/checkArr/41.png','./res/checkArr/42.png','./res/checkArr/43.png','./res/checkArr/44.png',
                  './res/checkArr/45.png','./res/checkArr/46.png','./res/checkArr/47.png','./res/checkArr/48.png',
                  './res/checkArr/49.png','./res/checkArr/50.png',
];
var AllImgArr = [
                  './res/checkArrAll/1.png','./res/checkArrAll/2.png','./res/checkArrAll/3.png','./res/checkArrAll/4.png',
                  './res/checkArrAll/5.png','./res/checkArrAll/6.png','./res/checkArrAll/7.png','./res/checkArrAll/8.png',
                  './res/checkArrAll/9.png','./res/checkArrAll/10.png','./res/checkArrAll/11.png','./res/checkArrAll/12.png',
                  './res/checkArrAll/13.png','./res/checkArrAll/14.png','./res/checkArrAll/15.png','./res/checkArrAll/16.png',
                  './res/checkArrAll/17.png','./res/checkArrAll/18.png','./res/checkArrAll/19.png','./res/checkArrAll/20.png',
                  './res/checkArrAll/21.png','./res/checkArrAll/22.png','./res/checkArrAll/23.png','./res/checkArrAll/24.png',
                  './res/checkArrAll/25.png','./res/checkArrAll/26.png','./res/checkArrAll/27.png','./res/checkArrAll/28.png',
                  './res/checkArrAll/29.png','./res/checkArrAll/30.png','./res/checkArrAll/31.png','./res/checkArrAll/32.png',
                  './res/checkArrAll/33.png','./res/checkArrAll/34.png','./res/checkArrAll/35.png','./res/checkArrAll/36.png',
                  './res/checkArrAll/37.png','./res/checkArrAll/38.png','./res/checkArrAll/39.png','./res/checkArrAll/40.png',
                  './res/checkArrAll/41.png','./res/checkArrAll/42.png','./res/checkArrAll/43.png','./res/checkArrAll/44.png',
                  './res/checkArrAll/45.png','./res/checkArrAll/46.png','./res/checkArrAll/47.png','./res/checkArrAll/48.png',
                  './res/checkArrAll/49.png','./res/checkArrAll/50.png','./res/checkArrAll/51.png','./res/checkArrAll/52.png',
                  './res/checkArrAll/53.png','./res/checkArrAll/54.png','./res/checkArrAll/55.png','./res/checkArrAll/56.png',
                  './res/checkArrAll/57.png','./res/checkArrAll/58.png','./res/checkArrAll/59.png','./res/checkArrAll/60.png',
                  './res/checkArrAll/61.png','./res/checkArrAll/62.png','./res/checkArrAll/63.png','./res/checkArrAll/64.png',
                  './res/checkArrAll/65.png','./res/checkArrAll/66.png','./res/checkArrAll/67.png','./res/checkArrAll/68.png',
                  './res/checkArrAll/69.png','./res/checkArrAll/70.png','./res/checkArrAll/71.png','./res/checkArrAll/72.png',
                  './res/checkArrAll/73.png','./res/checkArrAll/74.png','./res/checkArrAll/75.png','./res/checkArrAll/76.png',
                  './res/checkArrAll/77.png','./res/checkArrAll/78.png','./res/checkArrAll/79.png','./res/checkArrAll/80.png',
                  './res/checkArrAll/81.png','./res/checkArrAll/82.png','./res/checkArrAll/83.png','./res/checkArrAll/84.png',
                  './res/checkArrAll/85.png','./res/checkArrAll/86.png','./res/checkArrAll/87.png','./res/checkArrAll/88.png',
                  './res/checkArrAll/89.png','./res/checkArrAll/90.png','./res/checkArrAll/91.png','./res/checkArrAll/92.png',
                  './res/checkArrAll/93.png','./res/checkArrAll/94.png'
                  ];
/**************config***************/


var answerArr = [];
var RandomArr = [];
var RandomArrInner = [];
var index1 = 0;
var TrueAnswerTemp = null;
// var gameScoreNum = 0;
var game5Step = 0;
var gameState = false;//判断游戏状态

var answerImgArr = [];

var au = document.getElementById('AU');

var TrueArr = randomArrFun(49,50);
// console.log(TrueArr)

var tick = null;//计时器

var cs = document.getElementById('chechSuccess');
var cf = document.getElementById('checkFail')


//开始游戏
addListener('startGameBtn',startGameBtnFun);
function startGameBtnFun(e){
    // console.log('开始游戏');
    // $("#startGameBtn").addClass("motion100");
    $("#startGameBtn").addClass("ScaleNone");
    // $("#startGameBtn").fadeOut(500);
    $("#zhen22").addClass("ClasszhenRotate");
    setTimeout(function(){
        ele('startGameBtn').className = ele('startGameBtn').className.replace('motion100', ' ');
        gameState = true;
        $('#gameDiv').hide();
        $('#gameMain').show();
        doFun();//开始处理选项
        moveFun();//开始移动声波
        $("#yinfu").addClass("motion101");

        $("#startGameBtn").removeClass("ScaleNone");
        $("#zhen22").removeClass("ClasszhenRotate");

        au.play();
        au.loop = true;

        var bgAu = document.getElementById('bgAudio');
        bgAu.pause();
    },1000);
    game5Step = 0;
}

function doFun(){
    if(answerArr.length != 0){
        answerArr = [];
    }
    if(answerImgArr.length != 0){
        answerImgArr = [];
    }

    RandomArr = randomArrFun(93,94);
    
    answerArr[0] = AllArr[RandomArr[0]];
    answerArr[1] = AllArr[RandomArr[1]];
    answerArr[2] = AllArr[RandomArr[2]];
    answerArr[3] = TrueVoArr[TrueArr[index1]];

    answerImgArr[0] = AllImgArr[RandomArr[0]];
    answerImgArr[1] = AllImgArr[RandomArr[1]];
    answerImgArr[2] = AllImgArr[RandomArr[2]];
    answerImgArr[3] = trueImgArr[TrueArr[index1]];

    TrueAnswerTemp = TrueVoArr[TrueArr[index1]];

    au.src = VoArr[TrueArr[index1]];
    au.play();
    au.loop = true;

    RandomArrInner = randomArrFun(3,4);
    // console.log(RandomArrInner)
    
    $('#check11').html(answerArr[RandomArrInner[0]]);
    $('#check21').html(answerArr[RandomArrInner[1]]);
    $('#check31').html(answerArr[RandomArrInner[2]]);
    $('#check41').html(answerArr[RandomArrInner[3]])

    $("#check11").css("background","url("+answerImgArr[RandomArrInner[0]]+") no-repeat center center");
    $("#check21").css("background","url("+answerImgArr[RandomArrInner[1]]+") no-repeat center center");
    $("#check31").css("background","url("+answerImgArr[RandomArrInner[2]]+") no-repeat center center");
    $("#check41").css("background","url("+answerImgArr[RandomArrInner[3]]+") no-repeat center center");

    $("#check11").css("background-size","130px 50px");
    $("#check21").css("background-size","130px 50px");
    $("#check31").css("background-size","130px 50px");
    $("#check41").css("background-size","130px 50px");
}
var canTouchCheck = true;
//选项一
addListener('check1',check1BtnFun);
function check1BtnFun(e){
    if(!gameState)return;
    if(!canTouchCheck)return;
    canTouchCheck = false;
	var aa = $('#check11').html();
    // console.log(TrueAnswerTemp);
    
    index1++;
    if(aa == TrueAnswerTemp){
        // console.log('success');
        gameScoreNum += 10;
        game5Step++;
        $("#check1Y").fadeIn(300).fadeOut(300,function(){canTouchCheck=true;});
        cs.play();
    }else{
        // console.log('fail');
        game5Step = 0;
        $("#check1N").fadeIn(300).fadeOut(300,function(){canTouchCheck=true;});
        cf.play();
    }
    doFun();
}
//选项二
addListener('check2',check2BtnFun);
function check2BtnFun(e){
    if(!gameState)return;
    if(!canTouchCheck)return;
    canTouchCheck = false;
    var bb = $('#check21').html();
    // console.log(TrueAnswerTemp);
    
    index1++;
    if(bb == TrueAnswerTemp){
        // console.log('success');
        gameScoreNum += 10;
        game5Step++;
        $("#check2Y").fadeIn(300).fadeOut(300,function(){canTouchCheck=true;});
        cs.play();
    }else{
        // console.log('fail');
        game5Step = 0;
        $("#check2N").fadeIn(300).fadeOut(300,function(){canTouchCheck=true;});
        cf.play();
    }
    doFun();
}
//选项三
addListener('check3',check3BtnFun);
function check3BtnFun(e){
    if(!gameState)return;
    if(!canTouchCheck)return;
    canTouchCheck = false;
	var cc = $('#check31').html();
    
    // console.log(TrueAnswerTemp);
    index1++;
    if(cc == TrueAnswerTemp){
        // console.log('success');
        gameScoreNum += 10;
        game5Step++;
        $("#check3Y").fadeIn(300).fadeOut(300,function(){canTouchCheck=true;});
        cs.play();
    }else{
        // console.log('fail');
        game5Step = 0;
        $("#check3N").fadeIn(300).fadeOut(300,function(){canTouchCheck=true;});
        cf.play();
    }
    doFun();
}
//选项四
addListener('check4',check4BtnFun);
function check4BtnFun(e){
    if(!gameState)return;
    if(!canTouchCheck)return;
    canTouchCheck = false;
	var dd = $('#check41').html();

    // console.log(TrueAnswerTemp);
    index1++;
    if(dd == TrueAnswerTemp){
        // console.log('success');
        gameScoreNum += 10;
        game5Step++;
        $("#check4Y").fadeIn(300).fadeOut(300,function(){canTouchCheck=true;});
        cs.play();
    }else{
        // console.log('fail');
        game5Step = 0;
        $("#check4N").fadeIn(300).fadeOut(300,function(){canTouchCheck=true;});
        cf.play();
    }
    doFun();
}

function moveFun(){
    // var ele1 = document.getElementById('moveToRight1').style;
    // var ele2 = document.getElementById('moveToRight2').style;
    // var temp1 = 0;
    // var temp2 = -100;

    // var gameTime = 10;//游戏时间
    var gameTime = 30;//游戏时间
    var gameTimeCheck = 0;

    tick = setInterval(function(){
        // temp1 += .1;
        // temp2 += .1;
        // if(Math.ceil(temp1) == 100){
        //     temp1 = 0;
        // }
        // ele1.left = temp1+"%";

        // if(Math.ceil(temp2) == 0){
        //     temp2 = -100;
        // }
        // ele2.left = temp2+"%";
        if(gameTime < 0)return;
        gameTimeCheck++;
        // console.log(gameTimeCheck)
        var gameTimeTemp = 0;
        if(gameTimeCheck == 180){
            gameTime--;
            gameTimeCheck = 0;
            gameTimeCheck = gameTime;
            if(gameTime<10){
                gameTimeCheck = "0"+gameTime;
            }
            $('#timeDivNum').html(gameTimeCheck);
        }
        //更新分数
        if(game5Step == 5){
            game5Step = 0;
            gameScoreNum += 50;
        }
        $('#scoreDivNum').html(gameScoreNum);

        //更新时间
        if(gameTime <= 0){
            console.log('时间到');
            if(pageCheck == 1){
                sendScore(gameScoreNum);
            }else if(pageCheck == 2){
                sendScore1(gameScoreNum);
            }
            
            gameTime = 0;
            gameState = false;
            gameEnd(gameScoreNum);
            au.pause();

            var bgau1 = document.getElementById('bgAudio');
            bgau1.src="./res/bg.mp3";
            bgau1.play();
            bgau1.loop = true;

            window.clearInterval(tick);
            // return;
        }
    });
}

function gameEnd(score){
    $('#gameMain').hide();//隐藏游戏页
    $('#endPage').show();//弹出结束页
    var sharestr = "屏幕粉";
    var gameLevelNameTemp = 1;
    if(score<=50 && score >= 0){
        gameLevelNameTemp = 1;
    }else if(score <= 100 && score >= 60){
        sharestr = "忠实粉";
        gameLevelNameTemp = 2;
    }else if(score <= 200 && score >= 110){
        sharestr = "超级粉";
        gameLevelNameTemp = 3;
    }else if(score <= 400 && score >= 210){
        sharestr = "大腿粉";
        gameLevelNameTemp = 4;
    }else if(score >= 410){
        sharestr = "私生粉";
        gameLevelNameTemp = 5;
    }
    if(pageCheck == 1){
        $('#score1').html(score);
        // $('#score2').html(gameLevelNameTemp);
        onb(score);
        $("#Appraisal").css("background","url(./pingjia/"+gameLevelNameTemp+".png)");
    }else if(pageCheck == 2){
        // console.log('success')
        onb(score);
        $("#Appraisal").css("background","url(./pingjia/"+gameLevelNameTemp+".png)");
        $("#Appraisal").css("background-size","130px 40px")
        onb1(score/2);
    }

    //linkstr = 'http://m.muzhibuluo.com/biz/musicnation_s01e01/startup?cc='+getQueryString('cc')+'&instance='+aVal;
    //
    //wx.ready(function () {
    //
    //    //分享给朋友
    //    wx.onMenuShareAppMessage({
    //        title: "我有容祖儿演唱会门票，约吗？！",
    //        desc: "听歌识曲获得了"+score+"分，我是容祖儿的"+sharestr+"！你的演唱会门票已备好，快进来拿！",
    //        link: ''+linkstr+'',
    //        imgUrl: ''+iconstr+'',
    //        trigger: function (res) {
    //        },
    //        success: function (res) {
    //
    //            _czc.push(["_trackEvent", "分享", "share", "朋友", 1]);
    //            _hmt.push(['_trackEvent', "分享", "share", "朋友", 1]);
    //        },
    //        cancel: function (res) {
    //        },
    //        fail: function (res) {
    //        }
    //    });
    //    //分享到朋友圈
    //    wx.onMenuShareTimeline({
    //        title: "听歌识曲获得了"+score+"分，我是容祖儿的"+sharestr+"！你的演唱会门票已备好，快进来拿！",
    //        desc: "听歌识曲获得了"+score+"分，我是容祖儿的"+sharestr+"！你的演唱会门票已备好，快进来拿！",
    //        link: ''+linkstr+'',
    //        imgUrl: ''+iconstr+'',
    //        trigger: function (res) {
    //        },
    //        success: function (res) {
    //            _czc.push(["_trackEvent", "分享", "share", "朋友圈", 1]);
    //            _hmt.push(['_trackEvent', "分享", "share", "朋友圈", 1]);
    //        },
    //        cancel: function (res) {
    //        },
    //        fail: function (res) {
    //        }
    //    });
    //})
    //wx.error(function (res) {
    //    console.log(res.errMsg);
    //});
    
}

function onb(val){
    var obj = factor(val);
    // document.write("百位:"+obj.bai+"十位:"+obj.shi+"个位:"+obj.ge);
    $("#scoreBai").show();
    $("#scoreShi").show();
    $("#scoreGe").show();
    $('#scoreShi').css('margin-left','10px');
    $('#scoreGe').css('margin-left','100px');

    if(obj.bai == 0){
        $("#scoreBai").hide();
        $('#scoreShi').css('margin-left','50px');
        $('#scoreGe').css('margin-left','90px');
    }else{
        $('#scoreBai').css('background','url(./num/'+obj.bai+'.png)');
    }

    if(obj.bai == 0 && obj.shi == 0){
        $("#scoreShi").hide();
        $('#scoreGe').css('margin-left','70px');
    }else{
        $('#scoreShi').css('background','url(./num/'+obj.shi+'.png)');
    }

    if(obj.bai == 0 && obj.shi == 0 && obj.ge == 0){
        $('#scoreGe').css('background','url(./num/0.png)');
    }else{
        $('#scoreGe').css('background','url(./num/'+obj.ge+'.png)');
    }
}
function onb1(val){
    var obj = factor(val);
    // document.write("百位:"+obj.bai+"十位:"+obj.shi+"个位:"+obj.ge);
    $("#scoreBai1").show();
    $("#scoreShi1").show();
    $("#scoreGe1").show();
    $('#scoreShi1').css('margin-left','10px');
    $('#scoreGe1').css('margin-left','100px');

    if(obj.bai == 0){
        $("#scoreBai1").hide();
        $('#scoreShi1').css('margin-left','50px');
        $('#scoreGe1').css('margin-left','90px');
    }else{
        $('#scoreBai1').css('background','url(./num/'+obj.bai+'.png)');
    }

    if(obj.bai == 0 && obj.shi == 0){
        $("#scoreShi1").hide();
        $('#scoreGe1').css('margin-left','65px');
    }else{
        $('#scoreShi1').css('background','url(./num/'+obj.shi+'.png)');
    }

    if(obj.bai == 0 && obj.shi == 0 && obj.ge == 0){
        $('#scoreGe1').css('background','url(./num/0.png)');
    }else{
        $('#scoreGe1').css('background','url(./num/'+obj.ge+'.png)');
    }
}
function factor(n){
    var object = {};
    this.a = Math.floor(n/100);
    this.b = (n - (this.a * 100))%10;
    this.c = (n - ((this.a * 100) + this.b))/10;

    object = {
        bai:this.a,
        shi:this.c,
        ge:this.b
    }
    return object;
}
function randomArrFun(num,end){
    var arrTemp = [];
    for(var i=0;i<=num;i++){//產生隨機
        flag = 1;
        n=parseInt(Math.random()*end);
        for (var j=0;j<i;j++){
            if(arrTemp[j]==n){
                flag=0;
                i--;
            }
        }
        if(flag==1){
            arrTemp[i]=n;
        }
    }
    return arrTemp;
}