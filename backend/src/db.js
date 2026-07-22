import mongoose from 'mongoose';

export const connectDatabase = (mongoUri) => mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 8000 });
