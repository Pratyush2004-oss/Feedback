import express from 'express';

const router = express.Router();
import 'dotenv/config';

router.post('/', (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.adminEmail && password === process.env.adminPassword) {
            return res.status(200).json({ message: 'Admin logged in successfully', admin: { email } });
        }
        else {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    } catch (error) {
        console.log("Error in admin login route", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
})

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Admin logged in successfully', admin: { adminEmail } });
})

export default router;