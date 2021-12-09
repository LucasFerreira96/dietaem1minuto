const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//View Engine
app.set("view engine", "ejs");

//Static
app.use(express.static("public"));

//BodyParser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    
    res.render("index");

});

app.listen(8080, () =>{
   
    console.log("Server Ok");

});