import React, { useState } from "react";
import './testselection.css';
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import SideNav from "./sidenav";
import Footer from "./footer";
import MainFeature from "./MainFeature";
import Coming from "./coming";
import Documentary from "./documentary";
import Keyboardlayout from "./key-layout";
import Fact from "./fact";
import Contact from "./contact";


const TestSelection = () => {


    return (
        <> 
        <Navbar />
        <SideNav />
        <div className="select-out">
        <h1 className="documtt">Choose a Customizable typingTEST from different<br></br> tests available</h1>
            <div className="select-cont">
                <div className="mediumt">
                    <img src={image1} alt="a colourfull image"></img>
                    {/* <p className="tselect">This is a MEDIUM typing test  where you will not find much difficulty and can take it easily, suitable for begginers.<br></br> */}
                    MEDIUM
                    {/* <br></br><hr></hr> It is the data from NASA so you are also going to learn some amazing fact sabout Universe. </p> */}
                    <div className="select-time">
                        <NavLink class="nav-link active" aria-current="page" to="/typingtest">
                            <button type="button" className="btn1">1 MIN</button>
                        </NavLink>
                        <NavLink class="nav-link active" aria-current="page" to="/typingtest1">
                            <button type="button" className="btn2">2 MIN</button>
                        </NavLink>
                        <NavLink class="nav-link active" aria-current="page" to="/typingtest2">
                            <button type="button" className="btn3">5 MIN</button>
                        </NavLink>
                    </div>
                    {/* <button type="button">TAKE TEST</button> */}
                </div>
                <div className="codingt">
                    <img src={image2} alt="a colourfull image"></img>
                    {/* <p className="tselect">It is a CODING typing test, in it you will be basically practising how to write code faster. It is different from medium test as typing of normal text and programming text is different.<br></br> */}
                    CODING
                    {/* <br></br><hr></hr>
                    You will find it interesting as it contains the JAVASCRIPT codes which will help you to learn the syntax of it. </p> */}
                    <div className="select-time">
                        <NavLink class="nav-link active" aria-current="page" to="/typingtest4">
                            <button type="button" className="btn1">1 MIN</button>
                        </NavLink>
                        <NavLink class="nav-link active" aria-current="page" to="/typingtest5">
                            <button type="button" className="btn2">2 MIN</button>
                        </NavLink>
                        <NavLink class="nav-link active" aria-current="page" to="/typingtest6">
                            <button type="button" className="btn3">5 MIN</button>
                        </NavLink>
                    </div>
                    {/* <button type="button">TAKE TEST</button> */}
                </div>
                <div className="blind"></div>
                <div className="hardt">
                <img src={image3} alt="a colourfull image"></img>
                    {/* <p className="tselect">It is a Hard typing test as words or sentences used here are not common in real world. It contains LOREM IPSUM text which is quite a bit difficult to read and write which makes it a difficult typing test.<br></br>
                    HARD */}
                    {/* <br></br><hr></hr> Y might find it interesting as you will get to kearn something new from it. </p> */}
                    <div className="select-time">
                        <NavLink class="nav-link active" aria-current="page" to="/typingtest7">
                            <button type="button" className="btn1">1 MIN</button>
                        </NavLink>
                        <NavLink class="nav-link active" aria-current="page" to="/typingtest8">
                            <button type="button" className="btn2">2 MIN</button>
                        </NavLink>
                        <NavLink class="nav-link active" aria-current="page" to="/typingtest9">
                            <button type="button" className="btn3">5 MIN</button>
                        </NavLink>
                    </div>
                    {/* <button type="button">TAKE TEST</button> */}
                </div>
            </div>
            {/* <div className="customize-user">
                <img src={image_right} className="custom-img" alt="a colourfull image"></img>
                <p className="custom-text">take this customizable test</p>
            </div> */}
        </div>
        <Keyboardlayout />
        <MainFeature />
        <Coming />
        <Fact />
        <Documentary />
        <Contact />
        <Footer />
        </>
    )
}

export default TestSelection;