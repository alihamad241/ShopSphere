import React from "react";

export default function BlogArea() {
    const posts = [
        { img: "/assets/img/blog/blog3.jpg", cat: "Tech", title: "When an unknown took a galley of type." },
        { img: "/assets/img/blog/blog4.jpg", cat: "Men", title: "When an unknown took a galley of type." },
        { img: "/assets/img/blog/blog1.jpg", cat: "Women", title: "When an unknown took a galley of type." },
    ];
    return (
        <div className="blog_area blog_two py-12">
            <div className="mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    {posts.map((p, i) => (
                        <div
                            className="w-full md:w-1/2 lg:w-1/3 px-2"
                            key={i}>
                            <div className="single_blog bg-white rounded shadow-sm overflow-hidden">
                                <div className="blog_thumb">
                                    <a
                                        href="#"
                                        className="block">
                                        <img
                                            src={p.img}
                                            alt=""
                                            className="w-full h-48 object-cover"
                                        />
                                    </a>
                                </div>
                                <div className="blog_content p-4">
                                    <div className="blog_post">
                                        <ul>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-sm text-blue-600">
                                                    {p.cat}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="mt-2 text-lg font-semibold">
                                        <a
                                            href="#"
                                            className="text-gray-800 hover:text-blue-600">
                                            {p.title}
                                        </a>
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Distinctively simplify dynamic resources whereas prospective core competencies.
                                    </p>
                                    <div className="post_footer mt-4 flex items-center justify-between text-sm text-gray-500">
                                        <div className="post_meta">
                                            <ul className="flex gap-3">
                                                <li>Jun 20, 2023</li>
                                                <li>3 Comments</li>
                                            </ul>
                                        </div>
                                        <div className="Read_more">
                                            <a
                                                href="#"
                                                className="text-blue-600">
                                                Read more <i className="fa fa-angle-double-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
