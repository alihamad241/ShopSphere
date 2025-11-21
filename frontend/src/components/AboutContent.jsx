import React from "react";

export default function AboutContent() {
    return (
        <section className="about_section py-12">
            <div className="mx-auto px-4">
                <div className="row items-center">
                    <div className="w-full md:w-1/2 px-2">
                        <div className="about_thumb">
                            <img
                                src="/assets/img/ship/about1.jpg"
                                alt=""
                                className="w-full rounded shadow-sm object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <div className="about_content">
                            <h1 className="text-3xl font-bold leading-tight">
                                WE CREATE <br />
                                WORDPRESS THEMES
                            </h1>
                            <p className="text-gray-700 mt-4">
                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
                                nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
                                duis dolore te feugait nulla facilisi.
                            </p>
                            <div className="view__work mt-6">
                                <a
                                    href="#"
                                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
                                    view work
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
