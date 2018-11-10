
export const checkJoinedPlayers = (players) =>{
    if(players.length === 4){
        return {
            type: 'GAME_READY',
            payload: players
        };
    }
    return {
        type: 'GAME_NOT_READY',
        payload: players
    };
}