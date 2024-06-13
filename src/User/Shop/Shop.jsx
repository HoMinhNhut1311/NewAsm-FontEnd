import { useEffect, useState } from "react";
import Products from "./Item/Products";
import { getPageProduct } from "../../Data/Product/ProductApi";
import { getAllCategory } from "../../Data/Category/Category";

function Shop() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả sản phẩm");
  const [selectedFilter, setSelectedFilter] = useState("Lọc theo giá");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      try {
        const productResponse = await getPageProduct(6, 0, 0);
        setProducts(productResponse.content);
        const categoryResponse = await getAllCategory();
        setCategories(categoryResponse);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductsAndCategories();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory === "Tất cả sản phẩm") {
        return true;
      }
      return product.categoryName === selectedCategory;
    })
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
                  <option value="Tất cả sản phẩm">Tất cả sản phẩm</option>
                  {categories.map((category) => (
                    <option key={category.categoryId} value={category.categoryName}>
                      {category.categoryName}
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
                  <option value="Giá từ cao đến thấp">
                    Giá từ cao đến thấp
                  </option>
                  <option value="Giá từ thấp đến cao">
                    Giá từ thấp đến cao
                  </option>
                  <option value="Tên sản phẩm từ a - z">
                    Tên sản phẩm từ a - z
                  </option>
                  <option value="Tên sản phẩm từ z - a">
                    Tên sản phẩm từ z - a
                  </option>
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
