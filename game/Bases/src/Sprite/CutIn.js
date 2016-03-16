//
//  CutIn.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var CutIn = cc.Node.extend({
    ctor:function () {
        this._super();
        this.effectTime = 0;
        this.rectBase   = cc.LayerColor.create(cc.c4b(0,0,0,255*0.8),320,60);
        this.rectBase.setPosition(0,0);
        this.rectBase.setAnchorPoint(0,0);
        this.addChild(this.rectBase,99);

        //score Lable
        this.reportLabel = cc.LabelTTF.create("","Arial",25);        
        this.reportLabel.setPosition(320/2,25);
        this.reportLabel.setAnchorPoint(0.5,0.5);
        //this.reportLabel.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        this.rectBase.addChild(this.reportLabel,2);
    },

    update:function() {
        this.effectTime++;
        if(this.effectTime >= 60){
            this.set_visible(false);
        }
    },

    set_text:function(text){
        this.effectTime = 0;
        this.set_visible(true);
        this.reportLabel.setString(text);
    },

    set_visible:function(isTrue){
        if(isTrue){
            this.rectBase.setVisible(true);
        }else{
            this.rectBase.setVisible(false);
        }
    },
});
