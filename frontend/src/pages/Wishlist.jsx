import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Wishlist() {
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
                                <li>Wishlist</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wishlist_area">
                <div className="mx-auto px-4">
                    <h3>My Wishlist</h3>
                    <p>Saved items will be shown here.</p>
                </div>
            </div>
            <Footer />
        </>
    );
}
