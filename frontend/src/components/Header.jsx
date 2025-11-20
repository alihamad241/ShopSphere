import React from 'react'
import HeaderTop from '../components/HeaderTop'
import HeaderMiddle from '../components/HeaderMiddle'
import HeaderBottom from '../components/HeaderBottom'

const Header = () => {
    return (
        <div className="header_area">
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
        </div>
    )
}

export default Header