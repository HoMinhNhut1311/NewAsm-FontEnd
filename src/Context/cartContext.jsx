import { createContext, useState } from 'react';

// Tạo Context
const CartContext = createContext();

// Tạo Provider
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (product,quantity) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: quantity }]);
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.productId !== productId));
  };

  // Sửa thông tin sản phẩm trong giỏ hàng
  const updateQuantity = (product, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId === product.productId ? { ...item, quantity } : item
      )
    );
  };
  // Lưu giỏ hàng (ví dụ: lưu vào localStorage)
  const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, saveCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
