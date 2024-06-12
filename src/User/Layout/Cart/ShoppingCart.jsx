// import { useEffect, useState } from "react";
// import { useDetailCart } from "../../../../contexts/DetailCartContext";
// import { useCart } from "../../../../contexts/CartContext";
// import { findByProductId } from "../../../../api/ProductAPI";

// function ShoppingCart ({ detailCarts }) {
//   const [product, setProduct] = useState({ });
//   const [quantity, setQuantity] = useState(0);
//   const { detailCart } = useDetailCart();
//   const { cart } = useCart();
//   useEffect(() => {
//     if (detailCarts && detailCarts.product.productId) {
//       setProduct(detailCarts.product);
//       setQuantity(detailCarts.quantity);
//     } else {
//       const id = detailCarts.product.toString();
//       findByProductId(id).then((product) => {
//         if (product) {
//           setProduct(product);
//         }
//       });
//     }
//   }, [detailCart, cart]);
//   return (
//     <li className="list-group-item">
//       {product ? (
//         <div className="row align-items-center">
//           <div className="col-4">
//             <a href="#">
//               <img
//                 className="img-fluid"
//                 style={{ width: "100%" }}
//                 src={product.images[0]?.url}
//                 alt={product.productName || "Product image"}
//               />
//             </a>
//           </div>
//           <div className="col-8">
//             <p className="fs-sm fw-bold mb-6">
//               <a className="text-body" href="#">
//               </a>
//               <br />
//               <span className="text-muted"></span>
//             </p>
//             <div className="d-flex align-items-center">
//               <div className="col-lg">
//                 <div className="quantity" style={{ width: "75%" }}>
//                   <button
//                     className="minus-btn"
//                     type="button"
//                     name="button"
//                   >
//                     -
//                   </button>
//                   <input
//                     type="text"
//                     name="quantity"
//                     value={quantity}
//                     min={1}
//                     title="plus"
//                     style={{ paddingRight: "33px",width:'80px' }}
//                     readOnly
//                   />
//                   <button
//                     className="plus-btn"
//                     type="button"
//                     name="button"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <button className="remove">
//                 <div className="svg-wrapper-1">
//                   <div className="svg-wrapper">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       width="30"
//                       height="30"
//                       className="icon"
//                     >
//                       <svg
//                         version="1.1"
//                         id="Capa_1"
//                         xmlns="http://www.w3.org/2000/svg"
//                         xmlnsXlink="http://www.w3.org/1999/xlink"
//                         x="0px"
//                         y="0px"
//                         viewBox="0 0 512 512"
//                         enableBackground="new 0 0 512 512"
//                         xmlSpace="preserve"
//                       >
//                         <g>
//                           <g>
//                             <path
//                               d="M436,60h-89.185l-9.75-29.238C330.927,12.363,313.773,0,294.379,0h-76.758c-19.395,0-36.548,12.363-42.7,30.762
//                             L165.182,60H76c-24.814,0-45,20.186-45,45v30c0,16.708,15.041,15,31.183,15c138.554,0,264.175,0,403.817,0c8.291,0,15-6.709,15-15
//                             v-30C481,80.186,460.814,60,436,60z M196.813,60l6.57-19.746C205.434,34.116,211.161,30,217.621,30h76.758
//                             c6.46,0,12.188,4.116,14.224,10.254L315.18,60H196.813z"
//                             />
//                           </g>
//                         </g>
//                         <g>
//                           <g>
//                             <path
//                               d="M64.666,182l23.917,289.072C90.707,494.407,109.97,512,133.393,512h245.215c23.423,0,42.686-17.593,44.824-41.06
//                             L447.336,182H64.666z M181,437c0,19.773-30,19.854-30,0V227c0-19.773,30-19.854,30,0V437z M271,437c0,19.773-30,19.854-30,0V227
//                             c0-19.773,30-19.854,30,0V437z M361,437c0,19.773-30,19.854-30,0V227c0-8.291,6.709-15,15-15c8.291,0,15,6.709,15,15V437z"
//                             />
//                           </g>
//                         </g>
//                         <g></g>
//                         <g></g>
//                         <g></g>
//                         <g></g>
//                         <g></g>
//                         <g></g>
//                         <g></g>
//                         <g></g>
//                         <g></g>
//                         <g></g>
//                         <g></g>
//                         <g></g>
//                         <g></g>
//                         <g></g>
//                         <g></g>
//                       </svg>
//                     </svg>
//                   </div>
//                 </div>
//                 <span>Xóa</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <span>Cart is empty</span>
//       )}
//     </li>
//   );
// }

// export default ShoppingCart;
