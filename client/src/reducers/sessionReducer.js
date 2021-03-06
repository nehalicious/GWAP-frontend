export const session_id = (state = '', action) => {
    if (action.type === 'SETSESSION') {
         return action.payload._id;
    } else {
        return state
    }
};

export const session_scene = (state='', action) => {
    if(action.type === 'SETSESSION') {
        return action.payload.scene;
    } else {
        return state;
    }
};

export const guess = (state='', action) => {
    if(action.type === 'SETGUESS') {
        return action.payload
    } else return state;
};