

export default function (state = {count: '0', ready: false}, action){
    switch(action.type){
        case 'GAME_READY':
            var numberOfPlayers = action.payload.length;
            return {
                ...state,
                count: numberOfPlayers, ready: true
            }
        case 'GAME_NOT_READY':
            var numberOfPlayers = action.payload.length;
            return {
                ...state,
                count: numberOfPlayers, ready: false
            }
        default:
            return state;
    }
};