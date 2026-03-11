import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import config from "./config/index.js";
import http from "http";
dotenv.config();

const app = express();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
export const client = new MongoClient(MONGO_URL);
await client.connect();

// installing middleware
app.use(express.json());
app.use(cors());


import productsRouters from "./routers/products.routers.js";
import cricketRouter from "./routers/cricket.router.js";
app.use("/products", productsRouters);
app.use("/cricket", cricketRouter);

app.get("/", (request, response) => {
  return response.send({
    message: "welcome to express js server",
  });
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`The Server is Running on the ${PORT}`);
});
