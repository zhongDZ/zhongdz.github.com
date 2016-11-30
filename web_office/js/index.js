var data = [
    [
        {
            "gameImg"       : "mysite/images/View/game1.png",
            "gameName"      : "拼图大作战",
            "gameDescrible" : "只需要把打乱的图片恢复到右上角所示小图标就算成功了。接下来～点击试一试",
            "gameLink"      : "http://zhongdz.github.io/game/puzzle/startup.html"
        },
        {
            "gameImg"       : "mysite/images/View/game2.png",
            "gameName"      : "翻翻看",
            "gameDescrible" : "那么，进入游戏，翻开卡片来看看呗！。接下来～点击试一试",
            "gameLink"      : "http://zhongdz.github.io/game/fan/startup.html"
        },
        {
            "gameImg"       : "mysite/images/View/game3.png",
            "gameName"      : "logo采集",
            "gameDescrible" : "踩的越多，游戏得分就越高。接下来～点击试一试",
            "gameLink"      : "http://zhongdz.github.io/game/black/startup.html"
        }
    ],
    [
        {
            "gameImg"       : "mysite/images/View/game4.png",
            "gameName"      : "太空漫步",
            "gameDescrible" : "点击屏幕，帮你的英雄搭桥前去救美女。接下来～点击试一试",
            "gameLink"      : "http://zhongdz.github.io/game/hero/startup.html"
        },
        {
            "gameImg"       : "mysite/images/View/game5.png",
            "gameName"      : "打地鼠",
            "gameDescrible" : "看你用30秒，能打死多少只老鼠呢！别说话，上就对了。接下来～点击试一试",
            "gameLink"      : "http://zhongdz.github.io/game/horse/startup.html"
        },
        {
            "gameImg"       : "mysite/images/View/game6.png",
            "gameName"      : "消消看",
            "gameDescrible" : "什么，看他不爽，在游戏里消灭他，这就是你现在要做的。接下来～点击试一试",
            "gameLink"      : "http://zhongdz.github.io/game/redBao/startup.html"
        }
    ],
    [
        {
            "gameImg"       : "mysite/images/View/game7.png",
            "gameName"      : "贴窗花",
            "gameDescrible" : "装灯结彩的举国同庆的春节里，也不忘贴上窗花为春节多添一分乐趣。接下来～点击试一试",
            "gameLink"      : "http://zhongdz.github.io/game/newYear/startup.html"
        },
        {
            "gameImg"       : "mysite/images/View/game8.png",
            "gameName"      : "射箭",
            "gameDescrible" : "什么，你想去射日，就你现在的水平,元芳说你还是来这里先练习练习。接下来～点击试一试",
            "gameLink"      : "http://zhongdz.github.io/game/shejian/startup.html"
        },
        {
            "gameImg"       : "mysite/images/View/game9.png",
            "gameName"      : "坚持",
            "gameDescrible" : "来来来，你喜欢五仁吗？不喜欢来这里救对了，一起来围剿它。接下来～点击试一试",
            "gameLink"      : "http://zhongdz.github.io/game/yb/startup.html"
        }
    ]
];

function innerGameList(){
    for(var i = 0;i<data.length;i++){
        var html = "<div class=\"row-fluid\">";
        html += "<ul class=\"thumbnails\">";
            for(var j = 0;j < data[i].length; j++){
                html += "<li class=\"span4\">";
                html += "<div class=\"thumbnail\">";
                html += "<img data-src=\"\" alt=\"300x200\" src=\""+data[i][j].gameImg+"\" style=\"width: 300px; height: 200px;\">";
                html += "<div class=\"caption\">";
                html += "<h3>"+data[i][j].gameName+"</h3>";
                html += "<p>"+data[i][j].gameDescrible+"</p>";
                html += "<p><a href=\""+data[i][j].gameLink+"\" target=\"_blank\" class=\"btn btn-primary\">试一试</a></p>";
                html += "</div>";
                html += "</div>";
                html += "</li>";
                console.log(data[i][j].gameName)
            }
        html += "</ul>";
        html += "</div>";
        $('.gameList').append(html);
    }
}