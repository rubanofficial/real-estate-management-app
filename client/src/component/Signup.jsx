import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Signup = ({ setShowSignup, onClose }) => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm();

    const submitCall = async (data) => {
        try {
            const userRole = data.isAgent ? 'agent' : 'client'; // Determine role based on checkbox

            const response = await axios.post("http://localhost:3001/api/auth/register", {
                name: data.name,
                email: data.email,
                password: data.password,
                role: userRole
            });

            console.log(response.data.message);
            onClose();
        } catch (error) {
            console.error("Registration failed:", error);
            if (error.response && error.response.data && error.response.data.message) {
                // Set a server-side error on the form
                setError("email", {
                    type: "server",
                    message: error.response.data.message,
                });
            } else {
                setError("name", {
                    type: "server",
                    message: "Registration failed. Please try again.",
                });
            }
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 text-2xl font-bold"
            >
                &times;
            </button>
            <form onSubmit={handleSubmit(submitCall)} className="space-y-6">

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        {...register('name', {
                            required: "Name is required",
                            minLength: { value: 3, message: "Name must be at least 3 characters" }
                        })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        {...register('email', {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email address"
                            }
                        })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        {...register('password', {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be at least 6 characters" }
                        })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                {/* Agent Checkbox */}
                <div className="flex items-center space-x-2">
                    <input
                        id="isAgent"
                        type="checkbox"
                        {...register('isAgent')}
                        className="h-4 w-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                    />
                    <label className="text-sm text-gray-700" htmlFor="isAgent">Are you an agent?</label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 rounded-lg shadow-lg transition-colors duration-200"
                >
                    Sign Up
                </button>
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">Already have an account?
                        <button type="button" onClick={() => setShowSignup(false)} className="text-sky-600 hover:text-sky-800 font-semibold ml-1">
                            Login
                        </button>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Signup;
