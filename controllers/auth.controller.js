import authService from "../services/auth.service.js";
import { StatusCodes } from "http-status-codes";

async function Register(request, response) {
  // firstName,
  // email
  // password
  const { firstName, email, password } = request.body;
  const newUser = await authService.Register(firstName, email, password);
  // if (newUser.status == false) {
  //   return response
  //     .status(StatusCodes.BAD_REQUEST)
  //     .json({ message: newUser.message });
  // } else {
  //   return response
  //     .status(StatusCodes.OK)
  //     .json({ message: newUser.message });
  // }
  return response
    .status(newUser.status == true ? StatusCodes.OK : StatusCodes.BAD_REQUEST)
    .json({
      message: newUser.message,
    });
}

async function Login(request, response) {
  const { email, password } = request.body;
  const { status, message } = await authService.Login(email, password);
  return response
    .status(status === false ? StatusCodes.BAD_REQUEST : StatusCodes.OK)
    .json(message);
}

const authController = {
  Register,
  Login,
};

export default authController;
