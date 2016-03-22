var server = {
    init: function() {
        if (!localStorage.ServerEmulatorIsSet) {
            localStorage.ServerEmulatorIsSet = true;
            localStorage.Players = JSON.stringify([]);
            localStorage.Updatable = "^(?:sound_enabled|music_enabled|last_rows_value|last_columns_value|last_mines_value)$";
            localStorage.CanBeIncreasedOnly = "^(?:games|wins|mines_defused|total_time_played)$";
        }
    },

    _createNewPlayer: function(aLogin, aPassword) {
        var player = {
            login: aLogin,
            password: aPassword,
            games: 0,
            wins: 0,
            mines_defused: 0,
            total_time_played: 0,
            sound_enabled: true,
            music_enabled: true,
            last_rows_value: 16,
            last_columns_value: 16,
            last_mines_value: 40
        };
        var Players = JSON.parse(localStorage.Players);
        Players.push(player);
        localStorage.Players = JSON.stringify(Players);
        return server._returnOK({player:player});
    },

    _returnError: function(aText) {
        return JSON.stringify({status:'error',error:aText});
    },

    _returnOK: function(aObj) {
        aObj.status = 'OK';
        return JSON.stringify(aObj);
    },

    processAction: function(aParams) {
        if (!aParams || !aParams.action || !aParams.login || !aParams.password) {
            return server._returnError('不正确的设置');
        }

        var i, players;

        if (aParams.action === 'login') {
            players = JSON.parse(localStorage.Players);
            for (i = 0; i < players.length; i++) {
                if (players[i].login === aParams.login) {
                    if (players[i].password === aParams.password) {
                        return server._returnOK({player:players[i]});
                    } else {
                        return server._returnError('不正确的密码');
                    }
                }
            }
            return server._createNewPlayer(aParams.login, aParams.password);
        } else if (aParams.name && aParams.value && (
                       aParams.action === 'update_value'   && aParams.name.match(localStorage.Updatable) ||
                       aParams.action === 'increase_value' && aParams.name.match(localStorage.CanBeIncreasedOnly)
                   )) {
            players = JSON.parse(localStorage.Players);
            for (i = 0; i < players.length; i++) {
                if (players[i].login === aParams.login) {
                    if (players[i].password === aParams.password) {
                        players[i][aParams.name] = (aParams.action === 'increase_value' ? +players[i][aParams.name] : '' ) + aParams.value;
                        localStorage.Players = JSON.stringify(players);
                        return server._returnOK({name: aParams.name, value: players[i][aParams.name]});
                    } else {
                        return server._returnError('不正确的密码');
                    }
                }
            }
        } else if (aParams.action === 'ask_value_of_tile') {
            return server._returnOK({value:mines.askValueOf(aParams.x, aParams.y)});
        } else if (aParams.action === 'get_all_mines') {
            return server._returnOK({value:mines.getAllMines()});
        } else if (aParams.action === 'clear_mine_field') {
            mines.clearMineField();
            return server._returnOK({});
        } else if (aParams.action === 'create_mine_field') {
            mines.createMineField(aParams.columns, aParams.rows, aParams.maxMines, aParams.x, aParams.y);
            return server._returnOK({});
        } else if (aParams.action === 'continue_previous_game') {
            if (mines.continuePreviousGame()) {
                return server._returnOK({});
            } else {
                return server._returnError('：以前的游戏数据的无');
            }
        }

        return server._returnError('：无动作');
    }
};

helper.AddTryCatchersToAllMethodsOf(server);

server.init();
