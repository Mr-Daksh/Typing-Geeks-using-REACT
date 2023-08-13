import React, { useState } from "react";
import './keyboard.css';
import d1 from "./images/d2.jpg";
import d2 from "./images/d1.jpg";
import d3 from "./images/d3.jpg";

const Keyboard = () => {


    return (
        <div>
            <h1 className="docum">Different types of Keyboards</h1>
            <div className="key-cont">
                <img src={d2} alt="a colourfull image" className="key-img"></img>
                <div className="k-cont">
                    <div className="k1">                <img src={d1} alt="a colourfull image" classNamed="d-img"></img>
                        <p className="d-txt"> Standard Keyboard <br></br>A standard keyboard is the type of keyboard that we're using very commonly.

                            Standard keyboards are mostly using in offices, schools, and factories.

                            This keyboard also known as QWERTY keyboard.

                            This type of keyboard is very cheap and very good for normal day-to-day work.
                        </p>
                    </div>
                    <div className="k2">
                        <img src={d2} alt="a colourfull image" classNamed="d-img"></img>
                        <p className="d-txt">Gaming Keyboard<br></br>As its name say this is the gaming keyboard.

                            Specially designed for doing gaming on computers.

                            There are so many peoples including me who like to play games on computers so for those people companies like Logitech, Razer, Corsair, Readgear made some gaming keyboards with RGB lighting effects keyboards.</p>
                    </div>
                    <div className="k3">                <img src={d3} alt="a colourfull image" classNamed="d-img"></img>
                        <p className="d-txt">Ergonomic Keyboard<br></br>This keyboard is specially designed for comfortable use, I mean with a help of an Ergonomic keyboard you can easily rest your palm while typing.

                            Some people may think this keyboard is some futuristic or some different kind of use but that is not the case this keyboard is only designed to give hand rest while typing.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Keyboard;