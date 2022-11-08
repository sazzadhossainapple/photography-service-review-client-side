import React, { useEffect, useState } from "react";
import ServicesBanner from "../Shared/ServicesBanner/ServicesBanner";
import TitleLine from "../../asserts/images/titleLine.webp";
import ServicesItemsCard from "../Shared/ServicesItemsCard/ServicesItemsCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setServices(data.data);
      });
  }, []);

  return (
    <div>
      <ServicesBanner />

      <div className="flex text-center justify-center flex-col">
        <div>
          <h2 className="text-2xl font-medium">All Services</h2>
          <img className="inline-block mt-1" src={TitleLine} alt="" />
        </div>
      </div>
      <div className="lg:px-20 md:px-12 sm:px-8 px-6 lg:py-20 md:py-16 sm:py-12 py-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5 ">
          {services.map((service) => (
            <ServicesItemsCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
