import React, { useEffect, useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ProductListCard from "../components/ProductListCard";
import { useProductStore } from "../stores/useProductStore";

export default function ShopList() {
    const { products, fetchAllProducts, fetchFilteredProducts, loading } = useProductStore();

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    const list = products || [];
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedGender, setSelectedGender] = useState("");
    const [initialProducts, setInitialProducts] = useState([]);

    const categories = useMemo(() => {
        const set = new Set(initialProducts.map((p) => p.category || "").filter(Boolean));
        return ["", ...Array.from(set)];
    }, [initialProducts]);

    const genders = useMemo(() => {
        const set = new Set(initialProducts.map((p) => p.gender || "").filter(Boolean));
        const arr = Array.from(set).map((g) => (g || "").toLowerCase());
        return ["", ...arr];
    }, [initialProducts]);

    const applyFilters = async (category, gender) => {
        setSelectedCategory(category || "");
        setSelectedGender(gender || "");
        await fetchFilteredProducts({ category: category || undefined, gender: gender || undefined });
    };

    useEffect(() => {
        if ((!initialProducts || initialProducts.length === 0) && products && products.length > 0) {
            setInitialProducts(products);
        }
    }, [products, initialProducts]);
    const location = useLocation();

    function ViewToggle() {
        const pathname = location.pathname;
        const gridActive = pathname === "/shop" || pathname === "/";
        const listActive = pathname === "/shop/list";
        return (
            <div className="inline-flex items-center gap-2">
                <Link
                    to="/shop"
                    className={`px-2 py-1 border rounded ${gridActive ? "bg-gray-200" : ""}`}>
                    Grid
                </Link>
                <Link
                    to="/shop/list"
                    className={`px-2 py-1 border rounded ${listActive ? "bg-gray-200" : ""}`}>
                    List
                </Link>
            </div>
        );
    }

    return (
        <>
            <Header />

            <div className="breadcrumbs_area">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full">
                        <div className="breadcrumb_content">
                            <ul>
                                <li>
                                    <a href="/">home</a>
                                </li>
                                <li>
                                    <i className="fa fa-angle-right"></i>
                                </li>
                                <li>Shop List</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop_area">
                <div className="container mx-auto px-4">
                    <div className="pos_page_inner">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-9/12 px-4">
                                <div className="shop_toolbar mb-6 flex items-center justify-between">
                                    <div className="showing_results">
                                        <p className="text-sm text-gray-600">
                                            Showing 1–{Math.min(9, list.length)} of {list.length} results
                                        </p>
                                    </div>
                                    <div className="shop_actions flex items-center gap-3">
                                        <label className="text-sm text-gray-600">Sort By:</label>
                                        <select className="border rounded px-3 py-1">
                                            <option>Default</option>
                                        </select>
                                        <div className="view_switch inline-flex items-center">
                                            <ViewToggle />
                                        </div>
                                    </div>
                                </div>

                                <div className="shop_products">
                                    <div className="space-y-6">
                                        {loading
                                            ? Array.from({ length: 6 }).map((_, i) => (
                                                  <div
                                                      key={i}
                                                      className="bg-gray-100 h-40 rounded"
                                                  />
                                              ))
                                            : list.slice(0, 6).map((p) => (
                                                  <ProductListCard
                                                      key={p._id}
                                                      product={p}
                                                  />
                                              ))}
                                    </div>
                                </div>
                            </div>

                            <aside className="w-full lg:w-3/12 px-4">
                                <div className="sidebar_widget mb-6 bg-white rounded shadow-sm p-4">
                                    <h3 className="font-semibold mb-3">Filters</h3>
                                    <div className="text-sm text-gray-700">
                                        <p>Price range, categories, and attributes would go here.</p>
                                    </div>
                                </div>

                                <div className="sidebar_widget mb-6 bg-white rounded shadow-sm p-4">
                                    <h3 className="font-semibold mb-3">Categories</h3>
                                    <ul className="text-sm text-gray-700 space-y-2">
                                        {categories.map((c) => (
                                            <li key={c || "all"}>
                                                <button
                                                    onClick={() => applyFilters(c || undefined, selectedGender || undefined)}
                                                    className={`text-left w-full ${
                                                        selectedCategory === c ? "font-semibold text-emerald-600" : "text-gray-700"
                                                    }`}>
                                                    {c === "" ? "All" : c}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="sidebar_widget mb-6 bg-white rounded shadow-sm p-4">
                                    <h3 className="font-semibold mb-3">Filter by Gender</h3>
                                    <div className="flex flex-col text-sm">
                                        {genders.map((g) => (
                                            <button
                                                key={g || "allg"}
                                                onClick={() => applyFilters(selectedCategory || undefined, g || undefined)}
                                                className={`text-left py-1 ${
                                                    selectedGender === g ? "font-semibold text-emerald-600" : "text-gray-700"
                                                }`}>
                                                {g === "" ? "All" : g.charAt(0).toUpperCase() + g.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
