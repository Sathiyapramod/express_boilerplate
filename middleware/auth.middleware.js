import jwtHelper from "../helpers/jwt.helpers.js";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

export const verifyAuthToken = (req, res, next) => {
  const bearerAuth = req.headers["authorization"];
  if (!bearerAuth)
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: ReasonPhrases.UNAUTHORIZED,
    });
  const bearerToken = bearerAuth.split(" ")[1];
  const { err, value } = jwtHelper.verifyToken(bearerToken);
  if (err) {
    return res
      .status(StatusCodes.FORBIDDEN)
      .json({ message: ReasonPhrases.FORBIDDEN });
  } else {
    req.user = value;
    next();
  }
};

export default verifyAuthToken;
