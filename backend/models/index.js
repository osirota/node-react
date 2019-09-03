const Sequelize = require("sequelize");
import { personalTable } from './personal';
import { departmentTable } from './department';

const sequelize = new Sequelize("nodejs", "root", "a1s2d3f4", {
  dialect: "mysql",
  host: "localhost",
  port: 3306
});

const personal = personalTable(sequelize, Sequelize);
const department = departmentTable(sequelize, Sequelize);

export const db = {
  sequelize,
  Sequelize,
  personal,
  department
}