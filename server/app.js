import express from 'express';
import { configDotenv } from 'dotenv';
import cors from 'cors';
import { connectDb } from './database/database.js';
import authRoute from './route/authRoute.js'

configDotenv();
connectDb();


const PORT = process.env.PORT || 1500;
const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hey!!!')
})

// API Route
app.use('/api/auth', authRoute)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
})