import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
  // ==================================================
  // If you prefer async/await syntax, you can use the following code instead:
  //   try {
  //     await mongoose.connect(process.env.MONGO_URI, {
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //     });
  //     console.log("MongoDB connected");
  //   } catch (error) {
  //     console.error("MongoDB connection error:", error);
  //     process.exit(1);
  //   }
};

export default connectDB;
