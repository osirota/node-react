import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import state from './state';

export default () => combineReducers({
  state,
  routing: routerReducer,
});