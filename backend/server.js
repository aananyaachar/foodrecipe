const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/connectionDb");
const app = express();
const cors= require("cors")

// Load environment variables
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDb();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors())

// Routes
app.use("/recipe", require("./routes/recipe"));

// Simple GET route for testing
app.get("/", (req, res) => {
    res.json({ message: "hello" });
});

// Start the server
app.listen(PORT, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log(`App is running on port ${PORT}`);
    }
});
