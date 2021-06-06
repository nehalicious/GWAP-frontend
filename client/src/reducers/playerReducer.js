export const player = (state = '', action) => {
    if (action.type === 'SETPLAYER') {
        return action.payload;
    } else {
        return state
    }
};

export const score = (state= '', action) => {
    if (action.type === 'SETSCORE') {
        return action.payload
    } else {
        return state
    }
};

export const player_type = (state='', action)=> {
    if(action.type === 'SETTYPE') {
        return action.payload
    } else {
        return state
    }
};