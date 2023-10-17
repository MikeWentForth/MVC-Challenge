const User = require('../models/User');

const userData = [
  {
    name: "Mike",
    email: "mikesthedude@yahoo.com",
    password: "8044"
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks:true});

module.exports = seedUsers;
