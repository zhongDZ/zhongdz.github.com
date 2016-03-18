var size = {
    "width" : 640,
    "height": 1024
}

var SNAKE_DIR = {
    UP : 8,
    RIGHT : 6,
    DOWN  :2,
    LEFT  : 4
}

var SNAKE_BODY = [];

var score = null;

var beginScene = cc.Scene.extend({
    onEnter:function () {

        this._super();

        var layer = new MenuLayer();

        this.addChild(layer);
    }
})

var MenuLayer = cc.Layer.extend({

    sprite:null,

    helloLabel:null,

    size:null,

    ctor:function () {

        this._super();

        //开始按钮

        var start = new cc.MenuItemImage(

            res.beginBtn,

            res.beginBtn,

            function () {

                cc.log("Menu is clicked!");

                cc.director.runScene(new GameScene());
            }, this);

        start.attr({

            x: size.width/2,

            y: size.height/2-120,

            anchorX: 0.5,

            anchorY: 0.5
        });

        //关于按钮

        var about = new cc.MenuItemImage(

            res.about,

            res.about,

            function () {

                cc.log("Menu is clicked!");

                cc.director.runScene(new AboutGame());
            }, this);

        about.attr({

            x: size.width/2,

            y: size.height/2-280,

            anchorX: 0.5,

            anchorY: 0.5
        });

        var menu = new cc.Menu(start,about);

        menu.x = 0;

        menu.y = 0;

        this.addChild(menu, 1);

        //滚动菜单

        helloLabel = new cc.LabelTTF("看谁最长", "Arial", 38);

        // position the label on the center of the screen

        helloLabel.x = size.width / 2;

        helloLabel.y = size.height-100;


        this.addChild(helloLabel, 5);


        this.sprite = new cc.Sprite(res.gameBg);

        this.sprite.attr({

            x: size.width / 2,

            y: size.height / 2

        });

        this.addChild(this.sprite, 0);

        this.schedule(this.LabelMove,0.2);
    },
    LabelMove : function(){
        helloLabel.setPositionX(helloLabel.getPositionX()-10);

        if(helloLabel.getPositionX() <= -50){

            helloLabel.setPositionX(size.width);
        }
    }
});

var GameScene = cc.Scene.extend({
    m_score:0,
    ctor : function(){
        this._super();

        this.sprite = new cc.Sprite(res.gameBg);

        this.sprite.attr({

            x: size.width / 2,

            y: size.height / 2

        });

        this.addChild(this.sprite, 0);


        var lc = cc.LayerColor.create(cc.color(175,175,175,75),630,630);

        lc.setPosition(cc.p(5,300));

        lc.setAnchorPoint(cc.p(0,0));

        lc.setTag(111);

        this.addChild(lc);

        for(var i = 0;i <= 10; i++){

            //横线

            var node = cc.DrawNode.create();

            node.drawSegment(cc.p(0,i*63),cc.p(630,i*63),1,cc.color(1,1,1,255));

            lc.addChild(node);

            //竖线

            var node1 = cc.DrawNode.create();

            node1.drawSegment(cc.p(i*63,0),cc.p(i*63,630),1,cc.color(1,1,1,255));

            lc.addChild(node1);
        }


        this._head = new SnakeGame(1);

        this._head.setScale(1);

        this._head.now_row = Math.round(Math.random()*9);

        this._head.now_col = Math.round(Math.random()*9);

        this._head.setPosition(cc.p(this._head.now_col*63,this._head.now_row*63));

        lc.addChild(this._head,3);

        //添加食物

        this._food = new SnakeGame(3);

        this._food.setScale(1);

        this._food.now_row = Math.round(Math.random()*9);

        this._food.now_col = Math.round(Math.random()*9);

        this._food.setPosition(cc.p(this._food.now_col*63,this._food.now_row*63));

        lc.addChild(this._food,3);

        // cc.eventManager.addListener({
        //     event:cc.EventListener.TOUCH_ONE_BY_ONE,
        //     swallowTouches:true,
        //     onTouchBegan:this.onTouchBegan,
        //     onTouchMoved:this.onTouchMoved,
        //     onTouchEnded:this.onTouchEnded
        // },this);

        this.scheduleUpdate();

        score = new cc.LabelTTF("分数:0", "Arial", 50);

        score.setPosition(cc.p(size.width/2,size.height - 130));

        this.addChild(score,4);


        var up = new cc.MenuItemImage(res.up,res.up,function () {
            this.touchTODO(8);
        }, this);
        var menu1 = new cc.Menu(up);
        this.addChild(menu1, 1);
        menu1.x = 320;
        menu1.y = 270;

        var right = new cc.MenuItemImage(res.right,res.right,function () {
            this.touchTODO(6);
        }, this);
        var menu2 = new cc.Menu(right);
        this.addChild(menu2, 1);
        menu2.x = 550;
        menu2.y = 150;


        var down = new cc.MenuItemImage(res.down,res.down,function () {
            this.touchTODO(2);
        }, this);
        var menu3 = new cc.Menu(down);
        this.addChild(menu3, 1);
        menu3.x = 320;
        menu3.y = 50;


        var left = new cc.MenuItemImage(res.left,res.left,function () {
            this.touchTODO(4);
        }, this);
        var menu4 = new cc.Menu(left);
        this.addChild(menu4, 1);
        menu4.x = 90;
        menu4.y = 150;
    },
    update:function(){
        this.checkDead();
    },
    move:function(dir){
        switch (dir){

            case 8:

                this._head.now_row = this._head.now_row + 1;

                break;

            case 2:

                this._head.now_row = this._head.now_row - 1;

                break;

            case 4:

                this._head.now_col = this._head.now_col - 1;

                break;

            case 6:

                this._head.now_col = this._head.now_col + 1;

                break;

            default :break;

        }

        this._head.setPosition(cc.p(this._head.now_col*63,this._head.now_row*63));
    },
    touchTODO:function(dir){
        this.move(dir);
        this.checkHit(dir);
    },
    onTouchBegan:function(touch,event){

        cc.log("你点击了当前的屏幕！");

        var target = event.getCurrentTarget();

        var mx = Math.abs((touch.getLocation().x - 5) - target._head.now_col*63);

        var my = Math.abs((touch.getLocation().y - 300) - target._head.now_row*63);

        if(mx > my){//左右移动

            if((touch.getLocation().x - 5) > target._head.now_col*63){

                //向右移动

                dir = SNAKE_DIR.RIGHT;

            }else{

                //向左移动

                dir = SNAKE_DIR.LEFT;

            }
        }else{//上下移动

            if((touch.getLocation().y - 300) > target._head.now_row*63){
                //向上移动
                dir = SNAKE_DIR.UP;
            }else{
                //向下移动
                dir = SNAKE_DIR.DOWN;
            }
        }

        target.move(dir);
        target.checkHit(dir);
    },
    checkHit:function(dir){
        if(this._head.now_col==this._food.now_col && this._head.now_row==this._food.now_row){

            //播放音效

            // cc.audioEngine.playEffect(res.bg_effect);

            cc.log("蛇吃到了食物！");

            //添加分数

            this.m_score += 100;

            score.setString("分数:"+this.m_score);

            //重置食物的位置

            this._food.now_row = Math.round(Math.random()*9);

            this._food.now_col = Math.round(Math.random()*9);

            this._food.setPosition(cc.p(this._food.now_col*63,this._food.now_row*63));


            //添加蛇的身体

            this._snakeBody = SnakeGame.create(2);

            this._snakeBody.setScale(1);

            if(SNAKE_BODY.length == 0 || SNAKE_BODY.length == null){

                switch (dir){

                    case SNAKE_DIR.UP:

                        this._snakeBody.now_row = this._head.now_row - 1;

                        this._snakeBody.now_col = this._head.now_col;

                        break;

                    case SNAKE_DIR.DOWN:

                        this._snakeBody.now_row = this._head.now_row + 1;

                        this._snakeBody.now_col = this._head.now_col;

                        break;

                    case SNAKE_DIR.LEFT:

                        this._snakeBody.now_row = this._head.now_row;

                        this._snakeBody.now_col = this._head.now_col + 1;

                        break;

                    case SNAKE_DIR.RIGHT:

                        this._snakeBody.now_row = this._head.now_row;

                        this._snakeBody.now_col = this._head.now_col - 1;

                        break;

                    default :break;
                }
                cc.log("里面没有身体，添加一个！");
            }else{

                switch (dir){

                    case SNAKE_DIR.UP:

                        this._snakeBody.now_row = this._snakeBody.now_row - 1;

                        this._snakeBody.now_col = this._snakeBody.now_col;

                        break;

                    case SNAKE_DIR.DOWN:

                        this._snakeBody.now_row = this._snakeBody.now_row + 1;

                        this._snakeBody.now_col = this._snakeBody.now_col;

                        break;

                    case SNAKE_DIR.LEFT:

                        this._snakeBody.now_row = this._snakeBody.now_row;

                        this._snakeBody.now_col = this._snakeBody.now_col + 1;

                        break;

                    case SNAKE_DIR.RIGHT:

                        this._snakeBody.now_row = this._snakeBody.now_row;

                        this._snakeBody.now_col = this._snakeBody.now_col - 1;

                        break;

                    default :break;
                }

                cc.log("里面有身体，添加一个！");
            }

            //添加到数组中去

            SNAKE_BODY.push(this._snakeBody);

            this.getChildByTag(111).addChild(this._snakeBody,2);

            this._snakeBody.setPosition(cc.p(this._snakeBody.now_col*63,this._snakeBody.now_row*63));
        }

        this.moveBody(dir)
    },
    moveBody:function(dir){
        if(SNAKE_BODY.length != 0){

            var Snode = null;

            for(var i = SNAKE_BODY.length - 1; i >= 0; i--){

                Snode = SNAKE_BODY[i];

                if(i == 0){

                    switch (dir){

                        case SNAKE_DIR.UP:

                            Snode.now_row = this._head.now_row - 1;

                            Snode.now_col = this._head.now_col;

                            break;

                        case SNAKE_DIR.DOWN:

                            Snode.now_row = this._head.now_row + 1;

                            Snode.now_col = this._head.now_col;

                            break;

                        case SNAKE_DIR.LEFT:

                            Snode.now_row = this._head.now_row;

                            Snode.now_col = this._head.now_col + 1;

                            break;

                        case SNAKE_DIR.RIGHT:

                            Snode.now_row = this._head.now_row;

                            Snode.now_col = this._head.now_col - 1;

                            break;

                        default :break;

                    }

                }else{

                    Snode.now_col = SNAKE_BODY[i-1].now_col;

                    Snode.now_row = SNAKE_BODY[i-1].now_row;

                }

                Snode.setPosition(cc.p(Snode.now_col*63,Snode.now_row*63));

            }

        }
    },
    checkDead:function(){
        if(this._head.now_col < 0 || this._head.now_row < 0 || this._head.now_col >= 10 || this._head.now_row >= 10){
            this.onGameOver();
        }
        //蛇头碰到蛇尾，游戏结束
        if(SNAKE_BODY.length != 0){
            for(var i = SNAKE_BODY.length - 1; i >= 0; i--){
                if(this._head.now_col == SNAKE_BODY[i].now_col && this._head.now_row == SNAKE_BODY[i].now_row){
                    this.onGameOver();
                }
            }
        }
    },
    onGameOver:function(){
        var gameOver = new cc.LabelTTF("Game Over!", "Arial", 50);
        var over = new cc.MenuItemLabel(gameOver,function(){
            cc.director.runScene(new GameScene());
            SNAKE_BODY.length = 0;
        });
        over.setPosition(cc.p(size.width/2,size.height/2));
        var menu = new cc.Menu(over);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 15);

        // var overSpr = new cc.Sprite(res.over);
        // over.x = size.width/2;
        // over.y = size.height/2;
        // this.addChild(overSpr)
        this.sprite = new cc.Sprite(res.over);

        this.sprite.attr({

            x: size.width / 2,

            y: size.height / 2

        });

        this.addChild(this.sprite, 10);
    }
});


var SnakeGame = cc.Node.extend({

    _type:null,

    ctor:function(type){

        this._super();

        this._type = type;

        var sp = cc.Sprite.create();

        //1蛇头 2身体  3食物

        switch (this._type){

            case 1:

                sp = cc.Sprite.create(res.snakeHead);

                break;

            case 2:

                sp = cc.Sprite.create(res.snakeBody);

                break;

            case 3:

                sp = cc.Sprite.create(res.snakeFood);

                break;

            default :break;

        }

        sp.setAnchorPoint(0,0);

        sp.setPosition(0,0);

        this.addChild(sp);

    }

});



SnakeGame.create = function(arg){

    var snakeGame = new SnakeGame(arg);

    return snakeGame;

};