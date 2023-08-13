import React, { useState } from "react";
import './sidenav.css';
import { NavLink } from "react-router-dom";

const SideNav = () => {


    return (
        <div>
            <div className="sidenav">
            <div className="sidenav-buttons">
                    <NavLink to={'/contact'}>Home</NavLink>
                    <NavLink to={'/about'}>test</NavLink>
                    <NavLink to={'http://google.com'}>game</NavLink>
                </div>
            </div>
        </div>
    )
}

export default SideNav;