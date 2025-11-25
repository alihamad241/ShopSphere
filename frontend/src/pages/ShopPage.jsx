import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

export default function ShopPage() {
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
                                <li>Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop_area">
                <div className="mx-auto px-4">
                    <div className="pos_page_inner">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-9/12 px-4">
                                <div className="shop_toolbar mb-6 flex items-center justify-between">
                                    <div className="showing_results">
                                        <p className="text-sm text-gray-600">Showing 1–9 of 12 results</p>
                                    </div>
                                    <div className="shop_actions flex items-center gap-3">
                                        <label className="text-sm text-gray-600">Sort By:</label>
                                        <select className="border rounded px-3 py-1">
                                            <option>Default</option>
                                            <option>Product Name: A-Z</option>
                                            <option>Product Name: Z-A</option>
                                        </select>
                                        <div className="view_switch inline-flex items-center">
                                            <button className="px-2 py-1 border rounded">Grid</button>
                                            <button className="px-2 py-1 border rounded">List</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="shop_products">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                                            <ProductCard
                                                key={i}
                                                image={`/assets/img/product/product${i}.jpg`}
                                                title={`Product ${i}`}
                                                price="$50.00"
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

                            <aside className="w-full lg:w-3/12 px-4">
                                <div className="sidebar_widget mb-6 bg-white rounded shadow-sm p-4">
                                    <h3 className="font-semibold mb-3">Categories</h3>
                                    <ul className="text-sm text-gray-700">
                                        <li>
                                            <a href="#">Women</a>
                                        </li>
                                        <li>
                                            <a href="#">Men</a>
                                        </li>
                                        <li>
                                            <a href="#">Accessories</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="sidebar_widget bg-white rounded shadow-sm p-4">
                                    <h3 className="font-semibold mb-3">Special Products</h3>
                                    <div className="space-y-4">
                                        {[3, 18].map((i) => (
                                            <div
                                                key={i}
                                                className="special_product_inner flex items-center gap-3">
                                                <a
                                                    href="/product"
                                                    className="block w-20 shrink-0">
                                                    <img
                                                        src={`/assets/img/cart/cart${i % 10}.jpg`}
                                                        alt=""
                                                        className="w-full h-20 object-cover rounded"
                                                    />
                                                </a>
                                                <div>
                                                    <h4 className="text-sm font-semibold">
                                                        <a href="/product">Special Product</a>
                                                    </h4>
                                                    <div className="text-sm text-gray-600">$40.00</div>
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