import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../contextApi/state/StateProvider";

const Header = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img src="./images/download.png" className="header_logo" alt="amazon" />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchIn" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login">
          <div className="header_option">
            <span className="header_optionsLineOne">Hello Guest</span>
            <span className="header_optionsLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionsLineOne">Returns</span>
          <span className="header_optionsLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionsLineOne">Your</span>
          <span className="header_optionsLineTwo">Prime</span>
        </div>

        <Link to="/checkout" className="header_basketLink">
          <div className="header_optionBasket">
            <ShoppingBasketIcon className="header_basketIcon" />
            <span className="header_optionsLineTwo header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
