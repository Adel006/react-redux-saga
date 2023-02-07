import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchProduct } from "../redux/product/productAction";

function Header() {
  const result = useSelector((state) => state.cartData);

  const dispatch = useDispatch();

  console.log("cartData from header: ", result);

  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/">
        <span className="navbar-brand">Ecomm</span>
      </Link>
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search product by anything..."
          aria-label="Search"
          onChange={(e) => dispatch(searchProduct(e.target.value))}
        />
      </form>
      <Link to="/cart">
        <button type="button" className="btn btn-warning">
          <i
            className="fa fa-shopping-cart text-light mr-2 fa-lg"
            aria-hidden="true"
          ></i>
          <span className="badge badge-light">{result.length}</span>
        </button>
      </Link>
    </nav>
  );
}

export default Header;
