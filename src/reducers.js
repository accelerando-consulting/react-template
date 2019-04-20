// @flow         		-*- mode: rjsx; js-indent-level: 2; -*-

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { APP_START } from './actions'

import sidebar from './components/sidebarReducers'

function app(state = [], action) {
  console.log('appReducer action=', action);
  console.log('appReducer state=', state);
  switch (action.type) {
    case APP_START:
      return state;
    default:
      return state
  }
}

export default (history) => combineReducers({
    router: connectRouter(history),
    app,
    sidebar
})


