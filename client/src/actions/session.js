export const setSession = session => {
    return {
        type: 'SETSESSION',
        payload: session
    }
}