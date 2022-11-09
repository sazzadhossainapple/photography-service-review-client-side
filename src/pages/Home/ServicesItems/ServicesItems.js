import React, { useEffect, useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import TitleLine from "../../../asserts/images/titleLine.webp";
import "../../Shared/Navbar/Navbar.css";
import ServicesItemsCard from "../../Shared/ServicesItemsCard/ServicesItemsCard";

const ServicesItems = () => {
  const [services, setServices] = useState([]);
  const [size, setSize] = useState(3);

  useEffect(() => {
    fetch(
      `https://flash-photography-point-server.vercel.app/services?size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
      });
  }, [size]);

  return (
    <section className="">
      <div className="lg:px-20 md:px-12 sm:px-8 px-6 py-20">
        <div className="flex flex-col w-full border-opacity-50">
          <span className="lg:block hidden">
            <div className="divider  text-2xl font-medium">
              Finding Photography Services
            </div>
          </span>

          <div className="text-xl font-medium lg:hidden flex justify-center">
            Finding Photography Services
          </div>
        </div>
        <div className="flex text-center justify-center flex-col">
          <div>
            <img className="inline-block my-2" src={TitleLine} alt="" />

            <h2 className="font-text1 text-2xl">
              Wedding Photography and Services
            </h2>
          </div>
        </div>
        <div className=" mt-9 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5 ">
          {services.map((service) => (
            <ServicesItemsCard
              key={service._id}
              service={service}
            ></ServicesItemsCard>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/services" className="">
            <button className="border px-8 flex items-center justify-center gap-1 py-3 font-medium border-[#ab1818] rounded-full bg-[#ab1818] hover:bg-[#9c1616] text-white">
              <p>See All |</p>
              <p>
                <AiOutlineDoubleRight />
              </p>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesItems;
