
import mongoose from 'mongoose';

const clickSchema = new mongoose.Schema({
    country: { type: String, required: true },
    timestamp: { type: String, required: true },
    ip: { type: String, required: true },
    hostname: { type: String, required: false },
    city: { type: String, required: false },
    region: { type: String, required: false },
    org: { type: String, required: false },
    postal: { type: String, required: false },
    timezone: { type: String, required: false },
    loc: { type: String, required: false },
});

export default mongoose.models.Click || mongoose.model('Click', clickSchema);
