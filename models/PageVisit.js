import mongoose from 'mongoose';

const pageVisitSchema = new mongoose.Schema({
    country: { type: String, required: false },
    timestamp: { type: String, required: true },
    ip: { type: String, required: false },
    hostname: { type: String, required: false },
    city: { type: String, required: false },
    region: { type: String, required: false },
    org: { type: String, required: false },
    postal: { type: String, required: false },
    timezone: { type: String, required: false },
    loc: { type: String, required: false },
});

export default mongoose.models.PageVisit || mongoose.model('PageVisit', pageVisitSchema);
