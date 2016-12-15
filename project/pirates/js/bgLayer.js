var bgLayer = cc.Layer.extend({
	ctor : function(){
		this._super();

    cc.spriteFrameCache.addSpriteFrames(res.game_bg_plist);

		this.init();
		
		this.initBg();

		this.scheduleUpdate();
	},
	init : function(){
		this.ignoreAnchorPointForPosition(false);

		this.anchorX = this.anchorY = 0.5;
	},
  initBg : function(){
      var gameBg = new sprFactory(this, "gameBg.png", size.width/2, size.height/2);
      
      var gameBgBottom = new sprFactory(this, "gameBgBottom.png", size.width/2, size.height/4);

      this.initMoveBg();

      var island_boat = new sprFactory(this, "island_house.png", 317, 600);
  },
  update : function(){
      this.updateBg();
  },
  cloud1Acloud2 : size.height/2 + 5,
  cloud3Acloud4 : size.height * 3 / 4,
  cloud5Acloud6 : size.height * 3 / 4 + 60,
  updateBg : function(){
      this.cloud1.update(this.cloud1Acloud2, -640, 0);
      this.cloud2.update(this.cloud1Acloud2, 0, 640);

      this.cloud3.update(this.cloud3Acloud4, -640, 0);
      this.cloud4.update(this.cloud3Acloud4, 0, 640);

      this.cloud5.update(this.cloud5Acloud6, -640, 0);
      this.cloud6.update(this.cloud5Acloud6, 0, 640);
  },
  initMoveBg : function(){
      /***--------------------1--------------------***/
      var tick_1 = 0.6;
      var tick_2 = 0.2;
      var tick_3 = 0.1;

      var cloud1 = this.cloud1 = new Background("cloud_1.png", tick_1);
      cloud1.attr({
        x:0,
        y:0,
        anchorX:0,
        anchorY:0
      });
      this.addChild(cloud1);

      var cloud2 = this.cloud2 = new Background("cloud_1.png", tick_1);
      cloud2.xx = 640;//此处添加时为了解决两个背景相接处出现黑边
      cloud2.attr({
        x:0,
        y:0,
        anchorX:0,
        anchorY:0
      });
      this.addChild(cloud2);

      /***--------------------2--------------------***/
      var cloud3 = this.cloud3 = new Background("cloud_2.png", tick_2);
      cloud3.attr({
        x:0,
        y:0,
        anchorX:0,
        anchorY:0
      });
      this.addChild(cloud3);

      var cloud4 = this.cloud4 = new Background("cloud_2.png", tick_2);
      cloud4.xx = 640;//此处添加时为了解决两个背景相接处出现黑边
      cloud4.attr({
        x:0,
        y:0,
        anchorX:0,
        anchorY:0
      });
      this.addChild(cloud4);

      /***--------------------3--------------------***/
      var cloud5 = this.cloud5 = new Background("cloud_3.png", tick_3);
      cloud5.attr({
        x:0,
        y:0,
        anchorX:0,
        anchorY:0
      });
      this.addChild(cloud5);

      var cloud6 = this.cloud6 = new Background("cloud_3.png", tick_3);
      cloud6.xx = 640;//此处添加时为了解决两个背景相接处出现黑边
      cloud6.attr({
        x:0,
        y:0,
        anchorX:0,
        anchorY:0
      });
      this.addChild(cloud6);
  }
});