import mongoose from 'mongoose';
import PageVisit from '../../models/PageVisit'; // Import PageVisit model
import Click from '../../models/Click'; // Import Click model

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

        // Fetch all page visits and clicks
        const pageVisits = await PageVisit.find();
        const clicks = await Click.find();

        if (!pageVisits || !clicks) {
            console.log('No data found for page visits or clicks');
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


        const countryClicks = clicks.reduce((acc, click) => {
            acc[click.country] = (acc[click.country] || 0) + 1;
            return acc;
        }, {});

        res.status(200).json({ countryPageVisits, countryClicks });
    } catch (error) {
        console.error('Error fetching analytics data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
