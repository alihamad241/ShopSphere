import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="bg-white">
                <div className="header_top">
                    <div className="mx-auto px-4">
                        <div className="flex flex-wrap items-center">
                            <div className="lg:w-1/2 w-full px-4">
                                <div className="switcher">
                                    <ul>
                                        <li className="languages">
                                            <a href="#">
                                                <img
                                                    src="/assets/img/logo/fontlogo.jpg"
                                                    alt=""
                                                />{" "}
                                                English <i className="fa fa-angle-down"></i>
                                            </a>
                                            <ul className="dropdown_languages">
                                                <li>
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/logo/fontlogo.jpg"
                                                            alt=""
                                                        />{" "}
                                                        English
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img
                                                            src="/assets/img/logo/fontlogo2.jpg"
                                                            alt=""
                                                        />{" "}
                                                        French{" "}
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="currency">
                                            <a href="#">
                                                {" "}
                                                Currency : $ <i className="fa fa-angle-down"></i>
                                            </a>
                                            <ul className="dropdown_currency">
                                                <li>
                                                    <a href="#"> Dollar (USD)</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Euro (EUR) </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full px-4">
                                <div className="header_links text-right">
                                    <ul>
                                        <li>
                                            <Link
                                                to="/contact"
                                                title="Contact">
                                                Contact
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/wishlist"
                                                title="wishlist">
                                                My wishlist
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/my-account"
                                                title="My account">
                                                My account
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/cart"
                                                title="My cart">
                                                My cart
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/login"
                                                title="Login">
                                                Login
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header_middel">
                    <div className="mx-auto px-4">
                        <div className="flex flex-wrap items-center">
                            <div className="lg:w-1/4 md:w-1/4 w-full px-4">
                                <div className="logo">
                                    <Link to="/">
                                        <img
                                            src="/assets/img/logo/logo.jpg.png"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="lg:w-3/4 md:w-3/4 w-full px-4">
                                <div className="header_right_info">
                                    <div className="search_bar">
                                        <form
                                            action="#"
                                            className="flex">
                                            <input
                                                placeholder="Search..."
                                                type="text"
                                                className="border border-gray-300 rounded-l px-3 py-2 w-full"
                                            />
                                            <button
                                                type="submit"
                                                className="bg-gray-800 text-white px-3 py-2 rounded-r">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="shopping_cart ml-4">
                                        <Link
                                            to="/cart"
                                            className="inline-flex items-center text-gray-800">
                                            <i className="fa fa-shopping-cart mr-2"></i> 2Items - $209.44 <i className="fa fa-angle-down ml-2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header_bottom">
                    <div className="mx-auto px-4">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full">
                                <div className="main_menu_inner">
                                    <div className="main_menu hidden lg:block">
                                        <nav>
                                            <ul>
                                                <li className="active">
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li>
                                                    <div className="mega_menu_link">
                                                        <Link to="/shop">shop</Link>
                                                        <div className="mega_menu">
                                                            <div className="mega_items">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="/shop/list">shop list</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/shop/fullwidth">shop Full Width Grid</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/shop/fullwidth">shop Full Width list</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/shop/sidebar">shop Right Sidebar</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/shop/sidebar">shop list Right Sidebar</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/product">Product Details</Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#">women</a>
                                                </li>
                                                <li>
                                                    <a href="#">men</a>
                                                </li>
                                                <li>
                                                    <div className="mega_menu_link">
                                                        <a href="#">pages</a>
                                                        <div className="mega_menu">
                                                            <div className="mega_items">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="/about">About Us</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/my-account">my account</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/faq">Frequently Questions</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/404">404</Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link to="/contact">contact us</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
