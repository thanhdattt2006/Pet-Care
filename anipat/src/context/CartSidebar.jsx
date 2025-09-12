// src/components/CartSidebar.jsx
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { useCart } from "../context/CartContext";

export default function CartSidebar({ visible, setVisible }) {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    checkout
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Sidebar
      visible={visible}
      position="right"
      onHide={() => setVisible(false)}
      style={{ width: "400px" }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  borderBottom: "1px solid #eee",
                  paddingBottom: "0.5rem",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "6px" }}
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: "0 0 0.25rem 0" }}>{item.name}</h4>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
                    ${item.price.toFixed(2)}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
                    <Button
                      icon="pi pi-minus"
                      className="p-button-rounded p-button-text"
                      onClick={() => decreaseQuantity(item.id)}
                    />
                    <span>{item.quantity}</span>
                    <Button
                      icon="pi pi-plus"
                      className="p-button-rounded p-button-text"
                      onClick={() => increaseQuantity(item.id)}
                    />
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ margin: 0, fontWeight: "bold" }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-danger p-button-text"
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "1.5rem", borderTop: "1px solid #ddd", paddingTop: "1rem" }}>
            <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </h3>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
              <Button
                label="Clear Cart"
                className="p-button-danger"
                onClick={clearCart}
              />
              <Button
                label="Checkout"
                className="p-button-success"
                onClick={checkout}
              />
            </div>
          </div>
        </>
      )}
    </Sidebar>
  );
}
