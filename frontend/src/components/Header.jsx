import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

export default function Header() {
    const [selectedLang, setSelectedLang] = useState("en");
    const [langOpen, setLangOpen] = useState(false);
    const [currencyOpen, setCurrencyOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState("usd");
    const langRef = useRef(null);
    const currencyRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (langRef.current && !langRef.current.contains(e.target)) {
                setLangOpen(false);
            }
            if (currencyRef.current && !currencyRef.current.contains(e.target)) {
                setCurrencyOpen(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const { user, checkingAuth, checkAuth, logout } = useUserStore();
    const navigate = useNavigate();

    const { cart, subtotal, total, getCartItems } = useCartStore();
    const itemCount = (cart || []).reduce((sum, it) => sum + (it.quantity || 0), 0);

    const handleLogout = async (e) => {
        e.preventDefault();
        await logout();
        navigate("/");
    };

    useEffect(() => {
        if (checkingAuth) checkAuth();
    }, []);

    useEffect(() => {
        // ensure cart is loaded on header mount
        getCartItems();
    }, [getCartItems]);

    return (
        <header>
            <div className="bg-white">
                <div className="header_top">
                    <div className="mx-auto px-4">
                        <div className="flex flex-wrap items-center">
                            <div className="lg:w-1/2 w-full px-4">
                                <div className="switcher">
                                    <ul>
                                        <li
                                            className="languages mr-4"
                                            ref={langRef}
                                            onClick={(e) => {
                                                if (e.target.closest(".dropdown_languages")) return;
                                                e.preventDefault();
                                                setLangOpen((v) => !v);
                                                setCurrencyOpen(false);
                                            }}>
                                            <a
                                                href="#"
                                                className="inline-flex items-center"
                                                style={{ width: "auto" }}>
                                                <img
                                                    src={selectedLang === "fr" ? "/assets/img/logo/fontlogo2.jpg" : "/assets/img/logo/fontlogo.jpg"}
                                                    alt=""
                                                    className="inline-block mr-2 h-4 w-4 object-cover"
                                                />
                                                <span className="mr-2">{selectedLang === "fr" ? "French" : "English"}</span>
                                                <i className="fa fa-angle-down"></i>
                                            </a>

                                            <ul className={"dropdown_languages" + (langOpen ? " open" : "")}>
                                                <li>
                                                    <a
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setSelectedLang("en");
                                                            setLangOpen(false);
                                                        }}>
                                                        <img
                                                            src="/assets/img/logo/fontlogo.jpg"
                                                            alt="English"
                                                            className="inline-block mr-2 h-4 w-4 object-cover"
                                                        />
                                                        English
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setSelectedLang("fr");
                                                            setLangOpen(false);
                                                        }}>
                                                        <img
                                                            src="/assets/img/logo/fontlogo2.jpg"
                                                            alt="French"
                                                            className="inline-block mr-2 h-4 w-4 object-cover"
                                                        />
                                                        French
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li
                                            className="currency"
                                            ref={currencyRef}
                                            onClick={(e) => {
                                                if (e.target.closest(".dropdown_currency")) return;
                                                e.preventDefault();
                                                setCurrencyOpen((v) => !v);
                                                setLangOpen(false);
                                            }}>
                                            <a
                                                href="#"
                                                className="inline-flex items-center"
                                                style={{ width: "auto" }}>
                                                <span className="mr-2">Currency :</span>
                                                <span className="font-semibold mr-2">{selectedCurrency === "eur" ? "€" : "$"}</span>
                                                <i className="fa fa-angle-down ml-2"></i>
                                            </a>

                                            <ul className={"dropdown_currency" + (currencyOpen ? " open" : "")}>
                                                <li>
                                                    <a
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setSelectedCurrency("usd");
                                                            setCurrencyOpen(false);
                                                        }}>
                                                        Dollar (USD)
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setSelectedCurrency("eur");
                                                            setCurrencyOpen(false);
                                                        }}>
                                                        Euro (EUR)
                                                    </a>
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
                                        {user && user.role === "admin" && (
                                            <li>
                                                <Link
                                                    to="/admin"
                                                    title="Admin Dashboard">
                                                    Admin
                                                </Link>
                                            </li>
                                        )}
                                        <li>
                                            <Link
                                                to="/cart"
                                                title="My cart">
                                                My cart
                                            </Link>
                                        </li>
                                        <li>
                                            {user ? (
                                                <a
                                                    href="#"
                                                    onClick={handleLogout}
                                                    title="Logout">
                                                    Logout
                                                </a>
                                            ) : (
                                                <Link
                                                    to="/login"
                                                    title="Login">
                                                    Login
                                                </Link>
                                            )}
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
                                            <i className="fa fa-shopping-cart mr-2"></i>
                                            <span className="font-medium">{itemCount || 0} Items</span>
                                            <span className="mx-2">-</span>
                                            <span className="font-medium">
                                                {selectedCurrency === "eur" ? "€" : "$"}
                                                {(typeof total === "number" && total >= 0 ? total : subtotal || 0).toFixed(2)}
                                            </span>
                                            <i className="fa fa-angle-down ml-2"></i>
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
                                            <ul className="flex items-center">
                                                <li className="active">
                                                    <Link
                                                        to="/"
                                                        className="text-white text-lg px-6 py-2">
                                                        HOME
                                                    </Link>
                                                </li>
                                                <li>
                                                    <div className="mega_menu_link">
                                                        <Link
                                                            to="/shop"
                                                            className="text-white hover:text-white focus:text-white active:text-white text-lg px-6 py-2">
                                                            SHOP
                                                        </Link>
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
                                                    <a
                                                        href="#"
                                                        className="text-white text-lg px-6 py-2">
                                                        WOMEN
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-white text-lg px-6 py-2">
                                                        MEN
                                                    </a>
                                                </li>
                                                <li>
                                                    <div className="mega_menu_link">
                                                        <a
                                                            href="#"
                                                            className="text-white hover:text-white focus:text-white active:text-white text-lg px-6 py-2">
                                                            PAGES
                                                        </a>
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
                                                    <Link
                                                        to="/contact"
                                                        className="text-white text-lg px-6 py-2">
                                                        CONTACT US
                                                    </Link>
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
