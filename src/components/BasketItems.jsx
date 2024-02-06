import React, { useContext, useState } from 'react'
import Context from "../usecontext/Context"
import "./BasketItems.css";
function BasketItems() {
  const [itemCount , setitemCount] = useState(1);
    const {shoppingBasketArray} = useContext(Context);
    // const handleDecrement = (e)=>{setitemCount(itemCount-1)}
    // const handleIncrement = (e)=>{setitemCount(itemCount+1)}
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
        <div className="basketproductCount">
        <button  className='minusButton' onClick={()=>{setitemCount(itemCount-1)}}>-</button>
        <p>{itemCount}</p>
        <button className='plusButton' onClick={()=>{setitemCount(itemCount+1)}}>+</button>
        </div>
      </div>
    ))}
    </div>
  )
}

export default BasketItems