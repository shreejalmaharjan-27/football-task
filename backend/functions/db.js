import mongoose from 'mongoose';
const MONGO_URI = 'mongodb://shree:kitsune123@172.20.0.16:27017/';
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`Connected to ${MONGO_URI}`);
    } catch (err) {
        console.error(`Error connecting to the database: ${err.message}`);
        process.exit(1);
    }
};
const db = mongoose.connection;

db.on('error', function (err) {
    throw new Error(err);
});

db.on('error', (err) => {
    console.error(`Database connection error: ${err.message}`);
});

export { connectDB, db };