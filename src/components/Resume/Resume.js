import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBContainer } from "mdbreact";
import "./resume.css";

const Resume = () => {
  const bloo = "#1f4e79";
  return (
    <section id="resume" className="resume-page mb-5" style={{opacity: ".9", paddingTop: "120px", borderBottom: "3px solid white"}}>
      <MDBContainer style={{width:"80%", minHeight: "75vh"}}>

        <MDBCard className="shadow-box-example hoverable" id="resume-card">
          <MDBRow>
            <MDBCol lg="12" className="mx-auto">
              <h1 className="mt-5 text-lg-center text-uppercase" color="#FFFFFF"><strong><strong style={{fontFamily: "Lato", fontWeight: "900", fontSize: "75px"}}><span style={{color: bloo}}>Stéphane</span> <span style={{color: "black"}}>Genini</span></strong></strong><br /></h1>
              <MDBBtn outline transparent color="mdb-color" href="https://drive.google.com/open?id=1sNpnDa4TsD8RAPqnKlJP370w8hlpWAMc" target="_blank" size="sm" >View PDF</MDBBtn>
              <hr style={{width: "70%"}} className="mb-0" />
            </MDBCol>
          </MDBRow>
          <MDBRow >
            <MDBCol lg="10" className="mx-auto">
              <MDBCardBody className="form ml-auto">
                <h3 className="text-lg-center mb-0">
                  <strong style={{fontFamily: "'Crimson Text', serif", color: bloo}} >Professional Summary</strong>
                </h3>
                  <p>Full-stack web developer with a background in business administration, constantly striving to expand the capabilities of my codebase while maintaining a clear understanding of the higher scope of the business as a whole. My attention to detail and eye for design pushes me to develop aesthetically pleasing front-ends in my UX/UI work, while my simplicity-through-modularity approach allows me to write clear and concise code for back-end development.</p>
                  <hr style={{width: "35%", opacity: ".65"}} className="mb-0" />

                <h3 className="text-lg-center mb-0 mt-4">
                  <strong style={{fontFamily: "'Crimson Text', serif", color: bloo}} >Technical Skills</strong>
                </h3>
                  <p className="text-lg-left ml-3"><strong>Web Stack: </strong>MongoDB, Express.js, React.js, Node.js (incl. HTML, CSS, JavaScript, MySQL, etc.)<br/>
                  <strong>Computer Proficiency: </strong>Microsoft Suite, Google Suite, Adobe Suite, Social Media Management, OBS Studio, etc.<br/>
                  <strong>Foreign Languages: </strong>Bilingual French (Baccalauréat with Distinction), Basic Spanish</p>
                  <hr style={{width: "35%", opacity: ".65"}} className="mb-0" />

                <h3 className="text-lg-center mb-0 mt-4">
                  <strong style={{fontFamily: "'Crimson Text', serif", color: bloo}} >Development Projects</strong>
                </h3>
                  <p className="text-lg-left ml-3"><strong>Crest Trading · </strong><a href="https://crest-trading.herokuapp.com" target="_blank" rel="noopener noreferrer" >https://crest-trading.herokuapp.com</a> · <a href="https://github.com/sgenini/crest" target="_blank" rel="noopener noreferrer" >https://github.com/sgenini/crest</a><br/>
                  <span style={{ fontStyle: "italic", fontSize: "15px" }}>Full-stack stock market trading app allowing the user to develop a mock portfolio from a pre-allocated budget and track its performance over time, providing a consequence-free & fun way to practice trading strategies using real-time market data.</span><br />
                  <strong>React.js, Express.js, Node.js, Passport.js, Sequelize, Material Design for Bootstrap, IEX APIs, FusionCharts</strong></p>
                  
                  <p className="text-lg-left ml-3 mb-0"><strong>Pawstagram · </strong><a href="https://pawstagram.herokuapp.com" target="_blank" rel="noopener noreferrer" >https://pawstagram.herokuapp.com</a> · <a href="https://github.com/sgenini/pawstagram" target="_blank" rel="noopener noreferrer" >https://github.com/sgenini/pawstagram</a><br/>
                  <span style={{ fontStyle: "italic", fontSize: "15px" }}>Full-stack social media web app that enables users to show off photos of their pets, comment on each other’s photos, and join communities with other like-minded individuals to chat with and meet up with.</span><br />
                  <strong>Express.js, Node.js, MySQL & Firebase, Passport.js, Sequelize, Material Design for Bootstrap, Handlebars.js</strong></p>

                  <a href="/projects" style={{ color: "#3F729B", textDecorationLine: "", textTransform: "uppercase" }}><small>See more...</small></a>
                  <hr style={{width: "35%", opacity: ".65"}} className="mb-0" />

                <h3 className="text-lg-center mb-0 mt-4">
                  <strong style={{fontFamily: "'Crimson Text', serif", color: bloo}} >Education</strong>
                </h3>
                <p className="text-uppercase">University of California, Berkeley Extension - Berkeley, CA (February 2019)</p>
                <hr style={{ marginTop: "-13px", width: "50%", borderColor: bloo, opacity: .5 }}></hr>
                <p style={{ fontStyle: "italic", marginTop: "-10px" }}>Professional Certification in Full Stack Web Development</p>
                <p className="text-uppercase">University of Southern California - Los Angeles, CA (May 2017)</p>
                <hr style={{ marginTop: "-13px", width: "50%", borderColor: bloo, opacity: .5 }}></hr>
                <p style={{ fontStyle: "italic", marginTop: "-10px", lineHeight: "1" }}>Bachelor of Science in Business Administration<br />
                <small className="text-uppercase" style={{ fontStyle: "normal" }}>Marshall School of Business</small></p>
                <hr style={{width: "35%", opacity: ".65"}} className="mb-0 mt-4" />

                <h3 className="text-lg-center mb-0 mt-4">
                  <strong style={{fontFamily: "'Crimson Text', serif", color: bloo}} >Experience</strong>
                </h3>
                <MDBContainer>
                  <MDBRow between>
                    <MDBCol className="text-uppercase" size="4">Aetherium Gaming</MDBCol>
                    <MDBCol size="4"><span style={{ opacity: 0 }}>---</span>Los Angeles, CA (2018 - 2019)</MDBCol>
                  </MDBRow>
                  <p className="text-left" style={{ fontStyle: "italic", marginTop: "-5px", marginLeft: "50px", fontWeight: "300" }}>Broadcaster & Senior Content Producer</p>
                  <ul className="text-left" style={{ lineHeight: "1.25", marginTop: "-15px", marginLeft: "50px", marginBottom: "20px", fontWeight: "300" }}>
                    <li>Produced, scheduled, and broadcasted video content to a remote website on a daily basis, including hands on experience with video and audio capture equipment and broadcasting software</li>
                    <li>Created and cultivated a community around the broadcast show, reaching an audience of over 2,200 unique followers, while analyzing audience retention data and viewer trends to produce targeted content</li>
                    <li>Established and developed professional relationships, coordinating with a team of fellow creators within the organization and the wider industry as a whole</li>
                    <li>Designed branding assets and managed social media accounts to create a strong, cohesive identity; contacted potential sponsors to discuss opportunities ranging from early game access from developers to brand affiliate and partner programs</li>
                  </ul>
                  <MDBRow between >
                    <MDBCol className="text-uppercase" size="4"><span style={{ opacity: 0 }}>....</span>Target Corporation</MDBCol>
                    <MDBCol size="4"><span style={{ opacity: 0 }}>-----------</span>Los Angeles, CA (2017)</MDBCol>
                  </MDBRow>
                  <p className="text-left" style={{ fontStyle: "italic", marginTop: "-5px", marginLeft: "50px", fontWeight: "300" }}>Executive Team Leader of Guest Experience</p>
                  <ul className="text-left" style={{ lineHeight: "1.25", marginTop: "-15px", marginLeft: "50px", fontWeight: "300" }}>
                    <li>Drove sales by overseeing the guest service experience throughout the entire store</li>
                    <li>Provided team with orientation and training, counseling and coaching, and on-the-job support</li>
                    <li>Acted as leader on duty responding to guest and team member concerns, as well as ensuring all Target property and personnel are secure</li>
                  </ul>
                </MDBContainer>

                <hr className="mt-5" />
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol lg="8" className="mx-auto">
              <h5 className="mt-0 mb-5">Don't forget to check out my <a href="/projects" style={{ color: "#3F729B", textDecorationLine: "underline" }}>other development projects</a> as well!</h5>
            </MDBCol>
          </MDBRow>
        </MDBCard>

      </MDBContainer>
    </section>
  );
}

export default Resume;