const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
