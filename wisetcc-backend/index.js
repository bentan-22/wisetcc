require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { dbName: "wiset" })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../wisetcc-frontend/build")));

// Define your API routes
app.use("/api/appointments", appointmentRoutes);

// Handle other routes by serving the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../wisetcc-frontend/build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});