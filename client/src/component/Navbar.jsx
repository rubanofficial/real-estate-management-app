import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import logo from '../assets/image.png';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';

const Navbar = ({ onLoginClick }) => {
    const { user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = (
        <>
            <li>
                <Link to="/" className="text-white font-medium px-4 py-2 hover:bg-slate-700 rounded-lg transition">
                    Home
                </Link>
            </li>
            {user?.role === 'agent' && (
                <li>
                    <Link to="/seller" className="text-white font-medium px-4 py-2 hover:bg-slate-700 rounded-lg transition">
                        Seller
                    </Link>
                </li>
            )}
            <li>
                <Link to="/properties" className="text-white font-medium px-4 py-2 hover:bg-slate-700 rounded-lg transition">
                    Properties
                </Link>
            </li>
            <li>
                <Link to="/about" className="text-white font-medium px-4 py-2 hover:bg-slate-700 rounded-lg transition">
                    About Us
                </Link>
            </li>
        </>
    );

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] z-50 bg-slate-800 shadow-lg rounded-full px-6 py-2">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2 py-2">
                    <img src={logo} alt="Livity Logo" className="h-8" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-4 items-center">
                    {navLinks}
                    <li>
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

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                        {isMenuOpen ? (
                            <XMarkIcon className="h-8 w-8" />
                        ) : (
                            <Bars3Icon className="h-8 w-8" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Floating below navbar) */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full mt-2 md:hidden">
                    <div className="bg-slate-700 rounded-2xl shadow-lg mx-2 p-4">
                        <ul className="flex flex-col space-y-2">
                            {navLinks}
                            <li>
                                {user ? (
                                    <button
                                        onClick={logout}
                                        className="w-full bg-red-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-red-600 transition"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <button
                                        onClick={onLoginClick}
                                        className="w-full bg-green-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-green-600 transition"
                                    >
                                        Login
                                    </button>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
