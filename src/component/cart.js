import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const cartData = useSelector((state) => state.cartData);

  const amount =
    cartData.length > 0
      ? cartData.map((item) => item.price).reduce((prev, next) => prev + next)
      : 0;

  const total = amount - amount * 0.2;

  return (
    <div className="container mt-3">
      <h5>Wecome to cart page!</h5>

      {cartData.length === 0 && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Your cart is empty.
          <Link to="/"> ckeck out our products now</Link>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      {cartData.length > 0 && (
        <div className="row">
          <div className="col-md-9">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Category</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.price} Dhs</td>
                      <td>{item.category}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-md-3">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Amount
                <span className="badge badge-warning badge-pill">{amount}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Discount
                <span className="badge badge-warning badge-pill">20%</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Total
                <span className="badge badge-warning badge-pill">{total}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
