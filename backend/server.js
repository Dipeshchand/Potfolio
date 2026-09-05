import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import visitorRoutes from "./routes/visitorRoutes.js";

dotenv.config();

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

app.use("/api/visitors", visitorRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio backend is running",
  });
});

// Root route
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});