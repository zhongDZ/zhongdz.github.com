function MenuDlg (title, showCloseBtn) {
	var s = this;
	LExtends(s, LSprite, []);

	s.dlgW = 550;
	s.dlgH = 400;

	var bgLayer = new LSprite();
	bgLayer.graphics.drawRect(0, "", [0, 0, s.dlgW, s.dlgH], true, "black");
	bgLayer.alpha = 0.7;
	s.addChild(bgLayer);

	var titleTxt = new Label();
	titleTxt.text = title;
	titleTxt.color = "white";
	titleTxt.weight = "bold";
	titleTxt.size = 35;
	titleTxt.x = (s.dlgW - titleTxt.getWidth()) / 2;
	titleTxt.y = 60;
	titleTxt.filters = [new LDropShadowFilter(null, null, "white")];
	s.addChild(titleTxt);

	s.btnLayer = new LSprite();
	s.addChild(s.btnLayer);

	var border = new Border(s.dlgW, s.dlgH, true);
	s.addChild(border);

	if (showCloseBtn) {
		var closeBtn = new CloseBtn();
		closeBtn.x = s.dlgW - closeBtn.getWidth() - 5;
		closeBtn.y = 5;
		s.addChild(closeBtn);
		closeBtn.addEventListener(LMouseEvent.MOUSE_UP, function () {
			s.visible = false;
		});
	}

	s.addBtns();

	s.btnLayer.x = (s.dlgW - s.btnLayer.getWidth()) / 2;
	s.btnLayer.y = titleTxt.y + titleTxt.getHeight() + 40;
}

MenuDlg.prototype.addBtns = function () {
	var s = this;

	var btnTxtList = [
		lang.system.QUIT_GAME,
		lang.system.REPLAY
	];

	var normalLayer = new LSprite();
	var downLayer = new LSprite();

	var bmpd = new LBitmapData(dataList["widgets"]);
	bmpd.setProperties(0, 0, 128, 40);

	var normalBmp = new LBitmap(bmpd.clone());
	normalBmp.bitmapData.setCoordinate(0, 165);
	normalBmp.scaleX = normalBmp.scaleY = 2;
	normalLayer.addChild(normalBmp);
	var downBmp = new LBitmap(bmpd.clone());
	downBmp.bitmapData.setCoordinate(0, 208);
	downBmp.scaleX = downBmp.scaleY = normalBmp.scaleX;
	downLayer.addChild(downBmp);

	var txtTemp = new Label();
	txtTemp.color = "white";
	txtTemp.size = 15;
	txtTemp.weight = "bold";
	txtTemp.heightMode = Label.HEIGHT_MODE_BASELINE;

	for (var i = 0, l = btnTxtList.length; i < l; i++) {
		var t = btnTxtList[i];

		var nl = normalLayer.clone(),
		dl = downLayer.clone();

		var txt = txtTemp.clone();
		txt.text = t;
		txt.x = (nl.getWidth() - txt.getWidth()) / 2;
		txt.y = (nl.getHeight() - txt.getHeight() * 1.2) / 2;
		nl.addChild(txt.clone());
		dl.addChild(txt.clone());

		var btn = new LButton(nl, null, dl);
		btn.staticMode = true;
		btn.y = s.btnLayer.getHeight() + 10;
		btn.index = i;
		btn.setCursorEnabled(false);
		s.btnLayer.addChild(btn);

		btn.addEventListener(LMouseEvent.MOUSE_UP, function (e) {
			var o = e.currentTarget,
			p = o ? o.parent : null,
			pp = p ? p.parent : null,
			ppp = pp ? pp.parent : null,
			pppp = ppp ? ppp.parent : null;

			if (pppp) {
				pppp.destroy(o.index);
			}
		});
	}
};