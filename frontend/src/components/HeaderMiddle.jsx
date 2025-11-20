import React from 'react'

const HeaderMiddle = () => {
    return (
        <div className="header_middel">
            <div className="row align-items-center">
                    
                <div className="col-lg-3 col-md-3">
                    <div className="logo">
                        <a href="index.html"><img src="../assets/img/placeholder.jpg" alt=""/></a>
                    </div>
                </div>
                
                <div className="col-lg-9 col-md-9">
                    <div className="header_right_info">
                        <div className="search_bar">
                            <form action="#">
                                <input placeholder="Search..." type="text" />
                                    <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                        <div className="shopping_cart">
                            <a href="#"><i className="fa fa-shopping-cart"></i> 2Items - $209.44 <i className="fa fa-angle-down"></i></a>

                            
                            <div className="mini_cart">
                                <div className="cart_item">
                                    <div className="cart_img">
                                        <a href="#"><img src="../assets/img/placeholder.jpg" alt="" /></a>
                                    </div>
                                    <div className="cart_info">
                                        <a href="#">lorem ipsum dolor</a>
                                        <span className="cart_price">$115.00</span>
                                        <span className="quantity">Qty: 1</span>
                                    </div>
                                    <div className="cart_remove">
                                        <a title="Remove this item" href="#"><i className="fa fa-times-circle"></i></a>
                                    </div>
                                </div>
                                <div className="cart_item">
                                    <div className="cart_img">
                                        <a href="#"><img src="../assets/img/placeholder.jpg" alt="" /></a>
                                    </div>
                                    <div className="cart_info">
                                        <a href="#">Quisque ornare dui</a>
                                        <span className="cart_price">$105.00</span>
                                        <span className="quantity">Qty: 1</span>
                                    </div>
                                    <div className="cart_remove">
                                        <a title="Remove this item" href="#"><i className="fa fa-times-circle"></i></a>
                                    </div>
                                </div>
                                <div className="shipping_price">
                                    <span> Shipping </span>
                                    <span>  $7.00  </span>
                                </div>
                                <div className="total_price">
                                    <span> total </span>
                                    <span className="prices">  $227.00  </span>
                                </div>
                                <div className="cart_button">
                                    <a href="checkout.html"> Check out</a>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMiddle