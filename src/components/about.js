import React, { useState } from "react";
import './about.css';
import logo from "./images/logo.png";
import Navbar from "./navbar";
import SideNav from "./sidenav";
import Footer from "./footer";

const About = () => {


    return (
        <>
        <Navbar />
        <SideNav />
        <div>
            <h1 className="docum">About Us</h1>
            <div className="about-cont">
                <div className="image">
                    <img src={logo} alt="a colourfull image"></img>
                </div>
                <div className="text">
                    Hello GEEK, we are a group of different people working on how to make typing easier and easier and to develop interest of typing in teenegers which is quite a bit common nowadays. so, here we are with are application which let you know your typing speed along with it, it will teach you typing in the form of documents as of now but in the coming future a lots of new things are coming. To inhance your experience and to avoid boredom we hae added few games, hope you like. Our main focus is the customization which is lagging in our competition so here we are agin with the solution with all the customizable typingTESTs and typingGAMEs hope you like. A lot of coming in future so stay tuned. you can contact us via instagram, gmail or contact form. 
                </div>
            </div>
            {/* <div className="quest">
                <div className="q-text">
                Lorem Ipsum is a dummy text used for the devlopmet purpose across all around the developers in the world.       
                </div>
                <div className="images">
                    <div className="image1">
                    <img src={image_right} alt="a colourfull image"></img>
                    </div>
                    <div className="image2">
                    <img src={image_right} alt="a colourfull image"></img>
                    </div>
                </div>
            </div> */}
        </div>
        {/* <Footer /> */}
        </>
    )
}

export default About;