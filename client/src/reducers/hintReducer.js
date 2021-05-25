export const hint = (state= '', action) => {
    if (action.type === 'SETHINT') {
        return action.payload
    } else {
        return state
    }
};

export const hints = (state=[], action) => {
    if(action.type === 'ADDHINT') {
        // const new_state =
        return [...state, action.payload]
        // return state.concat(action.payload);
        // let new_state = state;
        // new_state.push(action.payload)
        // return new_state
    } else if(action.type === 'SETALLHINTS') {
        return action.payload
    } else {
        return state
    }
};