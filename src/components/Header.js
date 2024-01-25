import React from "react";
import "./Header.css";
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        /* src="https://economictimes.indiatimes.com/thumb/msid-59738992,width-640,height-480,resizemode-75,imgsize-25499/amazon.jpg" */
        /*src="https://w7.pngwing.com/pngs/288/368/png-transparent-red-and-white-shop-illustration-text-brand-illustration-shop-text-retail-rectangle.png" */
        src="https://assets.aboutamazon.com/88/05/0feec6ff47bab443d2c82944bb09/amazon-logo.png"
        alt="amazonLogo"
      />
      <div className="header__search">
        <input className="header_searchInput" type="text" />
        {/* Logo */}
        {/* <SearchRoundedIcon className="header_searchInput" /> */}
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Basket</span>
          <span className="header__optionLineTwo">Item Count</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
