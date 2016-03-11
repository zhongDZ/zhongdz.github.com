var EventMyLayer = cc.Layer.extend({
	sprite:null,
	size:null,
	ctor:function(){
		this._super();
		this.size = cc.director.getWinSize();

		var bg = new cc.Sprite(res.bg);
	    bg.setPosition(this.size.width / 2, this.size.height / 2);
	    bg.setScale(1);
	    this.addChild(bg, 0);

		if(true){//TOUCH_ONE_BY_ONE
			// 左上角的精灵
	        var sprite1 = new cc.Sprite(res.eventSprite1);
	        sprite1.setPosition(this.size.width/2 - sprite1.getContentSize().width / 2, this.size.height/2 + sprite1.getContentSize().height / 2);
	        this.addChild(sprite1);

	        // 中间的精灵
	        var sprite2 = new cc.Sprite(res.eventSprite2);
	        sprite2.attr({
				x:this.size.width/2,
				y:this.size.height/2
			});
	        this.addChild(sprite2);

	        // 右下角的精灵。【注意】：父节点是sprite2 即以sprite2的锚点为起点
	        var sprite3 = new cc.Sprite(res.eventSprite3);
	        sprite3.x = sprite3.getContentSize().width;
	        sprite3.y = 0;
	        sprite2.addChild(sprite3);

			var _listener = cc.EventListener.create({
				event:cc.EventListener.TOUCH_ONE_BY_ONE,
				target:this,
				swallowTouches:true,//事件的吞噬，阻止事件传递给下一层
				onTouchBegan:function(touch,event){//注意 touch 和 event的位置调换有bug!!!!!!!!!!!!!!
					//获取当前触发节点
					var _target = event.getCurrentTarget();
					//获取点击点
					var location = touch.getLocation();
					//获取点击坐标【基于本地坐标】
					var locationInNode = _target.convertToNodeSpace(location);
					//获取当前节点的大小
					var size = _target.getContentSize();
					//正确区域的设置
					var rect = cc.rect(0,0,size.width,size.height);
					//判断触摸点是否在节点区域内
					if(!(cc.rectContainsPoint(rect,locationInNode))){
						return false;
					}

					_target.opacity = 180;
					cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
					return true;//只有在onTouchBegan return true的情况下，后面两个回调方法才能被触发
				},
				onTouchMoved:function(touch,event){
					var _target = event.getCurrentTarget();
					var location = touch.getLocation();
					if(true){
						//返回前一个点和当前触摸点的位移差
						var delta = touch.getDelta();
						_target.x += delta.x;
						_target.y += delta.y;
					}
					if(!true){
						_target.x = location.x;
						_target.y = location.y;
					}
				},
				onTouchEnded:function(touch,event){
					var _target = event.getCurrentTarget();
	                _target.opacity = 255;
				},
				onTouchCancelled:function(touch,event){
					console.log("cancell");
				}
			});
			
			//内存管理问题的一种解决方案
		    // this.setUserObject(_listener);
			cc.eventManager.addListener(_listener,sprite1);
			cc.eventManager.addListener(_listener.clone(),sprite2);
			cc.eventManager.addListener(_listener.clone(),sprite3);
			// 3种移除监听器的方式
	        // cc.eventManager.removeListeners(listener);   // 根据listener对象
	        // cc.eventManager.removeListeners(cc.EventListener.TOUCH_ONE_BY_ONE);  // 根据listener类型
	        // cc.eventManager.removeListeners(aNode);  // 根据节点
		}
	}
});