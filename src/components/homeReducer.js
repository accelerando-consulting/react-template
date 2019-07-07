// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import { type HomeAction } from './homeActions';
import * as actions from './homeActions';

type HomeState = {
}

const initialState: HomeState = {
}

export default function homeReducer(
  state: HomeState = initialState,
  action: HomeAction
) : HomeState {
  if (!Object.keys(actions).filter(k=>k.match(/^[A-Z_]+$/)).includes(action.type)) {
    // This action is not addressed to this component, ignore it
    return state;
  }
  console.log('homeReducer action=', action);
  console.log('homeReducer state=', state);

  switch (action.type) {
  default:
    console.error('Home reducer did not handle action ', action);
    return state;
  }
}
