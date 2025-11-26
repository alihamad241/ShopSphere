import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useUserStore } from "../stores/useUserStore";
import { Loader } from "lucide-react"; // Assuming you have lucide-react installed


const Login = () => {
    // --- State for Login Form ---
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    // --- State for Register Form ---
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
    });

    // --- Backend Store ---
    const { login, signup, loading } = useUserStore();

    // --- Handlers ---
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        login(loginEmail, loginPassword);
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        signup(registerData);
    };
    return (
        <>
            <Header />
            <div className="breadcrumbs_area">
                <div className="mx-auto px-4">
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
                                    <li>login</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="customer_login">
                <div className="mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4">
                            <div className="account_form">
                                <h2>login</h2>
                                <form onSubmit={handleLoginSubmit}>
                                    <p>
                                        <label>
                                            Username or email <span>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={loginEmail}
                                            onChange={(e) =>
                                                setLoginEmail(e.target.value)
                                            }
                                        />
                                    </p>
                                    <p>
                                        <label>
                                            Passwords <span>*</span>
                                        </label>
                                        <input
                                            type="password"
                                            value={loginPassword}
                                            onChange={(e) =>
                                                setLoginPassword(e.target.value)
                                            }
                                        />
                                    </p>
                                    <div className="login_submit">
                                        <button
                                            type="submit"
                                            disabled={loading}>
                                            {loading ? (
                                                <div className="flex items-center justify-center">
                                                    <Loader className="animate-spin h-4 w-4 mr-2" />
                                                    Logging in...
                                                </div>
                                            ) : (
                                                "login"
                                            )}
                                        </button>
                                        <label htmlFor="remember">
                                            <input
                                                id="remember"
                                                type="checkbox"
                                            />
                                            Remember me
                                        </label>
                                        <a href="#">Lost your password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-4">
                            <div className="account_form register">
                                <h2>Register</h2>
                                <form onSubmit={handleRegisterSubmit}>
                                    <p>
                                        <label>
                                            Name <span>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={registerData.name}
                                            onChange={(e) =>
                                                setRegisterData({
                                                    ...registerData,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                    </p>
                                    <p>
                                        <label>
                                            Email address <span>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={registerData.email}
                                            onChange={(e) =>
                                                setRegisterData({
                                                    ...registerData,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </p>
                                    <p>
                                        <label>
                                            Passwords <span>*</span>
                                        </label>
                                        <input
                                            type="password"
                                            value={registerData.password}
                                            onChange={(e) =>
                                                setRegisterData({
                                                    ...registerData,
                                                    password: e.target.value,
                                                })
                                            }
                                        />
                                    </p>
                                    <div className="login_submit">
                                        <button
                                            type="submit"
                                            disabled={loading}>
                                            {loading ? (
                                                <div className="flex items-center justify-center">
                                                    <Loader className="animate-spin h-4 w-4 mr-2" />
                                                    Registering...
                                                </div>
                                            ) : (
                                                "Register"
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};
export default Login;
