// routes/Routes.js

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import History from '../components/History';
import WordDetails from '../components/WordDetails';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/history" component={History} />
      <Route path="/word/word" component={WordDetails} />
    </Switch>
  );
};

export default Routes;
