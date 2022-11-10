import React, { useEffect, useState } from "react";
import ServicesBanner from "../Shared/ServicesBanner/ServicesBanner";
import TitleLine from "../../asserts/images/titleLine.webp";
import ServicesItemsCard from "../Shared/ServicesItemsCard/ServicesItemsCard";
import Spinner from "../Shared/Spinner/Spinner";
import useTitle from "../../hooks/useTitle";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useTitle("Services");

  useEffect(() => {
    fetch("https://flash-photography-point-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
        setLoading(false);
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
      {loading ? (
        <>
          <Spinner></Spinner>
        </>
      ) : (
        <>
          <div className="lg:px-20 md:px-12 sm:px-8 px-6 lg:py-28 md:py-16 sm:py-12 py-8">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5 ">
              {services.map((service) => (
                <ServicesItemsCard key={service._id} service={service} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
