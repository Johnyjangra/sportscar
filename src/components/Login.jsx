import React from "react";
import Glogo from "../assets/images/glogo.svg";
import Fb from "../assets/images/fb.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="log_bg">
      <div className="my_container h-100  d-flex align-items-center justify-content-center">
        <div className="log_container w-100  ">
          <div className="d-flex h-100 box_shadow rdc flex-md-row flex-column-reverse align-items-md-start align-items-center">
            <div className="mx_50 mx_100 bg-white py-5 rdc h-100  mt-md-0 mt-4">
              <h2 className="ff_pop fs_lg text-center fw-semibold pt-4 mb-0">
                Sign in
              </h2>
              <div className="d-flex justify-content-center gap-3 pt-3">
                <div className="media_logo d-flex justify-content-center align-items-center">
                  <img className="logo_img" src={Fb} alt="" />
                </div>
                <div className="media_logo d-flex justify-content-center align-items-center">
                  <div>
                    <img className="logo_img2" src={Glogo} alt="" />
                  </div>
                </div>
                <div className="media_logo d-flex justify-content-center align-items-center">
                  <div className="in_logo">in</div>
                </div>
              </div>
              <p className="text-center ff_pop fs_xsm clr_darkgray pt-3 mb-0">
                or use your account
              </p>
              <div className="text-center pt-4">
                <input
                  className="input_style py-1 px-2 "
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  id=""
                />
              </div>
              <div className="text-center pt-3">
                <input
                  className="input_style py-1 px-2"
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  id=""
                />
              </div>
              <div className="text-center pt-4">
                <a className="ff_pop fs_sm clr_darkgray fw-normal" href="#">
                  Forgot your password?
                </a>
              </div>
              <div className="text-center pt-3">
                <button className="sing_btn ff_pop fs_xsm fw-semibold text-white">
                  Sign in
                </button>
              </div>
            </div>
            <div className="transprnt_box  d-flex align-items-center justify-content-center mx_50  h-100">
              <div className="text-center">
                <h2 className="ff_pop fs_lg text-white ">Hellow, Friends</h2>
                <p className="w_60 mx-auto text-center ff_pop text-white fs_xsm ">
                  Enter your personal details and start journey with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
