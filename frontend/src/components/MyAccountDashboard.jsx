import React from "react";
import { useState } from "react";

const MyAccountDashboard = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    return (
        <>
            <div className="flex flex-wrap gap-x-20 justify-center mt-14 mb-14 p-6">
                <div className="lg:w-1/6 w-full ">
                    <ul className="list-none p-0 m-0">
                        {tabs.map((tab) => (
                            <li
                                key={tab.id}
                                className={`transition-all font-bold mb-1 duration-300 cursor-pointer px-4 py-2 rounded hover:bg-[#00BBA6]  hover:text-white ${tab.id === activeTab
                                        ? "bg-[#00BBA6] text-white"
                                        : "bg-white"
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="  lg:ms-6 mt-5 lg:w-3/5 w-full">

                    <div className={`flex-col  ${activeTab === "dashboard" ? "flex" : "hidden"}`}>
                        <h3 className="mb-5 text-2xl font-semibold ">Dashboard</h3>
                        <p>From your account dashboard. you can easily check & view your <a className=" text-green-500  " href="#">recent orders</a>, manage your shipping and billing addresses and Edit your password and account details.</p>
                    </div>


                    <div className={`flex-col w-full ${activeTab === "orders" ? "flex" : "hidden"}`}>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Orders</h3>

                        <div className="bg-white w-full shadow-sm ring-1 ring-gray-900/5 rounded-lg overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-x divide-gray-300">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Order
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Date
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Total
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y-2 divide-gray-200">
                                        {orders.map((order) => (
                                            <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {order.id}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    {order.date}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium `}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {order.total}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <a className="inline-flex items-center gap-1.5 text-pink-600 hover:text-pink-700 font-medium transition-colors" href="">
                                                        
                                                        View
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    <div className={` ${activeTab === "accountDetails" ? "flex" : "hidden"}`}>Account Details</div>


                    <div className={` ${activeTab === "logout" ? "flex" : "hidden"}`}>Logout</div>

                </div>
            </div>
        </>
    );
};
const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "orders", label: "Orders" },
    { id: "accountDetails", label: "Account Details" },
    { id: "logout", label: "Logout" },
];

const orders = [
    {
        id: 1,
        date: 'May 10, 2023',
        status: 'Completed',
        total: '$25.00 For 1 Item',
        statusColor: 'text-green-600 bg-green-50',
    },
    {
        id: 2,
        date: 'May 10, 2023',
        status: 'Processing',
        total: '$17.00 For 1 Item',
        statusColor: 'text-amber-600 bg-amber-50',
    },
];

export default MyAccountDashboard;
