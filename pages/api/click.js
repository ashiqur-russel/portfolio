import mongoose from 'mongoose';
import Click from '../../models/Click'; // Import the Click model

// Connect to MongoDB
const connectToDatabase = async () => {
    if (mongoose.connections[0].readyState) {
        return; // Already connected
    }
    await mongoose.connect(process.env.NEXT_API_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { userAgent, country, timestamp } = req.body;

        try {
            // Connect to the database
            await connectToDatabase();
            console.log('Connected to MongoDB');

            // Create a new click entry
            const click = new Click({
                userAgent,
                country,
                timestamp,
            });

            // Save the click data to the database
            await click.save();

            // Respond with success
            return res.status(200).json({ message: 'Click data saved successfully' });
        } catch (error) {
            console.error('Error saving click data:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    // Handle non-POST requests
    return res.status(405).json({ message: 'Method Not Allowed' });
}
