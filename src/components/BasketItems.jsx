import React, { useContext, useState } from 'react'
import Context from "../usecontext/Context"
import "./BasketItems.css";
function BasketItems() {
  const [itemCount , setitemCount] = useState(1);
    const {shoppingBasketArray,setshoppingBasketArray,totalAmount, settotalAmount, totalItems, settotalItems} = useContext(Context);
    const handlePlus = (id)=>{
      setshoppingBasketArray(shoppingBasketArray.map((e)=>{
          if(e[0] === id){
            e[5]++
            settotalItems((prev)=>{ return prev + 1});
            settotalAmount((prev)=>{return prev + e[3]});
          }
          return e;
      }));
    };
    const handleMinus = (id)=>{
      setshoppingBasketArray(shoppingBasketArray.map((e)=>{
        if(e[0] === id){
          if (e[5] === 0){
            e[5] = 0;
          }
          else{
            e[5]--
            settotalItems((prev)=>{ return prev - 1});
            settotalAmount((prev)=>{return prev - e[3]});
          }
          
          
        }
        return e;
    }));
    };

  return (
    <div className='basketitems'>
    {shoppingBasketArray.map((e)=>(
        <div className="product__info">
        <p>{e[1]}</p>
        <p className="product__price">
          <small>$</small>
          <small>{e[3]}</small>
        </p>
        <img className="product__image" src={e[2]} />
        <div className="basketproductCount">
        <button  className='minusButton' onClick={()=>{handleMinus(e[0])}/*()=>{return e[5]-1}*/}>-</button>
        <p>{`Qty : ${e[5]}`}</p>
        <button className='plusButton' onClick={()=>{handlePlus(e[0])}/*()=>{return e[5]+1}*/}>+</button>
        </div>
      </div>
    ))}
    </div>
  )
}

export default BasketItems