import mongoose from 'mongoose';

// Define the schema for clicks
const clickSchema = new mongoose.Schema({
    country: { type: String, required: true },
    timestamp: { type: String, required: true },
    ip: { type: String, required: true }, // Capture IP address for clicks
});

// Export the Click model
export default mongoose.models.Click || mongoose.model('Click', clickSchema);
