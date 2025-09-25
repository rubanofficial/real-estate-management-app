import React from 'react';
import bg from '../assets/bg.png';
import Featuredproperty from './FeaturedProperty';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/properties`);
    };

    return (
        // The container class makes this a responsive, centered container.
        // It now has more top margin (mt-20) to push it down from the fixed navbar.
        <div className="container mx-auto mt-20 px-4 py-8 max-w-7xl">
            <motion.div
                className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.005]"
                initial={{ opacity: 0, y: 50 }} // Initial state: invisible and slightly down
                animate={{ opacity: 1, y: 0 }} // Animate to final state: visible and in place
                transition={{ duration: 0.8, ease: "easeOut" }} // Define the animation speed
            >
                <section className="flex flex-col lg:flex-row items-center justify-between p-8 md:p-12">
                    {/* Left Content */}
                    <motion.div
                        className="lg:w-1/2 text-center lg:text-left space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                            Welcome to Livity
                        </p>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Discover Exceptional <br className="hidden md:inline" /> Homes With Livity
                        </h1>
                        <p className="text-base text-gray-600 max-w-md mx-auto lg:mx-0">
                            Find a place you’ll love to live — where comfort meets convenience.
                        </p>

                        {/* Button Group */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                            <div className="text-center bg-green-50 px-5 py-3 rounded-lg text-sm transition-all duration-300 transform hover:scale-105">
                                <p className="font-bold text-green-700">10% OFF</p>
                                <p className="text-green-500">On All Properties</p>
                            </div>
                            <button
                                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                onClick={handleViewDetails}
                            >
                                Buy now
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="lg:w-1/2 mt-12 lg:mt-0 lg:ml-12"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <img
                            src={bg}
                            alt="Apartment Building"
                            className="rounded-3xl shadow-xl w-full h-auto transition-all duration-300 transform hover:scale-105"
                        />
                    </motion.div>
                </section>
                <Featuredproperty />
            </motion.div>
        </div>
    );
};

export default Header;
