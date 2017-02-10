import { combineReducers } from 'redux';
import section from './section';
import socket from './socket';
import monitor from './monitor';
import notification from './notification';
import instances from './instances';
import test from './test';
import reports from './reports';
import theme from './theme';

const rootReducer = combineReducers({
  section,
  theme,
  socket,
  monitor,
  instances,
  test,
  reports,
  notification
});

export default rootReducer;
