import mongoose from 'mongoose';
import PageVisit from '../../models/PageVisit'; // Import PageVisit model

// Connect to MongoDB
const connectToDatabase = async () => {
    if (mongoose.connections[0].readyState) {
        return; // Already connected
    }

    console.log('Connecting to MongoDB...');

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw new Error('Failed to connect to MongoDB');
    }
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { country, timestamp } = req.body;

        // Capture the user's IP address from the request headers
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;


        try {
            // Connect to the database
            await connectToDatabase();


            // Create a new PageVisit document
            const pageVisit = new PageVisit({
                country,
                timestamp,
                ip, // Include the IP address
            });

            // Save the page visit data to MongoDB
            await pageVisit.save();

            res.status(200).json({ message: 'Page visit data saved successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        // Handle non-POST requests
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
