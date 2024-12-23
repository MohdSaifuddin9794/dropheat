"use client";
import React from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import MidContainer from "../../components/MiddleContainer/MidContainer";
import Chat from "../../components/Common/Chat";

const Home = () => {
  return <div className="d-flex">
    <LeftSideBar />
    <MidContainer></MidContainer>
    <Chat />
  </div>;
};

export default Home;
