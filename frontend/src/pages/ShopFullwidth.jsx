import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

export default function ShopFullwidth() {
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
                                <li>Shop Fullwidth</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop_area">
                <div className="container mx-auto px-4">
                    <div className="pos_page_inner">
                        <div className="shop_toolbar mb-6 flex items-center justify-between">
                            <div className="showing_results">
                                <p className="text-sm text-gray-600">Showing 1–12 of 24 results</p>
                            </div>
                            <div className="shop_actions flex items-center gap-3">
                                <label className="text-sm text-gray-600">Sort By:</label>
                                <select className="border rounded px-3 py-1">
                                    <option>Default</option>
                                    <option>Price: Low to High</option>
                                </select>
                            </div>
                        </div>

                        <div className="shop_products">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <ProductCard
                                        key={i}
                                        image={`/assets/img/product/product${(i % 9) + 1}.jpg`}
                                        title={`Fullwidth Product ${(i % 9) + 1}`}
                                        price="$49.00"
                                        href="/product"
                                        badge="/assets/img/cart/span-new.png"
                                    />
                                ))}
                            </div>

                            <div className="pagination mt-6 flex items-center justify-center">
                                <nav>
                                    <ul className="inline-flex items-center gap-2">
                                        <li>
                                            <a
                                                href="#"
                                                className="px-3 py-1 border rounded">
                                                Prev
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="px-3 py-1 border rounded bg-gray-100">
                                                1
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="px-3 py-1 border rounded">
                                                2
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="px-3 py-1 border rounded">
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}