// src/index.js

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './store';
import './index.css';

const root = createRoot(document.getElementById('root')); // Use createRoot

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
