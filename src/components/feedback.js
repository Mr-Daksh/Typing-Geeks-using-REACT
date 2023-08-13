import React, { useState } from "react";
import './feedback.css';
import profile_boy from "./images/profile-boy.jpg";
import profile_girl from "./images/profile-girl.png";
import comma from "./images/comma.png";
import { NavLink } from "react-router-dom";


const Feedback = () => {


    return (
        <>
        
        <h1 className="docum">What people say about us..</h1>
        <div className="f-cont">
            <div className="f1">
                <img src={comma} alt="a colourfull image" className="f-image"></img>
                <p className="feed">hello this is a feedback from on ethe customer from the world</p>
                <img src={profile_boy} alt="a colourfull image" className="f-image-round"></img>
                <p>Mark, Canada</p>
            </div>
            <div className="f2">
                <img src={comma} alt="a colourfull image" className="f-image"></img>
                <p className="feed">hello this is a feedback from on ethe customer from the world</p>
                <img src={profile_girl} alt="a colourfull image" className="f-image-round"></img>
                <p>Kalob, Russia</p>
            </div>
            <NavLink to="/contact"
             className="write">
                Share your feedback about your experience to our site, will help us in improving. Share via mail mentioned at last of page(dakshsahu24@gmail.com). Contact form is not active at the moment.
            
            </NavLink>
        </div>
        
        </>
    )
}

export default Feedback;