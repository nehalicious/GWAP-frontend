export const player = (state = '', action) => {
    if (action.type === 'SETPLAYER') {
        return action.payload;
    } else {
        return state
    }
};

export const score = (state=0, action) => {
    if (action.type === 'SETSCORE') {
        return action.payload
    } else {
        return state
    }
};