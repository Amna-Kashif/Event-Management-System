import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI);

    mongoose.connection.on('connected', () => {
        console.log('Connecting to MongoDB');
    })
    mongoose.connection.on('error', (err) => {
        console.log(`Error connecting to MongoDB ${err}`);     
    })
} catch (error) {
    console.log(`Error connecting to MongoDB ${error}`);
}
}