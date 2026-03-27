import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import http from "http";
import productsRouters from "./routers/products.routers.js";
import authRouter from "./routers/auth.router.js";
import logger from "./utils/logger.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
export const client = new MongoClient(MONGO_URL);
await client.connect();

// installing middleware
app.use(express.json());
app.use(cors());

export const MONGO_DATABASE = process.env.MONGO_DATABASE;

app.use("/auth", authRouter);
app.use("/products", productsRouters);

app.get("/", (request, response) => {
  return response.send({
    message: "welcome to express js server",
  });
});

const server = http.createServer(app);

server.listen(PORT, () => {
  logger.error(`The Server is running on the port - ${PORT}`);
});
