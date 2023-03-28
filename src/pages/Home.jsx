import React from "react";
import Announcement from "../componentes/Announcement";
import Categories from "../componentes/Categories";
import Navbar from "../componentes/Navbar";
import Newsletter from "../componentes/Newsletter";
import Products from "../componentes/Products";
import Slider from "../componentes/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
