import bcrypt from "bcrypt";

async function genHashedPassword(pwd) {
  //  how many rounds of salting to be performed on the given password
  const NO_OF_ROUNDS = 1;
  // perform your hashing
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);

  const hashedPassword = await bcrypt.hash(pwd, salt);
  return hashedPassword;
}

// 2. compare password
// either true or false
async function comparePassword(payloadPassword, dbPassword) {
  return await bcrypt.compare(payloadPassword, dbPassword);
}

const authHelper = {
  genHashedPassword,
  comparePassword,
};

export default authHelper;
