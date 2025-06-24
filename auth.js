function login(username, password) {
    if (username === "admin" && password === "123456") {
        return true;
    }
    return false;
}

function validatePassword(pwd) {
    if (pwd.length < 8) {
        console.log("Password too short");
    }
}

module.exports = { login, validatePassword };