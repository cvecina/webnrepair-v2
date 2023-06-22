import validatePassword from './validatePassword.js';
import compare2Passwords from './compare2Passwords.js';
import validateEmail from './validateEmail.js';

const passwordResetOptions = {
  showEmail: false,
  showConfirmPassword: false,
  regex: "^dog"
}

export default function returnResetPassword(email, password, password2, options = passwordResetOptions) {
  const { showEmail = false, showConfirmPassword = false, showPassword = false, regex = "^dog" } = options;
  console.error("pass options", options)
  const conditions = ["showEmail", "showPassword", "showConfirmPassword"]

  if (email == null) {
    email = "hola@gmail.com"
  }

  const optionDefault = {
    conditions: {
      showEmail: false,
      showConfirmPassword: false,
      showPassword: false,
    },
    validate: false,
    emitTrue: { header: "resetPassword", data: { email: email, password: password, confirmPassword: password2, validate: true } },
    emitFalse: { header: "error", data: { error: "??? No tienes email o la contraseña no es correcta o ni son iguales", validate: false } }
  }
  let emit = { header: "resetPassword", data: { email: email, password: password, confirmPassword: password2, validate: true } };
  const validationOptionsArrayObjects = (showEmail, showConfirmPassword) => {
    if (showEmail && showPassword && showConfirmPassword) {
      if (validatePassword(password, regex) && compare2Passwords(password, password2)) {
        emit = { header: "resetPassword", data: { email: email, password: password, confirmPassword: password2, validate: true } };
      } else {
        emit = { header: "error", data: { error: "No tienes email o la contraseña no es correcta o ni son iguales", validate: false } };
      }
    } else if (showEmail && showPassword && !showConfirmPassword) {
      if (validatePassword(password, regex)) {
        emit = { header: "resetPassword", data: { email: email, password: password, validate: true } };
      } else {
        emit = { header: "error", data: { error: "No tienes email o la contraseña no es correcta", validate: false } };
      }
    } else if (!showEmail && showPassword && showConfirmPassword) {
      if (validatePassword(password, regex) && compare2Passwords(password, password2)) {
        emit = { header: "resetPassword", data: { password: password, confirmPassword: password2, validate: true } };
      } else {
        emit = { header: "error", data: { error: "la contraseña no es correcta o no son iguales", validate: false } };
      }
    } else if (showEmail && !showPassword && !showConfirmPassword) {
      if (validateEmail(email)) {
        emit = { header: "resetPassword", data: { email: email, validate: true } };
      } else {
        emit = { header: "error", data: { error: "El correo electrónico no es correcto.", validate: false } };
      }
    } else if (!showEmail && !showConfirmPassword && showPassword) {
      if (validatePassword(password, regex)) {
        emit = { header: "resetPassword", data: { password: password, validate: true } };
      } else {
        emit = { header: "error", data: { error: "la contraseña no es correcta", validate: false } };
      }
    }
    return emit;
  };

  // const validationOption = true;

  // const validationOption = validationOptionsArrayObjects.find((option) => {
  //   let results = [];
  //   conditions.forEach((condition) => {
  //     results.push(option.conditions[condition] === options[condition])
  //   })
  //   return results.every((result) => result === true)
  // });
  // console.error("validationOption", validationOption);
  // return validationOption ? validationOption : optionDefault;
  // // return optionDefault;
  const validationOption = validationOptionsArrayObjects(showEmail, showConfirmPassword);
  console.error("validationOption", validationOption);
  return validationOptionsArrayObjects(showEmail, showConfirmPassword);
};