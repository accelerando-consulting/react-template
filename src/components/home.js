// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import React, { Component } from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

type Props = {
  location: {}
};

const drawerWidth = 240;

const styles = theme => ({
  mapDiv: {
    marginTop: 60,
    height: '100vh',
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
      location,
    } = this.props;

    const position = [location.lat, location.lng];

    return (
      <Map className={classes.mapDiv}
	   center={position}
	   zoom={location.zoom} >
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
    );}
}

export default withStyles(styles)(withTheme()(Home));
