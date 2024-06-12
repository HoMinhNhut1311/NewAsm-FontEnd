import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { useAuth } from "../../../contexts/AuthContext";
import { getCart } from "../../../api/CartAPI";
import ShoppingCart from "./components/ShoppingCart";
import { useDetailCart } from "../../../contexts/DetailCartContext";
import { useCart } from "../../../contexts/CartContext";
import SearchProd from "./components/SearchProd";

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "50px",
};
function Header (){
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [total, setTotal] = useState(0);
  const { cart, setCart } = useCart();
  const { isLoggedIn } = useAuth();
  const { detailCart, setDetailCart } = useDetailCart();
  const { auth } = useAuth();
  useEffect(() => {
    if (auth) {
      getCart(auth?.userName).then((cart) => {
        setCart(cart);
        if (cart) {
          setDetailCart(cart?.detailCart);
        }
      });
    }
  }, [detailCart, cart]);
  useEffect(() => {
    if (detailCart) {
      const sum = detailCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotal(sum);
    }
  }, [detailCart]);

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);
  const handleShowSearch = () => setShowSearch(true);
  const handleCloseSearch = () => setShowSearch(false);
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
                {/* <li className="nav-item dropdown">
                  <a className="nav-link"  href="#">
                    Blog
                  </a>
                </li> */}
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
                  {isLoggedIn ? (
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
                  {isLoggedIn ? (
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
                    <span data-cart-items={detailCart.length}>
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
                    {isLoggedIn ? (
                      <div> Giỏ hàng của bạn ({detailCart.length})</div>
                    ) : (
                      <div>Vui lòng đăng nhập trước</div>
                    )}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ul className="list-group list-group-lg list-group-flush">
                    {detailCart &&
                      detailCart.map((item) => (
                        <ShoppingCart
                          key={item.detailCartID}
                          detailCarts={item}
                        />
                      ))}
                  </ul>
                </Offcanvas.Body>
                <div className="offcanvas-footer justify-between lh-fixed fs-sm bg-light mt-auto w-100">
                  <strong>Tổng tiền</strong>
                  <strong className="ms-auto">${total}</strong>
                </div>
                <div className="offcanvas-body">
                  {detailCart.length > 0 && detailCart && (
                    <>
                      <Link
                        className="btn w-100 btn-dark"
                        to="/user/checkout"
                        style={buttonStyle}
                      >
                        <span className="">Thanh toán</span>
                      </Link>
                      <Link
                        to="/user/cart"
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
                <Offcanvas.Body>
                  <SearchProd />
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </nav>
      </Fragment>
    </div>
  );
}

export default Header;
