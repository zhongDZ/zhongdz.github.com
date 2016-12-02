var __extends =  function (e, t) {
    function r() {
        this.constructor = e
    }
    for (var n in t)
        if (t.hasOwnProperty(n))
            e[n] = t[n];
    r.prototype = t.prototype;
    e.prototype = new r
};

function GetRandomNum(Min,Max)
{
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}
function posDistance(p1,p2){
    return Math.sqrt(Math.pow(p1.x-p2.x,2)+Math.pow(p1.y-p2.y,2));
}

var endGameScore = 0;

var beginState = function(e){
    function t() {
        e.call(this);
        this.initiliazed = false;
        this.mainBg = new createjs.Bitmap(StateManager.g_instance.getResult("beginBg"));
        this.addChild( this.mainBg);

        var beginBut = new createjs.Bitmap(StateManager.g_instance.getResult("beginbut"));
        this.addChild(beginBut);
        beginBut.x = 220;
        beginBut.y = 630;

        beginBut.addEventListener("click",function(){
            GD.startGame(system.game_id, function(data){
                var _code = data.code;
                console.log(_code)
                switch(_code){
                    case 1:{
                        StateManager.g_instance.changeState(gameState);
                    };break;
                    case 2:{
                        TOOL.showDialog('.alertPage', 'fadeInDown', function(){
                            $('.alertPage').removeClass('animated fadeInDown');
                        });
                        $('.alertContent').html('无游戏次数');
                    };break;
                    case 0:{
                        TOOL.showDialog('.alertPage', 'fadeInDown', function(){
                            $('.alertPage').removeClass('animated fadeInDown');
                        });
                        $('.alertContent').html('网络出错！');
                    };break;
                }
            });
        });

        var commonY = 0;
        var phbBtn = new createjs.Bitmap(StateManager.g_instance.getResult("phbBtn"));
        this.addChild(phbBtn);
        phbBtn.x = 400;
        phbBtn.y = commonY + 10;

        phbBtn.addEventListener("click",function(){
            if(!system.isUserInfo){
                $('.infoPage').removeClass('hide');
                TOOL.showDialog('.infoPage', 'bounceInDown', function(){
                    
                });
            }else{
                GD.rankingList(1, function(data){
                    var _code = data.code;
                    switch(_code){
                        case 0:{
                            TOOL.showDialog('.phbPage', 'bounceIn', function(){
                                $('.phbPage').removeClass('animated bounceIn');
                                myscroll2.refresh();
                            });
                            $('.phbContent ul').append('获取失败！');
                            $('.phbContent ul').css({
                                'width' : '150px',
                                'height' : '100px',
                                'font-size' : '26px',
                                'position' : 'absolute',
                                'top' : '20px',
                                'left' : '200px'
                            });
                        }break;
                        case 1:{
                            TOOL.createPhbData(data);
                            TOOL.showDialog('.phbPage', 'bounceIn', function(){
                                $('.phbPage').removeClass('animated bounceIn');
                                myscroll2.refresh();
                            });
                        }break;
                        case 2:{
                            TOOL.showDialog('.phbPage', 'bounceIn', function(){
                                $('.phbPage').removeClass('animated bounceIn');
                                myscroll2.refresh();
                            });
                            $('.phbContent ul').append('暂无数据！');
                            $('.phbContent ul').css({
                                'width' : '150px',
                                'height' : '100px',
                                'font-size' : '26px',
                                'position' : 'absolute',
                                'top' : '20px',
                                'left' : '200px'
                            });
                        }break;
                    }
                });
            }
        });

        var prizeBtn = new createjs.Bitmap(StateManager.g_instance.getResult("prizeBtn"));
        this.addChild(prizeBtn);
        prizeBtn.x = 520;
        prizeBtn.y = commonY + 10;

        prizeBtn.addEventListener("click",function(){
            TOOL.showDialog('.prizePage', 'bounceInUp', function(){
                $('.prizePage').removeClass('animated bounceInUp');
                myscroll3.refresh();
            });
        });

        var ruleBtn = new createjs.Bitmap(StateManager.g_instance.getResult("ruleBtn"));
        this.addChild(ruleBtn);
        ruleBtn.x = 0;
        ruleBtn.y = commonY;

        ruleBtn.addEventListener("click",function(){
            TOOL.showDialog('.rulePage', 'fadeInDown', function(){
                $('.rulePage').removeClass('animated fadeInDown');
                myscroll1.refresh();
            });
        });
    }
    __extends(t, e);
    t.prototype.cleanup = function () {};
    t.prototype.resume = function () {};
    t.prototype.init = function () {
        this.initiliazed = true;
    };
    t.prototype.isInitiliazed = function () {
        return this.initiliazed
    };
    return t;
}(createjs.Container);

var endState = function(e){
    function t() {
        e.call(this);
        this.initiliazed = false;
        var n = this;
        this.mainBg = new createjs.Bitmap(StateManager.g_instance.getResult("mainBg"));
        this.addChild( this.mainBg);


        var beginBut = new createjs.Bitmap(StateManager.g_instance.getResult("again"));
        this.addChild(beginBut);
        beginBut.x = 80;
        beginBut.y = 630;

        beginBut.addEventListener("click",function(){

            StateManager.g_instance.changeState(beginState);
        })

        var moreBut = new createjs.Bitmap(StateManager.g_instance.getResult("more"));
        this.addChild(moreBut);
        moreBut.x = 350;
        moreBut.y = 630;

        moreBut.addEventListener("click",function(){

        });

        //分数字
        this.scoretxt = new createjs.Text(""+endGameScore+"分", "36px Arial", "#FFF");
        this.scoretxt.x = 300;
        this.scoretxt.y = 300;
        this.addChild(this.scoretxt);

    }
    __extends(t, e);
    t.prototype.cleanup = function () {};
    t.prototype.resume = function () {};
    t.prototype.init = function () {
        this.initiliazed = true
    };
    t.prototype.isInitiliazed = function () {
        return this.initiliazed
    };
    return t;
}(createjs.Container);

var gameState = function(e){
    function t() {
        e.call(this);


        this.boatState = 0;

        this.gameScore = 0;

        this.initiliazed = false;
        this.timeNum = 30*40;
        this.mainBg = new createjs.Bitmap(StateManager.g_instance.getResult("mainBg"));
        this.addChild( this.mainBg);
        //时间bar
        this.timeBar = new createjs.Bitmap(StateManager.g_instance.getResult("timeBar"));
        this.addChild( this.timeBar);
        this.timeBar.x = 10;
        this.timeBar.y = 10;
        //时间loading条
        this.timeLoading = new createjs.Bitmap(StateManager.g_instance.getResult("timeLoading"));
        this.addChild( this.timeLoading);
        this.timeLoading.x = 82;
        this.timeLoading.y = 26;
        //分数bar
        this.scoreBat = new createjs.Bitmap(StateManager.g_instance.getResult("scoreBat"));
        this.addChild( this.scoreBat);
        this.scoreBat.x = 420;
        this.scoreBat.y = 10;
        //分数字
        this.scoretxt = new createjs.Text("0", "36px Arial", "#FFF");
        this.scoretxt.x = 500;
        this.scoretxt.y = 25;
        this.addChild(this.scoretxt);

        this.fishmsg = null;

        this.effectContainer = new EffectContainer();

        this.FishArr = [];
        this.hookPos = {};
        this.timeAge = 0;
        this.fishBoat = new FishBoat();
        this.addChild(this.fishBoat);
        var n = this;
        this.HookedFished = false;
        this.addEventListener("click", function(){
            if(n.fishBoat.boatState==0){
                n.fishBoat.hookGo();
            } else if(n.fishBoat.boatState==1){

                    n.netBome();
            }
        });


        if (window.DeviceMotionEvent) {
            window.addEventListener("deviceorientation", function(evt){
                    n.fishBoatMove(evt.gamma);
            }, false);
        }
    }
    __extends(t, e);
    t.prototype.fishBoatMove = function(times){
        if(this.stopUpdate)return;
        this.fishBoat.boatMove(times);
    }
    t.prototype.cleanup = function () {};
    t.prototype.resume = function () {};
    t.prototype.init = function () {
        this.initiliazed = true;
    };
    t.prototype.isInitiliazed = function () {
        return this.initiliazed
    };
    t.prototype.stopUpdate = false;
    t.prototype.update = function (n) {

        this.scoretxt.text = this.gameScore+"";

        endGameScore = this.gameScore;//传值到结束页面

        if(this.stopUpdate)return;

        this.timeNum -= 1;
        if(this.timeNum==0){
            //old
            // StateManager.g_instance.score = this.gameScore;
            // StateManager.g_instance.changeState(endState);
            //old

            TOOL.showDialog('.middlePage', 'fadeIn', GD.doingGame(endGameScore, function(data){
                var _code = data.code;
                switch(_code){
                    case 0:{
                        TOOL.showDialog('.alertPage', 'bounceIn', function(){
                            $('.alertPage').removeClass('animated bounceIn');
                            $('.alertContent').html('提交失败！');
                        });
                    }break;
                    case 1:{
                        $('.endContent_num').html('排名：第'+data.data.ranking_num+'名');
                        $('.endContent_score').html('成绩：'+data.data.score+'分');
                        $('.endContent_best').html('历史最佳：'+data.data.best_score+'分');
                        TOOL.showDialog('.endPage', 'bounceIn', function(){
                            $('.endPage').removeClass('animated bounceIn');
                        });
                    }break;
                }
                $('.middlePage').removeClass('animated fadeIn');
                $('.middlePage').addClass('hide');

                TOOL.weixin(endGameScore);
            }));

            this.stopUpdate = true;
        }

        if(this.timeNum>0){
            this.timeLoading.scaleX = this.timeNum/1200;
        }


        if(this.timeAge%20==0){
            this.addFish();
        }

        if(this.fishBoat.getHookType()==0&&this.HookedFished){
            if(this.fishmsg.bombtype==1){
                this.getNetBomb();
            }else if(this.fishmsg.bombtype==0){
                this.getTimeBomb();
            }
            this.HookedFished = false;
            this.fishmsg = null;
        }
        //判断是否有鱼被抓
        for(var i = 0;i<=this.FishArr.length-1;i++){
            if(this.FishArr[i]!=null){
                this.FishArr[i].update(this.hookPos,this.fishBoat.getHookType(),this.HookedFished);
                if(this.FishArr[i].isHooked&&!this.HookedFished&&!this.FishArr[i].Fishgoend&&!this.FishArr[i].isHookend){
                    this.HookedFished = true;
                    this.fishmsg = this.FishArr[i].FishMsgObj;
                    if(this.fishmsg.inkbombed){
                        this.touchInkBome(this.hookPos);
                    }
                }
            }
        }
        //假如是电脑
        if(!Constants.thisismobile)this.fishBoat.boatMoveCom(this.parent._mouseOverX);
        this.fishBoat.update(this.HookedFished);
        //记录钩的位置
        this.hookPos.x =this.fishBoat.hx;
        this.hookPos.y =this.fishBoat.hy;
        this.timeAge++;

    };
    //碰到炸弹鱿鱼
    t.prototype.touchInkBome = function(pobj){
        this.addChild(this.effectContainer);
        this.effectContainer.bombPlay(pobj.x,pobj.y);

        for(var k = 0;k<=this.FishArr.length-1;k++){
            if(this.FishArr[k]!=null){
                this.FishArr[k].beBone();
            }
        }
    }
    //使用网炸弹
    t.prototype.netBome = function(pobj){
        this.fishBoat.netGo();
        var pobj = {x:this.fishBoat.x+168,y:this.fishBoat.y+88};

        createjs.Tween.get(this).wait(2000).call(function(){
            for(var k = 0;k<=this.FishArr.length-1;k++){
                if(this.FishArr[k]!=null){
                    this.FishArr[k].benetBome(pobj);
                }
            }
        });

    }
    t.prototype.addFish = function(){
        var fishsprite = new fishSprite();
        this.addChild(fishsprite);
        fishsprite.addWhat();
        this.FishArr.push(fishsprite);
        for(var i = 0;i<=this.FishArr.length-1;i++){
                if(this.FishArr[i]!=null&&this.FishArr[i].Fishgoend)this.FishArr[i]=null;
        }
        this.removeFishArr();
    }
    t.prototype.removeFishArr = function(){
        if(this.FishArr[0] == null){
            this.FishArr.splice(0,1);
            this.removeFishArr();
        }
    }

    t.prototype.getNetBomb = function(){
        this.fishBoat.netState();
        this.addChild(this.effectContainer);
        this.effectContainer.getNetbombPlay(this.hookPos.x,this.hookPos.y);
    }

    t.prototype.getTimeBomb = function(){

        this.timeNum+=10*40;
        if(this.timeNum>=30*40){
            this.timeNum=30*40;
        }
        this.addChild(this.effectContainer);
        this.effectContainer.getTimebombPlay(this.hookPos.x,this.hookPos.y);
    }
    return t;
}(createjs.Container);


var fishSprite = function(e){
    function t(){
        e.call(this);
        this.FishMsgObj = {
            addscore:50,
            inkbombed:false,
            bombtype:-1
        }
        this.GapPos = {};
        this.Fishgoend = false;//是否走到尽头
        this.isBombed = false;//是否被炸中
        this.isHooked = false;//是否被钓到
        this.isHookend = false;//是否钩到尽头
        this.FishDirectionType = 0;
        this.sizeType = GetRandomNum(4,6);
        this.initFishType();
        this.MoveGap = GetRandomNum(3,6);
        this.y = GetRandomNum(0,9)*50+400;

        this.whatbit = null;

    }
    __extends(t, e);
    t.prototype.initFishType = function(){
        this.FishType = GetRandomNum(0,2);

        switch(GetRandomNum(0,10)){
            case 0: this.FishType = 0;break;
            case 1: this.FishType = 0;break;
            case 2: this.FishType = 0;break;
            case 3: this.FishType = 1;break;
            case 4: this.FishType = 0;break;
            case 5: this.FishType = 2;break;
            case 6: this.FishType = 0;break;
            case 7: this.FishType = 0;break;
            case 8: this.FishType = 1;break;
            case 9: this.FishType = 0;break;
            case 10: this.FishType = 2;break;
        }

        this.FishMoveStep = 0;

        var fishallss = new createjs.SpriteSheet({
            "animations":
            {
                "redfish": [0, 3, "redfish",0.1],
                "yellofish": [4, 7, "yellofish",0.1],
                "deathfish": [8, 8, "deathfish",0]
            },
            "images": [StateManager.g_instance.loader.getResult("fishall")],
            "frames":
            {
                "height": 140,
                "width":151,
                "regX": 0,
                "regY": 0,
                "count": 64
            }
        });

        var inkFishss = new createjs.SpriteSheet({
            "animations":
            {
                "Swinning": [0, 3, "Swinning",0.1]
            },
            "images": [StateManager.g_instance.loader.getResult("inkFish")],
            "frames":
            {
                "height": 204,
                "width":211,
                "regX": 0,
                "regY": 0,
                "count": 64
            }
        });
        switch(this.FishType){
            case 0:this.initialize(fishallss,"redfish");break;
            case 1:this.initialize(fishallss,"yellofish");break;
            case 2:this.initialize(inkFishss,"Swinning");break;
        }
        this.initFishMove(this.FishType);

    }
    t.prototype.initFishMove = function(){

        if(this.FishType==2){
            this.FishMsgObj.inkbombed = true;
            this.sizeType=4;
        }

        if(this.FishType==1){
            this.FishMsgObj.bombtype = GetRandomNum(0,1);;
        }

        switch(GetRandomNum(0,1)){
            case 0:{
                this.scaleX = -1+(this.sizeType *0.1);
                this.scaleY = 1-(this.sizeType *0.1);
                this.FishDirectionType = 0;
                break;
            }
            case 1:{
                this.x = 650;
                this.scaleX = 1-(this.sizeType *0.1);
                this.scaleY = 1-(this.sizeType *0.1);
                this.FishDirectionType = 1;
                break;
            }
        }

        this.GapPos.x = this.spriteSheet._frameWidth*this.scaleX/2;
        this.GapPos.y = this.spriteSheet._frameWidth*this.scaleY/2;

    }
    t.prototype.update = function(posObj,hooktype,fishooked){
        if(this.isBombed)return;
        if(this.isHookend)return;
        //鱼移动
        if(this.FishMoveStep<=800&&!this.isHooked){
            switch(this.FishDirectionType){
                case 0:{
                    this.x+=this.MoveGap;
                    if(this.whatbit!=null)this.whatbit.x = this.x+this.GapPos.x;
                    break;
                }
                case 1:{
                    this.x-=this.MoveGap;
                    if(this.whatbit!=null)this.whatbit.x = this.x+this.GapPos.x;
                    break;
                }
            }
            this.FishMoveStep++;
        }
        //判断是否走到尽头
        if(this.FishMoveStep>800&&!this.Fishgoend){
            this.death();
        }
        //判断是否钓中
        if((hooktype==1||hooktype==2)&&!this.Fishgoend&&!fishooked){
            this.isHookFunc(posObj);
        }
        //钓中后
        if(this.isHooked&&!this.Fishgoend){
           this.hookedfunc(posObj,hooktype);
        }

    }
    t.prototype.hookedfunc = function(p,h){
        this.x = p.x+this.GapPos.x;
        this.y = p.y;
        if(this.FishDirectionType==0){
            this.rotation = -90;
        }else if(this.FishDirectionType==1){
            this.rotation = 90;
        }

        if(this.FishType==1){
            this.whatbit.x = this.x-this.GapPos.x;
            this.whatbit.y = this.y+this.GapPos.y;
        }

        if(this.FishType==2){
            this.y-=20;
        }

        if(h==0){
            this.hookedend();
        }
    }
    t.prototype.isHookFunc = function(p){
        var myFishPos = {};
            myFishPos.x = this.x +this.GapPos.x;
            myFishPos.y = this.y +this.GapPos.y;
        if(posDistance(p,myFishPos)<70*this.scaleY){
            this.isHooked = true;
        }
    }
    t.prototype.death = function(){
        if(!this.Fishgoend){
            if(this.whatbit!=null)
                this.parent.removeChild(this.whatbit);
            this.parent.removeChild(this);
            this.Fishgoend = true;
        }
    }

    t.prototype.beBone = function(){
        if(this.FishType==2)return;
        if(this.whatbit!=null)this.whatbit.visible = false;
        this.gotoAndPlay("deathfish")
        this.isHooked = false;
        createjs.Tween.get(this).to({y:this.y-100,alpha:0},1000).call(function(){
            this.death();
        });
        this.isBombed= true;
        //this.Fishgoend = true;
    }

    t.prototype.benetBome = function(p){
        this.isHooked = false;
        this.rotation = 90;
        if(this.whatbit!=null)this.whatbit.visible = false;

        this.scaleX = 1-(this.sizeType *0.1);
        var addgapx = 0;

        if(p.x>250){
            addgapx = -80
        }else{
            addgapx = 80
        }

        this.isBombed= true;

        createjs.Tween.get(this).to({x:this.x+addgapx,y: p.y+100},500).call(function(){
            this.hookedend();
        });


    }

    t.prototype.hookedend = function(){
        this.isHookend = true;

        if(this.whatbit!=null)this.whatbit.visible = false;
        if(this.FishType==0){
            var plus = new createjs.Bitmap(StateManager.g_instance.getResult("plus"));
            plus.x = this.x -this.GapPos.x - 100 ;
            plus.y = this.y-100;
            this.parent.addChild(plus);
            createjs.Tween.get(plus).to({y: this.y - 200,alpha:0},2000).call(function(){
                this.parent.removeChild(this);
            })
            switch(this.sizeType){
                case 4:{
                    var shi = new createjs.Bitmap(StateManager.g_instance.getResult("2"));
                    shi.x = this.x -this.GapPos.x - 55 ;
                    shi.y = this.y-100;
                    this.parent.addChild(shi);

                    var ge = new createjs.Bitmap(StateManager.g_instance.getResult("0"));
                    ge.x = this.x -this.GapPos.x+5;
                    ge.y = this.y-100;
                    this.parent.addChild(ge);

                    createjs.Tween.get(shi).to({y: this.y - 200,alpha:0},2000).call(function(){
                        this.parent.removeChild(this);
                    })

                    createjs.Tween.get(ge).to({y: this.y - 200,alpha:0},2000).call(function(){
                        this.parent.removeChild(this);
                    })

                    this.parent.gameScore +=20;
                    break;
                }

                case 5:{
                    var shi = new createjs.Bitmap(StateManager.g_instance.getResult("2"));
                    shi.x = this.x -this.GapPos.x - 55 ;
                    shi.y = this.y-100;
                    this.parent.addChild(shi);

                    var ge = new createjs.Bitmap(StateManager.g_instance.getResult("5"));
                    ge.x = this.x -this.GapPos.x+5;
                    ge.y = this.y-100;
                    this.parent.addChild(ge);

                    createjs.Tween.get(shi).to({y: this.y - 200,alpha:0},2000).call(function(){
                        this.parent.removeChild(this);
                    })

                    createjs.Tween.get(ge).to({y: this.y - 200,alpha:0},2000).call(function(){
                        this.parent.removeChild(this);
                    })
                    this.parent.gameScore +=25;
                    break;
                }

                case 6:{
                    var shi = new createjs.Bitmap(StateManager.g_instance.getResult("3"));
                    shi.x = this.x -this.GapPos.x - 55 ;
                    shi.y = this.y-100;
                    this.parent.addChild(shi);

                    var ge = new createjs.Bitmap(StateManager.g_instance.getResult("0"));
                    ge.x = this.x -this.GapPos.x+5;
                    ge.y = this.y-100;
                    this.parent.addChild(ge);

                    createjs.Tween.get(shi).to({y: this.y - 200,alpha:0},2000).call(function(){
                        this.parent.removeChild(this);
                    })

                    createjs.Tween.get(ge).to({y: this.y - 200,alpha:0},2000).call(function(){
                        this.parent.removeChild(this);
                    })
                    this.parent.gameScore +=30;
                    break;
                }
            }
        }else if(this.FishType==2){
            var plus = new createjs.Bitmap(StateManager.g_instance.getResult("plus"));
            plus.x = this.x -this.GapPos.x - 100 ;
            plus.y = this.y-100;
            this.parent.addChild(plus);
            createjs.Tween.get(plus).to({y: this.y - 200,alpha:0},2000).call(function(){
                this.parent.removeChild(this);
            })
            if(this.isBombed){
                var shi = new createjs.Bitmap(StateManager.g_instance.getResult("5"));
                shi.x = this.x -this.GapPos.x - 55 ;
                shi.y = this.y-100;
                this.parent.addChild(shi);

                var ge = new createjs.Bitmap(StateManager.g_instance.getResult("0"));
                ge.x = this.x -this.GapPos.x+5;
                ge.y = this.y-100;
                this.parent.addChild(ge);

                createjs.Tween.get(shi).to({y: this.y - 200,alpha:0},2000).call(function(){
                    this.parent.removeChild(this);
                })

                createjs.Tween.get(ge).to({y: this.y - 200,alpha:0},2000).call(function(){
                    this.parent.removeChild(this);
                })
                this.parent.gameScore +=50;

            }else{
                var ge = new createjs.Bitmap(StateManager.g_instance.getResult("1"));
                ge.x = this.x -this.GapPos.x-55;
                ge.y = this.y-100;
                this.parent.addChild(ge);

                createjs.Tween.get(ge).to({y: this.y - 200,alpha:0},2000).call(function(){
                    this.parent.removeChild(this);
                })
                this.parent.gameScore +=1;
            }

        }else if(this.FishType==1&&this.isBombed){
            var plus = new createjs.Bitmap(StateManager.g_instance.getResult("plus"));
            plus.x = this.x -this.GapPos.x - 100 ;
            plus.y = this.y-100;
            this.parent.addChild(plus);
            createjs.Tween.get(plus).to({y: this.y - 200,alpha:0},2000).call(function(){
                this.parent.removeChild(this);
            })

            var shi = new createjs.Bitmap(StateManager.g_instance.getResult("5"));
            shi.x = this.x -this.GapPos.x - 55 ;
            shi.y = this.y-100;
            this.parent.addChild(shi);

            var ge = new createjs.Bitmap(StateManager.g_instance.getResult("0"));
            ge.x = this.x -this.GapPos.x+5;
            ge.y = this.y-100;
            this.parent.addChild(ge);

            createjs.Tween.get(shi).to({y: this.y - 200,alpha:0},2000).call(function(){
                this.parent.removeChild(this);
            })

            createjs.Tween.get(ge).to({y: this.y - 200,alpha:0},2000).call(function(){
                this.parent.removeChild(this);
            })
            this.parent.gameScore +=50;
        }




        createjs.Tween.get(this).to({y: this.y - 100,alpha:0},1000).call(function(){
            this.death();
        });

    }
    t.prototype.addWhat = function(){
        if(this.FishType!=1)return;
        this.whatbit = new createjs.Bitmap(StateManager.g_instance.getResult("what"));
        this.whatbit.regX = 35;
        this.whatbit.regY = 48;
        this.whatbit.x = this.x;
        this.whatbit.y = this.y+this.GapPos.y;
        var sx = 1-this.sizeType*0.1;
        this.whatbit.scaleY = 1-this.sizeType*0.1;
        this.whatbit.scaleX = sx;
        this.parent.addChild(this.whatbit);
        createjs.Tween.get(this.whatbit,{loop:true}).to({scaleX:-sx},1000).to({scaleX:sx},1000);
    }
    return t;
}(createjs.Sprite);

var FishBoat = function(e){
    function t(){
        e.call(this);
        this.boatState = 0;
        var spoondriftss = new createjs.SpriteSheet({
            "animations":
            {
                "shun": {
                    frames: [0,1,2,3],
                    next: "shun",
                    speed: 0.04
                },
                "fan": {
                    frames: [3,2,1,0],
                    next: "fan",
                    speed: 0.04
                }
            },
            "images": [StateManager.g_instance.loader.getResult("spoondrift")],
            "frames":
            {
                "height": 256,
                "width":640,
                "regX": 0,
                "regY": 0,
                "count": 64
            }
        });

        this.upspoondrift =  new createjs.Sprite(spoondriftss,"shun");
        this.addChild(this.upspoondrift);
        this.upspoondrift.y = 120;

        this.fishBoat =  new createjs.Bitmap(StateManager.g_instance.loader.getResult("boat"));
        this.addChild(this.fishBoat);
        this.fishBoat.x = 227;
        this.fishBoat.y = 180;
        this.fishBoat.regX = 87;

        this.fishp1 =  new createjs.Bitmap(StateManager.g_instance.loader.getResult("p1"));
        this.addChild(this.fishp1);
        this.fishp1.x = 199;
        this.fishp1.y = 89;

        this.fishp2 =  new createjs.Bitmap(StateManager.g_instance.loader.getResult("p2"));
        this.addChild(this.fishp2);
        this.fishp2.x = 169;
        this.fishp2.y = 88;
        this.fishp2.visible = false;

        this.isnetGoNow = false;
        this.isComeNow = false;

        createjs.Tween.get(this.fishBoat,{loop:true}).to({rotation:-2},400).to({rotation:2},400);

        this.downspoondrift  =  new createjs.Sprite(spoondriftss,"fan");
        this.addChild(this.downspoondrift);
        this.downspoondrift.y = 180;

        this.fishnet =  new createjs.Bitmap(StateManager.g_instance.loader.getResult("hnet"));
        this.addChild(this.fishnet);
        this.fishnet.x = 129;
        this.fishnet.y = 138;
        this.fishnet.visible = false;


        this.x = 0;
        this.y = 0;

        this.fishHook = new FishHook();
        this.addChild(this.fishHook);


        this.hx = this.fishHook.x;
        this.hy = this.fishHook.y;

        this.lineshape = new createjs.Shape();
        this.addChild(this.lineshape);



        this.whiteline = new createjs.Shape();
        this.addChild(this.whiteline);

        this.netRoundcontainer = new FishRound();
        this.addChild(this.netRoundcontainer);

       // this.netState();

    }
    __extends(t, e);
    t.prototype.update = function(ishooked,pos){

        this.upspoondrift.x = -this.x
        this.downspoondrift.x = -this.x
        if(ishooked&&this.getHookType() == 1)this.setHookType(2);

        if(this.boatState==0){
            this.lineshape.graphics.clear();
            this.fishHook.hookAction();
            this.lineshape.graphics.beginFill("#000000").beginStroke("#000000").mt(348,141).lt(this.fishHook.lx,this.fishHook.ly).endFill();
        }
        else if(this.boatState == 1&&this.netRoundcontainer.netGoing){
            this.whiteline.graphics.clear();
            this.whiteline.graphics.beginFill("#FFFFFF").setStrokeStyle(5, 'round', 'round').beginStroke("#FFFFFF").
                mt(230,180).lt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y).endFill();

            if(this.netRoundcontainer.RoundArr[8].y==600||this.isComeNow){

                this.whiteline.graphics.beginFill("#FFFFFF").setStrokeStyle(5, 'round', 'round').beginStroke("#FFFFFF").
                    mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[0].x,this.netRoundcontainer.RoundArr[0].y).
                    mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[1].x,this.netRoundcontainer.RoundArr[1].y).
                    mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[2].x,this.netRoundcontainer.RoundArr[2].y).
                    mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[3].x,this.netRoundcontainer.RoundArr[3].y).
                    mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[4].x,this.netRoundcontainer.RoundArr[4].y).
                    mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[5].x,this.netRoundcontainer.RoundArr[5].y).
                    mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[6].x,this.netRoundcontainer.RoundArr[6].y).
                    mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[7].x,this.netRoundcontainer.RoundArr[7].y).endFill();

                if(this.netRoundcontainer.RoundArr[3].y>this.netRoundcontainer.RoundArr[8].y+80||this.isComeNow){
                    var subGap = 80;
                    var gen2 = 1.41;

                    this.whiteline.graphics.beginFill("#FFFFFF").setStrokeStyle(5, 'round', 'round').beginStroke("#FFFFFF").
                        mt(this.netRoundcontainer.RoundArr[8].x-subGap,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[8].x-subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y-subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x-subGap,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[8].x-subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y+subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x+subGap,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[8].x+subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y-subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x+subGap,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[8].x+subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y+subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y-subGap).lt(this.netRoundcontainer.RoundArr[8].x-subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y-subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y-subGap).lt(this.netRoundcontainer.RoundArr[8].x+subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y-subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y+subGap).lt(this.netRoundcontainer.RoundArr[8].x-subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y+subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y+subGap).lt(this.netRoundcontainer.RoundArr[8].x+subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y+subGap*gen2/2).endFill();
                }

                if(this.netRoundcontainer.RoundArr[3].y>this.netRoundcontainer.RoundArr[8].y+160||this.isComeNow){
                    var subGap = 160;
                    var gen2 = 1.41;

                    this.whiteline.graphics.beginFill("#FFFFFF").setStrokeStyle(5, 'round', 'round').beginStroke("#FFFFFF").
                        mt(this.netRoundcontainer.RoundArr[8].x-subGap,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[8].x-subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y-subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x-subGap,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[8].x-subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y+subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x+subGap,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[8].x+subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y-subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x+subGap,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[8].x+subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y+subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y-subGap).lt(this.netRoundcontainer.RoundArr[8].x-subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y-subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y-subGap).lt(this.netRoundcontainer.RoundArr[8].x+subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y-subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y+subGap).lt(this.netRoundcontainer.RoundArr[8].x-subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y+subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y+subGap).lt(this.netRoundcontainer.RoundArr[8].x+subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y+subGap*gen2/2).endFill();
                }

                if(this.netRoundcontainer.RoundArr[3].y>this.netRoundcontainer.RoundArr[8].y+240||this.isComeNow){
                    var subGap = 240;
                    var gen2 = 1.41;

                    this.whiteline.graphics.beginFill("#FFFFFF").setStrokeStyle(5, 'round', 'round').beginStroke("#FFFFFF").
                        mt(this.netRoundcontainer.RoundArr[8].x-subGap,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[8].x-subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y-subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x-subGap,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[8].x-subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y+subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x+subGap,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[8].x+subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y-subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x+subGap,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[8].x+subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y+subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y-subGap).lt(this.netRoundcontainer.RoundArr[8].x-subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y-subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y-subGap).lt(this.netRoundcontainer.RoundArr[8].x+subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y-subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y+subGap).lt(this.netRoundcontainer.RoundArr[8].x-subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y+subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y+subGap).lt(this.netRoundcontainer.RoundArr[8].x+subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y+subGap*gen2/2).endFill();
                }

                if(this.netRoundcontainer.RoundArr[3].y>this.netRoundcontainer.RoundArr[8].y+320||this.isComeNow){
                    var subGap = 320;
                    var gen2 = 1.41;

                    this.whiteline.graphics.beginFill("#FFFFFF").setStrokeStyle(5, 'round', 'round').beginStroke("#FFFFFF").
                        mt(this.netRoundcontainer.RoundArr[8].x-subGap,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[8].x-subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y-subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x-subGap,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[8].x-subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y+subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x+subGap,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[8].x+subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y-subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x+subGap,this.netRoundcontainer.RoundArr[8].y).lt(this.netRoundcontainer.RoundArr[8].x+subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y+subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y-subGap).lt(this.netRoundcontainer.RoundArr[8].x-subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y-subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y-subGap).lt(this.netRoundcontainer.RoundArr[8].x+subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y-subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y+subGap).lt(this.netRoundcontainer.RoundArr[8].x-subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y+subGap*gen2/2).
                        mt(this.netRoundcontainer.RoundArr[8].x,this.netRoundcontainer.RoundArr[8].y+subGap).lt(this.netRoundcontainer.RoundArr[8].x+subGap*gen2/2,this.netRoundcontainer.RoundArr[8].y+subGap*gen2/2).endFill();
                    this.isComeNow = true;
                }

            }

        }

       //吊钩的位置
        this.hx = this.fishHook.x+this.x;
        this.hy = this.fishHook.y+this.y;

    }
    t.prototype.hookGo = function(){//吊钩发射
        this.fishHook.hookActionType = 1;
    }
    t.prototype.setHookType = function(type){//设置吊钩状态
        this.fishHook.hookActionType = type;
    }
    t.prototype.getHookType = function(){//返回吊钩的状态
        var htype = this.fishHook.hookActionType;
        return htype;
    }
    t.prototype.boatMove = function(times){//手机的船移动
        if(this.isnetGoNow)return;
        if(this.x>=-130&&this.x<=300){
            this.x += times;
            if(this.x<=-130){
                this.x = -130;
            }
            if(this.x>=300){
                this.x = 300;
            }
        }
    }
    t.prototype.boatMoveCom = function(sx){//电脑的船移动
        if(this.isnetGoNow)return;
        if(this.x>=-130&&this.x<=300){
            if(sx>=320){
                this.x+=5;
            }
            if(sx<320){
                this.x-=5;
            }
            if(this.x<=-130){
                this.x = -130;
            }
            if(this.x>=300){
                this.x = 300;
            }
        }


    }

    t.prototype.netState = function(){
        this.boatState = 1;
        this.fishp2.visible = true;
        this.fishp1.visible = false;
        this.fishnet.visible = true;
        this.fishHook.visible = false;
        this.whiteline.visible = true;
        this.lineshape.visible = false;
        this.isComeNow = false;
    }
    t.prototype.normalState = function(){
        this.isnetGoNow = false;
        this.boatState = 0;
        this.whiteline.visible = false;
        this.fishp2.visible = false;
        this.fishp1.visible = true;
        this.fishnet.visible = false;
        this.fishHook.visible = true;
        this.lineshape.visible = true;
        this.whiteline.graphics.clear();
    }

    t.prototype.netGo = function(){
        this.isnetGoNow = true;
        this.netRoundcontainer.roundGo(this.x);
    }
    return t;
}(createjs.Container);

var FishRound = function(e){
    function t(){
        e.call(this);

        this.RoundArr = [];
        this.netGoing = false;
        for(var i = 0;i<=8;i++){
            this.RoundArr[i] = new createjs.Bitmap(StateManager.g_instance.loader.getResult("round"));
            this.RoundArr[i].x = 230;
            this.RoundArr[i].y = 180;
            this.RoundArr[i].regX = 10;
            this.RoundArr[i].regY = 10;
            this.RoundArr[i].visible = false;
            this.addChild(this.RoundArr[i]);
        }



    }
    __extends(t, e);
    t.prototype.roundGo = function(px){
        this.netGoing = true;
        var n = this;
        for(var i = 0;i<=8;i++){
            this.RoundArr[i].visible = true;
            this.RoundArr[i].x = 230
            this.RoundArr[i].y = 180
        }

        var roundGoEndPos = {x:230,y:600};
        var subGap = 400;
        var gen2 = 1.41;


        var roundGoEndPos1
        if(px>85){
            var roundGoEndPos1 = {x:0,y:200};
        }else{
            var roundGoEndPos1 = {x:500,y:200};
        }

        createjs.Tween.get(this.RoundArr[0]).to({x:roundGoEndPos.x,y:roundGoEndPos.y},1000).to({x:roundGoEndPos.x-subGap,y:roundGoEndPos.y},1000).to({x:roundGoEndPos1.x-subGap,y:roundGoEndPos1.y},400)
        createjs.Tween.get(this.RoundArr[1]).to({x:roundGoEndPos.x,y:roundGoEndPos.y},1000).to({x:roundGoEndPos.x+subGap,y:roundGoEndPos.y},1000).to({x:roundGoEndPos1.x+subGap,y:roundGoEndPos1.y},400)
        createjs.Tween.get(this.RoundArr[2]).to({x:roundGoEndPos.x,y:roundGoEndPos.y},1000).to({x:roundGoEndPos.x,y:roundGoEndPos.y-subGap},1000).to({x:roundGoEndPos1.x,y:roundGoEndPos1.y-subGap},400)
        createjs.Tween.get(this.RoundArr[3]).to({x:roundGoEndPos.x,y:roundGoEndPos.y},1000).to({x:roundGoEndPos.x,y:roundGoEndPos.y+subGap},1000).to({x:roundGoEndPos1.x,y:roundGoEndPos1.y+subGap},400)

        createjs.Tween.get(this.RoundArr[4]).to({x:roundGoEndPos.x,y:roundGoEndPos.y},1000).to({x:roundGoEndPos.x-subGap*gen2/2,y:roundGoEndPos.y-subGap*gen2/2},1000).to({x:roundGoEndPos1.x-subGap*gen2/2,y:roundGoEndPos1.y-subGap*gen2/2},400)
        createjs.Tween.get(this.RoundArr[5]).to({x:roundGoEndPos.x,y:roundGoEndPos.y},1000).to({x:roundGoEndPos.x+subGap*gen2/2,y:roundGoEndPos.y-subGap*gen2/2},1000).to({x:roundGoEndPos1.x+subGap*gen2/2,y:roundGoEndPos1.y-subGap*gen2/2},400)
        createjs.Tween.get(this.RoundArr[6]).to({x:roundGoEndPos.x,y:roundGoEndPos.y},1000).to({x:roundGoEndPos.x-subGap*gen2/2,y:roundGoEndPos.y+subGap*gen2/2},1000).to({x:roundGoEndPos1.x-subGap*gen2/2,y:roundGoEndPos1.y+subGap*gen2/2},400)
        createjs.Tween.get(this.RoundArr[7]).to({x:roundGoEndPos.x,y:roundGoEndPos.y},1000).to({x:roundGoEndPos.x+subGap*gen2/2,y:roundGoEndPos.y+subGap*gen2/2},1000).to({x:roundGoEndPos1.x+subGap*gen2/2,y:roundGoEndPos1.y+subGap*gen2/2},400)
        createjs.Tween.get(this.RoundArr[8]).to({x:roundGoEndPos.x,y:roundGoEndPos.y},1000).wait(1000).to({x:roundGoEndPos1.x,y:roundGoEndPos1.y},400)
            .call(function(){

            n.netGoing = false;
            n.parent.normalState();
                for(var i = 0;i<=8;i++){
                    n.RoundArr[i].visible = false;
                }
        });
    }
    return t;
}(createjs.Container);

var FishHook = function(e){
    function t(){
        e.call(this);
        this.initialize(StateManager.g_instance.loader.getResult("fishhook"));
        this.x = 348;
        this.y = 141;

        this.lx = 348;
        this.ly = 141;

        this.posArr = [];
        this.radius =  150;

        this.AngelPosArr = 100;

        var goGap = 7;
        for(var i = -this.AngelPosArr;i<=this.AngelPosArr;i++){
            var k = Math.sqrt(Math.pow(this.radius,2)-Math.pow(Math.abs(i),2));

            var lk = Math.sqrt(Math.pow(goGap,2)-Math.pow(Math.abs(i*goGap/this.radius),2));

            if(i>0){
                this.posArr.push({sx:i+348,sy:k+141,mx:i*goGap/this.radius ,my:lk})
            }else if(i==0){
                this.posArr.push({sx:i+348,sy:k+141,mx:0,my:lk})
            }else if(i<0){
                this.posArr.push({sx:i+348,sy:k+141,mx:i*goGap/this.radius,my:lk})
            }
        }
        this.mStep = 0;
        this.gStep = 0;
        this.moveDirction = 0;
        this.hookActionType = 0;
    }
    __extends(t, e);
    t.prototype.hookAction = function(){
        if(this.hookActionType==0){
            this.swinging();
        }
        if(this.hookActionType == 1){
           this.going();
        }
        if(this.hookActionType == 2){
            this.goBack();
        }
    }
    t.prototype.swinging = function(){
        this.x = this.posArr[this.mStep].sx-12;
        this.y = this.posArr[this.mStep].sy-1;

        this.lx = this.posArr[this.mStep].sx;
        this.ly = this.posArr[this.mStep].sy;

        if(this.mStep==this.AngelPosArr*2)this.moveDirction=1;
        else if(this.mStep==0)this.moveDirction=0;
        switch(this.moveDirction){
            case 0:this.mStep++;break;
            case 1:this.mStep--;break;
        }
    }
    t.prototype.going = function(){
        this.gStep++;
        this.x+=this.posArr[this.mStep].mx;
        this.y+=this.posArr[this.mStep].my;

        this.lx+=this.posArr[this.mStep].mx;
        this.ly+=this.posArr[this.mStep].my;

        if(this.gStep==100){
            this.hookActionType = 2
        }
    }
    t.prototype.goBack = function(){
        this.gStep--;

        this.x-=this.posArr[this.mStep].mx;
        this.y-=this.posArr[this.mStep].my;

        this.lx-=this.posArr[this.mStep].mx;
        this.ly-=this.posArr[this.mStep].my;

        if(this.gStep<=0){
            this.hookActionType=0
        }
    }
    return t;
}(createjs.Bitmap);

var EffectContainer = function(e){
    function t() {
        e.call(this);
        var bombss = new createjs.SpriteSheet({
            "animations":
            {
                "bombing": [0, 3, "",0.5]
            },
            "images": [StateManager.g_instance.loader.getResult("bombed")],
            "frames":
            {
                "height": 200,
                "width":200,
                "regX": 0,
                "regY": 0,
                "count": 64
            }
        });

        this.bomb =  new createjs.Sprite(bombss,"");
        this.addChild(this.bomb);
        this.bomb.visible = false;


        this.netBomb = new createjs.Bitmap(StateManager.g_instance.loader.getResult("hnet"));
        this.addChild(this.netBomb);
        this.netBomb.visible = false;

        this.timeBomb = new createjs.Bitmap(StateManager.g_instance.loader.getResult("timeBomb"));
        this.addChild(this.timeBomb);
        this.timeBomb.visible = false;

    }
    __extends(t, e);
    t.prototype.bombPlay = function(px,py){
        this.bomb.visible = true;
        this.bomb.x = px;
        this.bomb.y = py;
        this.bomb.gotoAndPlay("bombing");
        createjs.Tween.get(this).wait(400).call(function(){
            this.removeMe();
        });
    }
    t.prototype.getNetbombPlay = function(px,py){
        var n = this;
        this.netBomb.visible = true;
        this.netBomb.x = px;
        this.netBomb.y = py;
        this.netBomb.regX = 112;
        this.netBomb.scaleX = 1;
        this.netBomb.scaleY = 1;
        this.netBomb.alpha = 1;
        createjs.Tween.get(this.netBomb).to({scaleX:2,scaleY:2,alpha:0},1000).call(function(){
            n.removeMe();
        });
    }
    t.prototype.getTimebombPlay = function(px,py){
        var n = this;
        this.timeBomb.visible = true;
        this.timeBomb.x = px;
        this.timeBomb.y = py;
        this.timeBomb.regX = 25;
        this.timeBomb.scaleX = 1;
        this.timeBomb.scaleY = 1;
        this.timeBomb.alpha = 1;
        createjs.Tween.get(this.timeBomb).to({scaleX:2,scaleY:2,alpha:0},1000).call(function(){
            n.removeMe();
        });
    }
    t.prototype.removeMe = function(){
        this.parent.removeChild(this);
        this.netBomb.visible = false;
        this.bomb.visible = false;
        this.timeBomb.visible = false;
    }

    return t;
}(createjs.Container);
