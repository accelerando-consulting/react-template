// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

export type HomeAction = {
  +type: string,
  zoom?: number,
  location?: {}
};

export const SET_ZOOM = 'SET_ZOOM';
export const SET_LOCATION = 'SET_LOCATION';

export function setZoom(z) {
  return ({
    type: SET_ZOOM,
    zoom: z
  });
}

export function setLocation(l) {
  return ({
    type: SET_LOCATION,
    location: l
  });
}

