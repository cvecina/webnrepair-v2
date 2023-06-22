export default function compare2Passwords(password, password2) {
  // should return false when both passwords are empty
  if (!password && !password2) {
    console.error("comparePasswords - Passwords are empty");
    return false;
  }
  if (password !== password2) {
    console.error("comparePasswords - Passwords do not match");
    return false;
  }
  console.error("comparePasswords - Passwords match");
  return true;
};