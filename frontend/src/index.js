import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router-dom'
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

const history = syncHistoryWithStore(hashHistory, store)
const render = (Component) => {
    ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
          </Route>
        </Router>
      </Provider>,
      document.getElementById('root'), // eslint-disable-line
    );
};

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
