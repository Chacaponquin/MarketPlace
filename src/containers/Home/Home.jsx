import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaTag, FaAppStore } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { NavBar } from "../../components/index";
import "./home.css";

const Home = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="home-container">
      <NavBar setSideBarOpen={setSideBarOpen} />
      <div className={`sideBar ${sideBarOpen ? "sideBar-show" : ""}`}>
        <section className="sideBar-logo"></section>

        <BiX size={50} color="white" onClick={() => setSideBarOpen(false)} />

        <div className="sideBar-Option">
          <AiFillHome color="white" size={30} />
          <p>Home</p>
        </div>

        <div className="sideBar-Option">
          <FaTag color="white" size={30} />
          <p>Products</p>
        </div>

        <div className="sideBar-Option">
          <FaAppStore color="white" size={30} />
          <p>Apps</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
