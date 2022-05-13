exports.getHome = (req, res, next) => {
  res.render("index.ejs");
};

exports.getCart = (req, res, next) => {
  res.render("cart.ejs");
};

exports.getCheckout = (req, res, next) => {
  const { money } = req.query;
  res.render("checkout.ejs", {
    money,
  });
};
