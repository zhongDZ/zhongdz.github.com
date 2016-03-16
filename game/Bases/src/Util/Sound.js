//
//  Sound.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var playBGM = function(){
    this.audioEngine = cc.AudioEngine.getInstance();
    this.audioEngine.stopMusic();

    this.audioEngine.playMusic(s_bgm_001,true); //BGM
    this.audioEngine.setMusicVolume(CONFIG.BGM_VOLUME);
};

var playSystemBGM = function(){
    this.audioEngine = cc.AudioEngine.getInstance();
    this.audioEngine.stopMusic();

    this.audioEngine.playMusic(s_bgm_002,true); //BGM
    this.audioEngine.setMusicVolume(CONFIG.BGM_VOLUME);
};

var playSE = function(sound){
    this.audioEngine = cc.AudioEngine.getInstance();
    this.audioEngine.playEffect(sound,false);
    this.audioEngine.setEffectsVolume(CONFIG.SE_VOLUME);
};

var playSystemButton = function(){
    this.audioEngine = cc.AudioEngine.getInstance();
    this.audioEngine.playEffect(s_se_system,false);
    this.audioEngine.setEffectsVolume(CONFIG.SE_VOLUME);
};