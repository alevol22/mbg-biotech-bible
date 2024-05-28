import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import logo from "../../src/temp_logo.PNG";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <Nav>
      <img src={logo} alt="Logo" style={{width: '250px', height: '100px'}} /> {/* adjust size as needed */}
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/list" activeStyle>
            Full List of Courses
          </NavLink>
          <SearchBar />
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
