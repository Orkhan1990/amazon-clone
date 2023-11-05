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
          <Product
            id="405623"
            title="The lean startup"
            price={29.99}
            rating={5}
            image="./images/theleanbook.jpeg"
          />
          <Product
            id="415623"
            title="On your Apple Watch, open the Settings app , then go to General > About. The items you can view include: Name. Software version. Model number. Serial number.
            "
            price={200.99}
            rating={6}
            image="./images/applewatch.jpeg"
          />
        </div>

        <div className="home_row">
          <Product
            id="425623"
            title="MacBook Pro with M3, M3 Pro, and M3 Max chips. Up to 22 hours of battery life. The world's best laptop display. Now in a new color: Space Black."
            price={2500.3}
            rating={5}
            image="./images/mackbook.jpeg"
          />
          <Product
            id="435623"
            title="iPhone 15 Pro Technical Specifications · Pro camera system · 48MP Main: 24 mm, ƒ/1.78 aperture, second‑generation sensor‑shift optical image stabilization, 100% "
            price={1500}
            rating={7}
            image="./images/iphone15Pro.jpg"
          />
          <Product
            id="445623"
            title="Premium speakers from JBL such as wireless bluetooth speakers, Android & iOS headphones, soundbars, subwoofers, home theater systems, computer speakers, "
            price={350}
            rating={8}
            image="./images/jbl.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="455623"
            title="Model Code: Check the model type of your device, which includes information like the country of origin and screen size. · Serial Number: See your unique ..."
            price={350}
            rating={9}
            image="./images/tv.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
