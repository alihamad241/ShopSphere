import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductGallery from "../components/ProductGallery";
import ProductDetails from "../components/ProductDetails";
import ProductTabs from "../components/ProductTabs";
import RelatedProducts from "../components/RelatedProducts";
import ProductModal from "../components/ProductModal";

export default function SingleProduct() {
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
                                    <li>single product</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product_details">
                <div className="mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <ProductGallery />
                        <ProductDetails />
                    </div>
                </div>
            </div>

            <ProductTabs />
            <RelatedProducts />
            <Footer />
            <ProductModal />
        </>
    );
}
