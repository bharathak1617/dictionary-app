import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import your reducers here
import historyReducer from './reducers/historyReducer';
import wordReducer from './reducers/wordReducer';

// Combine your reducers into a root reducer
const rootReducer = combineReducers({
  history: historyReducer,
  words: wordReducer,
});

// Apply middleware, including Redux Thunk for asynchronous actions
const middleware = [thunk];

// Create the Redux store with Redux DevTools integration
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;