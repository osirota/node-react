import express from 'express';
import cors from 'cors';

import api from "./api";

require('dotenv').config()

const app = express();

const port = process.env.PORT;


app.use(cors());

app.set("view engine", "ejs");

app.use('/api', api);


app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/ `);
});
