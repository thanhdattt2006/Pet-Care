import React, { useEffect, useState } from "react";
import "./ProductCart.css"; // CSS tách riêng cho đẹp

export default function Products() {
  const [products, setProducts] = useState([]);

  // Fetch dữ liệu từ file JSON
  useEffect(() => {
    fetch("/data/ProductsHome.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Lỗi fetch dữ liệu:", err));
  }, []);

  // Lọc sản phẩm
  const bestSeller = products.filter((p) => p.tag === "bestSeller");
  const sale = products.filter((p) => p.tag === "sale");
  const latest = products.filter((p) => p.tag === "new").slice(0, 12);

  // Hàm render card
  const renderCard = (p) => (
    <div className="product-card" key={p.id}>
      <div className={`badge ${p.tag}`}>{p.tag}</div>
        <div >
            <img className="product-img" src={'/img/pet/' + p.photo} alt={p.photo} />
        </div>
      <h4>{p.name}</h4>
      <p>${p.price}</p>
      <button>Add to Cart</button>
    </div>
  );

  return (
    <div className="products-container">
      <h2 className="section-title best-seller">Best Seller Products</h2>
      <div className="grid123">{bestSeller.map(renderCard)}</div>

      <h2 className="section-title sale">Sale Products</h2>
      <div className="grid123">{sale.map(renderCard)}</div>

      <h2 className="section-title new">New & Other Products</h2>
      <div className="grid123">{latest.map(renderCard)}</div>
    </div>
  );
}
