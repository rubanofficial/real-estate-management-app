import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const View = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);

    useEffect(() => {
        // Replace this with your actual API endpoint
<<<<<<< HEAD
        axios.get(`/api/${id}`)
=======
        axios.get(`/api/listings/${id}`)
>>>>>>> 634287689d7311ee38804b027aabfbdecdbdd3af
            .then((res) => setListing(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!listing) return <div>Loading...</div>;

    return (
<<<<<<< HEAD
        <div className="bg-lime-50 mx-4 my-4 rounded-lg shadow-lg shadow-black/50 mt-20 ">
            <div className="p-6 max-w-3xl mx-auto mt-20" >
                <img src={listing.image} alt={listing.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
                <p className="text-lg text-gray-600 mb-2">{listing.address}</p>
                <p className="text-gray-700 mb-4">{listing.description}</p>
                <p className="text-xl font-semibold text-green-600">₹{listing.price}</p>
            </div>
=======
        <div className="p-6 max-w-3xl mx-auto">
            <img src={listing.image} alt={listing.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
            <p className="text-lg text-gray-600 mb-2">{listing.address}</p>
            <p className="text-gray-700 mb-4">{listing.description}</p>
            <p className="text-xl font-semibold text-green-600">₹{listing.price}</p>
>>>>>>> 634287689d7311ee38804b027aabfbdecdbdd3af
        </div>
    );
};

export default View;
