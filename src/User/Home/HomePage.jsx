import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProduct } from "../../Data/Product/ProductApi";
import Item from "./Item/Item";

function HomePage() {
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

  return (
    <div>
      <section className="py-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2 className="mb-4 text-center">Top Sellers</h2>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="topSellersTab">
              <div className="row"></div>
            </div>
          </div>
          <div className="row">
            {products.map((product) => (
              <Item key={product.productId} product={product} />
            ))}
            <div className="col-12">
              <div className="mt-7 text-center">
                <Link to={"/user/shop"}>
                  <a className="link-underline" href="#">
                    Tìm hiểu thêm
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
