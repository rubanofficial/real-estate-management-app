// controllers/propertyController.js
import Property from '../models/propertyModel.js';

export const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch properties' });
    }
};
