import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    // The connect method returns a promise, so we await it
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully. ✅");
  } catch (error) {
    console.error("MongoDB connection failed: ❌", error);
    // Exit the process with a failure code
    process.exit(1);
  }
};

export default connectDB;
