// actions/historyActions.js

export const addToHistory = (word) => ({
    type: 'ADD_TO_HISTORY',
    payload: word,
  });
  
  export const clearHistory = () => ({
    type: 'CLEAR_HISTORY',
  });
  