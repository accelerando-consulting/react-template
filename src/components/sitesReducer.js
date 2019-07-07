// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import { type SitesAction } from './sitesActions';
import * as actions from './sitesActions';

type SitesState = {
  coordinates: {}
}

const initialState: SitesState = {
  coordinates: {
    latitude: 51.505,
    longitude: -0.09,
    zoom: 17,
  }
}

export default function sitesReducer(
  state: SitesState = initialState,
  action: SitesAction
) : SitesState {
  if (!Object.keys(actions).filter(k=>k.match(/^[A-Z_]+$/)).includes(action.type)) {
    // This action is not addressed to this component, ignore it
    return state;
  }
  console.log('sitesReducer action=', action);
  console.log('sitesReducer state=', state);

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
    console.error('Sites reducer did not handle action ', action);
    return state;
  }
}
