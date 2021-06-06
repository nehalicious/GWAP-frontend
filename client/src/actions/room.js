export const setRoom = player_id => {
  return {
    type: 'SETROOM',
    payload: player_id
  };
};

export const setFinalScore = score => {
  return {
    type: 'SET_FINAL',
    payload: score
  }
};