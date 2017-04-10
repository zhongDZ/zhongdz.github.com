// 主页滚动加载
var wlHomeListOperation = function() {
    // 加载flag
    var loading = false;
    // 最多可加载的条目,以防不必要的加载
    var maxItems = 999;
    // 每次加载添加多少条目
    var itemsPerLoad = 0;
    // 上次加载的序号
    var lastIndex = 0;
    /**
     * 生成列表元素
     * @param {[type]} data    [description]
     * @param {[type]} lastIndex [description]
     */
    function addItems(data, lastIndex) {
        // 生成新条目的HTML
        var html = '';
        var number = data.length; //data的长度
        if (number <= 0) {
            loading = true; //设置不用加载
        }
        for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
            html += $("#tpl_home_position_list").html(); //假数据
        }
        // 添加新条目
        $('.infinite-scroll-bottom .list-container').append(html);
    }

    /**
     * ajax请求数据
     * 参数未定
     * @return {[type]} [description]
     */
    function getResumeList() {
        $.ajax({
            url: ' ',
            type: 'POST',
            dataType: 'json',
            data: {},
            cache: false,
            beforeSend: function() {},
            success: function(result) {
                // 重置加载flag
                loading = false;
                if (lastIndex >= maxItems) {
                    // 加载完毕，则注销无限加载事件，以防不必要的加载
                    $.detachInfiniteScroll($('.infinite-scroll'));
                    // 删除加载提示符
                    $('.infinite-scroll-preloader').remove();
                    return;
                }
                /*888888888888888888888888*/
                // do something
                /*888888888888888888888888*/


                // 更新最后加载的序号
                lastIndex = $('.list-container li').length;
                //容器发生改变,如果是js滚动，需要刷新滚动
                $.refreshScroller();
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                // 重置加载flag
                loading = false;
                if (lastIndex >= maxItems) {
                    // 加载完毕，则注销无限加载事件，以防不必要的加载
                    $.detachInfiniteScroll($('.infinite-scroll'));
                    // 删除加载提示符
                    $('.infinite-scroll-preloader').remove();
                    return;
                }

                //do something
                var result = [1, 1, 1];
                // 添加新条目
                addItems(result, lastIndex);


                // 更新最后加载的序号
                lastIndex = $('.list-container li').length;
                //容器发生改变,如果是js滚动，需要刷新滚动
                $.refreshScroller();
            }
        });
    };

    return {
        init: function() {
            //预先加载数据
            getResumeList();
            // 注册'infinite'事件处理函数
            $(document).on('infinite', '.infinite-scroll-bottom', function() {
                // 如果正在加载，则退出
                if (loading) return;
                // 设置flag
                loading = true;
                //调用发送请求数据方法
                getResumeList();
            });
            $.init()
        }
    }
};

wlHomeListOperation().init();

//banner 幻灯片
$(function(){
  $("#swiper_container").show();
  $(".swiper-container").swiper({loop: true,autoplay: 3500, });
});