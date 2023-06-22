import validatePassword from './validatePassword.js';
import compare2Passwords from './compare2Passwords.js';

const passwordResetOptions = {
  showEmail: false,
  showConfirmPassword: false,
  regex: "^dog"
}

export default function returnResetPassword(email, password, password2, options = passwordResetOptions) {
  const { showEmail = false, showConfirmPassword = false, regex = "^dog" } = options;
  console.error("pass options", options)
  const conditions = ["showEmail", "showConfirmPassword"]

  if (email == null) {
    email = "hola@gmail.com"
  }

  const optionDefault = {
    conditions: {
      showEmail: false,
      showConfirmPassword: false,
    },
    validate: false,
    emitTrue: { header: "resetPassword", data: { email: email, password: password, confirmPassword: password2, validate: true } },
    emitFalse: { header: "error", data: { error: "??? No tienes email o la contraseña no es correcta o ni son iguales", validate: false } }
  }

  const validationOptionsArrayObjects = (options) => {
    const lista = [
      {
        conditions: {
          showEmail: true,
          showConfirmPassword: true,
        },
        validate: validatePassword(password, regex) && compare2Passwords(password, password2),
        emitTrue: { header: "resetPassword", data: { email: email, password: password, confirmPassword: password2, validate: true } },
        emitFalse: { header: "error", data: { error: "No tienes email o la contraseña no es correcta o ni son iguales", validate: false } }
      },
      {
        conditions: {
          showEmail: true,
          showConfirmPassword: false,
        },
        validate: validatePassword(password, regex),
        emitTrue: { header: "resetPassword", data: { email: email, password: password, validate: true } },
        emitFalse: { header: "error", data: { error: "No tienes email o la contraseña no es correcta", validate: false } }
      },
      {
        conditions: {
          showEmail: false,
          showConfirmPassword: true,
        },
        validate: validatePassword(password, regex) && compare2Passwords(password, password2),
        emitTrue: { header: "resetPassword", data: { password: password, confirmPassword: password2, validate: true } },
        emitFalse: { header: "error", data: { error: "la contraseña no es correcta o no son iguales", validate: false } }
      },
      {
        conditions: {
          showEmail: false,
          showConfirmPassword: false,
        },
        validate: validatePassword(password, regex),
        emitTrue: { header: "resetPassword", data: { password: password, validate: true } },
        emitFalse: { header: "error", data: { error: "la contraseña no es correcta", validate: false } }
      },
    ]
  
      return lista[0]


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
  validationOptionsArrayObjects(options) ? validationOptionsArrayObjects(options) : optionDefault;
  // return optionDefault;
};