'use client'
import React from 'react';
import LeftSide from './leftSide';
import "./HeaderCss/heade.css";
import RightSide from './rightSide';
const Header = () => {
    return (
        <div className='header'>
            <LeftSide></LeftSide>
            <RightSide></RightSide>
        </div>
    );
}

export default Header;
