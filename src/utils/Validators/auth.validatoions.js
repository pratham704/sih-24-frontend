export const SigninValidator = (email, password) => {
    if (!email || !password) {
        return "Please fill in all fields.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return "Please enter a valid email address.";
    }

    if (password.length < 6) {
        return "Password must be at least 6 characters long.";
    }

    return null;
};


export const RegisterValidator = (name, email, password) => {
    if (!name || !email || !password) {
        return "Please fill in all fields.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return "Please enter a valid email address.";
    }

    if (password.length < 6) {
        return "Password must be at least 6 characters long.";
    }

    return null;
};