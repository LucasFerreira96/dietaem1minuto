const express = require("express");
const Service = require("./Service");
const router = express.Router();

router.post("/calcDieta", (req, res) => {

    const data = req.body;

    let result = Service(data);
    res.render("resultDieta", { result: result });

});

module.exports = router;

// res.render("resultDieta", {
//     sexo: sexo,
//     peso: peso,
//     altura: altura,
//     idade: idade,
//     resultTMB: resultTMB,
//     resultTDEE: resultTDEE,
//     resultObjetivo: resultObjetivo,
//     resultMacros: resultMacros