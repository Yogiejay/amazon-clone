import React from "react";
import "./Product.css";
function Product({ title, image, price, rating }) {
  let array = Array(rating).fill(1);
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <small>{price}</small>
        </p>
        <div className="product__rating">
          {array.map(() => {
            return <p>⭐️</p>;
          })}
        </div>
        <img className="product__image" src={image} />
      </div>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
