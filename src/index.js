import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import './index.less';
import App from './App';

import Home from '@/components/Home/home.js'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <App>
      <Route path='/' component={Home}></Route>
    </App>
  </HashRouter>
, document.getElementById('root'));
registerServiceWorker();
