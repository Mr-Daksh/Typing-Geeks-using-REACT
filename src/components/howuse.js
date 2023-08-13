import React, { useState } from "react";
import './howuse.css';
import image_right from "./images/rocket1.jpg";

const HowUse = () => {


    return (
        <div>
            <div className="use-cont">
                <div className="use-quest">
                    <div className="quest1">
                    <h2>this is a question</h2>
                    <p>this is the answer of the question which is asked above</p>
                    </div>
                </div>
                <img  src={image_right} alt="a colourfull image" className="use-img"></img>
            </div>
        </div>
    )
}

export default HowUse;