import { put, takeLatest } from "redux-saga/effects";
import * as actionType from "../actionTypes";

function* getProducts() {
  let products = yield fetch("http://localhost:4000/products");
  products = yield products.json();
  yield put({ type: actionType.SET_PRODUCT_LIST, data: products });
  console.log("getting pruductas from productSaga ", products);
}

function* filterProducts(data) {
  let filtered = yield fetch(`http://localhost:4000/products?q=${data.key}`);
  filtered = yield filtered.json();
  yield put({ type: actionType.SET_SEARCH_PRODUCT, data: filtered });
  console.log("filtering products from productSaga ", filtered);
}

function* productSaga() {
  yield takeLatest(actionType.PRODUCT_LIST, getProducts);
  yield takeLatest(actionType.SEARCH_PRODUCT, filterProducts);
}

export default productSaga;
