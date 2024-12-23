// "use client";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import HomeIcon from "../../assets/icons/HomeIcon";
import BoxesIcon from "../../assets/icons/BoxesIcon";
import BattlesIcon from "../../assets/icons/BattlesIcon";
import VipIcon from "../../assets/icons/VipIcon";
import PeoplesIcon from "../../assets/icons/PeoplesIcon";
import mbLogo from "./../../assets/images/mob-logo.png"
const LeftSide = () => {
  return (
    <div className="leftside-header">
      <img src={logo} alt="Logo" className="logo" />
      <img src={mbLogo} alt="Logo" className="logo-mb" />
      <ul className="navigations mb-0">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            <HomeIcon></HomeIcon> <span>Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            <BoxesIcon /> <span>Boxes</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            <BattlesIcon /> <span>Battles</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            <VipIcon /> <span>VIP Members</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            <PeoplesIcon /> <span>Affiliates</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSide;
