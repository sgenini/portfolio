import React, { Component } from 'react';

import "./assets/styles/app.css";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Tech from "./components/Tech/Tech";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";


class Master extends Component {
  render() {
    return (
      <div className="Master">
        <Home />
        <About />
        <Tech />
        <Resume />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default Master;
