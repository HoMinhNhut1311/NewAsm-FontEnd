// //

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import product from "../../../../models/Product";
// import { Image } from "../../../../models/Image";
// import { getImages } from "../../../../api/ImageAPI";

// function Item  ({ product }) {
//   const productId = product.productId;
//   const [images, setImage] = useState({
    
//   });
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     getImages(productId).then((img) => {
//       setImage(img);
//       setIsLoading(false);
//     });
//   }, [productId]);

//   if (isLoading) {
//     return (
//       <div className="loader">
//         <div className="wrapper">
//           <div className="circle"></div>
//           <div className="line-1"></div>
//           <div className="line-2"></div>
//           <div className="line-3"></div>
//           <div className="line-4"></div>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="cardd m-2 ms-5">
//       <Link to={`user/furniture/${product.productId}`}>
//         <div className="card-img">
//           {" "}
//           <img
//             className="card-img-top card-img-back"
//             src={images[0].url}
//             alt={product.productName}
//           />
//         </div>
//         <div className="card-title">{product.productName}</div>
//       </Link>

//       <div className="card-footer">
//         <div className="card-p">
//           <span>$</span> {product.price}.000
//         </div>
//         <Link to={`user/furniture/${product.productId}`}>
//           <button className="card-b" title="cart">
//             <i className="fe fe-eye"></i>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Furniture;
