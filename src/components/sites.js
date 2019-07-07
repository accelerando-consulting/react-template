// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import React, { Component } from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Map, TileLayer, Marker, Popup, Polygon, ZoomControl, LayersControl } from "react-leaflet";
import Geolocation from "react-geolocation";
import Pagebar from './pagebar';

type Props = {
  coordinates: {}
};

const drawerWidth = 240;

const styles = theme => ({
  mapDiv: {
    height: 'calc(100vh - 60px)',
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
    }
  }
});

class Sites extends Component<Props> {
  
  props: Props;

  render() {
    console.log("sites component render props=", this.props);
    const {
      classes,
      // theme,
      coordinates,
      setCoordinates,
    } = this.props;

    const position = [coordinates.latitude, coordinates.longitude];
    const marker_pos = [-27.570081, 152.939348]
    const polygon = [
      [-27.570262, 152.939027],
      [-27.570282, 152.938942],
      [-27.570187, 152.938996],
      [-27.569179, 152.938988],
      [-27.569168, 152.939601],
      [-27.570254, 152.939632],
    ];
      

    return (
      <div>
        <Pagebar title="Sites" nogap/>
        <Geolocation
          onSuccess={p=>setCoordinates(p.coords)}
        />
      <Map className={classes.mapDiv}
	   center={marker_pos}
           zoomControl={false}
	   zoom={coordinates.zoom} >
        <LayersControl position="topright">
	  <TileLayer
	    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	  />
          <ZoomControl position="topright" />
	  <Marker position={marker_pos}>
	    <Popup>
	      27 Wolston Rd, Sumner
	    </Popup>
	  </Marker>
          <Polygon color="purple" positions={polygon} />
        </LayersControl>
      </Map>
      </div>
    );}
}

export default withStyles(styles)(withTheme()(Sites));
