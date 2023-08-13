import React, { useState } from "react";
import './gameselection.css';
import image_right from "./images/rocket1.jpg";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import SideNav from "./sidenav";
import Footer from "./footer";
import MainFeature from "./MainFeature";
import Coming from "./coming";
import Documentary from "./documentary";
import Keyboardlayout from "./key-layout";
import Fact from "./fact";
import game1 from "./images/game1.jpeg";
import game2 from "./images/game2.jpeg";


const GameSelection = () => {


    return (
        <>
        <Navbar />
            <SideNav />
            
            
        <div className="game-select">
        <h1 className="documt">Choose a Customizable typingGAME from different modes available</h1>
            <div className="easy">
                <div className="game-img">
                    <img src={game1} alt="a colourfull image"></img>
                </div>
                {/* <div className="game-txt">
                    It is one of the three game you are seeing nearby and it is an easy game play to experience it and learn typing with different experience.
                </div> */}
                <div className="height-auto">
                <span className="mode">EASY</span>
                <NavLink to="/gameeasy"><button type="button" className="strt">PLAY</button></NavLink>
                </div>
            </div>
            <div className="medium">
                <div className="game-img">
                    <img src={game2} alt="a colourfull image"></img>
                </div>
                {/* <div className="game-txt">
                    It is one of the three game you are seeing nearby and it is an easy game play to experience it and learn typing with different experience.
                </div> */}
                <div className="height-auto">
                <span className="mode">MEDIUM</span>
                <NavLink to="/gamemedium">
                <button type="button" className="strt">PLAY</button>
                </NavLink>
                </div>
            </div>
            <div className="hard">
                <div className="game-img">
                    <img src={game2} alt="a colourfull image"></img>
                </div>
                {/* <div className="game-txt">
                    It is one of the three game you are seeing nearby and it is an easy game play to experience it and learn typing with different experience.
                </div> */}
                <div className="height-auto">
                <span className="mode">HARD</span>
                <NavLink to="/coming">
                <button type="button" className="strt">PLAY</button>
                </NavLink>
                </div>
                
            </div>
        </div>
        <Keyboardlayout />
        <MainFeature />
        <Coming />
        <Fact />
        <Documentary />
        <Footer />
        </>
    )
}

export default GameSelection;