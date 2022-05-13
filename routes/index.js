const express = require("express");
const router = express.Router();
const generalRouter = require("./general.routes");
const transactionRouter = require("./transaction.routes");

const defaultRoutes = [
  {
    path: "/",
    route: generalRouter,
  },
  {
    path: "/transaction",
    route: transactionRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
