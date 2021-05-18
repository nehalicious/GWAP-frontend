export const hint = (state= '', action) => {
    if (action.type === 'SETHINT') {
        return action.payload
    } else {
        return state
    }
};