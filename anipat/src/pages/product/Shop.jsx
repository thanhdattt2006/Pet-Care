import { useEffect, useState } from "react";
import { DataView } from "primereact/dataview";
import { Paginator } from "primereact/paginator";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Swal from "sweetalert2";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./Shop.css";
import { useCart } from "../../context/CartContext";

export default function Shop() {
    // state
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [products, setProducts] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(3);
    const { addToCart } = useCart();



    // price filter
    const [selectedPrice, setSelectedPrice] = useState("");

    const priceOptions = [
        { label: "All Prices", value: "all" },
        { label: "Under 5$", value: "under5" },
        { label: "5$ - 10$", value: "5to10" },
        { label: "10$ - 15$", value: "10to15" },
        { label: "Above $15", value: "above15" }
    ];

    // supplier filter (multi)
    const [suppliers, setSuppliers] = useState([]);
    const [selectedSuppliers, setSelectedSuppliers] = useState(["all"]);

    // search filter
    const [searchTerm, setSearchTerm] = useState("");

    // fetch product.json
    useEffect(() => {
        fetch("data/product.json")
            .then((res) => res.json())
            .then((data) => {
                if (data.categories && data.suppliers) {
                    const allProductsData = [];
                    const supplierMap = {};

                    // Map suppliers
                    data.suppliers.forEach((supplier) => {
                        supplierMap[supplier.id] = supplier.name;
                    });

                    // Add category + supplier name vào product
                    data.categories.forEach((cat) => {
                        cat.products.forEach((product) => {
                            const productWithCategory = {
                                ...product,
                                category: cat.name,
                                supplier: supplierMap[product.supplierId] || "Unknown"
                            };
                            allProductsData.push(productWithCategory);
                        });
                    });

                    setAllProducts(allProductsData);

                    // Category options
                    const categoryOptions = data.categories.map((cat) => ({
                        label: cat.name,
                        value: cat.name
                    }));
                    setCategories([{ label: "All", value: "all" }, ...categoryOptions]);

                    // Supplier options
                    const supplierOptions = data.suppliers.map((supplier) => ({
                        label: supplier.name,
                        value: supplier.name
                    }));
                    setSuppliers([{ label: "All", value: "all" }, ...supplierOptions]);

                    setProducts(allProductsData);
                }
            })
            .catch((err) => console.error("FETCH ERROR:", err));
    }, []);

    // filter
    useEffect(() => {
        let filtered = allProducts;

        // Search filter
        if (searchTerm.trim()) {
            filtered = filtered.filter((p) => {
                return (
                    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    (p.ingredients &&
                        p.ingredients.some((ing) =>
                            ing.toLowerCase().includes(searchTerm.toLowerCase())
                        )) ||
                    (p.benefits &&
                        p.benefits.toLowerCase().includes(searchTerm.toLowerCase()))
                );
            });
        }

        // Category filter
        if (selectedCategory && selectedCategory !== "all") {
            filtered = filtered.filter((p) => p.category === selectedCategory);
        }

        // Price filter
        if (selectedPrice && selectedPrice !== "all" && selectedPrice !== "") {
            filtered = filtered.filter((p) => {
                if (selectedPrice === "under5") return p.price < 5;
                if (selectedPrice === "5to10") return p.price >= 5 && p.price <= 10;
                if (selectedPrice === "10to15") return p.price >= 10 && p.price <= 15;
                if (selectedPrice === "above15") return p.price > 15;
                return true;
            });
        }

        // Supplier filter
        if (!(selectedSuppliers.includes("all"))) {
            filtered = filtered.filter((p) => selectedSuppliers.includes(p.supplier));
        }

        setProducts(filtered);
        setFirst(0);
    }, [selectedCategory, selectedPrice, selectedSuppliers, searchTerm, allProducts]);

    // handle search
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // handle add to cart
    const handleAddToCart = (item) => {
        // gọi context để thêm sản phẩm vào giỏ
        addToCart(item);

        // popup confirm đẹp
        Swal.fire({
            title: "Added to Cart!",
            html: `<strong>${item.name}</strong> has been added to your cart.<br/>Price: <span style="color: #E92915;">$${item.price}</span>`,
            icon: "success",
            confirmButtonText: "Continue Shopping",
            confirmButtonColor: "#E92915",
            timer: 2000,
            timerProgressBar: true,
            showClass: {
                popup: "animate__animated animate__fadeInDown"
            },
            hideClass: {
                popup: "animate__animated animate__fadeOutUp"
            }
        });
    };

    // product card
    const itemTemplate = (item) => (
        <div
            className="product-item"
            style={{
                display: "flex",
                gap: "1rem",
                margin: "1rem 0",
                borderBottom: "1px solid #eee",
                paddingBottom: "1rem"
            }}
        >
            <img
                src={item.image}
                alt={item.name}
                style={{
                    width: "303px",
                    height: "222px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginRight: '30px'
                }}
            />
            <div style={{ flex: 1 }}>
                <h4 style={{ margin: "0 0 0.5rem 0", color: "#191D34" }}>{item.name}</h4>
                <p style={{ margin: "0 0 0.5rem 0" }}>{item.description}</p>

                {item.ingredients && (
                    <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>
                        <b>Ingredients:</b> {item.ingredients.join(", ")}
                    </p>
                )}

                {item.benefits && (
                    <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>
                        <b>Benefits:</b> {item.benefits}
                    </p>
                )}

                {item.supplier && (
                    <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>
                        <b>Supplier:</b> {item.supplier}
                    </p>
                )}

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "1rem"
                    }}
                >
                    <p style={{ fontWeight: "bold", color: "#E92915", margin: 0 }}>
                        ${item.price}
                    </p>
                    <Button
                        label="Add to Cart"
                        icon="pi pi-shopping-cart"
                        className="p-button-rounded p-button-success"
                        style={{
                            backgroundColor: "#E92915",
                            borderColor: "#E92915",
                            transition: "all 0.3s ease"
                        }}
                        onClick={() => handleAddToCart(item)}
                    />
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="bradcam_area breadcam_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bradcam_text text-center">
                                <h3>
                                    <a href="/">Home </a>
                                    <i
                                        className="pi pi-arrow-right"
                                        style={{ padding: "0rem 1rem", fontSize: "30px" }}
                                    ></i>
                                    <a href="/shop"> Shop</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service_area">
                <div className="search-container">
                    <IconField iconPosition="left">
                        <InputIcon className="pi pi-search" />
                        <InputText
                            placeholder="Search products, descriptions, ingredients, benefits..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </IconField>
                </div>
                <div className="container">
                    <div
                        className="area"
                        style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}
                    >
                        {/* Sidebar */}
                        <div className="sidebar" style={{ flex: "1" }}>
                            <h3 style={{paddingTop: '25px'}}>Category</h3>
                            {categories.map((cat) => (
                                <div
                                    key={cat.value}
                                    className="p-field-radiobutton"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        marginBottom: "0.5rem"
                                    }}
                                >
                                    <RadioButton
                                        inputId={cat.value}
                                        name="category"
                                        value={cat.value}
                                        onChange={(e) => setSelectedCategory(e.value)}
                                        checked={selectedCategory === cat.value}
                                    />
                                    <label htmlFor={cat.value} style={{ margin: 0 }}>
                                        {cat.label}
                                    </label>
                                </div>
                            ))}

                            <h3 style={{paddingTop: '25px'}}>Price Range</h3>
                            {priceOptions.map((opt) => (
                                <div
                                    key={opt.value}
                                    className="p-field-radiobutton"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        marginBottom: "0.5rem"
                                    }}
                                >
                                    <RadioButton
                                        inputId={`price_${opt.value}`}
                                        name="price"
                                        value={opt.value}
                                        onChange={(e) => setSelectedPrice(e.value)}
                                        checked={selectedPrice === opt.value}
                                    />
                                    <label htmlFor={`price_${opt.value}`} style={{ margin: 0 }}>
                                        {opt.label}
                                    </label>
                                </div>
                            ))}

                            {suppliers.length > 0 && (
                                <>
                                    <h3 style={{paddingTop: '25px'}}>Supplier</h3>
                                    {suppliers.map((supplier) => (
                                        <div
                                            key={supplier.value}
                                            className="p-field-checkbox"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                marginBottom: "0.5rem"
                                            }}
                                        >
                                            <Checkbox
                                                inputId={`supplier_${supplier.value}`}
                                                value={supplier.value}
                                                onChange={(e) => {
                                                    const checked = e.checked;
                                                    if (supplier.value === "all") {
                                                        if (checked) {
                                                            setSelectedSuppliers(["all"]);
                                                        } else {
                                                            setSelectedSuppliers([]);
                                                        }
                                                    } else {
                                                        let updated = [...selectedSuppliers];
                                                        updated = updated.filter((s) => s !== "all");

                                                        if (checked) {
                                                            updated.push(supplier.value);
                                                        } else {
                                                            updated = updated.filter(
                                                                (s) => s !== supplier.value
                                                            );
                                                        }

                                                        if (updated.length === 0) updated = ["all"];
                                                        setSelectedSuppliers(updated);
                                                    }
                                                }}
                                                checked={selectedSuppliers.includes(supplier.value)}
                                            />
                                            <label
                                                htmlFor={`supplier_${supplier.value}`}
                                                style={{ margin: 0 }}
                                            >
                                                {supplier.label}
                                            </label>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>

                        {/* Products */}
                        <div className="product" style={{ flex: "4" }}>
                            <DataView
                                value={products.slice(first, first + rows)}
                                itemTemplate={itemTemplate}
                                layout="list"
                            />
                        </div>
                    </div>
                </div>

                {/* Paginator */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "2rem"
                    }}
                >
                    <Paginator
                        first={first}
                        rows={rows}
                        totalRecords={products.length}
                        rowsPerPageOptions={[3, 5, 7]}
                        onPageChange={(e) => {
                            setFirst(e.first);
                            setRows(e.rows);
                        }}
                    />
                </div>
            </div>
        </>
    );
}
