import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './lib/conn.js';

// importing routes
import FeedbackRouter from './router/feedback.router.js';
import AdminRoute from './router/admin.router.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use('/api/v1/feedback', FeedbackRouter);
app.use('/api/v1/admin', AdminRoute);

app.listen(process.env.PORT || 3000, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT}`)
});