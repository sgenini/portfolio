import React, { Component } from "react";
import { MDBIcon, MDBView, MDBMask } from "mdbreact";

import logo from "../../assets/images/logo2.png";

class Home extends Component {
  scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }
  
  render() {
    return (
      <section id="home" className="home-page hoverable" style={{opacity: "1", borderBottom: "3px solid white"}}>
        <header>
          <MDBView src={logo}>
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
              <div className="wrapper px-5 py-3 rounded mx-3 hoverable" waves style={{backgroundColor: "rgba(0,0,0,.8)"}}>
                <h1><strong>Hey there, I'm <span style={{fontWeight: 500}} className="highlight">Stéphane Genini</span>.</strong><br />
                Welcome to my website!</h1> <br/>
                <h3><small>Get to know me.</small></h3>
                <h1 style={{marginTop: -20, marginBottom: -15, opacity: .7}}><MDBIcon icon="angle-down" onClick={this.scrollToAbout} /></h1>
              </div>
            </MDBMask>
          </MDBView>
        </header>
      </section>
    );
  }
}

export default Home;