"use client";
import React from "react";
import Flag  from "./../../assets/images/flag.png"
import { Link } from "react-router-dom";
import DownChevIcon from "../../assets/icons/DownChevIcon";
import DollarCoinIcon from "../../assets/icons/DollarCoinIcon";
import MsgIcon from "../../assets/icons/MsgIcon";
import DotsIcon from "../../assets/icons/DotsIcon";

const RightSide = () => {
  return (
    <div className="d-flex align-items-center rightmenu">
      <div className="dropdown">
        <button
          className="btn primary-btn dropdown-toggle lang"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={Flag} alt="" /> EN <DownChevIcon></DownChevIcon>
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/">
              Action
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/">
              Action
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/">
              Action
            </Link>
          </li>
        </ul>
      </div>
      <div className="dropdown  currency">
        <button
          className="btn primary-btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <DollarCoinIcon /> USD <DownChevIcon></DownChevIcon>
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/">
              Action
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/">
              Action
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/">
              Action
            </Link>
          </li>
        </ul>
      </div>
      <button className="gradient-btn">Authorization</button>
      <button className="btn primary-btn" type="button">
        <MsgIcon />
      </button>
      <button className="btn primary-btn mobile-toggle-menu" type="button">
        <DotsIcon />
      </button>
    </div>
  );
};

export default RightSide;
