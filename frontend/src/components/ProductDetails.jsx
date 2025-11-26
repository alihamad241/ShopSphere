import React from "react";

export default function ProductDetails({ product, loading }) {
    const name = product?.name || "Product Name";
    const description = product?.description || "Product description will appear here.";
    const price = product ? `$${product.price.toFixed(2)}` : "$0.00";

    return (
        <div className="w-full md:w-1/2 lg:w-7/12 px-4">
            <div className="product_d_right space-y-4">
                <h1 className="text-2xl font-bold">{name}</h1>
                <div className="product_ratting mb-2">
                    <ul className="flex gap-1 text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <li key={i}>
                                <a href="#">
                                    <i className="fa fa-star"></i>
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#"
                                className="text-sm ml-2">
                                Write a review
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="product_desc text-gray-700">
                    <p>{description}</p>
                </div>
                <div className="content_price mb-2 text-xl">
                    <span className="font-semibold mr-3">{price}</span>
                </div>
                <div className="box_quantity mb-2 flex items-center gap-4">
                    <form
                        action="#"
                        className="flex items-center gap-2">
                        <label className="text-sm">quantity</label>
                        <input
                            min="0"
                            max="100"
                            defaultValue={1}
                            type="number"
                            className="w-20 border rounded p-1"
                        />
                    </form>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded">
                        <i className="fa fa-shopping-cart mr-2"></i> add to cart
                    </button>
                    <a
                        href="#"
                        title="add to wishlist"
                        className="text-gray-600">
                        <i
                            className="fa fa-heart"
                            aria-hidden="true"></i>
                    </a>
                </div>
                <div className="product_d_size mb-2">
                    <label
                        htmlFor="group_1"
                        className="block text-sm mb-1">
                        size
                    </label>
                    <select
                        name="size"
                        id="group_1"
                        className="border rounded p-2 w-32">
                        <option value="1">S</option>
                        <option value="2">M</option>
                        <option value="3">L</option>
                    </select>
                </div>
                <div className="sidebar_widget color">
                    <h2 className="text-lg font-semibold">Choose Color</h2>
                    <div className="widget_color mt-2">
                        <ul className="flex gap-2">
                            <li>
                                <a
                                    href="#"
                                    className="block w-6 h-6 bg-red-500 rounded-full"
                                />
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block w-6 h-6 bg-blue-500 rounded-full"
                                />
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block w-6 h-6 bg-green-500 rounded-full"
                                />
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block w-6 h-6 bg-yellow-400 rounded-full"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product_stock mb-2 text-sm text-gray-600">
                    <p>In stock</p>
                </div>
                <div className="wishlist-share mt-2">
                    <h4 className="font-semibold">Share on:</h4>
                    <ul className="flex gap-3 mt-2 text-gray-600">
                        <li>
                            <a href="#">
                                <i className="fa fa-rss"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-vimeo"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-tumblr"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-pinterest"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
