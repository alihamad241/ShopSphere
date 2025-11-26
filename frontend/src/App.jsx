import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import ShopSidebar from "./pages/ShopSidebar.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Index2 />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/product"
                    element={<SingleProduct />}
                />
                <Route
                    path="/cart"
                    element={<CartPage />}
                />
                <Route
                    path="/checkout"
                    element={<Checkout />}
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
                    element={<MyAccount />}
                />
                <Route
                    path="/shop"
                    element={<ShopPage />}
                />
                <Route
                    path="/shop/fullwidth"
                    element={<ShopFullwidth />}
                />
                <Route
                    path="/shop/list"
                    element={<ShopList />}
                />
                <Route
                    path="/shop/sidebar"
                    element={<ShopSidebar />}
                />
                <Route
                    path="/wishlist"
                    element={<WishlistPage />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/admin"
                    element={<AdminPage />}
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
        </Router>
    );
}

export default App;