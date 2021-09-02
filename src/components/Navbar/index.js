import React from "react";
import { FaBars } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnTheme
} from "./NavbarElements";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Ihsan</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='/'>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='portfolio'>Portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnTheme>
              <FiSun />
            </NavBtnTheme>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
