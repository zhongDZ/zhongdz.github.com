var GameLayer = cc.Layer.extend({
    ctor:function (storage) {
        this._super();
        this.storage  = storage;
        changeLoadingImage();
    },

    init:function () {
        this._super();
        cc.Director.getInstance().setProjection(cc.DIRECTOR_PROJECTION_2D);

        //bgm
        playBGM();

        console.log(cc.Director.getInstance().getWinSize())

        if ('touches' in sys.capabilities || sys.platform == "browser")
                this.setTouchEnabled(true);
        else if ('mouse' in sys.capabilities)
                this.setMouseEnabled(true);

        this.setParams();
        this.setScrollView();
        this.stage = new Stage(this);

        //set player
        this.player = new Player(this);
        this.player.setPosition(800,220);
        this.mapNode.addChild(this.player);

        //targetSprite
        this.targetSprite = cc.Sprite.create(s_target);
        this.targetSprite.setPosition(800,220);
        this.mapNode.addChild(this.targetSprite);

        //setColleague
        this.addColleagues(4);

        //setEnemies
        var enemyCnt = this.storage.initEnemyCnt;
        for(var i=0;i<enemyCnt;i++){
            this.addEnemy(this.storage.enemyCode);
        }

        //initialize camera
        this.cameraX = 320/2 - this.player.getPosition().x;
        this.cameraY = 420/2 - this.player.getPosition().y;
        this.playerCameraX = 320/2;
        this.playerCameraY = 420/2;
        this.mapNode.setPosition(
            this.cameraX,
            this.cameraY
        );

        this.markerScale = 2.5;
        this.marker = cc.Sprite.create(s_cube_blue);
        this.mapNode.addChild(this.marker);
        this.marker.setAnchorPoint(0.5,0.5);

        this.enemyMarkerScale = 2.5;
        this.enemyMarker = cc.Sprite.create(s_cube_red);
        this.mapNode.addChild(this.enemyMarker);
        this.enemyMarker.setAnchorPoint(0.5,0.5);

        this.setUI();
        this.scheduleUpdate();
        this.setTouchEnabled(true);
        return true;
    },

    startGame : function() {
        if(this.isMissionVisible == true){
            playSystemButton();
            this.isMissionVisible = false;
            this.sp.setVisible(false);
            this.titleLabel.setVisible(false);
            this.startButton.setVisible(false);
            this.rectBase.setVisible(false);
            this.titleLimit.setVisible(false);
        }
    },

    setScrollView : function() {
        //为了得到窗口的大小
        var winSize = cc.Director.getInstance().getWinSize();

        //使目标的mapNode要被滚动
        this.mapNode = cc.Node.create();
        this.mapNode.setContentSize(100,100);
/*
        //スクロール用のNodeを作って、青色を付けたNodeを追加する
        this.scrollView = cc.ScrollView.create(cc.size(winSize.width,winSize.height), this.mapNode);

        //スクロールのバウンスを行う
        this.scrollView.setBounceable(true);
        this.scrollView.setDirection(cc.SCROLLVIEW_DIRECTION_NONE);
        this.scrollView.updateInset();

        //スクロールViewの位置
        this.scrollView.setPosition(0,0);

        //mapNodeの初期位置を設定
        this.scrollView.setContentOffset(cc.p(0,0),true);
        this.scrollView.ignoreAnchorPointForPosition(true);
        this.scrollView.setDelegate(this);

        //背景は緑
        this.greenLayer = cc.LayerColor.create(cc.c4b(128,128,0,255*0.4),320,480);
        this.addChild(this.greenLayer,4);
*/
        //添加滚动视图
        this.addChild(this.mapNode);
    },

    setParams : function() {
        this.mapWidth        = 1000;
        this.mapHeight       = 1000;
        this.getEnergyCnt    = 0;
        this.isMissionVisible = true;
        this.isStepOn        = false;
        this.scrollType      = 1;
        this.isMovedResult   = false;
        this.colleagueCnt    = 0;
        this.mapScale        = 1;
        this.strategyCode    = CONFIG.DEFAULT_STORATEGY_CODE;
        this.enemySetTime    = 0;
        this.territoryCnt    = 0;
        this.territoryMaxCnt = 0;
        this.coins           = [];
        this.bullets         = [];
        this.enemyBullets    = [];
        this.enemies         = [];
        this.colleagues      = [];
        //mission
        this.missionNumber   = this.storage.missionNumber;
        this.missionLabel    = this.storage.missionTitle;
        this.missionCnt      = 0;
        this.missionMaxCnt   = this.storage.missionMaxCnt;

        this.timeCnt         = 0;
        this.missionTimeLimit= this.storage.missionTimeLimit;
    },

    setUI : function(){
        //UI
        this.gameUI = new GameUI(this);
        this.addChild(this.gameUI,999);

        //切入
        this.cutIn = new CutIn();
        this.cutIn.setPosition(0,200);
        this.addChild(this.cutIn,999);
        this.cutIn.set_text("スタート!");

        this.rectBase = cc.LayerColor.create(cc.c4b(0,0,0,255 * 0.8),320,480);
        this.rectBase.setPosition(0,0);
        this.addChild(this.rectBase,CONFIG.UI_DROW_ORDER);

        //标题背景
        this.sp = cc.Sprite.create(s_mission_start);
        this.sp.setAnchorPoint(0,0);
        this.addChild(this.sp,CONFIG.UI_DROW_ORDER);

        //时限
        this.titleLimit = cc.LabelTTF.create("制限時間 : " + Math.floor(this.missionTimeLimit / 30) + "秒","Arial",20);   
        this.titleLimit.setPosition(320/2,250);
        this.addChild(this.titleLimit,CONFIG.UI_DROW_ORDER);

        //标题字符
        this.titleLabel = cc.LabelTTF.create(this.missionLabel,"Arial",25);   
        this.titleLabel.setPosition(320/2,280);
        this.addChild(this.titleLabel,CONFIG.UI_DROW_ORDER);

        //开始按钮
        this.startButton = new ButtonItem("START",200,50,this.startGame,this);
        this.startButton.setPosition(160,150);
        this.addChild(this.startButton,CONFIG.UI_DROW_ORDER);
    },

    update:function(dt){
        //更新将无法运行，如果你的页面转换
        if(this.isMovedResult == true) return;
        //不执行任务正在显示更新
        if(this.isMissionVisible == true) return;

        this.stage.update();

        //不执行任务正在显示更新...
        if(this.player.targetChip != null && this.player.targetChip.isOccupied == false){
            this.marker.setVisible(true);
            this.marker.setOpacity(255 * 0.1);
            var collCnt = this.player.targetChip.colleagueCnt;
            this.markerScale+= (0.01 + collCnt * 0.005);
            if(this.markerScale >= 3){
                this.markerScale = 1;
            }
            this.marker.setPosition(
                this.player.targetChip.getPosition().x,
                this.player.targetChip.getPosition().y
            );
            this.marker.setScale(this.markerScale);
        }else{
            this.marker.setVisible(false);
        }

        //要在占领期间查看敌人的标志
        if(this.stage.enemyTargetChip != null && this.stage.enemyTargetChip.enemyCollisionFlg == true){
            this.enemyMarker.setVisible(true);
            this.enemyMarker.setOpacity(255 * 0.1);

            this.enemyMarkerScale+=0.05;
            if(this.enemyMarkerScale >= 3){
                this.enemyMarkerScale = 1;
            }
            this.enemyMarker.setPosition(
                this.stage.enemyTargetChip.getPosition().x,
                this.stage.enemyTargetChip.getPosition().y
            );
            this.enemyMarker.setScale(this.enemyMarkerScale);
        }else{
            this.enemyMarker.setVisible(false);
        }

        //プレイヤー
        this.player.update();
        this.mapNode.reorderChild(
            this.player,
            Math.floor(this.mapHeight - this.player.getPosition().y)
        );
        this.player.playerDirectionManage(this.targetSprite);

        //プレイヤーの移動
        this.player.moveToTargetMarker(this.targetSprite);
        if(this.scrollType == 1){
            this.moveCamera();
        }else if(this.scrollType == 2){
            this.cameraX = this.mapNode.getPosition().x;
            this.cameraY = this.mapNode.getPosition().y;
        }

        //時間経過による敵の作成
        this.enemySetTime++;
        var interval = this.storage.enemySetInterval;
        if(this.enemySetTime >= interval){
            this.enemySetTime = 0;
            this.addEnemy(this.storage.enemyCode);
        }

        //UI
        this.gameUI.update();

        //Playerの死亡時には生き残っている仲間がいれはスイッチする
        if(this.player.hp <= 0){
            if(this.colleagues.length == 0 && this.isMovedResult == false){
                this.isMovedResult = true;
                this.goGameOverLayer();
            }else{
                for(var i=0;i<this.colleagues.length;i++){

                    if(this.colleagues[i].hp > 0){

                        this.player.hp = this.colleagues[i].hp;
                        //移動
                        this.player.setPosition(
                            this.colleagues[i].getPosition().x,
                            this.colleagues[i].getPosition().y
                        );

                        //colleaguesの配列から削除する
                        this.mapNode.removeChild(this.colleagues[i]);
                        this.colleagues.splice(i, 1);
                    }
                }
            }
        }

        //Enemies 死亡時の処理、Zソート
        for(var i=0;i<this.enemies.length;i++){
            if(this.enemies[i].update() == false){
                //this.stage.addCoin(
                //    this.enemies[i].getPosition().x,
                //    this.enemies[i].getPosition().y
                //);
                this.mapNode.removeChild(this.enemies[i]);
                this.enemies.splice(i, 1);
                this.storage.killedEnemyCnt+=1;   
            }else{
                this.mapNode.reorderChild(
                    this.enemies[i],
                    Math.floor(this.mapHeight - this.enemies[i].getPosition().y)
                );
            }
        }

        //Collegues　死亡時の処理、Zソート
        this.colleagueCnt = 0;
        for(var i=0;i<this.colleagues.length;i++){
            //仲間の数を数える
            if(this.colleagues[i].isChase == true){
                this.colleagueCnt+=1;
            }
            //仲間が死亡したら配列から外す
            if(this.colleagues[i].update() == false){
                this.mapNode.removeChild(this.colleagues[i]);
                this.colleagues.splice(i, 1);
                this.storage.killedColleagueCnt+=1;               
            }else{
                //生きている仲間をzソートする
                this.mapNode.reorderChild(
                    this.colleagues[i],
                    Math.floor(this.mapHeight - this.colleagues[i].getPosition().y)
                ); 
            }
        }
        //Storageに入れる
        this.storage.colleagueCnt = this.colleagueCnt;

        //bullets
        for(var i=0;i<this.bullets.length;i++){
            if(this.bullets[i].update() == false){
                this.mapNode.removeChild(this.bullets[i]);
                this.bullets.splice(i,1);
            }
        }

        //bullets
        for(var i=0;i<this.enemyBullets.length;i++){
            if(this.enemyBullets[i].update() == false){
                this.mapNode.removeChild(this.enemyBullets[i]);
                this.enemyBullets.splice(i,1);
            }
        }

        this.cutIn.update();
        //衝突
        this.collisionAll();

        //コイン
        for(var i=0;i<this.coins.length;i++){
            //zソートする
            this.mapNode.reorderChild(
                this.coins[i],
                Math.floor(this.mapHeight - this.coins[i].getPosition().y)
            );
        }

        //タイムリミットを超えた場合の処理＋カウントダウン
        this.timeCnt++;
        if(this.isMovedResult == false && this.timeCnt >= this.missionTimeLimit){
            this.isMovedResult = true;
            this.goGameOverLayer();      
        }
        var second = getZeroPaddingNumber(
            Math.floor((this.missionTimeLimit - this.timeCnt)/30)
            ,3
        );
        if(second <=  5){
            this.cutIn.set_text("ノコリ " + second + "秒..");
        }

        this.storage.calcScore();


        //ミッションのジャンルによる成果計算
        if(this.storage.missionGenre == "occupy"){
            this.missionCnt = this.territoryCnt;
        }else if(this.storage.missionGenre == "enemy"){
            this.missionCnt = this.storage.killedEnemyCnt;
        }else{
            this.missionCnt = 0;
        }
        //ミッション達成した後の遷移
        if(this.missionCnt >= this.missionMaxCnt){
            this.isMovedResult = true;
            this.goResultLayer();
        }
    },

    addEnemyBullet:function(enemy){
        var enemyBullet = new Bullet(enemy);
        enemyBullet.attack = enemy.attack;
        enemyBullet.set_position(enemy.getPosition().x,enemy.getPosition().y - 50);
        var colleague = enemy.getNearistColleague();
        if(colleague != null){
            var colleagueX     = colleague.getPosition().x;
            var colleagueY     = colleague.getPosition().y;
            var directX    = Math.floor(enemy.getPosition().x - colleagueX) * -1;
            var directY    = Math.floor(enemy.getPosition().y - colleagueY) * -1;
            var directData = getBulletDirection(directX,directY,3);
            enemyBullet.set_direction(directData[0],directData[1]);
            this.mapNode.addChild(enemyBullet,999);
            this.enemyBullets.push(enemyBullet);
        }
    },

    collisionAll:function(){

        //プレイヤー & 仲間
        collisionPlayerAndColleague(this.player,this.colleagues,this);

        //仲間 & 仲間
        collisionColleagueAndColleague(this.colleagues);

        //プレイヤー & 敵
        collisionPlayerAndEnemy(this.player,this.enemies);

        //プレイヤー & 敵弾丸
        collisionPlayerAndEnemyBullet(this.player,this.enemyBullets);

        //仲間 & 敵
        collisionColleagueAndEnemy(this.colleagues,this.enemies);

        //仲間 & 敵の弾丸
        collisionColleguesAndEnemyBullet(this.colleagues,this.enemyBullets);

        //プレイヤー & コイン
        collisionPlayerAndCoin(this);

        //仲間 & 仲間 
        collisionColleagueAndColleague(this.enemies);

        //敵 & 敵
        collisionEnemyAndEnemy(this.enemies);

        //プレイヤー & マップチップ
        collisionPlayerAndChip(this);

        //敵 & マップチップ
        collisionEnemyAndChip(this);
    },

    moveCamera:function(){
        //カメラ位置はプレイヤーを追いかける
        this.playerCameraX = this.player.getPosition().x + this.cameraX;
        this.playerCameraY = this.player.getPosition().y + this.cameraY;
        
        //xの中心は320/2=16 +- 20
        if(this.playerCameraX >= 320/2 + 20){
            this.cameraX -= this.player.walkSpeed;
        }
        if(this.playerCameraX <= 320/2 - 20){
            this.cameraX += this.player.walkSpeed;
        }
        //yの中心は420/2=210 +- 20
        if(this.playerCameraY >= 420/2 - 20){
            this.cameraY -= this.player.walkSpeed;
        }
        if(this.playerCameraY <= 420/2 + 20){
            this.cameraY += this.player.walkSpeed;
        }
  
        this.mapNode.setScale(this.mapScale,this.mapScale);

        this.mapNode.setPosition(
            this.cameraX,
            this.cameraY
        );
    },

    addColleagues:function(num){
        for (var i=0 ; i <  num ; i++){
            this.colleague = new Colleague(this);
            this.mapNode.addChild(this.colleague,100);
            var depX = getRandNumberFromRange(this.player.getPosition().x - 50,this.player.getPosition().x + 50);
            var depY = getRandNumberFromRange(this.player.getPosition().y - 50,this.player.getPosition().y + 50);
            this.colleague.setPosition(depX,depY);
            this.colleague.isChase = true;
            this.colleagues.push(this.colleague);
        }
    },

    removeColleagueTargetEnemy:function(){
        for(var i=0;i<this.colleagues.length;i++){
            //ターゲットをNullにする
            this.colleagues[i].targetEnemy = null;
            //2秒間はtargetEnemyにセットできないようにする
            this.colleagues[i].isSettableTargetEnemy = false;
        }
    },

    addEnemy : function(code){
        this.enemy = new Enemy(this,code);
        this.mapNode.addChild(this.enemy);
        //set room number
        var walkingRoute = Array();
        var depX = 0;var depY = 0;

        //左上 515 390 右上 1101  375 右下 1085 56 左下  468 40 真ん中 800 220
        var depX = 0;
        var depY = 0;
        var depCode = getRandNumberFromRange(1,4);
        if(depCode == 1){
            //左上
            depX = 500;
            depY = 390;
        }else if(depCode == 2){
            //右上
            depX = 1100;
            depY = 390;
        }else if(depCode == 3){
            //右下
            depX = 1100;
            depY = 50;
        }else if(depCode == 4){
            //左下
            depX = 500;
            depY = 50;
        }
        this.enemy.setPosition(depX,depY);
        this.enemies.push(this.enemy);
    },

//デバイス入力----->

    onTouchesBegan:function (touches, event) {
        if(this.isToucheable() == false) return;
        this.touched = touches[0].getLocation();
        var tPosX = (this.touched.x - this.cameraX) / this.mapScale;
        var tPosY = (this.touched.y - this.cameraY) / this.mapScale;
        this.targetSprite.setPosition(tPosX,tPosY);
    },

    onTouchesMoved:function (touches, event) {
        if(this.isToucheable() == false) return;
        this.touched = touches[0].getLocation();
        var scrollX = this.firstTouchX - this.touched.x;
        var scrollY = this.firstTouchY - this.touched.y;
        var layerPos = this.getPosition();
    },

    onTouchesEnded:function (touches, event) {
    },

    onTouchesCancelled:function (touches, event) {
    },

//アイテムの使用関数----->

    setTerritoryCnt:function(){
        var cnt    = this.stage.getTerritoryCnt();
        var maxCnt = this.stage.getMaxTerritoryCnt();
        this.territoryCnt    = cnt;
        this.territoryMaxCnt = maxCnt;
    },

    setAllUnitRecover : function(){
        this.player.hp = this.player.maxHp;
        for(var i=0;i<this.colleagues.length;i++){
            this.colleagues[i].hp = this.colleagues[i].maxHp;
        }
    },

    setRemoveAllEnemies : function(){
        for(var i=0;i<this.enemies.length;i++){
            this.enemies[i].hp = 0;
        }
    },

    setLevelUpPlayerAndColleagues : function(){
        this.player.lv++;
        this.player.maxHp     = this.player.maxHp * 1.2;
        this.player.hp        = this.player.maxHp;
        this.player.attack    = this.player.attack * 1.2;
        this.player.defence   = this.player.defence * 1.2;
        this.player.walkSpeed = this.player.walkSpeed * 1.2;
        this.player.scale     = this.player.scale * 1.3;
        this.player.sprite.setScale(this.player.scale,this.player.scale);
        for(var i=0;i<this.colleagues.length;i++){
            this.colleagues[i].hp        = this.player.maxHp;
            this.colleagues[i].maxHp     = this.player.maxHp;
            this.colleagues[i].attack    = this.player.attack;
            this.colleagues[i].defence   = this.player.defence;
            this.colleagues[i].walkSpeed = this.player.walkSpeed;
            this.colleagues[i].scale     = this.player.scale;
            this.colleagues[i].sprite.setScale(this.player.scale,this.player.scale);
        }
    },

    setBornCostDecrease : function(){

    },

//シーンの切り替え----->

    goResultLayer:function (pSender) {
        //ステージを追加
        this.storage.stageNumber++;
        if(this.storage.maxStageNumber <= this.storage.stageNumber){
            this.storage.maxStageNumber = this.storage.stageNumber;
        }
        this.storage.calcTotal();
        this.saveData();
        if(this.storage.stageNumber >= CONFIG.MAX_STAGE_NUMBER){
            //全クリア
            var scene = cc.Scene.create();
            scene.addChild(StaffRollLayer.create(this.storage));
            cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
        }else{
            var scene = cc.Scene.create();
            //次のステージへいくためにstorageは必ず受けた渡す
            scene.addChild(ResultLayer.create(this.storage));
            //時計回り
            cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.5,scene));
        }
    },

    goGameOverLayer:function (pSender) {
        this.storage.calcTotal();

        this.saveData();

        var scene = cc.Scene.create();
        scene.addChild(GameOverLayer.create(this.storage));
        cc.Director.getInstance().replaceScene(cc.TransitionProgressRadialCW.create(1.2, scene));
    },

    saveData :function(){
        //3:android 4:iphone 5:ipad 100:mobile_web 101:pc_web
        var platform = cc.Application.getInstance().getTargetPlatform(); 
        if(platform == 100 || platform == 101){
            var toObjString = this.storage.getJson();
            var toObj = JSON.parse(toObjString);
            window.localStorage.setItem("gameStorage",JSON.stringify(toObj));
        }
    },

    isToucheable:function (){
        return true;
    },
});

GameLayer.create = function (storage) {
    var sg = new GameLayer(storage);
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

