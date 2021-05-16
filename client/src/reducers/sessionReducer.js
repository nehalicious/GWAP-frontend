export const session_id = (state = '', action) => {
    if (action.type === 'SETSESSION') {
         return action.payload.scene;
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