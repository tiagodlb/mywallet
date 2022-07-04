import { MongoClient } from "mongodb";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();

let db = null;
const mongoCLient = new MongoClient(process.env.MONGO_URL);

try {
  await MongoClient.connect();
  db = mongoClient.db(process.env.DATABASE);
  console.log(chalk.bold.green("Mongo database connected."));
} catch (error) {
  console.log(chalk.bold.red("Error connecting to database."));
  console.log(error);
}

export default db;
