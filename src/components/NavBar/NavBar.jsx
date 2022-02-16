import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import "./navBar.css";

const NavBar = ({ setSideBarOpen }) => {
  return (
    <div className="navBar">
      <BiMenuAltLeft size={50} onClick={() => setSideBarOpen(true)} />

      <a href="/">Account</a>
    </div>
  );
};

export default NavBar;
