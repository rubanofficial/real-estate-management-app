import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLoginClick }) => (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] z-50 bg-sky-400 shadow-lg rounded-full px-6 py-2">
        <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-white tracking-wide rounded-full px-4 py-2 hover:bg-sky-500 transition">
                Livity
            </Link>
            <ul className="flex space-x-4 items-center">
                <li>
                    <Link to="/" className="text-white font-medium rounded-full px-4 py-2 hover:bg-sky-500 transition">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/seller" className="text-white font-medium rounded-full px-4 py-2 hover:bg-sky-500 transition">
                        Seller
                    </Link>
                </li>
                <li>
                    <Link to="/properties" className="text-white font-medium rounded-full px-4 py-2 hover:bg-sky-500 transition">
                        Properties
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="text-white font-medium rounded-full px-4 py-2 hover:bg-sky-500 transition">
                        About Us
                    </Link>
                </li>
                <li>
                    <button
                        onClick={onLoginClick}
                        className="bg-green-500 text-white font-medium rounded-full px-6 py-2 hover:bg-green-600 transition"
                    >
                        Login
                    </button>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
