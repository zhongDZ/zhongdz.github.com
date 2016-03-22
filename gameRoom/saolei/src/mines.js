var mines = {
    _columns: null,
    _game_over: true,
    _mineField: null,
    _rows: null,
    _safe_tiles_left: null,

    _incrementNumberSurroundingsOf: function(aX, aY) {
        var x, y;
        for (var i = 0; i < 8; i++) {
            x = aX + helper.deltas8[i][0];
            y = aY + helper.deltas8[i][1];
            if (mines._mineField[y] !== undefined && mines._mineField[y][x] !== undefined && mines._mineField[y][x] !== '*') {
                mines._mineField[y][x]++;
            }
        }
    },

    createMineField: function(aColumns, aRows, aMaxMines, aX, aY) {
        if (aColumns === undefined || aColumns < helper.COLUMNS_MIN || aColumns > helper.COLUMNS_MAX) {
            aColumns = helper.COLUMNS_MIN;
        }
        if (aRows === undefined || aRows < helper.ROWS_MIN || aRows > helper.ROWS_MAX) {
            aRows = helper.ROWS_MIN;
        }
        if (aMaxMines === undefined || aMaxMines < helper.MINES_MIN || aMaxMines > aColumns*aRows - 9) { // 9 start empty tiles.
            aMaxMines = Math.floor(aColumns*aRows/8); // Just some random adequate number.
        }
        if (aX === undefined || aX < 0 || aX > aColumns) {
            aX = Math.floor(aColumns/2);
        }
        if (aY === undefined || aY < 0 || aY > aRows) {
            aY = Math.floor(aRows/2);
        }

        mines._mineField = [];
        for (var i = 0; i < aRows; i++) {
            var row = [];
            for (var j = 0; j < aColumns; j++) {
                row.push(0);
            }
            mines._mineField.push(row);
        }
        for (var x, y, minesCount = 0; minesCount < aMaxMines;) {
            x = Math.floor(Math.random()*aColumns);
            y = Math.floor(Math.random()*aRows);
            if ((Math.abs(x - aX) > 1 || Math.abs(y - aY) > 1) && mines._mineField[y][x] !== '*') {
                mines._mineField[y][x] = '*';
                mines._incrementNumberSurroundingsOf(x, y);
                minesCount++;
            }
        }

        mines._rows = aRows;
        mines._columns = aColumns;
        mines._game_over = false;
        mines._safe_tiles_left = aRows*aColumns - aMaxMines;
        localStorage.setItem('_mineField', JSON.stringify(mines._mineField));
    },

    clearMineField: function() {
        mines._mineField = null;
    },

    askValueOf: function(aX, aY) {
        if (!mines._game_over) {
            var value = mines._mineField[aY][aX];
            if (value === '*' || --mines._safe_tiles_left === 0) {
                mines._game_over = true;
            }
            localStorage.setItem('_safe_tiles_left', mines._safe_tiles_left);
            if (mines._game_over) {
                localStorage.removeItem('_safe_tiles_left');
                localStorage.removeItem('_mineField');
            }
            return mines._mineField[aY][aX];
        } else {
            return '?';
        }
    },

    getAllMines: function() {
        var mines_coords = [];
        if (mines._game_over) {
            for (var i = 0; i < mines._rows; i++) {
                for (var j = 0; j < mines._columns; j++) {
                    if (mines._mineField[i][j] === '*') {
                        mines_coords.push(cc.p(j, i));
                    }
                }
            }
        }
        return mines_coords;
    },

    continuePreviousGame: function() {
        if (localStorage.getItem('_mineField') && localStorage.getItem('_safe_tiles_left')) {
            mines._mineField = JSON.parse(localStorage.getItem('_mineField'));
            mines._safe_tiles_left = localStorage.getItem('_safe_tiles_left');
            mines._game_over = false;
            return true;
        } else {
            return false;
        }
    },

    showMineField: function() {
        var log = "MineField:";
        for (var i = 0; i < mines._mineField.length; i++) {
            log += '\n[' + mines._mineField[i].join('] [') + ']';
        }
        cc.log(log);
    }
};

helper.AddTryCatchersToAllMethodsOf(mines);
