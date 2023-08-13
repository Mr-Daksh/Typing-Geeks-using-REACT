import React from "react";
import './footer.css';
import insta from './images/instagram.png';
import gmail from './images/gmail.png';
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container cont2">
          <div className="row">
            <div className="col-12 col-lg-10">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Main Highlights</h2>
                  <ul>
                    <li>
                      <a href="#">typingTEST</a>
                    </li>
                    <li>
                      <a href="#">typingGAMES</a>
                    </li>
                    <li>
                      <a href="#">typingLECTURES</a>
                    </li>
                    <li>
                      <a href="#">Documentary</a>
                    </li>
                    <li>
                      <a href="#">Keyboard Layout</a>
                    </li>
                    <li>
                      <a href="#">Different types of Keyboard</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Recent Articles</a>
                    </li>
                    <li>
                      <a href="#">Coming Soon</a>
                    </li>
                    <li>
                      <a href="#">Feedback</a>
                    </li>
                  </ul>
                </div>

                {/* <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/mr.daksh_/"><img src={insta} className="insta-img"></img></a>
                    </li>
                    <li>
                      <a href="#"><img src={gmail} className="insta-img"></img>dakshsahu24@gmail.com</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div> */}

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                    <a href="https://www.instagram.com/mr.daksh_/"><img src={insta} className="insta-img"></img></a>
                    </div>
                    <div className="col-3 mx-auto">
                    <img src={gmail} className="insta-img"></img>dakshsahu24@gmail.com
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2021 typingGEEKS. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;