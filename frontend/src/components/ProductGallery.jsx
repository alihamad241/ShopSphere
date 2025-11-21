import React, { useState } from "react";

export default function ProductGallery() {
    const [activePic, setActivePic] = useState("p_tab1");

    const setPic = (id) => setActivePic(id);

    return (
        <div className="lg:w-5/12 md:w-1/2 w-full px-4">
            <div className="product_tab fix">
                <div className="product_tab_button">
                    <ul
                        className="nav flex gap-2"
                        role="tablist">
                        <li>
                            <button
                                type="button"
                                className={`inline-block ${activePic === "p_tab1" ? "outline-none ring-2 ring-blue-300" : ""}`}
                                onClick={() => setPic("p_tab1")}>
                                <img
                                    src="/assets/img/cart/cart.jpg"
                                    alt=""
                                    className="rounded border h-16 object-cover"
                                />
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className={`${activePic === "p_tab2" ? "outline-none ring-2 ring-blue-300" : ""}`}
                                onClick={() => setPic("p_tab2")}>
                                <img
                                    src="/assets/img/cart/cart2.jpg"
                                    alt=""
                                    className="rounded border h-16 object-cover"
                                />
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className={`${activePic === "p_tab3" ? "outline-none ring-2 ring-blue-300" : ""}`}
                                onClick={() => setPic("p_tab3")}>
                                <img
                                    src="/assets/img/cart/cart4.jpg"
                                    alt=""
                                    className="rounded border h-16 object-cover"
                                />
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content produc_tab_c mt-4">
                    {activePic === "p_tab1" && (
                        <div
                            className="tab-pane fade show active"
                            id="p_tab1"
                            role="tabpanel">
                            <div className="modal_img relative">
                                <a href="#">
                                    <img
                                        src="/assets/img/product/product13.jpg"
                                        alt=""
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
                                        href="/assets/img/product/product13.jpg">
                                        <i className="fa fa-search-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    {activePic === "p_tab2" && (
                        <div
                            className="tab-pane fade"
                            id="p_tab2"
                            role="tabpanel">
                            <div className="modal_img">
                                <a href="#">
                                    <img
                                        src="/assets/img/product/product14.jpg"
                                        alt=""
                                        className="w-full rounded"
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
                                        href="/assets/img/product/product14.jpg">
                                        <i className="fa fa-search-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    {activePic === "p_tab3" && (
                        <div
                            className="tab-pane fade"
                            id="p_tab3"
                            role="tabpanel">
                            <div className="modal_img">
                                <a href="#">
                                    <img
                                        src="/assets/img/product/product15.jpg"
                                        alt=""
                                        className="w-full rounded"
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
                                        href="/assets/img/product/product15.jpg">
                                        <i className="fa fa-search-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
