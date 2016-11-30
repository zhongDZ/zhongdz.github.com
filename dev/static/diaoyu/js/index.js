/**
 * Created by zhongdezong on 2016/7/6.
 */
 
var myscroll1 = new IScroll("#rule_wrapper", {click: true});
var myscroll2 = new IScroll("#phb_wrapper", {click: true});
var myscroll3 = new IScroll("#prize_wrapper", {click: true});

(function(){
    //奖品列表关闭按钮
    TOOL.closeFun('.prize_close_btn', '.prizePage');
    //活动规则关闭按钮
    TOOL.closeFun('.rule_close_btn', '.rulePage');
    //排行榜关闭按钮
    TOOL.closeFun('.phb_close_btn', '.phbPage');
    //获取信息关闭按钮
    TOOL.closeFun('.info_close_btn', '.infoPage', function(){
        console.log('heree')
    });

    //结束页面
    //再玩一次按钮
    TOOL.closeFun('.playAgain', '.endPage', function(){
        StateManager.g_instance.changeState(beginState);
    });
    //了解更多按钮
    TOOL.closeFun('.seeMore', '', function(){
        $('.sharePage').removeClass('hide');
    });
    //抽奖按钮
    TOOL.closeFun('.lottery', '.endPage', function(){
        StateManager.g_instance.changeState(beginState);
    });

    //分享页
    TOOL.closeFun('.sharePage', '.sharePage', function(){
        $('.sharePage').addClass('hide');
    });

    $('.info_send_btn').off().on('touchstart', function(){
        var _name = $('.user_name').val();
        var _phone = $('.user_phone').val();

        GD.userInfo(_name, _phone, function(data){
            var _code = data.code;
            switch(_code){
                case 0:{
                    TOOL.showDialog('.alertPage', 'fadeInDown', function(){
                        $('.alertPage').removeClass('animated fadeInDown');
                    });
                    $('.alertContent').html('网络出错！');
                }break;
                case 1:{
                    system.isUserInfo = true;
                    $('.infoPage').addClass('hide');
                    
                    GD.rankingList(1, function(data){
                        var _code = data.code;
                        switch(_code){
                            case 0:{
                                TOOL.showDialog('.phbPage', 'bounceIn', function(){
                                    $('.phbPage').removeClass('animated bounceIn');
                                    myscroll2.refresh();
                                });
                                $('.phbContent ul').append('获取失败！');
                                $('.phbContent ul').css({
                                    'width' : '150px',
                                    'height' : '100px',
                                    'font-size' : '26px',
                                    'position' : 'absolute',
                                    'top' : '20px',
                                    'left' : '200px'
                                });
                            }break;
                            case 1:{
                                TOOL.createPhbData(data);
                                TOOL.showDialog('.phbPage', 'bounceIn', function(){
                                    $('.phbPage').removeClass('animated bounceIn');
                                    myscroll2.refresh();
                                });
                            }break;
                            case 2:{
                                TOOL.showDialog('.phbPage', 'bounceIn', function(){
                                    $('.phbPage').removeClass('animated bounceIn');
                                    myscroll2.refresh();
                                });
                                $('.phbContent ul').append('暂无数据！');
                                $('.phbContent ul').css({
                                    'width' : '150px',
                                    'height' : '100px',
                                    'font-size' : '26px',
                                    'position' : 'absolute',
                                    'top' : '20px',
                                    'left' : '200px'
                                });
                            }break;
                        }
                    });
                }break;
            }
        });
    });
})();


window.onload = function(){
    TOOL.loading(1500);
    init(manifest);

    // TOOL.weixin();

    
    TOOL.media({
       musicSrc:"../../static/common/vo/bg_music.mp3",
       musicPlaySrc:"../../static/diaoyu/res/img/mPlay.png",
       musicPauseSrc:"../../static/diaoyu/res/img/mPaused.png"
    });
}