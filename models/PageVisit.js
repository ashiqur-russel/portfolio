import mongoose from 'mongoose';

const pageVisitSchema = new mongoose.Schema({
    country: { type: String, required: true },
    timestamp: { type: String, required: true },
    ip: { type: String, required: true },

});

export default mongoose.models.PageVisit || mongoose.model('PageVisit', pageVisitSchema);
