import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        image: {
            type: String, // Cloudinary image URL
            required: true,
        },
    },
    { timestamps: true }
);

const Property = mongoose.model('Property', propertySchema);

export default Property;
