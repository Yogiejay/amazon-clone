import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../usecontext/Context";
import "./Header.css";

function Header() {
  const { username } = useContext(Context);
  const { totalItems } = useContext(Context);
  const [searchItem, setsearchItem] = useState();
  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Mango",
    "Strawberry",
    "Pineapple",
    "Watermelon",
    "Kiwi",
    "Peach",
  ];

  const handleSearch = () => {
    items.map((item) => {
      if (item === searchItem) {
        <li>item</li>;
      }
    });
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://assets.aboutamazon.com/88/05/0feec6ff47bab443d2c82944bb09/amazon-logo.png"
          alt="amazonLogo"
        />
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          value={searchItem}
          onChange={(e) => {
            setsearchItem(e.target.value);
          }}
        />
        <button className="header__searchIcon" onClick={handleSearch}>
          Serach
        </button>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            <span className="header__optionLineTwo">
              {username ? username : "Sign in"}
            </span>
          </Link>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <span className="header__optionLineOne">
              <button className="header__basketLogo">Basket</button>
            </span>
            <span className="header__optionLineTwo header__basketCount">
              {totalItems}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
