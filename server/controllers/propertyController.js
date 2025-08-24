<<<<<<< HEAD
import Property from '../models/property.js';
=======
// controllers/propertyController.js
import Property from '../models/propertyModel.js';
>>>>>>> 634287689d7311ee38804b027aabfbdecdbdd3af

export const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch properties' });
    }
};
<<<<<<< HEAD

export const getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
=======
>>>>>>> 634287689d7311ee38804b027aabfbdecdbdd3af
