const express = require("express");
const transactionRouter = express.Router();
const { transactionController } = require("../controllers");

transactionRouter.post(
  "/create_payment_url",
  transactionController.createPaymentURL
);

transactionRouter.get("/vnpay_return", transactionController.vnPayReturn);

module.exports = transactionRouter;
