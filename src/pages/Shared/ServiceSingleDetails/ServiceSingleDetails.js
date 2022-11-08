import React from "react";

const ServiceSingleDetails = ({ serviceDetails }) => {
  const { name, image, price, description } = serviceDetails.data;

  return (
    <div>
      <div>
        <img className="w-full h-96 object-cover" src={image} alt="" />
      </div>
      <div className="my-12">
        <div className="mb-4 flex lg:flex-row md:flex-col  sm:flex-col flex-col gap-4  justify-between">
          <h1 className="text-2xl ">{name}</h1>
          <p className="text-[#ab1818] font-medium">Price: {price}</p>
        </div>

        <p className="text-slate-700">{description}</p>
      </div>
    </div>
  );
};

export default ServiceSingleDetails;
