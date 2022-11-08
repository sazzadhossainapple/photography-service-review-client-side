import React from "react";

import Image from "../../../asserts/images/wedding-couple-holding-hands.jpg";

const ServicesBanner = () => {
  return (
    <div
      className="hero lg:mb-20 md:mb-16 sm:mb-12 mb-8 "
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 py-32 text-5xl font-bold font-text">
            Services of Photography
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
