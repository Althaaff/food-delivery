import { AddRounded, RemoveRounded } from '@mui/icons-material'
import { useEffect, useState } from 'react';
import { useContextValue } from './redux/StateProvider';
import { type } from '@testing-library/user-event/dist/type';
import { actionType } from './redux/reducer';
// import React, { useEffect } from 'react'
let cartItems  = [];

const CartItem = ({name, price, imgSrc, itemId }) => {
  const [qty, setQty] = useState(1);
  const [{cart}, dispatch] = useContextValue();
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));

  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty])

  const updateQuantity = (action, id) => {
    if(action === 'add'){
      setQty(qty + 1);
    }else {
      if (qty === 1) {
        cartItems.pop(id);
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems,
        })
      }
      setQty(qty - 1);
    }
  };

  return (
    <div className='cartItem'>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>

      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
         <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded className='itemRemove' onClick={() => updateQuantity('remove', itemId)} />

            <AddRounded className='itemAdd' onClick={() => updateQuantity('add', itemId)} />
          </div>
        </div>
      </div>

          <p className='itemPrice'>
            <span className='dolorSign'>$ </span>
            <span className='itemPriceValue'>{itemPrice}</span>
          </p>
       </div>
  )
}

export default CartItem
