// server.ts

import express, { Response, Request, Express } from 'express';
import dotenv from 'dotenv';
import { getXataClient } from './xata'; // Adjust the import path if necessary
//import bcrypt from 'bcrypt'; // For password hashing

dotenv.config();

const app: Express = express();
app.use(express.json()); // Middleware to parse JSON bodies

const PORT = process.env.PORT || 3000; // Default port if not specified

// Define an interface for the request body
interface RegisterRequest {
    email: string;
    password: string;
    name: string;
}

app.post('/register', async (req: Request<{}, {}, RegisterRequest>, res: Response) => {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
        res.status(400).json({ message: 'All fields are required' }); // Return after sending response
    }

    const client = getXataClient();

    try {
        // Hash the password before saving it to the database
        //const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user in the Xata database
        await client.db.users.create({
            email,
            password: password, // Store the hashed password
            name
        });

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});