import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListingCard = ({ _id, title, description, price, image, address }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/view/${_id}`);
    };

    return (
        <div className="max-w-sm bg-white rounded-xl shadow-md p-4 transform transition-transform hover:scale-105">
            <img className="w-full h-48 rounded-lg object-cover" src={image} alt={title} />
            <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-500 mt-2">{address}</p>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>

            <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-bold text-green-600">₹{price}</span>
                <button
                    onClick={handleViewDetails}
                    className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ListingCard;
