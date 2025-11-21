import React, { useState } from "react";
import ProductModal from "./ProductModal";

const PosHomeSection = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalProduct, setModalProduct] = useState(null);

    const openQuickView = (product = null) => {
        setModalProduct(product);
        setModalOpen(true);
    };

    const closeQuickView = () => {
        setModalOpen(false);
        setModalProduct(null);
    };

    return (
        <div className="pos_home_section py-12">
            <div className="mx-auto px-4">
                <div className="row">
                    <div className="w-full">
                        <div className="banner_slider slider_two">
                            <div className="slider_active owl-carousel">
                                <div
                                    className="single_slider bg-center bg-cover"
                                    style={{ backgroundImage: "url('/assets/img/slider/slider_2.png')" }}>
                                    <div className="slider_content">
                                        <div className="slider_content_inner max-w-xl text-center mx-auto py-24">
                                            <h1 className="text-4xl md:text-5xl font-bold text-white">fashion for you</h1>
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
                                    style={{ backgroundImage: "url('/assets/img/slider/slide_4.png')" }}>
                                    <div className="slider_content">
                                        <div className="slider_content_inner max-w-xl text-center mx-auto py-24">
                                            <h1 className="text-4xl md:text-5xl font-bold text-white">fashion for you</h1>
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
                                    style={{ backgroundImage: "url('/assets/img/slider/slider_3.png')" }}>
                                    <div className="slider_content">
                                        <div className="slider_content_inner max-w-xl text-center mx-auto py-24">
                                            <h1 className="text-4xl md:text-5xl font-bold text-white">fashion for you</h1>
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

            <div className="new_product_area product_two">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full">
                        <div className="block_title">
                            <h3> New Products</h3>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-4">
                    <div className="single_p_active owl-carousel">
                        <div className="lg:w-1/4 w-full px-4">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="single-product.html">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <div className="img_icone">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="product_action">
                                        <a href="#">
                                            {" "}
                                            <i className="fa fa-shopping-cart"></i> Add to cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product_content">
                                    <span className="product_price">$50.00</span>
                                    <h3 className="product_title">
                                        <a href="single-product.html">Curabitur sodales</a>
                                    </h3>
                                </div>
                                <div className="product_info">
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                title=" Add to Wishlist ">
                                                Add to Wishlist
                                            </a>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="text-blue-600 hover:underline"
                                                title="Quick view"
                                                onClick={() => openQuickView()}>
                                                View Detail
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 w-full px-4">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="single-product.html">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <div className="hot_img">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="product_action">
                                        <a href="#">
                                            {" "}
                                            <i className="fa fa-shopping-cart"></i> Add to cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product_content">
                                    <span className="product_price">$40.00</span>
                                    <h3 className="product_title">
                                        <a href="single-product.html">Quisque ornare dui</a>
                                    </h3>
                                </div>
                                <div className="product_info">
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                title=" Add to Wishlist ">
                                                Add to Wishlist
                                            </a>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="text-blue-600 hover:underline"
                                                title="Quick view"
                                                onClick={() => openQuickView()}>
                                                View Detail
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 w-full px-4">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="single-product.html">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <div className="img_icone">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="product_action">
                                        <a href="#">
                                            {" "}
                                            <i className="fa fa-shopping-cart"></i> Add to cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product_content">
                                    <span className="product_price">$60.00</span>
                                    <h3 className="product_title">
                                        <a href="single-product.html">Sed non turpiss</a>
                                    </h3>
                                </div>
                                <div className="product_info">
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                title=" Add to Wishlist ">
                                                Add to Wishlist
                                            </a>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="text-blue-600 hover:underline"
                                                title="Quick view"
                                                onClick={() => openQuickView()}>
                                                View Detail
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 w-full px-4">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="single-product.html">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <div className="hot_img">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="product_action">
                                        <a href="#">
                                            {" "}
                                            <i className="fa fa-shopping-cart"></i> Add to cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product_content">
                                    <span className="product_price">$65.00</span>
                                    <h3 className="product_title">
                                        <a href="single-product.html">Duis convallis</a>
                                    </h3>
                                </div>
                                <div className="product_info">
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                title=" Add to Wishlist ">
                                                Add to Wishlist
                                            </a>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="text-blue-600 hover:underline"
                                                title="Quick view"
                                                onClick={() => openQuickView()}>
                                                View Detail
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 w-full px-4">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="single-product.html">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <div className="img_icone">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="product_action">
                                        <a href="#">
                                            {" "}
                                            <i className="fa fa-shopping-cart"></i> Add to cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product_content">
                                    <span className="product_price">$50.00</span>
                                    <h3 className="product_title">
                                        <a href="single-product.html">Curabitur sodales</a>
                                    </h3>
                                </div>
                                <div className="product_info">
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                title=" Add to Wishlist ">
                                                Add to Wishlist
                                            </a>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="text-blue-600 hover:underline"
                                                title="Quick view"
                                                onClick={() => openQuickView()}>
                                                View Detail
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner_area banner_two">
                <div className="row">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <div className="single_banner">
                            <a href="#">
                                <img
                                    src="/assets/img/placeholder.jpg"
                                    alt=""
                                />
                            </a>
                            <div className="banner_title">
                                <p>
                                    Up to <span> 40%</span> off
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <div className="single_banner">
                            <a href="#">
                                <img
                                    src="/assets/img/placeholder.jpg"
                                    alt=""
                                />
                            </a>
                            <div className="banner_title title_2">
                                <p>
                                    sale off <span> 30%</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <div className="single_banner">
                            <a href="#">
                                <img
                                    src="/assets/img/placeholder.jpg"
                                    alt=""
                                />
                            </a>
                            <div className="banner_title title_3">
                                <p>
                                    sale off <span> 30%</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="new_product_area product_two">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full">
                        <div className="block_title">
                            <h3> featured Products</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="single_p_active owl-carousel">
                        <div className="lg:w-1/4 w-full px-4">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="single-product.html">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <div className="img_icone">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="product_action">
                                        <a href="#">
                                            {" "}
                                            <i className="fa fa-shopping-cart"></i> Add to cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product_content">
                                    <span className="product_price">$50.00</span>
                                    <h3 className="product_title">
                                        <a href="single-product.html">Curabitur sodales</a>
                                    </h3>
                                </div>
                                <div className="product_info">
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                title=" Add to Wishlist ">
                                                Add to Wishlist
                                            </a>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="text-blue-600 hover:underline"
                                                title="Quick view"
                                                onClick={() => openQuickView()}>
                                                View Detail
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 w-full px-4">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="single-product.html">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <div className="hot_img">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="product_action">
                                        <a href="#">
                                            {" "}
                                            <i className="fa fa-shopping-cart"></i> Add to cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product_content">
                                    <span className="product_price">$40.00</span>
                                    <h3 className="product_title">
                                        <a href="single-product.html">Quisque ornare dui</a>
                                    </h3>
                                </div>
                                <div className="product_info">
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                title=" Add to Wishlist ">
                                                Add to Wishlist
                                            </a>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="text-blue-600 hover:underline"
                                                title="Quick view"
                                                onClick={() => openQuickView()}>
                                                View Detail
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 w-full px-4">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="single-product.html">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <div className="img_icone">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="product_action">
                                        <a href="#">
                                            {" "}
                                            <i className="fa fa-shopping-cart"></i> Add to cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product_content">
                                    <span className="product_price">$60.00</span>
                                    <h3 className="product_title">
                                        <a href="single-product.html">Sed non turpiss</a>
                                    </h3>
                                </div>
                                <div className="product_info">
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                title=" Add to Wishlist ">
                                                Add to Wishlist
                                            </a>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="text-blue-600 hover:underline"
                                                title="Quick view"
                                                onClick={() => openQuickView()}>
                                                View Detail
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 w-full px-4">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="single-product.html">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <div className="hot_img">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="product_action">
                                        <a href="#">
                                            {" "}
                                            <i className="fa fa-shopping-cart"></i> Add to cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product_content">
                                    <span className="product_price">$65.00</span>
                                    <h3 className="product_title">
                                        <a href="single-product.html">Duis convallis</a>
                                    </h3>
                                </div>
                                <div className="product_info">
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                title=" Add to Wishlist ">
                                                Add to Wishlist
                                            </a>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="text-blue-600 hover:underline"
                                                title="Quick view"
                                                onClick={() => openQuickView()}>
                                                View Detail
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 w-full px-4">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="single-product.html">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <div className="img_icone">
                                        <img
                                            src="/assets/img/placeholder.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="product_action">
                                        <a href="#">
                                            {" "}
                                            <i className="fa fa-shopping-cart"></i> Add to cart
                                        </a>
                                    </div>
                                </div>
                                <div className="product_content">
                                    <span className="product_price">$50.00</span>
                                    <h3 className="product_title">
                                        <a href="single-product.html">Curabitur sodales</a>
                                    </h3>
                                </div>
                                <div className="product_info">
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                title=" Add to Wishlist ">
                                                Add to Wishlist
                                            </a>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="text-blue-600 hover:underline"
                                                title="Quick view"
                                                onClick={() => openQuickView()}>
                                                View Detail
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog_area blog_two">
                <div className="flex flex-wrap -mx-4">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <div className="single_blog">
                            <div className="blog_thumb">
                                <a href="blog-details.html">
                                    <img
                                        src="/assets/img/placeholder.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="blog_content">
                                <div className="blog_post">
                                    <ul>
                                        <li>
                                            <a href="#">Tech</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="blog-details.html">When an unknown took a galley of type.</a>
                                </h3>
                                <p>
                                    Distinctively simplify dynamic resources whereas prospective core competencies. Objectively pursue
                                    multidisciplinary human capital for interoperable.
                                </p>
                                <div className="post_footer">
                                    <div className="post_meta">
                                        <ul>
                                            <li>Jun 20, 2023</li>
                                            <li>3 Comments</li>
                                        </ul>
                                    </div>
                                    <div className="Read_more">
                                        <a href="blog-details.html">
                                            Read more <i className="fa fa-angle-double-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <div className="single_blog">
                            <div className="blog_thumb">
                                <a href="blog-details.html">
                                    <img
                                        src="/assets/img/placeholder.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="blog_content">
                                <div className="blog_post">
                                    <ul>
                                        <li>
                                            <a href="#">Men</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="blog-details.html">When an unknown took a galley of type.</a>
                                </h3>
                                <p>
                                    Distinctively simplify dynamic resources whereas prospective core competencies. Objectively pursue
                                    multidisciplinary human capital for interoperable.
                                </p>
                                <div className="post_footer">
                                    <div className="post_meta">
                                        <ul>
                                            <li>Jun 20, 2023</li>
                                            <li>3 Comments</li>
                                        </ul>
                                    </div>
                                    <div className="Read_more">
                                        <a href="blog-details.html">
                                            Read more <i className="fa fa-angle-double-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <div className="single_blog">
                            <div className="blog_thumb">
                                <a href="blog-details.html">
                                    <img
                                        src="/assets/img/placeholder.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="blog_content">
                                <div className="blog_post">
                                    <ul>
                                        <li>
                                            <a href="#">Women</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href="blog-details.html">When an unknown took a galley of type.</a>
                                </h3>
                                <p>
                                    Distinctively simplify dynamic resources whereas prospective core competencies. Objectively pursue
                                    multidisciplinary human capital for interoperable.
                                </p>
                                <div className="post_footer">
                                    <div className="post_meta">
                                        <ul>
                                            <li>Jun 20, 2023</li>
                                            <li>3 Comments</li>
                                        </ul>
                                    </div>
                                    <div className="Read_more">
                                        <a href="blog-details.html">
                                            Read more <i className="fa fa-angle-double-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="brand_logo brand_two">
                <div className="block_title">
                    <h3>Brands</h3>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="brand_active owl-carousel">
                        <div className="lg:w-1/6 w-full px-4 shrink-0">
                            <div className="single_brand">
                                <a href="#">
                                    <img
                                        src="/assets/img/placeholder.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/6 w-full px-4 shrink-0">
                            <div className="single_brand">
                                <a href="#">
                                    <img
                                        src="/assets/img/placeholder.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/6 w-full px-4 shrink-0">
                            <div className="single_brand">
                                <a href="#">
                                    <img
                                        src="/assets/img/placeholder.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/6 w-full px-4 shrink-0">
                            <div className="single_brand">
                                <a href="#">
                                    <img
                                        src="/assets/img/placeholder.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/6 w-full px-4 shrink-0">
                            <div className="single_brand">
                                <a href="#">
                                    <img
                                        src="/assets/img/placeholder.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/6 w-full px-4 shrink-0">
                            <div className="single_brand">
                                <a href="#">
                                    <img
                                        src="/assets/img/placeholder.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modalOpen && (
                <ProductModal
                    isOpen={modalOpen}
                    onClose={closeQuickView}
                    product={modalProduct}
                />
            )}
        </div>
    );
};

export default PosHomeSection;
