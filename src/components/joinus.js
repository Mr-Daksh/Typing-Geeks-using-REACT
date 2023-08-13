import React, { useState } from "react";
import './joinus.css';
import image_right from "./images/rocket1.jpg";

const JoinUs = () => {


    return (
        <div>
            <div className="join-cont">
            <img  src={image_right} alt="a colourfull image" className="join-img"></img>
            <p>Join our community</p>
            <input type="email"></input>
            <button type="submit">Subscribe</button>
            </div>
        </div>
    )
}

export default JoinUs;