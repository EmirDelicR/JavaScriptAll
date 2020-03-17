import { USERS } from "./data";

const printUserBalance = user => {
  console.log(
    `User with account number ${user.accountNumber} have balance: ${user.balance}`
  );
};

const getUserByAccountNumber = accountNumber => {
  const user = USERS.filter(user => user.accountNumber === accountNumber);

  if (user.length === 0) {
    console.log("No user with this account!");
    return {};
  }

  return user[0];
};

const validateBalance = amount => {
  if (typeof amount != "number") {
    console.log("Please enter number!");
    return true;
  }

  if (amount < 0) {
    console.log("Please add positive balance!");
    return true;
  }

  return false;
};
/**
 * Get use account information
 * @param {Number} accountNUmber
 */
const openMyAccount = accountNumber => {
  const user = getUserByAccountNumber(accountNumber);

  if (Object.keys(user).length === 0) {
    return;
  }
  console.log(`Welcome ${user.name}`);
  console.log(`Your balance is: ${user.balance}`);
};

const addBalance = (accountNumber, amount) => {
  const user = getUserByAccountNumber(accountNumber);

  if (Object.keys(user).length === 0) {
    return;
  }

  if (validateBalance(amount)) {
    return;
  }

  user.balance += amount;

  printUserBalance(user);
};

const payOut = (accountNumber, amount) => {
  const user = getUserByAccountNumber(accountNumber);

  if (Object.keys(user).length === 0) {
    return;
  }

  if (validateBalance(amount)) {
    return;
  }

  if (user.balance < amount) {
    console.log("Insufficient funds!");
    return;
  }

  user.balance -= amount;

  printUserBalance(user);
};

export { openMyAccount, addBalance, payOut };
