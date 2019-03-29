import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBContainer } from "mdbreact";

import myFace from "../../assets/images/myface.png";

const About = () => {
  return (
    <section className="about-page mb-5" style={{opacity: ".9", paddingTop: "120px", minHeight: "100%"}}>
      <MDBContainer style={{width:"80%", minHeight: "75vh"}}>

        <MDBCard className="shadow-box-example hoverable">
          <MDBRow className="mt-3">
            <MDBCol lg="4" className="mx-auto">
              <img className="img-thumbnail rounded-circle hoverable" src={myFace} waves alt="stephane" style={{ height: "300px" }}/>
            </MDBCol>
            <MDBCol lg="8" className="text-left">
              <h1 className="mt-4 mb-3 text-lg-left" color="#FFFFFF"><strong><strong style={{fontFamily: "'Crimson Text', serif"}}>Hello, I'm Stephane Genini!</strong></strong></h1>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol lg="4">
              <MDBCardBody className="form ml-auto">
                <h3 className="mt-2 mb-3 text-lg-center" color="#FFFFFF">
                  <MDBIcon icon="laptop-code" className="pr-2" />
                  <strong style={{fontFamily: "'Crimson Text', serif"}} >Front-End</strong>
                </h3>
                <ul className="text-lg-center list-unstyled">
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />HTML5</p></li>
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />CSS3</p></li>
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />JavaScript (ES6)</p></li>
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />Bootstrap</p></li>
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />jQuery</p></li>
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />React.js</p></li>
                </ul>
              </MDBCardBody>
            </MDBCol>
            <MDBCol lg="4">
              <MDBCardBody className="contact text-center h-100 black-text">
                <h3 className="mt-2 mb-3 text-lg-center" color="#FFFFFF">
                  <MDBIcon icon="server" className="pr-2" />
                  <strong style={{fontFamily: "'Crimson Text', serif"}}>Back-End</strong>
                </h3>
                <ul className="text-lg-center list-unstyled">
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />Node.js</p></li>
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />Express.js</p></li>
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />MySQL</p></li>
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />Sequelize.js</p></li>
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />MongoDB</p></li>
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />Command Line</p></li>
                </ul>
              </MDBCardBody>
            </MDBCol>
            <MDBCol lg="4">
              <MDBCardBody className="contact text-center h-100 black-text">
                <h3 className="mt-2 mb-3 text-lg-center" color="#FFFFFF">
                  <MDBIcon icon="layer-group" className="pr-2" />
                  <strong style={{fontFamily: "'Crimson Text', serif"}}>Miscellaneous</strong>
                </h3>
                <ul className="text-lg-center list-unstyled">
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />GitHub</p></li>
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />Heroku</p></li>       
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />Firebase</p></li>
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />Handlebars.js</p></li>
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />Mongoose.js</p></li>
                  <li><p><MDBIcon icon="angle-right" className="pr-2" />Passport.js</p></li>
                  <li><p><MDBIcon icon="ellipsis-h" className="pr-2" />& much more</p></li>
                </ul>
              </MDBCardBody>
            </MDBCol>
            <hr style={{width: 200}} />
          </MDBRow>
          <MDBRow>
            <MDBCol lg="8" className="mx-auto">
              <h5 className="mt-1 mb-5">Check out these technologies (and more) in action on my <a href="/projects" style={{ color: "#3F729B", textDecorationLine: "underline" }}>projects page</a>, to which I'm constantly updating and adding to!</h5>
            </MDBCol>
          </MDBRow>
        </MDBCard>

      </MDBContainer>
    </section>
  );
}

export default About;