import * as actionType from "../actionTypes";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      console.log("addToCart condition ", action);
      return [...data, action.data];
    case actionType.REMOVE_FROM_CART:
      console.log("removeFromCart condition ", action);
      return [...data.filter((item) => item.id !== action.data )];
    case actionType.EMPTY_CART:
      console.log("emptyCart condition ", action);
      return [];
    default:
      console.log("no action is called from cart reducer");
      return data;
  }
};
