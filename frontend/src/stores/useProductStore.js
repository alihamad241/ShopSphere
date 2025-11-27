import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../libs/axios";

export const useProductStore = create((set) => ({
    products: [],
    featuredProducts: [],
    selectedProduct: null,
    loading: false,
    setProducts: (products) => set({ products }),
    setFeaturedProducts: (featured) => set({ featuredProducts: featured }),
    setSelectedProduct: (product) => set({ selectedProduct: product }),
    createProduct: async (productData) => {
        set({ loading: true });
        try {
            const res = await axios.post("/products", productData);
            set((prevState) => ({
                products: [...prevState.products, res.data],
                loading: false,
            }));
        } catch (error) {
            toast.error(error.response.data.error);
            set({ loading: false });
        }
    },
    fetchAllProducts: async () => {
        set({ loading: true });
        try {
            const response = await axios.get("/products");
            set({ products: response.data.products, loading: false });
        } catch (error) {
            set({ error: "Failed to fetch products", loading: false });
            toast.error(error.response.data.error || "Failed to fetch products");
        }
    },
    fetchProductById: async (id) => {
        set({ loading: true });
        try {
            const res = await axios.get(`/products/${id}`);
            // backend may return { product }
            const product = res.data.product || res.data;
            set({ selectedProduct: product, loading: false });
            return product;
        } catch (error) {
            set({ loading: false });
            toast.error(error.response?.data?.error || "Failed to fetch product");
            return null;
        }
    },
    fetchProductByCategory: async () => {
        set({ loading: true });
        try {
            const response = await axios.get(`/products/category/${category}`);
            set({ products: response.data.products, loading: false });
        } catch (error) {
            set({ error: "Faled to fetch products", loading: false });
            toast.error(error.response.data.error || "Failed to fetch products");
        }
    },
    deleteProduct: async (productId) => {
        set({ loading: true });
        try {
            await axios.delete(`/products/${productId}`);
            set((prevProducts) => ({
                products: prevProducts.products.filter((product) => product._id !== productId),
                loading: false,
            }));
        } catch (error) {
            set({ loading: false });
            toast.error(error.response.data.error || "Failed to delete product");
        }
    },
    toggleFeaturedProduct: async (productId) => {
        set({ loading: true });
        try {
            const response = await axios.patch(`/products/${productId}`);
            // backend may return the updated product or an object with { product }
            const updated = response.data.product || response.data;
            const isFeatured = updated.isFeatured;
            set((state) => ({
                // update the global products list if present
                products: state.products.map((product) => (product._id === productId ? updated : product)),
                // update featuredProducts: add/update when featured, remove when not
                featuredProducts: isFeatured
                    ? (() => {
                          const exists = state.featuredProducts.find((p) => p._id === productId);
                          return exists
                              ? state.featuredProducts.map((p) => (p._id === productId ? updated : p))
                              : [...state.featuredProducts, updated];
                      })()
                    : state.featuredProducts.filter((p) => p._id !== productId),
                loading: false,
            }));
        } catch (error) {}
    },
    fetchFeaturedProducts: async () => {
        set({ loading: true });
        try {
            const response = await axios.get("/products/featured");
            // accept either { products: [...] } or [...]
            const data = response.data.products || response.data;
            set({ featuredProducts: data, loading: false });
        } catch (error) {
            set({ error: "Failed to fetch products", loading: false });
            console.log("Error fetching featured products:", error);
        }
    },
}));
