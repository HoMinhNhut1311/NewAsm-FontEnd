import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../Context/cartContext";
import UserContext from "../../../Context/userContext";
import Item from "./Item/Item";
import { saveCart } from "../../../Data/Cart/CartApi";
import Swal from "sweetalert2";

function PlaceOrder() {
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (cart && cart.length > 0) {
      // Guard against empty or undefined cart
      const sum = cart.reduce(
        (acc, item) => acc + item.productPrice * item.quantity,
        0
      );
      setTotal(sum);
    } else {
      setTotal(0);
    }
  }, [cart]);

  const handlePlaceOrder = () => {
    setIsLoading(true);
    const currentDate = new Date().toISOString().split("T")[0];
    const productIds = cart.map((item) => item.productId);
    const data =
      '{"userId":"239b6125-39bb-435b-9b58-2a3473f44d11","profileId":"2a965978-10e2-460a-9e30-19c0b6b4d144","userName":"user","password":"1","fullName":null,"sex":false,"email":null,"phone":null,"birth":null,"roleNames":["USER"],"mediaFile":null}';
    const parts = data.split(",");
    const userNamePart = parts[2];
    const userName = userNamePart.split(":")[1].replace(/"/g, "").trim();
    setTimeout(() => {
      setIsLoading(false);
      const order = {
        localDate: currentDate,
        status: false,
        username: userName,
        productIds: productIds,
      };
      Swal.fire({
        title: "Success",
        text: `Đã thêm sản phẩm vào giỏ hàng`,
        icon: "success",
      }).then(() => {
        saveCart(order);
      });
     
    }, 2000);
  };

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <svg viewBox="0 0 240 240" height="240" width="240" className="pl">
          <circle
            strokeLinecap="round"
            strokeDashoffset="-330"
            strokeDasharray="0 660"
            strokeWidth="20"
            stroke="#000"
            fill="none"
            r="105"
            cy="120"
            cx="120"
            className="pl__ring pl__ring--a"
          ></circle>
          <circle
            strokeLinecap="round"
            strokeDashoffset="-110"
            strokeDasharray="0 220"
            strokeWidth="20"
            stroke="#000"
            fill="none"
            r="35"
            cy="120"
            cx="120"
            className="pl__ring pl__ring--b"
          ></circle>
          <circle
            strokeLinecap="round"
            strokeDasharray="0 440"
            strokeWidth="20"
            stroke="#000"
            fill="none"
            r="70"
            cy="120"
            cx="85"
            className="pl__ring pl__ring--c"
          ></circle>
          <circle
            strokeLinecap="round"
            strokeDasharray="0 440"
            strokeWidth="20"
            stroke="#000"
            fill="none"
            r="70"
            cy="120"
            cx="155"
            className="pl__ring pl__ring--d"
          ></circle>
        </svg>
      </div>
    );
  }

  return (
    <div className="col-12 col-md-6 col-lg-4 offset-lg-1">
      <h6 className="mb-7">Đơn hàng ({cart.length})</h6>
      <hr className="my-7" />
      <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x mb-7">
        {cart &&
          cart.map((detail) => (
            <Item details={detail} key={detail.productId} />
          ))}
      </ul>
      <div className="card mb-9 bg-light">
        <div className="card-body">
          <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
            <li className="list-group-item d-flex fs-lg fw-bold">
              <span>Tổng tiền</span>{" "}
              <span className="ms-auto">${total.toFixed(2)}</span>
            </li>
          </ul>
        </div>
      </div>
      <button className="btn w-100 btn-dark" onClick={handlePlaceOrder}>
        Đặt hàng
      </button>
    </div>
  );
}

export default PlaceOrder;
