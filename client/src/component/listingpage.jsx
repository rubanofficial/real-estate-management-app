import { useEffect, useState } from "react";
import axios from "axios";
import ListingCard from "./ListingCard";

const ListingPage = () => {
    const [listings, setListings] = useState([]);


    useEffect(() => {
        axios
            .get("http://localhost:3001/api/properties")
            .then((res) => {
                setListings(res.data);
            })
            .catch((err) => {
                console.error("Error fetching properties:", err);
            });
    }, []);

    return (
        <div className="px-4 shadow-lg shadow-black/50 bg-lime-50 mt-20 mx-4 mb-2 p-6 rounded-2xl ">
            <div className="mb-4 flex justify-end me-3.5">
                <input
                    type="text"
                    placeholder="Search properties..."
                    className="border p-2 w-2xs rounded "
                />
                <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Search
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-h-screen rounded-lg">

                {listings.map((property) => (
                    <ListingCard
                        key={property._id}
                        _id={property._id}
                        title={property.title}
                        description={property.description}
                        price={property.price}
                        image={property.image}
                        address={property.address}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListingPage;
