// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import { type SidebarAction, SET_MOBILE_OPEN } from './sidebarActions';
import * as actions from './sidebarActions';

type SidebarState = {
  mobileOpen: boolean
}

const initialState: SidebarState = {
  mobileOpen: false
}

export default function sidebarReducer(
  state: SidebarState = initialState,
  action: SidebarAction
) : SidebarState {
  if (!Object.keys(actions).filter(k=>k.match(/^[A-Z_]+$/)).includes(action.type)) {
    // This action is not addressed to this component, ignore it
    return state;
  }
  console.log('sidebarReducer action=', action);
  console.log('sidebarReducer state=', state);

  switch (action.type) {
  case SET_MOBILE_OPEN:
    return ({
      ...state,
      mobileOpen: action.isOpen
    });
  default:
    console.error('Sidebar reducer did not handle action ', action);
    return state;
  }
}
