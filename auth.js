const bcrypt = require('bcrypt');
const { isPasswordValid } = require('./passwordUtils');

const SALT_ROUNDS = 10;

async function login(username, password) {
    if (!username || !password) throw new Error("Identifiants manquants.");
    const hashedPassword = await getPasswordFromDB(username);
    return bcrypt.compare(password, hashedPassword);
}

async function hashPassword(password) {
    isPasswordValid(password);
    return bcrypt.hash(password, SALT_ROUNDS);
}

module.exports = { login, hashPassword };