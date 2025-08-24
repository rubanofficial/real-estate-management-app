import express from 'express';
import multer from 'multer';
import { storage } from '../utils/cloudinary.js';
import Property from '../models/property.js';
<<<<<<< HEAD
import { getPropertyById } from '../controllers/propertyController.js';
=======
>>>>>>> 634287689d7311ee38804b027aabfbdecdbdd3af

const upload = multer({ storage });
const router = express.Router();


router.post('/upload', upload.single('image'), (req, res) => {
    try {
        const imageUrl = req.file.path; // Cloudinary image URL
        res.status(200).json({ imageUrl });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Image upload failed' });
    }
});


router.post('/', async (req, res) => {
    try {
        const { name, phone, title, price, address, image } = req.body;

        // Validation check
        if (!name || !phone || !title || !price || !address || !image) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const newProperty = new Property({
            name,
            phone,
            title,
            price,
            address,
            image, // Cloudinary image URL
        });

        await newProperty.save(); // Save to MongoDB

        res.status(201).json({
            message: 'Property saved successfully!',
            property: newProperty,
        });

    } catch (error) {
        console.error('Property save error:', error);
        res.status(500).json({ error: 'Failed to save property.' });
    }
});


router.get('/properties', async (req, res) => {
    try {
        const properties = await Property.find().sort({ createdAt: -1 }); // newest first
        res.status(200).json(properties);
    } catch (error) {
        console.error('Fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch properties' });
    }
});
<<<<<<< HEAD
router.get('/:id', getPropertyById);
=======

>>>>>>> 634287689d7311ee38804b027aabfbdecdbdd3af

export default router;
