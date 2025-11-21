import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MyAccount() {
    return (
        <>
            <Header />
            <div className="breadcrumbs_area">
                <div className="row">
                    <div className="w-full">
                        <div className="breadcrumb_content">
                            <ul>
                                <li>
                                    <a href="/">home</a>
                                </li>
                                <li>
                                    <i className="fa fa-angle-right"></i>
                                </li>
                                <li>My Account</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my_account_area">
                <div className="mx-auto px-4">
                    <h3>My Account</h3>
                    <p>Account details and orders will be shown here.</p>
                </div>
            </div>
            <Footer />
        </>
    );
}
