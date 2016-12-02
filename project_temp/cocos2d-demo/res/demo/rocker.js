// 类型
var RockerType = {};
RockerType.DEFAULT = "DEFAULT";
RockerType.AUTO = "AUTO";
RockerType.HIDE = "HIDE";
RockerType.OPACITY = 255;

// 方向
var Direction = {};
Direction.DEFAULT 		= 0;
Direction.D_UP 			= 1;
Direction.D_RIGHT_UP 	= 2;
Direction.D_RIGHT 		= 3;
Direction.D_RIGHT_DOWN 	= 4;
Direction.D_DOWN 		= 5;
Direction.D_LEFT_DOWN 	= 6;
Direction.D_LEFT 		= 7;
Direction.D_LEFT_UP 	= 8;

// 摇杆精灵
var Rocker = cc.Sprite.extend({
    _base       : null,                 // 底盘
    _knob       : null,                 // 摇杆
    _listener   : null,                 // 监听器
    radius      : 0,                    // 可移动半径[摇杆_knob]
    speed       : null,                 // 速度
    type        : RockerType.DEFAULT,   // 摇杆类型
    direction   : Direction.DEFAULT,    // 方向
    angle       : 0,                    // 角度
    radians     : 0,                    // 弧度
    callback    : null,                 // 回调函数
    _callbackSch: null,                 // 计时器[回调函数]
    ctor: function(baseTexture, knobTexture, type){
        this._super();
        // 加载[监听器]
        this.loadListener();
        // 加载[底盘和摇杆精灵]
        this.loadBaseAndKnob(baseTexture, knobTexture);
        // 加载[配置]
        this.loadConfig(type);
    },
    // 加载[监听器]
    loadListener : function(){
        var listener = cc.EventListener.create({
            event           : cc.EventListener.TOUCH_ONE_BY_ONE,
            target          : this,
            swallowTouches  : true,
            onTouchBegan    : this.onTouchBegan,
            onTouchMoved    : this.onTouchMoved,
            onTouchEnded    : this.onTouchEnded
        });

        // TODO 内存管理问题的一种解决方案
        this.setUserObject(listener); 
        cc.eventManager.addListener(listener, this);
        this._listener = listener;
    },
    // 加载精灵[_base和_knob]
    loadBaseAndKnob : function(baseTexture, knobTexture){
        this._base = new cc.Sprite(baseTexture);
        this._knob = new cc.Sprite(knobTexture);
        this.addChild(this._base);
        this.addChild(this._knob);
    },
    // 加载配置[半径radius和类型type]
    loadConfig : function(type){
        this.radius = this._base.getContentSize().width / 2;
        //对所有节点设置透明度
        this.setCascadeOpacityEnabled(true);

        if (type !== undefined){
            if (isNaN(type)){
                this.type = type;
                if (this.type == RockerType.HIDE){
                    this.setVisible(false);
                }
            }else{
                this.type = RockerType.OPACITY;
                this.setOpacity(type);
            }
        }
    },
    // 获得角度
    getAngle : function(pos){
        this.angle = Math.atan2(pos.y, pos.x) * 57.29577951;
        return this.angle;
    },
    // 获得弧度
    getRadians : function(pos){
        // this.radians = cc.kmDegreesToRadians(this.getAngle(pos));
        this.radians = cc.PI / 180 * this.getAngle(pos);   // 角度转弧度
        return this.radians;
    },
    // 获取长度
    getLength : function(pos){
        return Math.sqrt(pos.x * pos.x + pos.y * pos.y);
    },
    onTouchBegan: function (touch, event) {
        var target = this.target;
        var knob = target._knob;
        var locationInNode = knob.convertToNodeSpace(touch.getLocation());
        var size = knob.getContentSize();
        var rect = cc.rect(0, 0, size.width, size.height);

        if (target.type == RockerType.DEFAULT){
            if (!cc.rectContainsPoint(rect, locationInNode)) {
                return false;
            }
        }else{
            if (target.type == RockerType.AUTO){
                target.setVisible(true);
            }
            target.setPosition(touch.getLocation());
        }
        knob.setColor(cc.color.RED);

        return true;
    },
    onTouchMoved: function (touch, event) {
        // 节点获取
        var target = this.target;
        var knob = target._knob;
        var locationInNode = target.convertToNodeSpace(touch.getLocation());

        // 更新[角度]
        target.getAngle(locationInNode);
        // 更新[弧度]
        target.getRadians(locationInNode);
        // 更新[方向]
        target.onUpdateDirection(locationInNode);

        // 长度获取[当前触摸点相对摇杆中心点]
        var tmpLength = target.getLength(locationInNode);

        // _knob活动区域判断[如果_knob不在摇杆区域内]
        if ( tmpLength > target.radius){
            // TODO 速度更新[速度达到最大值]
            target.speed = 1;
            // _knob超出区域
            var x = Math.cos(target.radians) * target.radius;
            var y = Math.sin(target.radians) * target.radius;
            knob.setPosition(cc.p(x, y));
            // TODO 启动一个计时器，保证callback回调函数触发
            target.loadSchedule();
        }else{
            // TODO 速度更新
            target.speed = tmpLength / target.radius;
            knob.setPosition(locationInNode);
            target.unLoadSchedule();
            // TODO 手动调用, 保证callback被调用
            target.update();
        }
    },
    onTouchEnded: function (touch, event) {
        var target = this.target;
        var _knob = target._knob;
        _knob.setColor(cc.color.WHITE);
        _knob.setPosition(0, 0);
        target.direction = Direction.DEFAULT;

        target.unLoadSchedule();

        if (target.type == RockerType.AUTO){
            target.setVisible(false);
        }
    },
    loadSchedule : function(){
        if (this._callbackSch == null){
            this._callbackSch = this.scheduleUpdate();
        }
    },
    unLoadSchedule : function(){
        this.unscheduleAllCallbacks();
        this._callbackSch = null;
    },
    update : function(dt){
        // 回调函数
        (this.callback && typeof(this.callback) === "function") && this.callback();
    },
    // 角度更新
    onUpdateDirection : function(position){
        if(this.angle > -22.5 && this.angle < 22.5){
            this.direction = Direction.D_RIGHT;
        }
        else if(this.angle > 22.5 && this.angle < 67.5){
            this.direction = Direction.D_RIGHT_UP;
        }
        else if(this.angle > 67.5 && this.angle < 112.5){
            this.direction = Direction.D_UP;
        }
        else if(this.angle > 112.5 && this.angle < 157.5){
            this.direction = Direction.D_LEFT_UP;
        }
        else if((this.angle > 157.5 && this.angle < 180)||(this.angle < -157.5 && this.angle > -180)){
            this.direction = Direction.D_LEFT;
        }
        else if(this.angle < -112.5 && this.angle > -157.5){
            this.direction = Direction.D_LEFT_DOWN;
        }
        else if(this.angle < -67.5 && this.angle > -112.5){
            this.direction = Direction.D_DOWN;
        }
        else if(this.angle < -22.5 && this.angle > -67.5){
            this.direction = Direction.D_RIGHT_DOWN;
        }
    },
    // 触摸开关
    setTouchEnabled : function(enable){
        if (this._listener){
            if (enable){
                // 若有添加过，引擎会自动过滤。所以，任性的添加吧。
                cc.eventManager.addListener(this._listener, this);
            }else{
                cc.eventManager.removeListener(this._listener);
            }
        }else{
            cc.log("setTouchEnabled 无效！listener 为空...");
        }
    },
    onExit: function(){
        if (this._listener != null){
            cc.eventManager.removeListener(this._listener);
        }
        this._super();
    }

});