var characterData = {
	/** Shu */
	zhao_yun : {
		name : lang.ZHAO_YUN,
		delay : 300,
		isOnly : true,
		scaleXCenter : 70,
		properties : {
			stepLength : 4,
			atkRange : 60,
			atkSpeed : 45,
			atkValue : 25,
			hp : 200,
			cost : 100
		},
		animationData : {
			stand : {
				col : 12
			},
			move : {
				col : 8,
				positionAdjustment : {
					y : 2
				}
			},
			atk : {
				col : 21,
				positionAdjustment : {
					x : -25,
					y : -41
				}
			}
		}
	},

	guan_yu : {
		animationData : {
			atk : {
				col : 12,
				positionAdjustment : {
					x : -28,
					y : -50
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 0,
					y : 3
				}
			},
			stand : {
				col : 12
			}
		},
		delay : 300,
		isOnly : true,
		name : lang.GUAN_YU,
		properties : {
			atkRange : 80,
			atkSpeed : 55,
			atkValue : 30,
			cost : 110,
			hp : 230,
			stepLength : 3
		},
		scaleXCenter : 110
	},

	liu_bei : {
		animationData : {
			atk : {
				col : 12,
				positionAdjustment : {
					x : -25,
					y : -13
				}
			},
			move : {
				col : 7,
				positionAdjustment : {
					x : 0,
					y : -5
				}
			},
			stand : {
				col : 11
			}
		},
		delay : 350,
		isOnly : true,
		name : lang.LIU_BEI,
		properties : {
			atkRange : 70,
			atkSpeed : 55,
			atkValue : 18,
			cost : 80,
			hp : 190,
			stepLength : 5
		},
		scaleXCenter : 60
	},

	zhang_fei : {
		animationData : {
			atk : {
				col : 22,
				positionAdjustment : {
					x : -40,
					y : -40
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 20,
					y : -7
				}
			},
			stand : {
				col : 11
			}
		},
		delay : 350,
		isOnly : true,
		name : lang.ZHANG_FEI,
		properties : {
			atkRange : 60,
			atkSpeed : 50,
			atkValue : 39,
			cost : 110,
			hp : 180,
			stepLength : 3
		},
		scaleXCenter : 90
	},

	pang_tong : {
		animationData : {
			atk : {
				col : 32,
				positionAdjustment : {
					x : 0,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 0,
					y : 0
				}
			},
			stand : {
				col : 8
			}
		},
		delay : 250,
		isOnly : true,
		name : lang.PANG_TONG,
		properties : {
			atkRange : 180,
			atkSpeed : 60,
			atkValue : 10,
			cost : 80,
			hp : 220,
			stepLength : 6
		},
		scaleXCenter : 150
	},

	huang_zhong : {
		animationData : {
			atk : {
				col : 13,
				positionAdjustment : {
					x : -67,
					y : -10
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 0,
					y : -7
				}
			},
			stand : {
				col : 12
			}
		},
		delay : 300,
		isOnly : true,
		name : lang.HUANG_ZHONG,
		properties : {
			atkRange : 50,
			atkSpeed : 55,
			atkValue : 13,
			cost : 90,
			hp : 240,
			stepLength : 4
		},
		scaleXCenter : 55
	},

	wei_yan : {
		animationData : {
			atk : {
				col : 15,
				positionAdjustment : {
					x : -60,
					y : -66
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 0,
					y : -18
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 350,
		isOnly : true,
		name : lang.WEI_YAN,
		properties : {
			atkRange : 65,
			atkSpeed : 65,
			atkValue : 25,
			cost : 90,
			hp : 260,
			stepLength : 4
		},
		scaleXCenter : 100
	},

	zhu_ge_liang : {
		animationData : {
			atk : {
				col : 16,
				positionAdjustment : {
					x : 5,
					y : -22
				}
			},
			move : {
				col : 9,
				positionAdjustment : {
					x : 4,
					y : 0
				}
			},
			stand : {
				col : 7
			}
		},
		delay : 400,
		isOnly : true,
		name : lang.ZHU_GE_LIANG,
		properties : {
			atkRange : 160,
			atkSpeed : 45,
			atkValue : 15,
			cost : 120,
			hp : 210,
			stepLength : 3
		},
		scaleXCenter : 45
	},

	liao_hua : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.LIAO_HUA,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	fei_yi : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.FEI_YI,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 12,
			cost : 50,
			hp : 60,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	liu_ba : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.LIU_BA,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 15,
			cost : 60,
			hp : 70,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	wu_yi : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.WU_YI,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 15,
			cost : 60,
			hp : 100,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	deng_zhi : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.DENG_ZHI,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	zhang_yi1 : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZHANG_YI1,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	zhang_yi2 : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZHANG_YI2,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 17,
			cost : 70,
			hp : 160,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	yan_yan : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.YAN_YAN,
		properties : {
			atkRange : 60,
			atkSpeed : 30,
			atkValue : 17,
			cost : 75,
			hp : 180,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	ma_chao : {
		animationData : {
			atk : {
				col : 15,
				positionAdjustment : {
					x : -18,
					y : -28
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 28,
					y : -3
				}
			},
			stand : {
				col : 28
			}
		},
		delay : 250,
		isOnly : true,
		name : lang.MA_CHAO,
		properties : {
			atkRange : 45,
			atkSpeed : 50,
			atkValue : 38,
			cost : 100,
			hp : 220,
			stepLength : 4
		},
		scaleXCenter : 100
	},

	jiang_wei : {
		animationData : {
			atk : {
				col : 12,
				positionAdjustment : {
					x : 0,
					y : -14
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 8,
					y : -15
				}
			},
			stand : {
				col : 12
			}
		},
		delay : 300,
		isOnly : true,
		name : lang.JIANG_WEI,
		properties : {
			atkRange : 65,
			atkSpeed : 50,
			atkValue : 20,
			cost : 100,
			hp : 230,
			stepLength : 5
		},
		scaleXCenter : 60
	},

	mi_lan : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.MI_LAN,
		properties : {
			atkRange : 60,
			atkSpeed : 30,
			atkValue : 17,
			cost : 75,
			hp : 180,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	wang_fu : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.WANG_FU,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 15,
			cost : 60,
			hp : 70,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	pan_xuan : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.PAN_XUAN,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 15,
			cost : 60,
			hp : 100,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	meng_da : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.MENG_DA,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	zhao_lei : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZHAO_LEI,
		properties : {
			atkRange : 60,
			atkSpeed : 30,
			atkValue : 17,
			cost : 75,
			hp : 180,
			stepLength : 4
		},
		scaleXCenter : 70
	},
	
	mi_fang : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.MI_FANG,
		properties : {
			atkRange : 60,
			atkSpeed : 30,
			atkValue : 17,
			cost : 75,
			hp : 180,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	guan_xing : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 350,
		isNormal : true,
		isOnly : true,
		name : lang.GUAN_XING,
		properties : {
			atkRange : 65,
			atkSpeed : 55,
			atkValue : 19,
			cost : 90,
			hp : 260,
			stepLength : 5
		},
		scaleXCenter : 70
	},

	guan_ping : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 350,
		isNormal : true,
		isOnly : true,
		name : lang.GUAN_PING,
		properties : {
			atkRange : 60,
			atkSpeed : 55,
			atkValue : 21,
			cost : 90,
			hp : 260,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	guan_suo : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.GUAN_SUO,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	zhou_cang : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZHOU_CANG,
		properties : {
			atkRange : 55,
			atkSpeed : 35,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	zhang_bao2 : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 350,
		isNormal : true,
		isOnly : true,
		name : lang.ZHANG_BAO2,
		properties : {
			atkRange : 65,
			atkSpeed : 55,
			atkValue : 19,
			cost : 90,
			hp : 260,
			stepLength : 5
		},
		scaleXCenter : 70
	},

	fu_tong : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.FU_TONG,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 15,
			cost : 60,
			hp : 100,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	sha_mo_ke : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.SHA_MO_KE,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	ma_liang : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.MA_LIANG,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	feng_xi : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.FENG_XI,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	wu_ban : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.WU_BAN,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	liu_shan : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.LIU_SHAN,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	/** Wei */
	cao_cao : {
		animationData : {
			atk : {
				col : 6,
				positionAdjustment : {
					x : -26,
					y : -21
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -16,
					y : 0
				}
			},
			stand : {
				col : 12
			}
		},
		delay : 200,
		hpBarOffsetY : 25,
		isOnly : true,
		name : lang.CAO_CAO,
		properties : {
			atkRange : 90,
			atkSpeed : 55,
			atkValue : 15,
			cost : 80,
			hp : 260,
			stepLength : 3
		},
		scaleXCenter : 76
	},

	xia_hou_dun : {
		animationData : {
			atk : {
				col : 8,
				positionAdjustment : {
					x : -56,
					y : -62
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 0,
					y : -3
				}
			},
			stand : {
				col : 11
			}
		},
		delay : 400,
		hpBarOffsetY : 5,
		isOnly : true,
		name : lang.XIA_HOU_DUN,
		properties : {
			atkRange : 55,
			atkSpeed : 55,
			atkValue : 25,
			cost : 100,
			hp : 220,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	xia_hou_yuan : {
		animationData : {
			atk : {
				col : 14,
				positionAdjustment : {
					x : -113,
					y : -55
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -14,
					y : -9
				}
			},
			stand : {
				col : 10
			}
		},
		delay : 350,
		isOnly : true,
		name : lang.XIA_HOU_YUAN,
		properties : {
			atkRange : 50,
			atkSpeed : 45,
			atkValue : 16,
			cost : 90,
			hp : 200,
			stepLength : 4
		},
		scaleXCenter : 75
	},

	zhang_liao : {
		animationData : {
			atk : {
				col : 11,
				positionAdjustment : {
					x : -11,
					y : -18
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 7,
					y : -10
				}
			},
			stand : {
				col : 6
			}
		},
		delay : 600,
		isOnly : true,
		name : lang.ZHANG_LIAO,
		properties : {
			atkRange : 55,
			atkSpeed : 50,
			atkValue : 28,
			cost : 120,
			hp : 250,
			stepLength : 4
		},
		scaleXCenter : 85
	},

	cao_ren : {
		animationData : {
			atk : {
				col : 6,
				positionAdjustment : {
					x : -6,
					y : -8
				}
			},
			move : {
				col : 6,
				positionAdjustment : {
					x : -10,
					y : 19
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 300,
		hpBarOffsetY : 30,
		isOnly : true,
		name : lang.CAO_REN,
		properties : {
			atkRange : 70,
			atkSpeed : 60,
			atkValue : 18,
			cost : 100,
			hp : 280,
			stepLength : 5
		},
		scaleXCenter : 140
	},

	xu_chu : {
		animationData : {
			atk : {
				col : 10,
				positionAdjustment : {
					x : -70,
					y : -10
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -16,
					y : -10
				}
			},
			stand : {
				col : 8
			}
		},
		delay : 600,
		hpBarOffsetY : -10,
		isOnly : true,
		name : lang.XU_CHU,
		properties : {
			atkRange : 40,
			atkSpeed : 85,
			atkValue : 22,
			cost : 110,
			hp : 1000,
			stepLength : 2
		},
		scaleXCenter : 80
	},

	si_ma_yi : {
		animationData : {
			atk : {
				col : 12,
				positionAdjustment : {
					x : -30,
					y : -15
				}
			},
			move : {
				col : 5,
				positionAdjustment : {
					x : -45,
					y : 0
				}
			},
			stand : {
				col : 12
			}
		},
		delay : 100,
		isOnly : true,
		name : lang.SI_MA_YI,
		properties : {
			atkRange : 90,
			atkSpeed : 45,
			atkValue : 12,
			cost : 110,
			hp : 300,
			stepLength : 6
		},
		scaleXCenter : 80
	},

	jia_xu : {
		animationData : {
			atk : {
				col : 16,
				positionAdjustment : {
					x : 48,
					y : -20
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 52,
					y : 3
				}
			},
			stand : {
				col : 10
			}
		},
		delay : 300,
		isOnly : true,
		name : lang.JIA_XU,
		properties : {
			atkRange : 100,
			atkSpeed : 55,
			atkValue : 12,
			cost : 100,
			hp : 210,
			stepLength : 3
		},
		scaleXCenter : 90
	},

	wen_pin : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 400,
		isNormal : true,
		isOnly : true,
		name : lang.WEN_PIN,
		properties : {
			atkRange : 55,
			atkSpeed : 55,
			atkValue : 25,
			cost : 100,
			hp : 220,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	xu_you : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.XU_YOU,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 12,
			cost : 50,
			hp : 30,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	xun_you : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.XUN_YOU,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	cheng_yu : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.CHENG_YU,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 17,
			cost : 70,
			hp : 160,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	yue_jin : {
		animationData : {
			atk : {
				col : 11,
				positionAdjustment : {
					x : 15,
					y : -94
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 40,
					y : -13
				}
			},
			stand : {
				col : 24
			}
		},
		delay : 350,
		isOnly : true,
		name : lang.YUE_JIN,
		properties : {
			atkRange : 75,
			atkSpeed : 55,
			atkValue : 22,
			cost : 90,
			hp : 190,
			stepLength : 4
		},
		scaleXCenter : 100
	},

	li_dian : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -6,
					y : 19
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -14,
					y : 7
				}
			},
			stand : {
				col : 11
			}
		},
		delay : 400,
		hpBarOffsetY : 15,
		isOnly : true,
		name : lang.LI_DIAN,
		properties : {
			atkRange : 50,
			atkSpeed : 55,
			atkValue : 19,
			cost : 90,
			hp : 210,
			stepLength : 3
		},
		scaleXCenter : 150
	},

	zhang_he : {
		animationData : {
			atk : {
				col : 12,
				positionAdjustment : {
					x : -5,
					y : -66
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -3
				}
			},
			stand : {
				col : 10
			}
		},
		delay : 250,
		isOnly : true,
		name : lang.ZHANG_HE,
		properties : {
			atkRange : 65,
			atkSpeed : 45,
			atkValue : 21,
			cost : 100,
			hp : 220,
			stepLength : 4
		},
		scaleXCenter : 125
	},

	xu_huang : {
		animationData : {
			atk : {
				col : 15,
				positionAdjustment : {
					x : -40,
					y : -21
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 42,
					y : 5
				}
			},
			stand : {
				col : 24
			}
		},
		delay : 400,
		isOnly : true,
		name : lang.XU_HUANG,
		properties : {
			atkRange : 60,
			atkSpeed : 60,
			atkValue : 26,
			cost : 110,
			hp : 240,
			stepLength : 4
		},
		scaleXCenter : 125
	},

	cao_pi : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.CAO_PI,
		properties : {
			atkRange : 60,
			atkSpeed : 30,
			atkValue : 17,
			cost : 75,
			hp : 180,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	cao_zhang : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.CAO_ZHANG,
		properties : {
			atkRange : 55,
			atkSpeed : 35,
			atkValue : 19,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	zang_ba : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZANG_BA,
		properties : {
			atkRange : 55,
			atkSpeed : 35,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	yang_xiu : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.YANG_XIU,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	pang_de : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 400,
		isNormal : true,
		isOnly : true,
		name : lang.PANG_DE,
		properties : {
			atkRange : 55,
			atkSpeed : 55,
			atkValue : 25,
			cost : 100,
			hp : 220,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	guo_huai : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.GUO_HUAI,
		properties : {
			atkRange : 55,
			atkSpeed : 35,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	xia_hou_ba : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.XIA_HOU_BA,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	xia_hou_wei : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.XIA_HOU_WEI,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	xia_hou_hui : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.XIA_HOU_HUI,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	zhong_hui : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 400,
		isNormal : true,
		isOnly : true,
		name : lang.ZHONG_HUI,
		properties : {
			atkRange : 45,
			atkSpeed : 50,
			atkValue : 38,
			cost : 100,
			hp : 220,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	deng_ai : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.DENG_AI,
		properties : {
			atkRange : 65,
			atkSpeed : 70,
			atkValue : 33,
			cost : 90,
			hp : 200,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	deng_zhong : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.DENG_ZHONG,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	chen_tai : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.CHEN_TAI,
		properties : {
			atkRange : 60,
			atkSpeed : 30,
			atkValue : 17,
			cost : 75,
			hp : 180,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	si_ma_zhao : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.SI_MA_ZHAO,
		properties : {
			atkRange : 60,
			atkSpeed : 20,
			atkValue : 20,
			cost : 75,
			hp : 180,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	si_ma_shi : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.SI_MA_SHI,
		properties : {
			atkRange : 55,
			atkSpeed : 25,
			atkValue : 22,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	cao_zhen : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.CAO_ZHEN,
		properties : {
			atkRange : 55,
			atkSpeed : 35,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	zhang_hu : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZHANG_HU,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	yue_chen : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.YUE_CHEN,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	/** Wu */
	huang_gai : {
		animationData : {
			atk : {
				col : 17,
				positionAdjustment : {
					x : -20,
					y : 5
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 75,
					y : 55
				}
			},
			stand : {
				col : 7
			}
		},
		delay : 400,
		hpBarOffsetY : 45,
		isOnly : true,
		name : lang.HUANG_GAI,
		properties : {
			atkRange : 80,
			atkSpeed : 55,
			atkValue : 18,
			cost : 90,
			hp : 270,
			stepLength : 3
		},
		scaleXCenter : 130
	},

	sun_quan : {
		animationData : {
			atk : {
				col : 13,
				positionAdjustment : {
					x : -75,
					y : -40
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 55,
					y : 0
				}
			},
			stand : {
				col : 14
			}
		},
		delay : 300,
		isOnly : true,
		name : lang.SUN_QUAN,
		properties : {
			atkRange : 80,
			atkSpeed : 60,
			atkValue : 17,
			cost : 80,
			hp : 230,
			stepLength : 4
		},
		scaleXCenter : 110
	},

	zhou_yu : {
		animationData : {
			atk : {
				col : 31,
				positionAdjustment : {
					x : -10,
					y : -62
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 20,
					y : 3
				}
			},
			stand : {
				col : 24
			}
		},
		delay : 300,
		isOnly : true,
		name : lang.ZHOU_YU,
		properties : {
			atkRange : 65,
			atkSpeed : 50,
			atkValue : 18,
			cost : 110,
			hp : 260,
			stepLength : 5
		},
		scaleXCenter : 110
	},

	sun_shang_xiang : {
		animationData : {
			atk : {
				col : 24,
				positionAdjustment : {
					x : 0,
					y : -45
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 10,
					y : -6
				}
			},
			stand : {
				col : 12
			}
		},
		delay : 200,
		isOnly : true,
		name : lang.SUN_SHANG_XIANG,
		properties : {
			atkRange : 60,
			atkSpeed : 55,
			atkValue : 10,
			cost : 80,
			hp : 200,
			stepLength : 4
		},
		scaleXCenter : 75
	},

	gan_ning : {
		animationData : {
			atk : {
				col : 26,
				positionAdjustment : {
					x : -14,
					y : -15
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 5,
					y : -4
				}
			},
			stand : {
				col : 20
			}
		},
		delay : 500,
		isOnly : true,
		name : lang.GAN_NING,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 30,
			cost : 120,
			hp : 230,
			stepLength : 4
		},
		scaleXCenter : 145
	},

	lv_meng : {
		animationData : {
			atk : {
				col : 17,
				positionAdjustment : {
					x : -56,
					y : -35
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 10,
					y : 3
				}
			},
			stand : {
				col : 11
			}
		},
		delay : 400,
		isOnly : true,
		name : lang.LV_MENG,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 22,
			cost : 90,
			hp : 240,
			stepLength : 3
		},
		scaleXCenter : 60
	},

	lu_xun : {
		animationData : {
			atk : {
				col : 13,
				positionAdjustment : {
					x : -70,
					y : -35
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 9,
					y : -13
				}
			},
			stand : {
				col : 12
			}
		},
		delay : 300,
		isOnly : true,
		name : lang.LU_XUN,
		properties : {
			atkRange : 60,
			atkSpeed : 45,
			atkValue : 14,
			cost : 110,
			hp : 260,
			stepLength : 5
		},
		scaleXCenter : 55
	},

	zhou_tai : {
		animationData : {
			atk : {
				col : 10,
				positionAdjustment : {
					x : -30,
					y : -82
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 26,
					y : -9
				}
			},
			stand : {
				col : 18
			}
		},
		delay : 400,
		isOnly : true,
		name : lang.ZHOU_TAI,
		properties : {
			atkRange : 50,
			atkSpeed : 60,
			atkValue : 23,
			cost : 100,
			hp : 260,
			stepLength : 3
		},
		scaleXCenter : 90
	},

	lu_su : {
		animationData : {
			atk : {
				col : 15,
				positionAdjustment : {
					x : -12,
					y : -17
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 33,
					y : 9
				}
			},
			stand : {
				col : 24
			}
		},
		delay : 350,
		isOnly : true,
		name : lang.LU_SU,
		properties : {
			atkRange : 50,
			atkSpeed : 55,
			atkValue : 12,
			cost : 90,
			hp : 220,
			stepLength : 3
		},
		scaleXCenter : 65
	},

	ding_feng : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.DING_FENG,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	xu_sheng : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.XU_SHENG,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 17,
			cost : 70,
			hp : 160,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	han_dang : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 400,
		isNormal : true,
		isOnly : true,
		name : lang.HAN_DANG,
		properties : {
			atkRange : 55,
			atkSpeed : 55,
			atkValue : 25,
			cost : 100,
			hp : 220,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	jiang_qin : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.JIANG_QIN,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	chen_wu : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.CHEN_WU,
		properties : {
			atkRange : 60,
			atkSpeed : 30,
			atkValue : 17,
			cost : 75,
			hp : 180,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	dong_xi : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.DONG_XI,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	tai_shi_ci : {
		animationData : {
			atk : {
				col : 31,
				positionAdjustment : {
					x : -20,
					y : -108
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 85,
					y : -5
				}
			},
			stand : {
				col : 13
			}
		},
		delay : 300,
		isOnly : true,
		name : lang.TAI_SHI_CI,
		properties : {
			atkRange : 105,
			atkSpeed : 50,
			atkValue : 27,
			cost : 100,
			hp : 210,
			stepLength : 3
		},
		scaleXCenter : 150
	},

	ling_tong : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 350,
		isNormal : true,
		isOnly : true,
		name : lang.LING_TONG,
		properties : {
			atkRange : 65,
			atkSpeed : 55,
			atkValue : 19,
			cost : 90,
			hp : 260,
			stepLength : 5
		},
		scaleXCenter : 70
	},

	pan_zhang : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.PAN_ZHANG,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	sun_jian : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 400,
		isNormal : true,
		isOnly : true,
		name : lang.SUN_JIAN,
		properties : {
			atkRange : 55,
			atkSpeed : 55,
			atkValue : 25,
			cost : 100,
			hp : 220,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	sun_ce : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 350,
		isNormal : true,
		isOnly : true,
		name : lang.SUN_CE,
		properties : {
			atkRange : 105,
			atkSpeed : 50,
			atkValue : 27,
			cost : 100,
			hp : 210,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	/** Lv Bu */
	lv_bu : {
		animationData : {
			atk : {
				col : 6,
				positionAdjustment : {
					x : -10,
					y : -8
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -36,
					y : 0
				}
			},
			stand : {
				col : 12
			}
		},
		delay : 800,
		isOnly : true,
		name : lang.LV_BU,
		properties : {
			atkRange : 70,
			atkSpeed : 40,
			atkValue : 50,
			cost : 100,
			hp : 300,
			stepLength : 3
		},
		scaleXCenter : 90
	},

	diao_chan : {
		animationData : {
			atk : {
				col : 10,
				positionAdjustment : {
					x : -12,
					y : -25
				}
			},
			move : {
				col : 6,
				positionAdjustment : {
					x : 1,
					y : -7
				}
			},
			stand : {
				col : 5
			}
		},
		delay : 300,
		isOnly : true,
		name : lang.DIAO_CHAN,
		properties : {
			atkRange : 45,
			atkSpeed : 45,
			atkValue : 10,
			cost : 80,
			hp : 180,
			stepLength : 5
		},
		scaleXCenter : 60
	},

	hao_meng : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.HAO_MENG,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 14,
			cost : 50,
			hp : 70,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	cao_xing : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.CAO_XING,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	song_xian : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.SONG_XIAN,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	cheng_lian : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.CHENG_LIAN,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	wei_xu : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.WEI_XU,
		properties : {
			atkRange : 60,
			atkSpeed : 50,
			atkValue : 15,
			cost : 80,
			hp : 200,
			stepLength : 2
		},
		scaleXCenter : 70
	},

	chen_gong : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.CHEN_GONG,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 15,
			cost : 60,
			hp : 100,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	cao_bao : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.CAO_BAO,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	hou_cheng : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.HOU_CHENG,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	gao_shun : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.GAO_SHUN,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	/** Yuan Shao */
	yuan_shao : {
		animationData : {
			atk : {
				col : 9,
				positionAdjustment : {
					x : 4,
					y : -31
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : 0,
					y : 3
				}
			},
			stand : {
				col : 9
			}
		},
		delay : 400,
		isOnly : true,
		name : lang.YUAN_SHAO,
		properties : {
			atkRange : 60,
			atkSpeed : 55,
			atkValue : 12,
			cost : 80,
			hp : 280,
			stepLength : 3
		},
		scaleXCenter : 65
	},

	yan_liang : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 350,
		isNormal : true,
		isOnly : true,
		name : lang.YAN_LIANG,
		properties : {
			atkRange : 60,
			atkSpeed : 55,
			atkValue : 21,
			cost : 90,
			hp : 260,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	wen_chou : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 350,
		isNormal : true,
		isOnly : true,
		name : lang.WEN_CHOU,
		properties : {
			atkRange : 55,
			atkSpeed : 50,
			atkValue : 28,
			cost : 120,
			hp : 250,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	chun_yu_qiong : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.CHUN_YU_QIONG,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	gao_lan : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 400,
		isNormal : true,
		isOnly : true,
		name : lang.GAO_LAN,
		properties : {
			atkRange : 55,
			atkSpeed : 55,
			atkValue : 25,
			cost : 100,
			hp : 220,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	xin_pi : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.XIN_PI,
		properties : {
			atkRange : 60,
			atkSpeed : 30,
			atkValue : 17,
			cost : 75,
			hp : 180,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	guo_tu : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.GUO_TU,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 14,
			cost : 50,
			hp : 70,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	tian_feng : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.TIAN_FENG,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 15,
			cost : 60,
			hp : 100,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	shen_pei : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.SHEN_PEI,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	ju_shou : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.JU_SHOU,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	lv_kuang : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.LV_KUANG,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	lv_xiang : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.LV_XIANG,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	zhang_nan : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZHANG_NAN,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	jiao_chu : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.JIAO_CHU,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	gao_gan : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.GAO_GAN,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 17,
			cost : 70,
			hp : 160,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	yuan_tan : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.YUAN_TAN,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 17,
			cost : 70,
			hp : 160,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	yuan_xi : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.YUAN_XI,
		properties : {
			atkRange : 60,
			atkSpeed : 30,
			atkValue : 17,
			cost : 75,
			hp : 180,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	yuan_shang : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.YUAN_SHANG,
		properties : {
			atkRange : 55,
			atkSpeed : 50,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	/** Liu Zhang */
	liu_gui : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.LIU_GUI,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 14,
			cost : 50,
			hp : 70,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	leng_bao : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.LENG_BAO,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	gao_pei : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.GAO_PEI,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	zhang_ren : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZHANG_REN,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	liu_zhang : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.LIU_ZHANG,
		properties : {
			atkRange : 60,
			atkSpeed : 50,
			atkValue : 15,
			cost : 80,
			hp : 200,
			stepLength : 2
		},
		scaleXCenter : 70
	},

	/** Yuan Shu */
	yuan_shu : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.YUAN_SHU,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 15,
			cost : 60,
			hp : 100,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	chen_lan : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.CHEN_LAN,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	lei_bo : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.LEI_BO,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	han_jin : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.HAN_JIN,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	yang_feng : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.YANG_FENG,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	zhang_xun : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZHANG_XUN,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	qiao_mao : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.QIAO_MAO,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 17,
			cost : 70,
			hp : 160,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	yang_da_jiang : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.YANG_DA_JIANG,
		properties : {
			atkRange : 60,
			atkSpeed : 30,
			atkValue : 17,
			cost : 75,
			hp : 180,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	ji_ling : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.JI_LING,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	/** Huang Jin */
	he_yi : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.HE_YI,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 12,
			cost : 50,
			hp : 60,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	zhang_man_cheng : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZHANG_MAN_CHENG,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 14,
			cost : 50,
			hp : 70,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	deng_mao : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.DENG_MAO,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 15,
			cost : 60,
			hp : 70,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	cheng_yuan_zhi : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.CHENG_YUAN_ZHI,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 15,
			cost : 60,
			hp : 100,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	guan_hai : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.GUAN_HAI,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	zhang_yan : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZHANG_YAN,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	zhang_liang : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZHANG_LIANG,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	zhang_bao1 : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZHANG_BAO1,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 17,
			cost : 70,
			hp : 160,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	zhang_jiao : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZHANG_JIAO,
		properties : {
			atkRange : 60,
			atkSpeed : 30,
			atkValue : 17,
			cost : 75,
			hp : 180,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	/** Nan Man */
	dong_tu_na : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.DONG_TU_NA,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 14,
			cost : 50,
			hp : 70,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	a_hui_nan : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.A_HUI_NAN,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	mu_lu_da_wang : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.MU_LU_DA_WANG,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	duo_si_da_wang : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.DUO_SI_DA_WANG,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	dai_lai_dong_zhu : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.DAI_LAI_DONG_ZHU,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 15,
			cost : 60,
			hp : 70,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	jin_huan_san_jie : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.JIN_HUAN_SAN_JIE,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 10,
			cost : 30,
			hp : 150,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	meng_you : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.MENG_YOU,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 12,
			cost : 50,
			hp : 60,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	zhu_rong : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZHU_RONG,
		properties : {
			atkRange : 60,
			atkSpeed : 50,
			atkValue : 16,
			cost : 80,
			hp : 130,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	meng_huo : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -21,
					y : -5
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -31,
					y : -20
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 350,
		isOnly : true,
		name : lang.MENG_HUO,
		properties : {
			atkRange : 65,
			atkSpeed : 70,
			atkValue : 33,
			cost : 90,
			hp : 200,
			stepLength : 3
		},
		scaleXCenter : 80
	},

	/** Official */
	gong_sun_zan : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.GONG_SUN_ZAN,
		properties : {
			atkRange : 60,
			atkSpeed : 50,
			atkValue : 16,
			cost : 80,
			hp : 130,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	he_jin : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.HE_JIN,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 10,
			cost : 30,
			hp : 150,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	liu_biao : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.LIU_BIAO,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 12,
			cost : 50,
			hp : 60,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	bao_xin : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.BAO_XIN,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 14,
			cost : 50,
			hp : 80,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	tao_qian : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.TAO_QIAN,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 12,
			cost : 50,
			hp : 100,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	li_su : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.LI_SU,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 12,
			cost : 50,
			hp : 60,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	wang_yun : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.WANG_YUN,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 14,
			cost : 50,
			hp : 70,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	xu_rong : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.XU_RONG,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 15,
			cost : 60,
			hp : 70,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	niu_fu : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.NIU_FU,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 15,
			cost : 60,
			hp : 100,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	hu_che_er : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.HU_CHE_ER,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	zhang_xiu : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZHANG_XIU,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	zhang_ji : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZHANG_JI,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	guo_si : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.GUO_SI,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	li_jue : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.LI_JUE,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 17,
			cost : 70,
			hp : 160,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	li_ru : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.LI_RU,
		properties : {
			atkRange : 60,
			atkSpeed : 30,
			atkValue : 17,
			cost : 75,
			hp : 180,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	hua_xiong : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.HUA_XIONG,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	dong_zhuo : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.DONG_ZHUO,
		properties : {
			atkRange : 60,
			atkSpeed : 50,
			atkValue : 15,
			cost : 80,
			hp : 200,
			stepLength : 2
		},
		scaleXCenter : 70
	},

	liu_yao : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.LIU_YAO,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 17,
			cost : 70,
			hp : 160,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	yan_bai_hu : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.YAN_BAI_HU,
		properties : {
			atkRange : 55,
			atkSpeed : 35,
			atkValue : 18,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	zhang_ying : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.ZHANG_YING,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	fan_neng : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.FAN_NENG,
		properties : {
			atkRange : 55,
			atkSpeed : 30,
			atkValue : 17,
			cost : 70,
			hp : 160,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	liu_ji : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.LIU_JI,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	liu_shang : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isNormal : true,
		isOnly : true,
		name : lang.LIU_SHANG,
		properties : {
			atkRange : 55,
			atkSpeed : 40,
			atkValue : 16,
			cost : 70,
			hp : 120,
			stepLength : 4
		},
		scaleXCenter : 70
	},

	/** Soldier */
	soldier1 : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 50,
		isOnly : false,
		name : lang.SOLDIER1,
		properties : {
			atkRange : 50,
			atkSpeed : 50,
			atkValue : 10,
			cost : 30,
			hp : 50,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	soldier2 : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isOnly : false,
		name : lang.SOLDIER2,
		properties : {
			atkRange : 50,
			atkSpeed : 40,
			atkValue : 10,
			cost : 40,
			hp : 80,
			stepLength : 3
		},
		scaleXCenter : 70
	},

	soldier3 : {
		animationData : {
			atk : {
				col : 5,
				positionAdjustment : {
					x : -25,
					y : 0
				}
			},
			move : {
				col : 8,
				positionAdjustment : {
					x : -5,
					y : -5
				}
			},
			stand : {
				col : 1
			}
		},
		delay : 80,
		isOnly : false,
		name : lang.SOLDIER3,
		properties : {
			atkRange : 50,
			atkSpeed : 500,
			atkValue : 10,
			cost : 50,
			hp : 500,
			stepLength : 2
		},
		scaleXCenter : 70
	}
};