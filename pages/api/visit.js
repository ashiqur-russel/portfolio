import mongoose from 'mongoose';
import PageVisit from '../../models/PageVisit';

const connectToDatabase = async () => {
    if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw new Error('Failed to connect to MongoDB');
    }
};

const isLocalOrPrivateIP = (ip) => {
    return (
        ip === '127.0.0.1' ||
        ip === '95.117.250.38' ||
        ip === '::1' ||
        ip.startsWith('192.168') ||
        ip.startsWith('10.') ||
        ip.startsWith('172.')
    );
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

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
        loc,
    } = req.body;

    const userIp = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();

    if (isLocalOrPrivateIP(userIp)) {
        return res.status(200).json({ message: 'Skipping track' });
    }

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
        console.error('Error saving page visit:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
