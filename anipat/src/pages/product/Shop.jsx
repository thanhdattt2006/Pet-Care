import { useEffect, useState } from "react";
import { DataView } from "primereact/dataview";
import { Paginator } from "primereact/paginator";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";


import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./Shop.css";

export default function Shop() {

    // state
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [products, setProducts] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(3);

    // price filter
    const [selectedPrices, setSelectedPrices] = useState([]);

    const priceOptions = [
        { label: "Under 5$", value: "under5" },
        { label: "5$ - 10$", value: "5to10" },
        { label: "10$ - 15$", value: "10to15" },
        { label: "Above $15", value: "above15" }
    ];

    // fetch product.json
    useEffect(() => {
        fetch("data/product.json")
            .then((res) => res.json())
            .then((data) => {

                if (data.categories) {
                    const allProductsData = [];

                    // Duyệt qua từng category và gán category cho products
                    data.categories.forEach((cat) => {
                        cat.products.forEach((product) => {
                            const productWithCategory = {
                                ...product,
                                category: cat.name
                            };
                            allProductsData.push(productWithCategory);
                        });
                    });

                    setAllProducts(allProductsData);

                    const categoryOptions = data.categories.map((cat) => ({
                        label: cat.name,
                        value: cat.name
                    }));

                    setCategories([{ label: "All", value: "all" }, ...categoryOptions]);
                    setProducts(allProductsData);
                }
            })
            .catch((err) => console.error("FETCH ERROR:", err));
    }, []);

    // filter by category + price
    useEffect(() => {

        let filtered = allProducts;

        // Category filter
        if (selectedCategory && selectedCategory !== "all") {
            filtered = filtered.filter((p) => {
                return p.category === selectedCategory;
            });
        }

        // Price filter
        if (selectedPrices.length > 0) {
            filtered = filtered.filter((p) => {
                return selectedPrices.some((price) => {
                    if (price === "under5") return p.price < 5;
                    if (price === "5to10") return p.price >= 5 && p.price <= 10;
                    if (price === "10to15") return p.price >= 10 && p.price <= 15;
                    if (price === "above15") return p.price > 15;
                    return true;
                });
            });
        }

        setProducts(filtered);
        setFirst(0);
    }, [selectedCategory, selectedPrices, allProducts]);

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
                    width: "240px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px"
                }}
            />
            <div>
                <h4 style={{ margin: "0 0 0.5rem 0", color: "#191D34" }}>
                    {item.name}
                </h4>
                <p style={{ margin: "0 0 0.5rem 0" }}>{item.description}</p>
                {item.ingredients && (
                    <p
                        style={{
                            margin: "0 0 0.5rem 0",
                            fontSize: "0.9rem",
                            color: "#666"
                        }}
                    >
                        <b>Ingredients:</b> {item.ingredients.join(", ")}
                    </p>
                )}
                <p style={{ fontWeight: "bold", color: "#E92915" }}>
                    ${item.price}
                </p>
            </div>
        </div>
    );

    return (
        <>
            <div className="bradcam_area breadcam_bg" style={{width: '100%'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bradcam_text text-center">
                                <h3><a href="/">Home </a><i className="pi pi-arrow-right" style={{ padding: '0rem 1rem', fontSize: '30px' }}></i><a href="/shop"> Shop</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service_area">
                <div className="search-container">
                    <IconField iconPosition="left">
                        <InputIcon className="pi pi-search" />
                        <InputText placeholder="Search" style={{ width: "100%" }} />
                    </IconField>
                </div>
                <div className="container">

                    {/* Content */}
                    <div
                        className="area"
                        style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}
                    >
                        {/* Sidebar */}
                        <div className="sidebar" style={{ flex: "2" }}>
                            <h3>Category</h3>
                            {categories.map((cat) => (
                                <div key={cat.value} className="p-field-radiobutton" style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                                    <RadioButton
                                        inputId={cat.value}
                                        name="category"
                                        value={cat.value}
                                        onChange={(e) => setSelectedCategory(e.value)}
                                        checked={selectedCategory === cat.value}
                                    />
                                    <p htmlFor={cat.value} style={{ margin: 0 }}>
                                        {cat.label}
                                    </p>
                                </div>
                            ))}

                            <h3>Price</h3>
                            {priceOptions.map((opt) => (
                                <div key={opt.value} className="p-field-checkbox" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <Checkbox
                                        inputId={opt.value}
                                        value={opt.value}
                                        onChange={(e) => {
                                            const checked = e.checked;
                                            if (checked) {
                                                setSelectedPrices([...selectedPrices, e.value]);
                                            } else {
                                                setSelectedPrices(
                                                    selectedPrices.filter((p) => p !== e.value)
                                                );
                                            }
                                        }}
                                        checked={selectedPrices.includes(opt.value)}
                                    />
                                    <p htmlFor={opt.value} style={{ margin: 0 }}>
                                        {opt.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Products */}
                        <div className="product" style={{ flex: "5" }}>
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