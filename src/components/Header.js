import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://assets.aboutamazon.com/88/05/0feec6ff47bab443d2c82944bb09/amazon-logo.png"
        alt="amazonLogo"
      />
      <div className="header__search">
        <input className="header_searchInput" type="text" />
        <button className="header_searchIcon">Serach</button>
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
