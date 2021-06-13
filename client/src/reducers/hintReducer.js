export const hint = (state= '', action) => {
    if (action.type === 'SETHINT') {
        return action.payload
    } else {
        return state
    }
};

export const selectedHint = (state='', action) => {
    if(action.type === 'SETSELECTED') {
        return action.payload
    } else {
        return state;
    }
};

export const guesserHints = (state=[], action) => {
    if(action.type === 'SETSELECTED' && action.payload !== '') {
        return [...state, action.payload]
    } else if(action.type === 'SETSESSION') {
        return []
    }  else {
        return state
    }
};

export const hints = (state=[], action) => {
    if(action.type === 'ADDHINT') {

        return [...state, action.payload]

    } else if(action.type === 'SETALLHINTS') {
        return action.payload
    } else {
        return state
    }
};