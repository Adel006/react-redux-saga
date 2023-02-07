import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../redux/cart/cartAction";
import { productList } from "../redux/product/productAction";

function Main() {
  const products = useSelector((state) => state.productData);
  console.log("productData from main: ", products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div className="container mt-3">
      <div className="text-center">
        <button className="btn btn-warning" onClick={() => dispatch(emptyCart())}>
          EMPTY CART
        </button>
      </div>
      <div className="products-container">
        {products.map((product, index) => {
          return (
            <div className="card product-item" key={index}>
              <img
                className="card-img-top"
                src={product.photo}
                alt="Product Photo"
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.price} -
                  <span className="font-weight-light"> {product.category}</span>
                </p>
              </div>
              <div className="card-footer">
                <a
                  href="#"
                  className="d-inline mr-2 btn btn-success"
                  onClick={() => dispatch(addToCart(product))}
                >
                  <i className="fa fa-cart-plus" aria-hidden="true"></i>
                </a>
                <a
                  href="#"
                  className="d-inline btn btn-danger"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  <i className="fa fa-minus" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
