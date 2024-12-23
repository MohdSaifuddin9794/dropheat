"use client";
import React from "react";
import { Link } from "react-router-dom";
import StarBox from "../../assets/icons/StarBox";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import InstaIcon from "../../assets/icons/InstaIcon";
import TiktokIcon from "../../assets/icons/TiktokIcon";
import YoutubeIcon from "../../assets/icons/YoutubeIcon";

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex align-items-center justify-content-between">
        <div className="star-section d-flex align-items-center gap-1">
          <StarBox></StarBox>
          <StarBox></StarBox>
          <StarBox></StarBox>
          <StarBox></StarBox>
          <StarBox></StarBox>
        </div>
        <ul className="ps-0 mb-0 d-flex align-items-center">
          <li>
            <Link to="/">AML Policy</Link>
          </li>
          <li>
            <Link to="/">Cookie Policy</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">Terms Of Service</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Provably Fair</Link>
          </li>
          <li>
            <Link to="/">Privacy Statement</Link>
          </li>
        </ul>
        <div className="social-media d-flex align-items-center gap-2">
          <Link className="social-media-btn">
            <TwitterIcon></TwitterIcon>
          </Link>
          <Link className="social-media-btn">
            <InstaIcon></InstaIcon>
          </Link>
          <Link className="social-media-btn">
            <TiktokIcon></TiktokIcon>
          </Link>
          <Link className="social-media-btn">
          <YoutubeIcon></YoutubeIcon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
