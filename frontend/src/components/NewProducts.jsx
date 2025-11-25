import React from "react";
import ProductCard from "./ProductCard";
import Carousel from "./Carousel";

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
                    <div className="w-full px-2">
                        <Carousel
                            className="py-4"
                            autoplay={false}>
                            {products.map((p, i) => (
                                <div
                                    key={i}
                                    className="px-2">
                                    <ProductCard
                                        image={p.img}
                                        title={p.title}
                                        price={p.price}
                                        href="/product"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}