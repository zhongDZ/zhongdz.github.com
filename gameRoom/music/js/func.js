/*构造滚动对象方法*/
var roll = new MessageRoll({
container : document.getElementById("message"), // 滚动的容器
height : 60 + 1 , // 滚动信息条的高度,算上底边框1px,如果没有底边框则不加1
rollElements : "li" // 滚动元素的html标记名称
});
roll.start(2000); //开始滚动,每三秒滚动一次
/*构造滚动对象方法*/

var local = window.localStorage;

var PrizeContent = [];
var PrizeContentId = [];
var PrizeContentIndex = [];

var prizeshow = false;

var ele = function(id){
    return document.getElementById(''+id+'');
}
var addListener = function(id,callfun){
    ele(''+id+'').addEventListener("touchend",callfun,true);
}

// var gameJF = 0;
var gameJF = $("#jifen").html();

var PrizeLevelCheck = 0;

var gameScoreNum = 0;

var ThreeOrFity = 0;//30还是50的代金券

window.onload = function(){//更新积分
    // $("#jifen").html(gameJF);
    onloadFun();

    // console.log($("#Prize2Img"))
    document.getElementById('Prize2Img').src = './res/Prize/3.png';
}

var gameAllCheck = null;
function onloadFun(){
    var loadingNum = 0;
    var tickNum = 0;
    var loadTick = setInterval(function(){
        tickNum++;
        if(tickNum % 10 == 0){
            tickNum = 0;
            loadingNum++;
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

        });
        $("#gouBtn").animate({'top':'45%'},1000,function(){
            $('.carrond1').show();
            $('.carrond4').show();
        });
        $("#likeBtn").animate({'top':'65%'},1000,function(){
            $('.carrond2').show();
            $('.carrond5').show();
        });
        $("#xijieBtn").animate({'top':'73%'},1000,function(){
            $('.carrond3').show();
            $('.carrond6').show();
        });
        // window.clearInterval(loadTick);
    },Timenum);

    gameAllCheck = $("#bbbb").html();
}


var begin = true;
//开始游戏
addListener('startBtn',startBtnFun);
function startBtnFun(e){
    console.log(gameAllCheck)
    if(gameAllCheck == 'true'){//玩过了1次
        console.log("sss");
        gameAllCheck = 'true';
        $("#DoNot").show();
    }else{//没玩过
        console.log('ffff');
        gameAllCheck = 'true';
        $('#mainDiv').hide();
        $('#gameDiv').show();
        $('#startGameBtn').animate({'top':'35%'},1500);
        $("#startGameBtn").addClass('st');
    }
}

//提示
addListener('DoNot',DoNotFun);
function DoNotFun(e){
    $("#DoNot").hide();
}

//购门票按钮
addListener('gouBtn',gouBtnFun);
function gouBtnFun(e){
    // console.log('购门票');
    // window.location.href = 'http://wap.koudaitong.com/v2/goods/ide8fgc8?spm=fake1920143_h1902130';
    $('#haibao').show();
}

//召唤好友
// addListener('tellBtn',tellBtnFun);
// function tellBtnFun(e){
//  console.log('召唤好友');
//  $('#shareDiv').show();
// }

//立刻抽奖
addListener('likeBtn',likeBtnFun);
function likeBtnFun(e){
    // console.log('立刻抽奖');
    $('#alert1').show();
}

addListener('alert13',alert13Fun);
function alert13Fun(e){
    // console.log('取消');
    $('#alert1').hide();
}
addListener('alert12',alert12Fun);
function alert12Fun(){
    lottery();
}
addListener('alert2',alert2Fun);
function alert2Fun(e){
    // console.log('取消');
    $('#alert2').hide();
}

//关闭海报
addListener('haibao',haibaoFun);
function haibaoFun(e){
    // console.log('取消');
    $('#haibao').hide();
}

var lottery = function(){//抽奖接口
    // Zepto.ajax({
    //     type : 'post',
    //     url : '/biz/musicnation_s01e01/lottery',
    //     data : JSON.stringify({
    //         _csrf:_csrf
    //     }),
    //     contentType : "application/json",
    //     dataType : 'json',
    //     beforeSend : function () {
    //     },
    //     success : function (data, status, xhr) {
    //         console.log(data.data)
    //         if(data.data != undefined){
    //             local.setItem('PrizeId',data.data.id);//奖品id 提交资料的时候一带穿给后台
    //         }

    //         $('#alert1').hide();
    //         if(data.success){
    //             var dom = document.getElementById('Prize2Img');
    //             gameJF -= 1000;
    //             $("#jifen").html(gameJF);
    //             var pidTemp = data.data.prizeId;
    //             if(pidTemp <= 0 || pidTemp == 7){
    //                 $('#CJDIV1').show();
    //                 // console.log('1');

    //                 if(pidTemp<=0){
    //                     PrizeLevelCheck = 1;
    //                     console.log(PrizeLevelCheck)
    //                     dom.src = './res/Prize/4.png';
    //                     ThreeOrFity = 30;
    //                     if(pidTemp == -1){
    //                         ThreeOrFity = 30;
    //                     }else if(pidTemp == -2){
    //                         ThreeOrFity = 50;
    //                     }
    //                 }
    //             }else{

    //                 var pidLevel =  parseInt(data.data.prize.level) ;
    //                 console.log(pidLevel);
    //                 PrizeLevelCheck = 3;
    //                 if(pidLevel == 1){
    //                     var dom = document.getElementById('Prize3Img');
    //                     $('#CJDIV2').show();
    //                     dom.src = './res/Prize/5.png';
    //                 }else if(pidLevel == 2){
    //                     var dom = document.getElementById('Prize3Img');
    //                     $('#CJDIV2').show();
    //                     dom.src = './res/Prize/8.png';
    //                 }else if(pidLevel == 3){
    //                     var dom = document.getElementById('Prize3Img');
    //                     $('#CJDIV2').show();
    //                     dom.src = './res/Prize/4.png';
    //                 }else if(pidLevel == 4){
    //                     var dom = document.getElementById('Prize3Img');
    //                     $('#CJDIV2').show();
    //                     dom.src = './res/Prize/11.png';
    //                 }else if(pidLevel == 5){
    //                     var dom = document.getElementById('Prize3Img');
    //                     $('#CJDIV2').show();
    //                     dom.src = './res/Prize/10.png';
    //                 }else if(pidLevel == 6){
    //                     var dom = document.getElementById('Prize2Img');
    //                     $('#CJDIV1').show();
    //                     dom.src = './res/Prize/3.png';
    //                     PrizeLevelCheck = 2;
    //                 }else if(pidTemp == 7){
    //                     $('#CJDIV1').show();
    //                     dom.src = './res/Prize/2.png';
    //                 }



    //                 setTimeout(function(){
    //                     $('#zhezhao').hide();
    //                 },500);
    //             }
    //         }else{//积分不够
    //             $('#alert2').show();
    //         }
    //     },
    //     error : function (xhr, errorType, error) {
    //         console.log('have fail')
    //     }
    // });
}

var sendScore = function(s){//上传自己玩的分数
    // console.log(s)
    // Zepto.ajax({
    //     type : 'post',
    //     url : '/biz/musicnation_s01e01/myScore',
    //     data : JSON.stringify({
    //         _csrf:_csrf,
    //         score:""+s+""
    //     }),
    //     contentType : "application/json",
    //     dataType : 'json',
    //     beforeSend : function () {
    //     },
    //     success : function (data, status, xhr) {
    //         console.log(data);
    //         var all = $("#jifen").html();
    //         var ScoreTemp = parseInt(all) + parseInt(gameScoreNum)
    //         $("#jifen").html(ScoreTemp);
    //     },
    //     error : function (xhr, errorType, error) {
    //         console.log('have fail') 
    //     }
    // });
}

var parizelevelArr = [];
function getPrizeList(){//获取奖品列表
    console.log('获取奖品列表')
    // Zepto.ajax({
    //     type : 'get',
    //     url : "/biz/musicnation_s01e01/myPrize",
    //     data :"",
    //     contentType : "application/json",
    //     dataType : 'json',
    //     beforeSend : function () {
    //     },
    //     success : function (data, status, xhr) {
    //         // console.log(data)
    //         // console.log(data.data[0].name)
    //         // console.log(data.data[0].createTimeStr)
    //         // console.log(data.data[0].prizeId)
    //         // console.log(data.data[0].id)
    //         // console.log(data.data[0].prize)
    //         // if(data.data.length==undefined)return;
    //         $('#prizeListUL').html(" ");
    //         PrizeContent = [];
    //         for(var i=data.data.length-1;i>=0;i--){
    //             var list = "";
    //             list += "<li id=\"prizeListLI\"><div>";

    //             if(data.data[i].prizeId <= 0){
    //                 list += "<span id=\"info1\">门票代金券</span>";
    //                 PrizeContent[i] = '门票代金券';
    //             }else{
    //                 list += "<span id=\"info1\">"+data.data[i].prize.name+"</span>";
    //                 PrizeContent[i] = ""+data.data[i].prize.name+"";
    //             }

    //             PrizeContentId[i] = data.data[i].id;


    //             if(data.data[i].prizeId <= 0){

    //                 parizelevelArr[i] = null;
    //                 var pid = data.data[i].prizeId;
    //                 var temp = null;
    //                 if(pid == -1){
    //                     temp = '30元';
    //                 }else if(pid == -2){
    //                     temp = '50元';
    //                 }else if(pid == -3){
    //                     temp = '100元';
    //                 }else if(pid == -4){
    //                     temp = '200元';
    //                 }
    //                 temp = '50元';
    //                 list += "<span id=\"info2\">"+temp+"</span>";
    //             }else{

    //                 parizelevelArr[i] = data.data[i].prize.level;
    //                 if(data.data[i].prize.level == 7||data.data[i].prize.level == 6){
    //                     list += "<span id=\"info2\">"+data.data[i].prize.content+"</span>";
    //                 }else{
    //                     if(data.data[i].name == null){
    //                         list += "<span id=\"info2\" style=\"background:url(./res/touchBg.png) no-repeat center;background-size: 80px 28px;\" onclick =\"canGet(this)\" title=\""+i+"\" >填写资料</span>";
    //                         // $(".info22").css("background","url(./res/touchBg.png) no-repeat center");
    //                     }else{
    //                         list += "<span id=\"info2\">等待发奖</span>";
    //                     }
    //                 }
    //             }
    //             list += "<span id=\"info3\">"+(data.data[i].createTime).substring(5,10)+"</span>";
    //             list += "</div>";
    //             list += "</li>";
    //             $('#prizeListUL').append(list);
    //         }
    //         setTimeout(function(){
    //             prizeshow = true;
    //         },500)
    //         //prizeshow = true;
    //     },
    //     error : function (xhr, errorType, error) {
    //         console.log('fail')
    //     }
    // })
}

var nowid = 100;

var canGet = function(t){
    if(!prizeshow)return;
    if(t.innerHTML == '填写资料'){
        nowid =  PrizeContentId[t.title];
        if(parizelevelArr[t.title] == 1){
            var dom = document.getElementById('Prize3Img');
            $('#CJDIV2').show();
            dom.src = './res/Prize/5.png';
        }else if(parizelevelArr[t.title] == 2){
            var dom = document.getElementById('Prize3Img');
            $('#CJDIV2').show();
            dom.src = './res/Prize/8.png';
        }else if(parizelevelArr[t.title] == 3){
            var dom = document.getElementById('Prize3Img');
            $('#CJDIV2').show();
            dom.src = './res/Prize/7.png';
        }else if(parizelevelArr[t.title] == 4){
            var dom = document.getElementById('Prize3Img');
            $('#CJDIV2').show();
            dom.src = './res/Prize/11.png';
        }else if(parizelevelArr[t.title] == 5){
            var dom = document.getElementById('Prize3Img');
            $('#CJDIV2').show();
            dom.src = './res/Prize/10.png';
        }else if(parizelevelArr[t.title] == 6){
            var dom = document.getElementById('Prize2Img');
            $('#CJDIV1').show();
            dom.src = './res/Prize/3.png';
        }
        $("#prizeList").hide();
        $("#CJDIV2").show();
        var contentTemp = PrizeContent[t.title];
        if(contentTemp == '门票和五星酒店'){
            document.getElementById('Prize3Img').src = './res/Prize/4.png';
        }else if(contentTemp == ''){

        }
    }
}

//活动细节
addListener('xijieBtn',xijieBtnFun);
function xijieBtnFun(e){
    // console.log('活动细节');
    $('#XJDiv').show();
}

addListener('seeAll',seeAllFun);
function seeAllFun(){
    // console.log('查看奖品');
    $("#XJDiv").hide();
    $("#prizeList").show();
    getPrizeList();
}

//分享页
addListener('shareDiv',shareDivFun);
function shareDivFun(e){
    $('#shareDiv').hide();
}

//活动细节内容页
addListener('XJClose',XJDivFun);
function XJDivFun(e){
    $('#XJDiv').hide();
}

//领取优惠券
addListener('getCoupon',getCouponFun);
function getCouponFun(e){
    console.log('领取优惠券');

    if(PrizeLevelCheck == 1){//代金券
        if(ThreeOrFity == 50){
            window.location.href = 'http://wap.koudaitong.com/v2/ump/promocard/fetch?alias=kiy8ar0o';
        }else if(ThreeOrFity == 30){
            window.location.href = 'http://wap.koudaitong.com/v2/ump/promocard/fetch?alias=kiy8ar0o';
        }
        
    }else if(PrizeLevelCheck == 2){//优惠码
        $("#CJDIV1").hide();
        $("#prizeList").show();
        getPrizeList();
    }else if(PrizeLevelCheck == 3){//实物
        $("#CJDIV1").hide();
        $("#CJDIV2").show();
    }
}

//游戏结束下左
addListener('endTellBtnLeft',endTellBtnLeftFun);
function endTellBtnLeftFun(e){
    // console.log('endTellBtnFun');
    $('#shareDiv').show();
}

//游戏结束下右
addListener('endTellBtnRight',endTellBtnRightFun);
function endTellBtnRightFun(e){
    // console.log('endTellBtnFun');
    $('#yiji').show();
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
    ele("startGameBtn").style.top = '-10%';
    gameScoreNum = 0;
}

//奖品列表关闭按钮
addListener('prizeListClose',prizeListCloseBtnFun);
function prizeListCloseBtnFun(e){
    console.log('prizeListClose');
    $("#prizeList").hide();
    $("#mainDiv").show();
}


var falg1 = false;
var falg2 = false;
var falg3 = false;
function check1(){
    var val1 = $('#info1input').val();
    if(val1 == ''){
         //alert('昵称不能为空')
         console.log('昵称不能为空')
    }else{
        falg1 = true;
    }
}
function check2(){
    var phoneReg = /^[0-9]*[1-9][0-9]*$/;
    var val2 = $('#info2input').val();
    if (val2.length != 11 || !phoneReg.test(val2)) {
        // alert('请输入正确的手机号码');
        console.log('请输入正确的手机号码')
    }else{
        falg2 = true;
    }
}
function check3(){
    var emailReg = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{1,4}$/gi;
    var val3 = $('#info3input').val();
    if (!emailReg.test(val3)) {
         //alert('请输入正确的邮箱');
        console.log('请输入正确的邮箱')
    }else{
        falg3 = true;
    }
}
//提交资料
addListener('submitBtn',submitBtnFun);
function submitBtnFun(e){
    console.log('提交信息');
    alertDivFun();
}
function alertDivFun() {

    check1();
    if(!falg1){
        alert('昵称不能为空')
        return;
    }
    check2();
    if(!falg2){
        alert('请输入正确的手机号码')
        return;
    }
    check3();
    if(!falg3){
        alert('请输入正确的邮箱');
        return;
    }
    if(falg1 && falg2 && falg3){
        $('#alertDiv').show();
    }
    console.log('daf')
}
//确定提交信息
addListener('infoY',infoYFun);
function infoYFun(e){
    console.log('确定');
    if(falg1 && falg2 && falg3){
        console.log('确定');
        var _name = $('#info1input').val();
        var _phone = $('#info2input').val();
        var _email = $('#info3input').val();
        sendInfo(_name,_phone,_email);
        $('#alertDiv').hide();
        $('#alertDivSuccess').show();
        setTimeout(function(){
            $('#CJDIV2').hide();
            $('#alertDivSuccess').hide();
            $('#mainDiv').show();
        },1500);
    }else{
        alert("资料填写不正确。")
        $('#alertDiv').hide();
    }
}
//取消
addListener('infoN',infoNFun);
function infoNFun(e){
    console.log('取消');
    $('#alertDiv').hide();
}

var sendInfo = function(n,p,e){//提交领奖的个人资料
    var temp = local.getItem('PrizeId');
    // console.log("n.."+n+"p.."+p+"e.."+e);
    // Zepto.ajax({
    //     type : 'post',
    //     url : '/biz/musicnation_s01e01/information',
    //     data : JSON.stringify({
    //         _csrf:_csrf,
    //         id:""+nowid+"",
    //         name:""+n+"",
    //         phone:""+p+"",
    //         email:""+e+""
    //     }),
    //     contentType : "application/json",
    //     dataType : 'json',
    //     beforeSend : function () {
    //     },
    //     success : function (data, status, xhr) {
    //         console.log(data)
    //     },
    //     error : function (xhr, errorType, error) {
    //         console.log('have fail')
    //     }
    // });
}


// e.preventDefault();
// e.stopPropagation();

