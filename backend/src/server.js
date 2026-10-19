import "dotenv/config";
import app from "./app.js";

const port = Number(process.env.PORT) || 5000;

const server = app.listen(port, () => {
  console.info(`Backend listening on http://localhost:${port}`);
});

server.on("error", (error) => {
  console.error("Failed to start backend server:", error);
  process.exitCode = 1;
});
