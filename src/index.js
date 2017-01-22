import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import AppContainer from './containers/App-container';

import './index.css';

ReactDOM.render((      
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer} />
  </Router>
  ), document.getElementById('root')
);
