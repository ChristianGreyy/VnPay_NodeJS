const express = require("express");
const generalRouter = express.Router();
const { generalController } = require("../controllers");

generalRouter.get("/", generalController.getHome);
generalRouter.get("/cart", generalController.getCart);
generalRouter.get("/checkout", generalController.getCheckout);

module.exports = generalRouter;
