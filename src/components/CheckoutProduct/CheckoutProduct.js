import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../contextApi/state/StateProvider";

const CheckoutProduct = ({id, title, image, rating, price }) => {
    const[{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
         dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
         })
    }
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct_image" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>*</span>
            ))}
        </div>
        <button className="checkoutProduct_button" onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
