// @flow         		-*- mode: rjsx; js-indent-level: 2; -*-

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { APP_START } from './actions'

import sidebarReducer from './components/sidebarReducer'
import homeReducer from './components/homeReducer'
import sitesReducer from './components/sitesReducer'
import { proceduresReducer } from './components/proceduresContainer'

function appReducer(state = [], action) {
  // console.log('appReducer action=', action);
  // console.log('appReducer state=', state);
  switch (action.type) {
    case APP_START:
      return state;
    default:
      return state
  }
}

export default (history) => combineReducers({
  router: connectRouter(history),
  app: appReducer,
  sidebar: sidebarReducer,
  home: homeReducer,
  sites: sitesReducer,
  procedures: proceduresReducer,
})


