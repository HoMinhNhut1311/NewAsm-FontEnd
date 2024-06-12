import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "./DetailProductComponent/Detail";

function DetailProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([
    {
      productName: "Product 1",
      productId: "1",
      productPrice: "100",
      productDes: "Description 1",
      categoryName: "Category 1",
    },
    {
      productName: "Product 2",
      productId: "2",
      productPrice: "150",
      productDes: "Description 2",
      categoryName: "Category 2",
    },
    {
      productName: "Product 3",
      productId: "3",
      productPrice: "200",
      productDes: "Description 3",
      categoryName: "Category 3",
    },
    {
      productName: "Product 4",
      productId: "4",
      productPrice: "250",
      productDes: "Description 4",
      categoryName: "Category 4",
    },
    {
      productName: "Product 5",
      productId: "5",
      productPrice: "300",
      productDes: "Description 5",
      categoryName: "Category 5",
    },
    {
      productName: "Product 6",
      productId: "6",
      productPrice: "350",
      productDes: "Description 6",
      categoryName: "Category 6",
    },
    {
      productName: "Product 7",
      productId: "7",
      productPrice: "400",
      productDes: "Description 7",
      categoryName: "Category 7",
    },
    {
      productName: "Product 8",
      productId: "8",
      productPrice: "450",
      productDes: "Description 8",
      categoryName: "Category 8",
    },
  ]);
  useEffect(() => {
    if (productId) {
      //   findByProductId(productId.toString())
      //     .then((data: product | null) => {
      //       setProduct(data);
      //     })
      //     .catch((error) => {
      //       console.error("Error fetching product:", error);
      //     });
      setProduct(products.find((p) => p.productId === productId));
    }
  }, [productId]);

  return (
    <div>
      <nav className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ol className="breadcrumb mb-0 fs-xs text-gray-400">
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="index.html">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="shop.html">
                    {product?.categoryName}
                  </a>
                </li>
                <li className="breadcrumb-item active">
                  {product?.productName}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
      {product && <Detail product={product} key={product.productId} />}
    </div>
  );
}

export default DetailProduct;
