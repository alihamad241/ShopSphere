import React from 'react'
import HeaderTop from '../components/HeaderTop'
import HeaderMiddle from '../components/HeaderMiddle'
import HeaderBottom from '../components/HeaderBottom'
import PosHomeSection from '../components/PosHomeSection'
const HomePage = () => {
    return (
        <div>
            <div className="pos_page_inner">
                <div className="header_area">
                    <HeaderTop />
                    <HeaderMiddle />
                    <HeaderBottom />
                </div>
                <PosHomeSection />

            </div>

            <h1>Welcome to the Home Page</h1>
        </div>
    )
}

export default HomePage