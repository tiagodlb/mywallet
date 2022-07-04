import { Router } from "express";

import { getUser } from "../middlewares/userMiddleware.js";

import {
  getTransactions,
  addTransaction,
} from "../controllers/transactionController.js";

const transactionRouter = Router();
transactionRouter.use(getUSer);

transactionRouter.get("/transactions", getTransactions);
transactionRouter.post("/transactions", addTransaction);

export default transactionRouter;
