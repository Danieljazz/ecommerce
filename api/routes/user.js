const userRouter = require("express").Router();

userRouter.post("/userauth", (req, res) => {
  const user = req.body.username;
  res.send("Hi " + user);
});

module.exports = userRouter;
