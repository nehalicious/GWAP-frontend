export const setPlayer = player_id => {
  return {
    type: 'SETPLAYER',
    payload: player_id
  };
};

export const setScore = score => {
  return {
    type: 'SETSCORE',
    payload: score
  }
};

const setPlayerType = type => {
  return {
    type: 'SETTYPE',
    payload: type
  }
}