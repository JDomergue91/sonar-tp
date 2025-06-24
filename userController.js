const db = require('./fakeDb');
const { isPasswordValid } = require('./passwordUtils');

function getUser(id) {
    if (id === null) return null; 
    const user = db.query('SELECT * FROM users WHERE id = ?', [id]); 
    return user;
}

async function updateUser(user) {
    isPasswordValid(user.password);
    user.password = await hashPassword(user.password);
    db.save(user);
}

module.exports = { getUser, updateUser };