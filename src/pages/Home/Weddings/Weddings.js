import React from "react";
import { GiClover, GiLoveLetter } from "react-icons/gi";
import TitleLine from "../../../asserts/images/titleLine.webp";
import Image from "../../../asserts/images/wedding.jpg";

const Weddings = () => {
  return (
    <div className="lg:mb-20  md:mb-16 sm:mb-12 mb-8 lg:px-20 md:px-12 sm:px-8 px-6">
      <div className="flex text-center justify-center flex-col mb-10">
        <h1 className="text-2xl font-medium">Photography</h1>
        <div>
          <img className="inline-block my-2" src={TitleLine} alt="" />

          <h2 className="font-text1 text-2xl">Wedding Photography</h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-5">
        <div className="flex justify-center items-center text-center">
          <div>
            <div className="flex justify-center  ">
              <GiLoveLetter className="text-9xl rounded-full p-7 mb-3 bg-slate-200 "></GiLoveLetter>
            </div>

            <h1 className="text-2xl font-medium text-gray-700 my-6">
              Weddings
            </h1>
            <p className="text-slate-500">
              I shoot both film & digital and I craft my images based on natural
              light and the classic film emulsion and image composition.
            </p>
          </div>
        </div>
        <div>
          <img src={Image} alt="" />
        </div>
        <div className="flex justify-center items-center text-center">
          <div>
            <div className="flex justify-center  ">
              <GiClover className="text-9xl rounded-full p-7 mb-3 bg-slate-200 "></GiClover>
            </div>

            <h1 className="text-2xl font-medium text-gray-700 my-6">
              Elopements
            </h1>
            <p className="text-slate-500">
              Through the years I crafted my own formula that allows me to
              create inspiring, beautifully curated images for all my brides.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weddings;
