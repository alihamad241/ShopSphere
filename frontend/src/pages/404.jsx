import React, { useState } from "react";
import {
    Search,
    ShoppingCart,
    Menu,
    X,
    ChevronDown,
    MapPin,
    Phone,
    Mail,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Wifi,
} from "lucide-react";

// --- Components ---

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="font-sans text-gray-600">
            {/* Header Top */}
            <div className="border-b border-gray-200 py-2 bg-gray-50 text-sm">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-6 mb-2 md:mb-0">
                        {/* Language */}
                        <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#00bba6]">
                            <span>English</span> <ChevronDown size={12} />
                            <div className="absolute top-full left-0 bg-white shadow-md py-2 px-4 hidden group-hover:block z-50 min-w-[100px] border">
                                <div className="hover:text-[#00bba6] py-1">
                                    English
                                </div>
                                <div className="hover:text-[#00bba6] py-1">
                                    French
                                </div>
                            </div>
                        </div>
                        {/* Currency */}
                        <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#00bba6]">
                            <span>Currency : $</span> <ChevronDown size={12} />
                            <div className="absolute top-full left-0 bg-white shadow-md py-2 px-4 hidden group-hover:block z-50 min-w-[100px] border">
                                <div className="hover:text-[#00bba6] py-1">
                                    Dollar (USD)
                                </div>
                                <div className="hover:text-[#00bba6] py-1">
                                    Euro (EUR)
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Links */}
                    <div className="flex space-x-4 text-xs md:text-sm uppercase tracking-wide">
                        <a href="#" className="hover:text-[#00bba6]">
                            Contact
                        </a>
                        <a href="#" className="hover:text-[#00bba6]">
                            Wishlist
                        </a>
                        <a href="#" className="hover:text-[#00bba6]">
                            My Account
                        </a>
                        <a href="#" className="hover:text-[#00bba6]">
                            Login
                        </a>
                    </div>
                </div>
            </div>

            {/* Header Middle */}
            <div className="py-8">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Logo */}
                    <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                        <div className="text-3xl font-bold text-gray-800">
                            CORON
                        </div>
                    </div>

                    {/* Search & Cart */}
                    <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center justify-end gap-6">
                        {/* Search Bar */}
                        <div className="relative w-full md:max-w-md">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full border border-gray-300 pl-4 pr-10 py-2 rounded-sm focus:outline-none focus:border-[#00bba6]"
                            />
                            <button className="absolute right-0 top-0 h-full px-4 text-gray-500 hover:text-blue-500">
                                <Search size={18} />
                            </button>
                        </div>

                        {/* Cart */}
                        <div className="relative group">
                            <a
                                href="#"
                                className="flex items-center gap-2 font-medium hover:text-[#00bba6]">
                                <ShoppingCart size={20} />
                                <span>2 Items - $209.44</span>
                                <ChevronDown size={14} />
                            </a>
                            {/* Mini Cart Dropdown */}
                            <div className="absolute right-0 top-full bg-white shadow-lg border p-4 w-72 hidden group-hover:block z-50">
                                <div className="flex gap-4 mb-4 border-b pb-2">
                                    <div className="w-16 h-16 bg-gray-200"></div>{" "}
                                    {/* Placeholder Img */}
                                    <div>
                                        <a
                                            href="#"
                                            className="font-medium hover:text-[#00bba6]">
                                            Sample Product
                                        </a>
                                        <div className="text-sm text-gray-500">
                                            $115.00 x 1
                                        </div>
                                    </div>
                                    <button className="ml-auto text-red-500">
                                        <X size={16} />
                                    </button>
                                </div>
                                <div className="flex justify-between font-bold mb-4">
                                    <span>Total:</span>
                                    <span>$227.00</span>
                                </div>
                                <button className="w-full bg-gray-800 text-white py-2 hover:bg-[#00bba6] transition">
                                    CHECKOUT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="bg-gray-800 text-white relative">
                <div className="container mx-auto px-4">
                    {/* Desktop Menu */}
                    <nav className="hidden lg:block">
                        <ul className="flex space-x-8 text-sm font-bold uppercase tracking-wider">
                            <li className="group relative py-4">
                                <a href="#" className="hover:text-[#00bba6]">
                                    Home
                                </a>
                                {/* Dropdown Example */}
                                <div className="absolute top-full left-0 bg-white text-gray-600 shadow-lg p-4 w-48 hidden group-hover:block z-40 border-t-2 border-[#00bba6]">
                                    <ul className="space-y-2 font-normal normal-case">
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-[#00bba6]">
                                                Home Version 1
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-[#00bba6]">
                                                Home Version 2
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="py-4">
                                <a href="#" className="hover:text-[#00bba6]">
                                    Shop
                                </a>
                            </li>
                            <li className="py-4">
                                <a href="#" className="hover:text-[#00bba6]">
                                    Women
                                </a>
                            </li>
                            <li className="py-4">
                                <a href="#" className="hover:text-[#00bba6]">
                                    Men
                                </a>
                            </li>
                            <li className="py-4">
                                <a href="#" className="hover:text-[#00bba6]">
                                    Pages
                                </a>
                            </li>
                            <li className="py-4">
                                <a href="#" className="hover:text-[#00bba6]">
                                    Blog
                                </a>
                            </li>
                            <li className="py-4">
                                <a href="#" className="hover:text-[#00bba6]">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden py-3 flex justify-between items-center">
                        <span className="font-bold uppercase">Menu</span>
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }>
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Content */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-gray-900 text-white px-4 py-4 space-y-2 border-t border-gray-700">
                        <a
                            href="#"
                            className="block py-2 border-b border-gray-700">
                            Home
                        </a>
                        <a
                            href="#"
                            className="block py-2 border-b border-gray-700">
                            Shop
                        </a>
                        <a
                            href="#"
                            className="block py-2 border-b border-gray-700">
                            Women
                        </a>
                        <a
                            href="#"
                            className="block py-2 border-b border-gray-700">
                            Men
                        </a>
                        <a href="#" className="block py-2">
                            Contact
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

const NotFoundSection = () => {
    return (
        <div className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center text-center bg-white p-12 shadow-sm rounded-md max-w-3xl mx-auto">
                    <h1 className="text-9xl font-bold text-gray-800 mb-4">
                        404
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4 uppercase">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-gray-500 mb-8 max-w-lg">
                        Sorry but the page you are looking for does not exist,
                        has been removed, name changed or is temporarily
                        unavailable.
                    </p>

                    <form className="w-full max-w-md flex mb-6">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-1 border border-gray-300 px-4 py-3 focus:outline-none focus:border-blue-500 rounded-l-sm"
                        />
                        <button className="bg-gray-800 hover:bg-blue-500 text-white px-6 py-3 rounded-r-sm transition duration-300">
                            <Search size={20} />
                        </button>
                    </form>

                    <a
                        href="/"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 uppercase text-sm tracking-wide">
                        Back to Home Page
                    </a>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200 text-gray-600">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* About Us */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 uppercase mb-6">
                            About Us
                        </h3>
                        <p className="mb-6 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <div className="space-y-3 text-sm">
                            <p className="flex items-start gap-3">
                                <MapPin
                                    className="shrink-0 text-blue-500"
                                    size={18}
                                />
                                <span>
                                    19 Interpro Road Madison, AL 35758, USA
                                </span>
                            </p>
                            <p className="flex items-center gap-3">
                                <Phone
                                    className="shrink-0 text-blue-500"
                                    size={18}
                                />
                                <span>(012) 234 432 3568</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <Mail
                                    className="shrink-0 text-blue-500"
                                    size={18}
                                />
                                <a
                                    href="mailto:Contact@plazathemes.com"
                                    className="hover:text-blue-500">
                                    Contact@plazathemes.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* My Account */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 uppercase mb-6">
                            My Account
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    Your Account
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    My orders
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    My credit slips
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    My addresses
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Informations */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 uppercase mb-6">
                            Information
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    Specials
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    Our store(s)!
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    Terms and conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    About us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Extras */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 uppercase mb-6">
                            Extras
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    Brands
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    Gift Vouchers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    Affiliates
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    Specials
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">
                                    Privacy policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <div className="flex space-x-4 mb-2 text-sm justify-center md:justify-start">
                            <a href="#" className="hover:text-blue-500">
                                About Us
                            </a>
                            <a href="#" className="hover:text-blue-500">
                                Customer Service
                            </a>
                            <a href="#" className="hover:text-blue-500">
                                Privacy Policy
                            </a>
                        </div>
                        <p className="text-sm text-gray-500">
                            Copyright © 2023{" "}
                            <a
                                href="#"
                                className="text-blue-500 hover:underline">
                                Pos Coron
                            </a>
                            . All rights reserved.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition">
                            <Facebook size={18} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition">
                            <Twitter size={18} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition">
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition">
                            <Instagram size={18} />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition">
                            <Wifi size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="grow">
                <NotFoundSection />
            </main>
            <Footer />
        </div>
    );
}
