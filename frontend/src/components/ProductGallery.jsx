import React, { useState } from "react";

export default function ProductGallery({ product, loading }) {
    const [activePic, setActivePic] = useState("p_tab1");

    const setPic = (id) => setActivePic(id);

    const thumbs = product
        ? [product.image, product.image, product.image]
        : ["/assets/img/cart/cart.jpg", "/assets/img/cart/cart2.jpg", "/assets/img/cart/cart4.jpg"];
    const activeIndex = Math.max(0, parseInt(activePic.replace("p_tab", ""), 10) - 1 || 0);
    const mainImage = thumbs[activeIndex] || thumbs[0] || "/assets/img/product/product13.jpg";

    return (
        <div className="lg:w-5/12 md:w-1/2 w-full px-4">
            <div className="product_tab fix">
                <div className="product_tab_button">
                    <ul
                        className="nav flex gap-2"
                        role="tablist">
                        {thumbs.map((t, idx) => {
                            const id = `p_tab${idx + 1}`;
                            return (
                                <li key={id}>
                                    <button
                                        type="button"
                                        className={`inline-block ${activePic === id ? "outline-none ring-2 ring-blue-300" : ""}`}
                                        onClick={() => setPic(id)}>
                                        <img
                                            src={t}
                                            alt=""
                                            className="rounded border h-16 object-cover"
                                        />
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="tab-content produc_tab_c mt-4">
                    <div
                        className="tab-pane fade show active"
                        id={activePic}
                        role="tabpanel">
                        <div className="modal_img relative">
                            <a href="#">
                                <img
                                    src={mainImage}
                                    alt={product?.name || "product image"}
                                    className="w-full block rounded"
                                />
                            </a>
                            <div className="img_icone absolute top-2 left-2">
                                <img
                                    src="/assets/img/cart/span-new.png"
                                    alt=""
                                />
                            </div>
                            <div className="view_img absolute top-2 right-2">
                                <a
                                    className="large_view inline-flex items-center justify-center p-2 bg-white border rounded"
                                    href={mainImage}>
                                    <i className="fa fa-search-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
