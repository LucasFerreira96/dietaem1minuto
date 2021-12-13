const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Importing Controller
const CalcController = require("./calc/CalcController");

//View Engine
app.set("view engine", "ejs");

//Static
app.use(express.static("public"));

//BodyParser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//using Controller
app.use("/", CalcController);

app.get("/", (req, res) => {
    
    res.render("index");

});

app.listen(8080, () =>{
   
    console.log("Server Ok");

});