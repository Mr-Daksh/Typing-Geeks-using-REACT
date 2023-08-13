import React, { useState } from "react";
import './coming.css';
import Contact from "./contact";
import About from "./about";
import Documentary from "./documentary";
import Footer from "./footer";
import Feedback from "./feedback";
import Navbar from "./navbar";
import SideNav from "./sidenav";

const Coming = () => {


    return (
        <div>
<SideNav />            
<Navbar />
            <div className="coming-cont">
                <div className="coming-h"><h1>Comig Soon..!!</h1>A lot of new features.</div>
                <div>
                    <ul>
                        <li>can you challenge your friends </li>
                        <li>free of cost Lectures</li>
                        <li>Add free content</li>
                    </ul>
                </div>
            </div>
            {/* <Feedback /> */}
            {/* <Contact /> */}
        {/* <About /> */}
        {/* <Documentary /> */}
        {/* <Footer /> */}
        </div>
    )
}

export default Coming;