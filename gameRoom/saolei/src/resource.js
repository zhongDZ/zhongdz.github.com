var sounds_prefix = "res/sounds/",
    musics_prefix = "res/musics/",
    images_prefix = "res/images/";

var sounds = {
    login_page:                     sounds_prefix + "login_page.wav",
    game_over:                      sounds_prefix + "game_over.ogg",
    victory:                        sounds_prefix + "victory.mp3",
    empty_tile_opened:              sounds_prefix + "empty_tile_opened.wav",
    mine_exploded:                  sounds_prefix + "mine_exploded.mp3",
    both_buttons_pressed_mode_fail: sounds_prefix + "both_buttons_pressed_mode_fail.wav"
};

var musics = {
    menu:   musics_prefix + "menu.ogg",
    ingame: musics_prefix + "ingame.mp3"
};

var images = {
    background_menu_mine: images_prefix + "background_menu_mine.png",

    tile_1:                       images_prefix + "tile_1.png",
    tile_2:                       images_prefix + "tile_2.png",
    tile_3:                       images_prefix + "tile_3.png",
    tile_4:                       images_prefix + "tile_4.png",
    tile_5:                       images_prefix + "tile_5.png",
    tile_6:                       images_prefix + "tile_6.png",
    tile_7:                       images_prefix + "tile_7.png",
    tile_8:                       images_prefix + "tile_8.png",
    tile_1x:                      images_prefix + "tile_1x.png",
    tile_2x:                      images_prefix + "tile_2x.png",
    tile_3x:                      images_prefix + "tile_3x.png",
    tile_4x:                      images_prefix + "tile_4x.png",
    tile_5x:                      images_prefix + "tile_5x.png",
    tile_6x:                      images_prefix + "tile_6x.png",
    tile_7x:                      images_prefix + "tile_7x.png",
    tile_empty:                   images_prefix + "tile_empty.png",
    tile_pressed:                 images_prefix + "tile_pressed.png",
    tile_closed:                  images_prefix + "tile_closed.png",
    tile_closed_highlighted:      images_prefix + "tile_closed_highlighted.png",
    tile_closed_flag:             images_prefix + "tile_closed_flag.png",
    tile_closed_flag_highlighted: images_prefix + "tile_closed_flag_highlighted.png",
    tile_closed_flag_wrong:       images_prefix + "tile_closed_flag_wrong.png",
    tile_mine:                    images_prefix + "tile_mine.png",
    tile_mine_defused:            images_prefix + "tile_mine_defused.png",
    tile_mine_exploded:           images_prefix + "tile_mine_exploded.png",

    button_normal:      images_prefix + "button_normal.png",
    button_highlighted: images_prefix + "button_highlighted.png",
    button_disabled:    images_prefix + "button_disabled.png",

    editbox: images_prefix + "editbox.png",

    timer:      images_prefix + "timer.png",
    mines_left: images_prefix + "mines_left.png",

    sound:          images_prefix + "sound.png",
    sound_disabled: images_prefix + "sound_disabled.png",
    music:          images_prefix + "music.png",
    music_disabled: images_prefix + "music_disabled.png",

    left_mb_mode_button:  images_prefix +  "left_mb_mode_button.png",
    both_mb_mode_button:  images_prefix +  "both_mb_mode_button.png",
    right_mb_mode_button: images_prefix + "right_mb_mode_button.png"
};

var g_resources = [];
for (var i in sounds) {
    g_resources.push(sounds[i]);
}
for (var i in musics) {
    g_resources.push(musics[i]);
}
for (var i in images) {
    g_resources.push(images[i]);
}
g_resources.push({
    type: "font",
    name: "Impact",
    srcs: ["font/impact.ttf"]
});
