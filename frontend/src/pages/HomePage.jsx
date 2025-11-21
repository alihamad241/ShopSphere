import React from "react";

import PosHomeSection from "../components/PosHomeSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
const HomePage = () => {
    return (
        <div>
            <div className="pos_page py-8">
                <div className="mx-auto px-4">
                    <div className="pos_page_inner">
                        <Header />
                        <PosHomeSection />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
