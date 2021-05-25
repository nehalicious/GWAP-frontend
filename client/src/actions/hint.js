export const setHint = hint => {
  return {
    type: 'SETHINT',
    payload: hint
  };
};

export const setSelectedHint = hint => {
  return {
    type: 'SETSELECTED',
    payload: hint
  }
};

export const addHint = hint => {
  return {
    type: 'ADDHINT',
    payload: hint
  }
};

export const setAllHints = hints => {
  return {
    type: 'SETALLHINTS',
    payload: hints
  }
};