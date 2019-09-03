const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config()


import { db } from './models/index';
import { apiPersonal } from "./api/personal";
import { apiDepartment } from "./api/department";


const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("view engine", "ejs");

apiPersonal(app, db);
apiDepartment(app, db);

db.sequelize.sync().then(result=>{
    console.log(`Your port is http://localhost:${port}/`);
  })
  .catch(err=> console.log(err));
app.listen(port);
