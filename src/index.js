import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import AppContainer from './containers/App-container';
import PlanetCardsContainer from './containers/PlanetCards-container';
import PlanetCardContainer from './containers/PlanetCard-container';

import './index.css';

ReactDOM.render((      
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer}>
      <Route path='planets' component={PlanetCardsContainer} />
      <Route path='planets/:name' component={PlanetCardContainer} />
    </Route>
  </Router>
), document.getElementById('root'));