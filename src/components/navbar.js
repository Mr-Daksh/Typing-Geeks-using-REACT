import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg margin-50">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand text-light font-weight-bolder	" href="/">
              typingGEEKS
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>

              <span class="navbar-toggler-icon"></span>

            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link text-light" aria-current="page" to="/testselection">
                    typingTEST
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link text-light" to="/gameselection">
                    typingGAME
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link text-light" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link text-light" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              {/* <form class="d-flex">
                <button class="btn  btn-style" type="submit">
                  Sign Up
                </button>
                <button class="btn  btn-style btn-style-border" type="submit">
                  Log in
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;














// import React, { useState } from "react";
// import './navbar.css';
// import { NavLink } from "react-router-dom";

// const NavBar = () => {


//     return (
//         <div>
//             <div className="blank-nav">
//                 <div className="nav-buttons">
//                     <NavLink className="nav-link" to="/contact">Typing Test</NavLink>
//                     <NavLink className="nav-link" to="/contact">Typing Game</NavLink>
//                     <NavLink className="nav-link" to="/contact">About</NavLink>
//                     <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default NavBar;