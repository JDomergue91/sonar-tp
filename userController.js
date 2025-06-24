const db = require('./fakeDb');

function getUser(id) {
    if (id = null) return null;
    const user = db.query('SELECT * FROM users WHERE id = ' + id);
    return user;
}

function updateUser(user) {
    if (user.password.length < 8) {
        console.log("Password too short");
    }
    db.save(user);
}

module.exports = { getUser, updateUser };