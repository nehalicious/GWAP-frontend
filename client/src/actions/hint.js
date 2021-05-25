export const setHint = hint => {
  return {
    type: 'SETHINT',
    payload: hint
  };
};

export const setAllHints = hints => {
  return {
    type: 'SETALLHINTS',
    payload: hints
  }
};