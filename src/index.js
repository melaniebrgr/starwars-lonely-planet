import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import AppContainer from './containers/App-container';
import PlanetCardsContainer from './containers/PlanetCards-container';

import './index.css';

ReactDOM.render((      
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer}>
      <Route path='planets' component={PlanetCardsContainer} />
    </Route>
  </Router>
  ), document.getElementById('root')
);

// <Route path='planets/:name' component={PlanetCardContainer} />