import { client } from "../index.js";
import config from "../config/index.js";
import genHashedPassword from "../helpers/auth.js";

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
    const hashedPwd = await genHashedPassword(newPassword);
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
const Login = (userEmail, userPassword) => {
     // email, password is already existing or not
     // if no , return "invalid email address"
     // yes
     // compare the userPassword and db password 
     // through the Bcrypt module
     
     // true or false 
     // false -> return "Invalid password"
      
     // true -> generate one token using the JWT 
          // and send along with response 
            
     
};

const authService = {
  Register,
  Login,
};

export default authService;
