import React, { useState } from "react";
import logo from "./images/logo.png";
import "./header.css";
import App1 from "./App1/App1";
import { NavLink } from "react-router-dom";

const Header = () => {


    return (
        <div>
            {/* <img  src={image_right} alt="a colourfull image"></img> */}
            <div className="head-cont">
                <div className="left-side">
                    {/* <img  src={image_right} alt="a colourfull image"></img> */}
                    <h1>Hello GEEKS, welcome abroad. <br></br> Improve your Typing Speed with daily just 10 minutes with us. </h1><br></br>
                    <h2>When you get bore typing, we got typing games for you from which you can learn typing like a pro while Gaming. Also a lots of Documentation to help you. :))</h2>
                </div>
                <div className="right-side">.
                    {/* <App1 /> */}
                </div>
            </div>
            <div className="logo">
                {/* <img src={logo} alt="a colourfull image" className="image"></img> */}
            </div>
            <div className="main-features">
                <NavLink className="test" to="/testselection">
                    <div >
                        Typing Test
                    </div>
                </NavLink>
                <NavLink className="game" to="/gameselection">
                    <div >
                        Typing Game
                    </div>
                </NavLink>
                <NavLink className="videos" to="/coming">
                    <div >
                        Typing Lectures
                    </div>
                </NavLink>
            </div>

        </div>
    )
}

export default Header;