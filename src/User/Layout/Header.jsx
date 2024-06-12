import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { CartContext } from "../../Context/cartContext";
import UserContext from "../../Context/userContext";
import ShoppingCart from "./Cart/ShoppingCart";

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "50px",
};
function Header() {
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { user } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);
  const handleShowSearch = () => setShowSearch(true);
  const handleCloseSearch = () => setShowSearch(false);
  useEffect(() => {
    if (cart) {
      const sum = cart.reduce(
        (acc, item) => acc + item.productPrice * item.quantity,
        0
      );
      setTotal(sum);
    }
  },[cart]);
  return (
    <div>
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <Link to={"/user"}>
              <a className="navbar-brand"> Shopper. </a>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown">
                  <Link to={"/user"}>
                    <a className="nav-link">Trang chủ</a>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to={`/user/shop`} className="nav-link">
                    Cửa hàng
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to={`/user/about`} className="nav-link">
                    Về chúng tôi
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`/user/blog`} className="nav-link">
                    Tài liệu
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav flex-row">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#modalSearch"
                    onClick={handleShowSearch}
                  >
                    <i className="fe fe-search"></i>
                  </a>
                </li>
                <li className="nav-item ms-lg-n4">
                  {user ? (
                    <Link to={"/user/account-orders"}>
                      <a className="nav-link">
                        <i className="fe fe-user"></i>
                      </a>
                    </Link>
                  ) : (
                    <Link to={"./login"}>
                      <a className="nav-link">
                        <i className="fe fe-user"></i>
                      </a>
                    </Link>
                  )}
                </li>
                <li className="nav-item ms-lg-n4">
                  {user ? (
                    <Link to={"/user/account-wishlist"}>
                      <a className="nav-link">
                        <i className="fe fe-heart"></i>
                      </a>{" "}
                    </Link>
                  ) : (
                    <Link to={"./login"}>
                      {" "}
                      <a className="nav-link">
                        <i className="fe fe-heart"></i>
                      </a>
                    </Link>
                  )}
                </li>
                <li className="nav-item ms-lg-n4">
                  <a
                    className="nav-link"
                    href="#modalShoppingCart"
                    onClick={handleShowCart}
                  >
                    <span data-cart-items={cart.length}>
                      <i className="fe fe-shopping-cart"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <Offcanvas
                show={showCart}
                onHide={handleCloseCart}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    {user ? (
                      <div> Giỏ hàng của bạn ({cart.length})</div>
                    ) : (
                      <div>Vui lòng đăng nhập trước</div>
                    )}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ul className="list-group list-group-lg list-group-flush">
                    {cart &&
                      cart.map((item) => (
                        <ShoppingCart key={item.productId} detailCarts={item} />
                      ))}
                  </ul>
                </Offcanvas.Body>
                {cart.length > 0 && (
                  <div className="offcanvas-footer justify-between lh-fixed fs-sm bg-light mt-auto w-100">
                    <strong>Tổng tiền</strong>
                    <strong className="ms-auto">${total}</strong>
                  </div>
                )}
                <div className="offcanvas-body">
                  {cart.length > 0 && cart && (
                    <>
                      <Link
                        className="btn w-100 btn-dark"
                        to="checkout"
                        style={buttonStyle}
                      >
                        <span className="">Thanh toán</span>
                      </Link>
                      <Link
                        to="cart"
                        className="btn w-100 btn-outline-dark"
                        style={buttonStyle}
                      >
                        <span className="">Xem giỏ hàng</span>
                      </Link>
                    </>
                  )}
                </div>
              </Offcanvas>
              <Offcanvas
                show={showSearch}
                onHide={handleCloseSearch}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <div className="offcanvas-header lh-fixed fs-lg">
                      <strong className="mx-auto">Tìm sản phẩm</strong>
                    </div>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>{/* <SearchProd /> */}</Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </nav>
      </Fragment>
    </div>
  );
}

export default Header;
