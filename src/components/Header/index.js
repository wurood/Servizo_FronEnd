import React, { useState } from "react";
import './style.css'
import {LayoutLogo} from "../LayoutLogo";
import { FcSearch } from "react-icons/fc";
import { FcLikePlaceholder} from "react-icons/fc";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";


function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
        <MDBNavbarBrand href="#">
           <LayoutLogo class='logo_'/>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav className="navbarItem">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Shopes</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">About Us</MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>
          <MDBNavbarNav className="navbarItem">   
            <MDBNavbarItem>
              <MDBNavbarLink href="#" tabIndex={-1} aria-disabled="true">
                <FcSearch /> Search
              </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBNavbarLink href="#" tabIndex={-1} aria-disabled="true">
                <FcLikePlaceholder /> Store
              </MDBNavbarLink>
              </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
    </MDBNavbar>
  );
}

export default Header;