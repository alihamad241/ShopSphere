import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import Carousel from "./Carousel";
import { useProductStore } from "../stores/useProductStore";

export default function NewProducts() {
    const { products, fetchAllProducts, loading } = useProductStore();

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    // show newest products by createdAt (descending). Be defensive for missing/invalid dates
    const newest = (products || [])
        .slice()
        .sort((a, b) => (Date.parse(b.createdAt) || 0) - (Date.parse(a.createdAt) || 0))
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
                                : // show a friendly skeleton-style placeholder when there are no new products
                                  Array.from({ length: 4 }).map((_, i) => (
                                      <div
                                          key={i}
                                          className="px-2">
                                          <div className="single_product bg-white rounded shadow-sm overflow-hidden p-4">
                                              <div className="product_thumb mb-3">
                                                  <div className="w-full h-40 bg-gray-100 rounded animate-pulse" />
                                              </div>
                                              <div className="product_content">
                                                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse" />
                                                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-4 animate-pulse" />
                                                  <div className="flex items-center justify-between">
                                                      <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse" />
                                                      <button className="bg-gray-300 text-white px-3 py-1 rounded opacity-60 cursor-not-allowed">
                                                          Add
                                                      </button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}
