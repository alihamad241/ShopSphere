import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCartStore } from "../stores/useCartStore";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "../libs/axios";

const stripePromise = loadStripe("pk_test_51KZYccCoOZF2UhtOwdXQl3vcizup20zqKqT9hVUIsVzsdBrhqbUI2fE0ZdEVLdZfeHjeyFXtqaNsyCJCmZWnjNZa00PzMAjlcL");

const CartTotals = () => {
    const { total, subtotal, coupon, isCouponApplied, cart } = useCartStore();

    const savings = subtotal - total;
    const shipping = 15;
    const formattedShipping = shipping.toFixed(2);
    const formattedSubtotal = subtotal.toFixed(2);
    const formattedTotal = total.toFixed(2);
    const formattedSavings = savings.toFixed(2);

    const [processing, setProcessing] = useState(false);

    const handlePayment = async () => {
        const stripe = await stripePromise;
        try {
            setProcessing(true);
            const res = await axios.post("/payment/create-checkout-session", {
                products: cart,
                couponCode: coupon ? coupon.code : null,
            });

            const session = res.data;

            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result && result.error) {
                console.error(result.error);
                setProcessing(false);
            }
        } catch (err) {
            console.error("Checkout error:", err);
            setProcessing(false);
        }
    };

    return (
        <div className="w-full border shadow-md bg-white">
            {/* Header */}
            <div className="bg-black text-white px-4 py-2 font-bold">CART TOTALS</div>

            <div className="p-4 space-y-3">
                {/* Subtotal */}
                <div className="flex justify-between text-gray-700">
                    <span className="font-bold">Subtotal</span>
                    <span>${formattedSubtotal}</span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between text-gray-700">
                    <span className="font-bold">Shipping</span>
                    <span>Flat Rate: ${formattedShipping}</span>
                </div>

                {/* Right-aligned Calculate Shipping above total */}
                <p className="text-right text-sm text-red-600 cursor-pointer">Calculate shipping</p>

                {/* Total */}
                <div className="flex justify-between border-t border-gray-300 pt-2 text-gray-900">
                    <span className="font-bold">Total</span>
                    <span>${formattedTotal}</span>
                </div>

                {/* Checkout button */}
                <div className="text-right">
                    <button
                        onClick={handlePayment}
                        disabled={processing || !cart || cart.length === 0}
                        className={`px-4 inline-block text-white py-2 font-bold transition-colors duration-200 ${
                            processing || !cart || cart.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-[#00BBA6] hover:bg-[#009f89]"
                        }`}>
                        {processing ? "Processing..." : "PROCEED TO CHECKOUT"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartTotals;
