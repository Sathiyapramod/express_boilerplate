import authService from "../services/auth.service.js";
import { StatusCodes } from "http-status-codes";

async function Register(request, response) {
  // firstName,
  // email
  // password
  const { firstName, email, password } = request.body;
  const newUser = await authService.Register(firstName, email, password);
  // ?? option 1
  /*
  if (newUser.status == false) {
    return response
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: newUser.message });
  } else {
    return response
      .status(StatusCodes.OK)
      .json({ message: newUser.message });
  }
  */

  // ?? option 2
  return response
    .status(newUser.status == true ? StatusCodes.OK : StatusCodes.BAD_REQUEST)
    .json({
      message: newUser.message,
    });
}

async function Login(request, response) {
  const { email, password } = request.body;
  const checkLoginStatus = await authService.Login(email, password);

  const { status, message } = checkLoginStatus;
  return response
    .status(status === true ? StatusCodes.OK : StatusCodes.BAD_REQUEST)
    .json({ ...message });
}

const authController = {
  Register,
  Login,
};

export default authController;
