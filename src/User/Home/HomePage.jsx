// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getAllProduct } from "../../Data/Product/ProductApi";

// function HomePage() {
//   const [products, setProduct] = useState([]);
//   useEffect(() => {
//     getAllProduct(0, 8).then((product) => setProduct(product));
//   },[]);
//   return (
//     <div>
//       <section className="py-12">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-12 col-md-10 col-lg-8 col-xl-6">
//               <h2 className="mb-4 text-center">Top Sellers</h2>
//             </div>
//           </div>
//           <div className="tab-content">
//             <div className="tab-pane fade show active" id="topSellersTab">
//               <div className="row"></div>
//             </div>
//           </div>
//           <div className="row">
//             {products.map((product) => (
//               <Furniture key={product.productId} product={product} />
//             ))}
//             <div className="col-12">
//               <div className="mt-7 text-center">
//                 <Link to={"/user/shop"}>
//                   <a className="link-underline" href="#">
//                    Tìm hiểu thêm
//                   </a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default HomePage;
