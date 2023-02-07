import * as actionType from "../actionTypes";

export const productData = (data = [], action) => {
  switch (action.type) {
    case actionType.PRODUCT_LIST:
      console.log("loading product list..... ");
      return data;
    case actionType.SET_PRODUCT_LIST:
      console.log("productList condition ", action);
      return action.data;
    case actionType.SEARCH_PRODUCT:
      console.log("loading searched products..... ");
      return data;
    case actionType.SET_SEARCH_PRODUCT:
      return action.data;
    default:
      console.log("no action is called from product reducer");
      return data;
  }
};
