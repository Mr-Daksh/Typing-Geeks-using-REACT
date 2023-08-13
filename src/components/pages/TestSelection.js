import React from "react";
import Navbar from "./navbar";
import Sidenav from "./sidenav";
import Footer from './footer'
const TestSelection = () => {
    return (
        <div>
            <Sidenav />
            <Navbar />
            <TestSelection />
            <Footer />
        </div>
    );
};

export default TestSelection;