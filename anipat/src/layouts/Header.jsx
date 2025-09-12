import 'primeicons/primeicons.css';
import { useState } from 'react';
import { useCart } from "../context/CartContext";
// import { Dialog } from "primereact/dialog";
import CartSidebar from "../context/CartSidebar";

export default function Header() {
    const [hover, setHover] = useState(false);
    const { cartItems, removeFromCart, clearCart } = useCart();
    const [visible, setVisible] = useState(false);
    return (
        <>
            <header>
                <div className="header-area ">
                    <div className="header-top_area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-8">
                                    <div className="short_contact_list">
                                        <ul>
                                            <li><a href="#">+880 4664 216</a></li>
                                            <li><a href="#">Mon - Sat 10:00 - 7:00</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-4 ">
                                    <div className="social_media_links">
                                        <a href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-pinterest-p"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="sticky-header" className="main-header-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-3 col-lg-3">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src="img/logo.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9">
                                    <div className="main-menu  d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><a href="index.html">home</a></li>
                                                <li>
                                                    <a href="/emergency">
                                                        Emergency & Vet Help
                                                    </a>
                                                </li>
                                                <li><a href="#">pages <i className="ti-angle-down"></i></a>
                                                    <ul className="submenu">
                                                        <li><a href="elements.html">elements</a></li>

                                                    </ul>
                                                </li>
                                                <li><a href="/shop">Shop</a></li>
                                                <li><a href="service.html">services</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                                <li
                                                    style={{
                                                        cursor: "pointer",
                                                        color: hover ? "#f96a29" : "inherit",
                                                        transition: "color 0.2s ease",
                                                        listStyle: "none"
                                                    }}
                                                    onMouseEnter={() => setHover(true)}
                                                    onMouseLeave={() => setHover(false)}
                                                    onClick={() => setVisible(true)}
                                                >
                                                    <i className="pi pi-shopping-cart"></i>
                                                    {cartItems.length > 0 && (
                                                        <span style={{ marginLeft: "4px" }}>({cartItems.length})</span>
                                                    )}
                                                </li>

                                                {/* <Dialog
                                                    header="Your Cart"
                                                    visible={visible}
                                                    style={{ width: "22rem", height:'150%' }}
                                                    onHide={() => setVisible(false)}
                                                    position='right'
                                                >
                                                    {cartItems.length === 0 ? (
                                                        <p>No items in cart</p>
                                                    ) : (
                                                        <ul style={{ padding: 0 }}>
                                                            {cartItems.map((item) => (
                                                                <li
                                                                    key={item.id}
                                                                    style={{
                                                                        display: "flex",
                                                                        justifyContent: "space-between",
                                                                        alignItems: "center",
                                                                        marginBottom: "0.5rem",
                                                                        listStyle: "none"
                                                                    }}
                                                                >
                                                                    <span>
                                                                        {item.name} x {item.quantity}
                                                                    </span>
                                                                    <button
                                                                        style={{
                                                                            background: "none",
                                                                            border: "none",
                                                                            color: "red",
                                                                            cursor: "pointer"
                                                                        }}
                                                                        onClick={() => removeFromCart(item.id)}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                    {cartItems.length > 0 && (
                                                        <div style={{ marginTop: "1rem", textAlign: "right" }}>
                                                            <button
                                                                style={{
                                                                    background: "#f96a29",
                                                                    border: "none",
                                                                    color: "#fff",
                                                                    padding: "0.5rem 1rem",
                                                                    borderRadius: "4px",
                                                                    cursor: "pointer",
                                                                    marginRight: "0.5rem"
                                                                }}
                                                                onClick={clearCart}
                                                            >
                                                                Clear Cart
                                                            </button>
                                                            <button
                                                                style={{
                                                                    background: "#191D34",
                                                                    border: "none",
                                                                    color: "#fff",
                                                                    padding: "0.5rem 1rem",
                                                                    borderRadius: "4px",
                                                                    cursor: "pointer"
                                                                }}
                                                            >
                                                                Checkout
                                                            </button>
                                                        </div>
                                                    )}
                                                </Dialog> */}
                                                <CartSidebar visible={visible} setVisible={setVisible} />
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
