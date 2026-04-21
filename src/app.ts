import express from "express";
import compression from "compression";
import { cacheMiddleware } from "./middleware/cacheMiddleware";
import { responseTime } from "./middleware/responseTime";
import { getDataController } from "./modules/data/controllers/dataController";

const app = express();

app.use(express.json());
app.use(compression()); // gzip compression
app.use(responseTime);  // log response time

// Route with caching
app.get("/data", cacheMiddleware, getDataController);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
