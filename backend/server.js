const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config()


import { sequelize } from './models/index';
import { apiPersonal } from "./api/personal";
import { apiDepartment } from "./api/department";


const port = process.env.PORT;

app.use(bodyParser.json());

app.set("view engine", "ejs");

apiPersonal(app, sequelize);
apiDepartment(app, sequelize);

sequelize.sync({ force: true }).then(result=>{
    console.log(`Your port is http://localhost:${port}/`);
  })
  .catch(err=> console.log(err));
app.listen(port);
