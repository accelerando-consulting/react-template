// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import { type SidebarAction, SET_MOBILE_OPEN } from './sidebarActions';
import * as sidebarActions from './sidebarActions';

type SidebarState = {
  mobileOpen: boolean
}

const initialState: SidebarState = {
  mobileOpen: false
}

export default function sidebar(
  state: SidebarState = initialState,
  action: SidebarAction
) : SidebarState {
  console.log('sidebarReducer action=', action);
  console.log('sidebarReducer state=', state);

  switch (action.type) {
  case SET_MOBILE_OPEN:
    return ({
      ...state,
      mobileOpen: action.isOpen
    });
  default:
    if (Object.keys(sidebarActions).filter(k=>k.match(/^[A-Z_]+$/)).includes(action.type)) {
      console.error('Sidebar reducer did not handle action ', action);
    }
    return state;
  }
}
