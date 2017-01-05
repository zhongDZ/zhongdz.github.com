function MsgDlg (content, onConfirm, showCloseBtn) {
	var s = this;
	LExtends(s, LSprite, []);

	s.dlgW = 500;
	s.dlgH = 300;
	s.onConfirm = onConfirm;

	var bgLayer = new LSprite();
	bgLayer.alpha = 0.7;
	bgLayer.graphics.drawRect(0, "", [0, 0, LGlobal.width, LGlobal.height], true, "black");
	s.addChild(bgLayer);

	s.dlgLayer = new LSprite();
	s.dlgLayer.x = (LGlobal.width - s.dlgW) / 2;
	s.dlgLayer.y = (LGlobal.height - s.dlgH) / 2;
	s.addChild(s.dlgLayer);

	var dlgBgBmp = new LBitmap(new LBitmapData(dataList["texture_bg"]));
	dlgBgBmp.alpha = 0.6;
	dlgBgBmp.scaleX = s.dlgW / dlgBgBmp.getWidth();
	dlgBgBmp.scaleY = s.dlgH / dlgBgBmp.getHeight();
	s.dlgLayer.addChild(dlgBgBmp);

	if (typeof content == "string") {
		s.content = new Label();
		s.content.text = content;
		s.content.color = "white";
		s.content.weight = "bold";
		s.content.size = 20;
		s.content.lineWidth = 2;
		s.content.lineColor = "#0088FF";
		s.content.stroke = true;
		s.content.filters = [new LDropShadowFilter(null, null, "#404040")];
		if (s.content.getWidth() > s.dlgW * 0.8) {
			s.content.width = s.dlgW * 0.8;
			s.content.setWordWrap(true, 40);
		}
		s.content.heightMode = Label.HEIGHT_MODE_BASELINE;
	} else if (content) {
		s.content = content;
	}
	s.dlgLayer.addChild(s.content);

	s.btnLayer = new LSprite();
	s.dlgLayer.addChild(s.btnLayer);

	var border = new Border(s.dlgW, s.dlgH);
	s.dlgLayer.addChild(border);

	if (showCloseBtn) {
		var closeBtn = new CloseBtn();
		closeBtn.x = s.dlgW - closeBtn.getWidth();
		closeBtn.y = 3;
		s.dlgLayer.addChild(closeBtn);
		closeBtn.addEventListener(LMouseEvent.MOUSE_UP, function () {
			s.remove();
		});
	}

	s.addBtns();

	s.btnLayer.x = (s.dlgW - s.btnLayer.getWidth()) / 2;
	s.btnLayer.y = 210;
	/** you can set sizeW and sizeH to control position of content in MsgDlg, or size will be decided by content real size */
	var w = s.content.sizeW ? s.content.sizeW : s.content.getWidth(),
	h = s.content.sizeH ? s.content.sizeH : s.content.getHeight();
	s.content.x = (s.dlgW - w) / 2;
	s.content.y = (s.btnLayer.y - 20 - h) / 2;
}

MsgDlg.prototype.addBtns = function () {
	var s = this;

	var normalLayer = new LSprite();
	var downLayer = new LSprite();

	var bmpd = new LBitmapData(dataList["widgets"]);
	bmpd.setProperties(0, 0, 128, 40);

	var normalBmp = new LBitmap(bmpd.clone());
	normalBmp.bitmapData.setCoordinate(0, 165);
	normalBmp.scaleX = normalBmp.scaleY = 1.5;
	normalLayer.addChild(normalBmp);
	var downBmp = new LBitmap(bmpd.clone());
	downBmp.bitmapData.setCoordinate(0, 208);
	downBmp.scaleX = downBmp.scaleY = normalBmp.scaleX;
	downLayer.addChild(downBmp);

	var txt = new Label();
	txt.color = "white";
	txt.size = 15;
	txt.weight = "bold";
	txt.heightMode = Label.HEIGHT_MODE_BASELINE;
	txt.text = lang.system.OK;
	txt.x = (normalLayer.getWidth() - txt.getWidth()) / 2;
	txt.y = (normalLayer.getHeight() - txt.getHeight() * 1.2) / 2;
	normalLayer.addChild(txt.clone());
	downLayer.addChild(txt.clone());

	var btn = new LButton(normalLayer, null, downLayer);
	btn.staticMode = true;
	btn.y = 10;
	btn.setCursorEnabled(false);
	s.btnLayer.addChild(btn);

	btn.addEventListener(LMouseEvent.MOUSE_UP, function () {
		if (typeof s.onConfirm == "function") {
			s.onConfirm();
		}

		s.remove();
	});
};