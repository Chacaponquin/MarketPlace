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

      <SideBar setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} />

      <div className="home-principal">
        <div className="circle-div">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          <div className="circle5"></div>
          <div className="circle6"></div>
        </div>

        <div className="landing-inf">
          <h1>Insolate Your Identities</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            autem velit fuga enim asperiores, rerum quasi, ea aut ducimus
            accusantium labore inventore! Quas?
          </p>

          <a href="/">Get Started</a>
        </div>

        <img src="./images/business-case.png" alt="" />
      </div>
    </div>
  );
};

const SideBar = ({ setSideBarOpen, sideBarOpen }) => {
  return (
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
  );
};

export default Home;
