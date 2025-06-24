function isPasswordValid(password) {
    if (!password || password.length < 8) {
        throw new Error("Le mot de passe doit contenir au moins 8 caractères.");
    }
    return true;
}

module.exports = { isPasswordValid };