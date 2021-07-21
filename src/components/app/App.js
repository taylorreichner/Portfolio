import React from 'react';
import HomePage from '../../containers/HomePage'
import Intro from '../../containers/Intro'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
    return (
      <Router>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/intro'} component={Intro} />
        </Switch>
      </Router>
    );
  }