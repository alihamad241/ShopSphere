import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ProductListCard from "../components/ProductListCard";
import { useProductStore } from "../stores/useProductStore";

export default function ShopList() {
    const { products, fetchAllProducts, loading } = useProductStore();

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    const list = products || [];
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
                            </aside>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
