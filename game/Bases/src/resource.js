//
//  resource.js
//  Territory
//
//  Created by Fumitoshi Ogata on 5/30/14.
//  Copyright (c) 2014 http://oggata.github.io All rights reserved.
//

var base_dir = "./";

//json
var charactor_json       = base_dir + "json/charactor.json";
var stages_json          = base_dir + "json/stages.json";
var enemy_json           = base_dir + "json/enemy.json";

//ui
var loading_png          = base_dir + "ui/loading.png";
var s_chara_select       = base_dir + "ui/charactor_select.png";

var s_target             = base_dir + "ui/butterfly.png";
var s_header             = base_dir + "ui/header.png";
var s_footer             = base_dir + "ui/footer.png";
var s_select_button      = base_dir + "ui/select_button.png";
var s_cube_white         = base_dir + "ui/cube_blue_200.png";
var s_cube_blue          = base_dir + "ui/cube_blue_200.png";
var s_cube_red           = base_dir + "ui/cube_red_200.png";
var s_result_clear       = base_dir + "ui/result_clear.png";
var s_result_gameover    = base_dir + "ui/result_gameover.png";
var s_mission_start      = base_dir + "ui/mission_start.png"; 

//map
var s_mapchip_001        = base_dir + "map/q_map_green_200.png";
var s_mapchip_002        = base_dir + "map/q_map_blue_200.png";
var s_mapchip_003        = base_dir + "map/q_map_orange_200.png";
var s_mapchip_004        = base_dir + "map/q_map_red_200.png";
var s_mapchip_005        = base_dir + "map/q_map_orange_200.png";
var s_mapchip_black      = base_dir + "map/q_map_black_200.png";
var s_mapchip_sakura     = base_dir + "map/sakura.png";

//button
var s_button001_scale9   = base_dir + "button/button001_scale9.png";

var s_home_button        = base_dir + "button/homeButton.png";
var s_home_button_on     = base_dir + "button/homeButtonOn.png";

var s_item_button        = base_dir + "button/ember.png";
var s_item_button_on     = base_dir + "button/emberOn.png";
var s_facebook_button    = base_dir + "button/facebook.png";
var s_facebook_button_on = base_dir + "button/facebookOn.png";
var s_twitter_button     = base_dir + "button/twitter.png";
var s_twitter_button_on  = base_dir + "button/twitterOn.png";

//effect
var effect_fire          = base_dir + "effect/pipo-btleffect036_60.png";
var effect_water         = base_dir + "effect/pipo-btleffect038.png";

//text
var s_damage_001         = base_dir + "text/damage001.png";
var s_damage_002         = base_dir + "text/damage002.png";

//sprite
var s_initSprite         = base_dir + "sprite/initSprite.png";
var s_coin               = base_dir + "sprite/coin.png";
var s_enargy             = base_dir + "sprite/enargy.png";

var s_shadow             = base_dir + "sprite/shadow.png";
var s_chara001           = base_dir + "sprite/chara001.png";
var s_chara002           = base_dir + "sprite/chara002.png";
var s_chara003           = base_dir + "sprite/chara003.png";
var s_chara004           = base_dir + "sprite/chara004.png";

var s_enemy_devil        = base_dir + "sprite/devil_001.png";
var s_enemy_devil_boss   = base_dir + "sprite/devil_002.png";

var s_attack_rolling     = base_dir + "sprite/attack_rolling.png";
var s_break              = base_dir + "sprite/break.png";

//bgm
var s_bgm_001            = base_dir + "res/sound/bgm/bgm_maoudamashii_cyber09.mp3";
var s_bgm_002            = base_dir + "res/sound/bgm/bgm_maoudamashii_piano07.mp3";
var s_se_dog             = base_dir + "res/sound/se/se_maoudamashii_magical01.mp3";
var s_se_occupied        = base_dir + "res/sound/se/se_maoudamashii_onepoint17.mp3";
var s_se_enemyOccupied   = base_dir + "res/sound/se/se_maoudamashii_onepoint29.mp3";
var s_se_coin            = base_dir + "res/sound/se/se_maoudamashii_system47.mp3";
var s_se_attack          = base_dir + "res/sound/se/se_maoudamashii_battle01.mp3";
var s_se_system          = base_dir + "res/sound/se/se_maoudamashii_system23.mp3";

//story
var s_story_001          = base_dir + "story/001.png";

var g_system_resources   = [
    enemy_json,
    stages_json,
    charactor_json,
    loading_png,
    s_se_system,
    s_button001_scale9
];

var g_chara_select_resources   = [
    enemy_json,
    stages_json,
    charactor_json,
    loading_png,
    s_chara_select,
    s_se_system,
    s_select_button,
    s_chara001,
    s_chara002,
    s_chara003,
    s_chara004,
    s_button001_scale9
];

var g_resources       = [
    s_facebook_button,
    s_facebook_button_on,
    s_twitter_button,
    s_twitter_button_on,
    enemy_json,
    stages_json,
    charactor_json,
    s_result_clear,
    s_result_gameover,
    s_mission_start,
    s_enemy_devil,
    s_enemy_devil_boss,
    s_target,
    loading_png,
    effect_water,
    effect_fire,
    s_item_button,
    s_item_button_on,
    s_enargy,
    s_header,
    s_shadow,
    s_chara001,
    s_chara002,
    s_chara003,
    s_chara004,
    s_attack_rolling,
    s_break,
    s_initSprite,
    s_select_button,
    s_damage_001,
    s_damage_002,
    s_mapchip_001,
    s_mapchip_002,
    s_mapchip_003,
    s_mapchip_004,
    s_mapchip_005,
    s_mapchip_black,
    s_mapchip_sakura,
    s_footer,
    s_cube_white,
    s_se_dog,
    s_se_occupied,
    s_se_coin,
    s_se_attack,
    s_se_system,
    s_se_enemyOccupied,
    s_button001_scale9
];