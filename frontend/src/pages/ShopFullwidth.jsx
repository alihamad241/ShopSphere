import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ShopFullwidth() {
    return (
        <>
            <Header />
            <div className="breadcrumbs_area">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full">
                        <div className="breadcrumb_content">
                            <ul>
                                <li>
                                    <a href="/">home</a>
                                </li>
                                <li>
                                    <i className="fa fa-angle-right"></i>
                                </li>
                                <li>Shop Fullwidth</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop_area">
                <div className="mx-auto px-4">
                    <h3>Shop - Fullwidth Grid</h3>
                    <p>Products grid will be displayed here.</p>
                </div>
            </div>
            <Footer />
        </>
    );
}
