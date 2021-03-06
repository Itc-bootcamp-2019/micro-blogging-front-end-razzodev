import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserNameContext } from "../context";
import "../components/NavbarStyle.css";

function Navbar() {
  const { userName } = useContext(UserNameContext);

  return (
    <div id="navbar">
      <NavLink
        exact
        activeClassName="active-links"
        className="nav-links"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        exact
        activeClassName="active-links"
        className="nav-links"
        to="/profile"
      >
        Profile
      </NavLink>
      <h5
        style={{
          position: "relative",
          alignItems: "flex-end",
          marginRight: "40px",
          color: "#FFFFFF",
          fontWeight: "500"
        }}
      >
        Hi, {userName}
      </h5>
    </div>
  );
}

export default Navbar;
