function validatePassword(password, regex) {
  const newRegex = new RegExp(regex)
  console.error("newRegex", newRegex)
  if (!password) {
    console.error("validatePassword - Password is undefined");
    return false;
  }
  if (!newRegex.test(password)) {
    console.error("validatePassword - Password is not valid");
    return false;
  }
  console.error("validatePassword - Password is valid");
  return true;
};

export default validatePassword;

