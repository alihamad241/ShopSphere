import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import Carousel from "./Carousel";
import { useProductStore } from "../stores/useProductStore";

export default function NewProducts() {
    const { products, fetchAllProducts, loading } = useProductStore();

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    // show newest products by createdAt (descending)
    const newest = (products || [])
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 4);

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
                            {loading &&
                                Array.from({ length: 4 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="px-2">
                                        <div className="bg-gray-100 w-full h-40 rounded" />
                                    </div>
                                ))}

                            {!loading && newest.length > 0
                                ? newest.map((p) => (
                                      <div
                                          key={p._id}
                                          className="px-2">
                                          <ProductCard
                                              product={p}
                                              href={`/product/${p._id}`}
                                          />
                                      </div>
                                  ))
                                : null}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}
