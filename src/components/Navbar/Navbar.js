import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

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
    window.open("https://twitter.com/StephaneGenini", "_blank");
  }

  redirectMailTo = () => {
    // eslint-disable-next-line
    window.open("mailto:contact@stephanegenini.com");
  }

  render() {
    return (
      <MDBNavbar className="shadow-box-example hoverable border-bottom border-light" dark expand="md" style={{backgroundColor: "rgba(0,0,0,0.8)"}}>
        <MDBNavbarBrand>
          <strong className="white-text font-nunito text-uppercase">
              <img src={logo} alt="logo" height="40" /> Stéphane Genini</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/" onClick={this.closeDropdown}>Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/tech" onClick={this.closeDropdown}>Technology</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/resume" onClick={this.closeDropdown}>Resume</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem> 
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-md-inline font-nunito text-uppercase rounded">Projects</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu basic left>
                  <MDBDropdownItem href="/projects/personal" header className="text-uppercase">Personal</MDBDropdownItem>
                  <MDBDropdownItem href="/projects/shortlist">Crazy Crystal Collectors</MDBDropdownItem>
                  <MDBDropdownItem href="/projects/apps">Browser Games & Apps</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem href="/projects/collaborative" header className="text-uppercase">Collaborative</MDBDropdownItem>
                  <MDBDropdownItem href="/projects/crest">Crest Trading</MDBDropdownItem>
                  <MDBDropdownItem href="/projects/pawstagram">Pawstagram</MDBDropdownItem>
                  <MDBDropdownItem href="/projects/nosh">/näSH/</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem href="/projects/">See all...</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
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