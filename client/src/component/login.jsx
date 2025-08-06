import React, { useState } from 'react';
import Signup from './signup';
import axios from 'axios';

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

            alert(res.data.message);
            onClose();
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMsg(error.response.data.message);
            } else {
                setErrorMsg("Something went wrong");
            }
        }
    };

    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl font-bold"
                >
                    &times;
                </button>

                <div className="flex justify-center gap-4 mb-6">
                    <button
                        className={`px-6 py-2 rounded ${!showSignup ? 'bg-sky-600 text-white' : 'bg-gray-200 text-black'}`}
                        onClick={() => setShowSignup(false)}
                    >
                        Login
                    </button>
                    <button
                        className={`px-6 py-2 rounded ${showSignup ? 'bg-sky-600 text-white' : 'bg-gray-200 text-black'}`}
                        onClick={() => setShowSignup(true)}
                    >
                        Signup
                    </button>
                </div>

                {showSignup ? (
                    <Signup setShowSignup={setShowSignup} />
                ) : (
                    <form onSubmit={handleLogin} className="space-y-4">
                        <h2 className="text-2xl font-bold text-center">Login</h2>

                        {errorMsg && (
                            <p className="text-red-600 text-center">{errorMsg}</p>
                        )}

                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-sky-400"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-sky-400"
                                placeholder="Enter your password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded"
                        >
                            Login
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;
