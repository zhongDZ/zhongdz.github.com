function GetRandomNum(Min,Max)
{
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}
var envelopeSprite = cc.Sprite.extend({
    envelopeType:undefined,
    envelopeL:1000,
    envelopeH:1000,
    moveBoole:false,
    DirectionType:5,
    moveGap:130,
    removed:false,
    isInited:false,

    moveTime:0.1,
    downTime:0.3,
    isdownTime:0.3,
    fireStarAniTime:0.1,

    isFire:false,
    isStar:false,
    isSameAll:false,

    isOnFire:false,
    isOnStar:false,
    isOnSameAll:false,

    isnotBomb:false,

    isBomb:false,

    isBombed:false,

    isnormalboom:false,
    normaltype:0,

    downnow:false,

    nextpos:null,

    movenow:false,
    addnum:1000,
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        this.envelopeType = GetRandomNum(0,11);
        switch(this.envelopeType){
            case 0:{this.initWithFile(res.blue_envelope);break;}
            case 1:{this.initWithFile(res.green_envelope);break;}
            case 2:{this.initWithFile(res.red_envelope);break;}
            case 3:{this.initWithFile(res.yello_envelope);break;}
            case 4:{this.initWithFile(res.pink_envelope);break;}
            case 5:{this.initWithFile(res.zi_envelope);break;}

            case 6:{this.envelopeType = 0;this.initWithFile(res.blue_envelope);break;}
            case 7:{this.envelopeType = 1;this.initWithFile(res.green_envelope);break;}
            case 8:{this.envelopeType = 2;this.initWithFile(res.red_envelope);break;}
            case 9:{this.envelopeType = 3;this.initWithFile(res.yello_envelope);break;}
            case 10:{this.envelopeType = 4;this.initWithFile(res.pink_envelope);break;}
            case 11:{this.envelopeType = 5;this.initWithFile(res.zi_envelope);break;}

        }
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: onTouchBegan,
            onTouchMoved: onTouchMoved,
            onTouchEnded: onTouchEnded
        }, this);

        var beginLocation;
        var endLocation;

        function onTouchBegan(touch,event){
            if(self.movenow)return;
            if(self.downnow)return;
            beginLocation = touch.getLocation();
            return containsTouchLocation(touch);
        }
        function onTouchMoved(touch,event){

        }
        function onTouchEnded(touch,event){
            endLocation = touch.getLocation();
            var detalPos = cc.pSub(endLocation,beginLocation);
            if(Math.abs(detalPos.y)>Math.abs(detalPos.x)){
                if(detalPos.y<=-15&&self.envelopeH>0){//down
                    game.envelopeTouch = true;
                    self.DirectionType = 1;
                }else if(detalPos.y>=15&&self.envelopeH<5){//up
                    game.envelopeTouch = true;
                    self.DirectionType = 0;
                }
            }else if(Math.abs(detalPos.y)<Math.abs(detalPos.x)){
                if(detalPos.x>=15&&self.envelopeL<4){//right
                    game.envelopeTouch = true;
                    self.DirectionType = 3;
                }else if(detalPos.x<=-15&&self.envelopeL>0){//left
                    game.envelopeTouch = true;
                    self.DirectionType = 2;
                }
            }

        }

        function containsTouchLocation(touch) {
            var getPoint = touch.getLocation();
            var myRect = cc.rect(-75, -75, 130, 130);
            myRect.x += self.x;
            myRect.y += self.y;
            return cc.rectContainsPoint(myRect, getPoint);//this.convertTouchToNodeSpaceAR(touch));
        }


    },setPos:function(l,h,isdelay){

        //if(this.downnow)return;
        this.Stay();
        if(this.isInited){
            this.isFireOrStar();
        }
        var downnowcallbackfunc = cc.callFunc(function(){
            this.downnow = false;
        },this);


        if(this.envelopeH == h){
            var delay = cc.delayTime(0.8);
            var seq1 = cc.sequence(delay,downnowcallbackfunc);
            this.runAction(seq1);
            return
        };

        this.downnow = true;
        this.envelopeL = l,this.envelopeH = h;
        var deviantx = 62;
        var devianty = 78;

        var downnowcallbackfunc = cc.callFunc(function(){
            if(this.getPosition().y!=this.envelopeH*132+devianty)
                this.setPosition(cc.p(this.envelopeL*130+deviantx,this.envelopeH*132+devianty));
            this.downnow = false;
        },this);

        if(this.isInited){
            var delay = cc.delayTime(this.isdownTime);
            var moveTo = cc.moveTo(this.downTime,cc.p(l*130+deviantx,h*132+devianty)).easing(cc.easeIn(this.isdownTime-0.2));
            var seq1 = cc.sequence(delay,moveTo,downnowcallbackfunc);
            this.runAction(seq1);
            return;
        }
        //if(this.addnum!=1000){
        //    this.setPosition(cc.p(l*130+deviantx,this.addnum*50+devianty+800));
        //
        //    this.addnum = 1000;
        //}else{
        //    this.setPosition(cc.p(l*130+deviantx,h*50+devianty+1200));
        //}
        this.setPosition(cc.p(l*130+deviantx,h*50+devianty+1200));

        if(isdelay){
            var delay = cc.delayTime(this.isdownTime);
            var moveTo = cc.moveTo(this.downTime,cc.p(l*130+deviantx,h*132+devianty)).easing(cc.easeIn(this.isdownTime-0.2));;
            var seq1 = cc.sequence(delay,moveTo,downnowcallbackfunc);
            this.runAction(seq1);
        }else{
            var moveTo = cc.moveTo(this.downTime,cc.p(l*130+deviantx,h*132+devianty)).easing(cc.easeIn(this.isdownTime-0.2));;
            var seq1 = cc.sequence(moveTo,downnowcallbackfunc);
            this.runAction(seq1);
        }

        this.isInited = true;

    },Big:function(){
        var scaleto = cc.scaleTo(0.2,1.5);
        this.runAction(scaleto);
    },Up:function(iswait){
        this.envelopeH++;
        this.movenow = true;
        var deviantx = 62;
        var devianty = 78;
        var moveBy = cc.moveTo(this.moveTime,cc.p(this.envelopeL*130+deviantx,this.envelopeH*132+devianty));
        var moveByCallfuc = cc.callFunc(this.Stay,this);
        var seq1;
        if(iswait){
            var moveByCf = cc.callFunc(function(){
                this.movenow = false;
            },this);
            seq1 = cc.sequence(cc.delayTime(0.1),moveBy,moveByCallfuc,moveByCf);
        }else{
            seq1 = cc.sequence(moveBy,moveByCallfuc);
        }
        this.runAction(seq1);
    },Down:function(iswait){
        this.envelopeH--;
        this.movenow = true;
        var deviantx = 62;
        var devianty = 78;
        var moveBy = cc.moveTo(this.moveTime,cc.p(this.envelopeL*130+deviantx,this.envelopeH*132+devianty));
        var moveByCallfuc = cc.callFunc(this.Stay,this);
        var seq1;
        if(iswait){
            var moveByCf = cc.callFunc(function(){
                this.movenow = false;
            },this);
            seq1 = cc.sequence(cc.delayTime(0.1),moveBy,moveByCallfuc,moveByCf);
        }else{
            seq1 = cc.sequence(moveBy,moveByCallfuc);
        }
        this.runAction(seq1);
    },Left:function(iswait){
        this.envelopeL--;
        this.movenow = true;
        var deviantx = 62;
        var devianty = 78;
        var moveBy = cc.moveTo(this.moveTime,cc.p(this.envelopeL*130+deviantx,this.envelopeH*132+devianty));
        var moveByCallfuc = cc.callFunc(this.Stay,this);
        var seq1;
        if(iswait){
            var moveByCf = cc.callFunc(function(){
                this.movenow = false;
            },this);
            seq1 = cc.sequence(cc.delayTime(0.1),moveBy,moveByCallfuc,moveByCf);
        }else{
            seq1 = cc.sequence(moveBy,moveByCallfuc);
        }
        this.runAction(seq1);
    },Right:function(iswait){
        this.envelopeL++;
        this.movenow = true;
        var deviantx = 62;
        var devianty = 78;
        var moveBy = cc.moveTo(this.moveTime,cc.p(this.envelopeL*130+deviantx,this.envelopeH*132+devianty));
        var moveByCallfuc = cc.callFunc(this.Stay,this);
        var seq1;
        if(iswait){
            var moveByCf = cc.callFunc(function(){
                this.movenow = false;
            },this);
            seq1 = cc.sequence(cc.delayTime(0.1),moveBy,moveByCallfuc,moveByCf);
        }else{
            seq1 = cc.sequence(moveBy,moveByCallfuc);
        }
        this.runAction(seq1);
    },Stay:function(iswait){
        this.DirectionType = 5;
    },onStar:function(){
        var texture = cc.textureCache.addImage(res.envelope_star);

        var framesize = 140;
        // manually add frames to the frame cache
        var frame0 = new cc.SpriteFrame(texture, cc.rect(framesize * 0,  0, framesize, framesize+2));
        var frame1 = new cc.SpriteFrame(texture, cc.rect(framesize * 1,  0, framesize, framesize+2));

        var sprite = new cc.Sprite(frame0);
        var width = this.getContentSize().width;
        var height = this.getContentSize().height;

        sprite.setPosition(cc.p(width/2,height/2))
        this.addChild(sprite);

        var animFrames = [];
        animFrames.push(frame0);
        animFrames.push(frame1);

        var animation = new cc.Animation(animFrames,this.fireStarAniTime);
        var animate = cc.animate(animation);

        sprite.runAction(animate.repeatForever());
        this.isOnStar = true;
    },onFire:function(){
        var texture = cc.textureCache.addImage(res.envelope_fie);

        var framesize = 140;
        // manually add frames to the frame cache
        var frame0 = new cc.SpriteFrame(texture, cc.rect(framesize * 0,  0, framesize, framesize));
        var frame1 = new cc.SpriteFrame(texture, cc.rect(framesize * 1,  0, framesize, framesize));
        var frame2 = new cc.SpriteFrame(texture, cc.rect(framesize * 2, 0, framesize, framesize));



        var sprite = new cc.Sprite(frame0);
        var width = this.getContentSize().width;
        var height = this.getContentSize().height;

        sprite.setPosition(cc.p(width/2,height/2))
        this.addChild(sprite,-1);

        var animFrames = [];
        animFrames.push(frame0);
        animFrames.push(frame1);
        animFrames.push(frame2);

        var animation = new cc.Animation(animFrames,this.fireStarAniTime);
        var animate = cc.animate(animation);

        sprite.runAction(animate.repeatForever());
        this.isOnFire= true;
    },isFireOrStar:function(){
        if(this.isOnFire||this.isOnStar||this.isOnSameAll)return;
        if(this.isFire)this.onFire();
        if(this.isStar)this.onStar();
        if(this.isSameAll)this.onSameAll();
    },onSameAll:function(){
        this.envelopeType = 1000;
        var texture = cc.textureCache.addImage(res.envelope_sameall);

        var framesize = 140;
        // manually add frames to the frame cache
        var frame0 = new cc.SpriteFrame(texture, cc.rect(framesize * 0,  0, framesize, framesize));
        var frame1 = new cc.SpriteFrame(texture, cc.rect(framesize * 1,  0, framesize, framesize));
        var frame2 = new cc.SpriteFrame(texture, cc.rect(framesize * 2, 0, framesize, framesize));



        var sprite = new cc.Sprite(frame0);
        var width = this.getContentSize().width;
        var height = this.getContentSize().height;

        sprite.setPosition(cc.p(width/2,height/2))
        this.addChild(sprite,-1);
        var animFrames = [];
        animFrames.push(frame0);
        animFrames.push(frame1);
        animFrames.push(frame2);

        var animation = new cc.Animation(animFrames,this.fireStarAniTime);
        var animate = cc.animate(animation);

        sprite.runAction(animate.repeatForever());

        var frame11 = cc.SpriteFrame.create(res.blue_envelope,cc.rect(0,0,92,113));
        var frame12 = cc.SpriteFrame.create(res.green_envelope,cc.rect(0,0,92,113));
        var frame13 = cc.SpriteFrame.create(res.red_envelope,cc.rect(0,0,92,113));
        var frame14 = cc.SpriteFrame.create(res.yello_envelope,cc.rect(0,0,92,113));
        var frame15 = cc.SpriteFrame.create(res.pink_envelope,cc.rect(0,0,92,113));


        var animFrames1 = [];
        animFrames1.push(frame11);
        animFrames1.push(frame12);
        animFrames1.push(frame13);
        animFrames1.push(frame14);
        animFrames1.push(frame15);

        var animation1 = new cc.Animation(animFrames1,this.fireStarAniTime*3);
        var animate1 = cc.animate(animation1);

        this.runAction(animate1.repeatForever());



        this.isOnSameAll= true;
    }
});

var envelopeBomeSprite = cc.Sprite.extend({
    bomeL:1000,
    bomeH:1000,
    bomeanimate:null,
    isBome:false,
    isFireBome:false,
    isFreshBome:false,
    freshtype:0,
    ctor:function(){
        this._super();
        this.init();
    },init:function(){
        //normalbome
        var texture = cc.textureCache.addImage(res.envelope_bome);

        var frame0 = new cc.SpriteFrame(texture, cc.rect(142 * 0, 0, 142, 142));
        var frame1 = new cc.SpriteFrame(texture, cc.rect(142 * 1, 0, 142, 142));
        var frame2 = new cc.SpriteFrame(texture, cc.rect(142 * 2, 0, 142, 142));
        var frame3 = new cc.SpriteFrame(texture, cc.rect(142 * 3, 0, 142, 142));
        var frame4 = new cc.SpriteFrame(texture, cc.rect(142 * 4, 0, 142, 142));

        var animFrames = [];
        animFrames.push(frame0);
        animFrames.push(frame1);
        animFrames.push(frame2);
        animFrames.push(frame3);
        animFrames.push(frame4);

        var animation = new cc.Animation(animFrames, 0.05);
        var animate= cc.animate(animation);

        this.initWithSpriteFrame(frame0);
        this.visible = false;

        var callfunc1 = cc.callFunc(function(){
            this.visible = false;
        }, this);
        this.bomeanimate = cc.sequence(animate,
            callfunc1);

        //firebomb
        var texture1 = cc.textureCache.addImage(res.envelope_firebome);

        var frame10 = new cc.SpriteFrame(texture1, cc.rect(142 * 0, 0, 142, 142));
        var frame11 = new cc.SpriteFrame(texture1, cc.rect(142 * 1, 0, 142, 142));
        var frame12 = new cc.SpriteFrame(texture1, cc.rect(142 * 2, 0, 142, 142));

        var animFrames1 = [];
        animFrames1.push(frame10);
        animFrames1.push(frame11);
        animFrames1.push(frame12);

        var animation1 = new cc.Animation(animFrames1, 0.05);
        var animate1= cc.animate(animation1);


        var callfunc2 = cc.callFunc(function(){
            this.visible = false;
        }, this);
        this.firebomeanimate = cc.sequence(animate1,
            callfunc2);

        //freshbome
        var texture2 = cc.textureCache.addImage(res.envelope_star);

        var framesize = 140;
        // manually add frames to the frame cache
        var frame20 = new cc.SpriteFrame(texture2, cc.rect(framesize * 0,  0, framesize, framesize+2));
        var frame21 = new cc.SpriteFrame(texture2, cc.rect(framesize * 1,  0, framesize, framesize+2));
        var animFrames2 = [];
        animFrames2.push(frame20);
        animFrames2.push(frame21);
        var animation2 = new cc.Animation(animFrames2,0.05);
        var animate2 = cc.animate(animation2).repeat(8);

        var callfunc3 = cc.callFunc(function(){
            this.visible = false;
        }, this);
        this.freshbomeanimate = cc.sequence(animate2,
            callfunc3);

        var texture3 = cc.textureCache.addImage(res.envelope_freshh);

        var framesize = 140;
        // manually add frames to the frame cache
        var frame30 = new cc.SpriteFrame(texture3, cc.rect(framesize * 0,  0, framesize, framesize+2));
        var frame31 = new cc.SpriteFrame(texture3, cc.rect(framesize * 1,  0, framesize, framesize+2));
        var animFrames3 = [];
        animFrames3.push(frame30);
        animFrames3.push(frame31);
        var animation3 = new cc.Animation(animFrames3,0.05);
        var animate3 = cc.animate(animation3).repeat(8);

        var callfunc4 = cc.callFunc(function(){
            this.visible = false;
        }, this);
        this.freshbomeanimateh = cc.sequence(animate3,
            callfunc4);

        var texture4 = cc.textureCache.addImage(res.envelope_freshl);

        var framesize = 140;
        // manually add frames to the frame cache
        var frame40 = new cc.SpriteFrame(texture4, cc.rect(framesize * 0,  0, framesize, framesize+2));
        var frame41 = new cc.SpriteFrame(texture4, cc.rect(framesize * 1,  0, framesize, framesize+2));
        var animFrames4 = [];
        animFrames4.push(frame40);
        animFrames4.push(frame41);
        var animation4 = new cc.Animation(animFrames4,0.05);
        var animate4 = cc.animate(animation4).repeat(16);

        var callfunc4 = cc.callFunc(function(){
            this.visible = false;
        }, this);
        this.freshbomeanimatel = cc.sequence(animate4,
            callfunc4);


    },setPos:function(l,h){

        this.envelopeL = l,this.envelopeH = h;
        var deviantx = 62;
        var devianty = 84;
        this.setPosition(cc.p(l*130+deviantx,h*130+devianty));
        this.isInited = true;
    },bome:function(){
        if(this.isBome){
            this.visible = true;
            this.runAction(this.bomeanimate);
            this.isFreshBome = false;
            this.isBome = false;
            this.isFireBome = false;
        }
    },firebome:function(){
        if(this.isFireBome){
            this.visible = true;
            this.runAction(this.firebomeanimate);
            this.isFreshBome = false;
            this.isBome = false;
            this.isFireBome = false;
        }
    },selectBome:function(){
        if(this.isFireBome){
            this.firebome();
        }else if(this.isFreshBome){
            this.freshbome();
        }else if(this.isBome){
            this.bome();
        }
    },freshbome:function(){
        console.log("fresh");
        if(this.isFreshBome){
            this.visible = true;
            if(this.freshtype==0){
                this.runAction(this.freshbomeanimate);
            }else if(this.freshtype==1){
                this.runAction(this.freshbomeanimatel);
            }else if(this.freshtype==2){
                this.runAction(this.freshbomeanimateh);
            }

            this.isFreshBome = false;
            this.isBome = false;
            this.isFireBome = false;
        }
    }
});

var loadingSprite = cc.Sprite.extend({
    textureWidth:null,
    textureHeight:null,
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        this.initWithFile(res.time_loading);
        this.textureWidth = this.getContentSize().width;
        this.textureHeight = this.getContentSize().height;
        this.setPosition(38, 833);
        this.setAnchorPoint(0, 0.5);

    },setPrecent:function(pre){
        var rect = this.getTextureRect();
        var res = pre/100;
        this.setTextureRect( cc.rect( rect.x,rect.y,this.textureWidth*res,this.textureHeight));
    }
});