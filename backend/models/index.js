const Sequelize = require("sequelize");
import { personalTable } from './personal';
import { departmentTable } from './department';

export const sequelize = new Sequelize("nodejs", "root", "Smegan57", {
  dialect: "mysql",
  host: "localhost",
  port: 3306
});

personalTable(sequelize, Sequelize);
departmentTable(sequelize, Sequelize);
