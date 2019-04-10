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
        <p className="mb-0"><small><span role="img" aria-label="laptop">💻</span> This site was hand-coded with <span className="styled">love</span> using React.js <span role="img" aria-label="victory">✌</span></small></p>
        <style dangerouslySetInnerHTML={{__html: `.styled { transition: color 0.25s ease } .styled:hover { color: red }`}} />
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;