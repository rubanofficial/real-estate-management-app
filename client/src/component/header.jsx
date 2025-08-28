import React from 'react';
import bg from '../assets/bg.png';
import Featuredproperty from './Featuredproperty';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/properties`);
    };

    return (
        <div className="bg-lime-50 mx-4 my-4 rounded-lg shadow-lg shadow-black/50 mt-20">
            <section className="flex flex-col md:flex-row items-center justify-between px-6 py-10 ">
                {/* Left Content */}
                <div className="md:w-1/2 text-center md:text-left space-y-4 ">
                    <p className="text-lg text-BLACK-500">Welcome to Livity</p>
                    <h1 className="text-7xl font-bold text-BLACK-800">
                        Discover Exceptional <br /> Homes With Livity
                    </h1>
                    <p className="text-gray-600">
                        Find a place you’ll love to live — where comfort meets convenience.
                    </p>

                    {/* Button Group */}
                    <div className="flex items-center justify-center md:justify-start space-x-4 mt-4">
                        <div className="text-center bg-gray-100 px-4 py-2 rounded-md text-sm">
                            <p className="font-bold text-black">10% OFF</p>
                            <p className="text-gray-500">On All Properties</p>
                        </div>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-all" onClick={handleViewDetails}>
                            Buy now
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <img src={bg} alt="Apartment Building" className="rounded-md shadow-md w-full h-auto" />
                </div>
            </section>
            <Featuredproperty />
        </div>
    );
};

export default Header;
