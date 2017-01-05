var levelData = [
	{
		name : lang.place.YING_CHUAN,
		id : "ying_chuan",
		location : {
			x : 460,
			y : 130
		},
		backgroundMusicIndex : 1,
		background : "ying_chuan_bg",
		backgroundOffset : {
			y : -300
		},
		characters : {
			ours : {
				lord : "he_jin",
				player : "liu_bei",
				friends : [
					"guan_yu",
					"zhang_fei",
					"soldier1"
				]
			},
			enemies : {
				1 : [
					"soldier1",
					"soldier1",
					"soldier1"
				],
				2 : [
					"soldier1",
					"soldier1",
					"soldier1"
				],
				3 : [
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				4 : [
					"he_yi",
					"soldier1",
					"soldier1",
					"soldier1"
				],
				5 : [
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier1",
					"zhang_man_cheng"
				],
				6 : [
					"cheng_yuan_zhi",
					"deng_mao",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier1"
				],
				7 : [
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier1",
					"soldier2"
				],
				8 : [
					"liao_hua",
					"guan_hai",
					"soldier1",
					"soldier2",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				9 : [
					"zhang_yan",
					"zhang_liang",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				10 : [
					"zhang_bao1",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"zhang_jiao"
				]
			},
			rouse : [
				"liao_hua",
				"zhang_jiao"
			]
		},
		events : {
			round : [
				{
					value : 1,
					instructions : [
						{name : "addTalk", param : "1"}
					]
				},
				{
					value : 8,
					instructions : [
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 9,
					instructions : [
						{name : "addTalk", param : "2"},
					]
				},
				{
					value : 10,
					instructions : [
						{name : "addTalk", param : "3"},
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "cao_cao"},
						{name : "addFriend", param : "xia_hou_dun"},
						{name : "addFriend", param : "xia_hou_yuan"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				}
			]
		},
		talks : {
			1 : [
				{
					speaker : "he_jin",
					side : "ours",
					content : lang.talk.YING_CHUAN_1_0
				},
				{
					speaker : "liu_bei",
					side : "ours",
					content : lang.talk.YING_CHUAN_1_1
				},
				{
					speaker : "guan_yu",
					side : "ours",
					content : lang.talk.YING_CHUAN_1_2
				},
				{
					speaker : "zhang_fei",
					side : "ours",
					content : lang.talk.YING_CHUAN_1_3
				}
			],
			2 : [
				{
					speaker : "zhang_liang",
					side : "enemies",
					content : lang.talk.YING_CHUAN_2_0
				},
				{
					speaker : "liu_bei",
					side : "ours",
					content : lang.talk.YING_CHUAN_2_1
				}
			],
			3 : [
				{
					speaker : "zhang_bao1",
					side : "enemies",
					content : lang.talk.YING_CHUAN_3_0
				},
				{
					speaker : "liu_bei",
					side : "ours",
					content : lang.talk.YING_CHUAN_3_1
				},
				{
					speaker : "zhang_jiao",
					side : "enemies",
					content : lang.talk.YING_CHUAN_3_2
				},
				{
					speaker : "he_jin",
					side : "ours",
					content : lang.talk.YING_CHUAN_3_3
				},
				{
					speaker : "liu_bei",
					side : "ours",
					content : lang.talk.YING_CHUAN_3_4
				},
				{
					speaker : "liu_bei",
					side : "ours",
					content : lang.talk.YING_CHUAN_3_5
				}
			]
		},
		unlockLevelList : ["hu_lao_guan"],
		initialMoney : 300,
		nextRoundSpeed : 400,
		nextCharacterSpeed : 30,
		rewardRatio : 0.5
	},

	{
		name : lang.place.HU_LAO_GUAN,
		id : "hu_lao_guan",
		location : {
			x : 370,
			y : 340
		},
		backgroundMusicIndex : 2,
		background : "hu_lao_guan_bg",
		backgroundOffset : {
			y : -300
		},
		backgroundHiddenWidth : 200,
		characters : {
			ours : {
				lord : "yuan_shao",
				player : "cao_cao",
				friends : [
					"liu_bei",
					"guan_yu",
					"zhang_fei",
					"xia_hou_dun",
					"xia_hou_yuan"
				]
			},
			enemies : {
				1 : [
					"soldier1",
					"soldier1",
					"soldier1"
				],
				2 : [
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier1"
				],
				3 : [
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				4 : [
					"li_su",
					"wang_yun",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				5 : [
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				6 : [
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2",
				],
				7 : [
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				8 : [
					"xu_rong",
					"niu_fu",
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				9 : [
					"hu_che_er",
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				10 : [
					"soldier3",
					"zhang_xiu",
					"zhang_ji",
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				11 : [
					"soldier3",
					"guo_si",
					"li_jue",
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				12 : [
					"soldier3",
					"soldier2",
					"soldier2",
					"hua_xiong",
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				13 : [
					"soldier3",
					"soldier2",
					"zhang_liao",
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				14 : [
					"soldier2",
					"soldier3",
					"diao_chan",
					"lv_bu",
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				15 : [
					"soldier3",
					"soldier3",
					"soldier2",
					"li_ru",
					"dong_zhuo",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				]
			},
			rouse : [
				"zhang_liao",
				"hua_xiong"
			],
			breakOut : [
				"lv_bu"
			]
		},
		events : {
			enterFrame : [
				{
					value : 4300,
					instructions : [
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "chen_lan"},
						{name : "addFriend", param : "lei_bo"},
						{name : "addFriend", param : "yuan_shu"},
						{name : "addFriend", param : "soldier1"},
						{name : "addFriend", param : "soldier1"},
						{name : "addFriend", param : "soldier2"}
					]
				}
			],
			round : [
				{
					value : 1,
					instructions : [
						{name : "addTalk", param : "1"}
					]
				},
				{
					value : 8,
					instructions : [
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "liu_biao"},
						{name : "addFriend", param : "soldier1"},
						{name : "addFriend", param : "soldier1"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 11,
					instructions : [
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "tao_qian"},
						{name : "addFriend", param : "bao_xin"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 12,
					instructions : [
						{name : "addTalk", param : "2"},
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "sun_jian"},
						{name : "addFriend", param : "huang_gai"},
						{name : "addFriend", param : "soldier1"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 14,
					instructions : [
						{name : "addTalk", param : "3"},
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "gong_sun_zan"},
						{name : "addFriend", param : "zhao_yun"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 15,
					instructions : [
						{name : "addTalk", param : "4"}
					]
				}
			]
		},
		talks : {
			1 : [
				{
					speaker : "yuan_shao",
					side : "ours",
					content : lang.talk.HU_LAO_GUAN_1_0
				},
				{
					speaker : "dong_zhuo",
					side : "enemies",
					content : lang.talk.HU_LAO_GUAN_1_1
				},
				{
					speaker : "cao_cao",
					side : "ours",
					content : lang.talk.HU_LAO_GUAN_1_2
				}
			],
			2 : [
				{
					speaker : "hua_xiong",
					side : "enemies",
					content : lang.talk.HU_LAO_GUAN_2_0
				},
				{
					speaker : "yuan_shao",
					side : "ours",
					content : lang.talk.HU_LAO_GUAN_2_1
				},
				{
					speaker : "guan_yu",
					side : "ours",
					content : lang.talk.HU_LAO_GUAN_2_2
				}
			],
			3 : [
				{
					speaker : "dong_zhuo",
					side : "enemies",
					content : lang.talk.HU_LAO_GUAN_3_0
				},
				{
					speaker : "lv_bu",
					side : "enemies",
					content : lang.talk.HU_LAO_GUAN_3_1
				},
				{
					speaker : "zhang_fei",
					side : "ours",
					content : lang.talk.HU_LAO_GUAN_3_2
				},
				{
					speaker : "liu_bei",
					side : "ours",
					content : lang.talk.HU_LAO_GUAN_3_3
				}
			],
			4 : [
				{
					speaker : "dong_zhuo",
					side : "enemies",
					content : lang.talk.HU_LAO_GUAN_4_0
				}
			]
		},
		unlockLevelList : ["wu_jun", "shou_chun"],
		initialMoney : 400,
		nextRoundSpeed : 300,
		nextCharacterSpeed : 30,
		rewardRatio : 0.6
	},

	{
		name : lang.place.WU_JUN,
		id : "wu_jun",
		location : {
			x : 720,
			y : 600
		},
		backgroundMusicIndex : 1,
		background : "wu_jun_bg",
		backgroundOffset : {
			x : -550,
			y : -300
		},
		characters : {
			ours : {
				lord : "sun_ce",
				player : "sun_quan",
				friends : [
					"zhou_yu",
					"sun_shang_xiang",
					"soldier2"
				]
			},
			enemies : {
				1 : [
					"soldier1",
					"soldier1",
					"soldier1"
				],
				2 : [
					"yan_bai_hu",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				3 : [
					"soldier3",
					"soldier2",
					"soldier2"
				],
				4 : [
					"soldier1",
					"soldier1",
					"soldier1"
				],
				5 : [
					"zhang_ying",
					"fan_neng",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				6 : [
					"soldier3",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				7 : [
					"lei_bo",
					"chen_lan",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				8 : [
					"yuan_shu",
					"ji_ling",
					"soldier2",
					"soldier1",
					"soldier1",
					"soldier2"
				],
				9 : [
					"soldier3",
					"soldier3"
				],
				10 : [
					"tai_shi_ci",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				11 : [
					"liu_yao",
					"liu_ji",
					"liu_shang",
					"soldier2",
					"soldier2",
					"soldier2"
				]
			}
		},
		events : {
			round : [
				{
					value : 1,
					instructions : [
						{name : "addTalk", param : "1"}
					]
				},
				{
					value : 7,
					instructions : [
						{name : "addTalk", param : "2"}
					]
				},
				{
					value : 8,
					instructions : [
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "soldier1"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier1"}
					]
				},
				{
					value : 10,
					instructions : [
						{name : "addTalk", param : "3"},
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 11,
					instructions : [
						{name : "addTalk", param : "4"}
					]
				}
			]
		},
		talks : {
			1 : [
				{
					speaker : "sun_ce",
					side : "ours",
					content : lang.talk.WU_JUN_1_0
				},
				{
					speaker : "sun_quan",
					side : "ours",
					content : lang.talk.WU_JUN_1_1
				},
				{
					speaker : "sun_shang_xiang",
					side : "ours",
					content : lang.talk.WU_JUN_1_2
				},
				{
					speaker : "zhou_yu",
					side : "ours",
					content : lang.talk.WU_JUN_1_3
				}
			],
			2 : [
				{
					speaker : "soldier2",
					side : "ours",
					content : lang.talk.WU_JUN_2_0
				},
				{
					speaker : "sun_ce",
					side : "ours",
					content : lang.talk.WU_JUN_2_1
				},
				{
					speaker : "yuan_shu",
					side : "enemies",
					content : lang.talk.WU_JUN_2_2
				},
				{
					speaker : "sun_ce",
					side : "ours",
					content : lang.talk.WU_JUN_2_3
				},
				{
					speaker : "zhou_yu",
					side : "ours",
					content : lang.talk.WU_JUN_2_4
				}
			],
			3 : [
				{
					speaker : "tai_shi_ci",
					side : "enemies",
					content : lang.talk.WU_JUN_3_0
				},
				{
					speaker : "sun_quan",
					side : "ours",
					content : lang.talk.WU_JUN_3_1
				}
			],
			4 : [
				{
					speaker : "liu_yao",
					side : "enemies",
					content : lang.talk.WU_JUN_4_0
				},
				{
					speaker : "sun_quan",
					side : "ours",
					content : lang.talk.WU_JUN_4_1
				}
			]
		},
		initialMoney : 300,
		nextRoundSpeed : 300,
		nextCharacterSpeed : 30,
		rewardRatio : 0.6
	},

	{
		name : lang.place.SHOU_CHUN,
		id : "shou_chun",
		location : {
			x : 520,
			y : 380
		},
		backgroundMusicIndex : 2,
		background : "shou_chun_bg",
		backgroundOffset : {
			y : -120
		},
		backgroundHiddenWidth : 150,
		characters : {
			ours : {
				lord : "cao_cao",
				player : "zhang_fei",
				friends : [
					"guan_yu",
					"liu_bei",
					"sun_shang_xiang",
					"sun_quan",
					"soldier1"
				]
			},
			enemies : {
				1 : [
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier1"
				],
				2 : [
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2"
				],
				3 : [
					"han_jin",
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2"
				],
				4 : [
					"yang_feng",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				5 : [
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier1"
				],
				6 : [
					"qiao_mao",
					"zhang_xun",
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2"
				],
				7 : [
					"soldier2",
					"soldier2",
					"soldier2"
				],
				8 : [
					"chen_lan",
					"lei_bo",
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier2"
				],
				9 : [
					"ji_ling",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				10 : [
					"soldier3",
					"yang_da_jiang",
					"yuan_shu",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				]
			},
			rouse : [
				"ji_ling"
			]
		},
		events : {
			round : [
				{
					value : 1,
					instructions : [
						{name : "addTalk", param : "1"}
					]
				},
				{
					value : 5,
					instructions : [
						{name : "addTalk", param : "2"}
					]
				},
				{
					value : 9,
					instructions : [
						{name : "addTalk", param : "3"}
					]
				}
			]
		},
		talks : {
			1 : [
				{
					speaker : "cao_cao",
					side : "ours",
					content : lang.talk.SHOU_CHUN_1_0
				},
				{
					speaker : "liu_bei",
					side : "ours",
					content : lang.talk.SHOU_CHUN_1_1
				},
				{
					speaker : "zhang_fei",
					side : "ours",
					content : lang.talk.SHOU_CHUN_1_2
				}
			],
			2 : [
				{
					speaker : "zhang_fei",
					side : "ours",
					content : lang.talk.SHOU_CHUN_2_0
				}
			],
			3 : [
				{
					speaker : "yuan_shu",
					side : "enemies",
					content : lang.talk.SHOU_CHUN_3_0
				},
				{
					speaker : "soldier2",
					side : "enemies",
					content : lang.talk.SHOU_CHUN_3_1
				},
				{
					speaker : "zhang_fei",
					side : "ours",
					content : lang.talk.SHOU_CHUN_3_2
				}
			]
		},
		unlockLevelList : ["xia_pi"],
		initialMoney : 400,
		nextRoundSpeed : 320,
		nextCharacterSpeed : 10,
		rewardRatio : 0.6
	},

	{
		name : lang.place.XIA_PI,
		id : "xia_pi",
		location : {
			x : 620,
			y : 300
		},
		backgroundMusicIndex : 5,
		background : "xia_pi_bg",
		backgroundOffset : {
			x : -250,
			y : -350
		},
		characters : {
			ours : {
				lord : "cao_cao",
				player : "xia_hou_dun",
				friends : [
					"xia_hou_yuan",
					"xu_chu",
					"zhang_fei",
					"guan_yu",
					"soldier2"
				]
			},
			enemies : {
				1 : [
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				2 : [
					"soldier1",
					"soldier1",
					"soldier1"
				],
				3 : [
					"hao_meng",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				4 : [
					"cao_xing",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				5 : [
					"song_xian",
					"wei_xu",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				6 : [
					"soldier2",
					"soldier2",
					"soldier2"
				],
				7 : [
					"gao_shun",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				8 : [
					"cao_bao",
					"cheng_lian",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				9 : [
					"hou_cheng",
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				10 : [
					"zhang_liao",
					"zang_ba",
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				11 : [
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				12 : [
					"lv_bu",
					"diao_chan",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				]
			},
			rouse : [
				"zhang_liao",
				"lv_bu"
			]
		},
		events : {
			round  : [
				{
					value : 1,
					instructions : [
						{name : "addTalk", param : "1"}
					]
				},
				{
					value : 7,
					instructions : [
						{name : "addTalk", param : "2"},
						{name : "addHint", param : lang.hint.OUR_SCHEME_OF_FLOOD_HAS_WORKED},
						{name : "flood", param : "enemies"}
					]
				},
				{
					value : 10,
					instructions : [
						{name : "addTalk", param : "3"}
					]
				},
				{
					value : 11,
					instructions : [
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "liu_bei"},
						{name : "addFriend", param : "soldier1"},
						{name : "addFriend", param : "soldier1"},
						{name : "addFriend", param : "soldier1"}
					]
				},
				{
					value : 12,
					instructions : [
						{name : "addTalk", param : "4"}
					]
				}
			]
		},
		talks : {
			1 : [
				{
					speaker : "lv_bu",
					side : "enemies",
					content : lang.talk.XIA_PI_1_0
				},
				{
					speaker : "xia_hou_yuan",
					side : "ours",
					content : lang.talk.XIA_PI_1_1
				},
				{
					speaker : "xia_hou_dun",
					side : "ours",
					content : lang.talk.XIA_PI_1_2
				}
			],
			2 : [
				{
					speaker : "soldier2",
					side : "enemies",
					content : lang.talk.XIA_PI_2_0
				},
				{
					speaker : "lv_bu",
					side : "enemies",
					content : lang.talk.XIA_PI_2_1
				}
			],
			3 : [
				{
					speaker : "zhang_liao",
					side : "enemies",
					content : lang.talk.XIA_PI_3_0
				},
				{
					speaker : "cao_cao",
					side : "ours",
					content : lang.talk.XIA_PI_3_1
				}
			],
			4 : [
				{
					speaker : "lv_bu",
					side : "enemies",
					content : lang.talk.XIA_PI_4_0
				},
				{
					speaker : "diao_chan",
					side : "enemies",
					content : lang.talk.XIA_PI_4_1
				},
				{
					speaker : "cao_cao",
					side : "ours",
					content : lang.talk.XIA_PI_4_2
				}
			]
		},
		unlockLevelList : ["guan_du"],
		initialMoney : 300,
		nextRoundSpeed : 340,
		nextCharacterSpeed : 5,
		rewardRatio : 0.6
	},

	{
		name : lang.place.GUAN_DU,
		id : "guan_du",
		location : {
			x : 430,
			y : 220
		},
		backgroundMusicIndex : 2,
		background : "guan_du_bg",
		backgroundOffset : {
			x : -450,
			y : -350
		},
		firePosition : [
			{x : 1550, y : 100},
			{x : 1650, y : 130},
			{x : 1730, y : 80},
			{x : 2000, y : 90}
		],
		characters : {
			ours : {
				lord : "cao_cao",
				player : "jia_xu",
				friends : [
					"zhang_liao",
					"xu_chu",
					"li_dian",
					"yue_jin",
					"soldier1"
				]
			},
			enemies : {
				1 : [
					"soldier2",
					"soldier2",
					"soldier2"
				],
				2 : [
					"soldier2",
					"soldier2",
					"soldier2"
				],
				3 : [
					"soldier2",
					"soldier2",
					"soldier2"
				],
				4 : [
					"soldier2",
					"soldier2",
					"soldier2",
					"wen_chou",
					"yan_liang"
				],
				5 : [
					"soldier1"
				],
				6 : [
					"soldier1"
				],
				7 : [
					"chun_yu_qiong",
					"soldier2",
					"soldier2"
				],
				8 : [
					"zhang_he",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				9 : [
					"gao_lan",
					"xin_pi",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				10 : [
					"guo_tu",
					"tian_feng",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				11 : [
					"gao_gan",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				12 : [
					"shen_pei",
					"ju_shou",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				13 : [
					"lv_kuang",
					"lv_xiang",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				14 : [
					"zhang_fei",
					"liu_bei",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				15 : [
					"zhang_nan",
					"jiao_chu",
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier1"
				],
				16 : [
					"yuan_tan",
					"yuan_xi",
					"yuan_shang",
					"yuan_shao",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				]
			},
			rouse : [
				"yan_liang",
				"wen_chou",
				"yuan_shao",
				"guan_yu"
			]
		},
		events : {
			enterFrame : [
				{
					value : 3,
					instructions : [
						{name : "addTalk", param : "1"}
					]
				}
			],
			round : [
				{
					value : 5,
					instructions : [
						{name : "addTalk", param : "2"},
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "guan_yu"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 9,
					instructions : [
						{name : "addTalk", param : "3"},
						{name : "addHint", param : lang.hint.OUR_SCHEME_OF_BURNING_HAS_WORKED},
						{name : "burn", param : "enemies"},
						{name : "addHint", param : lang.hint.OUR_MONEY_HAS_INCREASED_BY + 200},
						{name : "increaseMoneyBy", param : 200},
						{name : "increaseRewardRatioBy", param : 0.4},
						{name : "addFriend", param : "xu_you"}
					]
				},
				{
					value : 15,
					instructions : [
						{name : "addTalk", param : "4"}
					]
				}
			]
		},
		talks : {
			1 : [
				{
					speaker : "cao_cao",
					side : "ours",
					content : lang.talk.GUAN_DU_1_0
				},
				{
					speaker : "soldier1",
					side : "ours",
					content : lang.talk.GUAN_DU_1_1
				},
				{
					speaker : "jia_xu",
					side : "ours",
					content : lang.talk.GUAN_DU_1_2
				},
				{
					speaker : "cao_cao",
					side : "ours",
					content : lang.talk.GUAN_DU_1_3
				},
				{
					speaker : "jia_xu",
					side : "ours",
					content : lang.talk.GUAN_DU_1_4
				},
				{
					speaker : "xu_you",
					side : "ours",
					content : lang.talk.GUAN_DU_1_5
				}
			],
			2 : [
				{
					speaker : "yan_liang",
					side : "enemies",
					content : lang.talk.GUAN_DU_2_0
				},
				{
					speaker : "wen_chou",
					side : "enemies",
					content : lang.talk.GUAN_DU_2_1
				},
				{
					speaker : "guan_yu",
					side : "ours",
					content : lang.talk.GUAN_DU_2_2
				}
			],
			3 : [
				{
					speaker : "soldier1",
					side : "ours",
					content : lang.talk.GUAN_DU_3_0
				},
				{
					speaker : "zhang_liao",
					side : "ours",
					content : lang.talk.GUAN_DU_3_1
				},
				{
					speaker : "xu_chu",
					side : "ours",
					content : lang.talk.GUAN_DU_3_2
				}
			],
			4 : [
				{
					speaker : "yuan_shao",
					side : "enemies",
					content : lang.talk.GUAN_DU_4_0
				},
				{
					speaker : "cao_cao",
					side : "ours",
					content : lang.talk.GUAN_DU_4_1
				}
			]
		},
		unlockLevelList : ["chang_ban"],
		initialMoney : 140,
		nextRoundSpeed : 300,
		nextCharacterSpeed : 15,
		rewardRatio : 0.1
	},

	{
		name : lang.place.CHANG_BAN,
		id : "chang_ban",
		location : {
			x : 350,
			y : 560
		},
		backgroundMusicIndex : 3,
		background : "chang_ban_bg",
		backgroundOffset : {
			y : -280
		},
		characters : {
			ours : {
				lord : "liu_bei",
				player : "zhao_yun",
				friends : [
					"soldier1"
				]
			},
			enemies : {
				1 : [
					"xia_hou_dun",
					"li_dian",
					"soldier1",
					"soldier1",
					"soldier1"
				],
				2 : [
					"soldier1",
					"soldier1",
					"soldier1"
				],
				3 : [
					"soldier2",
					"soldier2",
					"soldier2"
				],
				4 : [
					"soldier1",
					"soldier1",
					"soldier1"
				],
				5 : [
					"yue_jin",
					"cheng_yu",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				6 : [
					"soldier1",
					"soldier1",
					"soldier1"
				],
				7 : [
					"zhang_he",
					"xun_you",
					"soldier1",
					"soldier1"
				],
				8 : [
					"wen_pin",
					"xu_huang",
					"soldier1",
					"soldier1"
				],
				9 : [
					"soldier1",
					"soldier1"
				],
				10 : [
					"soldier1",
					"soldier1"
				],
				11 : [
					"soldier1",
					"soldier1"
				],
				12 : [
					"xu_chu",
					"soldier2",
					"soldier2"
				],
				13 : [
					"zhang_liao",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				14 : [
					"xia_hou_dun",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				15 : [
					"cao_cao",
					"xia_hou_yuan",
					"soldier2",
					"soldier2",
					"soldier2"
				]
			},
			breakOut : [
				"zhao_yun",
				"zhang_fei"
			]
		},
		events : {
			round : [
				{
					value : 1,
					instructions : [
						{name : "addTalk", param : "1"}
					]
				},
				{
					value : 3,
					instructions : [
						{name : "addTalk", param : "2"}
					]
				},
				{
					value : 5,
					instructions : [
						{name : "addTalk", param : "3"}
					]
				},
				{
					value : 7,
					instructions : [
						{name : "addTalk", param : "4"},
						{name : "addFriend", param : "mi_lan"},
						{name : "addFriend", param : "soldier1"},
						{name : "addFriend", param : "soldier1"}
					]
				},
				{
					value : 8,
					instructions : [
						{name : "addTalk", param : "5"}
					]
				},
				{
					value : 10,
					instructions : [
						{name : "addTalk", param : "6"},
						{name : "addFriend", param : "zhang_fei"}
					]
				},
				{
					value : 12,
					instructions : [
						{name : "addTalk", param : "7"}
					]
				},
				{
					value : 13,
					instructions : [
						{name : "addTalk", param : "8"},
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "guan_yu"},
						{name : "addFriend", param : "zhu_ge_liang"},
						{name : "addFriend", param : "soldier1"},
						{name : "addFriend", param : "soldier1"},
						{name : "addFriend", param : "soldier1"}
					]
				},
				{
					value : 14,
					instructions : [
						{name : "addHint", param : lang.XIA_HOU_DUN + lang.hint.REAPPEARS}
					]
				},
				{
					value : 15,
					instructions : [
						{name : "addTalk", param : "9"}
					]
				}
			]
		},
		talks : {
			1 : [
				{
					speaker : "soldier1",
					side : "ours",
					content : lang.talk.CHANG_BAN_1_0
				},
				{
					speaker : "zhao_yun",
					side : "ours",
					content : lang.talk.CHANG_BAN_1_1
				}
			],
			2 : [
				{
					speaker : "liu_bei",
					side : "ours",
					content : lang.talk.CHANG_BAN_2_0
				},
				{
					speaker : "mi_lan",
					side : "ours",
					content : lang.talk.CHANG_BAN_2_1
				},
				{
					speaker : "zhao_yun",
					side : "ours",
					content : lang.talk.CHANG_BAN_2_2
				},
				{
					speaker : "zhang_fei",
					side : "ours",
					content : lang.talk.CHANG_BAN_2_3
				}
			],
			3 : [
				{
					speaker : "yue_jin",
					side : "enemies",
					content : lang.talk.CHANG_BAN_3_0
				}
			],
			4 : [
				{
					speaker : "zhang_he",
					side : "enemies",
					content : lang.talk.CHANG_BAN_4_0
				}
			],
			5 : [
				{
					speaker : "xu_huang",
					side : "enemies",
					content : lang.talk.CHANG_BAN_5_0
				}
			],
			6 : [
				{
					speaker : "zhang_fei",
					side : "ours",
					content : lang.talk.CHANG_BAN_6_0
				}
			],
			7 : [
				{
					speaker : "xu_chu",
					side : "enemies",
					content : lang.talk.CHANG_BAN_7_0
				}
			],
			8 : [
				{
					speaker : "zhang_liao",
					side : "enemies",
					content : lang.talk.CHANG_BAN_8_0
				},
				{
					speaker : "zhu_ge_liang",
					side : "ours",
					content : lang.talk.CHANG_BAN_8_1
				}
			],
			9 : [
				{
					speaker : "cao_cao",
					side : "enemies",
					content : lang.talk.CHANG_BAN_9_0
				}
			]
		},
		unlockLevelList : ["chi_bi"],
		initialMoney : 210,
		nextRoundSpeed : 350,
		nextCharacterSpeed : 30,
		rewardRatio : 0
	},

	{
		name : lang.place.CHI_BI,
		id : "chi_bi",
		location : {
			x : 620,
			y : 680
		},
		backgroundMusicIndex : 4,
		background : "chi_bi_bg",
		backgroundOffset : {
			x : -150,
			y : -260
		},
		firePosition : [
			{x : 2050, y : 40},
			{x : 2170, y : 110},
			{x : 2230, y : 10},
			{x : 2250, y : 160},
			{x : 2330, y : 60},
			{x : 2450, y : 10},
			{x : 2560, y : 80},
			{x : 2650, y : 60}
		],
		characters : {
			ours : {
				lord : "sun_quan",
				player : "zhou_yu",
				friends : [
					"huang_gai",
					"tai_shi_ci",
					"lu_su",
					"gan_ning"
				]
			},
			enemies : {
				1 : [
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier1"
				],
				2 : [
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier1"
				],
				3 : [
					"wen_pin",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier1",
					"soldier1"
				],
				4 : [
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier1",
					"soldier1"
				],
				5 : [
					"soldier3",
					"zhang_liao",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				6 : [
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier1",
					"soldier1"
				],
				7 : [
					"soldier3",
					"cheng_yu",
					"xun_you",
					"soldier2",
					"soldier1"
				],
				8 : [
					"li_dian",
					"yue_jin",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier1",
					"soldier1"
				],
				9 : [
					"soldier3",
					"soldier2",
					"soldier2"
				],
				10 : [
					"cao_ren",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				11 : [
					"soldier2",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				12 : [
					"jia_xu",
					"soldier2",
					"zhang_he",
					"soldier2",
					"soldier2"
				],
				13 : [
					"soldier3",
					"xu_huang",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				14 : [
					"soldier3",
					"xu_chu",
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier1"
				],
				15 : [
					"soldier3",
					"soldier3",
					"cao_pi",
					"cao_zhang",
					"cao_cao",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				]
			},
			rouse : [
				"zhu_ge_liang"
			]
		},
		events : {
			round : [
				{
					value : 1,
					instructions : [
						{name : "addTalk", param : "1"}
					]
				},
				{
					value : 3,
					instructions : [
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "ding_feng"},
						{name : "addFriend", param : "xu_sheng"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 4,
					instructions : [
						{name : "addTalk", param : "2"}
					]
				},
				{
					value : 6,
					instructions : [
						{name : "addTalk", param : "3"},
						{name : "addHint", param : lang.hint.OUR_SCHEME_OF_BURNING_HAS_WORKED},
						{name : "burn", param : "enemies"},
						{name : "addFriend", param : "zhu_ge_liang"}
					]
				},
				{
					value : 10,
					instructions : [
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "lv_meng"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 11,
					instructions : [
						{name : "addTalk", param : "4"},
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "zhao_yun"},
						{name : "addFriend", param : "soldier1"},
						{name : "addFriend", param : "soldier1"}
					]
				},
				{
					value : 12,
					instructions : [
						{name : "addTalk", param : "5"},
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "zhang_fei"},
						{name : "addFriend", param : "soldier1"},
						{name : "addFriend", param : "soldier1"}
					]
				},
				{
					value : 13,
					instructions : [
						{name : "addTalk", param : "6"},
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "guan_yu"},
						{name : "addFriend", param : "soldier1"}
					]
				},
				{
					value : 15,
					instructions : [
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "zhou_tai"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				}
			]
		},
		talks : {
			1 : [
				{
					speaker : "zhou_yu",
					side : "ours",
					content : lang.talk.CHI_BI_1_0
				},
				{
					speaker : "huang_gai",
					side : "ours",
					content : lang.talk.CHI_BI_1_1
				},
				{
					speaker : "cao_cao",
					side : "enemies",
					content : lang.talk.CHI_BI_1_2
				}
			],
			2 : [
				{
					speaker : "huang_gai",
					side : "ours",
					content : lang.talk.CHI_BI_2_0
				},
				{
					speaker : "cao_cao",
					side : "enemies",
					content : lang.talk.CHI_BI_2_1
				},
				{
					speaker : "zhang_liao",
					side : "enemies",
					content : lang.talk.CHI_BI_2_2
				}
			],
			3 : [
				{
					speaker : "zhu_ge_liang",
					side : "ours",
					content : lang.talk.CHI_BI_3_0
				},
				{
					speaker : "soldier2",
					side : "enemies",
					content : lang.talk.CHI_BI_3_1
				},
				{
					speaker : "cao_cao",
					side : "enemies",
					content : lang.talk.CHI_BI_3_2
				},
				{
					speaker : "gan_ning",
					side : "ours",
					content : lang.talk.CHI_BI_3_3
				},
				{
					speaker : "tai_shi_ci",
					side : "ours",
					content : lang.talk.CHI_BI_3_4
				},
				{
					speaker : "lu_su",
					side : "ours",
					content : lang.talk.CHI_BI_3_5
				}
			],
			4 : [
				{
					speaker : "zhao_yun",
					side : "ours",
					content : lang.talk.CHI_BI_4_0
				}
			],
			5 : [
				{
					speaker : "zhang_fei",
					side : "ours",
					content : lang.talk.CHI_BI_5_0
				}
			],
			6 : [
				{
					speaker : "guan_yu",
					side : "ours",
					content : lang.talk.CHI_BI_6_0
				},
				{
					speaker : "cao_cao",
					side : "enemies",
					content : lang.talk.CHI_BI_6_1
				}
			]
		},
		unlockLevelList : ["cheng_du"],
		initialMoney : 380,
		nextRoundSpeed : 370,
		nextCharacterSpeed : 20,
		rewardRatio : 0.5
	},

	{
		name : lang.place.CHENG_DU,
		id : "cheng_du",
		location : {
			x : 250,
			y : 650
		},
		backgroundMusicIndex : 5,
		background : "cheng_du_bg",
		backgroundOffset : {
			y : -300
		},
		characters : {
			ours : {
				lord : "liu_bei",
				player : "pang_tong",
				friends : [
					"huang_zhong",
					"wei_yan",
					"zhu_ge_liang",
					"soldier1",
					"soldier2"
				]
			},
			enemies : {
				1 : [
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier1"
				],
				2 : [
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier1"
				],
				3 : [
					"soldier1",
					"fei_yi",
					"soldier2",
					"soldier2",
					"soldier1"
				],
				4 : [
					"soldier1",
					"liu_ba",
					"soldier2",
					"soldier2"
				],
				5 : [
					"soldier1",
					"soldier1",
					"liu_gui",
					"soldier2",
					"soldier2"
				],
				6 : [
					"soldier2",
					"soldier2",
					"leng_bao",
					"gao_pei",
					"soldier1"
				],
				7 : [
					"soldier2",
					"soldier2",
					"soldier1",
					"soldier1"
				],
				8 : [
					"soldier1",
					"soldier2",
					"deng_zhi",
					"soldier2",
					"soldier1"
				],
				9 : [
					"soldier2",
					"soldier2",
					"zhang_yi1",
					"zhang_yi2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier1"
				],
				10 : [
					"soldier2",
					"soldier2",
					"yan_yan",
					"wu_yi",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier1"
				],
				11 : [
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier1"
				],
				12 : [
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier1"
				],
				13 : [
					"zhang_ren",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				14 : [
					"ma_chao",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				15 : [
					"soldier1",
					"soldier2",
					"soldier2",
					"liu_zhang",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
				]
			},
			rouse : [
				"zhang_ren",
				"yan_yan",
				"ma_chao",
				"liu_zhang",
				"zhang_fei"
			]
		},
		events : {
			enterFrame : [
				{
					value : 3400,
					instructions : [
						{name : "addTalk", param : "2"}
					]
				}
			],
			round : [
				{
					value : 1,
					instructions : [
						{name : "addTalk", param : "1"}
					]
				},
				{
					value : 6,
					instructions : [
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 10,
					instructions : [
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "zhang_fei"},
						{name : "addFriend", param : "soldier1"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 13,
					instructions : [
						{name : "addTalk", param : "3"},
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "zhao_yun"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 14,
					instructions : [
						{name : "addTalk", param : "4"}
					]
				}
			]
		},
		talks : {
			1 : [
				{
					speaker : "pang_tong",
					side : "ours",
					content : lang.talk.CHENG_DU_1_0
				},
				{
					speaker : "pang_tong",
					side : "ours",
					content : lang.talk.CHENG_DU_1_1
				},
				{
					speaker : "wei_yan",
					side : "ours",
					content : lang.talk.CHENG_DU_1_2
				},
				{
					speaker : "huang_zhong",
					side : "ours",
					content : lang.talk.CHENG_DU_1_3
				}
			],
			2 : [
				{
					speaker : "soldier2",
					side : "enemies",
					content : lang.talk.CHENG_DU_2_0
				},
				{
					speaker : "liu_zhang",
					side : "enemies",
					content : lang.talk.CHENG_DU_2_1
				},
				{
					speaker : "liu_zhang",
					side : "enemies",
					content : lang.talk.CHENG_DU_2_2
				},
				{
					speaker : "yan_yan",
					side : "enemies",
					content : lang.talk.CHENG_DU_2_3
				},
				{
					speaker : "zhang_fei",
					side : "ours",
					content : lang.talk.CHENG_DU_2_4
				}
			],
			3 : [
				{
					speaker : "zhang_ren",
					side : "enemies",
					content : lang.talk.CHENG_DU_3_0
				}
			],
			4 : [
				{
					speaker : "ma_chao",
					side : "enemies",
					content : lang.talk.CHENG_DU_4_0
				},
				{
					speaker : "liu_zhang",
					side : "enemies",
					content : lang.talk.CHENG_DU_4_1
				},
				{
					speaker : "zhu_ge_liang",
					side : "ours",
					content : lang.talk.CHENG_DU_4_2
				},
				{
					speaker : "zhang_fei",
					side : "ours",
					content : lang.talk.CHENG_DU_4_3
				}
			]
		},
		unlockLevelList : ["he_fei", "han_zhong"],
		initialMoney : 400,
		nextRoundSpeed : 350,
		nextCharacterSpeed : 20,
		rewardRatio : 0.7
	},

	{
		name : lang.place.HE_FEI,
		id : "he_fei",
		location : {
			x : 575,
			y : 480
		},
		backgroundMusicIndex : 3,
		background : "he_fei_bg",
		backgroundOffset : {
			x : -280,
			y : -150
		},
		characters : {
			ours : {
				lord : "yue_jin",
				player : "zhang_liao",
				friends : [
					"soldier1",
					"soldier2"
				]
			},
			enemies : {
				1 : [
					"soldier2",
					"soldier2",
					"soldier2"
				],
				2 : [
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				3 : [
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				4 : [
					"jiang_qin",
					"han_dang",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				5 : [
					"chen_wu",
					"dong_xi",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				6 : [
					"tai_shi_ci",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				7 : [
					"zhou_tai",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				8 : [
					"lv_meng",
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				9 : [
					"gan_ning",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
				],
				10 : [
					"ling_tong",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
				],
				11 : [
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
				],
				12 : [
					"soldier1",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
				],
				13 : [
					"pan_zhang",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
				],
				14 : [
					"lu_xun",
					"soldier1",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
				],
				15 : [
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
				],
				16 : [
					"xu_sheng",
					"ding_feng",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
				],
				17 : [
					"sun_quan",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
				]
			},
			rouse : [
				"tai_shi_ci",
				"ling_tong"
			],
			breakOut : [
				"zhang_liao",
				"yue_jin",
				"li_dian",
				"gan_ning"
			]
		},
		events : {
			enterFrame : [
				{
					value : 3,
					instructions : [
						{name : "addTalk", param : "1"}
					]
				}
			],
			round : [
				{
					value : 6,
					instructions : [
						{name : "addTalk", param : "2"}
					]
				},
				{
					value : 7,
					instructions : [
						{name : "addTalk", param : "4"},
						{name : "addHint", param : lang.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "li_dian"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 9,
					instructions : [
						{name : "addTalk", param : "3"}
					]
				},
				{
					value : 13,
					instructions : [
						{name : "addTalk", param : "5"},
						{name : "addHint", param : lang.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "xu_chu"},
						{name : "addFriend", param : "cao_ren"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 15,
					instructions : [
						{name : "addHint", param : lang.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "cao_cao"},
						{name : "addFriend", param : "xia_hou_dun"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				}
			]
		},
		talks : {
			1 : [
				{
					speaker : "yue_jin",
					side : "ours",
					content : lang.talk.HE_FEI_1_0
				},
				{
					speaker : "li_dian",
					side : "ours",
					content : lang.talk.HE_FEI_1_1
				},
				{
					speaker : "zhang_liao",
					side : "ours",
					content : lang.talk.HE_FEI_1_2
				},
				{
					speaker : "li_dian",
					side : "ours",
					content : lang.talk.HE_FEI_1_3
				},
				{
					speaker : "zhang_liao",
					side : "ours",
					content : lang.talk.HE_FEI_1_4
				},
				{
					speaker : "yue_jin",
					side : "ours",
					content : lang.talk.HE_FEI_1_5
				}
			],
			2 : [
				{
					speaker : "tai_shi_ci",
					side : "enemies",
					content : lang.talk.HE_FEI_2_0
				},
				{
					speaker : "zhang_liao",
					side : "ours",
					content : lang.talk.HE_FEI_2_1
				}
			],
			3 : [
				{
					speaker : "gan_ning",
					side : "enemies",
					content : lang.talk.HE_FEI_3_0
				},
				{
					speaker : "zhang_liao",
					side : "ours",
					content : lang.talk.HE_FEI_3_1
				}
			],
			4 : [
				{
					speaker : "li_dian",
					side : "ours",
					content : lang.talk.HE_FEI_4_0
				},
				{
					speaker : "sun_quan",
					side : "enemies",
					content : lang.talk.HE_FEI_4_1
				}
			],
			5 : [
				{
					speaker : "cao_ren",
					side : "ours",
					content : lang.talk.HE_FEI_5_0
				},
				{
					speaker : "xu_chu",
					side : "ours",
					content : lang.talk.HE_FEI_5_1
				}
			]
		},
		initialMoney : 280,
		nextRoundSpeed : 370,
		nextCharacterSpeed : 15,
		rewardRatio : 0
	},

	{
		name : lang.place.HAN_ZHONG,
		id : "han_zhong",
		location : {
			x : 250,
			y : 400
		},
		backgroundMusicIndex : 4,
		background : "han_zhong_bg",
		backgroundOffset : {
			x : -300,
			y : -250
		},
		backgroundHiddenWidth : 280,
		characters : {
			ours : {
				lord : "liu_bei",
				player : "huang_zhong",
				friends : [
					"ma_chao",
					"wei_yan",
					"zhu_ge_liang",
					"zhao_yun",
					"soldier2"
				]
			},
			enemies : {
				1 : [
					"soldier2",
					"soldier2",
					"soldier2"
				],
				2 : [
					"soldier3",
					"soldier2",
					"soldier2",
					"soldier1"
				],
				3 : [
					"cheng_yu",
					"soldier2",
					"soldier2",
					"soldier1"
				],
				4 : [
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier1"
				],
				5 : [
					"guo_huai",
					"xia_hou_ba",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				6 : [
					"soldier3",
					"soldier3"
				],
				7 : [
					"xia_hou_wei",
					"xia_hou_hui",
					"xia_hou_yuan",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				8 : [
					"soldier1",
					"soldier1",
					"soldier1"
				],
				9 : [
					"soldier3",
					"soldier2",
					"soldier2"
				],
				10 : [
					"soldier3",
					"soldier2",
					"soldier2"
				],
				11 : [
					"zhang_he",
					"xu_huang",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				12 : [
					"yang_xiu",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				13 : [
					"soldier3",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				14 : [
					"cao_zhang",
					"pang_de",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				15 : [
					"soldier3",
					"xia_hou_dun",
					"cao_cao",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				]
			},
			rouse : [
				"xia_hou_yuan"
			]
		},
		events : {
			round : [
				{
					value : 1,
					instructions : [
						{name : "addTalk", param : "1"}
					]
				},
				{
					value : 7,
					instructions : [
						{name : "addTalk", param : "2"}
					]
				},
				{
					value : 11,
					instructions : [
						{name : "addTalk", param : "3"}
					]
				},
				{
					value : 15,
					instructions : [
						{name : "addTalk", param : "4"}
					]
				}
			]
		},
		talks : {
			1 : [
				{
					speaker : "zhu_ge_liang",
					side : "ours",
					content : lang.talk.HAN_ZHONG_1_0
				},
				{
					speaker : "huang_zhong",
					side : "ours",
					content : lang.talk.HAN_ZHONG_1_1
				},
				{
					speaker : "zhu_ge_liang",
					side : "ours",
					content : lang.talk.HAN_ZHONG_1_2
				}
			],
			2 : [
				{
					speaker : "xia_hou_yuan",
					side : "enemies",
					content : lang.talk.HAN_ZHONG_2_0
				},
				{
					speaker : "huang_zhong",
					side : "ours",
					content : lang.talk.HAN_ZHONG_2_1
				}
			],
			3 : [
				{
					speaker : "zhang_he",
					side : "enemies",
					content : lang.talk.HAN_ZHONG_3_0
				}
			],
			4 : [
				{
					speaker : "zhu_ge_liang",
					side : "ours",
					content : lang.talk.HAN_ZHONG_4_0
				}
			]
		},
		unlockLevelList : ["fan_cheng"],
		initialMoney : 450,
		nextRoundSpeed : 370,
		nextCharacterSpeed : 15,
		rewardRatio : 0.6
	},

	{
		name : lang.place.FAN_CHENG,
		id : "fan_cheng",
		location : {
			x : 430,
			y : 480
		},
		backgroundMusicIndex : 1,
		background : "fan_cheng_bg",
		backgroundOffset : {
			y : -380
		},
		backgroundHiddenWidth : 680,
		characters : {
			ours : {
				lord : "cao_ren",
				player : "lv_meng",
				friends : [
					"lu_xun",
					"gan_ning",
					"si_ma_yi",
					"xu_huang",
					"soldier2"
				]
			},
			enemies : {
				1 : [
					"soldier2",
					"soldier2",
					"soldier2"
				],
				2 : [
					"soldier3",
					"soldier2",
					"soldier2"
				],
				3 : [
					"pan_xuan",
					"soldier1",
					"soldier1",
					"soldier1"
				],
				4 : [
					"wang_fu",
					"liao_hua",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				5 : [
					"soldier2",
					"soldier2",
					"soldier2"
				],
				6 : [
					"soldier3",
					"soldier1",
					"soldier1"
				],
				7 : [
					"mi_fang",
					"soldier1",
					"soldier1",
					"soldier1"
				],
				8 : [
					"soldier3",
					"zhao_lei",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				9 : [
					"soldier1",
					"soldier1"
				],
				10 : [
					"soldier3",
					"soldier2"
				],
				11 : [
					"soldier3",
					"meng_da",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				12 : [
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				13 : [
					"guan_xing",
					"guan_suo",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				14 : [
					"soldier2",
					"soldier2"
				],
				15 : [
					"soldier3",
					"guan_ping",
					"zhou_cang",
					"guan_yu",
					"soldier2",
					"soldier2"
				]
			},
			rouse : [
				"guan_ping",
				"guan_suo",
				"guan_xing",
				"guan_yu",
				"pan_zhang"
			]
		},
		events : {
			round : [
				{
					value : 1,
					instructions : [
						{name : "addTalk", param : "1"}
					]
				},
				{
					value : 5,
					instructions : [
						{name : "addTalk", param : "2"},
						{name : "addHint", param : lang.hint.ENEMIES_SCHEME_OF_FLOOD_HAS_WORKED},
						{name : "flood", param : "ours"}
					]
				},
				{
					value : 8,
					instructions : [
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "soldier3"},
						{name : "addFriend", param : "pan_zhang"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 10,
					instructions : [
						{name : "addHint", param : lang.hint.FLOOD_HAS_RECEDED},
						{name : "stopFlooding", param : "ours"}
					]
				},
				{
					value : 13,
					instructions : [
						{name : "addTalk", param : "3"}
					]
				},
				{
					value : 15,
					instructions : [
						{name : "addTalk", param : "4"}
					]
				}
			]
		},
		talks : {
			1 : [
				{
					speaker : "lv_meng",
					side : "ours",
					content : lang.talk.FAN_CHENG_1_0
				},
				{
					speaker : "xu_huang",
					side : "ours",
					content : lang.talk.FAN_CHENG_1_1
				},
				{
					speaker : "lv_meng",
					side : "ours",
					content : lang.talk.FAN_CHENG_1_2
				}
			],
			2 : [
				{
					speaker : "cao_ren",
					side : "ours",
					content : lang.talk.FAN_CHENG_2_0
				},
				{
					speaker : "soldier2",
					side : "ours",
					content : lang.talk.FAN_CHENG_2_1
				},
				{
					speaker : "lv_meng",
					side : "ours",
					content : lang.talk.FAN_CHENG_2_2
				}
			],
			3 : [
				{
					speaker : "cao_ren",
					side : "ours",
					content : lang.talk.FAN_CHENG_2_0
				},
				{
					speaker : "soldier2",
					side : "ours",
					content : lang.talk.FAN_CHENG_2_1
				},
				{
					speaker : "lv_meng",
					side : "ours",
					content : lang.talk.FAN_CHENG_2_2
				}
			],
			3 : [
				{
					speaker : "guan_yu",
					side : "enemies",
					content : lang.talk.FAN_CHENG_3_0
				},
				{
					speaker : "lv_meng",
					side : "ours",
					content : lang.talk.FAN_CHENG_3_1
				}
			],
			4 : [
				{
					speaker : "guan_yu",
					side : "enemies",
					content : lang.talk.FAN_CHENG_4_0
				}
			]
		},
		unlockLevelList : ["yi_ling"],
		initialMoney : 450,
		nextRoundSpeed : 350,
		nextCharacterSpeed : 15,
		rewardRatio : 0.5
	},

	{
		name : lang.place.YI_LING,
		id : "yi_ling",
		location : {
			x : 480,
			y : 650
		},
		backgroundMusicIndex : 4,
		background : "yi_ling_bg",
		backgroundOffset : {
			y : -300
		},
		firePosition : [
			{x : 1730, y : 80},
			{x : 1900, y : 120},
			{x : 2000, y : 90},
			{x : 2300, y : 100},
			{x : 2450, y : 80},
			{x : 2500, y : 130}
		],
		characters : {
			ours : {
				lord : "sun_quan",
				player : "lu_xun",
				friends : [
					"zhou_tai",
					"gan_ning",
					"soldier2"
				]
			},
			enemies : {
				1 : [
					"soldier3",
					"soldier2",
					"soldier2"
				],
				2 : [
					"soldier1",
					"soldier1",
					"soldier1"
				],
				3 : [
					"soldier2",
					"soldier2"
				],
				4 : [
					"soldier3",
					"wu_ban",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				5 : [
					"soldier3",
					"feng_xi",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				6 : [
					"soldier1",
					"soldier2"
				],
				7 : [
					"guan_xing",
					"zhang_bao2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				8 : [
					"huang_zhong",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				9 : [
					"soldier2",
					"soldier2",
					"soldier2"
				],
				10 : [
					"soldier3",
					"ma_liang",
					"soldier2"
				],
				11 : [
					"sha_mo_ke",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				12 : [
					"zhao_yun",
					"soldier2",
					"soldier2"
				],
				13 : [
					"soldier3",
					"zhu_ge_liang",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				14 : [
					"guan_suo",
					"soldier1",
					"soldier1"
				],
				15 : [
					"soldier3",
					"liu_bei",
					"fu_tong",
					"soldier3",
					"soldier3",
					"soldier2",
					"soldier2"
				]
			},
			rouse : [
				"huang_zhong",
				"guan_xing",
				"zhang_bao2",
				"zhao_yun",
				"fu_tong"
			]
		},
		events : {
			enterFrame : [
				{
					value : 3,
					instructions : [
						{name : "addTalk", param : "1"}
					]
				},
			],
			round : [
				{
					value : 4,
					instructions : [
						{name : "addTalk", param : "2"}
					]
				},
				{
					value : 7,
					instructions : [
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "pan_zhang"},
						{name : "addFriend", param : "soldier3"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 8,
					instructions : [
						{name : "addTalk", param : "3"}
					]
				},
				{
					value : 9,
					instructions : [
						{name : "addTalk", param : "4"},
						{name : "addHint", param : lang.hint.OUR_SCHEME_OF_BURNING_HAS_WORKED},
						{name : "burn", param : "enemies"}
					]
				},
				{
					value : 12,
					instructions : [
						{name : "addTalk", param : "5"},
						{name : "addHint", param : lang.hint.FIRE_HAS_BEEN_PUT_OUT},
						{name : "stopBurning", param : "enemies"}
					]
				},
				{
					value : 13,
					instructions : [
						{name : "addTalk", param : "6"}
					]
				},
				{
					value : 15,
					instructions : [
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "xu_sheng"},
						{name : "addFriend", param : "ding_feng"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				}
			]
		},
		talks : {
			1 : [
				{
					speaker : "liu_bei",
					side : "enemies",
					content : lang.talk.YI_LING_1_0
				},
				{
					speaker : "soldier1",
					side : "enemies",
					content : lang.talk.YI_LING_1_1
				},
				{
					speaker : "liu_bei",
					side : "enemies",
					content : lang.talk.YI_LING_1_2
				},
				{
					speaker : "liu_bei",
					side : "enemies",
					content : lang.talk.YI_LING_1_3
				}
			],
			2 : [
				{
					speaker : "lu_xun",
					side : "ours",
					content : lang.talk.YI_LING_2_0
				},
				{
					speaker : "zhou_tai",
					side : "ours",
					content : lang.talk.YI_LING_2_1
				}
			],
			3 : [
				{
					speaker : "huang_zhong",
					side : "enemies",
					content : lang.talk.YI_LING_3_0
				},
				{
					speaker : "gan_ning",
					side : "ours",
					content : lang.talk.YI_LING_3_1
				}
			],
			4 : [
				{
					speaker : "lu_xun",
					side : "ours",
					content : lang.talk.YI_LING_4_0
				},
				{
					speaker : "soldier2",
					side : "ours",
					content : lang.talk.YI_LING_4_1
				},
				{
					speaker : "liu_bei",
					side : "enemies",
					content : lang.talk.YI_LING_4_2
				}
			],
			5 : [
				{
					speaker : "zhao_yun",
					side : "enemies",
					content : lang.talk.YI_LING_5_0
				}
			],
			6 : [
				{
					speaker : "zhu_ge_liang",
					side : "enemies",
					content : lang.talk.YI_LING_6_0
				}
			]
		},
		unlockLevelList : ["nan_zhong"],
		initialMoney : 450,
		nextRoundSpeed : 350,
		nextCharacterSpeed : 15,
		rewardRatio : 0.3
	},

	{
		name : lang.place.NAN_ZHONG,
		id : "nan_zhong",
		backgroundMusicIndex : 3,
		location : {
			x : 150,
			y : 750
		},
		lightColor : "#990099",
		background : "nan_zhong_bg",
		backgroundOffset : {
			x : -400,
			y : -350
		},
		firePosition : [
			{x : 1730, y : 150},
			{x : 1990, y : 155},
			{x : 2140, y : 150},
			{x : 2360, y : 170},
			{x : 2450, y : 100},
		],
		characters : {
			ours : {
				lord : "liu_shan",
				player : "zhu_ge_liang",
				friends : [
					"zhao_yun",
					"wei_yan",
					"ma_chao",
					"soldier2"
				]
			},
			enemies : {
				1 : [
					"soldier1",
					"soldier1",
					"soldier1"
				],
				2 : [
					"dong_tu_na",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				3 : [
					"soldier3",
					"a_hui_nan",
					"soldier3",
					"soldier3"
				],
				4 : [
					"meng_huo",
					"soldier1",
					"soldier1",
					"soldier1"
				],
				5 : [
					"soldier3",
					"duo_si_da_wang",
					"soldier3",
					"soldier3"
				],
				6 : [
					"soldier1",
					"soldier1",
					"soldier1"
				],
				7 : [
					"soldier3",
					"dai_lai_dong_zhu",
					"soldier2",
					"soldier2"
				],
				8 : [
					"soldier2",
					"mu_lu_da_wang",
					"soldier2",
					"soldier2"
				],
				9 : [
					"soldier3",
					"meng_you",
					"soldier3",
					"soldier2"
				],
				10 : [
					"soldier1",
					"soldier1",
					"soldier1"
				],
				11 : [
					"soldier2",
					"jin_huan_san_jie",
					"soldier2",
					"soldier2"
				],
				12 : [
					"soldier3",
					"soldier1",
					"soldier1"
				],
				13 : [
					"soldier3",
					"soldier1",
					"soldier1",
					"soldier1"
				],
				14 : [
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				15 : [
					"soldier3",
					"zhu_rong",
					"meng_huo",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				]
			}
		},
		events : {
			enterFrame : [
				{
					value : 2200,
					instructions : [
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "guan_suo"},
						{name : "addFriend", param : "soldier1"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 2800,
					instructions : [
						{name : "addHint", param : lang.hint.OUR_REINFORCEMENTS_HAS_ARRIVED},
						{name : "addFriend", param : "guan_xing"},
						{name : "addFriend", param : "zhang_bao2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 3550,
					instructions : [
						{name : "addTalk", param : "4"},
						{name : "addHint", param : lang.hint.OUR_SCHEME_OF_BURNING_HAS_WORKED},
						{name : "burn", param : "enemies"}
					]
				}
			],
			round : [
				{
					value : 1,
					instructions :[
						{name : "addTalk", param : "1"}
					]
				},
				{
					value : 4,
					instructions :[
						{name : "addTalk", param : "2"}
					]
				},
				{
					value : 6,
					instructions :[
						{name : "addTalk", param : "3"}
					]
				},
				{
					value : 15,
					instructions :[
						{name : "addTalk", param : "5"},
						{name : "addHint", param : lang.MENG_HUO + lang.hint.REAPPEARS}
					]
				}
			]
		},
		talks : {
			1 : [
				{
					speaker : "zhu_ge_liang",
					side : "ours",
					content : lang.talk.NAN_ZHONG_1_0
				},
				{
					speaker : "zhao_yun",
					side : "ours",
					content : lang.talk.NAN_ZHONG_1_1
				},
				{
					speaker : "zhu_ge_liang",
					side : "ours",
					content : lang.talk.NAN_ZHONG_1_2
				},
				{
					speaker : "wei_yan",
					side : "ours",
					content : lang.talk.NAN_ZHONG_1_3
				}
			],
			2 : [
				{
					speaker : "meng_huo",
					side : "enemies",
					content : lang.talk.NAN_ZHONG_2_0
				}
			],
			3 : [
				{
					speaker : "zhu_ge_liang",
					side : "ours",
					content : lang.talk.NAN_ZHONG_3_0
				},
				{
					speaker : "wei_yan",
					side : "ours",
					content : lang.talk.NAN_ZHONG_3_1
				}
			],
			4 : [
				{
					speaker : "soldier3",
					side : "enemies",
					content : lang.talk.NAN_ZHONG_4_0
				},
				{
					speaker : "meng_huo",
					side : "enemies",
					content : lang.talk.NAN_ZHONG_4_1
				}
			],
			5 : [
				{
					speaker : "meng_huo",
					side : "enemies",
					content : lang.talk.NAN_ZHONG_5_0
				}
			]
		},
		unlockLevelList : ["wu_zhang_yuan"],
		initialMoney : 400,
		nextRoundSpeed : 350,
		nextCharacterSpeed : 15,
		rewardRatio : 0.5
	},

	{
		name : lang.place.WU_ZHANG_YUAN,
		id : "wu_zhang_yuan",
		location : {
			x : 100,
			y : 350
		},
		backgroundMusicIndex : 5,
		background : "wu_zhang_yuan_bg",
		backgroundOffset : {
			y : -280
		},
		characters : {
			ours : {
				lord : "zhu_ge_liang",
				player : "jiang_wei",
				friends : [
					"wei_yan",
					"soldier1",
					"soldier2",
					"soldier3"
				]
			},
			enemies : {
				1 : [
					"soldier1",
					"soldier1",
					"soldier1"
				],
				2 : [
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				3 : [
					"soldier2",
					"soldier2",
					"soldier2"
				],
				4 : [
					"chen_tai",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				5 : [
					"guo_huai",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				6 : [
					"soldier2",
					"soldier2"
				],
				7 : [
					"soldier3",
					"deng_ai",
					"deng_zhong",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				8 : [
					"soldier3",
					"zhong_hui",
					"xia_hou_ba",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				9 : [
					"soldier3",
					"soldier2",
					"soldier2"
				],
				10 : [
					"soldier3",
					"zhang_he",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				10 : [
					"soldier3",
					"zhang_he",
					"soldier2",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				11 : [
					"soldier3",
					"cao_zhen",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				12 : [
					"soldier2",
					"soldier2",
					"soldier2"
				],
				13 : [
					"soldier3",
					"zhang_hu",
					"yue_chen",
					"soldier2",
					"soldier2",
					"soldier2"
				],
				14 : [
					"soldier3",
					"soldier1"
				],
				15 : [
					"si_ma_shi",
					"si_ma_zhao",
					"si_ma_yi",
					"soldier2",
					"soldier2",
					"soldier2"
				]
			},
			rouse : [
				"zhang_he"
			],
			breakOut : [
				"zhu_ge_liang"
			]
		},
		events : {
			round : [
				{
					value : 1,
					instructions : [
						{name : "addTalk", param : "1"}
					]
				},
				{
					value : 4,
					instructions : [
						{name : "addFriend", param : "guan_suo"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 10,
					instructions : [
						{name : "addTalk", param : "2"},
						{name : "addFriend", param : "zhang_bao2"},
						{name : "addFriend", param : "guan_xing"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 11,
					instructions : [
						{name : "addFriend", param : "zhang_yi1"},
						{name : "addFriend", param : "zhang_yi2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"},
						{name : "addFriend", param : "soldier2"}
					]
				},
				{
					value : 14,
					instructions : [
						{name : "addTalk", param : "3"}
					]
				}
			]
		},
		talks : {
			1 : [
				{
					speaker : "zhu_ge_liang",
					side : "ours",
					content : lang.talk.WU_ZHANG_YUAN_1_0
				},
				{
					speaker : "jiang_wei",
					side : "ours",
					content : lang.talk.WU_ZHANG_YUAN_1_1
				},
				{
					speaker : "zhu_ge_liang",
					side : "ours",
					content : lang.talk.WU_ZHANG_YUAN_1_2
				},
				{
					speaker : "jiang_wei",
					side : "ours",
					content : lang.talk.WU_ZHANG_YUAN_1_3
				},
				{
					speaker : "zhu_ge_liang",
					side : "ours",
					content : lang.talk.WU_ZHANG_YUAN_1_4
				}
			],
			2 : [
				{
					speaker : "zhang_he",
					side : "enemies",
					content : lang.talk.WU_ZHANG_YUAN_2_0
				},
				{
					speaker : "jiang_wei",
					side : "ours",
					content : lang.talk.WU_ZHANG_YUAN_2_1
				},
				{
					speaker : "zhang_he",
					side : "enemies",
					content : lang.talk.WU_ZHANG_YUAN_2_2
				},
				{
					speaker : "jiang_wei",
					side : "ours",
					content : lang.talk.WU_ZHANG_YUAN_2_3
				}
			],
			3 : [
				{
					speaker : "si_ma_yi",
					side : "enemies",
					content : lang.talk.WU_ZHANG_YUAN_3_0
				},
				{
					speaker : "zhu_ge_liang",
					side : "ours",
					content : lang.talk.WU_ZHANG_YUAN_3_1
				},
				{
					speaker : "jiang_wei",
					side : "ours",
					content : lang.talk.WU_ZHANG_YUAN_3_2
				}
			]
		},
		initialMoney : 300,
		nextRoundSpeed : 350,
		nextCharacterSpeed : 10,
		rewardRatio : 0.3
	}
];