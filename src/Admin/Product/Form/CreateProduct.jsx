import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { RingLoader } from "react-spinners";
import { createProduct, updateProduct } from "../../../Data/Product/ProductApi";

function CreateProduct({ refresh, isUpdate, detail }) {
  const [product, setProduct] = useState({
    productName: "",
    productPrice: 0,
    productDes: "",
    categoryId: "1",
  });

  useEffect(() => {
    if (isUpdate && detail) {
      setProduct({
        productName: detail.productName,
        productPrice: detail.productPrice,
        productDes: detail.productDes,
        categoryId: detail.categoryId,
      });
    }
  }, [isUpdate, detail]);
  const [onLoad, setOnLoad] = useState(false);
  const [errors, setErrors] = useState({});
  const validate = () => {
    const validationErrors = {};
    if (!product.productName.trim()) {
      validationErrors.productName = "Tên sản phẩm không được để trống";
    }
    if (!String(product.productPrice).trim()) {
      validationErrors.productPrice = "Giá không được để trống";
    } else if (isNaN(product.productPrice)) {
      validationErrors.productPrice = "Giá sản phẩm phải là số";
    }
    return validationErrors;
  };

  const handleChange = (event) => {
    setProduct({
      ...product,
      categoryId: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setOnLoad(true);
      try {
        let response;
        if (isUpdate) {
          response = await updateProduct(product, detail.productId);
        } else {
          response = await createProduct(product);
        }
        if (response.status === 200 || response.status === 201) {
          Swal.fire({
            title: isUpdate
              ? "Cập nhật thành công!"
              : "Tạo sản phẩm thành công!",
            text: `${response.data.productName} -- ${response.data.productPrice} -- ${response.data.categoryName}`,
            icon: "success",
          }).then(() => {
            setProduct({
              productName: "",
              productPrice: 0,
              productDes: "",
              categoryId: "1",
            });
            refresh();
          });
        } else {
          Swal.fire({
            title: isUpdate ? "Cập nhật thất bại!" : "Tạo sản phẩm thất bại!",
            text: `Lỗi : ${response.data.message}`,
            icon: "error",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Đã xảy ra lỗi!",
          text: error.message,
          icon: "error",
        });
      } finally {
        setOnLoad(false);
      }
    } else {
      setOnLoad(false); // Stop loader if there are validation errors
    }
  };

  return (
    <div className="createUser">
      {onLoad && (
        <div className="my-loader-wrapper">
          <div className="my-loader">
            <RingLoader color="#36d7b7" size={200} loading={onLoad} />
          </div>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="username" className="form-label">
          Tên sản phẩm
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={product.productName}
          onChange={(e) =>
            setProduct({
              ...product,
              productName: e.target.value,
            })
          }
        />
        {errors.productName && (
          <p className="text-danger">{errors.productName}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Giá
        </label>
        <input
          type="text"
          className="form-control"
          id="password"
          value={product.productPrice}
          onChange={(e) =>
            setProduct({
              ...product,
              productPrice: e.target.value,
            })
          }
        />
        {errors.productPrice && (
          <p className="text-danger">{errors.productPrice}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="desc" className="form-label">
          Mô tả
        </label>
        <input
          type="text"
          className="form-control"
          id="desc"
          value={product.productDes}
          onChange={(e) =>
            setProduct({
              ...product,
              productDes: e.target.value,
            })
          }
        />
      </div>
      <div className="my-2">
        <label htmlFor="">Thể loại</label>
        <br />
        <select value={product.categoryId} onChange={handleChange}>
          <option value="1">Bàn</option>
          <option value="2">Ghế</option>
        </select>
        <p>Selected option: {product.categoryId}</p>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-primary mt-3 p-2" onClick={handleSubmit}>
          {isUpdate ? "Cập nhật" : "Tạo mới"}
        </button>
      </div>
    </div>
  );
}

export default CreateProduct;
