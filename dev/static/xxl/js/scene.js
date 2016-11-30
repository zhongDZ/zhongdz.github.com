var MyScene = cc.Scene.extend({
    gameLayer:{barlayer:40,touchlayer:30,showlayer:20},
    tick:0,
    showLayer:null,
    envelopeSpriteArr:null,
    envelopeRublishArr:[],
    envelopeBomeSpriteArr:[],
    playerSprite:null,
    topLab:null,

    topLayer:null,

    spriteword:null,
    spritebg:null,
    gesprite:null,
    shisprite:null,

    checkSameAllL:[],
    checkSameAllH:[],
    bomb:[],

    combotimes:0,

    resettime:0,

    checkdownnow:false,

    onEnter:function () {
        this._super();
        this.init();

    },
    init:function(){

        this.showLayer = cc.Layer.create();
        this.addChild(this.showLayer,this.gameLayer.showlayer);

        this.envelopeSpriteArr = [];

        for(var i = 0;i<=4;i++){
            this.envelopeSpriteArr[i] = [];
        }

        this.envelopeBomeSpriteArr = [];

        for(var i = 0;i<=4;i++){
            this.envelopeBomeSpriteArr[i] = [];
        }

        var size = cc.director.getWinSize();

        var mainbackground = cc.Sprite.create(res.main_bg);
        mainbackground.setPosition(size.width / 2, mainbackground.getContentSize().height/2)
        this.showLayer.addChild(mainbackground);


        var topBarLayer = cc.Layer.create();
        var topBarSprite = cc.Sprite.create(res.top_bar);
        topBarSprite.setPosition(size.width / 2, size.height-topBarSprite.getContentSize().height/2)
        topBarLayer.addChild(topBarSprite);
        this.timeLoadingBar = new  loadingSprite();
        this.timeLoadingBar.setPrecent(80);
        topBarLayer.addChild(this.timeLoadingBar);
        
        this.topLab = new cc.LabelTTF(game.score, "70", 80, cc.size(270, 90), cc.TEXT_ALIGNMENT_LEFT);
        topBarLayer.addChild(this.topLab, 10);
        this.topLab.fillStyle =cc.color(255, 230, 0, 255)
        this.addChild(topBarLayer,this.gameLayer.barlayer);
        this.topLab.x = 410;
        this.topLab.y = 910;

        this.topLayer =   topBarLayer;

        var canreset = true;

        var item1 = new cc.MenuItemImage(res.refresh_but, res.refresh_but, function(){

            if(!canreset)return;
            canreset=false;
            for(var l = 0;l<=4;l++){
                for(var h = 0;h<=5;h++){
                    this.showLayer.removeChild(this.envelopeSpriteArr[l][h]);
                }
            }

            this.envelopeSpriteArr = [];

            for(var i = 0;i<=4;i++){
                this.envelopeSpriteArr[i] = [];
            }

            this.initAddEnvelopeSprites();
            item1.setColor(cc.color(100, 100, 0, 255));

            var delaytime = cc.delayTime(7);

            var callbackfunc = cc.callFunc(function(){
                canreset = true;
                item1.setColor(cc.color(255, 255, 255, 255));
            },this);

            this.runAction(cc.sequence(delaytime,callbackfunc));
        }, this);
        item1.setPosition(250, 410);


        var menu = new cc.Menu(item1);
        topBarLayer.addChild(menu, 1);

        var touchLayer = cc.Layer.create();
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: onTouchesBegan,
            onTouchMoved: onTouchesMoved,
            onTouchEnded: onTouchesEnded
        }, touchLayer);

        function onTouchesBegan(touch,event){
        }
        function onTouchesMoved(touch,event){
        }
        function onTouchesEnded(touch,event){
        }

        this.spriteword = new cc.Sprite(res.combo_word);
        this.spritebg = new cc.Sprite(res.combo_bg);
        this.spriteword.setScale(0.7);
        this.spritebg.setScale(0.7);
        this.topLayer.addChild(this.spritebg,20);
        this.topLayer.addChild(this.spriteword,20)

        this.spriteword.setPosition(cc.p(size.width / 2,890));
        this.spritebg.setPosition(cc.p(size.width / 2,890));

        var texture = cc.textureCache.addImage(res.combo_num);

        var framew = 61.9;
        var frameh = 182;

        var frame0 = new cc.SpriteFrame(texture, cc.rect(framew * 0, frameh * 0, framew, frameh));
        this.gesprite = new cc.Sprite(frame0);

        var frame1 = new cc.SpriteFrame(texture, cc.rect(framew * 0, frameh * 0, framew, frameh));
        this.shisprite = new cc.Sprite(frame1);

        this.gesprite.setScale(0.7);
        this.shisprite.setScale(0.7);

        this.gesprite.setPosition(cc.p(size.width / 2+30,890));
        this.shisprite.setPosition(cc.p(size.width / 2+30,890));

        this.topLayer.addChild(this.gesprite,20);
        this.topLayer.addChild(this.shisprite,20)

        this.spriteword.setVisible(false);
        this.spritebg.setVisible(false);
       this.shisprite.setVisible(false);
        this.gesprite.setVisible(false);

        var scheduler = cc.director.getScheduler();

        var priority = 0;  // priority 0. default.
        var paused = false; // not paused, queue it now.
        scheduler.scheduleUpdateForTarget(this, priority, paused);

        this.initAddEnvelopeSprites();

    },update:function(dt){
        if(!global_game_start){
            global_game_start = false;
            return;
        }
        this.tick++;

        if(this.tick%60==0){

            if(game.time>=0){
                this.timeLoadingBar.setPrecent((game.time/14*100)|0);
                game.time--;
            }else if(game.time<0){
                this.timeLoadingBar.setPrecent(0);
                game.time = 0
            }else if(game.time>=game.alltime){
                this.timeLoadingBar.setPrecent(100);
                game.time = game.alltime;
                game.time--;
            }
            //if(game.time==0)cc.director.runScene(new EndScene());
            // if(game.time == 0){console.log("end");this.unscheduleUpdate();}
            if(game.time==0){
	        	$('.outTime').show();
	            $('.outTimeTip').html('正在提交分数,请稍后...');
	            game.resetGame();
                var beginScene = new BeginScene();
                cc.director.runScene(new BeginScene());
            }
        }

        if(game.envelopeTouch){
            game.envelopeTouch = false;
            for(var l = 0;l<=4;l++){
                for(var h = 0;h<=5;h++){
                    if(this.envelopeSpriteArr[l][h].DirectionType!=5){
                        var etype = this.envelopeSpriteArr[l][h].DirectionType;

                        this.envelopeMoveOther(l,h,etype);
                        return;
                    }
                }
            }
        }

        //if(this.checkdownnow){
        //    this.allEnvelopeSpriteSetPos();
        //}
        this.showComboLab();
    },onExit:function(){
        this.unscheduleUpdate();
        this.removeAllChildrenWithCleanup(true);
    },initAddEnvelopeSprites:function(){//初始化红包位置

        for(var l = 0;l<=4;l++){
            for(var h = 0;h<=5;h++){
                var envelopebome = new envelopeBomeSprite();
                envelopebome.setPos(l,h);
                this.showLayer.addChild(envelopebome);
                this.envelopeBomeSpriteArr[l][h] = envelopebome;
            }
        }

        for(var l = 0;l<=4;l++){
            for(var h = 0;h<=5;h++){
                var envelopeSprite1 = new envelopeSprite();
                envelopeSprite1.setPos(l,h)
                this.showLayer.addChild(envelopeSprite1);
                this.envelopeSpriteArr[l][h] = envelopeSprite1;
            }
        }

        var delay2 = cc.delayTime(0.6);
        var callfunc2 = cc.callFunc(function(){
            this.changAllEvelope();
        }, this);

        var seq2 = cc.sequence(delay2,callfunc2);
        this.runAction(seq2);



    },envelopeMoveOther:function(l,h,etype){//移动红包

        var turnl;
        var turnh;
        switch(etype){
            case 0:{
                turnl = l , turnh= h+1;
                if(this.envelopeSpriteArr[turnl][turnh].downnow)return;
                if(this.envelopeSpriteArr[turnl][turnh].movenow)return;
                this.envelopeSpriteArr[turnl][turnh].Down();
                this.envelopeSpriteArr[l][h].Up();
                break;
            }
            case 1:{
                turnl = l , turnh= h-1;
                if(this.envelopeSpriteArr[turnl][turnh].downnow)return;
                if(this.envelopeSpriteArr[turnl][turnh].movenow)return;
                this.envelopeSpriteArr[turnl][turnh].Up();
                this.envelopeSpriteArr[l][h].Down();
                break;
            }
            case 2:{
                turnl = l-1 , turnh= h;
                if(this.envelopeSpriteArr[turnl][turnh].downnow)return;
                if(this.envelopeSpriteArr[turnl][turnh].movenow)return;
                this.envelopeSpriteArr[turnl][turnh].Right();
                this.envelopeSpriteArr[l][h].Left();
                break;
            }
            case 3:{
                turnl = l+1 , turnh= h;
                if(this.envelopeSpriteArr[turnl][turnh].downnow)return;
                if(this.envelopeSpriteArr[turnl][turnh].movenow)return;
                this.envelopeSpriteArr[turnl][turnh].Left();
                this.envelopeSpriteArr[l][h].Right();
                break;
            }
        }
        this.envelopeSpriteArr[turnl][turnh].movenow = true
        this.envelopeSpriteArr[l][h].movenow = true
        var turn = this.envelopeSpriteArr[l][h];
        this.envelopeSpriteArr[l][h] = this.envelopeSpriteArr[turnl][turnh];
        this.envelopeSpriteArr[turnl][turnh] = turn;

        var turntype = etype;
        var el = l;
        var eh = h;


        var delay1 = cc.delayTime(0);
        var callfunc1 = cc.callFunc(function(){
            this.changAllEvelope(true,l,h,turnl,turnh,turntype);
        }, this);


        var seq1 = cc.sequence(delay1,callfunc1);
        this.runAction(seq1);


    },changAllEvelope:function(ismove,l,h,tl,th,ey){
        if(ismove) {
            if (this.envelopeSpriteArr[l][h].isOnSameAll) {
                var turntype = this.envelopeSpriteArr[tl][th].envelopeType;
                this.sameAllBome(turntype,l,h);
                return;
            }else if (this.envelopeSpriteArr[tl][th].isOnSameAll) {
                var turntype = this.envelopeSpriteArr[l][h].envelopeType;
                this.sameAllBome(turntype,tl,th);
                return;
            }
        }


        var LIE = 1;
        var HANG = 2;

        for(var i = 0;i<=4;i++){
            this.checkEvelopeSpriteArr(LIE,i,l,h,tl,th,ismove);
        }

        for(var i = 0;i<=5;i++){
            this.checkEvelopeSpriteArr(HANG,i,l,h,tl,th,ismove);
        }
        this.checkdownnow = true;
        this.checkSameAll();

        for(var i = 0;i<=4;i++){
            this.spliceEnvelopeSprite(i,0,0);
        }

        if(this.envelopeRublishArr.length == 0){

            if(ismove){


                var turntype = ey;
                var el = l;
                var eh = h;
                var turnl = tl;
                var turnh = th;

                switch(turntype){
                    case 0:{
                        this.envelopeSpriteArr[el][eh].Up(true);
                        this.envelopeSpriteArr[turnl][turnh].Down(true);
                        break;
                    }
                    case 1:{
                        this.envelopeSpriteArr[el][eh].Down(true);
                        this.envelopeSpriteArr[turnl][turnh].Up(true);
                        break;
                    }
                    case 2:{
                        this.envelopeSpriteArr[el][eh].Left(true);
                        this.envelopeSpriteArr[turnl][turnh].Right(true);
                        break;
                    }
                    case 3:{
                        this.envelopeSpriteArr[el][eh].Right(true);
                        this.envelopeSpriteArr[turnl][turnh].Left(true);
                        break;
                    }
                }

                var turn = this.envelopeSpriteArr[turnl][turnh];
                this.envelopeSpriteArr[turnl][turnh] = this.envelopeSpriteArr[el][eh];
                this.envelopeSpriteArr[el][eh] = turn;


            }
            if(this.combotimes!=0){
                if(this.combotimes>=2){
                    var size = cc.director.getWinSize();
                    this.showScoreLab(this.combotimes*100,4,6,cc.p(size.width / 2+80,920));
                    game.score+=this.combotimes*100;
                }
                this.combotimes = 0;
                this.spriteword.setVisible(false);
                this.spritebg.setVisible(false);
                this.shisprite.setVisible(false);
                this.gesprite.setVisible(false);
            }
            this.allEnvelopeSpriteSetPos();

            this.checkdownnow = false;
            return;
        }
        for(var l = 0;l<=4;l++){
            for(var h = 0;h<=5;h++){
                if(this.envelopeSpriteArr[l][h]!=undefined){
                    this.envelopeSpriteArr[l][h].movenow = false;
                }
            }
        }

        this.changeEvelopeSpriteArr();



    } ,checkEvelopeSpriteArr:function(lorr,num,bl,bh,btl,bth,ism){//遍历同行或列中相同的红包

        var checkednum = 0;
        var checkremoveBeginnum = 0;

        if(lorr==1){//lie
            var checkevelopetype = this.envelopeSpriteArr[num][0].envelopeType;
            var bol;
            var boh;
            var havebomb = false;
            for(var i = 0;i<=5;i++){

                if(this.envelopeSpriteArr[num][i]==undefined)continue;

                if(checkevelopetype == this.envelopeSpriteArr[num][i].envelopeType){
                    checkednum++;
                }



                if(checkevelopetype != this.envelopeSpriteArr[num][i].envelopeType){
                    if(checkednum>=3){

                        checkremoveBeginnum = i;
                        this.combotimes++;

                        for(var t=0;t<=5;t++){
                            this.envelopeSpriteArr[num][t].downnow = true;
                        }

                        for(var k = 1;k<=checkednum;k++ ){
                            this.envelopeSpriteArr[num][checkremoveBeginnum -k].removed = true;
                            this.envelopeBomeSpriteArr[num][checkremoveBeginnum -k].isBome = true;
                            if(this.envelopeSpriteArr[num][checkremoveBeginnum -k].isBomb){
                                bol = num;
                                boh = checkremoveBeginnum -k;
                                havebomb = true;
                            }
                        }

                        if(havebomb){
                            this.changeBomb(bol,boh);
                        }

                        if(checkednum==3){
                            this.checkSameAllL[num] = checkremoveBeginnum;
                            this.envelopeSpriteArr[num][checkremoveBeginnum - 2].isnormalboom = true;
                            this.envelopeSpriteArr[num][checkremoveBeginnum - 2].normaltype = 1;
                        }

                        if(checkednum==4){
                            if(ism){
                                if(num ==bl){

                                    this.envelopeSpriteArr[bl][bh].removed = false;
                                    this.envelopeSpriteArr[bl][bh].isFire = true;
                                    this.envelopeSpriteArr[bl][bh].isBomb = true;
                                }else{
                                    this.envelopeSpriteArr[btl][bth].removed = false;
                                    this.envelopeSpriteArr[btl][bth].isFire = true;
                                    this.envelopeSpriteArr[btl][bth].isBomb = true;
                                }
                            }else{
                                this.envelopeSpriteArr[num][checkremoveBeginnum -2].removed = false;
                                this.envelopeSpriteArr[num][checkremoveBeginnum -2].isFire = true;
                                this.envelopeSpriteArr[num][checkremoveBeginnum -2].isBomb = true;
                            }
                        }
                        if(checkednum==5){
                            if(ism){
                                if(num ==bl){

                                    this.envelopeSpriteArr[bl][bh].removed = false;
                                    this.envelopeSpriteArr[bl][bh].isStar = true;
                                    this.envelopeSpriteArr[bl][bh].isBomb = true;
                                }else{
                                    this.envelopeSpriteArr[btl][bth].removed = false;
                                    this.envelopeSpriteArr[btl][bth].isStar = true;
                                    this.envelopeSpriteArr[btl][bth].isBomb = true;
                                }
                            }else{
                                this.envelopeSpriteArr[num][checkremoveBeginnum -2].removed = false;
                                this.envelopeSpriteArr[num][checkremoveBeginnum -2].isStar = true;
                                this.envelopeSpriteArr[num][checkremoveBeginnum -2].isBomb = true;
                            }
                        }
                    }
                    checkremoveBeginnum = 0;
                    checkednum = 1;
                    checkevelopetype = this.envelopeSpriteArr[num][i].envelopeType
                    havebomb= false;
                }
                if(i==5){
                    if(checkednum>=3){
                        this.combotimes++;
                        checkremoveBeginnum = i;

                        for(var t=0;t<=5;t++){
                            this.envelopeSpriteArr[num][t].downnow = true;
                        }

                        for(var k = 0;k<=checkednum-1;k++ ){
                            this.envelopeSpriteArr[num][checkremoveBeginnum -k].removed = true;
                            this.envelopeBomeSpriteArr[num][checkremoveBeginnum -k].isBome = true;
                            if(this.envelopeSpriteArr[num][checkremoveBeginnum -k].isBomb){
                                bol = num;
                                boh = checkremoveBeginnum -k;
                                havebomb = true;
                            }
                        }

                        if(havebomb){
                            this.changeBomb(bol,boh);
                        }

                        if(checkednum==3){
                            this.checkSameAllL[num] = checkremoveBeginnum;
                            this.envelopeSpriteArr[num][checkremoveBeginnum - 1].isnormalboom = true;
                            this.envelopeSpriteArr[num][checkremoveBeginnum - 1].normaltype = 1;
                        }

                        if(checkednum==4){
                            if(ism){
                                if(num ==bl){

                                    this.envelopeSpriteArr[bl][bh].removed = false;
                                    this.envelopeSpriteArr[bl][bh].isFire = true;
                                    this.envelopeSpriteArr[bl][bh].isBomb = true;
                                }else{
                                    this.envelopeSpriteArr[btl][bth].removed = false;
                                    this.envelopeSpriteArr[btl][bth].isFire = true;
                                    this.envelopeSpriteArr[btl][bth].isBomb = true;
                                }
                            }else{
                                this.envelopeSpriteArr[num][checkremoveBeginnum -2].removed = false;
                                this.envelopeSpriteArr[num][checkremoveBeginnum -2].isFire = true;
                                this.envelopeSpriteArr[num][checkremoveBeginnum -2].isBomb = true;

                            }
                        }
                        if(checkednum==5){

                            if(ism){
                                if(num ==bl){

                                    this.envelopeSpriteArr[bl][bh].removed = false;
                                    this.envelopeSpriteArr[bl][bh].isStar = true;
                                    this.envelopeSpriteArr[bl][bh].isBomb = true;
                                }else{
                                    this.envelopeSpriteArr[btl][bth].removed = false;
                                    this.envelopeSpriteArr[btl][bth].isStar = true;
                                    this.envelopeSpriteArr[btl][bth].isBomb = true;
                                }
                            }else{
                                this.envelopeSpriteArr[num][checkremoveBeginnum -2].removed = false;
                                this.envelopeSpriteArr[num][checkremoveBeginnum -2].isStar = true;
                                this.envelopeSpriteArr[num][checkremoveBeginnum -2].isBomb = true;
                            }
                        }
                    }
                }
            }

        }else {//hang
            var checkevelopetype = this.envelopeSpriteArr[0][num].envelopeType;
            var havebomb = false;
            var bol;
            var boh;
            for(var i = 0;i<=4;i++){

                if(this.envelopeSpriteArr[i][num]==undefined)continue;

                if (checkevelopetype == this.envelopeSpriteArr[i][num].envelopeType) {
                    checkednum++;
                }

                if(checkevelopetype != this.envelopeSpriteArr[i][num].envelopeType){
                    if(checkednum>=3){
                        this.combotimes++;
                        checkremoveBeginnum = i;
                        for(var k = 1;k<=checkednum;k++ ){

                            for(var t=0;t<=5;t++){
                                this.envelopeSpriteArr[checkremoveBeginnum -k][t].downnow = true;
                            }

                            this.envelopeSpriteArr[checkremoveBeginnum -k][num].removed = true;
                            this.envelopeBomeSpriteArr[checkremoveBeginnum -k][num].isBome = true;
                            if(this.envelopeSpriteArr[checkremoveBeginnum -k][num].isBomb){
                                bol = checkremoveBeginnum -k;
                                havebomb = true;
                                boh = num;
                            }
                        }

                        if(havebomb){
                            this.changeBomb(bol,boh);
                        }

                        if(checkednum==3){
                            this.checkSameAllH.push(num);
                            this.envelopeSpriteArr[checkremoveBeginnum -2][num].isnormalboom = true;
                            this.envelopeSpriteArr[checkremoveBeginnum - 2][num].normaltype = 2;
                        }

                        if(checkednum==4){
                            if(ism){
                                if(num ==bh){

                                    this.envelopeSpriteArr[bl][bh].removed = false;
                                    this.envelopeSpriteArr[bl][bh].isFire = true;
                                    this.envelopeSpriteArr[bl][bh].isBomb = true;
                                }else{
                                    this.envelopeSpriteArr[btl][bth].removed = false;
                                    this.envelopeSpriteArr[btl][bth].isFire = true;
                                    this.envelopeSpriteArr[btl][bth].isBomb = true;
                                }
                            }else{
                                this.envelopeSpriteArr[checkremoveBeginnum -2][num].removed = false;
                                this.envelopeSpriteArr[checkremoveBeginnum -2][num].isFire = true;
                                this.envelopeSpriteArr[checkremoveBeginnum -2][num].isBomb = true;
                            }

                        }
                        if(checkednum==5){
                            this.combotimes++;
                            if(ism){
                                if(num ==bh){

                                    this.envelopeSpriteArr[bl][bh].removed = false;
                                    this.envelopeSpriteArr[bl][bh].isStar = true;
                                    this.envelopeSpriteArr[bl][bh].isBomb = true;
                                }else{
                                    this.envelopeSpriteArr[btl][bth].removed = false;
                                    this.envelopeSpriteArr[btl][bth].isStar = true;
                                    this.envelopeSpriteArr[btl][bth].isBomb = true;
                                }
                             }else {
                                this.envelopeSpriteArr[checkremoveBeginnum - 2][num].removed = false;
                                this.envelopeSpriteArr[checkremoveBeginnum - 2][num].isStar = true;
                                this.envelopeSpriteArr[checkremoveBeginnum - 2][num].isBomb = true;
                             }
                        }
                    }
                    checkednum = 1;
                    checkevelopetype = this.envelopeSpriteArr[i][num].envelopeType
                    checkremoveBeginnum = 0;
                    havebomb= false;
                }
                if(i==4){
                    if(checkednum>=3){
                        this.combotimes++;
                        checkremoveBeginnum = i;
                        for(var k = 0;k<=checkednum-1;k++ ){

                            for(var t=0;t<=5;t++){
                                this.envelopeSpriteArr[checkremoveBeginnum -k][t].downnow = true;
                            }

                            this.envelopeSpriteArr[checkremoveBeginnum -k][num].removed = true;
                            this.envelopeBomeSpriteArr[checkremoveBeginnum -k][num].isBome = true;
                            if(this.envelopeSpriteArr[checkremoveBeginnum -k][num].isBomb){
                                bol = checkremoveBeginnum -k;
                                boh = num;
                                havebomb = true;
                            }
                        }

                        if(havebomb){
                            this.changeBomb(bol,boh);
                        }

                        if(checkednum==3){
                            this.checkSameAllH.push(num);
                            this.envelopeSpriteArr[checkremoveBeginnum - 1][num].isnormalboom = true;
                            this.envelopeSpriteArr[checkremoveBeginnum - 1][num].normaltype = 2;
                        }

                        if(checkednum==4){
                            if(ism){
                                if(num ==bh){

                                    this.envelopeSpriteArr[bl][bh].removed = false;
                                    this.envelopeSpriteArr[bl][bh].isFire = true;
                                    this.envelopeSpriteArr[bl][bh].isBomb = true;
                                }else{
                                    this.envelopeSpriteArr[btl][bth].removed = false;
                                    this.envelopeSpriteArr[btl][bth].isFire = true;
                                    this.envelopeSpriteArr[btl][bth].isBomb = true;
                                }
                            }else {
                                this.envelopeSpriteArr[checkremoveBeginnum - 2][num].removed = false;
                                this.envelopeSpriteArr[checkremoveBeginnum - 2][num].isFire = true;
                                this.envelopeSpriteArr[checkremoveBeginnum - 2][num].isBomb = true;
                            }

                        }
                        if(checkednum==5){
                            if(ism){
                                if(num ==bh){

                                    this.envelopeSpriteArr[bl][bh].removed = false;
                                    this.envelopeSpriteArr[bl][bh].isStar = true;
                                    this.envelopeSpriteArr[bl][bh].isBomb = true;
                                }else{
                                    this.envelopeSpriteArr[btl][bth].removed = false;
                                    this.envelopeSpriteArr[btl][bth].isStar = true;
                                    this.envelopeSpriteArr[btl][bth].isBomb = true;
                                }
                            }else {
                                this.envelopeSpriteArr[checkremoveBeginnum - 2][num].removed = false;
                                this.envelopeSpriteArr[checkremoveBeginnum - 2][num].isStar = true;
                                this.envelopeSpriteArr[checkremoveBeginnum - 2][num].isBomb = true;
                            }
                        }

                    }
                }
            }
        }
        //删除相同的对象

    },checkSameAll:function(){
        //console.log("H",this.checkSameAllH);
        //console.log("L",this.checkSameAllL);

        //if(this.checkSameAllH.length!=0){
        //    for(var i = 0;i<=this.checkSameAllH.length-1;i++){
        //        for(var k=0;k<=4;k++){
        //            var checkbnum = this.checkSameAllL[k];
        //            for(var l = 0;l<=3;l++){
        //                if(this.checkSameAllH[i] == checkbnum){
        //                    this.envelopeSpriteArr[k][checkbnum].removed = false;
        //                    this.envelopeSpriteArr[k][checkbnum].isSameAll = true;
        //                };
        //                checkbnum --;
        //            }
        //        }
        //    }
        //
        //}
        //
        //this.checkSameAllL = [];
        //this.checkSameAllH = [];

        for(var l = 0;l<=4;l++){
            for(var h = 0;h<=5;h++){
                if(this.envelopeSpriteArr[l][h].isnormalboom){
                  // console.log(l,h);
                    if(this.envelopeSpriteArr[l][h].normaltype==1){
                        if(h!=0){
                            //if(this.envelopeSpriteArr[l][h-1].isnormalboom){
                            //    this.envelopeSpriteArr[l][h-1].removed = false;
                            //    this.envelopeSpriteArr[l][h-1].isSameAll = true;
                            //}
                            if(l!=0){
                                if(this.envelopeSpriteArr[l-1][h-1].isnormalboom){
                                    this.envelopeSpriteArr[l][h-1].removed = false;
                                    this.envelopeSpriteArr[l][h-1].isSameAll = true;
                                    return;
                                }
                            }
                            if(l!=4){
                                if(this.envelopeSpriteArr[l+1][h-1].isnormalboom){
                                    this.envelopeSpriteArr[l][h-1].removed = false;
                                    this.envelopeSpriteArr[l][h-1].isSameAll = true;
                                    return;
                                }
                            }

                        }
                        if(h!=5){
                            //if(this.envelopeSpriteArr[l][h+1].isnormalboom){
                            //    this.envelopeSpriteArr[l][h+1].removed = false;
                            //    this.envelopeSpriteArr[l][h+1].isSameAll = true;
                            //}
                            if(l!=0){
                                if(this.envelopeSpriteArr[l-1][h+1].isnormalboom){
                                    this.envelopeSpriteArr[l][h+1].removed = false;
                                    this.envelopeSpriteArr[l][h+1].isSameAll = true;
                                    return;
                                }
                            }
                            if(l!=4){
                                if(this.envelopeSpriteArr[l+1][h+1].isnormalboom){
                                    this.envelopeSpriteArr[l][h+1].removed = false;
                                    this.envelopeSpriteArr[l][h+1].isSameAll = true;
                                    return;
                                }
                            }

                        }
                    }
                }
            }
        }

    } ,spliceEnvelopeSprite:function(lnum,hnum,times){
        var rtimes = times;
        if(rtimes<=5){
            rtimes++;
            if(this.envelopeSpriteArr[lnum][hnum].removed){
                this.envelopeRublishArr.push(this.envelopeSpriteArr[lnum][hnum]);
                this.envelopeSpriteArr[lnum].splice(hnum,1);
                this.spliceEnvelopeSprite(lnum,hnum,rtimes);
            }else {
                var rhnum = hnum;
                rhnum++;
                this.spliceEnvelopeSprite(lnum,rhnum,rtimes);
            }
        }

    },changeEvelopeSpriteArr:function(){

            for(var i = 0;i<=this.envelopeRublishArr.length-1;i++){
                if(this.envelopeRublishArr[i].isnormalboom&&!this.envelopeRublishArr[i].isnotBomb){
                    this.showScoreLab(300,this.envelopeRublishArr[i].envelopeL,this.envelopeRublishArr[i].envelopeH);
                }
                this.showLayer.removeChild(this.envelopeRublishArr[i]);

            }

            for(var l = 0;l<=this.envelopeSpriteArr.length-1;l++){
                for(var h = 0;h<=this.envelopeSpriteArr[l].length-1;h++){
                    if(this.envelopeSpriteArr[l][h].isFire&&!this.envelopeSpriteArr[l][h].isOnFire){
                        this.showScoreLab(500,this.envelopeSpriteArr[l][h].envelopeL,this.envelopeSpriteArr[l][h].envelopeH);
                    }
                    if(this.envelopeSpriteArr[l][h].isStar&&!this.envelopeSpriteArr[l][h].isOnStar){
                        this.showScoreLab(500,this.envelopeSpriteArr[l][h].envelopeL,this.envelopeSpriteArr[l][h].envelopeH);
                    }
                    if(this.envelopeSpriteArr[l][h].isSameAll&&!this.envelopeSpriteArr[l][h].isOnSameAll){
                        this.showScoreLab(500,this.envelopeSpriteArr[l][h].envelopeL,this.envelopeSpriteArr[l][h].envelopeH);
                    }
                }
            }


            game.time+=this.envelopeRublishArr.length*0.5;
            if(game.time>=game.alltime)game.time = game.alltime;
            this.envelopeRublishArr = [];

            this.topLab.string = game.score;


            for(var l = 0;l<=4;l++){
                for(var h = 0;h<=5;h++){
                    this.envelopeBomeSpriteArr[l][h].selectBome();
                }
            }

            for(var i = 0;i<=4;i++){
                if(this.envelopeSpriteArr[i].length<6){
                    var addnum = 6 - this.envelopeSpriteArr[i].length;
                    for(var k = 0;k<=addnum-1;k++){

                        var envelopeSprite1 = new envelopeSprite();
                        envelopeSprite1.addnum = k;
                        this.showLayer.addChild(envelopeSprite1);
                        this.envelopeSpriteArr[i].push(envelopeSprite1);
                    }
                }
            }

        this.allEnvelopeSpriteSetPos();

        var delay2 = cc.delayTime(0.6);
        var callfunc2 = cc.callFunc(function(){
            this.changAllEvelope();
        }, this);


        var seq1 = cc.sequence(delay2,callfunc2);
        this.runAction(seq1);


    },allEnvelopeSpriteSetPos:function(){
        for(var l = 0;l<=4;l++){
            for(var h = 0;h<=5;h++){
                if(this.envelopeSpriteArr[l][h]!=undefined){
                    this.envelopeSpriteArr[l][h].setPos(l,h,true);
                }
            }
        }
    },changeBomb:function(bl,bh){

        if(this.envelopeSpriteArr[bl][bh].isBombed){
            return;
        }
        var scorenum = 0;

        var havebombarr = [];

        this.envelopeSpriteArr[bl][bh].removed = true;
        this.envelopeSpriteArr[bl][bh].isnotBomb = true;
        this.envelopeSpriteArr[bl][bh].isBombed = true;
        if(this.envelopeSpriteArr[bl][bh].isOnFire){
            this.envelopeBomeSpriteArr[bl][bh].isFireBome = true;
            scorenum++;
            if(bl>0){
                this.envelopeSpriteArr[bl-1][bh].removed = true;
                this.envelopeBomeSpriteArr[bl-1][bh].isFireBome = true;
                this.envelopeSpriteArr[bl-1][bh].isnotBomb = true;

                if(this.envelopeSpriteArr[bl-1][bh].isBomb){
                    var bombobj = {x:bl-1,y:bh};
                    havebombarr.push(bombobj);
                   // this.changeBomb(bl-1,bh);
                }
                scorenum++;
                if(bh>0){
                    this.envelopeSpriteArr[bl-1][bh-1].removed = true;
                    this.envelopeBomeSpriteArr[bl-1][bh-1].isFireBome = true;
                    this.envelopeSpriteArr[bl-1][bh-1].isnotBomb = true;
                    scorenum++;
                    if(this.envelopeSpriteArr[bl-1][bh-1].isBomb){
                        var bombobj = {x:bl-1,y:bh-1};
                        havebombarr.push(bombobj);
                      //  this.changeBomb(bl-1,bh-1);
                    }
                }
                if(bh<5){
                    this.envelopeSpriteArr[bl-1][bh+1].removed = true;
                    this.envelopeBomeSpriteArr[bl-1][bh+1].isFireBome = true;
                    this.envelopeSpriteArr[bl-1][bh+1].isnotBomb = true;
                    scorenum++;
                    if(this.envelopeSpriteArr[bl-1][bh+1].isBomb){
                        var bombobj = {x:bl-1,y:bh+1};
                        havebombarr.push(bombobj);
                       // this.changeBomb(bl-1,bh+1);
                    }
                }
            }
            if(bl<4){
                this.envelopeSpriteArr[bl+1][bh].removed = true;
                this.envelopeBomeSpriteArr[bl+1][bh].isFireBome = true;
                this.envelopeSpriteArr[bl+1][bh].isnotBomb = true;
                scorenum++;
                if(this.envelopeSpriteArr[bl+1][bh].isBomb){
                    var bombobj = {x:bl+1,y:bh};
                    havebombarr.push(bombobj);;
                  //  this.changeBomb(bl+1,bh);
                }
                if(bh>0){
                    this.envelopeSpriteArr[bl+1][bh-1].removed = true;
                    this.envelopeBomeSpriteArr[bl+1][bh-1].isFireBome = true;
                    this.envelopeSpriteArr[bl+1][bh-1].isnotBomb = true;
                    scorenum++;
                    if(this.envelopeSpriteArr[bl+1][bh-1].isBomb){
                        var bombobj = {x:bl+1,y:bh-1};
                        havebombarr.push(bombobj);
                      //  this.changeBomb(bl+1,bh-1);
                    }
                }
                if(bh<5){
                    this.envelopeSpriteArr[bl+1][bh+1].removed = true;
                    this.envelopeBomeSpriteArr[bl+1][bh+1].isFireBome = true;
                    this.envelopeSpriteArr[bl+1][bh+1].isnotBomb = true;
                    scorenum++;
                    if(this.envelopeSpriteArr[bl+1][bh+1].isBomb){
                        var bombobj = {x:bl+1,y:bh+1};
                        havebombarr.push(bombobj);
                       // this.changeBomb(bl+1,bh+1);
                    }
                }
            }
            if(bh>0){
                this.envelopeSpriteArr[bl][bh-1].removed = true;
                this.envelopeBomeSpriteArr[bl][bh-1].isFireBome = true;
                this.envelopeSpriteArr[bl][bh-1].isnotBomb = true;
                scorenum++;
                if(this.envelopeSpriteArr[bl][bh-1].isBomb){
                    var bombobj = {x:bl,y:bh-1};
                    havebombarr.push(bombobj);
                  //  this.changeBomb(bl,bh-1);
                }
            }
            if(bh<5){
                this.envelopeSpriteArr[bl][bh+1].removed = true;
                this.envelopeBomeSpriteArr[bl][bh+1].isFireBome = true;
                this.envelopeSpriteArr[bl][bh+1].isnotBomb = true;
                scorenum++;
                if(this.envelopeSpriteArr[bl][bh+1].isBomb){
                    var bombobj = {x:bl,y:bh+1};
                    havebombarr.push(bombobj);
                   // this.changeBomb(bl,bh+1);
                }
            }

            this.showScoreLab(scorenum*100+500,bl,bh);

        }else if(this.envelopeSpriteArr[bl][bh].isOnStar){

            for(var i = 0;i<=5;i++){
                this.envelopeSpriteArr[bl][i].removed = true;
                this.envelopeBomeSpriteArr[bl][i].isFreshBome = true;
                this.envelopeBomeSpriteArr[bl][i].freshtype = 1;
                this.envelopeSpriteArr[bl][i].isnotBomb = true;
                if(this.envelopeSpriteArr[bl][i].isBomb){
                    var bombobj = {x:bl,y:i};
                    havebombarr.push(bombobj);
                    //this.changeBomb(bl,i);
                }
            }
            for(var i = 0;i<=4;i++){
                this.envelopeSpriteArr[i][bh].removed = true;
                this.envelopeBomeSpriteArr[i][bh].isFreshBome = true;
                this.envelopeBomeSpriteArr[i][bh].freshtype = 2;
                this.envelopeSpriteArr[i][bl].isnotBomb = true;
                if(this.envelopeSpriteArr[i][bl].isBomb){

                    var bombobj = {x:i,y:bh};
                    havebombarr.push(bombobj);
                   // this.changeBomb(i,bl);
                }
            }
            this.envelopeBomeSpriteArr[bl][bh].isFreshBome = true;
            this.envelopeBomeSpriteArr[bl][bh].freshtype = 0;
            this.showScoreLab(1700,bl,bh);
        }

        for(var i = 0;i<=havebombarr.length-1;i++){

            this.changeBomb(havebombarr[i].x,havebombarr[i].y);
        }

    },sameAllBome:function(ey,ml,mh){

        this.combotimes++;
        var scorenum = 0;
        for(var l = 0;l<=4;l++){
            for(var h = 0;h<=5;h++){
                if(this.envelopeSpriteArr[l][h].envelopeType == ey){
                    this.envelopeSpriteArr[l][h].removed = true;
                    this.envelopeBomeSpriteArr[l][h].isBome = true;
                    this.envelopeSpriteArr[l][h].Big();

                    if(this.envelopeSpriteArr[l][h].isBomb){
                        this.changeBomb(l,h);
                    }
                    scorenum++;
                };
            }
        }
        this.showScoreLab(scorenum*100+600,ml,mh);
        this.envelopeSpriteArr[ml][mh].Big();
        this.envelopeSpriteArr[ml][mh].removed = true;
        this.envelopeBomeSpriteArr[ml][mh].isBome = true;

        for(var i = 0;i<=4;i++){
            this.spliceEnvelopeSprite(i,0,0);
        }
        var delaytime = cc.delayTime(0.2);

        var callfunc = cc.callFunc(function(){
            this.changeEvelopeSpriteArr();
        }, this);
        var seq = cc.sequence(delaytime,callfunc);
        this.runAction(seq);
    },showComboLab:function(num){

        if(this.combotimes>1){
            this.spriteword.setVisible(true);
            this.spritebg.setVisible(true);
            // this.shisprite.setVisible(false);
            this.gesprite.setVisible(true);
        }


        var size = cc.director.getWinSize();
        var texture = cc.textureCache.addImage(res.combo_num);
        var framew = 61.9;
        var frameh = 182;

        if(this.combotimes<10){
            var frame0 = new cc.SpriteFrame(texture, cc.rect(framew * this.combotimes, frameh * 0, framew, frameh));
            this.gesprite.setSpriteFrame(frame0);
            this.gesprite.setPosition(cc.p(size.width / 2+150,890));
            //this.shisprite.setVisible(false);

        }else {
            var genum = this.combotimes%10;
            this.shisprite.setVisible(true);
            var frame0 = new cc.SpriteFrame(texture, cc.rect(framew * genum, frameh * 0, framew, frameh));
            this.gesprite.setSpriteFrame(frame0);
            this.gesprite.setPosition(cc.p(size.width / 2+185,890));
            var shinum = this.combotimes/10;

            var frame1 = new cc.SpriteFrame(texture, cc.rect(framew * shinum, frameh * 0, framew, frameh));
            this.shisprite.setSpriteFrame(frame1);
            this.shisprite.setPosition(cc.p(size.width / 2+150,890));
        }


    },showScoreLab:function(turnscore,l,h,pos){

        game.score+=turnscore;

        gameScore = game.score;//传值到结束页面


        var deviantx = 112;
        var devianty = 78;

        var scoreLab = new cc.LabelTTF(turnscore+"", "90", 40, cc.size(160, 50), cc.TEXT_ALIGNMENT_LEFT);
        this.topLayer.addChild(scoreLab, 10);

        scoreLab.fillStyle =cc.color(255, 255, 255, 255);
        scoreLab.setPosition(cc.p(l*130+deviantx,h*132+devianty));

        if(pos!=undefined){
            scoreLab.setPosition(pos);
        }


        var moveBy1 = cc.moveBy(1,cc.p(0,200));
        var fadeOut1 = cc.fadeOut(2);

        var spawn1 = cc.spawn(moveBy1,fadeOut1);

        var moveByCallfunc = cc.callFunc(function(){
            this.topLayer.removeChild(scoreLab);
        },this);
        var seq1 = cc.sequence(spawn1,moveByCallfunc);
        scoreLab.runAction(seq1)
    }

});

var EndScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        this.init();
    },
    init:function(){
        var size = cc.director.getWinSize();
        var mainbackground = cc.Sprite.create(res.endPage);
        mainbackground.setPosition(size.width / 2, size.height / 2);
        this.addChild(mainbackground, 0);

        var item1 = new cc.MenuItemImage(res.playagain, res.playagain, function(){
            game.resetGame();
            var beginScene = new BeginScene();
            cc.director.runScene(new BeginScene());

        }, this);
        item1.setPosition(1, -190);

        var menu = new cc.Menu(item1);
        this.addChild(menu, 1);

        var MoreItem = new cc.MenuItemSprite(new cc.Sprite(res.more),new cc.Sprite(res.more),function(){
            window.location.href = g_link;
        },this);
        MoreItem.setPosition(1, -450);
        var More = new cc.Menu(MoreItem);
        this.addChild(More,3);

        

        var endScoreLabel = new cc.LabelTTF(gameScore, "90", 40, cc.size(160, 50), cc.TEXT_ALIGNMENT_LEFT);
        endScoreLabel.fillStyle =cc.color(195, 103, 35, 255)
        endScoreLabel.x = cc.winSize.width/2 + 60;
        endScoreLabel.y = cc.winSize.height/2 - 115;
        this.addChild(endScoreLabel, 10);

        return; 
    }
});

var BeginScene = cc.Scene.extend({
    ctor:function(){

        this._super();
        this.init();
    },
    init:function(){
        var size = cc.director.getWinSize();
        var mainbackground = cc.Sprite.create(res.begin_bg);
        mainbackground.setPosition(size.width / 2, size.height / 2);
        this.addChild(mainbackground, 0);

        var item1 = new cc.MenuItemImage(res.begin_but, res.begin_but, function(){
            cc.director.runScene(new MyScene());
        }, this);
        item1.setPosition(0, -size.height / 6);

        var menu = new cc.Menu(item1);
        this.addChild(menu, 1);

        var prizeAndRuleMenuItem = new cc.MenuItemImage(res.prizeAndRule,res.prizeAndRule,this.callFun1,this);
        this.prizeAndRuleMenu = new cc.Menu(prizeAndRuleMenuItem);
        
        this.prizeAndRuleMenu.x = 80;
        this.prizeAndRuleMenu.y = size.height - 50;

        var phbMenuItem = new cc.MenuItemImage(res.phb,res.phb,this.callFun3,this);
        this.phbMenu = new cc.Menu(phbMenuItem);
        
        this.phbMenu.x = size.width - 200;
        this.phbMenu.y = size.height - 50;

        var myPrizeMenuItem = new cc.MenuItemImage(res.myPrize,res.myPrize,this.callFun2,this);
        this.myPrizeMenu = new cc.Menu(myPrizeMenuItem);
        
        this.myPrizeMenu.x = size.width - 80;
        this.myPrizeMenu.y = size.height - 50;

        var shuoming  = new cc.Sprite(res.guizeBg);
        shuoming.x = size.width/2;
        shuoming.y = size.height/2;
        this.addChild(shuoming,100);
        shuoming.setVisible(false);

        var menuItem1 = new cc.MenuItemSprite(new cc.Sprite(res.guize),new cc.Sprite(res.guize),function(){
                shuoming.setVisible(true);
                menu.setVisible(false);
                menu2.setVisible(true);
        },this);
        var menu1 = new cc.Menu(menuItem1);
        menu1.x = size.width/2;
        menu1.y = 130;
        this.addChild(menu1,3);

        var menuItem2 = new cc.MenuItemSprite(new cc.Sprite(res.back),new cc.Sprite(res.back),function(){
                shuoming.setVisible(false);
                menu.setVisible(true);
                menu2.setVisible(false);
        },this);
        var menu2 = new cc.Menu(menuItem2);
        menu2.x = size.width/2;
        menu2.y = size.height/2 - 100;
        this.addChild(menu2,101);
        menu2.setVisible(false);

        this.returnRound(res.round_1,5,1080);
        this.returnRound(res.round_2,3,360);
        this.returnRound(res.round_3,7,-720);

    },onExit:function(){
        this.removeAllChildrenWithCleanup(true);
    },returnRound:function(res,time,rotation){
        var size = cc.director.getWinSize();
        var round = cc.Sprite.create(res);
        round.setPosition(size.width / 2, size.height / 3);
        this.addChild(round, 0);

        var rotation  = cc.rotateBy(time, rotation)
        var seq1 = cc.sequence( rotation, rotation.reverse()).repeatForever();
        round.runAction(seq1)
    },
    callFun1:function(){
        ruleAndPrizeCallFun();
    },
    callFun2:function(){
       myPrizeCallFun();
    },
    callFun3:function(){
        myPMlistCallFun();
    }
});