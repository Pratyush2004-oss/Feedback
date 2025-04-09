import express from 'express';
import feedbackModel from '../model/feedback.model.js';

const router = express.Router();

// getting all the fields
router.get('/', async (req, res) => {
    try {
        const feedbacks = await feedbackModel.find().sort({ createdAt: -1 });
        res.status(200).json({ feedbacks });
    } catch (error) {
        console.log("Error in getting all the feedbacks", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
})

// posting the feedback
router.post('/add', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const feedback = new feedbackModel({
            name,
            email,
            message
        });
        const feedbackSaved = await feedback.save();
        res.status(201).json({ message: 'Feedback added successfully', feedbackSaved });
    } catch (error) {
        console.log("Error in adding the feedback", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
})

export default router;