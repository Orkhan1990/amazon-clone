import React from "react";
import "./Product.css";

const Product = ({ title, price, rate, image }) => {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
             <p>*</p>
             <p>*</p>
        </div>
        <img src={image} alt=""/>
      </div>
        <button>Add to Basket</button>
    </div>
  );
};

export default Product;
