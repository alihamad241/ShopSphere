import React from "react";

export default function ProductCard({ image, title, price, href = "/product", badge, variant = "grid", onViewDetail }) {
    if (variant === "list") {
        return (
            <div className="product_list_item mb-6 bg-white rounded shadow-sm overflow-hidden flex flex-wrap">
                <div className="w-full md:w-1/3 lg:w-1/4 relative">
                    <a
                        href={href}
                        className="block">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-40 object-cover"
                        />
                    </a>
                    {badge && (
                        <div className="absolute top-2 left-2 w-8 h-8 overflow-hidden">
                            <img
                                src={badge}
                                alt="badge"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    )}
                </div>
                <div className="w-full md:w-2/3 lg:w-3/4 p-4">
                    <h3 className="text-lg font-semibold">
                        <a
                            href={href}
                            className="text-gray-800 hover:text-blue-600">
                            {title}
                        </a>
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">This is a short description for the product, matching the list view structure.</p>
                    <div className="mt-4 flex items-center justify-between border-t pt-3">
                        <span className="text-lg font-bold text-gray-900">{price}</span>
                        <a
                            href="#"
                            className="text-blue-600">
                            Add to cart
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    // grid / default
    return (
        <div className="single_product group bg-white rounded shadow-sm overflow-hidden relative">
            <div className="product_thumb relative overflow-hidden">
                <a
                    href={href}
                    className="block">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-44 object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                </a>
                {badge && (
                    <div className="absolute top-2 left-2 w-9 h-9 overflow-hidden">
                        <img
                            src={badge}
                            alt="badge"
                            className="w-full h-full object-contain"
                        />
                    </div>
                )}
                <div className="product_action absolute inset-x-2 -bottom-10 group-hover:bottom-2 transition-all duration-300 flex justify-center">
                    <a
                        href="#"
                        className="bg-white text-sm px-3 py-1 rounded shadow">
                        Add to cart
                    </a>
                </div>
            </div>
            <div className="product_content p-4">
                <span className="product_price text-lg font-semibold text-gray-900">{price}</span>
                <h3 className="product_title mt-2 text-sm">
                    <a
                        href={href}
                        className="text-gray-800 hover:text-blue-600">
                        {title}
                    </a>
                </h3>
            </div>
        </div>
    );
}
