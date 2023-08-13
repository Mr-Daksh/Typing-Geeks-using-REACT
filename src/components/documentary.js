import React, { useState } from "react";
import './documentary.css';
import key1 from "./images/key1.jpg";
import key2 from "./images/key2.jpg";
import key3 from "./images/key3.jpg";

const Documentary = () => {


    return (
        <div>
            <h1 className="docum">Documentary</h1>
            <div className="d-cont">
                <div className="doc">
                <img  src={key2} alt="a colourfull image" classNamed="d-img"></img>
                <p className="d-txt">How to improve typing speed? <br></br> When practicing your typing skills, it’s important to use proper hand placement. To start, keep your fingers positioned over the home row keys (left hand over the A, S, D, and F keys, and the right hand over the J, K, L, and ; keys), with your thumbs hovering over the space bar. From here, you can move your fingers slightly to the reach neighboring keys. Your hands should always return this starting position.</p>
                </div>
                <div className="doc">
                <img  src={key3} alt="a colourfull image" classNamed="d-img"></img>
                <p className="d-txt">What is WPM?<br></br>Words per minute, commonly abbreviated wpm (sometimes uppercased WPM), is the measure of words processed in a minute, often used as a measurement of the speed of typing, reading or Morse code sending and receiving.</p>
                </div>
                <div className="doc">
                <img  src={key1} alt="a colourfull image" classNamed="d-img"></img>
                <p className="d-txt">how to calculate WPM? <br></br>Net Speed : (Total Words Typed - Word Error ) / Total Time Taken (in minutes)

Example : Suppose A candidate typed total 350 words in 10 Minutes in which he typed 20 words wrong:

Net Speed in WPM = (350 -20) / 10 = 33 WPM <br></br>Accuracy : ( Net WPM/ Gross WPM ) * 100

Accuracy = 33/35 * 100 = 94.28 %</p>
                </div>
                <div className="doc">
                <img  src={key3} alt="a colourfull image" classNamed="d-img"></img>
                <p className="d-txt">What is typingTEST? <br></br>Typing tests simply measure your typing speed and accuracy. Typing tests are frequently used as a part of recruitment process for clerical and administrative positions and are used extensively when assessing candidates for data entry, typist, and transcriptionist jobs.</p>
                </div>
                <div className="doc">
                <img  src={key2} alt="a colourfull image" classNamed="d-img"></img>
                <p className="d-txt">What is typingGames?<br></br>The typing game is a genre of video games that involves typing. Early typing games were a subgenre of educational games and used to familiarize players with keyboard use, but they later progressed to become their own category of games as players became more acclimated to the use of keyboard and the games became more difficult and complex.</p>
                </div>
                <div className="doc">
                <img  src={key1} alt="a colourfull image" classNamed="d-img"></img>
                <p className="d-txt">What is the best keyboard layout?<br></br>A lot of tests and demonstrations have shown that DVORAK is a lot better than QWERTY. Estimates are that you can be more than 60 per cent faster typing on a DVORAK keyboard. The layout that takes the crown however is called Colemak. Colemak is relatively newer, and it is easier to adapt as well.</p>
                </div>
            </div>
        </div>
    )
}

export default Documentary;