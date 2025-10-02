import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/database.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
connectDB();
console.log(process.env.PORT);

// Add this middleware to prevent caching during development
// app.use((req, res, next) => {
//   res.set("Cache-Control", "no-store");
//   next();
// });

app.get("/", (req, res) => {
  res.send("Asslam o Alaikum");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
