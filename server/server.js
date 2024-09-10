import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import carRoutes from './routes/car.route.js';

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use('/api/cars', carRoutes)

app.listen(port, () => {
  connectDB();
  console.log(`SERVER STARTED at http://localhost:${port}`);
});

