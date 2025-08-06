import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLoginClick }) => (
    <nav className="fixed top-0 left-0 w-full z-50 bg-sky-400 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold text-white tracking-wide">
                Livity
            </Link>
            <ul className="flex space-x-8">
                <li>
                    <Link to="/" className="text-white hover:text-zinc-200 font-medium transition-colors my-auto">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/seller" className="text-white hover:text-zinc-200 font-medium transition-colors">
                        Seller
                    </Link>
                </li>
                <li>
                    <Link to="/properties" className="text-white hover:text-zinc-200 font-medium ">
                        Properties
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="text-white hover:text-zinc-200 font-medium transition-colors">
                        About Us
                    </Link>
                </li>
                <li>

                    <button
                        onClick={onLoginClick}
                        className="text-white hover:text-zinc-200 font-medium transition-colors bg-green-500 px-4 py-2 rounded-md"
                    >
                        Login
                    </button>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
