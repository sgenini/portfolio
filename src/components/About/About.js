import React from "react";
import { MDBIcon, MDBView, MDBMask } from "mdbreact";

// import myface from "../../assets/images/myface.png";
import sanfrancisco from "../../assets/images/sanfrancisco.jpg";

const About = () => {
  return (
    <section id="about" className="about-page hoverable" style={{opacity: "1", borderBottom: "3px solid white"}}>
      <header>
        <MDBView src={sanfrancisco}>
          <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
            <div className="wrapper px-3 py-3 rounded mx-3" waves style={{backgroundColor: "rgba(0,0,0,.8)"}}>
              <h1><strong>Hey there, I'm <span style={{fontWeight: 500}} className="highlight">Stéphane Genini</span>.</strong><br />
              Welcome to my website!</h1> <br/>
              <h3><small>Get to know me.</small></h3>
            </div>
          </MDBMask>
        </MDBView>
      </header>
    </section>
  );
}

export default About;