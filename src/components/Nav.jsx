import React, { useState } from "react";
import cross from "../assets/images/cross.svg";

const Nav = () => {
  const [nav, setnav] = useState(true);
  if (nav) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }

  return (
    <div>
      <div className="main_bg">
        <div className="my_container h-100">
          <div className="d-flex align-items-center justify-content-between pt-4">
            <div className="logo_size">
              <img
                className="w-100"
                src="https://logo.com/image-cdn/images/kts928pd/production/21799ab732a7ac3736722a93f4c28cfae4266fc2-500x375.webp?w=1080&q=72"
                alt=""
              />
            </div>
            <ul
              className={
                nav
                  ? "ps-0 top_m100 mb-0 d-flex gap-5 align-items-center  flex-lg-row flex-column mobile_nav"
                  : "ps-0 top_0 mb-0 d-flex  gap-5 align-items-center  flex-lg-row flex-column mobile_nav"
              }
            >
              <li>
                <a className="ff_pop fs_sm text-white fw-normal" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="ff_pop fs_sm text-white fw-normal" href="#">
                  About{" "}
                </a>
              </li>
              <li>
                <a className="ff_pop fs_sm text-white fw-normal" href="#">
                  Service
                </a>
              </li>
              <li>
                <a className="ff_pop fs_sm text-white fw-normal" href="#">
                  Gallery
                </a>
              </li>
              <li>
                <a className="ff_pop fs_sm text-white fw-normal" href="#">
                  Testimonial
                </a>
              </li>
              <button className="contact_btn ff_pop fs_sm text-white fw-normal d-lg-none d-block">
                Contact
              </button>
              <div className="cross_size d-lg-none d-block">
                <img
                  onClick={() => {
                    setnav(true);
                  }}
                  className="w-100"
                  src={cross}
                  alt="cross"
                />
              </div>
            </ul>
            <button className="contact_btn ff_pop fs_sm text-white fw-normal d-lg-block d-none">
              Contact
            </button>
            <div
              className="d-lg-none d-block"
              onClick={() => {
                setnav(false);
              }}
            >
              <div className="navicon"></div>
              <div className="navicon2"></div>
              <div className="navicon3"></div>
            </div>
          </div>
          <div className="h_calc pt-5 mt-5 ">
            <h1 className="ff_pop fs_xxl text-white pt-5 mt-5 text-center">
              WELCOME TO CAR RENTAL
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
