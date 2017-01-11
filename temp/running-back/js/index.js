//阻止浏览器的默认行为
(function stopDefault(e) {
    //阻止默认浏览器动作(W3C)
    if ( e && e.preventDefault){
        e.preventDefault();
    }
})();

var beginSeletCharacter = false;

$("#code").empty();
var str = window.location.href + '?version=1';

$("#code").qrcode({
    render: "table",
    width: 300,
    height:300,
    text: str
});

$('.atNow').click(function(){
	beginSeletCharacter = true;
    $('.codeConterntPage').addClass('hide');
});