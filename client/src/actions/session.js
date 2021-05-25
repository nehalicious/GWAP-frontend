export const setSession = session => {
    return {
        type: 'SETSESSION',
        payload: session
    }
};

export const setGuess = guess => {
    return {
        type: 'SETGUESS',
        payload: guess
    }
}