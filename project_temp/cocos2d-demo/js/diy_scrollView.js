var size = {
    "width" : 640,
    "height" : 1024
}
var testScene = cc.Scene.extend({
    ctor:function(){
        this._super();

        var gameBg  = new cc.Sprite(res.gameBg);
        gameBg.x = size.width/2 * 0;
        gameBg.y = size.height/2 * 0;
        this.addChild(gameBg,0);

        this.init();
    },
    init:function(){
        var layer = new cc.LayerColor(cc.color(20,20,20,200));    //新建Layer层，将是scrollView的父节点
        layer.x = cc.winSize.width/4 * 0;
        layer.y = cc.winSize.height/4 * 0;
        this.addChild(layer);  

         // Create the scrollView
        var scrollView = new ccui.ScrollView();        //创建scrollView对象
        scrollView.setDirection(ccui.ScrollView.DIR_VERTICAL); //设置滑动方向，这里设置的是垂直滑动
        scrollView.setTouchEnabled(true);           //设置是否可以滑动，此处是
        scrollView.setContentSize(cc.size(450, 350));     //设置scrollView对象里显示内容的可见区域大小
     
        scrollView.x = (layer.width - 480)/2 + (480 - scrollView.width)/2;   //设置scrollView坐标位置
        scrollView.y = (layer.height - 400)/2 + (400 - scrollView.height)/2; //scrollView.height = 350
        layer.addChild(scrollView);   //添加到父节点layer
            //此处给scrollView对象添加事件监听，滑动时回调参数函数
        scrollView.addEventListener(function () {
            console.log("move.....");
        });

        //设置scrollView整体内容区域，这里是根据json文件的内容多少来定的
        // scrollView.setInnerContainerSize(cc.size(300, dataArr.length>10?350+(dataArr.length-10)*20:350));

        scrollView.setInnerContainerSize(cc.size(300, (200 + 420)));

        // for(var i=0;i<20;i++){
        //     var text = new cc.LabelTTF(i,"Microsoft YaHei",14,cc.TEXT_ALIGNMENT_LEFT);
        //     text.color = cc.color(255,255,0);
        //     text.anchorX = 0;
        //     text.x = 0;
        //     if(i%2 == 1){
        //         text.x = 70;
        //     }
        //     text.y = scrollView.getInnerContainerSize().height-25*(i+1);
     
        //     scrollView.addChild(text);
        // }

        for(var i=0;i<10;i++){
            var aaa = new testLayer(0, (i+1));
            aaa.x = 100;
            aaa.y = scrollView.getInnerContainerSize().height-60*(i+1);
            scrollView.addChild(aaa);
        }
    }
});

var testLayer = cc.Layer.extend({
    ctor:function(val1, val2){
        this._super(val1, val2);

        var test1 = new cc.Sprite(res.test1);
        test1.x = 0;
        test1.y = 0;
        this.addChild(test1);

        var text = new cc.LabelTTF('zhongdezong',"Microsoft YaHei",20,cc.TEXT_ALIGNMENT_LEFT);
        text.x = 100;
        text.y = 0;
        this.addChild(text);


        var text1 = new cc.LabelTTF(val2,"Microsoft YaHei",36,cc.TEXT_ALIGNMENT_LEFT);
        text1.x = 200;
        text1.y = 0;
        this.addChild(text1);
    }
});