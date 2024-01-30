import React from "react";
import "./Product.css";
function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <small>{price}</small>
        </p>
        <div className="product__rating">
          <p>⭐️</p>
          <p>⭐️</p>
          <p>⭐️</p>
        </div>
        <img className="product__image" src={image} />
      </div>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
