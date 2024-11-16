import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';
import signUp from "./img/signup.png"

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Sign up successful!');
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8">
                <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg p-8 space-y-6">
                    <div className="text-center">
                        <img
                            src={signUp}
                            alt="Logo"
                            className="mx-auto mb-4"
                        />
                        <h2 className="text-3xl font-semibold text-gray-800">Sign Up</h2>
                        <p className="text-sm text-gray-500">Create a new account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your username"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 mt-4 bg-[#db4444] text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 hover:bg-red-600"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="text-center mt-6 space-y-3">
                        <button className="w-full py-3 bg-blue-500 text-white rounded-lg flex justify-center items-center space-x-2 hover:bg-blue-600">
                            <FaFacebook size={20} />
                            <span>Sign up with Facebook</span>
                        </button>

                        <button className="w-full py-3 mt-3 bg-gray-500 text-white rounded-lg flex justify-center items-center space-x-2 hover:bg-gray-600">
                            <FaGoogle size={20} />
                            <span>Sign up with Google</span>
                        </button>

                        <button className="w-full py-3 mt-3 bg-black text-white rounded-lg flex justify-center items-center space-x-2 hover:bg-gray-800">
                            <FaApple size={20} />
                            <span>Sign up with Apple</span>
                        </button>
                    </div>

                    <div className="text-center mt-6 text-sm text-gray-500">
                        <p>Already have an account? <a href="*" className="text-blue-500 hover:underline">Login</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Signup;