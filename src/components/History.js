// components/History.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearHistory } from '../actions/historyActions';

const History = () => {
  const history = useSelector((state) => state.history);
  const dispatch = useDispatch();

  return (
    <div className="history">
      <h2>Search History</h2>
      <ul>
        {history.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearHistory())}>Clear History</button>
    </div>
  );
};

export default History;
