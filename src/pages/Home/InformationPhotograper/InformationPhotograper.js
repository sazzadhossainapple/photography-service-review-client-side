import React from "react";
import TitleLine from "../../../asserts/images/titleLine.webp";

const InformationPhotograper = () => {
  return (
    <div className="lg:px-20 md:px-12 sm:px-8 px-6 py-20">
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider text-2xl font-medium">
          Finding Photography Services
        </div>
      </div>
      <div className="flex text-center justify-center flex-col">
        <div>
          <img className="inline-block my-2" src={TitleLine} alt="" />

          <h2 className="font-text1 text-2xl">Why selection of my</h2>
        </div>
      </div>
    </div>
  );
};

export default InformationPhotograper;
