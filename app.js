import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Home from './Containers/Home';
import Records from './Containers/Records';
import Lookup from './Containers/Lookup';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
  <Router history={browserHistory}>
    <Route component={Home}>
      <Route path='/' component={Lookup}/>
      <Route path='/records' component={Records}/>
    </Route>
  </Router>,
  document.getElementById('app')
);