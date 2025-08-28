// Signup.js
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Signup = ({ setShowSignup }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitCall = async (data) => {
        try {
            const response = await axios.post("http://localhost:3001/api/auth/register", data);
            if (response.status === 201) {
                alert("Registration Successful!!");
                setShowSignup(false); // Redirect to login after successful signup
            }
        } catch (error) {
            console.log("Registration failed:", error);
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <form className="bg-white rounded-lg shadow-lg p-8 max-w-sm mx-auto space-y-6" onSubmit={handleSubmit(submitCall)}>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign Up</h2>

            {/* Name */}
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    {...register('name', {
                        required: "Name is required",
                        minLength: { value: 3, message: "Name must be at least 3 characters" }
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
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
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    {...register('password', {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be at least 6 characters" }
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded transition"
            >
                Sign Up
            </button>
        </form>
    );
};

export default Signup;
