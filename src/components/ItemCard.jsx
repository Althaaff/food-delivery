import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Items } from "./Data";
import { useContextValue } from "./redux/StateProvider";
import { actionType } from "./redux/reducer";
let cartData = [];

const ItemCard = ({ imgSrc, name, ratings, price, itemId }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
  const [isCart, setIsCart] = useState(null);
  const [{}, dispatch] = useContextValue();

  useEffect(() => {
   if (isCart) {
    cartData.push(isCart);
    dispatch({
      type: actionType.SET_CART,
      cart: cartData
    })
    console.log(cartData);
   }
  }, [isCart])

  const handleClick = (value) => {
   setCurrentValue(value);
  }

  return (
    <div className="itemCard">
      <div
        className={`isFavourite ${isFavourite ? "active" : ""}`}
        onClick={() => setIsFavourite(!isFavourite)}
      >
        <Favorite />
      </div>

      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>

      <div className="itemContent" id={itemId}>
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((el, i) => (
              <i key={i} className={`rating ${currentValue > i ? 'orange' : 'gray'}`} onClick={() => handleClick(i + 1)}>
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>$</span>
              {price}
            </h3>
          </div>
          <i className="addToCart" onClick={() => setIsCart(Items.find((n) => n.id === itemId))}>
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
