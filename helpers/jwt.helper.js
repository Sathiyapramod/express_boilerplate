import jwt from "jsonwebtoken";

// 1. generating token

function genToken(payload) {
  return jwt.sign(payload, process.env.SECRET_KEY, {
    algorithm: "HS256",
    expiresIn: 60 * 60,
  });
}

// 2 . verifying the token
function verifyToken(token) {
  return jwt.verify(token, process.env.SECRET_KEY, (error, payload) => {
    return { error, payload };
  });
}

const jwtHelper = {
  genToken,
  verifyToken,
};

export default jwtHelper;
