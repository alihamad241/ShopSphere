import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ShopPage() {
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
                                <li>Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop_area">
                <div className="mx-auto px-4">
                    <h3>Shop</h3>
                    <p>All shop pages consolidated here. Choose a layout from header menu.</p>
                </div>
            </div>
            <Footer />
        </>
    );
}
