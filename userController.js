const db = require('./fakeDb');

function getUser(id) {
    if (id === null) return null;
    const user = db.query('SELECT * FROM users WHERE id = ?', [id]);
    return user;
}

function updateUser(user) {
    if (!isPasswordValid(user.password)) {
        throw new Error("Invalid password");
    }
    db.save(user);
}

module.exports = { getUser, updateUser };