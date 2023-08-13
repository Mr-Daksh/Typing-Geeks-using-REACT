import React, { useState } from "react";
import './key-layout.css';
import key_lay from "./images/key-lay.png";
// import { Link } from 'react-router-dom';

const Keyboardlayout = () => {

    return (
        <>
        <h1 className="docum">Keyboard Layout</h1>
        <div className="keylay">
            <img  className="keylay-img" src={key_lay} alt="a colourfull image"></img>
            <p className="key-txt">A keyboard layout is any specific physical, visual or functional arrangement of keys, legends, or the key-meaning associations (respectively) of a computer keyboard, mobile phone, or other computer-controlled typographic keyboard. Physical layout is the actual positioning of keys on a keyboard. Visual layout is the arrangement of legends (labels, markings, engravings) that appear on those keys. Functional layout is the arrangement of the key-meaning association or keyboard mapping, determined in software, of all the keys of a keyboard: it is this (rather than the legends) that determines the actual response to a key press.</p>
        </div>
        </>
    )
}

export default Keyboardlayout;