const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");

const app = express();

const connectDB = require("./config/db");

app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();

app.use("/api/notes", require("./routes/noteRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`.yellow.bold);
});
