const db = require('../dataBase/users');

module.exports = {
  findAll: () => db,

  insertUser: (user) => db.push(user),

  findById: (userId) => db[userId],

  deleteUser: (userId) => {
    db.splice(userId, 1);
    return db;
  }
};
