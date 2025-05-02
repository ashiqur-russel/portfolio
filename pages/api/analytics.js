import mongoose from 'mongoose';
import PageVisit from '../../models/PageVisit'; // Import PageVisit model

const connectToDatabase = async () => {
    if (mongoose.connections[0].readyState) {
        return; // Already connected
    }

    console.log('Connecting to MongoDB...');  // Log connection attempt

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');  // Log successful connection
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);  // Log connection error
        throw new Error('Failed to connect to MongoDB');  // Throw error if connection fails
    }
};

export default async function handler(req, res) {
    try {
        await connectToDatabase();

        const pageVisits = await PageVisit.find();

        if (!pageVisits) {
            return res.status(404).json({ message: 'Data not found' });
        }



        const countryPageVisits = pageVisits.reduce((acc, visit) => {
            if (!acc[visit.country]) {
                acc[visit.country] = { count: 0, data: [] };
            }
            acc[visit.country].count += 1;
            acc[visit.country].data.push({
                ip: visit.ip,
                timestamp: visit.timestamp,
            });
            return acc;
        }, {});




        res.status(200).json({ countryPageVisits });
    } catch (error) {
        console.error('Error fetching analytics data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
