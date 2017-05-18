/**
 * Created by zhongdezong on 2016/7/6.
 */

var global_game_start = false;//游戏是否开始
var _awardInfoId = null;
var _prizeCode = 0;//奖品id
var _prizeName = null;//奖品
var pageNum = 1;//控制所需要获得第几页的数据
var totalPage = 0;//记录总行数
var openDialog = true;//当前是否可以打开弹窗

/******************************ajax********************************/
var GD = function(){};

var startGame = function(_callFunc){
    $.ajax({
        url : system.ajaxStartGameURL,
        data : {
            awardId : system.awardId,
            gameId : system.gameId,
            custNbr : system.custNbr,
            deviceId : system.deviceId,
            merchant_no : system.merchant_no
        },
        type : 'POST',
        dataType : 'json',
        async : false,
        success : function(dt) {
            if (dt != null) {
                _callFunc(dt);
            }
        }
    });
}

var phbFunc = function(page){
    $.ajax({
        url : system.ajaxRankingListURL,
        data : {
            awardId : system.awardId,
            gameId : system.gameId,
            custNbr : system.custNbr,
            page : page,
            merchant_no : system.merchant_no
        },
        type : 'POST',
        dataType : 'json',
        async : false,
        success : function(dt) {
            if (dt != null) {
                $('.phbPage').removeClass('hide');
                $('.atNow').html(dt.currPagenNum);
                $('.allPage').html(dt.totalPage);
                var html = '';
                for(var i = 0;i < dt.awardInfoList.length;i++){
                    html += '<li>';
                    html +=     '<span>'+dt.awardInfoList[i].showName+'</span>';
                    html +=     '<span>'+dt.awardInfoList[i].prizeName+'</span>';
                    html +=     '<span>'+dt.awardInfoList[i].guessDate+'</span>';
                    html += '</li>';
                }
                $('.phbContentList').html(html)

                totalPage = dt.totalPage;
            }
        }
    });
}

var lottery = function(){
    $.ajax({
        url : system.ajaxLotteryURL,
        data : {
            awardId : system.awardId,
            gameId : system.gameId,
            custNbr : system.custNbr,
            deviceId : system.deviceId,
            merchant_no : system.merchant_no
        },
        type : 'POST',
        dataType : 'json',
        async : false,
        success : function(dt) {
            if (dt != null) {
                if(parseInt(dt.code) == 20){
                    $('.endPage').addClass('hide');
                    switch(parseInt(dt.prizeCode)){
                        case 0:{
                            $('.thxPage').removeClass('hide');
                        };break;
                        case 1:case 2:case 3:{
                            $('.lotterSuccessPage').removeClass('hide');
                            $('.lottery_desc').html(dt.prizeName);

                            //中奖id
                            _awardInfoId = dt.awardInfoId;
                            _prizeCode = dt.prizeCode;
                            _prizeName = dt.prizeName;
                        };break;
                    }
                }else{
                    //操作失败
                    $('.alertPage').removeClass('hide');
                    $('.alertContent').html(dt.msg);
                }
            }
        }
    });
}

var sendScore = function(score, callFunc){
    $.ajax({
        url : system.ajaxDoingGameURL,
        data : {
            score : score,
            gameId : system.gameId,
            custNbr : system.custNbr,
            merchant_no : system.merchant_no
        },
        type : 'POST',
        dataType : 'json',
        async : false,
        success : function(dt) {
            if (dt != null) {
                callFunc(dt);
            }
        }
    });
}

var sendInfo = function(){
    var _name = $('.user_name').val();
    var _phone = $('.user_phone').val();
    $.ajax({
        url : system.ajaxUserInfoURL,
        data : {
            name : _name,
            phone :　_phone,
            awardInfoId : _awardInfoId,
            awardId : system.awardId,
            gameId : system.gameId,
            custNbr : system.custNbr,
            prizeCode : _prizeCode,
            prizeName : _prizeName,
            merchant_no : system.merchant_no
        },
        type : 'POST',
        dataType : 'json',
        async : false,
        success : function(dt) {
            if (dt != null) {
                $('.infoPage').addClass('hide');
                if(parseInt(dt.code) == 20){
                    $('.successPage').removeClass('hide');
                }else{
                    $('.alertPage').removeClass('hide');
                    $('.alertContent').html(dt.msg);

                    setTimeout(function(){
                        $('.alertPage').addClass('hide');
                        $('.alertContent').html(' ');

                        $('.infoPage').removeClass('hide');
                    }, 1000);
                }
            }
        }
    });
}

var check = function() {
    var name = $(".user_name").val();
    var reg = /^[\u4e00-\u9fa5]{2,4}$/;
    var phone = $(".user_phone").val();
    var re = /^1[3|4|5|7|8]\d{9}$/;

    console.log(name, phone)

    if (phone == "" || name == "") {
        alert("请输入姓名和手机号");
        return false;
    }

    if (!phone == "" && !name == "") {
        if (!re.test(phone)) {
            alert("手机号码不正确!");
            $(".user_phone").val("");
            return false;
        }
        if (!reg.test(name)) {
            alert("姓名格式不正确!");
            $(".user_name").val("");
            return false;
        }
    }

    sendInfo();
};

/******************************tool********************************/
var TOOL;
(function(){
    var _this;
    var tool = function(){
        _this = this;
    };
    tool.prototype.init = function(){
        _this.stopScrolling();
    };
    tool.prototype.stopScrolling = function(e){
        document.addEventListener('touchmove', _this.preventDefault, false);
    };
    tool.prototype.preventDefault = function(e){
        e.preventDefault();
    };
    /**
    *弹窗关闭按钮
    *@dom1 string dom节点
    *@dom2 string dom节点
    *ex: TOOL.closeFun('.rule_close_btn', '.rulePage');
    */
    tool.prototype.closeFun = function(dom1, dom2, fun2){
        $(dom1).on('touchstart', function(){
            if(dom2 != ''){
               $(dom2).addClass('hide'); 
            }

            if(typeof(fun2) === 'function'){
                fun2();
            }
        }, false);
    };
    /**
    *初始化加载
    *@t num 时间
    */
    tool.prototype.loading = function(t){
        $('.loadingPage').removeClass('hide');
        setTimeout(function(){
            $('.loadingPage').addClass('hide');
            $('.beginPage').removeClass('hide');
            $('#gameCanvas').removeClass('hide');
        }, t);
    }
    /**
    *显示某个弹窗
    *@dom string dom节点
    *@aniClass string 动画类
    *@callFun function 回调
    */
    tool.prototype.showDialog = function(dom, aniClass, callFUn){
        $(dom).removeClass('hide');
        $(dom).addClass('animated ' + aniClass);
        _this.endAni(dom, callFUn)
    };
    /**
    *动画结束时事件
    *@dom string dom节点
    *@callFun function 回调
    */
    tool.prototype.endAni = function(dom, callFUn){
        var middleDom = $(dom)[0];
        middleDom.addEventListener("webkitAnimationEnd", function(){
            if(typeof(callFUn) === 'function'){
                callFUn();
            }
        }, false); 
    };

    TOOL = new tool();
    TOOL.init();
})();
/******************************tool********************************/

(function(){
	//活动规则关闭按钮
	TOOL.closeFun('.rule_close_btn', '.rulePage', function(){
	    $('.rulePage').addClass('hide');
	    $('.rulePage').removeClass('animated bounceIn');

	    setTimeout(function(){
	    	openDialog = true;
	    },300);
	});

	//抽奖记录关闭按钮
	TOOL.closeFun('.phb_close_btn', '.phbPage', function(){
	    $('.phbPage').addClass('hide');
	    $('.phbPage').removeClass('animated bounceIn')

	    setTimeout(function(){
	    	openDialog = true;
	    },300);
	});
	//排行榜关闭按钮
    TOOL.closeFun('.phb_close_btn', '.phbPage');
    $('.upPageBtn').off().on('touchstart', function(){
        pageNum--;
        if(pageNum < 1){
            pageNum = 1;
            return;
        }
        phbFunc(pageNum);
    });
    $('.downPageBtn').off().on('touchstart', function(){

        pageNum++;
        if(pageNum > totalPage){
            pageNum = totalPage;
            return;
        }
        phbFunc(pageNum);
    });

	//重新开始
    TOOL.closeFun('.replay_btn', '.endPage', function(){
        cc.director.runScene(new gameScene());
        $('.gameEndPage').addClass('hide');
        $('.beginPage').removeClass('hide');

        setTimeout(function(){
        	global_game_start = false;
        }, 300);
    });

    //抽奖
    $('.lottery-1').off().on('touchstart', function(){
        lottery();
    });
    $('.lottery-2').off().on('touchstart', function(){
        lottery();
    });
    $('.lottery-3').off().on('touchstart', function(){
        lottery();
    });

    //前往登记信息
    TOOL.closeFun('.lottery-send', '.lotterSuccessPage', function(){
        $('.infoPage').removeClass('hide');
    });

    //发送信息
    $('.info_send_btn').off().on('touchstart', function(){
        check();
    });

    //发送信息关闭按钮
    TOOL.closeFun('.success_close', '.successPage', function(){
        cc.director.runScene(new gameScene());
        $('.beginPage').removeClass('hide');
    });

    //谢谢参与关闭
    $('.thx_close').off().on('touchstart', function(){
        cc.director.runScene(new gameScene());
        cc.director.resume();
        $('.thxPage').addClass('hide');
        $('.beginPage').removeClass('hide');

        setTimeout(function(){
        	global_game_start = false;
        }, 300);
    });

    //了解更多按钮
    TOOL.closeFun('.more_btn', '', function(){
        window.location.href = g_link;
    });
})();

window.onload = function(){
    resourceCallBack();
}