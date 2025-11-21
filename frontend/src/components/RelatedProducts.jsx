import React from "react";

export default function RelatedProducts() {
    const items = [1, 2, 3, 4, 5, 6];
    const imgs = [
        "/assets/img/product/product6.jpg",
        "/assets/img/product/product5.jpg",
        "/assets/img/product/product4.jpg",
        "/assets/img/product/product3.jpg",
    ];
    return (
        <div className="new_product_area product_page py-8">
            <div className="mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full">
                        <div className="block_title">
                            <h3 className="text-2xl font-bold">Related Products</h3>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="single_p_active owl-carousel w-full flex gap-4 overflow-x-auto py-4">
                        {imgs.map((src, i) => (
                            <div
                                className="lg:w-1/4 w-full px-4 mb-6 shrink-0"
                                key={i}>
                                <div className="single_product bg-white rounded shadow-sm overflow-hidden">
                                    <div className="product_thumb relative">
                                        <a
                                            href="#"
                                            className="block">
                                            <img
                                                src={src}
                                                alt=""
                                                className="w-full block h-48 object-cover"
                                            />
                                        </a>
                                        <div className={i % 2 ? "hot_img absolute top-2 left-2" : "img_icone absolute top-2 left-2"}>
                                            <img
                                                src="/assets/img/cart/span-new.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="product_action absolute bottom-2 left-2">
                                            <a
                                                href="#"
                                                className="inline-flex items-center bg-white px-3 py-1 rounded border">
                                                <i className="fa fa-shopping-cart mr-2"></i> Add to cart
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product_content mt-3 p-4">
                                        <span className="product_price font-semibold text-gray-900">$50.00</span>
                                        <h3 className="product_title mt-1 text-sm">
                                            <a
                                                href="#"
                                                className="text-gray-800 hover:text-blue-600">
                                                Product {i + 1}
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
