import validateEmail from './validateEmail';

const signInOptions = {
    showEmail: true,
    showPassword: true,
}

export default function returnSignIn(email, password, options = signInOptions) {
    const { showEmail = true, showPassword = true } = options;
    let emit = { header: "signIn", data: { email: email, password: password, validate: true } };
    const validationOptionsArrayObjects = (showEmail, showPassword) => {
        if (showEmail && showPassword) {
            if (validateEmail(email) && password != null) {
                emit = { header: "signIn", data: { email: email, password: password, validate: true } };
            } else {
                emit = { header: "error", data: { error: "No tienes email o la contraseña no es correcta", validate: false } };
            }
        } else if (showEmail && !showPassword) {
            if (validateEmail(email)) {
                emit = { header: "signIn", data: { email: email, validate: true } };
            } else {
                emit = { header: "error", data: { error: "No tienes email", validate: false } };
            }
        }
        return emit;
    };

    const validationOption = validationOptionsArrayObjects(showEmail, showPassword);
    return validationOptionsArrayObjects(showEmail, showPassword);
}