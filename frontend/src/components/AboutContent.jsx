import React from "react";

export default function AboutContent() {
    return (
        <section className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Left: Image */}
                <div className="w-full lg:w-1/2">
                    <div className="overflow-hidden rounded-sm">
                        <img
                            src="/assets/img/ship/about1.jpg"
                            alt="About Us"
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* Right: Content */}
                <div className="w-full lg:w-1/2">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase leading-tight">
                            We Create <br /> Wordpress Themes
                        </h1>
                        <p className="text-gray-500 leading-relaxed">
                            Duis autem vel eum iriure dolor in hendrerit in
                            vulputate velit esse molestie consequat, vel illum
                            dolore eu feugiat nulla facilisis at vero eros et
                            accumsan et iusto odio dignissim qui blandit
                            praesent luptatum zzril delenit augue duis dolore te
                            feugait nulla facilisi. Nam liber tempor cum soluta
                            nobis eleifend option congue nihil imperdiet doming
                            id quod mazim placerat facer possim assum.
                        </p>
                        <div className="pt-2">
                            <a
                                href="#"
                                className="inline-block bg-white text-black border border-black text-sm font-bold uppercase tracking-wider px-8 py-3 rounded-sm hover:bg-[#00bba6] transition-colors duration-300">
                                View Work
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
