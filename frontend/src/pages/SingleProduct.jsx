import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductGallery from "../components/ProductGallery";
import ProductDetails from "../components/ProductDetails";
import ProductTabs from "../components/ProductTabs";
import RelatedProducts from "../components/RelatedProducts";
import ProductModal from "../components/ProductModal";
import { useParams } from "react-router-dom";
import { useProductStore } from "../stores/useProductStore";

export default function SingleProduct() {
    const { id } = useParams();
    const { products, fetchAllProducts, loading } = useProductStore();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // If products already loaded in store, use it
        if (products && products.length) {
            const p = products.find((x) => x._id === id);
            if (p) {
                setProduct(p);
                return;
            }
        }

        // otherwise fetch all products then pick the one
        const load = async () => {
            await fetchAllProducts();
        };

        load();
    }, [id, products, fetchAllProducts]);

    useEffect(() => {
        if (!product && products && products.length) {
            const p = products.find((x) => x._id === id);
            if (p) setProduct(p);
        }
    }, [products, product, id]);

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
                                    <li>{product ? product.name : "single product"}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product_details">
                <div className="mx-auto px-4">
                    <div className="pos_page_inner">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-6/12 px-4">
                                <ProductGallery
                                    product={product}
                                    loading={loading}
                                />
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <ProductDetails
                                    product={product}
                                    loading={loading}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto px-4">
                <div className="pos_page_inner">
                    <ProductTabs />
                    <RelatedProducts />
                </div>
            </div>

            <Footer />
            <ProductModal />
        </>
    );
}
