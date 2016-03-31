function DataManager () {
	var s = this;

	s.localStorage = localStorage || window.localStorage;
	s.storageEnabled = true;

	if (typeof s.localStorage == UNDEFINED || !s.localStorage) {
		s.storageEnabled = false;
	}
}

DataManager.SETTINGS_LANGUAGE = "settings_language";
DataManager.SETTINGS_SOUND = "settings_sound";
DataManager.SETTINGS_FULL_SCREEN = "settings_full_screen";
DataManager.UNLOCKED_LEVELS_LIST = "unlocked_levels_list";
DataManager.NOT_PASSED_LEVELS_LIST = "not_passed_levels_list";
DataManager.SELECTED_CITY_INDEX = "selected_city_index";
DataManager.SELECTED_LEVEL_INDEX = "selected_level_index";
DataManager.MOVING_LAYER_POSITION_X = "moving_layer_position_x";
DataManager.MOVING_LAYER_POSITION_Y = "moving_layer_position_y";
DataManager.CURRENT_DIFFICULTY = "current_difficulty";

DataManager.TYPE_ARRAY = "array";
DataManager.TYPE_STRING = "string";
DataManager.TYPE_NUMBER = "number";
DataManager.TYPE_BOOLEAN = "boolean";

DataManager.NO_DATA = "no_data";
DataManager.ERROR_DATA = "error_data";

DataManager.prototype.get = function (name) {
	var s = this, ls = s.localStorage, v, va, va1, va2, tv, vv;

	if (!s.storageEnabled) {
		return DataManager.ERROR_DATA;
	}
	
	v = ls.getItem(name);

	if (typeof v == UNDEFINED || !v) {
		return DataManager.NO_DATA;
	}

	va = v.split(";");

	if (va.length < 2) {
		return DataManager.ERROR_DATA;
	}

	va1 = va[0].split("--");
	va2 = va[1].split("--");

	if (va1.length != 2 || va2.length != 2) {
		return DataManager.ERROR_DATA;
	}

	if (va1[0] == "type") {
		tv = va1[1];
	} else if (va2[0] == "type") {
		tv = va2[1];
	}

	if (va1[0] == "value") {
		vv = va1[1];
	} else if (va2[0] == "value") {
		vv = va2[1];
	}

	if (typeof tv == UNDEFINED || !tv || typeof vv == UNDEFINED) {
		return DataManager.ERROR_DATA;
	}

	if (tv == DataManager.TYPE_STRING) {
		return vv;
	} else if (tv == DataManager.TYPE_BOOLEAN) {
		if (vv == "true") {
			return true;
		} else if (vv == "false") {
			return false;
		} else {
			return DataManager.ERROR_DATA;
		}
	} else if (tv == DataManager.TYPE_NUMBER) {
		return Number(vv);
	} else if (tv == DataManager.TYPE_ARRAY) {
		if (vv.length > 0) {
			return vv.split(",");
		} else {
			return new Array();
		}
	} else {
		return DataManager.ERROR_DATA;
	}
};

DataManager.prototype.set = function (name, t, v) {
	var s = this, ls = s.localStorage;

	if (!s.storageEnabled) {
		return;
	}
	
	if (t == DataManager.TYPE_ARRAY) {
		v = v.join(",");
	}

	ls.setItem(name, "type--" + t + ";" + "value--" + v + ";");
};