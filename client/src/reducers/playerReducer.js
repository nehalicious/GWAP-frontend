export const player = (state = '', action) => {
    if (action.type === 'SETPLAYER') {
        return action.payload;
    } else {
        return state
    }
};