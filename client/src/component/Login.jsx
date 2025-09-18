import React, { useState } from 'react';
import Signup from './Signup';
import axios from 'axios';
import logo from '../assets/image.png'; // Assuming you have saved your logo here

const Login = ({ onClose }) => {
    const [showSignup, setShowSignup] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:3001/api/auth/login', {
                email,
                password,
            });

            // In a real app, you would save the JWT token here
            console.log("Login successful! Token:", res.data.token);
            alert(res.data.message);
            onClose();
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMsg(error.response.data.message);
            } else {
                setErrorMsg("Something went wrong. Please try again later.");
            }
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 flex justify-center items-center">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative transform transition-all duration-300 scale-100 opacity-100">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 text-3xl font-light"
                >
                    &times;
                </button>

                {/* Logo Section */}
                <div className="flex justify-center mb-8">
                    <img src={logo} alt="Livity Logo" className="w-36" />
                </div>

                <div className="flex justify-center mb-6">
                    <button
                        className={`px-8 py-3 rounded-l-full font-semibold transition-colors duration-200 ${!showSignup ? 'bg-sky-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        onClick={() => setShowSignup(false)}
                    >
                        Login
                    </button>
                    <button
                        className={`px-8 py-3 rounded-r-full font-semibold transition-colors duration-200 ${showSignup ? 'bg-sky-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        onClick={() => setShowSignup(true)}
                    >
                        Signup
                    </button>
                </div>

                {showSignup ? (
                    <Signup setShowSignup={setShowSignup} />
                ) : (
                    <form onSubmit={handleLogin} className="space-y-6">
                        <h2 className="text-3xl font-extrabold text-gray-800 text-center">Welcome Back</h2>

                        {errorMsg && (
                            <p className="text-red-500 text-center text-sm">{errorMsg}</p>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 rounded-lg shadow-lg transition-colors duration-200"
                        >
                            Log in
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;