import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const View = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);

    useEffect(() => {
        // Replace this with your actual API endpoint
        axios.get(`/api/listings/${id}`)
            .then((res) => setListing(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!listing) return <div>Loading...</div>;

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <img src={listing.image} alt={listing.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
            <p className="text-lg text-gray-600 mb-2">{listing.address}</p>
            <p className="text-gray-700 mb-4">{listing.description}</p>
            <p className="text-xl font-semibold text-green-600">₹{listing.price}</p>
        </div>
    );
};

export default View;
