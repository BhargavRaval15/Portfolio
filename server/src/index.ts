import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import contactRoutes from './routes/contactRoutes';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app: Express = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);

// Home route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Bhargav Raval Portfolio API' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
}); 