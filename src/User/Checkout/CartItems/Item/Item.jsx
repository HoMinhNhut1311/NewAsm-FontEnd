function Item({ details }) {
  const product = details;
  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-4">
          <a href="#">
            <img
              src={product?.mediaFilePath}
              alt={product?.productName}
              className="img-fluid"
            />
          </a>
        </div>
        <div className="col">
          <p className="mb-4 fs-sm fw-bold">
            <a className="text-body" href="#">
              {product.productName}
            </a>
            <br />
            <span className="text-muted">${product.productPrice}.00</span>
          </p>
          <div className="fs-sm text-muted">Số lượng: {product.quantity}</div>
        </div>
      </div>
    </li>
  );
}

export default Item;
