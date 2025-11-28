import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCartStore } from "../stores/useCartStore";
import CartTotals from "../components/CartTotals";
import axios from "../libs/axios";
import { toast } from "react-hot-toast";

export default function Checkout() {
    const { cart, getCartItems, updateQuantity, removeFromCart, subtotal, total, loading, coupoun } = useCartStore();
    const [billing, setBilling] = useState({ name: "", address: "", email: "" });

    const [checkoutLoading, setCheckoutLoading] = useState(false);

    useEffect(() => {
        getCartItems();
    }, [getCartItems]);

    const handleChange = (e) => setBilling((s) => ({ ...s, [e.target.name]: e.target.value }));

    const handleCheckout = async () => {
        if (!cart || cart.length === 0) {
            toast.error("Your cart is empty.");
            return;
        }

        setCheckoutLoading(true);
        try {
            const productsPayload = cart.map((item) => ({
                _id: item._id,
                name: item.name || item.title,
                image: item.image,
                price: item.price,
                quantity: item.quantity || 1,
            }));

            const couponCode = coupoun?.code || null;

            const res = await axios.post("/payment/create-checkout-session", {
                products: productsPayload,
                couponCode,
            });

            if (res.data && res.data.url) {
                window.location.href = res.data.url;
                return;
            }

            toast.error("Unable to start checkout. Please try again.");
        } catch (err) {
            console.error("Checkout error:", err);
            toast.error(err?.response?.data?.message || "Failed to create checkout session");
        } finally {
            setCheckoutLoading(false);
        }
    };

    return (
        <>
            <Header />
            <div className="breadcrumbs_area">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full">
                        <div className="breadcrumb_content">
                            <ul>
                                <li>
                                    <a href="/">home</a>
                                </li>
                                <li>
                                    <i className="fa fa-angle-right"></i>
                                </li>
                                <li>Checkout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="checkout_area">
                <div className="mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="checkout_form bg-white rounded shadow-sm p-6">
                                <h3 className="text-xl font-semibold mb-4">Billing Details</h3>
                                <form>
                                    <p>
                                        <input
                                            name="name"
                                            value={billing.name}
                                            onChange={handleChange}
                                            placeholder="Full name"
                                            type="text"
                                            className="w-full border rounded p-2 mb-3"
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="address"
                                            value={billing.address}
                                            onChange={handleChange}
                                            placeholder="Address"
                                            type="text"
                                            className="w-full border rounded p-2 mb-3"
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="email"
                                            value={billing.email}
                                            onChange={handleChange}
                                            placeholder="Email"
                                            type="email"
                                            className="w-full border rounded p-2 mb-3"
                                        />
                                    </p>
                                    <p>
                                        <label className="block text-sm font-medium mb-2">Order Notes</label>
                                        <textarea
                                            className="w-full border rounded p-2"
                                            rows={4}
                                        />
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="order_review">
                                <h3 className="text-xl font-semibold mb-4">Your Order</h3>
                                <div className="bg-white rounded shadow-sm p-4 mb-4">
                                    {loading && <div>Loading cart...</div>}
                                    {!loading && (!cart || cart.length === 0) && <div>Your cart is empty.</div>}
                                    {!loading && cart && cart.length > 0 && (
                                        <div className="space-y-4">
                                            {cart.map((item) => (
                                                <div
                                                    key={item._id}
                                                    className="flex items-center gap-4">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title || item.name}
                                                        className="w-16 h-16 object-cover rounded"
                                                    />
                                                    <div className="flex-1">
                                                        <div className="font-medium">{item.title || item.name}</div>
                                                        <div className="text-sm text-gray-600">${(item.price || 0).toFixed(2)}</div>
                                                        <div className="mt-2 flex items-center gap-2">
                                                            <input
                                                                type="number"
                                                                min={1}
                                                                value={item.quantity || 1}
                                                                onChange={(e) => updateQuantity(item._id, Number(e.target.value))}
                                                                className="w-20 border rounded p-1"
                                                            />
                                                            <button
                                                                onClick={() => removeFromCart(item._id)}
                                                                className="text-red-600 text-sm">
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <CartTotals />
                                <div className="mt-4">
                                    <button
                                        onClick={handleCheckout}
                                        disabled={checkoutLoading}
                                        className="w-full bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-700"
                                    >
                                        {checkoutLoading ? 'Processing...' : 'Proceed to Payment'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
