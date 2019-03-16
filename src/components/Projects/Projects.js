import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBContainer } from "mdbreact";

const Projects = () => {
  return (
    <section className="projects-page mb-5" style={{opacity: ".9", paddingTop: "120px", minHeight: "100%"}}>
      <MDBContainer style={{width:"80%", minHeight: "0vh"}}>
        <MDBCard className="shadow-box-example hoverable">
          <MDBRow>
            <MDBCol lg="12" className="mx-auto">
              <h1 className="mt-4 mb-3 text-lg-center" color="#FFFFFF"><strong><strong style={{fontFamily: "'Crimson Text', serif"}}>Development Projects</strong></strong></h1>
              <p>Feel free to check out some of these projects I've worked on as I learned to code! <br />
              I'll be adding to this page periodically as I continue to develop projects.</p>
              <h1><MDBIcon className="" fab icon="codepen" /></h1>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>

      <MDBCol lg="11" className="mx-auto mt-5">
        <MDBRow>
          <MDBCol lg="6" className="mx-auto">
            <MDBCard className="shadow-box-example hoverable">
              <h1 className="mt-4 mb-3 text-lg-center" color="#FFFFFF"><strong><strong style={{fontFamily: "'Crimson Text', serif"}}>Collaborative</strong></strong></h1>
              <p>Feel free to check out some of these projects I've worked on as I learned to code! <br />
              I'll be adding to this page periodically as I continue to develop projects.</p>
              <h1><MDBIcon className="" fab icon="codepen" /></h1>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="6" className="mx-auto">
            <MDBCard className="shadow-box-example hoverable">
              <h1 className="mt-4 mb-3 text-lg-center" color="#FFFFFF"><strong><strong style={{fontFamily: "'Crimson Text', serif"}}>Individual</strong></strong></h1>
              <p>Feel free to check out some of these projects I've worked on as I learned to code! <br />
              I'll be adding to this page periodically as I continue to develop projects.</p>
              <h1><MDBIcon className="" fab icon="codepen" /></h1>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBCol> 

    </section>
  );
}

export default Projects;