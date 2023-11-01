import React from "react";
import "./Home.css";
import Product from "../../components/Product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="./images/amazon_baner.png"
          alt="Amazon Prime"
          className="home_image"
        />

        <div className="home_row">
          <Product />
          <Product />
        </div>

        <div className="home_row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home_row">
          <Product />
        </div>

      </div>
    </div>
  );
};

export default Home;
