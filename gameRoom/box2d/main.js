
cc.game.onStart = function(){
    var clientW = document.body.clientWidth;
    var clientH = document.body.clientHeight;

    cc.view.resizeWithBrowserSize(true);
    cc.view.setDesignResolutionSize(clientW, clientH, cc.ResolutionPolicy.SHOW_ALL);


    cc.view.enableRetina(false);

    cc.LoaderScene.preload(resources, function () {
        cc.director.runScene(new appScene());
    }, this);

};
cc.game.run();


