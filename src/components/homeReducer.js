// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import { type HomeAction } from './homeActions';
import * as actions from './homeActions';

type HomeState = {
  coordinates: {}
}

const initialState: HomeState = {
  coordinates: {
    latitude: 51.505,
    longitude: -0.09,
    zoom: 13,
  }
}

export default function home(
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
  case actions.SET_ZOOM:
    return ({
      ...state,
      location: {...state.location, zoom: action.zoom}
    });
  case actions.SET_COORDINATES:
    return ({
      ...state,
      coordinates: {...state.coordinates, ...action.coordinates}
    });
  default:
    console.error('Home reducer did not handle action ', action);
    return state;
  }
}
