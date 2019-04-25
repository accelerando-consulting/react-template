// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import React, { Component } from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Geolocation from "react-geolocation";

type Props = {
  coordinates: {}
};

const drawerWidth = 240;

const styles = theme => ({
  mapDiv: {
    marginTop: 60,
    height: 'calc(100vh - 60px)',
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
    }
  }
});

class Home extends Component<Props> {
  
  props: Props;

  render() {
    console.log("home component render props=", this.props);
    const {
      classes,
      // theme,
      coordinates,
      setCoordinates,
    } = this.props;

    const position = [coordinates.latitude, coordinates.longitude];

    return (
      <div>
        <Geolocation
          onSuccess={p=>setCoordinates(p.coords)}
        />
      <Map className={classes.mapDiv}
	   center={position}
	   zoom={coordinates.zoom} >
	<TileLayer
	  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	/>
	<Marker position={position}>
	  <Popup>
	    A pretty CSS3 popup. <br /> Easily customizable.
	  </Popup>
	</Marker>
      </Map>
      </div>
    );}
}

export default withStyles(styles)(withTheme()(Home));
