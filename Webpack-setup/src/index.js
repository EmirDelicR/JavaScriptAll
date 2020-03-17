import { createUser, listAllUsers } from "./js/manager";
import { openMyAccount, addBalance, payOut } from "./js/user";

const newUserAccount = createUser("Emir");

openMyAccount(newUserAccount);
addBalance(newUserAccount, 30);
payOut(newUserAccount, 15);
listAllUsers();
