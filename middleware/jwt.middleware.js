import { StatusCodes, ReasonPhrases } from "http-status-codes";
import jwtHelpers from "../helpers/jwt.helper.js";

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  console.log(bearerHeader);
  if (bearerHeader === undefined) {
    //   headers not available
    return res.status(StatusCodes.FORBIDDEN).json({
      message: ReasonPhrases.FORBIDDEN,
    });
  } else {
    const [_, token] = bearerHeader.split(" ");
    const { error, payload } = jwtHelpers.verifyToken(token);

    if (error) {
      return res.status(StatusCodes.FORBIDDEN).json({
        message: "Token is invalid",
      });
    } else {
      req.user = payload;
      next();
    }
  }
};

export default verifyToken;
