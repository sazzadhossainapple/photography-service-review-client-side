import React, { useEffect, useState } from "react";

const ServicesItems = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services?size=3")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
      });
  }, []);

  return <div></div>;
};

export default ServicesItems;
