import authService from "../services/auth.service.js";
import { StatusCodes } from "http-status-codes";
import logger from "../utils/logger.js";

async function Register(request, response) {
  // firstName,
  // email
  // password
  const { firstName, email, password } = request.body;
  const newUser = await authService.Register(firstName, email, password);

  if (newUser.status === true) logger.info(`${email} - registered Successfuly`);
  else logger.error(`${email} - failed to register`);

  return response
    .status(newUser.status == true ? StatusCodes.OK : StatusCodes.BAD_REQUEST)
    .json({
      message: newUser.message,
    });
}

async function Login(request, response) {
  const { email, password } = request.body;
  const { status, message } = await authService.Login(email, password);

  if (!status) logger.error(`Login Issue`, message);
  else logger.info(`login successfully - ${email}`);

  return response
    .status(status === false ? StatusCodes.BAD_REQUEST : StatusCodes.OK)
    .json(message);
}

const authController = {
  Register,
  Login,
};

export default authController;
