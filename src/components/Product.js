import React, { useContext } from "react";
import UserContext from "../usecontext/Context";
import "./Product.css";
function Product({ id, title, image, price, rating, count }) {
  let array = Array(rating).fill(1);
  const {
    totalAmount,
    settotalAmount,
    totalItems,
    settotalItems,
    setshoppingBasketArray,
    shoppingBasketArray,
  } = useContext(UserContext);
  const handleClick = () => {
    settotalAmount((prev) => {
      return prev + price;
    });
    settotalItems((prev) => {
      return prev + 1;
    });
    let flag = false;
    const updatedshoppingBasketArray = shoppingBasketArray.map((e) => {
      if (e[0] === id) {
        flag = true;
        e[5]++;
      }
      return e;
    });
    if (flag) {
      setshoppingBasketArray(updatedshoppingBasketArray);
    } else {
      setshoppingBasketArray([
        ...shoppingBasketArray,
        [id, title, image, price, rating, count],
      ]);
    }
    // setshoppingBasketArray((prevVal) => {
    //   let flag = false;
    //   const updatedshoppingBasketArray = prevVal.map((e)=>{
    //     if (e[0] === id){
    //       flag = true;

    //     }
    //   })

    //   }
    //   return [...prevVal, [id,title, image, price, rating, count]];
    // });
  };
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
      <button onClick={handleClick}>Add to Basket</button>
    </div>
  );
}

export default Product;
