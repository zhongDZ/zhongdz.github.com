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

function BitmapFactory(self,img,x,y,sx,sy,rx,ry,ro){
    var bit =  new createjs.Bitmap(StateManager.g_instance.getResult(img));
    bit.x = x;
    bit.y = y;

    bit.regX = rx==undefined||rx==null?0:rx;
    bit.regY = ry==undefined||ry==null?0:ry;

    bit.scaleX = sx==undefined||sx==null?1:sx;
    bit.scaleY = sy==undefined||sy==null?1:sy;

    bit.rotation = ro==undefined||ro==null?0:ro;

    self.addChild(bit);

    return bit;
}

function LabelFactory(str,size,col,x,y,sx,sy,rx,ry,al,ro){

    var lab =  new createjs.Text(str+"",size +"px Arial", col);
    lab.x = x;
    lab.y = y;

    lab.regX = rx==undefined||rx==null?0:rx;
    lab.regY = ry==undefined||ry==null?0:ry;

    lab.scaleX = sx==undefined||sx==null?1:sx;
    lab.scaleY = sy==undefined||sy==null?1:sy;

    lab.rotation = ro==undefined||ro==null?0:ro;
    lab.alpha = al==undefined||al==null?1:al;

    return lab;
}

function SpriteFactory(ss,inta,x,y,sx,sy,rx,ry,ro){

    var spr =  new createjs.Sprite(ss,inta);
    spr.x = x;
    spr.y = y;

    spr.regX = rx==undefined||rx==null?0:rx;
    spr.regY = ry==undefined||ry==null?0:ry;

    spr.scaleX = sx==undefined||sx==null?1:sx;
    spr.scaleY = sy==undefined||sy==null?1:sy;

    spr.rotation = ro==undefined||ro==null?0:ro;

    return spr;
}


