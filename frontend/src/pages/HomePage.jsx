import React from 'react'

import PosHomeSection from '../components/PosHomeSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
const HomePage = () => {
    return (
        <div>
            <div class="pos_page">

                <div class="container">

                    <div className="pos_page_inner">
                        <Header />
                        <PosHomeSection />

                    </div>

                </div>
            </div>
            <Footer />


        </div>
    )
}

export default HomePage