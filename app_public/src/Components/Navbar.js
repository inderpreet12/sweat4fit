import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

export default function Navbar(props) {


  let isauth = false;

  if (sessionStorage.getItem('userData')) {
    isauth = true;
    // return (<Route {...rest} render={()=>isauth?(children):(<Redirect to={'/trainers'}/>)}/>);

  }

  console.log("is auth=", isauth);

  const history = useHistory();

  function reload() {

  }

  return (
    <>
      <div className="navbar-topbar">
        <div className="navbar-topbar-phone"><a className="links" href="tel:123-456-7890">123-456-7890</a><a className="links" href="mailto:sweat4fit@gmail.com">sweat4fit@gmail.com</a></div>
        <div className="navbar-topbar-social">



          {isauth == true ? (
            <>
              <Link className="links" to="/userprofile">
                My Account
              </Link>
              <Link onClick={reload} className="links" to="/logout">
                Logout
              </Link>
            </>
            
          ) : (

            <>
              <Link className="links" to="/login">
                Login
              </Link>
              <Link className="links" to="/register">
                Register
              </Link>
            </>
          )}





          <a className="links" href="/login">
            <img src="../images/icons/fb.png" alt="" />
          </a>
          <a className="links" href="#">
            <img src="../images/icons/tweet.png" alt="" />
          </a>
          <a className="links" href="/login">
            <img src="../images/icons/insta.png" alt="" />
          </a>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="../images/logo/sweat4fit.png" alt="sweat4fir logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trainers">
                  Trainers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/schedule">
                  Schedule
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>

              {isauth == true  ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/chat">
                      Chat
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Link className="nav-link" to="/chat">
                  Chat
              </Link>
              <button className="search-btn" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}
