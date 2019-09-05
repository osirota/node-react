import express from 'express';
import bodyParser from 'body-parser';

import { db } from './models';
import routes from "./router";

require('dotenv').config()

const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("view engine", "ejs");

routes(app, db)

db.sequelize.sync()
  .then(result=>{
    console.log(`Your port is http://localhost:${port}/`);
  })
  .catch(err=> console.log(err));

app.listen(port);
