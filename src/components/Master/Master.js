import React, { Component } from 'react';

import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Tech from "../Tech/Tech";
import Resume from "../Resume/Resume";
import Projects from "../Projects/Projects";


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
