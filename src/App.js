import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import { hot } from 'react-hot-loader/root'
import logo from './logo.svg';
import './App.css';

function Index() {
  const mapstate = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }
  const position = [mapstate.lat, mapstate.lng]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
	  Accelerando starter framework
	</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Map className="mapDiv" center={position} zoom={mapstate.zoom} >
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
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} /> 
        </div>
      </Router>
    );
  }
}

export default process.env.NODE_ENV === "development" ? hot(App) : App
