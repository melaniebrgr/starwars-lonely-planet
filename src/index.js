import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import AppContainer from './containers/App-container';
import PlanetCardContainer from './containers/PlanetCard-container';

import './index.css';

ReactDOM.render((      
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer}>
      <Route path='planets' component={PlanetCardContainer} />
    </Route>
  </Router>
  ), document.getElementById('root')
);

// <Route path='planets/:name' component={PlanetCardContainer} />