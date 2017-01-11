/**
*排行榜
*@n String 主场景
*@data json 排行榜数据
*/
var listLayer = cc.Layer.extend({
    name : 'listLayer',
    ctor:function(n, data){
        this._super();

        this.initBgLayer();

        this.initBg();

        if(data == "" || data == undefined || data == null){
            this.initFail();
        }else{
            this.init();
        }
    },
    initBgLayer : function(){
        var layer = new cc.LayerColor(cc.color(20,20,20,200));//新建Layer层，将是scrollView的父节点
        layer.x = cc.winSize.width/4 * 0;
        layer.y = cc.winSize.height/4 * 0;
        this.addChild(layer);
    },
    initBg : function(){
        var bg = new cc.Sprite(res.listBg);
        bg.x = size.width/2;
        bg.y = 554;
        this.addChild(bg);
    },
    init:function(){
        var layer = new cc.LayerColor(cc.color(240, 74, 1, 0));//新建Layer层，将是scrollView的父节点
        layer.x = cc.winSize.width/4 * 0;
        layer.y = cc.winSize.height/4 * 0;
        this.addChild(layer);

        // Create the scrollView
        var scrollView = this.scrollView = new ccui.ScrollView();//创建scrollView对象
        scrollView.setDirection(ccui.ScrollView.DIR_VERTICAL);//设置滑动方向，这里设置的是垂直滑动
        scrollView.setTouchEnabled(true);//设置是否可以滑动，此处是
        scrollView.setContentSize(cc.size(500, 830));//设置scrollView对象里显示内容的可见区域大小
     
        scrollView.x = (layer.width - scrollView.width)/2;
        scrollView.y = (layer.height - scrollView.height)/2 - 20;
        layer.addChild(scrollView);//添加到父节点layer
        //此处给scrollView对象添加事件监听，滑动时回调参数函数
        // scrollView.addEventListener(function () {
        //     // console.log("move.....");
        // });

        //设置scrollView整体内容区域，这里是根据json文件的内容多少来定的
        // scrollView.setInnerContainerSize(cc.size(300, dataArr.length>10?350+(dataArr.length-10)*20:350));

        scrollView.setInnerContainerSize(cc.size(500, (280 + 430 * 5)));

        this.initData(null);
    },
    initData : function(data){
        if(data == null || data == undefined){
            for(var i = 0; i < 10; i++){//解析后台json
                var liTemp = new templateLayer(null, 'zhongDZ', "---", (i+1), (i+1));
                liTemp.x = 100;
                liTemp.y = this.scrollView.getInnerContainerSize().height - 110*(i+1);
                this.scrollView.addChild(liTemp,i,i);
            }
        }else{
            for(var i = 0; i < data.list.length; i++){//解析后台json
                var liTemp = new templateLayer(data.list[i].user_img_url, data.list[i].nick_name, "---", (i+1), data.list[i].user_score);
                liTemp.x = 100;
                liTemp.y = this.scrollView.getInnerContainerSize().height - 110*(i+1);
                this.scrollView.addChild(liTemp,i,i);
            }
        }
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
    ctor:function(head, val1, val2, val3, val4){
        this._super();

        this.initListBg(val3);

        //头像
        this.initHead(head, 35, 0);

        this.initName(val1);

        this.initstar(val4);
    },
    initListBg : function(val3){
        var lineTemp = null;
        if(val3%2==0){
            lineTemp = res.line1;
        }else{
            lineTemp = res.line2;
        }

        var _listBg = new sprFactory(this, lineTemp, 150, 0);

        var recordX = -50;
        var test;
        var NOArr = [res.rank_icon_1, res.rank_icon_2, res.rank_icon_3];
        if(val3<4){
            test = new sprFactory(this, NOArr[val3 - 1], recordX, 0);
        }else{
            var text1 = new cc.LabelTTF(val3,"Microsoft YaHei",28,cc.TEXT_ALIGNMENT_LEFT);
            text1.fillStyle = new cc.color(1,1,1);
            text1.x = -50;
            text1.y = 0;
            this.addChild(text1, 10);

            test = new sprFactory(this, res.rank_icon_4, recordX, 0);
        }
    },
    /**
    *处理头像
    *@headRes String 图片资源
    *@x       Num    x坐标
    *@y       Num    y坐标
    */
    initHead : function(headRes, x, y){
        var clipper = new cc.ClippingNode();

        var drawNode = new cc.DrawNode();       
        drawNode.clear();//清除节点缓存
        drawNode.ctor();
        drawNode.drawCircle(cc.p(0,0), 120, 0, 8000, false, 6, cc.color(125, 125, 100, 255));

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

        clipper.scale = 0.4;

        this.addChild(clipper, 0);
    },
    initName : function(val1){
        var name_txt = new cc.LabelTTF(val1,"Microsoft YaHei",24,cc.size(130, 36),cc.TEXT_ALIGNMENT_LEFT);
        name_txt.fillStyle = new cc.color(1,1,1);
        name_txt.x = 160;
        name_txt.y = 0;
        this.addChild(name_txt);
    },
    initstar : function(_score){
        var star_txt = new cc.LabelTTF(_score,"Microsoft YaHei", 24, cc.TEXT_ALIGNMENT_LEFT);
        // star_txt.fillStyle = new cc.color(240,82,81);
        star_txt.fillStyle = new cc.color(0,0,0);
        star_txt.x = 320;
        star_txt.y = 0;
        this.addChild(star_txt);
    }
});