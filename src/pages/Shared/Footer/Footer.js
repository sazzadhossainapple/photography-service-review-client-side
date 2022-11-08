import React from "react";
import logo from "../../../asserts/images/logo.png";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-[#ab1818] text-primary-content">
      <div>
        <img src={logo} alt="" />
        <p className="font-bold">
          <span className="font-text text-xl ">Flash Photography Point.</span>
          <br />
          <span className="inline-block mt-2">
            Providing reliable photography since 2020
          </span>
        </p>
        <div className="my-3">
          <p className="mb-4">SOCIAL MEDIA</p>
          <div className="grid grid-flow-col gap-4">
            <Link>
              <FaFacebook className="text-xl"></FaFacebook>
            </Link>
            <Link>
              <FaTwitter className="text-xl"></FaTwitter>
            </Link>
            <Link>
              <FaYoutube className="text-xl"></FaYoutube>
            </Link>
          </div>
        </div>
        <hr className="border-1 text-white w-40 mb-2" />
        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
