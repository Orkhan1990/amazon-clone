import React from "react";
import "./Product.css";
import { useStateValue } from "../../contextApi/state/StateProvider";

const Product = ({ id, title, price, rating, image }) => {
  const [{basket}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
        <img src={image} alt="" className="product_img" />
      </div>
      <button className="product_button" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
