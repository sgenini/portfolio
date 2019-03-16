import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small border-top border-light sticky" style={{opacity: ".9"}}>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <p className="text-uppercase mb-0"><strong>&copy; {new Date().getFullYear()} Stéphane Genini</strong></p>
        {/* eslint-disable-next-line */}
        <a href="https://github.com/sgenini" target="_blank"> GitHub</a> | 
        {/* eslint-disable-next-line */}
        <a href="https://www.linkedin.com/in/stephanegenini/" target="_blank"> LinkedIn</a> | 
        {/* eslint-disable-next-line */}
        <a href="https://twitter.com/stephanegenini" target="_blank"> Twitter </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;