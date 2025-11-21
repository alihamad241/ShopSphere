import React from "react";
import GiftCouponCard from "./components/GiftCouponCard";
import CartTotals from "./components/CartTotals";
import CartPage from "./pages/CartPage";
import { BrowserRouter } from "react-router-dom";
import TestWishlistItem from "./pages/test";

export default function App() {
  return (
    <BrowserRouter>
      <TestWishlistItem />
    </BrowserRouter>
  );
}
