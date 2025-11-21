import React from "react";

export default function BannerArea() {
    return (
        <div className="banner_area banner_two py-8">
            <div className="mx-auto px-4">
                <div className="row">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-2">
                        <div className="single_banner relative overflow-hidden rounded shadow-sm">
                            <a
                                href="#"
                                className="block">
                                <img
                                    src="/assets/img/banner/banner7.jpg"
                                    alt=""
                                    className="w-full h-56 object-cover"
                                />
                            </a>
                            <div className="banner_title absolute left-4 bottom-4 text-white bg-black bg-opacity-40 px-3 py-1 rounded">
                                <p className="text-sm">
                                    Up to <span className="font-bold"> 40%</span> off
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-2">
                        <div className="single_banner relative overflow-hidden rounded shadow-sm">
                            <a
                                href="#"
                                className="block">
                                <img
                                    src="/assets/img/banner/banner8.jpg"
                                    alt=""
                                    className="w-full h-56 object-cover"
                                />
                            </a>
                            <div className="banner_title title_2 absolute left-4 bottom-4 text-white bg-black bg-opacity-40 px-3 py-1 rounded">
                                <p className="text-sm">
                                    sale off <span className="font-bold"> 30%</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-2">
                        <div className="single_banner relative overflow-hidden rounded shadow-sm">
                            <a
                                href="#"
                                className="block">
                                <img
                                    src="/assets/img/banner/banner11.jpg"
                                    alt=""
                                    className="w-full h-56 object-cover"
                                />
                            </a>
                            <div className="banner_title title_3 absolute left-4 bottom-4 text-white bg-black bg-opacity-40 px-3 py-1 rounded">
                                <p className="text-sm">
                                    sale off <span className="font-bold"> 30%</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
