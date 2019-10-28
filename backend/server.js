import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

import api from "./api";

require('dotenv').config()

const app = express();

const port = process.env.PORT;

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
app.use(cors());
app.use(cookieParser());
app.use(morgan('combined', { 
  stream: accessLogStream,
  skip: (req, res) => res.statusCode < 400 
}));

app.set("view engine", "ejs");


app.use('/api', api);

app.get("/", (req, res) =>
    res.render('auth', { action: "/api/auth/signup", title: 'signup' })
);

app.get("/signin", (req, res) =>
    res.render('auth', { action: "/api/auth/signin", title: 'signin' })
);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/ `);
});
