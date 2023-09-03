const historyReducer = (state = [], action) => {
    
    switch (action.type) {
      case 'ADD_TO_HISTORY':
        console.log(85);
        return [...state, action.payload];
      case 'CLEAR_HISTORY':
        return [];
      default:
        return state;
    }
  };
  
  export default historyReducer;
  