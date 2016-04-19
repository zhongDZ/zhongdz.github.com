$(document).ready(function(){
    //media({
    //    musicSrc:"audio/way.mp3",
    //    musicPlaySrc:"images/mPlay.png",
    //    musicPauseSrc:"images/mPaused.png"
    //});

    function stopScrolling( e ) {
        e.preventDefault();
    }
    document.addEventListener( 'touchmove' , stopScrolling , false );
    //关闭弹窗
    $(".close").on("click",function(){
        var Id =$(this).parents(".popup");
        close(Id)
    });

    $(".btn").on("touchstart",function(){
        $(this).css({"transform": "scale(1.1)", "-webkit-transform":"scale(1.1)" })
    }).on("touchend",function(){
        $(this).css({"transform": "scale(1)", "-webkit-transform":"scale(1)" })
    });

    slideScreen({type:3})


});

function showId(id){
    $(id).css("opacity",0).show();
    setTimeout(function(){
        $(id).addClass("show");
    },1);
}
function close(id){
    id.removeClass("show").addClass("hide");
    setTimeout(function(){
        id.hide().addClass("show").removeClass("hide");
    },500)
}
function media(b) {
    var audio = new Audio(b.musicSrc), $music = $("#musicCtrl");
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
        $music.attr("src", b.musicPlaySrc);
        $music.addClass("mAnim");
    }

    function audioPause() {
        audio.pause();
        $music.attr("src", b.musicPauseSrc);
        $music.removeClass("mAnim");
    }
}
var moveOff, moveOn;

function slideScreen(b) {
    document.addEventListener('touchmove', moveFun, false);
    var distance = 5, //超出距离响应滑动
        slide = 100,//超出执行
        old = 0,
        cur = 0,
        scale = 0,
        nextcur = 0,
        prevcur = 0,
        $section = $(".pt-page"),
        $move = $("#page"),
        setLength = 0,
        $slide = '',
        translate = '',
        setTime,
        isSlideIng=false;
    if (b.type == 1 || b.type == 3) {
        translate = "translateY";
        setLength = document.getElementById("page").offsetHeight;
    } else if (b.type == 2 || b.type == 4) {
        translate = "translateX";
        setLength = document.getElementById("page").offsetWidth;
    }

    $(".pt-page:first-of-type").addClass("firstSection").siblings().hide();
    $(".pt-page:last-of-type").addClass("lastSection");
        //.css({transform: translate + '(-' + setLength + 'px) ','-webkit-transform': translate + '(-' + setLength + 'px) '});
    $section.first().addClass("slide");
    $slide = $("body").find(".slide");

    moveOn = function () {
        $move.on("touchstart", function (e) {
            start(e);
        }).on("touchmove", function (e) {
            move(e);
        }).on("touchend", function () {
            end(cur);
        });
    };
    moveOff = function () {
        $move.off()
    };
    if($section.length>1){
        moveOn();
        $(".slideTips").show();
    }else{
        moveOff();
        $(".slideTips").hide();
    }
    function start(e,touche) {

        isSlideIng =true;
        moveSwitch();
        if(setTime){
            clearTimeout(setTime);
            setTime = null;
        }
        $(".slide").show();
        if($slide.hasClass("firstSection")){
            $(".slide").next().show();
            $section.last().show();
        }else if($slide.hasClass("lastSection")){
            $(".slide").prev().show();
            $section.first().show();
        }else{
            $(".slide").prev().show();
            $(".slide").next().show();
        }
        $section.css({"transition-duration": "0ms","-webkit-transition-duration": "0ms", opacity: '1'});
        if(touche!=1){
            if (b.type == 1 || b.type == 3) {
                old = e.touches[0].pageY;
            } else if (b.type == 2 || b.type == 4) {
                old = e.touches[0].pageX;
            }
        }
        cur = 0;
        scale = 0;
        nextcur = 0;
        prevcur = 0;
        $slide.siblings().find(".element").hide();
    }
    var isdab, isFinger;
    function moveSwitch() {
        if ($slide.hasClass("daub") && !isdab) {
            moveOff();
            isdab = true;
        }
        if ($slide.hasClass("fingerprint") && !isFinger) {
            moveOff();
            isFinger = true;
        }
    }
    function move(e,touche,c) {
        if(isSlideIng){
            if(touche!=1){
                if (b.type == 1 || b.type == 3) {
                    cur = e.touches[0].pageY - old;
                } else if (b.type == 2 || b.type == 4) {
                    cur = e.touches[0].pageX - old;
                }
            }else{
                cur= c
            }
            prevcur = -setLength + cur * 1.2;
            nextcur = setLength + cur * 1.2;

            if ($slide.hasClass("firstSection") && cur > distance) {

                moveSlide($(".lastSection"), -setLength);

            } else if ($slide.hasClass("lastSection") && cur < -distance) {

                moveSlide($(".firstSection"), setLength);

            } else if (cur < -distance) {

                moveSlide($slide.next(), setLength);

            } else if (cur > distance) {

                moveSlide($slide.prev(), -setLength);

            }
        }
    }
    function end(cur) {
        if(isSlideIng){
            if ($slide.hasClass("firstSection") && cur > slide) {
                endSlide($(".lastSection"), $slide, setLength)
            } else if ($slide.hasClass("lastSection") && cur < -slide) {
                endSlide($(".firstSection"), $slide, -setLength);
            } else if (cur < -slide) {
                endSlide($slide.next(), $slide, -setLength);
            } else if (cur > slide) {
                endSlide($slide.prev(), $slide, setLength);
            } else if (cur < slide && cur > -slide) {
                noSlide();
            }
        }
    }

    function moveSlide($newDiv, moveing, cur, scale) {
        if (cur == "" && scale == "") {
            cur = 0;
            scale = 1;
        }
        $newDiv.css({
            transform: translate + '(' + moveing + 'px) scale(1)',
            '-webkit-transform': translate + '(' + moveing + 'px) scale(1)',
            zIndex: '2'
        });
        $slide.css({
            transform: translate + '(' + cur / 2 + 'px) scale(' + scale + ')',
            '-webkit-transform': translate + '(' + cur / 2 + 'px) scale(' + scale + ')',
            zIndex: '1'
        });
    }

    function endSlide($newDiv, $curDiv, offsetLength) {
        $section.css({"transition-duration": "400ms","-webkit-transition-duration": "400ms"});
        $curDiv.css({
            transform: translate + '(' + offsetLength + 'px) scale(0.5)',
            '-webkit-transform': translate + '(' + offsetLength + 'px) scale(0.5)',
            zIndex: '1'
        }).removeClass("slide anim");
        $newDiv.css({
            transform: translate + '(0)',
            '-webkit-transform': translate + '(0)',
            zIndex: '2'
        }).addClass("slide anim");
        $slide = $(".slide");
        setTime = setTimeout(function(){
            $(".slide").siblings().hide();
            setTime=null;
            isSlideIng =false;
        },401);
    }

    function noSlide() {
        $slide.css({transform: translate + '(0) ', '-webkit-transform': translate + '(0)', zIndex: '2'});
        setTime = setTimeout(function(){
            $("body").find(".slide").show().siblings().hide();
            isSlideIng =false;
            setTime =null;
        },401);
    }
    function moveFun(e) {//禁止屏幕滑动
        e.preventDefault();
    }
}


