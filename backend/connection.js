import dns from "node:dns";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "node:url";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/users.js";
import roadmapRoutes from "./routes/roadmaps.js";

// Fix MongoDB SRV DNS lookup timeout
dns.setServers(["8.8.8.8"]);

dotenv.config({ path: fileURLToPath(new URL("./.env", import.meta.url)) });

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/api/users", userRoutes);
app.use("/roadmaps", roadmapRoutes);
app.use("/api/roadmaps", roadmapRoutes);

// Global error handler — catches any error thrown in async routes
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

async function startServer() {
  await connectDB();

  app.listen(port, () => {
    console.log(`DevPath backend listening on port ${port}`);
  });
}

startServer();