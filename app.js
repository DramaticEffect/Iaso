import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Home from './Containers/Home';
import Records from './Containers/Records';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'amterial-ui/RaisedButton';

render(
  <Router history={browserHistory}>
    <Route component={Home}>
      <Route path='/' component={Records}/> 
    </Route>
  </Router>,
  document.getElementById('app')
);