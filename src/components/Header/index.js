import React, { useState } from "react";
import {LayoutLogo} from "../LayoutLogo";
import { FcSearch } from "react-icons/fc";
import { FcLikePlaceholder} from "react-icons/fc";
import { Link, animateScroll as scroll } from 'react-scroll';

import style from './style.module.css'

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
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
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
          <MDBNavbarNav className={style.navbarItem}>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <Link
                to="home-section"
                smooth={true}
                duration={500}
                onClick={scrollToTop}
              >
                Home
              </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
              <Link to="Shopes-section" smooth={true} duration={200}>
              Shopes
              </Link>
                </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink > 
              <Link to="about-section" smooth={true} duration={200}>
                About
              </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>
          <MDBNavbarNav className={style.navbarItem}>   
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