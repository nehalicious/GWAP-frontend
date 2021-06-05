export const room = (state = '', action) => {
    if (action.type === 'SETROOM') {
        return action.payload;
    } else {
        return state
    }
};

export const final_score = (state=null, action) => {
    if(action.type === 'SET_FINAL') {
        return action.payload;
    } else {
        return state
    }
};