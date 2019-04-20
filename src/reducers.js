import { combineReducers } from 'redux'
import {
  APP_START
} from './actions'

function homePageReducer(state = [], action) {
  console.log('homePageReducer action=', action);
  console.log('homePageReducer state=', state);
  switch (action.type) {
    case APP_START:
      return state;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  homePageReducer
})

export default rootReducer
