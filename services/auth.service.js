import { client } from "../index.js";
import config from "../config/index.js";
import authHelper from "../helpers/auth.js";
import jwtHelper from "../helpers/jwt.helpers.js";

const MONGO_DATABASE = config["database"];

// register
const Register = async (userFirstName, newEmail, newPassword) => {
  // step 1: check whether the given email id is available inside the table or not
  const checkUserStatus = await client
    .db(MONGO_DATABASE)
    .collection("users")
    .findOne({
      email: newEmail,
    });

  // if yes -> return "email id already exists"
  if (checkUserStatus) {
    return {
      status: false,
      message: "Email ID already exists",
    };
  } else {
    // insert the data with Hashed password
    const hashedPwd = await authHelper.genHashedPassword(newPassword);
    await client.db(MONGO_DATABASE).collection("users").insertOne({
      firstName: userFirstName,
      email: newEmail,
      password: hashedPwd,
    });
    return {
      status: true,
      message: "New User added successfully",
    };
  }
};
// login
const Login = async (userEmail, userPassword) => {
  /**
   * what needs to be done while logging in ??
   * email, password is already existing or not
   *  if no , return "invalid email address"
   * yes, compare the userPassword and db password
   * through the Bcrypt module , check for true or false
   * false -> return "Invalid password"
   * true -> generate one token using the JWT
   * and send along with response
   */

  // finding the user is already existing
  const checkUserExists = await client
    .db(MONGO_DATABASE)
    .collection("users")
    .findOne({
      email: userEmail,
    });

  if (!checkUserExists) {
    // return invalid username
    return {
      status: false,
      message: "invalid username",
    };
  } else {
    // compare the payload password with db hashed password
    const { _id, email, password } = checkUserExists;
    const isPasswordValid = await authHelper.comparePassword(
      userPassword,
      password,
    );

    if (!isPasswordValid) {
      // password is wrong
      return {
        status: false,
        message: "invalid password",
      };
    } else {
      // password matched successfully
      const token = jwtHelper.generateToken({ _id, email });
      return {
        status: true,
        message: {
          token: token,
          _id,
        },
      };
    }
  }
};

const authService = {
  Register,
  Login,
};

export default authService;
