import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/image.png';

const Navbar = ({ onLoginClick }) => {
    const { user, logout } = useAuth();

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] z-50 bg-slate-800 shadow-lg rounded-full px-6 py-2">
            <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2 py-2">
                    <img src={logo} alt="Livity Logo" className="h-8" />
                </Link>
                <ul className="flex space-x-4 items-center">
                    <li>
                        <Link to="/" className="text-white font-medium rounded-full px-4 py-2 hover:bg-slate-700 transition">
                            Home
                        </Link>
                    </li>
                    {/* Conditionally render the 'Seller' link for agents */}
                    {user?.role === 'agent' && (
                        <li>
                            <Link to="/seller" className="text-white font-medium rounded-full px-4 py-2 hover:bg-slate-700 transition">
                                Seller
                            </Link>
                        </li>
                    )}
                    <li>
                        <Link to="/properties" className="text-white font-medium rounded-full px-4 py-2 hover:bg-slate-700 transition">
                            Properties
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white font-medium rounded-full px-4 py-2 hover:bg-slate-700 transition">
                            About Us
                        </Link>
                    </li>
                    <li>
                        {/* Conditionally render Login or Logout button */}
                        {user ? (
                            <button
                                onClick={logout}
                                className="bg-red-500 text-white font-medium rounded-full px-6 py-2 hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                onClick={onLoginClick}
                                className="bg-green-500 text-white font-medium rounded-full px-6 py-2 hover:bg-green-600 transition"
                            >
                                Login
                            </button>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
