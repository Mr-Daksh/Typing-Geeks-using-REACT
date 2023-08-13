import React, { useState } from "react";
import './mainfeature.css';
import image_right from "./images/rocketman.jpg";
import { NavLink } from "react-router-dom";
import game2 from "./images/game2.jpeg";
import image2 from "./images/image2.jpeg";

const MainFeature = () => {


    return (
        <div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" ><path fill="#FF0066" d="M0,192L24,192C48,192,96,192,144,170.7C192,149,240,107,288,112C336,117,384,171,432,170.7C480,171,528,117,576,90.7C624,64,672,64,720,85.3C768,107,816,149,864,181.3C912,213,960,235,1008,218.7C1056,203,1104,149,1152,138.7C1200,128,1248,160,1296,165.3C1344,171,1392,149,1416,138.7L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg> */}
            {/* <NavLink to="/testselection"><NavLink /> */}
            

            <h1 className="main-high">Our main Highlights</h1>
            <div className="main-container">
                <NavLink className="main1" to="/testselection">
                <div className="main-text">
                    <h2>typing TEST</h2>
                    <p>
                        It is a typingTEST, one of our major highlight it is not like other typingTESTs where you have to give according to us. It is a customizable test where you can choose from different categories like medium, hard, coding, blind and also choose the time according to you.
                    </p>
                </div>
                <div className="main-image">
                    <img src={image2} alt="a colourfull image"></img>
                </div>
                </NavLink>
                <NavLink className="main2" to="/gameselection">
                <div className="main-text">
                    <h2>typing GAME</h2>
                    <p>It is a typingGAME which are quite a rear these days as people only focus on simple typingTESTs but we believe with typingGAMEs you learn faster and is more enjoyable. so take atry of the games among three different categories easy, medium and hard.</p>
                </div>
                <div className="main-image">
                    <img src={game2} alt="a colourfull image"></img>
                </div>
                </NavLink>
            </div>
        </div>
    )
}

export default MainFeature;