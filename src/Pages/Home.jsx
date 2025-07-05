import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import Nav from "../Components/Nav";

import "../Styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Nav />
      <section className="hero mt-4">
        <div className="container">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}>
            <SwiperSlide>
              <div className="row justify-content-center align-items-center for-men">
                <div className="col-md-7 col-12 d-flex flex-column justify-content-center">
                  <h2
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-dela="500">
                    Luxury Redefined
                  </h2>
                  <h1
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-dela="500">
                    Luxury Watch for Men
                  </h1>
                  <p
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-dela="500">
                    Elevate Your Style With the Exquisite Luxor Watch
                  </p>
                  <Link
                    className="btn"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-dela="500">
                    Order Now!
                  </Link>
                </div>
                <div
                  className="col-md-5 col-12 mt-5 d-flex flex-column justify-content-center align-items-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="1000">
                  <img src="/Images/Frame 474.png" alt="Watch for Men" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row justify-content-center align-items-center for-women">
                <div className="col-md-7 col-12 d-flex flex-column justify-content-center for-women">
                  <h2
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-dela="500">
                    Luxury Redefined
                  </h2>
                  <h1
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-dela="500">
                    Luxury Watch for Women
                  </h1>
                  <p
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-dela="500">
                    Feel your style and Flaunt Your Class with Luxor Watch
                  </p>
                  <Link
                    className="btn"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-dela="500">
                    Order Now!
                  </Link>
                </div>
                <div
                  className="col-md-5 col-12 mt-5 d-flex flex-column justify-content-center align-items-center"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="1000">
                  <img src="/Images/Frame 474.png" alt="Watch for Women" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="about pt-5 mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 pt-4">
              <h2>01 Luxor</h2>
              <p>
                Introducing Luxor, where craftsmanship meets prestige. Every
                Luxor timepiece is more than a watch — it's a statement of
                power, elegance, and impeccable taste. Engineered with precision
                and designed to inspire, Luxor blends timeless sophistication
                with modern minimalism to create watches worthy of those who
                lead.
              </p>
            </div>
            <div className="col-md-4 col-12 pt-4">
              <h2>02</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat harum dicta quae laboriosam inventore adipisci!
              </p>
            </div>
            <div className="col-md-4 col-12 pt-4">
              <h2>03</h2>
              <div className="d-flex">
                <FaEnvelope
                  fontSize="4.5rem"
                  color="#faf4e4"
                  className="ps-4 pe-4"
                />
                <p className="mt-4">luxuryluxor@gmail.com</p>
              </div>
              <div className="d-flex">
                <FaPhoneAlt
                  fontSize="4.5rem"
                  color="#faf4e4"
                  className="ps-4 pe-4"
                />
                <p>
                  2347 03 940 4909 <br />
                  2349 01 295 0002
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
