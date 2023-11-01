import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src="./images/download.png" className="header_logo" alt="amazon" />
      <div className="header_search">
        <input type="text" className="header_searchIn" />
        <SearchIcon className="header_searchIcon"/>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionsLineOne">Hello Guest</span>
          <span className="header_optionsLineTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionsLineOne">Returns</span>
          <span className="header_optionsLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionsLineOne">Your</span>
          <span className="header_optionsLineTwo">Prime</span>
        </div>

        <div className="header_optionBasket">
          <ShoppingBasketIcon className="header_basketIcon" />
          <span className="header_optionsLineTwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
