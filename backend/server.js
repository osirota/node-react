import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import api from "./api";

require('dotenv').config()

const app = express();

const port = process.env.PORT;


app.use(cors());
app.use(cookieParser());

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
