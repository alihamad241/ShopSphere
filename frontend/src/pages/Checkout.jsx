import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Checkout() {
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
                                <li>Checkout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="checkout_area">
                <div className="mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="checkout_form">
                                <h3>Billing Details</h3>
                                <form>
                                    <p>
                                        <input
                                            placeholder="Name"
                                            type="text"
                                        />
                                    </p>
                                    <p>
                                        <input
                                            placeholder="Address"
                                            type="text"
                                        />
                                    </p>
                                    <p>
                                        <input
                                            placeholder="Email"
                                            type="email"
                                        />
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="order_review">
                                <h3>Your Order</h3>
                                <p className="mb-2">Order summary will appear here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
