import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <hr />
          {/* <BasketItems/> */}
          {/* <BasketItems/> */}
          {/* <BasketItems/> */}
        </div>
      </div>
      <div className="checkout__right">
        {/* <p>
          Subtotal (2 items) : <strong>$400.00</strong>
        </p> */}
        <Subtotal />
        <label>
          <input type="checkbox" name="myCheckbox" /> This Order Contains gift
        </label>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
