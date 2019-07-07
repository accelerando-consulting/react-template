// @flow			-*- mode: rjsx; js-indent-level: 2; -*-

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { hot } from 'react-hot-loader/root'
import Sidebar from './components/sidebarContainer'
import Home from './components/homeContainer'
import Sites from './components/sitesContainer'
import { Procedures } from './components/proceduresContainer'
import './App.css'

function About() {
  return (
    <div ClassName="page">
    <h1>My Startup</h1>
    <div>
      <p><a href="https://yournamehere.example.com">&copy; My Startup</a></p>
      <p>Template by <a href="https://accelerando.com.au">Accelerando</a></p>/>
      </div>
    </div>
  );
}


class App extends Component {

  render() {
    // console.log("App render");
    return (
      <Router>
	<Sidebar/>
        <div className="page">
	  <Route path="/" exact component={Home} />
	  <Route path="/users/" exact component={Home} />
	  <Route path="/sites/" exact component={Sites} />
	  <Route path="/jobs/" exact component={Home} />
          <Route path="/documentation/" component={Home} />
          <Route path="/about/" component={About} />
      </div>
      </Router>
    );
  }
}

export default (process.env.NODE_ENV === "development") ? hot(App) : App
