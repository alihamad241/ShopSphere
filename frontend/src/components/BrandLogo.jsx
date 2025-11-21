import React from "react";

const brands = [
    "/assets/img/brand/brand1.jpg",
    "/assets/img/brand/brand2.jpg",
    "/assets/img/brand/brand3.jpg",
    "/assets/img/brand/brand4.jpg",
    "/assets/img/brand/brand5.jpg",
    "/assets/img/brand/brand6.jpg",
];

export default function BrandLogo() {
    return (
        <section className="container mx-auto px-4 py-10 border-t border-gray-100">
            <div className="text-center mb-8">
                <h3 className="text-xl font-bold uppercase text-gray-800 tracking-wider">
                    Brands
                </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                {brands.map((src, index) => (
                    <div
                        key={index}
                        className="w-full flex justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                        <img
                            src={src}
                            alt={`Brand ${index + 1}`}
                            className="max-h-20 w-auto"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
