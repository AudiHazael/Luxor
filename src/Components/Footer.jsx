import React from "react";
import { Link } from "react-router-dom";

import "../Styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  return (
    <div>
      <section className=" container footer">
        <div className="copyright d-flex justify-content-center animate__animated animate__fadeIn  animate__slow animate__delay-3s">
          <p className="mt-3">
            2024 LUXOR | All Rights Reserved | Designed by{" "}
            <Link
              href="https://wa.link/8k0f7s"
              target="_blank"
              rel="nofollow"
              style={{ color: "rgb(145, 156, 166)" }}>
              Hazael Audi
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
