"use client";
import React from "react";
import GiftBoxIcon from "../../assets/icons/GiftIcon";
import SidebarHome from "../../assets/icons/SidebarHome";
import SidebarBoxes from "../../assets/icons/SidebarBoxes";
import SidebarBattles from "../../assets/icons/SidebarBattles";
import SidebarVip from "../../assets/icons/SidebarVip";
import SidebarPeople from "../../assets/icons/SidebarPeople";
import MicIcon from "../../assets/icons/MicIcon";
import MailIcon from "../../assets/icons/MailIcon";
import Faq from "../../assets/icons/Faq";
import ReaderIcon from "../../assets/icons/ReaderIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import InstaIcon from "../../assets/icons/InstaIcon";
import TiktokIcon from "../../assets/icons/TiktokIcon";
import YoutubeIcon from "../../assets/icons/YoutubeIcon";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <div className="sidebar   ">
      <ul className="sidebar-navigations ps-0">
        <li>
          <Link className="nav-link-box active-box">
            <GiftBoxIcon></GiftBoxIcon>
          </Link>
        </li>
        <li>
          <Link className="nav-link-box">
            <SidebarHome></SidebarHome>
          </Link>
        </li>
        <li>
          <Link className="nav-link-box">
            <SidebarBoxes></SidebarBoxes>
          </Link>
        </li>
        <li>
          <Link className="nav-link-box">
            <SidebarBattles></SidebarBattles>
          </Link>
        </li>
        <li>
          <Link className="nav-link-box">
            <SidebarVip></SidebarVip>
          </Link>
        </li>
        <li>
          <Link className="nav-link-box">
            <SidebarPeople></SidebarPeople>
          </Link>
        </li>
      </ul>
      <ul className="sidebar-navigations ps-0">
        <li>
          <Link className="nav-link-box ">
            <MicIcon></MicIcon>
          </Link>
        </li>
        <li>
          <Link className="nav-link-box">
            <MailIcon></MailIcon>
          </Link>
        </li>
        <li>
          <Link className="nav-link-box">
            <Faq></Faq>
          </Link>
        </li>
        <li>
          <Link className="nav-link-box">
            <ReaderIcon></ReaderIcon>
          </Link>
        </li>
        <li className="social-media">
          <Link className="nav-link-box">
            <TwitterIcon></TwitterIcon>
          </Link>
          <Link className="nav-link-box">
            <InstaIcon></InstaIcon>
          </Link>
          <Link className="nav-link-box">
            <TiktokIcon></TiktokIcon>
          </Link>
          <Link className="nav-link-box">
            <YoutubeIcon></YoutubeIcon>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSideBar;
