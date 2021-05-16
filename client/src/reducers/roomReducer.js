export const room = (state = '', action) => {
    if (action.type === 'SETROOM') {
        return action.payload;
    } else {
        return state
    }
};