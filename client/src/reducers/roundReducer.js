export const round = (state='', action) => {
    switch (action.type) {
        case 'SETSESSION':
            return action.payload.rounds[0];
        case 'SETROUND':
            return action.payload;
        default:
            return state;
    }
};