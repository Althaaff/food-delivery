//own reducer :

export const initialState = {
  cart: null,
  total: null,
}

export const actionType = {
  SET_CART: "SET_CART",
  SET_TOTAL: "SET_TOTAL"
}
console.log('action type: ', actionType);


export const reducer = (state, action) => {
  console.log('action: ', action);

  switch(action.type) {
    case actionType.SET_CART: 
     return {
      ...state,
      cart: action.cart,
     }

     case actionType.SET_TOTAL:
      return {
       ...state,
       total: action.total,
      }

      default: 
      return state;
  }
}


export default reducer;