
const initialState = {
    word: {},
    isLoading: false,
  };
  
  const wordReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case 'SEARCH_WORD':
        return {
          ...state,
          word: action.payload,
        };
      case 'SET_LOADING':
        console.log('load');
        return {
          ...state,
          isLoading: action.payload,
        };
      default:
        return state;
    }
  };
  
export default wordReducer;
  