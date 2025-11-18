import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import '../context/CartContext.css'

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // tăng số lượng
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // giảm số lượng
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // thêm sản phẩm
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // xóa 1 sản phẩm
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  // xóa toàn bộ
  const clearCart = async () => {
    const result = await Swal.fire({
      title: "Clear Cart?",
      text: "Are you sure you want to remove all items from the cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#E92915",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, clear it!",
      // đặt class lên container để dễ chỉnh z-index
      customClass: {
        container: "my-swal-container",
        popup: "my-swal-popup"
      }
    });

    if (result.isConfirmed) {
      setCartItems([]);
      await Swal.fire({
        title: "Cleared!",
        text: "Your cart is now empty.",
        icon: "success",
        timer: 1400,
        showConfirmButton: false,
        customClass: { container: "my-swal-container" }
      });
    }
  };

  const checkout = async () => {
  if (cartItems.length === 0) {
    await Swal.fire({
      title: "Your cart is empty",
      text: "Please add some items before checking out.",
      icon: "info",
      confirmButtonColor: "#E92915",
      customClass: { container: "my-swal-container" }
    });
    return;
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const result = await Swal.fire({
    title: "Proceed to Checkout?",
    html: `Your total amount is <strong style="color:#E92915">$${subtotal.toFixed(
      2
    )}</strong>`,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#E92915",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, pay now!",
    cancelButtonText: "Cancel",
    customClass: { container: "my-swal-container" }
  });

  if (result.isConfirmed) {
    setCartItems([]); // clear cart after checkout
    await Swal.fire({
      title: "Payment Successful!",
      text: `You have been charged $${subtotal.toFixed(2)}.`,
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
      customClass: { container: "my-swal-container" }
    });
  }
};

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        checkout
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
