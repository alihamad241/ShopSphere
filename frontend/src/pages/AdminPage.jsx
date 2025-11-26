import { BarChart, PlusCircle, ShoppingBasket } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AnalyticsTab from "../components/AnalyticsTab";
import axios from "../libs/axios";
import { useUserStore } from "../stores/useUserStore";
import { useProductStore } from "../stores/useProductStore";

const tabs = [
    { id: "create", label: "Create Product", icon: PlusCircle },
    { id: "analytics", label: "Analytics", icon: BarChart },
];

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState("create");
    const { fetchAllProducts } = useProductStore();

    const { user, checkingAuth, checkAuth } = useUserStore();

    const [productForm, setProductForm] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
        category: "",
        gender: "",
        storeName: "",
    });

    const [storeForm, setStoreForm] = useState({ name: "", description: "", image: "" });
    const [message, setMessage] = useState("");

    // useEffect(() => {
    //     fetchAllProducts();
    //     if (checkingAuth) checkAuth();
    // }, [fetchAllProducts]);

    // if (checkingAuth) return <div className="p-8">Checking authentication...</div>;
    // if (!user)
    //     return (
    //         <div className="p-8">
    //             You must{" "}
    //             <a
    //                 className="text-blue-600 underline"
    //                 href="/login">
    //                 login
    //             </a>{" "}
    //             to access the admin dashboard.
    //         </div>
    //     );
    // if (user.role !== "admin") return <div className="p-8">Access Denied. Admins only.</div>;

    const handleProductSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        try {
            await axios.post("/products", productForm);
            setMessage("Product created");
            setProductForm({ name: "", description: "", price: "", image: "", category: "", gender: "", storeName: "" });
            fetchAllProducts();
        } catch (err) {
            console.error(err);
            setMessage(err?.response?.data?.message || "Error creating product");
        }
    };

    const handleStoreSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        try {
            await axios.post("/stores", storeForm);
            setMessage("Store created");
            setStoreForm({ name: "", description: "", image: "" });
        } catch (err) {
            console.error(err);
            setMessage(err?.response?.data?.message || "Error creating store");
        }
    };

    return (
        <>
            <Header />

            <div className="breadcrumbs_area">
                <div className="mx-auto px-4">
                    <div className="breadcrumb_content">
                        <ul>
                            <li>
                                <a href="/">home</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right"></i>
                            </li>
                            <li>Admin</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="shop_area py-12">
                <div className="mx-auto px-4">
                    <div className="pos_page_inner">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full px-4">
                                <motion.h1
                                    className="text-3xl font-bold mb-6 text-emerald-600 tracking-tight"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}>
                                    Admin Dashboard
                                </motion.h1>

                                <div className="mb-6 bg-white rounded shadow-sm p-4">
                                    <div className="flex justify-center mb-4">
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveTab(tab.id)}
                                                className={`relative flex items-center justify-center px-4 py-2 mx-1 rounded-md transition-colors duration-200 ${
                                                    activeTab === tab.id ? "bg-emerald-600 text-white" : "text-gray-700 hover:bg-emerald-50"
                                                }`}>
                                                <tab.icon className="mr-2 h-5 w-5" />
                                                <span>{tab.label}</span>
                                            </button>
                                        ))}
                                    </div>

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}>
                                            {activeTab === "create" && (
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="p-6 bg-white rounded">
                                                        <h3 className="text-lg font-semibold mb-3">Create Product</h3>
                                                        {message && <div className="mb-3 text-sm text-emerald-600">{message}</div>}
                                                        <form
                                                            onSubmit={handleProductSubmit}
                                                            className="space-y-3">
                                                            <input
                                                                value={productForm.name}
                                                                onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                                                                placeholder="Name"
                                                                className="w-full border px-3 py-2 rounded"
                                                            />
                                                            <input
                                                                value={productForm.price}
                                                                onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                                                                placeholder="Price"
                                                                className="w-full border px-3 py-2 rounded"
                                                            />
                                                            <input
                                                                value={productForm.image}
                                                                onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                                                                placeholder="Image URL or base64"
                                                                className="w-full border px-3 py-2 rounded"
                                                            />
                                                            <input
                                                                value={productForm.storeName}
                                                                onChange={(e) => setProductForm({ ...productForm, storeName: e.target.value })}
                                                                placeholder="Brand / Store name"
                                                                className="w-full border px-3 py-2 rounded"
                                                            />
                                                            <textarea
                                                                value={productForm.description}
                                                                onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                                                                placeholder="Short description"
                                                                className="w-full border px-3 py-2 rounded"
                                                            />
                                                            <div className="flex justify-end">
                                                                <button className="bg-emerald-600 text-white px-4 py-2 rounded">
                                                                    Create Product
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>

                                                    <div className="p-6 bg-white rounded">
                                                        <h3 className="text-lg font-semibold mb-3">Create Store / Brand</h3>
                                                        <form
                                                            onSubmit={handleStoreSubmit}
                                                            className="space-y-3">
                                                            <input
                                                                value={storeForm.name}
                                                                onChange={(e) => setStoreForm({ ...storeForm, name: e.target.value })}
                                                                placeholder="Store name"
                                                                className="w-full border px-3 py-2 rounded"
                                                            />
                                                            <input
                                                                value={storeForm.image}
                                                                onChange={(e) => setStoreForm({ ...storeForm, image: e.target.value })}
                                                                placeholder="Logo URL or base64"
                                                                className="w-full border px-3 py-2 rounded"
                                                            />
                                                            <textarea
                                                                value={storeForm.description}
                                                                onChange={(e) => setStoreForm({ ...storeForm, description: e.target.value })}
                                                                placeholder="Short description"
                                                                className="w-full border px-3 py-2 rounded"
                                                            />
                                                            <div className="flex justify-end">
                                                                <button className="bg-emerald-600 text-white px-4 py-2 rounded">Create Store</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            )}
                                            {activeTab === "analytics" && <AnalyticsTab />}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};
export default AdminPage;
