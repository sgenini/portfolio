import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon } from "mdbreact";

import "./navbar.css";
import logo from "../../assets/images/logo2-transparent.png";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  closeDropdown = () => {
    this.setState({ isOpen: false });
    // window.scrollTo({ top: 0, behavior: "smooth" });
  }

  redirectGithub = () => {
    // eslint-disable-next-line
    window.open("https://github.com/sgenini", "_blank");
  }

  redirectLinkedIn = () => {
    // eslint-disable-next-line
    window.open("https://www.linkedin.com/in/stephanegenini/", "_blank");
  }

  redirectTwitter = () => {
    // eslint-disable-next-line
    window.open("https://twitter.com/stephanegenini", "_blank");
  }

  redirectMailTo = () => {
    // eslint-disable-next-line
    window.open("mailto:contact@stephanegenini.com");
  }

  scrollToHome = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  scrollToTech = () => {
    document.getElementById("tech").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  scrollToResume = () => {
    document.getElementById("resume").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <MDBNavbar className="shadow-box-example hoverable border-bottom border-light" dark expand="md" style={{backgroundColor: "rgba(0,0,0,0.8)"}} scrolling fixed="top">
        <MDBNavbarBrand>
          <strong className="white-text font-nunito text-uppercase">
              <img src={logo} alt="logo" height="40" /> Stéphane Genini</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/#home" onClick={this.scrollToHome}>Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/#about" onClick={this.scrollToAbout}>About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/#resume" onClick={this.scrollToResume}>Resume</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/#tech" onClick={this.scrollToTech}>Technology</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem> 
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/#projects" onClick={this.scrollToProjects}>Projects</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/#contact" onClick={this.scrollToContact}><MDBIcon far icon="comment" className="pr-2" />Contact</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light rounded" to="#" onClick={this.redirectGithub}>
                <MDBIcon fab icon="github-alt" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light rounded" to="#" onClick={this.redirectLinkedIn}>
                <MDBIcon fab icon="linkedin-in" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light rounded" to="#" onClick={this.redirectTwitter}>
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light rounded" to="#" onClick={this.redirectMailTo}>
                <MDBIcon icon="envelope" />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;