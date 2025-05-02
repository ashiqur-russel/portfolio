
import mongoose from 'mongoose';
import PageVisit from '../../models/PageVisit';

const connectToDatabase = async () => {
    if (mongoose.connections[0].readyState) {
        return;
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
        const {
            country,
            timestamp,
            ip,
            hostname,
            city,
            region,
            org,
            postal,
            timezone,
            loc
        } = req.body;

        const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

        try {
            await connectToDatabase();

            const pageVisit = new PageVisit({
                country,
                timestamp,
                ip: userIp || ip,
                hostname,
                city,
                region,
                org,
                postal,
                timezone,
                loc,
            });

            await pageVisit.save();

            res.status(200).json({ message: 'Page visit data saved successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
