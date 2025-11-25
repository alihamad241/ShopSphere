import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

export default function ShopSidebar() {
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
                                <li>Shop Sidebar</li>
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
                                        <p className="text-sm text-gray-600">Showing 1–9 of 9 results</p>
                                    </div>
                                    <div className="shop_actions">
                                        <label className="text-sm text-gray-600 mr-2">Sort By:</label>
                                        <select className="border rounded px-3 py-1">
                                            <option>Default</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="shop_products">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                        {Array.from({ length: 9 }).map((_, i) => (
                                            <ProductCard
                                                key={i}
                                                image={`/assets/img/product/product${(i % 9) + 1}.jpg`}
                                                title={`Sidebar Product ${(i % 9) + 1}`}
                                                price="$39.00"
                                                href="/product"
                                                badge="/assets/img/cart/span-new.png"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <aside className="w-full lg:w-3/12 px-4">
                                <div className="sidebar_widget mb-6 bg-white rounded shadow-sm p-4">
                                    <h3 className="font-semibold mb-3">Categories</h3>
                                    <ul className="text-sm text-gray-700 space-y-2">
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-blue-600">
                                                Clothing
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-blue-600">
                                                Accessories
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-blue-600">
                                                Shoes
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-blue-600">
                                                Bags
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="sidebar_widget mb-6 bg-white rounded shadow-sm p-4">
                                    <h3 className="font-semibold mb-3">Filter by price</h3>
                                    <div className="text-sm text-gray-700">
                                        <input
                                            type="range"
                                            min="0"
                                            max="500"
                                            className="w-full"
                                        />
                                        <div className="flex items-center justify-between text-xs mt-2 text-gray-600">
                                            <span>$0</span>
                                            <span>$500</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar_widget mb-6 bg-white rounded shadow-sm p-4">
                                    <h3 className="font-semibold mb-3">Special Products</h3>
                                    <div className="space-y-3">
                                        {[1, 2, 3].map((n) => (
                                            <div
                                                key={n}
                                                className="flex items-center gap-3">
                                                <img
                                                    src={`/assets/img/product/product${n}.jpg`}
                                                    alt=""
                                                    className="w-16 h-16 object-cover rounded"
                                                />
                                                <div>
                                                    <a
                                                        href="/product"
                                                        className="text-sm font-medium text-gray-800 hover:text-blue-600">
                                                        Special {n}
                                                    </a>
                                                    <div className="text-sm text-gray-600">$29.00</div>
                                                </div>
                                            </div>
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