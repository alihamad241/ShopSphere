import React from "react";

function ProductCard({ img, price, title }) {
    return (
        <div className="w-full md:w-1/2 lg:w-1/4 px-2">
            <div className="single_product bg-white shadow-sm rounded overflow-hidden">
                <div className="product_thumb">
                    <a
                        href="#"
                        className="block">
                        <img
                            src={img}
                            alt=""
                            className="w-full h-56 md:h-48 lg:h-40 object-cover"
                        />
                    </a>
                </div>
                <div className="product_content p-4">
                    <span className="product_price text-lg font-semibold text-gray-900">{price}</span>
                    <h3 className="product_title mt-2 text-sm">
                        <a
                            href="#"
                            className="text-gray-800 hover:text-blue-600">
                            {title}
                        </a>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default function NewProducts() {
    const products = [
        { img: "/assets/img/product/product1.jpg", price: "$50.00", title: "Curabitur sodales" },
        { img: "/assets/img/product/product2.jpg", price: "$40.00", title: "Quisque ornare dui" },
        { img: "/assets/img/product/product3.jpg", price: "$60.00", title: "Sed non turpiss" },
        { img: "/assets/img/product/product4.jpg", price: "$65.00", title: "Duis convallis" },
    ];
    return (
        <div className="new_product_area product_two py-12">
            <div className="mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full">
                        <div className="block_title">
                            <h3 className="text-2xl font-bold">New Products</h3>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="single_p_active owl-carousel flex gap-4 overflow-x-auto py-4">
                        {products.map((p, i) => (
                            <ProductCard
                                key={i}
                                img={p.img}
                                price={p.price}
                                title={p.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
