import { USERS } from "./data";

const isUserRegister = userName => {
  const user = USERS.filter(user => user.name === userName);

  if (user.length > 0) {
    return true;
  }

  return false;
};

/**
 * As an account manager I can create a banking account for a user.
 * @param {String} userName
 *
 */
const createUser = userName => {
  if (isUserRegister(userName)) {
    console.log("This user already exists!");
    return;
  }

  const userAccountNumber = USERS.length + 1;

  const user = {
    name: userName,
    balance: 0,
    accountNumber: userAccountNumber
  };

  USERS.push(user);

  return user.accountNumber;
};

const listAllUsers = () => {
  console.log("USER   ACCOUNT  BALANCE");
  USERS.forEach(user => {
    console.log(`${user.name}  | ${user.accountNumber} | ${user.balance}`);
  });
};

export { createUser, listAllUsers };
