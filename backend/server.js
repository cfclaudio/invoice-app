const express = require("express");
// Allows .env file
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;

// Initialize express
const app = express();

app.use("/api/invoices", require("./routes/invoiceRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
