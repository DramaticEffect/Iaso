import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Home from './Home';
import Whatever from './Home';

render(
  <Router history={browserHistory}>
    <Route path='/' component={Home}/>
    <Route path='/whatever' component={Whatever}/>
  </Router>,
  document.getElementById('app')
);