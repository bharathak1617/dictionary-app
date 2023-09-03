
import axios from 'axios';

export const searchWord = (word) => async (dispatch) => {
  dispatch({ type: 'SET_LOADING', payload: true });

  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const wordData = response.data[0];
    
    dispatch(
      {
      type: 'SEARCH_WORD',
      payload: wordData,
    });
    dispatch({ 
      type: 'SET_LOADING', payload: false 
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: 'SET_LOADING', payload: false });
  }
};
