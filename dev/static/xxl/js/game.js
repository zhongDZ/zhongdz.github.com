var game = null;
var Game = cc.Class.extend({
    score:0,
    time:7,
    inittime:7,
    alltime:14,
    envelopeTouch:false,
    gamecanotouch:false,
    init:function(){
        var rublish = [];
        this.pushRublish = function(obj){
            rublish.push(obj);
        }

        this.removeAllobj = function(lands){
            for(var i = 0;i<=rublish.length-1;i++){
                lands.removeChild(rublish[i]);
            }
            rublish = [];
        }
        var score = 0;

        function getScore(){
            var rscore = score
            return  rscore;
        }
        function setScore(num){
            score = num;
        }

    },
    resetGame:function(){
        this.score = 0;
        this.time = this.inittime;
    }
});
game = new Game();
game.init();
var gameScore = 0;