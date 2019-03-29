import React from "react";
import { MDBIcon, MDBView, MDBMask } from "mdbreact";

import code from "../../assets/images/code.png";

const Home = () => {
  return (
    <section id="home" className="home-page mb-5" style={{opacity: "1"}}>
      <header>
        <MDBView src={code}>
          <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
            <div className="wrapper px-3 py-3 rounded" waves style={{backgroundColor: "rgba(0,0,0,.8)"}}>
              <h1><strong>Hey there, I'm <span style={{fontWeight: 500}} className="highlight">Stéphane Genini</span>.</strong><br />
              Welcome to my website!</h1> <br/>
              <h3><small>Get to know me.</small></h3>
              <h1 style={{marginTop: -20, marginBottom: -15}}><a href="#about"><MDBIcon icon="angle-down" /></a></h1>
            </div>
          </MDBMask>
        </MDBView>
      </header>
    </section>
  );
}

export default Home;