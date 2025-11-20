import React from 'react'

const HeaderMiddle = () => {
    return (
        <div class="header_middel">
            <div class="row align-items-center">
                    
                <div class="col-lg-3 col-md-3">
                    <div class="logo">
                        <a href="index.html"><img src="" alt=""/></a>
                    </div>
                </div>
                
                <div class="col-lg-9 col-md-9">
                    <div class="header_right_info">
                        <div class="search_bar">
                            <form action="#">
                                <input placeholder="Search..." type="text" />
                                    <button type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        <div class="shopping_cart">
                            <a href="#"><i class="fa fa-shopping-cart"></i> 2Items - $209.44 <i class="fa fa-angle-down"></i></a>

                            
                            <div class="mini_cart">
                                <div class="cart_item">
                                    <div class="cart_img">
                                        <a href="#"><img src="" alt="" /></a>
                                    </div>
                                    <div class="cart_info">
                                        <a href="#">lorem ipsum dolor</a>
                                        <span class="cart_price">$115.00</span>
                                        <span class="quantity">Qty: 1</span>
                                    </div>
                                    <div class="cart_remove">
                                        <a title="Remove this item" href="#"><i class="fa fa-times-circle"></i></a>
                                    </div>
                                </div>
                                <div class="cart_item">
                                    <div class="cart_img">
                                        <a href="#"><img src="" alt="" /></a>
                                    </div>
                                    <div class="cart_info">
                                        <a href="#">Quisque ornare dui</a>
                                        <span class="cart_price">$105.00</span>
                                        <span class="quantity">Qty: 1</span>
                                    </div>
                                    <div class="cart_remove">
                                        <a title="Remove this item" href="#"><i class="fa fa-times-circle"></i></a>
                                    </div>
                                </div>
                                <div class="shipping_price">
                                    <span> Shipping </span>
                                    <span>  $7.00  </span>
                                </div>
                                <div class="total_price">
                                    <span> total </span>
                                    <span class="prices">  $227.00  </span>
                                </div>
                                <div class="cart_button">
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