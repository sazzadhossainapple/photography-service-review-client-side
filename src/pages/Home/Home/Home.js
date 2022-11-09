import React from "react";
import NabBanner from "../../Shared/NabBanner/NabBanner";
import BandleAndSave from "../BandleAndSave/BandleAndSave";

import ServicesItems from "../ServicesItems/ServicesItems";
import Weddings from "../Weddings/Weddings";

const Home = () => {
  return (
    <div>
      <NabBanner />
      <ServicesItems />
      <BandleAndSave />
      <Weddings />
    </div>
  );
};

export default Home;
