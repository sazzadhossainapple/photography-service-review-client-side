import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

import { Link } from "react-router-dom";

const ServicesItemsCard = ({ service }) => {
  const { _id, name, description, image, price } = service;

  return (
    <div
      className="border-2 h-full flex flex-col justify-center hover:border-[#ab1818] rounded-lg 
      bg-slate-100 "
    >
      <div className="flex justify-center px-5">
        <PhotoProvider>
          <PhotoView src={image}>
            <img
              className="rounded-full mt-10 mb-16 w-80 h-80"
              src={image}
              alt=""
            />
          </PhotoView>
        </PhotoProvider>
      </div>

      <div className="text-center h-full px-5 bg-[#1e2427]  text-slate-200 rounded-b-lg">
        <div className="-mt-10">
          <div className="flex justify-center gap-6 my-4 ">
            <span className="btn rounded-full px-6">Price: ${price}</span>
          </div>
          <h1 className="text-xl font-medium mt-6">{name}</h1>
          <p className="mb-10 mt-2">
            {description.length > 100
              ? `${description.slice(0, 100)} .....`
              : description}
          </p>
        </div>

        <Link
          to={`/service/${_id}`}
          className="border mb-8   w-full btn  text-base font-medium border-[#ab1818] hover:border-[#ab1818] rounded-full bg-transparent hover:bg-[#9c1616] text-white"
        >
          view details
        </Link>
      </div>
    </div>
  );
};

export default ServicesItemsCard;
