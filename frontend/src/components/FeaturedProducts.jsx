import React from "react";
import ProductCard from "./ProductCard";
import Carousel from "./Carousel";

export default function FeaturedProducts() {
    const items = [
        "/assets/img/product/product7.jpg",
        "/assets/img/product/product8.jpg",
        "/assets/img/product/product9.jpg",
        "/assets/img/product/product3.jpg",
    ];
    return (
        <div className="new_product_area product_two py-12">
            <div className="mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full">
                        <div className="block_title">
                            <h3 className="text-2xl font-bold">featured Products</h3>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-2">
                        <Carousel
                            className="py-4"
                            autoplay={false}>
                            {items.map((src, i) => (
                                <div
                                    key={i}
                                    className="px-2">
                                    <ProductCard
                                        image={src}
                                        title={`Product #${i + 1}`}
                                        price="$50.00"
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