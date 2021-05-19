export const setRoom = player_id => {
  return {
    type: 'SETROOM',
    payload: player_id
  };
};