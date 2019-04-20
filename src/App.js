// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { hot } from 'react-hot-loader/root'
import Sidebar from './components/sidebarContainer'
import Home from './components/homeContainer'

function About() {
  return (<p>Kilroy woz ere</p>);
}

class App extends Component {
  render() {
    // console.log("App render");
    return (
      <Router>
	  <Sidebar />
	  <Route path="/" exact component={Home} />
	  <Route path="/about/" component={About} />
      </Router>
    );
  }
}

export default process.env.NODE_ENV === "development" ? hot(App) : App
