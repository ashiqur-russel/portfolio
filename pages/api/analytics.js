import mongoose from 'mongoose';
import PageVisit from '../../models/PageVisit';

const connectToDatabase = async () => {
    if (mongoose.connections[0].readyState) {
        return;
    }

    console.log('Connecting to MongoDB...');

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw new Error('Failed to connect to MongoDB');
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
