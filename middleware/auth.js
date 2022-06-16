const jwt = require("jsonwebtoken");
const user = require("../models/Task");
const authenticationMidddleWare = async (request, response, next) => {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      response.status(401).json({ msg: `Authentication invalid` });
    }
    const token = authHeader.split(" ")[1];

    try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

  request.user = {
    userId: payload.userId,
    name: payload.name,
  };
    } catch (error) {}
    next();
  } catch (error) {}
};

module.exports = authenticationMidddleWare;
