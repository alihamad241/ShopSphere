import React from "react";

export default function HeroSlider() {
    return (
        <section className="pos_home_section py-12">
            <div className="mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full">
                        <div className="banner_slider slider_two">
                            <div className="slider_active owl-carousel">
                                <div
                                    className="single_slider bg-center bg-cover"
                                    style={{ backgroundImage: "url(/assets/img/slider/slider_2.png)" }}>
                                    <div className="slider_content">
                                        <div className="slider_content_inner max-w-xl text-center mx-auto py-24">
                                            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">fashion for you</h1>
                                            <p className="text-white mt-4">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Cumque eligendi quia, ratione porro,
                                                nemo non.
                                            </p>
                                            <a
                                                href="#"
                                                className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded">
                                                shop now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="single_slider bg-center bg-cover"
                                    style={{ backgroundImage: "url(/assets/img/slider/slide_4.png)" }}>
                                    <div className="slider_content">
                                        <div className="slider_content_inner max-w-xl text-center mx-auto py-24">
                                            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">fashion for you</h1>
                                            <p className="text-white mt-4">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Cumque eligendi quia, ratione porro,
                                                nemo non.
                                            </p>
                                            <a
                                                href="#"
                                                className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded">
                                                shop now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="single_slider bg-center bg-cover"
                                    style={{ backgroundImage: "url(/assets/img/slider/slider_3.png)" }}>
                                    <div className="slider_content">
                                        <div className="slider_content_inner max-w-xl text-center mx-auto py-24">
                                            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">fashion for you</h1>
                                            <p className="text-white mt-4">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Cumque eligendi quia, ratione porro,
                                                nemo non.
                                            </p>
                                            <a
                                                href="#"
                                                className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded">
                                                shop now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
