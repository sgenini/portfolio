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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
              <MDBNavLink className="font-nunito text-uppercase rounded" to="#home" onClick={this.closeDropdown}>Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/about" onClick={this.closeDropdown}>About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/tech" onClick={this.closeDropdown}>Technology</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/resume" onClick={this.closeDropdown}>Resume</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem> 
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/projects" onClick={this.closeDropdown}>Projects</MDBNavLink>
              {/* <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-md-inline font-nunito text-uppercase rounded">Projects</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu basic left className="text-uppercase">
                  <MDBDropdownItem href="/projects/individual" header className="text-uppercase">Individual</MDBDropdownItem>
                  <MDBDropdownItem href="/projects/shortlist">Crazy Crystal Collectors</MDBDropdownItem>
                  <MDBDropdownItem href="/projects/apps">Browser Games & Apps</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem href="/projects/collaborative" header className="text-uppercase">Collaborative</MDBDropdownItem>
                  <MDBDropdownItem href="/projects/crest">Crest Trading</MDBDropdownItem>
                  <MDBDropdownItem href="/projects/pawstagram">Pawstagram</MDBDropdownItem>
                  <MDBDropdownItem href="/projects/nosh">/näSH/</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem href="/projects/"><strong>See all</strong></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown> */}
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/contact" onClick={this.closeDropdown}><MDBIcon far icon="comment" className="pr-2" />Contact</MDBNavLink>
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