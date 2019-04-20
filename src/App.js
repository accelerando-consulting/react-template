// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { makeStyles } from '@material-ui/styles';

import { hot } from 'react-hot-loader/root'
import Sidebar from './components/sidebarContainer'

function Index() {

  const styles = makeStyles(theme => ({
    mapDiv: {
      height: '400px'
    }
  }));

  const mapstate = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  };
  const position = [mapstate.lat, mapstate.lng];
  console.log("Index render");

  return (
    <div className="App">
	<p>
	  Accelerando starter framework
	</p>
      <Map className={styles.mapDiv} center={position} zoom={mapstate.zoom} >
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
  );
}

function About() {
  return (<p>Kilroy woz ere</p>);
}

class App extends Component {
  render() {
    console.log("App render");
    return (
      <Router>
	<div>
	  <Sidebar />
	  <Route path="/" exact component={Index} />
	  <Route path="/about/" component={About} />
	</div>
      </Router>
    );
  }
}

export default process.env.NODE_ENV === "development" ? hot(App) : App
