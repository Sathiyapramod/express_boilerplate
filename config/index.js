import * as dotenv from "dotenv";
dotenv.config();

const config = {
  database: process.env.MONGO_DATABASE,
};

export default config;
