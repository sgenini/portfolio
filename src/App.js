import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/styles/app.css";

import Navbar from "./components/Navbar/Navbar";
import Default from "./components/Default/Default";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Tech from "./components/Tech/Tech";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import Master from "./components/Master/Master";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Master} />
            <Route exact path="/react-portfolio" component={Default} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/tech" component={Tech} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/github" component={ () => { window.open("https://github.com/sgenini", "_blank") } } />
            <Route exact path="/linkedin" component={ () => { window.open("https://www.linkedin.com/in/stephane-genini/", "_blank") } } />
            <Route exact path="/twitter" component={ () => { window.open("https://twitter.com/StephaneGenini", "_blank") } } />
            <Route component={Default} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
