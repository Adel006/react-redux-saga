import { combineReducers } from "redux";
import { cartData } from "./cart/cartReducer";
import { productData } from "./product/productReducer";

export default combineReducers({ cartData, productData });
