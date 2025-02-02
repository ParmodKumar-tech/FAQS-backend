const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const faqsRoute=require("./routes/faqs");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// MongoDB Connection
const dbURL = process.env.DB_URL;
async function connectDB() {
  try {
    await mongoose.connect(dbURL);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
  }
}
connectDB();

// Use routes
app.use("/", faqsRoute);

// ✅ Instead of `app.listen()`, export for Vercel
module.exports = app;
