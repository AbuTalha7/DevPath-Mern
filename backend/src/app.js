import express from "express";
import healthRoutes from "./routes/health.routes.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use("/api/health", healthRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
