import React from "react";
import { BiMenu } from "react-icons/bi";
import "./navBar.css";

const NavBar = ({ setSideBarOpen }) => {
  return (
    <div className="navBar">
      <BiMenu size={50} color="black" onClick={() => setSideBarOpen(true)} />
    </div>
  );
};

export default NavBar;
