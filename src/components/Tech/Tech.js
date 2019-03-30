import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBContainer, MDBView, MDBMask } from "mdbreact";

import code from "../../assets/images/code.png";

const Tech = () => {
  return (
    <section id="tech" className="tech-page hoverable" style={{opacity: "1", borderBottom: "3px solid white"}}>
      <header>
        <MDBView src={code}>
          <MDBMask overlay="black-light" className="flex-center flex-column text-center">
            <MDBContainer style={{width:"100%", minHeight: "75vh", overflow: "auto"}}>
              <MDBCard className="shadow-box-example hoverable mt-4 mb-4">
                <MDBRow>
                  <MDBCol lg="12" className="mx-auto">
                    <h1 className="mt-4 mb-3 text-lg-center" color="#FFFFFF"><strong><strong style={{fontFamily: "'Crimson Text', serif"}}>Technology Proficiencies</strong></strong><br />
                    <MDBIcon className="mt-4" fab icon="codepen" /></h1>
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
                    <h5 className="mt-1 mb-5 mx-3">Check out these technologies (and more) in action on my <a href="/projects" style={{ color: "#3F729B", textDecorationLine: "underline" }}>projects page</a>, to which I'm constantly updating and adding to!</h5>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </header>
    </section>
  );
}

export default Tech;