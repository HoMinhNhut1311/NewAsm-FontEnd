import { useState } from "react";
import Products from "./Item/Products";

function Shop() {
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
  ]);

  const [selectedCategory, setSelectedCategory] = useState("Tất cả sản phẩm");
  const [selectedFilter, setSelectedFilter] = useState("Lọc theo giá");
  
  const categories = [
    "Tất cả sản phẩm",
    "Category 1",
    "Category 2",
    // Add your categories here
  ];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "Tất cả sản phẩm" ? true : product.categoryName === selectedCategory
    )
    .sort((a, b) => {
      if (selectedFilter === "Giá từ cao đến thấp") {
        return b.productPrice - a.productPrice;
      } else if (selectedFilter === "Giá từ thấp đến cao") {
        return a.productPrice - b.productPrice;
      } else if (selectedFilter === "Tên sản phẩm từ a - z") {
        return a.productName.localeCompare(b.productName);
      } else if (selectedFilter === "Tên sản phẩm từ z - a") {
        return b.productName.localeCompare(a.productName);
      } else {
        return 0;
      }
    });

  return (
    <section className="py-11">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-9">
            <div className="row align-items-center mb-7">
              <div className="col-12 col-md">
                <h3 className="mb-1">Danh sách sản phẩm</h3>
                <ol className="breadcrumb mb-md-0 fs-xs text-gray-400">
                  <li className="breadcrumb-item">
                    <a className="text-gray-400" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active">Shop</li>
                </ol>
              </div>
              <div className="col-12 col-md-auto">
                <select
                  className="form-select form-select-xs"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-md-auto">
                <select
                  className="form-select form-select-xs"
                  value={selectedFilter}
                  onChange={handleFilterChange}
                >
                  <option value="Lọc theo giá">Lọc theo giá</option>
                  <option value="Giá từ cao đến thấp">Giá từ cao đến thấp</option>
                  <option value="Giá từ thấp đến cao">Giá từ thấp đến cao</option>
                  <option value="Tên sản phẩm từ a - z">Tên sản phẩm từ a - z</option>
                  <option value="Tên sản phẩm từ z - a">Tên sản phẩm từ z - a</option>
                </select>
              </div>
            </div>
            <div className="row">
              {filteredProducts.map((product) => (
                <Products key={product.productId} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
