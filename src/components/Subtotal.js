import React, { useContext } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import Context from "../usecontext/Context";
function Subtotal() {
  const { totalAmount, settotalAmount, totalItems, settotalItems } =
    useContext(Context);
  return (
    <div className="subtotal">
      Subtotal ({totalItems} Items) : $ {totalAmount}
    </div>
  );
}

export default Subtotal;
