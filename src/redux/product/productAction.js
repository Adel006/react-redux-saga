import * as actions from "../actionTypes";

export const productList = () => {
  return {
    type: actions.PRODUCT_LIST,
  };
};

export const searchProduct = (key) => {
  return {
    type: actions.SEARCH_PRODUCT,
    key,
  };
};
