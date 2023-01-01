const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.EcHmnmt8, (err, user) => {
      if (err) res.status(403).json("Token is not valid");
      else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).send("You are not authenticated!");
  }
};

const verifyTokenAndAuthenticate = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.body.userId || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Authentication error");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Authentication error");
    }
  });
};
module.exports = { verifyTokenAndAuthenticate, verifyTokenAndAdmin };
