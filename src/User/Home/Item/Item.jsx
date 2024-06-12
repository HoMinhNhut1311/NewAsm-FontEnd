//

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Item({ product }) {
  const productId = product.productId;

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (productId) {
      setIsLoading(false);
    }
  }, [productId]);

  if (isLoading) {
    return (
      <div className="loader">
        <div className="wrapper">
          <div className="circle"></div>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="cardd m-2 ms-5">
      <Link to={`user/furniture/${product.productId}`}>
        <div className="card-img">
          {" "}
          {/* <img
            className="card-img-top card-img-back"
            src={images[0].url}
            alt={product.productName}
          /> */}
        </div>
        <div className="card-title">{product.productName}</div>
      </Link>

      <div className="card-footer">
        <div className="card-p">
          <span>$</span> {product.productPrice}.000
        </div>
        <Link to={`shop/furniture/${product.productId}`}>
          <button className="card-b" title="cart">
            <i className="fe fe-eye"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
