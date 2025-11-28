import React from "react";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import NewProducts from "../components/NewProducts";
import BannerArea from "../components/BannerArea";
import FeaturedProducts from "../components/FeaturedProducts";
import BlogArea from "../components/BlogArea";
import BrandLogo from "../components/BrandLogo";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";

export default function Index2() {
    return (
        <>
            <Header />
            <main>
                <HeroSlider />
                <NewProducts />
                {/* <BannerArea /> */}
                <FeaturedProducts />
                {/* <BlogArea /> */}
                <BrandLogo />
            </main>
            <Footer />
            <ProductModal />
        </>
    );
}
