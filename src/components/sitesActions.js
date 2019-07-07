// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

export type SitesAction = {
  +type: string,
  zoom?: number,
  coordinates?: Coordinates
};

export const SET_ZOOM = 'SET_ZOOM';
export const SET_COORDINATES = 'SET_COORDINATES';

export function setZoom(z) {
  return ({
    type: SET_ZOOM,
    zoom: z
  });
}

export function setCoordinates(c) {
  function nix_nulls(c) {
    const coordinate_properties = ['latitude','longitude','altitude','accuracy','altitudeAccuracy','heading','speed'];
    let result = {}
    coordinate_properties.filter(k=>c[k]!==null).forEach(k=>{
      result[k]=c[k]
    });
    return result
  }

  return ({
    type: SET_COORDINATES,
    coordinates: nix_nulls(c)
  });
}
