import { create } from "zustand";
import axios from "../libs/axios";
import { toast } from "react-hot-toast";

export const useCartStore = create((set, get) => ({
    cart: [],
    wishlist: [],
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

    addToCart: async (productOrId) => {
        try {
            // accept either a product object or an id string
            const productId = typeof productOrId === "string" ? productOrId : productOrId?._id;
            if (!productId) {
                toast.error("Invalid product");
                return;
            }
            await axios.post("/cart", { productId });
            toast.success("Product added to cart");

            // try to update local cart optimistically
            set((prevState) => {
                const existingProduct = prevState.cart.find((item) => item._id === productId);
                const newCart = existingProduct
                    ? prevState.cart.map((item) => (item._id === productId ? { ...item, quantity: item.quantity + 1 } : item))
                    : // if we don't have product details, add a minimal placeholder; server refresh will populate
                      [...prevState.cart, { _id: productId, quantity: 1 }];
                return { cart: newCart };
            });
            // refresh server-backed cart to ensure populated product objects
            await get().getCartItems();
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong, please try again.");
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
    // wishlist helpers (client-side persisted)
    loadWishlist: () => {
        try {
            const raw = localStorage.getItem("wishlist_items");
            const list = raw ? JSON.parse(raw) : [];
            set({ wishlist: list });
        } catch (e) {
            set({ wishlist: [] });
        }
    },
    addToWishlist: (product) => {
        if (!product || !product._id) return;
        set((state) => {
            const exists = state.wishlist.find((p) => p._id === product._id);
            const updated = exists ? state.wishlist : [...state.wishlist, product];
            try {
                localStorage.setItem("wishlist_items", JSON.stringify(updated));
            } catch (e) {}
            return { wishlist: updated };
        });
        toast.success("Added to wishlist");
    },
    removeFromWishlist: (productId) => {
        set((state) => {
            const updated = state.wishlist.filter((p) => p._id !== productId);
            try {
                localStorage.setItem("wishlist_items", JSON.stringify(updated));
            } catch (e) {}
            return { wishlist: updated };
        });
        toast.success("Removed from wishlist");
    },
}));
