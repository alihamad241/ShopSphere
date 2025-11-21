import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
    return (
        <>
            <Header />
            <div className="breadcrumbs_area">
                <div className="mx-auto px-4">
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
                                    <li>login</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="customer_login">
                <div className="mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4">
                            <div className="account_form">
                                <h2>login</h2>
                                <form action="#">
                                    <p>
                                        <label>
                                            Username or email <span>*</span>
                                        </label>
                                        <input type="text" />
                                    </p>
                                    <p>
                                        <label>
                                            Passwords <span>*</span>
                                        </label>
                                        <input type="password" />
                                    </p>
                                    <div className="login_submit">
                                        <button type="submit">login</button>
                                        <label htmlFor="remember">
                                            <input
                                                id="remember"
                                                type="checkbox"
                                            />
                                            Remember me
                                        </label>
                                        <a href="#">Lost your password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-4">
                            <div className="account_form register">
                                <h2>Register</h2>
                                <form action="#">
                                    <p>
                                        <label>
                                            Email address <span>*</span>
                                        </label>
                                        <input type="text" />
                                    </p>
                                    <p>
                                        <label>
                                            Passwords <span>*</span>
                                        </label>
                                        <input type="password" />
                                    </p>
                                    <div className="login_submit">
                                        <button type="submit">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
