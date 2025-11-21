import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";
import CounterUp from "../components/CounterUp";
import ProgressBar from "../components/ProgressBar";
import BrandLogo from "../components/BrandLogo";

export default function About() {
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
                                    <li>about us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutContent />
            <CounterUp />
            <ProgressBar />
            <BrandLogo
                className={"brand_about"}
                title={"Brands"}
            />
            <Footer />
        </>
    );
}
