//
//  HttpClient.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var getQueryParams = function() {
    //get query param
    var option = [];
    var array = location.search.replace('?', '').split('&');
    for (var i = 0; i < array.length; i++) {
        var tmp = array[i].split('=');
        option[tmp[0]] = tmp[1];
    }
    cc.log("httpClient was called");
    cc.log("user_id:" + option["user_id"]);
};

var saveData = function(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:8000/test.html', true);
	xhr.onload = function(e) {
	if (this.status == 200) {
		console.log(this.responseText);
	}
	};
	xhr.send();
};

var loadData = function(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:8000/test.html', true);
	xhr.onload = function(e) {
	if (this.status == 200) {
		console.log(this.responseText);
	}
	};
	xhr.send();
};

var goTwitter = function(score){
	var res = "http://twitter.com/share?url=http://oggata.github.io/Territory/&text=ステージクリア!!";
	window.open(res,'_blank');
};

var goTwitterClear = function(score){
	var res = "http://twitter.com/share?url=http://oggata.github.io/Territory/&text=全ステージ制覇しました!!!";
	window.open(res,'_blank');
};

var goFacebook = function(score){
	var url = encodeURIComponent('http://oggata.github.io/Territory/');
	var res = "https://www.facebook.com/sharer/sharer.php?u=" + url;
	window.open(res,'_blank')
};