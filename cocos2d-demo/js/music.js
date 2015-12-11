var SoundLayer = cc.Layer.extend({
	ctor:function(){
		this._super();


	    // 1. 背景音乐一次只能播放一首。
		// 2. 音效一次可以有多个同时播放
		// 3. 音效和音乐的音量都是可以【分别】控制的  -- 分别
		// 4. 音效和音乐都是支持循环播放的。
		// 5. 音频格式在各个平台上的支持有所差异，
		//      建议：若无高标准要求，例如：音频文件大小。那可以考虑统一使用mp3格式，省事。

		cc.audioEngine.setEffectsVolume(0.5);
        cc.audioEngine.setMusicVolume(0.5);

        // 背景音乐[播放][一次只能播放一首][true和false表示：是否循环播放]
        cc.audioEngine.playMusic(res.effect, false);
        // 背景音乐[停止]
        cc.audioEngine.stopMusic();
        // 背景音乐[暂停]
        cc.audioEngine.pauseMusic();
        // 背景音乐[恢复]
        cc.audioEngine.resumeMusic();
        // 背景音乐[重新播放]
	    cc.audioEngine.rewindMusic();
	}
});