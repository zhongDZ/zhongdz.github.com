var data = [
    [
        {
            "gameImg"       : "",
            "gameName"      : "拼图大作战",
            "gameDescrible" : "只需要把打乱的图片恢复到右上角所示小图标就算成功了。接下来～点击试一试",
            "gameLink"      : "http://zhongdz.github.io/game/puzzle/startup.html"
        },
        {
            "gameImg"       : "",
            "gameName"      : "拼图大作战",
            "gameDescrible" : "只需要把打乱的图片恢复到右上角所示小图标就算成功了。接下来～点击试一试",
            "gameLink"      : "http://zhongdz.github.io/game/puzzle/startup.html"
        },
        {
            "gameImg"       : "",
            "gameName"      : "拼图大作战",
            "gameDescrible" : "只需要把打乱的图片恢复到右上角所示小图标就算成功了。接下来～点击试一试",
            "gameLink"      : "http://zhongdz.github.io/game/puzzle/startup.html"
        }
    ],
    [
        {
            "gameImg"       : "",
            "gameName"      : "拼图大作战",
            "gameDescrible" : "只需要把打乱的图片恢复到右上角所示小图标就算成功了。接下来～点击试一试",
            "gameLink"      : "http://zhongdz.github.io/game/puzzle/startup.html"
        },
        {
            "gameImg"       : "",
            "gameName"      : "拼图大作战",
            "gameDescrible" : "只需要把打乱的图片恢复到右上角所示小图标就算成功了。接下来～点击试一试",
            "gameLink"      : "http://zhongdz.github.io/game/puzzle/startup.html"
        },
        {
            "gameImg"       : "",
            "gameName"      : "拼图大作战",
            "gameDescrible" : "只需要把打乱的图片恢复到右上角所示小图标就算成功了。接下来～点击试一试",
            "gameLink"      : "http://zhongdz.github.io/game/puzzle/startup.html"
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
        $('#main').append(html);
    }
}