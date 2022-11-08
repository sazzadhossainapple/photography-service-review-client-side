import React from "react";
import Image from "../../../asserts/images/bannerImage.jpg";
import "../Navbar/Navbar.css";
import { AiOutlineDoubleRight } from "react-icons/ai";

const NabBanner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold font-text">
            Professional Storytellers of Weddings
          </h1>
          <p className="mb-5 ">
            Flash Photography Point we're the best photographer in the world for
            your different <br /> tasks and projects. Photographing your stories
            and memories for life.
          </p>
          <button className="border px-8 text-base py-3 font-medium hover:border-[#ab1818] rounded-full hover:bg-[#ab1818] bg-transparent text-white">
            <p className="flex items-center justify-center  gap-2 ">
              <span> Get Started </span>| <AiOutlineDoubleRight />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NabBanner;
