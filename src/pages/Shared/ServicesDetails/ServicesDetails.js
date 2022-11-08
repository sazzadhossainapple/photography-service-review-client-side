import React from "react";
import { useLoaderData } from "react-router-dom";
import ReviewPage from "../ReviewPage/ReviewPage";
import ServiceSingleDetails from "../ServiceSingleDetails/ServiceSingleDetails";

const ServicesDetails = () => {
  const serviceDetails = useLoaderData();

  return (
    <div className="lg:px-20 md:px-12 sm:px-8 px-6  py-20">
      <ServiceSingleDetails serviceDetails={serviceDetails} />
      <ReviewPage serviceDetails={serviceDetails} />
    </div>
  );
};

export default ServicesDetails;
