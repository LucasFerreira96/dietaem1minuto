const express = require("express");
const Calc = require("./Calc");
const router = express.Router();

router.post("/calcDieta", (req, res) => {
    let sexo = req.body.sexo;
    let peso = req.body.peso;
    let altura = req.body.altura;
    let idade = req.body.idade;
    let atividade = req.body.atividade;
    let objetivo = req.body.objetivo;
    let estadoAtual = req.body.estadoAtual;

    let resultTMB = Calc.calcTMB(sexo, peso, altura, idade);
    let resultTDEE = Calc.calcTDEE(resultTMB, atividade);
    let resultObjetivo = Calc.calcObjetivo(resultTDEE, objetivo);
    let resultMacros = Calc.calcMacros(resultObjetivo, peso, estadoAtual);

    res.render("resultDieta", {
        sexo: sexo,
        peso: peso,
        altura: altura,
        idade: idade,
        resultTMB: resultTMB,
        resultTDEE: resultTDEE,
        resultObjetivo: resultObjetivo,
        resultMacros: resultMacros
    });
});

module.exports = router;