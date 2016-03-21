/**
*排行榜
*@n String 主场景
*@data json 排行榜数据
*/
var listLayer = cc.Layer.extend({
    myNum:'--',
    ctor:function(n, data){
        this._super(n, data);

        this.n = n;
        
        var layer = new cc.LayerColor(cc.color(20,20,20,200));//新建Layer层，将是scrollView的父节点
        layer.x = cc.winSize.width/4 * 0;
        layer.y = cc.winSize.height/4 * 0;
        this.addChild(layer);  

        var listBg = new cc.Sprite(res.listBg);
        listBg.x = size.width/2;
        listBg.y = size.height/2;
        this.addChild(listBg);

        var clsoeBtnItem = new cc.MenuItemImage(res.clsoeBtn,res.clsoeBtn,this.clsoeBtnCall,this);
        var clsoeBtnMenu = new cc.Menu(clsoeBtnItem);
        clsoeBtnMenu.x = size.width - 80;
        clsoeBtnMenu.y = size.height - 80;
        this.addChild(clsoeBtnMenu);

        if(data == "" || data == undefined || data == null){
            this.initFail();
        }else{
            this.init();
        }
    },
    init:function(){
        var layer = new cc.LayerColor(cc.color(20,20,20,0));//新建Layer层，将是scrollView的父节点
        layer.x = cc.winSize.width/4 * 0;
        layer.y = cc.winSize.height/4 * 0;
        this.addChild(layer);

        this.mySelf = new cc.LabelTTF('当前排名:第'+this.myNum+'名',"Microsoft YaHei",24,cc.TEXT_ALIGNMENT_CENTER);
        this.mySelf.fillStyle = new cc.color(1,1,1);
        this.mySelf.x = size.width/2;
        this.mySelf.y = size.height - 300;
        this.addChild(this.mySelf);

        // Create the scrollView
        var scrollView = new ccui.ScrollView();        //创建scrollView对象
        scrollView.setDirection(ccui.ScrollView.DIR_VERTICAL); //设置滑动方向，这里设置的是垂直滑动
        scrollView.setTouchEnabled(true);           //设置是否可以滑动，此处是
        scrollView.setContentSize(cc.size(450, 570));     //设置scrollView对象里显示内容的可见区域大小
     
        scrollView.x = (layer.width - 480)/2 + (480 - scrollView.width)/2;   //设置scrollView坐标位置
        scrollView.y = (layer.height - 400)/2 + (400 - scrollView.height)/2 - 150; //scrollView.height = 350
        layer.addChild(scrollView);   //添加到父节点layer
            //此处给scrollView对象添加事件监听，滑动时回调参数函数
        scrollView.addEventListener(function () {
            console.log("move.....");
        });

        //设置scrollView整体内容区域，这里是根据json文件的内容多少来定的
        // scrollView.setInnerContainerSize(cc.size(300, dataArr.length>10?350+(dataArr.length-10)*20:350));

        scrollView.setInnerContainerSize(cc.size(400, (280 + 430 * 7)));

        for(var i=0;i<50;i++){//解析后台json
            var liTemp = new templateLayer(null, 'zhongDZ', "---", (i+1));
            liTemp.x = 80;
            liTemp.y = scrollView.getInnerContainerSize().height-65*(i+1);
            scrollView.addChild(liTemp);
        }
    },
    initFail:function(){
        this.mySelf = new cc.LabelTTF('当前排名:第'+this.myNum+'名',"Microsoft YaHei",24,cc.TEXT_ALIGNMENT_CENTER);
        this.mySelf.fillStyle = new cc.color(1,1,1);
        this.mySelf.x = size.width/2;
        this.mySelf.y = size.height - 300;
        this.addChild(this.mySelf);

        this.mySelf = new cc.LabelTTF('获取数据失败!',"Microsoft YaHei",24,cc.TEXT_ALIGNMENT_CENTER);
        this.mySelf.fillStyle = new cc.color(1,1,1);
        this.mySelf.x = size.width/2;
        this.mySelf.y = size.height/2;
        this.addChild(this.mySelf);
    },
    clsoeBtnCall:function(){
        this.n.adddialog = false;
        this.n.removeChild(this.n.layer_2);
    }
});

/**
*单条信息模板
*@head String 图片资源
*@val1 String 用户名
*@val2 Num    分数
*@val3 Num    排名
*/
var templateLayer = cc.Layer.extend({
    ctor:function(head, val1, val2, val3){
        this._super(head, val1, val2, val3);

        var lineTemp = null;
        if(val3%2==0){
            lineTemp = res.line1;
        }else{
            lineTemp = res.line2;
        }

        var test1 = new cc.Sprite(lineTemp);
        test1.x = 150;
        test1.y = 0;
        this.addChild(test1);

        //头像
        this.initHead(head, -30, 0);

        var name_txt = new cc.LabelTTF(val1,"Microsoft YaHei",24,cc.TEXT_ALIGNMENT_LEFT);
        name_txt.fillStyle = new cc.color(1,1,1);
        name_txt.x = 80;
        name_txt.y = 0;
        this.addChild(name_txt);

        var score_txt = new cc.LabelTTF(val2+"分","Microsoft YaHei",24,cc.TEXT_ALIGNMENT_LEFT);
        // score_txt.fillStyle = new cc.color(240,82,81);
        score_txt.fillStyle = new cc.color(255,255,255);
        score_txt.x = 220;
        score_txt.y = 0;
        this.addChild(score_txt);

        var NOArr = [res.NO1, res.NO2, res.NO3];
        if(val3<4){
            var test = new cc.Sprite(NOArr[val3 - 1]);
            test.x = 320;
            test.y = 0;
            this.addChild(test);
        }else{
            var text1 = new cc.LabelTTF(val3,"Microsoft YaHei",36,cc.TEXT_ALIGNMENT_LEFT);
            text1.fillStyle = new cc.color(1,1,1);
            text1.x = 320;
            text1.y = 0;
            this.addChild(text1, 1);
        }
    },
    /**
    *处理头像
    *@headRes String 图片资源
    *@x       Num    x坐标
    *@y       Num    y坐标
    */
    initHead:function(headRes, x, y){
        var clipper = new cc.ClippingNode();

        var drawNode = new cc.DrawNode();       
        drawNode.clear();//清除节点缓存
        drawNode.ctor();
        drawNode.drawCircle(cc.p(0,0), 100, 0, 8000, false, 6, cc.color(125, 125, 100, 255));

        clipper.setStencil(drawNode);

        var headTemp = res.defaultHead;
        if(headRes == '' || headRes == undefined || headRes == null){
            headTemp = res.defaultHead;
        }else{
            headTemp = headRes;
        }
        var sprite = new cc.Sprite(headTemp);
        clipper.addChild(sprite);
        clipper.x = x;
        clipper.y = y;

        clipper.scale = 0.3;

        this.addChild(clipper, 0);
    }
});