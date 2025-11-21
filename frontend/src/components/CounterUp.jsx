import React from "react";

export default function CounterUp() {
    const counters = [
        { img: "/assets/img/cart/count.png", num: "2170", label: "happy customers" },
        { img: "/assets/img/cart/count2.png", num: "8080", label: "AWARDS won" },
        { img: "/assets/img/cart/count3.png", num: "2150", label: "HOURS WORKED" },
        { img: "/assets/img/cart/cart5.png", num: "2170", label: "COMPLETE PROJECTS" },
    ];
    return (
        <div className="counterup_section py-8">
            <div className="mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    {counters.map((c, i) => (
                        <div
                            className="w-full md:w-1/2 lg:w-1/4 px-2"
                            key={i}>
                            <div className={`single_counterup ${i % 2 ? "count-two" : ""} bg-white rounded shadow-sm p-6 text-center`}>
                                <div className="counter_img mb-3">
                                    <img
                                        src={c.img}
                                        alt=""
                                        className="mx-auto h-12 object-contain"
                                    />
                                </div>
                                <div className="counter_info">
                                    <h2 className="counter_number text-3xl font-bold">{c.num}</h2>
                                    <p className="text-sm text-gray-600 mt-1">{c.label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
