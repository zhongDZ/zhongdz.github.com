function Label () {
	var s = this;
	LExtends(s, LTextField, []);

	s.font = Label.FONT;
	s.size = 11;
}

Label.HEIGHT_RATIO = 1.2;
Label.FONT = "Arial";
Label.FONT_FOR_WIN = "Microsoft YaHei";
Label.FONT_FOR_LINUX = "Arial";
Label.FONT_FOR_MAC = "Comic Sans";

(function (n) {
	var linux = "Linux", mac = "mac", win = "Windows";

	if (n.indexOf(linux) >= 0) {
		Label.FONT = Label.FONT_FOR_LINUX;
	} else if (n.indexOf(mac) >= 0) {
		Label.FONT = Label.FONT_FOR_MAC;
	} else if (n.indexOf(win) >= 0)  {
		Label.HEIGHT_RATIO = 1.5;
		Label.FONT = Label.FONT_FOR_WIN;
	}
})(navigator.userAgent);

Label.prototype._showReady = function (c) {
	var s = this;
	c.font = s.weight + " " + s.size + "pt " + s.font;  
	c.textAlign = s.textAlign;
	c.textBaseline = s.textBaseline;
};

Label.prototype._getWidth = function () {
	var s = this;
	if (s.wordWrap) {
		return s.width;
	}
	LGlobal.canvas.font = s.weight + " " + s.size + "pt " + s.font;
	return LGlobal.canvas.measureText(s.text).width;
};

Label.prototype._getHeight = function () {
	var s = this, c = LGlobal.canvas, i, l, j, k, m, enter;
	if (s.wordWrap) {
		c.font = s.weight + " " + s.size + "pt " + s.font;
		if (s.height == 0) {
			j = 0, k = 0, m = 0;
			for (i = 0, l = s.text.length; i < l; i++) {
				j = c.measureText(s.text.substr(k, i - k)).width;
				enter = /(?:\r\n|\r|\n|¥n)/.exec(s.text.substr(i, 1));
				if ((s.wordWrap && j > s.width) || enter) {
					j = 0;
					k = i;
					m++;
					if (enter) {
						k++;
					}
				}
			}
			s.height = (m + 1) * s.wordHeight;
		}
		return s.height;
	}
	c.font = s.weight + " " + s.size + "pt " + s.font; 
	l = c.measureText("O").width * Label.HEIGHT_RATIO;
	if (s.heightMode == LTextField.HEIGHT_MODE_BASELINE) {
		l = l * 1.2;
	}
	return l;
};