const express = require("express");
const bodyParser = require("body-parser");

const app = express();


const db = require("./models");
const apiPersonal = require("./api/personal");


app.use(bodyParser.json());

app.set("view engine", "ejs");

apiPersonal(app, db);

app.get("/", function(request, response){
 
    response.render("index", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    });
});


app.listen(3000);