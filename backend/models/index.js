const Sequelize = require("sequelize");
const sequelize = new Sequelize("usersdb2", "root", "123456", {
  dialect: "mysql",
  host: "localhost"
});