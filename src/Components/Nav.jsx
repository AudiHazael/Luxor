import React from "react";
import { Link } from "react-router-dom";

import "../Styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import AOS from "aos";
import "aos/dist/aos.css";

function Nav() {
  return (
    <div>
      <nav className="navbar" data-aos="fade-in" data-aos-duration="1000">
        <div className="container d-flex">
          <Link className="navbar-brand" href="index.html">
            <img src="/Images/LUXOR-1 1.png" alt="" class="logo" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
