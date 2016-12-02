var GD = {};

/**
* @param {string} wx_id 玩家唯一的id
* @param {string} nick_name 玩家唯一的id
* @param {callFunc} callFun 回调
* 开启游戏
*/
GD.startGame = function(game_id, callFun){
    $.ajax({
        type: 'post',
        url: system.ajaxStartGameURL,
        data: JSON.stringify({
           game_id : game_id
        }),
        contentType: "application/json",
        dataType: 'json',
        beforeSend: function () { },
        success: function (data) {
            callFun(data);
        },
        error: function (error) {
            console.log("error");
        }
    });
}

/**
* @param {string} user_name 用户名
* @param {string} user_phone 联系方式
* @param {callFunc} callFun 回调
* 提交用户信息
*/
GD.userInfo = function(user_name, user_phone, callFun){
    $.ajax({
        type: 'post',
        url: system.ajaxUserInfoURL,
        data: JSON.stringify({
           user_name : user_name,
           user_phone : user_phone 
        }),
        contentType: "application/json",
        dataType: 'json',
        beforeSend: function () { },
        success: function (data) {
            callFun(data);
        },
        error: function (error) {
            console.log("error");
        }
    });
}

/**
* @param {string} game_score 游戏分数
* @param {callFunc} callFun 回调
* 提交分数
*/
GD.doingGame = function(game_score, callFun){
    $.ajax({
        type: 'post',
        url: system.ajaxDoingGameURL,
        data: JSON.stringify({
            game_score : game_score
        }),
        contentType: "application/json",
        dataType: 'json',
        beforeSend: function () { },
        success: function (data) {
            callFun(data);
        },
        error: function (error) {
            console.log("error");
        }
    });
}

/**
* @param {string} page_num 数据页
* @param {callFunc} callFun 回调
* 排行榜
*/
GD.rankingList = function(page_num, callFun){
    $.ajax({
        type: 'post',
        url: system.ajaxRankingListURL,
        data: JSON.stringify({
            page_num : page_num
        }),
        contentType: "application/json",
        dataType: 'json',
        beforeSend: function () { },
        success: function (data) {
            callFun(data);
        },
        error: function (error) {
            console.log("error");
        }
    });
}

/**
* @param {string} page_num 数据页
* @param {callFunc} callFun 回调
* 奖品列表
*/
GD.getPrizeList = function(page_num, callFun){
    $.ajax({
        type: 'post',
        url: system.ajaxGetPrizeListURL,
        data: JSON.stringify({
            page_num : page_num
        }),
        contentType: "application/json",
        dataType: 'json',
        beforeSend: function () { },
        success: function (data) {
            callFun(data);
        },
        error: function (error) {
            console.log("error");
        }
    });
}

/**
* @param {string} wx_id 用户唯一的id
* @param {callFunc} callFun 回调
* 抽奖
*/
GD.getPrize = function(wx_id, callFun){
    $.ajax({
        type: 'post',
        url: system.ajaxGetPrizeURL,
        data: JSON.stringify({
            wx_id : wx_id
        }),
        contentType: "application/json",
        dataType: 'json',
        beforeSend: function () { },
        success: function (data) {
            callFun(data);
        },
        error: function (error) {
            console.log("error");
        }
    });
}

/**
* 获取微信配置信息
*/
GD.wx = function(){
    $.ajax({
        type: 'post',
        url: '/verify/wechat/jssdk/h5',
        data: JSON.stringify({
            url : encodeURIComponent(window.location.href.split('#')[0])
        }),
        contentType: "application/json",
        dataType: 'json',
        beforeSend: function () { },
        success: function (data) {
            if(data.code === 1){
                wx.config({
                    debug: false,
                    appId: data.data.appId, // 必填，公众号的唯一标识
                    timestamp: data.data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: data.data.nonceStr, // 必填，生成签名的随机串
                    signature: data.data.signature, // 必填，签名
                    jsApiList: [
                        'onMenuShareTimeline', //分享到朋友圈
                        'onMenuShareQQ', //分享到QQ
                        'onMenuShareWeibo', //分享到微博
                        'onMenuShareAppMessage' //发送给朋友
                    ]
                });
            }else{
                console.log('++++++++++++++++++++++++'+data.msg);
            }
        },
        error: function (error) {
            console.log("error");
        }
    });
}

/**
* 获取微信版本号
*/
GD.wx_ver = function(){
    var ua = navigator.userAgent;
    //获取微信版本号：例如5.2.1
    function get(){
     var reg = /MicroMessenger\/([\d\.]+)/i,
         ret = ua.match(reg);
    if (ret && ret[1]){
        return ret[1];
    }
     return false;
    }
    if (typeof WeixinJSBridge != "undefined") {
        if(get()<'6.0'){
            alert('您的微信版本过于陈旧,无法领取卡券,请更新您的微信版本！');
        }
    }
}

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

    tool.prototype.createPhbData = function(data){
        var _data = data.list;
        var _html = '';
        for(var i = 0;i < _data.length; i++){
            _html += '<li>';
            if(i<3){
                _html +=     '<span class="num_'+(i+1)+'"></span>';
            }else{
                _html +=     '<span>'+(i+1)+'</span>';
            }
            _html +=     '<span>';
            _html +=         '<img src='+_data[i].user_img_url+' class="headImg">';
            _html +=     '</span>';
            _html +=     '<span>'+_data[i].nick_name+'</span>';
            _html +=     '<span>'+_data[i].user_score+'分</span>';
            _html += '</li>';
        }

        $('.phbContent ul').append(_html);

        $('.myScore_num').html('第'+data.myAchievement.num+'名');
        $('.myScore_name').html(data.myAchievement.wx_name);
        $('.myScore_score').html(data.myAchievement.score+'分');
    }

    /**
    *播放音频
    *@obj object 音频对象
    */
    tool.prototype.media = function(obj){
        var _debug = TOOL.getRequest();
        if(_debug != undefined && _debug.debug != undefined && Boolean(_debug.debug))return;//在url中加入debug=true来控制音频播放 开发阶段不播放

        var audio = new Audio(obj.musicSrc), $music = $("#musicCtrl");
        audio.setAttribute("autoplay", "autoplay");
        audio.setAttribute("loop", "loop");
        document.onreadystatechange = function () {
            if (document.readyState == "complete" && audio.paused) {
                audioPlay();
            }
        };
        $("body").one("touchstart", function () {
            if (audio.paused) {
                audioPlay();
            }
        });
        $music.on("click", musicCtrl);
        function musicCtrl() {
            if (audio.paused) {
                audioPlay();
                return;
            }
            audioPause();
        }

        function audioPlay() {
            audio.play();
            $music.attr("src", obj.musicPlaySrc);
            $music.addClass("mAnim");
        }

        function audioPause() {
            audio.pause();
            $music.attr("src", obj.musicPauseSrc);
            $music.removeClass("mAnim");
        }
    }

    /**
    *初始化加载
    *@t num 时间
    */
    tool.prototype.loading = function(t){
        $('.loadingPage').removeClass('hide');
        setTimeout(function(){
            $('.loadingPage').addClass('hide');
        }, t);
    }

    /**
    *获取url参数
    *
    */
    tool.prototype.getRequest = function(){
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }

    /**
    *返回百分比值
    *@num Num 时间
    */
    tool.prototype.percent = function(num){
        var p = 0;
        if(num == NaN || num == undefined)return p;
        if(num == 0){
            p = 0;
        }else if(num < 30){
            p = Math.random()*40 + 1;
        }else if(num < 60){
            p = Math.random()*20 + 40;
        }else if(num < 85){
            p = Math.random()*20 + 60;
        }else{
            p = Math.random()*19 + 80;
        }

        return p.toFixed(2);
    }

    /**
    * 格式化分享标题等
    *
    */
    tool.prototype.formatText = function(str, num){
        if(str.indexOf("#score#") != -1) {
            if(str.indexOf("#percent#") != -1){
                var temp = str.replace(/(#percent#)/g, this.percent(num));
                str = temp.replace(/(#score#)/g, num);
            }else{
                str = str.replace(/(#score#)/g, num);
            }
        }
        return str;
    }

    /**
    *执行微信分享
    *
    */
    tool.prototype.weixin = function(num){
        GD.wx();

        var _title = '',
            _desc = '';

        if(num == '' || num == 0 || num == undefined){
            _title = system.share_title;
            _desc = system.share_desc;
            num = 0;
        }else{
            title = system.share_title_end;
            _desc = system.share_desc_end;
        }
        
        var options = {
            imgUrl : system.share_icon,
            link : system.share_url,
            title : this.formatText(_title, num),
            desc : this.formatText(_desc, num),
            success : function(){
                
            }
        };
        wx.ready(function() {
            wx.onMenuShareTimeline(options);
            wx.onMenuShareAppMessage(options);
            wx.onMenuShareQQ(options);
            wx.onMenuShareWeibo(options);
        });
    }

    TOOL = new tool();
    TOOL.init();
})();