// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

export type SidebarAction = {
  +type: string,
  isOpen?: boolean
};

export const SET_MOBILE_OPEN = 'SET_MOBILE_OPEN';

export function setMobileOpen(o) {
  return ({
    type: SET_MOBILE_OPEN,
    isOpen: o
  });
}

