import { create } from "zustand";
import axios from "../libs/axios";
import { toast } from "react-hot-toast";

export const useCartStore = create((set, get) => ({
    cart: [],
    coupoun: null,
    total: 0,
    subtotal: 0,
    isCouponApplied: false,

    getCartItems: async () => {
        try {
            const res = await axios.get("/cart");
            // backend returns an array of cart items
            set({ cart: res.data });
            get().calculateTotals();
        } catch (error) {
            set({ cart: [] });
            toast.error(error.response.data.message || "Something went wrong, please try again.");
        }
    },

    clearCart: async () => {
        set({ cart: [], total: 0, subtotal: 0, coupon: null });
    },

    addToCart: async (product) => {
        try {
            await axios.post("/cart", { productId: product._id });
            toast.success("Product added to cart");

            set((prevState) => {
                const existingProduct = prevState.cart.find((item) => item._id === product._id);
                const newCart = existingProduct
                    ? prevState.cart.map((item) => (item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item))
                    : [...prevState.cart, { ...product, quantity: 1 }];
                return { cart: newCart };
            });
        } catch (error) {
            toast.error(error.response.data.message || "Something went wrong, please try again.");
        }
    },

    removeFromCart: async (productId) => {
        try {
            await axios.delete(`/cart/`, { data: { productId } });
            toast.success("Product removed from cart");
            // refresh cart from server to get populated product objects
            await get().getCartItems();
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to remove item from cart");
        }
    },

    updateQuantity: async (productId, quantity) => {
        try {
            await axios.put(`/cart/${productId}`, { quantity });
            // refresh cart to get populated product objects and recalculate totals
            await get().getCartItems();
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update quantity");
        }
    },

    calculateTotals: () => {
        const { cart, coupon } = get();
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        let total = subtotal;
        if (coupon) {
            const discount = subtotal * (coupon.discountPercentage / 100);
            total = subtotal - discount;
        }

        set({ subtotal, total });
    },
}));
