var MessageRoll = function(){
	this.container = null;
	this.height = 0;
	this.interval = null;
	this.rollElements = "";
	this.rollIndex = 0;
	this.nowRoll = 0;
	this.stopeda = false;

	if(arguments.length > 0){
		var object = arguments[0];
		if(typeof object == "object"){
			for(var key in object){
				if(!this[key]){
					this[key] = object[key];
				}
			}
		}
	}
	
	if(this.container != null && this.height != 0){
		this.container.style.height = this.height + "px";
		this.container.style.overflow = "hidden";
	}

	if(this.container != null && this.rollElements != ""){
		this.rollElements = this.container.getElementsByTagName(this.rollElements);
	}

	this.instanceIndex = MessageRoll.instanceCount;
	MessageRoll.instanceCount++;
};

MessageRoll.instanceCount = 0;
MessageRoll.instances = [];

MessageRoll.prototype.start = function(delay){
	if(typeof delay != "number" || 0 == delay || null == this.container){
		return;
	}
	
	if("" == this.rollElements || null == this.rollElements){
		if(arguments.length >= 2 && typeof arguments[1] == "string"){
			this.rollElements = this.container.getElementsByTagName(arguments[1]);
		}
	}
	
	if(null == MessageRoll.instances[this.instanceIndex]){
		MessageRoll.instances[this.instanceIndex] = this;
	}

	var _messageRollCopy = MessageRoll.instances[this.instanceIndex];

	var Proc = function(){
		with(_messageRollCopy){
			if(rollIndex >= rollElements.length - 2){
				container.scrollTop = 0;
				rollIndex = 0;
				window.setTimeout(smallProc,delay);
				return;
			}
		}
		smallProc();
	}
	
	var eHeight = _messageRollCopy.rollElements[0].offsetHeight;
	
	var smallProc = function(){
		if(_messageRollCopy.nowRoll < eHeight){
			_messageRollCopy.container.scrollTop++;
			_messageRollCopy.nowRoll++;
			window.setTimeout(smallProc,80);
		}else{
			_messageRollCopy.nowRoll = 0;
			_messageRollCopy.rollIndex++;
			if(!_messageRollCopy.stoped){
				window.setTimeout(Proc,delay);
			}
		}
	};

	window.setTimeout(Proc,delay);
	
};

MessageRoll.prototype.stop = function(){
	this.stoped = true;
};
