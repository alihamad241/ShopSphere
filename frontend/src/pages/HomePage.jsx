import React from 'react'
import HeaderTop from '../components/HeaderTop'
import HeaderMiddle from '../components/HeaderMiddle'
import HeaderBottom from '../components/HeaderBottom'
import PosHomeSection from '../components/PosHomeSection'
import Footer from '../components/Footer'
const HomePage = () => {
    return (
        <div>
            <div class="pos_page">

                <div class="container">

                    <div className="pos_page_inner">
                        <div className="header_area">
                            <HeaderTop />
                            <HeaderMiddle />
                            <HeaderBottom />
                        </div>
                        <PosHomeSection />

                    </div>

                </div>
            </div>
            <Footer />


        </div>
    )
}

export default HomePage