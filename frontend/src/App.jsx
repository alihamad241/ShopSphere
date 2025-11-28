import { Router, Routes, Route } from "react-router-dom";
import Index2 from "./pages/Index2.jsx";
import About from "./pages/About.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import CartPage from "./pages/CartPage.jsx";
import Checkout from "./pages/Checkout.jsx";
import Contact from "./pages/Contact.jsx";
import Faq from "./pages/Faq.jsx";
import MyAccount from "./pages/MyAccount.jsx";
import ShopFullwidth from "./pages/ShopFullwidth.jsx";
import ShopList from "./pages/ShopList.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";

import { Toaster } from "react-hot-toast";

import { useUserStore } from "./stores/useUserStore";
import { useCartStore } from "./stores/useCartStore";
import { useEffect } from "react";

function App() {
    const { user, checkAuth, checkingAuth } = useUserStore();
    const { getCartItems } = useCartStore();

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    useEffect(() => {
        if (!user) return;

        getCartItems();
    }, [getCartItems, user]);

    // if (checkingAuth) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={user ? <Index2 /> : <Login />}
                    />
                    <Route
                        path="/about"
                        element={<About />}
                    />
                    <Route
                        path="/product/:id"
                        element={user ? <SingleProduct /> : <Login />}
                    />
                    <Route
                        path="/cart"
                        element={user ? <CartPage /> : <Login />}
                    />
                    <Route
                        path="/checkout"
                        element={user ? <Checkout /> : <Login />}
                    />
                    <Route
                        path="/contact"
                        element={<Contact />}
                    />
                    <Route
                        path="/faq"
                        element={<Faq />}
                    />
                    <Route
                        path="/my-account"
                        element={user ? <MyAccount /> : <Login />}
                    />
                    <Route
                        path="/shop"
                        element={user ? <ShopPage /> : <Login />}
                    />
                    <Route
                        path="/shop/fullwidth"
                        element={user ? <ShopFullwidth /> : <Login />}
                    />
                    <Route
                        path="/shop/list"
                        element={user ? <ShopList /> : <Login />}
                    />
                    <Route
                        path="/wishlist"
                        element={user ? <WishlistPage /> : <Login />}
                    />
                    <Route
                        path="/login"
                        element={<Login />}
                    />
                    <Route
                        path="/admin"
                        element={user?.role === "admin" ? <AdminPage /> : <Login />}
                    />
                    <Route
                        path="/404"
                        element={<NotFound />}
                    />
                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Routes>
            </div>
            <Toaster />
        </div>
    );
}

export default App;
