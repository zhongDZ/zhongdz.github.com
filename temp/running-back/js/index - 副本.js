/**
 * Created by zhongdezong on 2017/1/6.
 */
 
var rule_scroll = new IScroll("#rule_wrapper", {click: true});
var list_scroll = new IScroll("#phb_wrapper", {click: true});

var TOOL = {
    BtnFunc : function(_dom, _callFunc){
        $('.'+_dom).click(function(){
            if(typeof(_callFunc) == 'function'){
                _callFunc();
            }
        })
    }
}

TOOL.BtnFunc('rule_close_btn', function(){
    $('.rulePage').addClass('hide');
    $('.rulePage').removeClass('bounceInUp animate');
});