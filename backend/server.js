const express = require("express");
const colors = require("colors");
// Allows .env file
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT;

connectDB();

// Initialize express
const app = express();

// Add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/invoices", require("./routes/invoiceRoutes"));

app.get("/", (req, res) => {
  res.send("Welcome to cfclaudio Invoices API");
});

// Overwrites default express error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
