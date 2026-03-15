import jwt from "jsonwebtoken";

function generateToken(payload) {
  return jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: 60,
    algorithm: "HS256",
  });
}

function verifyToken(payload) {
  return jwt.verify(payload, process.env.SECRET_KEY, (err, value) => {
    return { err, value };
  });
}

const jwtHelper = { generateToken, verifyToken };

export default jwtHelper;
