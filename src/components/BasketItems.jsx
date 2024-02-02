import React, { useContext } from 'react'
import Context from "../usecontext/Context"
import "./BasketItems.css";
function BasketItems() {
    const {shoppingBasketArray} = useContext(Context);
  return (
    <div className='basketitems'>
    {shoppingBasketArray.map((e)=>(
        <div className="product__info">
        <p>{e[0]}</p>
        <p className="product__price">
          <small>$</small>
          <small>{e[2]}</small>
        </p>
        <img className="product__image" src={e[1]} />
      </div>
    ))}
    </div>
  )
}

export default BasketItems