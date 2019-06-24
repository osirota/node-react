const express = require("express");

const app = express();


app.set("view engine", "ejs");



app.get("/", function(request, response){
 
    response.render("index", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    });
});


app.listen(3000);