import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useProductStore } from "../stores/useProductStore";

export default function ShopList() {
    const { products, fetchAllProducts, loading } = useProductStore();

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    const list = products || [];

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
                                        <p className="text-sm text-gray-600">Showing 1–6 of 6 results</p>
                                    </div>
                                    <div className="shop_actions">
                                        <label className="text-sm text-gray-600">Sort By:</label>
                                        <select className="border rounded px-3 py-1">
                                            <option>Default</option>
                                        </select>
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
                                                  <ProductCard
                                                      key={p._id}
                                                      product={p}
                                                      href={`/product/${p._id}`}
                                                      badge="/assets/img/cart/span-new.png"
                                                      variant="list"
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
