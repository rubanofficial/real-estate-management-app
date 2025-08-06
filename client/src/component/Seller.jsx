import React, { useState } from 'react';

const Seller = () => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        title: '',
        price: '',
        address: '',
    });
    const [imageFile, setImageFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let imageUrl = '';
        if (imageFile) {
            try {
                const imgData = new FormData();
                imgData.append('image', imageFile);

                const res = await fetch('http://localhost:3001/api/properties/upload', {
                    method: 'POST',
                    body: imgData,
                });

                const data = await res.json();
                imageUrl = data.imageUrl;
                setUploadedImageUrl(imageUrl);
            } catch (err) {
                console.error(err);
                return alert('Image upload failed.');
            }
        } else {
            return alert('Please choose an image.');
        }

        try {
            const res = await fetch('http://localhost:3001/api/properties', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, image: imageUrl }),
            });

            if (res.ok) {
                alert('Property submitted successfully!');
                setForm({ name: '', phone: '', title: '', price: '', address: '' });
                setImageFile(null);
                setUploadedImageUrl('');
            } else {
                alert('Failed to submit property.');
            }
        } catch (err) {
            console.error(err);
            alert('Server error while saving property.');
        }
    };

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 mt-10">
            <div className="bg-white rounded-xl shadow-lg w-[80%] max-w-4xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Seller Property Form</h2>
                <form onSubmit={handleSubmit} className="flex flex-wrap gap-6">
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="name" className="mb-2 font-medium">Name</label>
                        <input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="border border-gray-300 rounded-md px-4 py-2"
                        />
                    </div>

                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="phone" className="mb-2 font-medium">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="border border-gray-300 rounded-md px-4 py-2"
                        />
                    </div>

                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="title" className="mb-2 font-medium">Property Title</label>
                        <input
                            id="title"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="Enter property title"
                            className="border border-gray-300 rounded-md px-4 py-2"
                        />
                    </div>

                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="price" className="mb-2 font-medium">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                            placeholder="Enter price"
                            className="border border-gray-300 rounded-md px-4 py-2"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="address" className="mb-2 font-medium">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            rows="3"
                            value={form.address}
                            onChange={handleChange}
                            placeholder="Enter full property address"
                            className="border border-gray-300 rounded-md px-4 py-2"
                        ></textarea>
                    </div>

                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="image" className="mb-2 font-medium">Upload Photo</label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            className="border border-gray-300 rounded-md px-4 py-2"
                            onChange={(e) => setImageFile(e.target.files[0])}
                        />
                        {uploadedImageUrl && (
                            <img
                                src={uploadedImageUrl}
                                alt="preview"
                                className="mt-3 w-40 rounded-md shadow"
                            />
                        )}
                    </div>

                    <div className="w-full flex justify-center mt-6">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Submit Property
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Seller;
