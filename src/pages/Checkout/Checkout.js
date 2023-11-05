import React from "react";
import "./Checkout.css";
import Subtotal from "../../components/Subtotal/Subtotal";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../contextApi/state/StateProvider";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img src="./images/amazon_ad.png" alt="" className="amazon_ad" />
        <div>
          <h2 className="checkout_title">Your shopping Basket</h2>
          {basket.map(({id,title,image,rating,price}, index) => (
            <CheckoutProduct key={id} id={id} title={title} image={image} rating={rating} price={price}/>
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
