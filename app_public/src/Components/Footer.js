import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 footer-description">
              <h5 className="text-uppercase">
                <Link className="navbar-brand" to="/">
                  <img
                    src="../images/logo/sweat4fit.png"
                    alt="sweat4fir logo"
                  />
                </Link>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exerc esse cillum dolore
                Lorem ipsum dolor sit amet.
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-md-3 mb-md-0 mb-3 footer-links-div">
              <h5 className="text-uppercase">Quick Links</h5>

              <ul className="list-unstyled">
                <li>
                <Link className="nav-link" aria-current="page" to="/about">
                  About
                </Link>
                </li>
                <li>
                <Link className="nav-link" aria-current="page" to="/trainers">
                  Trainers
                </Link>
                </li>
                <li>
                <Link className="nav-link" aria-current="page" to="/schedule">
                  Schedule
                </Link>
                </li>
                <li>
                <Link className="nav-link" aria-current="page" to="/contactus">
                  Contact Us
                </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 footer-social-div">
              <h5 className="text-uppercase">Social Media Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a className="nav-link" href="https://www.facebook.com/"><img src="../images/icons/fb.png" alt="" />Facebook</a>
                </li>
                <li>
                  <a className="nav-link" href="https://twitter.com/login?lang=en"><img src="../images/icons/tweet.png" alt="" />Twitter</a>
                </li>
                <li>
                  <a className="nav-link" href="https://www.instagram.com/?hl=en"><img src="../images/icons/insta.png" alt="" />Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">          
          <p>© 2022 Copyright: <a href="/">Sweat4Fit</a> ADITI SHAH | JIGAR DONDA | INDERPREET SINGH</p>
        </div>
      </footer>
    </>
  );
}