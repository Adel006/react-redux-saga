import * as actions from "../actionTypes";

export const addToCart = (data) => {
  return {
    type: actions.ADD_TO_CART,
    data,
  };
};

export const removeFromCart = (id) => {
  return {
    type: actions.REMOVE_FROM_CART,
    data: id,
  };
};

export const emptyCart = () => {
  return {
    type: actions.EMPTY_CART,
  };
};
