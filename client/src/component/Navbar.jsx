import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLoginClick }) => (
<<<<<<< HEAD
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] z-50 bg-sky-300 shadow-lg rounded-full px-6 py-2">
        <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-white tracking-wide rounded-full px-4 py-2 hover:bg-sky-500 transition">
                Livity
            </Link>
            <ul className="flex space-x-4 items-center">
                <li>
                    <Link to="/" className="text-white font-medium rounded-full px-4 py-2 hover:bg-sky-500 transition">
=======
    <nav className="fixed top-0 left-0 w-full z-50 bg-sky-400 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold text-white tracking-wide">
                Livity
            </Link>
            <ul className="flex space-x-8">
                <li>
                    <Link to="/" className="text-white hover:text-zinc-200 font-medium transition-colors my-auto">
>>>>>>> 634287689d7311ee38804b027aabfbdecdbdd3af
                        Home
                    </Link>
                </li>
                <li>
<<<<<<< HEAD
                    <Link to="/seller" className="text-white font-medium rounded-full px-4 py-2 hover:bg-sky-500 transition">
=======
                    <Link to="/seller" className="text-white hover:text-zinc-200 font-medium transition-colors">
>>>>>>> 634287689d7311ee38804b027aabfbdecdbdd3af
                        Seller
                    </Link>
                </li>
                <li>
<<<<<<< HEAD
                    <Link to="/properties" className="text-white font-medium rounded-full px-4 py-2 hover:bg-sky-500 transition">
=======
                    <Link to="/properties" className="text-white hover:text-zinc-200 font-medium ">
>>>>>>> 634287689d7311ee38804b027aabfbdecdbdd3af
                        Properties
                    </Link>
                </li>
                <li>
<<<<<<< HEAD
                    <Link to="/about" className="text-white font-medium rounded-full px-4 py-2 hover:bg-sky-500 transition">
=======
                    <Link to="/about" className="text-white hover:text-zinc-200 font-medium transition-colors">
>>>>>>> 634287689d7311ee38804b027aabfbdecdbdd3af
                        About Us
                    </Link>
                </li>
                <li>
<<<<<<< HEAD
                    <button
                        onClick={onLoginClick}
                        className="bg-green-500 text-white font-medium rounded-full px-6 py-2 hover:bg-green-600 transition"
=======

                    <button
                        onClick={onLoginClick}
                        className="text-white hover:text-zinc-200 font-medium transition-colors bg-green-500 px-4 py-2 rounded-md"
>>>>>>> 634287689d7311ee38804b027aabfbdecdbdd3af
                    >
                        Login
                    </button>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
