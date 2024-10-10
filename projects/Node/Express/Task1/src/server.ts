import express from 'express';
import dotenv from 'dotenv';
import { errorHandler, notFoundHandler } from './middleware/errorHandlers';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/users', userRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});