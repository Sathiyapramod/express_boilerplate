import { client } from "../index.js";
import config from "../config/index.js";
import authHelper from "../helpers/auth.js";
import jwtHelper from "../helpers/jwt.helper.js";

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
    console.log(hashedPwd);
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
  // email, password is already existing or not
  // if no , return "invalid email address"
  // yes
  // compare the userPassword and db password
  // through the Bcrypt module
  // true or false
  // false -> return "Invalid password"
  // true -> generate one token using the JWT
  // and send along with response
  const checkValidEMail = await client
    .db(MONGO_DATABASE)
    .collection("users")
    .findOne({
      email: userEmail,
    });

  if (checkValidEMail === null) {
    // invalid email address
    return {
      status: false,
      message: "Invalid Email Address",
    };
  } else {
    const { password, email, _id } = checkValidEMail; //db password
    // going to call compare password
    const isValidPassword = await authHelper.comparePassword(
      userPassword,
      password,
    );

    if (isValidPassword === false) {
      // invalid password
      return {
        status: false,
        message: "Invalid Password",
      };
    } else {
      // proceed for gen token
      const token = jwtHelper.genToken({
        _id,
        email,
      });
      return {
        status: true,
        message: {
          token,
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
