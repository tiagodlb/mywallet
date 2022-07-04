import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import chalk from "chalk";
import authRouter from "./routes/authRouter.js";
import transactionRouter from "./routes/transactionRouter.js";

const app = express;
app.use(json());
app.use(cors());

dotenv.config();

app.use(authRouter);
app.use(transactionRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(chalk.bold.blue(`Server is running on port ${port}`));
});
