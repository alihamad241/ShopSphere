import React from "react";

export default function BrandLogo({ className = "brand_two", title = "Brands" }) {
    const brands = [1, 2, 3, 4, 5, 6];
    return (
        <div className={`brand_logo ${className} py-8`}>
            <div className="mx-auto px-4">
                <div className="block_title mb-6">
                    <h3 className="text-2xl font-bold">{title}</h3>
                </div>
                <div className="row">
                    <div className="brand_active owl-carousel flex items-center gap-6 overflow-x-auto">
                        {brands.map((i) => (
                            <div
                                className="w-1/3 sm:w-1/4 md:w-1/6 px-2 shrink-0"
                                key={i}>
                                <div className="single_brand flex items-center justify-center p-2">
                                    <a
                                        href="#"
                                        className="block">
                                        <img
                                            src={`/assets/img/brand/brand${i}.jpg`}
                                            alt=""
                                            className="h-12 object-contain mx-auto"
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
