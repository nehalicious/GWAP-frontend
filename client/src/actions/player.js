export const setPlayer = player_id => {
  return {
    type: 'SETPLAYER',
    payload: player_id
  };
};